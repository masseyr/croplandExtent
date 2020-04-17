var region=ee.FeatureCollection("ft:1oi0pDWEHPepFw4oUyv18Hg3rU0X2HASOe21uWaFk");
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");

function buffer1(geometry) { return geometry.buffer(10000);}
function makeRHSEGImageSR(area){
var collection = 'LANDSAT/LT5_SR';
var bandNames = ee.List(['B1','B2','B3','B4','B5','B7']);
var sensor_band_dict =ee.Dictionary({L5 : ee.List([0,1,2,3,4,5]),L7 : ee.List([0,1,2,3,4,5])});
function bandFloat(img) { return img.toFloat().divide(10000)}

function evi_calc(img){
  return (img.select(['B4']).subtract(img.select(['B3']))).divide(img.select(['B4']).add((img.select(['B3'])).multiply(6.0)).subtract((img.select(['B1'])).multiply(7.5)).add(1.0)).select([0],['EVI']);
}
function vari_calc(img){
 return (img.select(['B3']).subtract(img.select(['B2']))).divide(img.select(['B3']).add(img.select(['B2'])).subtract(img.select(['B1']))).select([0],['VARI']);
}
function ndvi_calc(img){
  return img.normalizedDifference(['B4', 'B3']).select([0],['NDVI']);
}
function ndwi_calc(img){
  return img.normalizedDifference(['B4', 'B7']).select([0],['NDWI']);
}
function nbr_calc(img){
  return img.normalizedDifference(['B4', 'B5']).select([0],['NBR']);
}
function addIndices(in_image){
  in_image = in_image.addBands(ndvi_calc(in_image));
  in_image = in_image.addBands(evi_calc(in_image));
  in_image = in_image.addBands(ndwi_calc(in_image));
  in_image = in_image.addBands(in_image.normalizedDifference(['B2', 'B3']).select([0],['VARI']));
  in_image = in_image.addBands(in_image.normalizedDifference(['B4', 'B5']).select([0],['NBR']));
  return in_image;
}
function mask_sr(image_sr) {return image_sr.mask(image_sr.select('cfmask').eq(0))}
function LEDAPScfmaskImages(startDate,endDate,startJulian,endJulian){  return ee.ImageCollection(collection).filterDate(startDate,endDate)
  .filter(ee.Filter.calendarRange(startJulian,endJulian)).filterBounds(area).map(mask_sr).select(sensor_band_dict.get('L5'),bandNames)
  .map(bandFloat).map(addIndices)}
function maxvalcompNDVI(collection,area,percc){
  var ndvi_loc=collection.select('NDVI').toArray().clip(area).arrayLength(0).multiply(percc/100).floor().int();
  var ndvi_loc2=collection.select('NDVI').toArray().clip(area).arrayLength(0).multiply(percc/100).add(1).floor().int();
  var bandNames=ee.Image(collection.first()).bandNames();
  var nb=ee.Image(collection.first()).bandNames().length().subtract(1);
  var out_list = ee.List.sequence(0,nb).map(function(i) {
  return collection.select([bandNames.get(i)]).toArray().arraySort().clip(area).arraySlice(0,ndvi_loc,ndvi_loc2, 1)
  .arrayFlatten([['0'],['0']]).rename([bandNames.get(i)])});
  var first=out_list.slice(0,1).get(0);
function combine(img, prev){return ee.Image(prev).addBands(img)}
  return ee.Image(out_list.slice(1,nb.add(1)).iterate(combine,first));}
var startDate = ee.Date.fromYMD(2007,1,1);
var endDate = ee.Date.fromYMD(2013,12,31);
var startJulian = 0;
var endJulian = 365;
var allImages = LEDAPScfmaskImages(startDate,endDate,startJulian,endJulian);
var pctl=85;
return maxvalcompNDVI(allImages,area,pctl).select(['B1','B2','B3','B4','B5','B7']);}
function makeRHSEGImageTOA(area){
var FRINGE_COUNT_THRESHOLD = 279; 
function defringeLandsat(img){
  var defringeKernal = ee.Kernel.fixed(41, 41,
  [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
  );
  var m = img.mask().reduce(ee.Reducer.min());
  var sum = m.reduceNeighborhood(ee.Reducer.sum(), defringeKernal, 'kernel');
  sum = sum.gte(FRINGE_COUNT_THRESHOLD);
  img = img.mask(img.mask().and(sum));
  return img;
}
var bandNames = ee.List(['B1','B2','B3','B4','B5','B6','B7']);
var sensor_band_dict =ee.Dictionary({ L5 : ee.List([0,1,2,3,4,5,6]), L7 : ee.List([0,1,2,3,4,5,7])});
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
function evi_calc(img){
  return (img.select(['B4']).subtract(img.select(['B3']))).divide(img.select(['B4']).add((img.select(['B3'])).multiply(6.0)).subtract((img.select(['B1'])).multiply(7.5)).add(1.0)).select([0],['EVI']);
}
function vari_calc(img){
 return (img.select(['B3']).subtract(img.select(['B2']))).divide(img.select(['B3']).add(img.select(['B2'])).subtract(img.select(['B1']))).select([0],['VARI']);
}
function ndvi_calc(img){
  return img.normalizedDifference(['B4', 'B3']).select([0],['NDVI']);
}
function ndwi_calc(img){
  return img.normalizedDifference(['B4', 'B7']).select([0],['NDWI']);
}
function nbr_calc(img){
  return img.normalizedDifference(['B4', 'B5']).select([0],['NBR']);
}
function addIndices(in_image){
  in_image = in_image.addBands(ndvi_calc(in_image));
  in_image = in_image.addBands(evi_calc(in_image));
  in_image = in_image.addBands(ndwi_calc(in_image));
  in_image = in_image.addBands(vari_calc(in_image));
  in_image = in_image.addBands(nbr_calc(in_image));
  return in_image;
}
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
  var ndvi_loc=collection.select('EVI').toArray().clip(area)
  .arrayLength(0).multiply(percc/100).floor().int();
  var ndvi_loc2=collection.select('EVI').toArray().clip(area)
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
  var startJulian = 0;
  var endJulian = 365;
  var allImages = simpleCloudShadowFreeImages(startDate,endDate,startJulian,endJulian);
  var pctl=85; //range: 0-99
  return maxvalcompNDVI(allImages,area,pctl).select(['B1','B2','B3','B4','B5','B7']);}
print('PeurtoRico');
var studyArea = zones.filterMetadata('name','equals','PeurtoRico');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='PeurtoRico_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'PeurtoRico',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('SMadre');
var studyArea = zones.filterMetadata('name','equals','SMadre');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='SMadre_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'SMadre',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('SMexBasinRange');
var studyArea = zones.filterMetadata('name','equals','SMexBasinRange');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='SMexBasinRange_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'SMexBasinRange',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Veracruz');
var studyArea = zones.filterMetadata('name','equals','Veracruz');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Veracruz_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Veracruz',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Yucatan');
var studyArea = zones.filterMetadata('name','equals','Yucatan');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Yucatan_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Yucatan',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Bahamas');
var studyArea = zones.filterMetadata('name','equals','Bahamas');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Bahamas_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Bahamas',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Baja');
var studyArea = zones.filterMetadata('name','equals','Baja');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Baja_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Baja',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Barbados');
var studyArea = zones.filterMetadata('name','equals','Barbados');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Barbados_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Barbados',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('CarIs');
var studyArea = zones.filterMetadata('name','equals','CarIs');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='CarIs_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'CarIs',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('CenAM1');
var studyArea = zones.filterMetadata('name','equals','CenAM1');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='CenAM1_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'CenAM1',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('CenAM2');
var studyArea = zones.filterMetadata('name','equals','CenAM2');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='CenAM2_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'CenAM2',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Cuba');
var studyArea = zones.filterMetadata('name','equals','Cuba');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Cuba_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Cuba',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('DRHaiti');
var studyArea = zones.filterMetadata('name','equals','DRHaiti');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='DRHaiti_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'DRHaiti',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Freeport');
var studyArea = zones.filterMetadata('name','equals','Freeport');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Freeport_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Freeport',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Jamaica');
var studyArea = zones.filterMetadata('name','equals','Jamaica');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Jamaica_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Jamaica',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Guerrero');
var studyArea = zones.filterMetadata('name','equals','Guerrero');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Guerrero_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Guerrero',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
print('Mexico');
var studyArea = zones.filterMetadata('name','equals','Mexico');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageTOA(studyArea);
var out_img=input.multiply(256).byte();
var out_name='Mexico_2007-13_RHsegTOA';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Mexico',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
