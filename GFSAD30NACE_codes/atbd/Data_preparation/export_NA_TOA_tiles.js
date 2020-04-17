var zones=ee.FeatureCollection("ft:1cLFgaLrEEdXS-x6fseg-T4h-RdugT-xnSXdWxB02");

function buffer1(geometry) { return geometry.buffer(10000);}
function makeRHSEGImageTOA(area){
var bandNames = ee.List(['B1','B2','B3','B4','B5','B6','B7']);
var sensor_band_dict =ee.Dictionary({ L5 : ee.List([0,1,2,3,4,5,6]), L7 : ee.List([0,1,2,3,4,5,6]),});
function bandFloat(img) { return img.toFloat();}
function range(start, stop, step){
  if (typeof stop=='undefined'){ stop = start;  start = 0;  }
  if (typeof step=='undefined'){ step = 1; }
  if ((step>0 && start>=stop) || (step<0 && start<=stop)){  return [];   }
  var result = [];
  for (var i=start; step>0 ? i<stop : i>stop; i+=step){ result.push(i);}
  return result;}
function rescale(img, exp, thresholds) {
  return img.expression(exp, {img: img}).subtract(thresholds[0]).divide(thresholds[1] - thresholds[0]); }
function snowScore(img){
  var score = ee.Image(1.0);
  score = score.min(rescale(img, 'img.B1', [0.1, 0.3]));
  score = score.min(rescale(img, 'img.B3 + img.B2 + img.B1', [0.2, 0.8]));
  score = score.min(rescale(img, 'img.B6', [300, 285]));
  var ndsi = img.normalizedDifference(['B2', 'B5']);
  ndsi = rescale(ndsi, 'img', [0.5, 0.7]);
  score = score.min(ndsi);
  return score.clamp(0,1)}
function waterScore(img){
  var score = ee.Image(1.0);
  var darkBands = ['B2','B3','B4','B5','B7'];//,'nir','swir1','swir2'];
  var brightBand = 'B1';
  var shadowSumBands = ['B4','B5','B7'];
  var sum = img.select(shadowSumBands).reduce(ee.Reducer.sum());
  sum = rescale(sum,'img',[0.35,0.2]).clamp(0,1);
  score = score.min(sum);
  var mean = img.select(darkBands).reduce(ee.Reducer.mean());
  var std = img.select(darkBands).reduce(ee.Reducer.stdDev());
  var z = (img.select([brightBand]).subtract(std)).divide(mean);
  z = rescale(z,'img',[0,1]).clamp(0,1);
  score = score.min(z);
  score = score.min(rescale(img, 'img.B6', [273, 275]));
  var ndsi = img.normalizedDifference(['B2', 'B5']);
  ndsi = rescale(ndsi, 'img', [0.3, 0.8]);
  score = score.min(ndsi);
  return score.clamp(0,1); }
function maskSnow(img){
  var ss = snowScore(img);
  return img.mask(img.mask().and(ss.lt(snowThresh)));}
function maskWater(img){
  var ws = waterScore(img);
  return img.mask(img.mask().and(ws.lt(waterThresh)));}
function bustClouds(img){
  var t = img;
  var cs = ee.Algorithms.Landsat.simpleCloudScore(img).select('cloud');
  var out = img.mask(img.mask().and(cs.lt(cloudThresh)));
  return out.copyProperties(t);}
function fillEmptyCollections(inCollection,dummyImage){
  var dummyCollection = ee.ImageCollection([dummyImage.mask(ee.Image(0))]);
  var imageCount = inCollection.toList(1).length();
  return ee.ImageCollection(ee.Algorithms.If(imageCount.gt(0),inCollection,dummyCollection));}
function addIndices(in_image){
  return in_image.addBands(in_image.normalizedDifference(['B4', 'B3']).select([0],['NDVI']));}
function simpleTDOM(collection,zShadowThresh,zCloudThresh,maskAllDarkPixels)
  { var shadowSumBands = ['B4','B5','B7'];
  var sSName = 'shadowSum';
  var startBandNames = ee.Image(collection.first()).bandNames();
  collection = collection.map(function(img){
  var shadowSum = img.select(shadowSumBands).reduce(ee.Reducer.sum()).select([0],[sSName]);
  return img.addBands(shadowSum);});
  if(maskAllDarkPixels === true){
  collection = collection.map(function(img){ return img.mask(img.mask().and(img.select([sSName]).gt(shadowThresh)));  }); }
  var shadowStd = collection.select(sSName).reduce(ee.Reducer.stdDev());
  var shadowMean = collection.select(sSName).mean();
  collection = collection.map(function(img){
  var tShadowSum = img.select(shadowSumBands).reduce(ee.Reducer.sum()).select([0],['shadowSumT']);
  var zScore = tShadowSum.subtract(shadowMean).divide(shadowStd).select([0],['zShadow']);
  var m = zScore.gt(zShadowThresh).and(zScore.lt(zCloudThresh));
  return img.mask(img.mask().and(m)).select(startBandNames); });
  return collection;}
function simpleCloudShadowFreeImages(startDate,endDate,startJulian,endJulian){
  var l7 = ee.ImageCollection('LANDSAT/LE7_L1T_TOA')
  .filterDate(startDate,endDate)
  .filter(ee.Filter.calendarRange(startJulian,endJulian))
  .filterBounds(area)
  .map(bustClouds)
  .select(sensor_band_dict.get('L7'),bandNames);
  var l5 = ee.ImageCollection('LANDSAT/LT5_L1T_TOA')
  .filterDate(startDate,endDate)
  .filter(ee.Filter.calendarRange(startJulian,endJulian))
  .filterBounds(area)
  .map(bustClouds)
  .select(sensor_band_dict.get('L5'),bandNames);
  var ls = ee.ImageCollection(l5.merge(l7));
  if(shouldMaskSnow === true){  ls = ls.map(maskSnow); }
  if(shouldMaskWater === true){  ls = ls.map(maskWater); }
  if(runTDOM === true){ ls =simpleTDOM(ls,zShadowThresh,zCloudThresh,maskAllDarkPixels); }
 ls = ls.map(addIndices);
  return ls;}
var cloudThresh = 20;
var runTDOM = true;
var runDefringe = true;
var fringeCountThreshold = 279;
var maskAllDarkPixels = true;
var shadowThresh = 0.12;
var zShadowThresh = -0.7;
var zCloudThresh = 3;
var shouldMaskSnow = false;
var shouldMaskWater = true;
var waterThresh = 0.05;
var snowThresh = 0.05;
var crs = 'EPSG:4326';
var outNoData = 0;
function maxvalcompNDVI(collection,area,percc){
  var ndvi_loc=collection.select('NDVI').toArray().clip(area)
  .arrayLength(0).multiply(percc/100).floor().int();
  var ndvi_loc2=collection.select('NDVI').toArray().clip(area)
  .arrayLength(0).multiply(percc/100).add(1).floor().int();
  var bandNames=ee.Image(collection.first()).bandNames();
  var nb=ee.Image(collection.first()).bandNames().length().subtract(1);
  var out_list = ee.List.sequence(0,nb).map(function(i) {
  return collection.select([bandNames.get(i)])
  .toArray().arraySort().clip(area)
  .arraySlice(0,ndvi_loc,ndvi_loc2, 1)
  .arrayFlatten([['0'],['0']]).rename([bandNames.get(i)]);});
  var first=out_list.slice(0,1).get(0);
function combine(img, prev){return ee.Image(prev).addBands(img)}
  return ee.Image(out_list.slice(1,nb.add(1)).iterate(combine,first));  }
  var startDate = ee.Date.fromYMD(2007,1,1);
  var endDate = ee.Date.fromYMD(2013,12,31);
  var startJulian1 = 0;
  var endJulian1 = 180;
  var startJulian2 = 181;
  var endJulian2 = 365;
  var allImages1 = simpleCloudShadowFreeImages(startDate,endDate,startJulian1,endJulian1);
  var allImages2 = simpleCloudShadowFreeImages(startDate,endDate,startJulian2,endJulian2);
  var pctl=85; //range: 0-99
  var compImage1 = maxvalcompNDVI(allImages1,area,pctl).select(['B1','B2','B3','B4','B5','B7']);
  var compImage2 = maxvalcompNDVI(allImages2,area,pctl).select(['B1','B2','B3','B4','B5','B7']);
  var input=compImage1.addBands(compImage2);
  return input;}
print('0');
var studyArea = zones.filterMetadata('Id','equals','0');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile0_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '0',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('1');
var studyArea = zones.filterMetadata('Id','equals','1');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile1_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '1',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('2');
var studyArea = zones.filterMetadata('Id','equals','2');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile2_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '2',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('3');
var studyArea = zones.filterMetadata('Id','equals','3');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile3_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '3',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('4');
var studyArea = zones.filterMetadata('Id','equals','4');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile4_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '4',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('5');
var studyArea = zones.filterMetadata('Id','equals','5');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile5_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '5',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('6');
var studyArea = zones.filterMetadata('Id','equals','6');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile6_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '6',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('7');
var studyArea = zones.filterMetadata('Id','equals','7');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile7_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '7',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('8');
var studyArea = zones.filterMetadata('Id','equals','8');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile8_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '8',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('9');
var studyArea = zones.filterMetadata('Id','equals','9');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile9_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '9',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('10');
var studyArea = zones.filterMetadata('Id','equals','10');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile10_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '10',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('11');
var studyArea = zones.filterMetadata('Id','equals','11');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile11_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '11',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('12');
var studyArea = zones.filterMetadata('Id','equals','12');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile12_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '12',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('13');
var studyArea = zones.filterMetadata('Id','equals','13');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile13_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '13',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('14');
var studyArea = zones.filterMetadata('Id','equals','14');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile14_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '14',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('15');
var studyArea = zones.filterMetadata('Id','equals','15');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile15_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '15',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('16');
var studyArea = zones.filterMetadata('Id','equals','16');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile16_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '16',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('17');
var studyArea = zones.filterMetadata('Id','equals','17');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile17_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '17',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('18');
var studyArea = zones.filterMetadata('Id','equals','18');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile18_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '18',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('19');
var studyArea = zones.filterMetadata('Id','equals','19');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile19_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '19',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('20');
var studyArea = zones.filterMetadata('Id','equals','20');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile20_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '20',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('21');
var studyArea = zones.filterMetadata('Id','equals','21');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile21_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '21',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('22');
var studyArea = zones.filterMetadata('Id','equals','22');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile22_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '22',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('23');
var studyArea = zones.filterMetadata('Id','equals','23');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile23_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '23',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('24');
var studyArea = zones.filterMetadata('Id','equals','24');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile24_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '24',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('25');
var studyArea = zones.filterMetadata('Id','equals','25');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile25_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '25',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('26');
var studyArea = zones.filterMetadata('Id','equals','26');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile26_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '26',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('27');
var studyArea = zones.filterMetadata('Id','equals','27');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile27_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '27',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('28');
var studyArea = zones.filterMetadata('Id','equals','28');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile28_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '28',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('29');
var studyArea = zones.filterMetadata('Id','equals','29');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile29_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '29',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('30');
var studyArea = zones.filterMetadata('Id','equals','30');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile30_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '30',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('31');
var studyArea = zones.filterMetadata('Id','equals','31');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile31_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '31',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('32');
var studyArea = zones.filterMetadata('Id','equals','32');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile32_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '32',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('33');
var studyArea = zones.filterMetadata('Id','equals','33');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile33_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '33',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('34');
var studyArea = zones.filterMetadata('Id','equals','34');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile34_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '34',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('35');
var studyArea = zones.filterMetadata('Id','equals','35');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile35_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '35',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('36');
var studyArea = zones.filterMetadata('Id','equals','36');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile36_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '36',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('37');
var studyArea = zones.filterMetadata('Id','equals','37');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile37_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '37',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('38');
var studyArea = zones.filterMetadata('Id','equals','38');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile38_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '38',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('39');
var studyArea = zones.filterMetadata('Id','equals','39');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile39_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '39',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('40');
var studyArea = zones.filterMetadata('Id','equals','40');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile40_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '40',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('41');
var studyArea = zones.filterMetadata('Id','equals','41');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile41_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '41',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('42');
var studyArea = zones.filterMetadata('Id','equals','42');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile42_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '42',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('43');
var studyArea = zones.filterMetadata('Id','equals','43');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile43_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '43',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('44');
var studyArea = zones.filterMetadata('Id','equals','44');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile44_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '44',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('45');
var studyArea = zones.filterMetadata('Id','equals','45');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile45_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '45',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('46');
var studyArea = zones.filterMetadata('Id','equals','46');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile46_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '46',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('47');
var studyArea = zones.filterMetadata('Id','equals','47');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile47_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '47',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('48');
var studyArea = zones.filterMetadata('Id','equals','48');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile48_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '48',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('49');
var studyArea = zones.filterMetadata('Id','equals','49');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile49_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '49',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('50');
var studyArea = zones.filterMetadata('Id','equals','50');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile50_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '50',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('51');
var studyArea = zones.filterMetadata('Id','equals','51');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile51_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '51',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('52');
var studyArea = zones.filterMetadata('Id','equals','52');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile52_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '52',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('53');
var studyArea = zones.filterMetadata('Id','equals','53');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile53_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '53',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('54');
var studyArea = zones.filterMetadata('Id','equals','54');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile54_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '54',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('55');
var studyArea = zones.filterMetadata('Id','equals','55');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile55_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '55',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('56');
var studyArea = zones.filterMetadata('Id','equals','56');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile56_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '56',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('57');
var studyArea = zones.filterMetadata('Id','equals','57');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile57_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '57',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('58');
var studyArea = zones.filterMetadata('Id','equals','58');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile58_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '58',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('59');
var studyArea = zones.filterMetadata('Id','equals','59');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile59_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '59',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('60');
var studyArea = zones.filterMetadata('Id','equals','60');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile60_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '60',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('61');
var studyArea = zones.filterMetadata('Id','equals','61');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile61_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '61',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('62');
var studyArea = zones.filterMetadata('Id','equals','62');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile62_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '62',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('63');
var studyArea = zones.filterMetadata('Id','equals','63');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile63_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '63',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('64');
var studyArea = zones.filterMetadata('Id','equals','64');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile64_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '64',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('65');
var studyArea = zones.filterMetadata('Id','equals','65');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile65_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '65',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('66');
var studyArea = zones.filterMetadata('Id','equals','66');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile66_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '66',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('67');
var studyArea = zones.filterMetadata('Id','equals','67');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile67_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '67',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('68');
var studyArea = zones.filterMetadata('Id','equals','68');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile68_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '68',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('69');
var studyArea = zones.filterMetadata('Id','equals','69');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile69_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '69',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('70');
var studyArea = zones.filterMetadata('Id','equals','70');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile70_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '70',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('71');
var studyArea = zones.filterMetadata('Id','equals','71');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile71_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '71',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('72');
var studyArea = zones.filterMetadata('Id','equals','72');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile72_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '72',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('73');
var studyArea = zones.filterMetadata('Id','equals','73');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile73_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '73',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('74');
var studyArea = zones.filterMetadata('Id','equals','74');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile74_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '74',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('75');
var studyArea = zones.filterMetadata('Id','equals','75');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile75_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '75',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('76');
var studyArea = zones.filterMetadata('Id','equals','76');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile76_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '76',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('77');
var studyArea = zones.filterMetadata('Id','equals','77');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile77_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '77',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('78');
var studyArea = zones.filterMetadata('Id','equals','78');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile78_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '78',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('79');
var studyArea = zones.filterMetadata('Id','equals','79');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile79_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '79',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('80');
var studyArea = zones.filterMetadata('Id','equals','80');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile80_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '80',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('81');
var studyArea = zones.filterMetadata('Id','equals','81');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile81_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '81',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('82');
var studyArea = zones.filterMetadata('Id','equals','82');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile82_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '82',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('83');
var studyArea = zones.filterMetadata('Id','equals','83');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile83_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '83',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('84');
var studyArea = zones.filterMetadata('Id','equals','84');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile84_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '84',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('85');
var studyArea = zones.filterMetadata('Id','equals','85');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile85_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '85',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('86');
var studyArea = zones.filterMetadata('Id','equals','86');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile86_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '86',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('87');
var studyArea = zones.filterMetadata('Id','equals','87');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile87_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '87',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('88');
var studyArea = zones.filterMetadata('Id','equals','88');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile88_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '88',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('89');
var studyArea = zones.filterMetadata('Id','equals','89');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile89_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '89',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('90');
var studyArea = zones.filterMetadata('Id','equals','90');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile90_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '90',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('91');
var studyArea = zones.filterMetadata('Id','equals','91');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile91_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '91',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('92');
var studyArea = zones.filterMetadata('Id','equals','92');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile92_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '92',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('93');
var studyArea = zones.filterMetadata('Id','equals','93');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile93_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '93',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('94');
var studyArea = zones.filterMetadata('Id','equals','94');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile94_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '94',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('95');
var studyArea = zones.filterMetadata('Id','equals','95');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile95_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '95',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('96');
var studyArea = zones.filterMetadata('Id','equals','96');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile96_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '96',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('97');
var studyArea = zones.filterMetadata('Id','equals','97');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile97_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '97',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('98');
var studyArea = zones.filterMetadata('Id','equals','98');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile98_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '98',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('99');
var studyArea = zones.filterMetadata('Id','equals','99');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile99_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '99',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('100');
var studyArea = zones.filterMetadata('Id','equals','100');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile100_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '100',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('101');
var studyArea = zones.filterMetadata('Id','equals','101');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile101_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '101',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('102');
var studyArea = zones.filterMetadata('Id','equals','102');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile102_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '102',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('103');
var studyArea = zones.filterMetadata('Id','equals','103');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile103_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '103',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('104');
var studyArea = zones.filterMetadata('Id','equals','104');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile104_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '104',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('105');
var studyArea = zones.filterMetadata('Id','equals','105');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile105_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '105',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('106');
var studyArea = zones.filterMetadata('Id','equals','106');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile106_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '106',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('107');
var studyArea = zones.filterMetadata('Id','equals','107');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile107_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '107',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('108');
var studyArea = zones.filterMetadata('Id','equals','108');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile108_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '108',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('109');
var studyArea = zones.filterMetadata('Id','equals','109');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile109_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '109',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('110');
var studyArea = zones.filterMetadata('Id','equals','110');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile110_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '110',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('111');
var studyArea = zones.filterMetadata('Id','equals','111');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile111_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '111',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('112');
var studyArea = zones.filterMetadata('Id','equals','112');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile112_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '112',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('113');
var studyArea = zones.filterMetadata('Id','equals','113');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile113_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '113',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('114');
var studyArea = zones.filterMetadata('Id','equals','114');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile114_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '114',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('115');
var studyArea = zones.filterMetadata('Id','equals','115');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile115_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '115',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('116');
var studyArea = zones.filterMetadata('Id','equals','116');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile116_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '116',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('117');
var studyArea = zones.filterMetadata('Id','equals','117');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile117_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '117',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('118');
var studyArea = zones.filterMetadata('Id','equals','118');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile118_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '118',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('119');
var studyArea = zones.filterMetadata('Id','equals','119');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile119_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '119',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('120');
var studyArea = zones.filterMetadata('Id','equals','120');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile120_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '120',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('121');
var studyArea = zones.filterMetadata('Id','equals','121');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile121_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '121',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('122');
var studyArea = zones.filterMetadata('Id','equals','122');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile122_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '122',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('123');
var studyArea = zones.filterMetadata('Id','equals','123');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile123_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '123',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('124');
var studyArea = zones.filterMetadata('Id','equals','124');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile124_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '124',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('125');
var studyArea = zones.filterMetadata('Id','equals','125');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile125_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '125',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('126');
var studyArea = zones.filterMetadata('Id','equals','126');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile126_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '126',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('127');
var studyArea = zones.filterMetadata('Id','equals','127');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile127_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '127',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('128');
var studyArea = zones.filterMetadata('Id','equals','128');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile128_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '128',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('129');
var studyArea = zones.filterMetadata('Id','equals','129');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile129_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '129',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('130');
var studyArea = zones.filterMetadata('Id','equals','130');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile130_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '130',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('131');
var studyArea = zones.filterMetadata('Id','equals','131');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile131_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '131',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('132');
var studyArea = zones.filterMetadata('Id','equals','132');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile132_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '132',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('133');
var studyArea = zones.filterMetadata('Id','equals','133');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile133_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '133',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('134');
var studyArea = zones.filterMetadata('Id','equals','134');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile134_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '134',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('135');
var studyArea = zones.filterMetadata('Id','equals','135');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile135_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '135',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('136');
var studyArea = zones.filterMetadata('Id','equals','136');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile136_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '136',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('137');
var studyArea = zones.filterMetadata('Id','equals','137');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile137_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '137',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('138');
var studyArea = zones.filterMetadata('Id','equals','138');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile138_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '138',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('139');
var studyArea = zones.filterMetadata('Id','equals','139');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile139_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '139',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('140');
var studyArea = zones.filterMetadata('Id','equals','140');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile140_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '140',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('141');
var studyArea = zones.filterMetadata('Id','equals','141');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile141_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '141',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('142');
var studyArea = zones.filterMetadata('Id','equals','142');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile142_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '142',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('143');
var studyArea = zones.filterMetadata('Id','equals','143');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile143_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '143',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('144');
var studyArea = zones.filterMetadata('Id','equals','144');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile144_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '144',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('145');
var studyArea = zones.filterMetadata('Id','equals','145');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile145_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '145',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('146');
var studyArea = zones.filterMetadata('Id','equals','146');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile146_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '146',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('147');
var studyArea = zones.filterMetadata('Id','equals','147');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile147_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '147',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('148');
var studyArea = zones.filterMetadata('Id','equals','148');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile148_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '148',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('149');
var studyArea = zones.filterMetadata('Id','equals','149');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile149_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '149',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('150');
var studyArea = zones.filterMetadata('Id','equals','150');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile150_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '150',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('151');
var studyArea = zones.filterMetadata('Id','equals','151');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile151_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '151',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('152');
var studyArea = zones.filterMetadata('Id','equals','152');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile152_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '152',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('153');
var studyArea = zones.filterMetadata('Id','equals','153');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile153_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '153',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('154');
var studyArea = zones.filterMetadata('Id','equals','154');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile154_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '154',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('155');
var studyArea = zones.filterMetadata('Id','equals','155');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile155_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '155',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('156');
var studyArea = zones.filterMetadata('Id','equals','156');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile156_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '156',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('157');
var studyArea = zones.filterMetadata('Id','equals','157');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile157_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '157',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('158');
var studyArea = zones.filterMetadata('Id','equals','158');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile158_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '158',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('159');
var studyArea = zones.filterMetadata('Id','equals','159');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile159_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '159',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('160');
var studyArea = zones.filterMetadata('Id','equals','160');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile160_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '160',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('161');
var studyArea = zones.filterMetadata('Id','equals','161');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile161_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '161',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('162');
var studyArea = zones.filterMetadata('Id','equals','162');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile162_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '162',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('163');
var studyArea = zones.filterMetadata('Id','equals','163');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile163_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '163',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('164');
var studyArea = zones.filterMetadata('Id','equals','164');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile164_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '164',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('165');
var studyArea = zones.filterMetadata('Id','equals','165');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile165_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '165',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('166');
var studyArea = zones.filterMetadata('Id','equals','166');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile166_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '166',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('167');
var studyArea = zones.filterMetadata('Id','equals','167');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile167_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '167',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('168');
var studyArea = zones.filterMetadata('Id','equals','168');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile168_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '168',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('169');
var studyArea = zones.filterMetadata('Id','equals','169');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile169_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '169',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('170');
var studyArea = zones.filterMetadata('Id','equals','170');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile170_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '170',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('171');
var studyArea = zones.filterMetadata('Id','equals','171');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile171_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '171',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('172');
var studyArea = zones.filterMetadata('Id','equals','172');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile172_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '172',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('173');
var studyArea = zones.filterMetadata('Id','equals','173');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile173_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '173',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('174');
var studyArea = zones.filterMetadata('Id','equals','174');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile174_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '174',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('175');
var studyArea = zones.filterMetadata('Id','equals','175');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile175_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '175',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('176');
var studyArea = zones.filterMetadata('Id','equals','176');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile176_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '176',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('177');
var studyArea = zones.filterMetadata('Id','equals','177');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile177_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '177',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('178');
var studyArea = zones.filterMetadata('Id','equals','178');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile178_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '178',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('179');
var studyArea = zones.filterMetadata('Id','equals','179');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile179_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '179',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('180');
var studyArea = zones.filterMetadata('Id','equals','180');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile180_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '180',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('181');
var studyArea = zones.filterMetadata('Id','equals','181');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile181_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '181',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('182');
var studyArea = zones.filterMetadata('Id','equals','182');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile182_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '182',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('183');
var studyArea = zones.filterMetadata('Id','equals','183');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile183_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '183',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('184');
var studyArea = zones.filterMetadata('Id','equals','184');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile184_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '184',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('185');
var studyArea = zones.filterMetadata('Id','equals','185');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile185_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '185',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('186');
var studyArea = zones.filterMetadata('Id','equals','186');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile186_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '186',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('187');
var studyArea = zones.filterMetadata('Id','equals','187');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile187_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '187',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('188');
var studyArea = zones.filterMetadata('Id','equals','188');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile188_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '188',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('189');
var studyArea = zones.filterMetadata('Id','equals','189');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile189_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '189',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('190');
var studyArea = zones.filterMetadata('Id','equals','190');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile190_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '190',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('191');
var studyArea = zones.filterMetadata('Id','equals','191');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile191_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '191',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('192');
var studyArea = zones.filterMetadata('Id','equals','192');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile192_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '192',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('193');
var studyArea = zones.filterMetadata('Id','equals','193');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile193_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '193',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('194');
var studyArea = zones.filterMetadata('Id','equals','194');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile194_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '194',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('195');
var studyArea = zones.filterMetadata('Id','equals','195');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile195_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '195',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('196');
var studyArea = zones.filterMetadata('Id','equals','196');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile196_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '196',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('197');
var studyArea = zones.filterMetadata('Id','equals','197');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile197_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '197',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('198');
var studyArea = zones.filterMetadata('Id','equals','198');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile198_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '198',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('199');
var studyArea = zones.filterMetadata('Id','equals','199');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile199_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '199',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('200');
var studyArea = zones.filterMetadata('Id','equals','200');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile200_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '200',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('201');
var studyArea = zones.filterMetadata('Id','equals','201');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile201_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '201',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('202');
var studyArea = zones.filterMetadata('Id','equals','202');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile202_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '202',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('203');
var studyArea = zones.filterMetadata('Id','equals','203');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile203_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '203',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('204');
var studyArea = zones.filterMetadata('Id','equals','204');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile204_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '204',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('205');
var studyArea = zones.filterMetadata('Id','equals','205');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile205_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '205',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('206');
var studyArea = zones.filterMetadata('Id','equals','206');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile206_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '206',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('207');
var studyArea = zones.filterMetadata('Id','equals','207');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile207_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '207',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('208');
var studyArea = zones.filterMetadata('Id','equals','208');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile208_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '208',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('209');
var studyArea = zones.filterMetadata('Id','equals','209');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile209_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '209',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('210');
var studyArea = zones.filterMetadata('Id','equals','210');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile210_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '210',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('211');
var studyArea = zones.filterMetadata('Id','equals','211');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile211_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '211',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('212');
var studyArea = zones.filterMetadata('Id','equals','212');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile212_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '212',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('213');
var studyArea = zones.filterMetadata('Id','equals','213');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile213_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '213',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('214');
var studyArea = zones.filterMetadata('Id','equals','214');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile214_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '214',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('215');
var studyArea = zones.filterMetadata('Id','equals','215');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile215_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '215',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('216');
var studyArea = zones.filterMetadata('Id','equals','216');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile216_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '216',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('217');
var studyArea = zones.filterMetadata('Id','equals','217');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile217_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '217',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('218');
var studyArea = zones.filterMetadata('Id','equals','218');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile218_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '218',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('219');
var studyArea = zones.filterMetadata('Id','equals','219');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile219_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '219',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('220');
var studyArea = zones.filterMetadata('Id','equals','220');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile220_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '220',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('221');
var studyArea = zones.filterMetadata('Id','equals','221');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile221_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '221',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('222');
var studyArea = zones.filterMetadata('Id','equals','222');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile222_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '222',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('223');
var studyArea = zones.filterMetadata('Id','equals','223');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile223_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '223',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('224');
var studyArea = zones.filterMetadata('Id','equals','224');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile224_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '224',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('225');
var studyArea = zones.filterMetadata('Id','equals','225');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile225_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '225',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('226');
var studyArea = zones.filterMetadata('Id','equals','226');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile226_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '226',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('227');
var studyArea = zones.filterMetadata('Id','equals','227');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile227_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '227',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('228');
var studyArea = zones.filterMetadata('Id','equals','228');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile228_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '228',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('229');
var studyArea = zones.filterMetadata('Id','equals','229');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile229_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '229',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('230');
var studyArea = zones.filterMetadata('Id','equals','230');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile230_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '230',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('231');
var studyArea = zones.filterMetadata('Id','equals','231');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile231_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '231',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('232');
var studyArea = zones.filterMetadata('Id','equals','232');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile232_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '232',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('233');
var studyArea = zones.filterMetadata('Id','equals','233');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile233_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '233',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('234');
var studyArea = zones.filterMetadata('Id','equals','234');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile234_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '234',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('235');
var studyArea = zones.filterMetadata('Id','equals','235');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile235_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '235',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('236');
var studyArea = zones.filterMetadata('Id','equals','236');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile236_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '236',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('237');
var studyArea = zones.filterMetadata('Id','equals','237');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile237_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '237',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('238');
var studyArea = zones.filterMetadata('Id','equals','238');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile238_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '238',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('239');
var studyArea = zones.filterMetadata('Id','equals','239');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile239_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '239',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('240');
var studyArea = zones.filterMetadata('Id','equals','240');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile240_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '240',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('241');
var studyArea = zones.filterMetadata('Id','equals','241');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile241_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '241',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('242');
var studyArea = zones.filterMetadata('Id','equals','242');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile242_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '242',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('243');
var studyArea = zones.filterMetadata('Id','equals','243');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile243_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '243',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('244');
var studyArea = zones.filterMetadata('Id','equals','244');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile244_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '244',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('245');
var studyArea = zones.filterMetadata('Id','equals','245');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile245_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '245',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('246');
var studyArea = zones.filterMetadata('Id','equals','246');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile246_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '246',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('247');
var studyArea = zones.filterMetadata('Id','equals','247');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile247_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '247',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('248');
var studyArea = zones.filterMetadata('Id','equals','248');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile248_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '248',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('249');
var studyArea = zones.filterMetadata('Id','equals','249');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile249_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '249',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('250');
var studyArea = zones.filterMetadata('Id','equals','250');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile250_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '250',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('251');
var studyArea = zones.filterMetadata('Id','equals','251');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile251_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '251',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('252');
var studyArea = zones.filterMetadata('Id','equals','252');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile252_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '252',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('253');
var studyArea = zones.filterMetadata('Id','equals','253');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile253_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '253',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('254');
var studyArea = zones.filterMetadata('Id','equals','254');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile254_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '254',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('255');
var studyArea = zones.filterMetadata('Id','equals','255');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile255_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '255',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('256');
var studyArea = zones.filterMetadata('Id','equals','256');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile256_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '256',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('257');
var studyArea = zones.filterMetadata('Id','equals','257');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile257_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '257',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('258');
var studyArea = zones.filterMetadata('Id','equals','258');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile258_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '258',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('259');
var studyArea = zones.filterMetadata('Id','equals','259');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile259_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '259',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('260');
var studyArea = zones.filterMetadata('Id','equals','260');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile260_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '260',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('261');
var studyArea = zones.filterMetadata('Id','equals','261');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile261_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '261',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('262');
var studyArea = zones.filterMetadata('Id','equals','262');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile262_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '262',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('263');
var studyArea = zones.filterMetadata('Id','equals','263');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile263_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '263',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('264');
var studyArea = zones.filterMetadata('Id','equals','264');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile264_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '264',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('265');
var studyArea = zones.filterMetadata('Id','equals','265');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile265_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '265',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('266');
var studyArea = zones.filterMetadata('Id','equals','266');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile266_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '266',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('267');
var studyArea = zones.filterMetadata('Id','equals','267');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile267_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '267',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('268');
var studyArea = zones.filterMetadata('Id','equals','268');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile268_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '268',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('269');
var studyArea = zones.filterMetadata('Id','equals','269');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile269_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '269',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('270');
var studyArea = zones.filterMetadata('Id','equals','270');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile270_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '270',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('271');
var studyArea = zones.filterMetadata('Id','equals','271');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile271_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '271',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('272');
var studyArea = zones.filterMetadata('Id','equals','272');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile272_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '272',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('273');
var studyArea = zones.filterMetadata('Id','equals','273');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile273_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '273',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('274');
var studyArea = zones.filterMetadata('Id','equals','274');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile274_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '274',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('275');
var studyArea = zones.filterMetadata('Id','equals','275');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile275_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '275',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('276');
var studyArea = zones.filterMetadata('Id','equals','276');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile276_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '276',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('277');
var studyArea = zones.filterMetadata('Id','equals','277');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile277_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '277',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('278');
var studyArea = zones.filterMetadata('Id','equals','278');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile278_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '278',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('279');
var studyArea = zones.filterMetadata('Id','equals','279');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile279_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '279',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('280');
var studyArea = zones.filterMetadata('Id','equals','280');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile280_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '280',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('281');
var studyArea = zones.filterMetadata('Id','equals','281');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile281_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '281',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('282');
var studyArea = zones.filterMetadata('Id','equals','282');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile282_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '282',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('283');
var studyArea = zones.filterMetadata('Id','equals','283');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile283_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '283',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('284');
var studyArea = zones.filterMetadata('Id','equals','284');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile284_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '284',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('285');
var studyArea = zones.filterMetadata('Id','equals','285');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile285_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '285',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('286');
var studyArea = zones.filterMetadata('Id','equals','286');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile286_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '286',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('287');
var studyArea = zones.filterMetadata('Id','equals','287');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile287_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '287',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('288');
var studyArea = zones.filterMetadata('Id','equals','288');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile288_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '288',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('289');
var studyArea = zones.filterMetadata('Id','equals','289');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile289_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '289',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('290');
var studyArea = zones.filterMetadata('Id','equals','290');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile290_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '290',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('291');
var studyArea = zones.filterMetadata('Id','equals','291');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile291_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '291',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('292');
var studyArea = zones.filterMetadata('Id','equals','292');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile292_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '292',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('293');
var studyArea = zones.filterMetadata('Id','equals','293');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile293_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '293',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('294');
var studyArea = zones.filterMetadata('Id','equals','294');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile294_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '294',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('295');
var studyArea = zones.filterMetadata('Id','equals','295');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile295_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '295',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('296');
var studyArea = zones.filterMetadata('Id','equals','296');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile296_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '296',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('297');
var studyArea = zones.filterMetadata('Id','equals','297');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile297_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '297',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('298');
var studyArea = zones.filterMetadata('Id','equals','298');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile298_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '298',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('299');
var studyArea = zones.filterMetadata('Id','equals','299');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile299_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '299',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('300');
var studyArea = zones.filterMetadata('Id','equals','300');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile300_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '300',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('301');
var studyArea = zones.filterMetadata('Id','equals','301');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile301_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '301',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('302');
var studyArea = zones.filterMetadata('Id','equals','302');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile302_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '302',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('303');
var studyArea = zones.filterMetadata('Id','equals','303');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile303_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '303',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('304');
var studyArea = zones.filterMetadata('Id','equals','304');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile304_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '304',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('305');
var studyArea = zones.filterMetadata('Id','equals','305');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile305_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '305',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('306');
var studyArea = zones.filterMetadata('Id','equals','306');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='degTile306_2007-13_RHsegTOA';
Export.image.toDrive({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  folder: 'NorthAmericaRHsegtilesData',
  description: '306',
  fileNamePrefix: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
