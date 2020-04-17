/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var hawaii = /* color: #00ffff */ee.Geometry.Polygon(
        [[[-160.323486328125, 21.662533492414674],
          [-159.6368408203125, 21.71357649998363],
          [-159.14794921875, 21.82070785387502],
          [-158.62060546875, 21.514406720030294],
          [-158.148193359375, 21.130621534363144],
          [-157.5, 21.105000275382064],
          [-157.39013671875, 20.75097714407783],
          [-156.24755859375, 20.11268153468498],
          [-156.4013671875, 19.088075584093133],
          [-155.6158447265625, 18.771115062337024],
          [-154.5391845703125, 19.38888634723281],
          [-154.632568359375, 19.777042202225964],
          [-155.3302001953125, 20.24158281954221],
          [-155.6927490234375, 20.58650982399772],
          [-156.1651611328125, 21.099875492701216],
          [-156.6925048828125, 21.233062254412793],
          [-157.412109375, 21.396819374082195],
          [-157.9010009765625, 21.795207646171395],
          [-158.6700439453125, 21.785006291915956],
          [-158.9996337890625, 22.2026634080092],
          [-159.6588134765625, 22.39579284633252],
          [-160.4498291015625, 22.01945321869661]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones0=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");

function L8_band6_mean(img){
  var L8_B6 = img.select(['B61','B62']).reduce(ee.Reducer.mean()).rename(['B6']);
  var first = img.select('B1');
  return first.addBands(img.select(['B2','B3','B4','B5']))
              .addBands(L8_B6).addBands(img.select(['B7']));}

function buffer1(geometry) { return geometry.buffer(10000);}
function makeRHSEGImageSR(area){
//var collection = 'LANDSAT/LT5_SR';
var collection = 'LANDSAT/LC8_SR';

var bandNames = ee.List(['B1','B2','B3','B4','B5','B6','B61','B62','B7']);
var sensor_band_dict =ee.Dictionary({L5 : ee.List([0,1,2,3,4,8]),
                                     L7 : ee.List([0,1,2,3,4,8]),
                                     L8 : ee.List([0,1,2,3,4,8])
});

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
  in_image = in_image.addBands(vari_calc(in_image));
  in_image = in_image.addBands(nbr_calc(in_image));
  return in_image;
}
function mask_sr(image_sr) {return image_sr.mask(image_sr.select('cfmask').eq(0))}

function LEDAPScfmaskImages(startDate,endDate,startJulian,endJulian){  
  return ee.ImageCollection(collection).filterDate(startDate,endDate)
  .filter(ee.Filter.calendarRange(startJulian,endJulian))
  .filterBounds(area)
  .map(mask_sr)
  .select(sensor_band_dict.get('L8'),bandNames)
  .map(bandFloat)
  .map(addIndices)}
  
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
  var startDate = ee.Date.fromYMD(2013,1,1);
  var endDate = ee.Date.fromYMD(2016,12,31);
  var startJulian0 = 0;
  var endJulian0 = 60;
  var startJulian1 = 61;
  var endJulian1 = 120;
  var startJulian2 = 121;
  var endJulian2 = 180;
  var startJulian3 = 181;
  var endJulian3 = 240;
  var startJulian4 = 241;
  var endJulian4 = 360;
  var startJulian5 = 361;
  var endJulian5 = 365;
function radians(img) {return img.toFloat().multiply(Math.PI).divide(180).divide(1.5708).toFloat();}
var terrain = ee.Algorithms.Terrain(ee.Image('USGS/SRTMGL1_003'));
var slope = radians(terrain.select('slope'));
var elevation = terrain.select('elevation').divide(4000.00).float();
  var allImages0 = LEDAPScfmaskImages(startDate,endDate,startJulian0,endJulian0);
  var allImages1 = LEDAPScfmaskImages(startDate,endDate,startJulian1,endJulian1);
  var allImages2 = LEDAPScfmaskImages(startDate,endDate,startJulian2,endJulian2);
  var allImages3 = LEDAPScfmaskImages(startDate,endDate,startJulian3,endJulian3);
  var allImages4 = LEDAPScfmaskImages(startDate,endDate,startJulian4,endJulian4);
  var allImages5 = LEDAPScfmaskImages(startDate,endDate,startJulian5,endJulian5);
  var pctl=85; //range: 0-99
  var imgSeason0= maxvalcompNDVI(allImages0,area,pctl).select(['B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  var imgSeason1= maxvalcompNDVI(allImages1,area,pctl).select(['B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  var imgSeason2= maxvalcompNDVI(allImages2,area,pctl).select(['B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  var imgSeason3= maxvalcompNDVI(allImages3,area,pctl).select(['B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  var imgSeason4= maxvalcompNDVI(allImages4,area,pctl).select(['B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  var imgSeason5= maxvalcompNDVI(allImages5,area,pctl).select(['B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  
//  print(imgSeason0,imgSeason1,imgSeason2,imgSeason3)
  return imgSeason0.addBands(imgSeason1).addBands(imgSeason2)
  .addBands(imgSeason3).addBands(imgSeason4).addBands(imgSeason5)
  .addBands(slope).addBands(elevation);}
  

print('Heartland');
var studyArea = zones0.filterMetadata('name','equals','Heartland');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/Heartland_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Heartland',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('NBasinRange');
var studyArea = zones0.filterMetadata('name','equals','NBasinRange');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/NBasinRange_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'NBasinRange',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('NWRim');
var studyArea = zones0.filterMetadata('name','equals','NWRim');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/NWRim_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'NWRim',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('SBasinRange');
var studyArea = zones0.filterMetadata('name','equals','SBasinRange');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/SBasinRange_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'SBasinRange',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});



print('SERim');
var studyArea = zones0.filterMetadata('name','equals','SERim');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/SERim_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'SERim',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});


print('SRim');
var studyArea = zones0.filterMetadata('name','equals','SRim');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/SRim_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'SRim',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('SWRim');
var studyArea = zones0.filterMetadata('name','equals','SWRim');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/SWRim_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'SWRim',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});


print('WBasinRange');
var studyArea = zones0.filterMetadata('name','equals','WBasinRange');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/WBasinRange_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'WBasinRange',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('WCrescent');
var studyArea = zones0.filterMetadata('name','equals','WCrescent');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/WCrescent_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'WCrescent',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('WRim');
var studyArea = zones0.filterMetadata('name','equals','WRim');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/WRim_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'WRim',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('SPrairies');
var studyArea = zones0.filterMetadata('name','equals','SPrairies');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/SPrairies_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'SPrairies',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});


print('NGreatPlains');
var studyArea = zones0.filterMetadata('name','equals','NGreatPlains');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/NGreatPlains_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'NGreatPlains',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});


print('SGreatPlains');
var studyArea = zones0.filterMetadata('name','equals','SGreatPlains');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/SGreatPlains_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'SGreatPlains',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});


print('NPrairies');
var studyArea = zones0.filterMetadata('name','equals','NPrairies');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/NPrairies_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'NPrairies',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('Mississippi');
var studyArea = zones0.filterMetadata('name','equals','Mississippi');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/Mississippi_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Mississippi',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('MidUplands');
var studyArea = zones0.filterMetadata('name','equals','MidUplands');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/MidUplands_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'MidUplands',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('ERim');
var studyArea = zones0.filterMetadata('name','equals','ERim');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/ERim_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'ERim',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('MidSeaBoard');
var studyArea = zones0.filterMetadata('name','equals','MidSeaBoard');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/MidSeaBoard_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'MidSeaBoard',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('EUplands');
var studyArea = zones0.filterMetadata('name','equals','EUplands');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/EUplands_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'EUplands',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('ESeaBoard');
var studyArea = zones0.filterMetadata('name','equals','ESeaBoard');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/ESeaBoard_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'ESeaBoard',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('ECrescent');
var studyArea = zones0.filterMetadata('name','equals','ECrescent');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/ECrescent_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'ECrescent',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('MidCrescent');
var studyArea = zones0.filterMetadata('name','equals','MidCrescent');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/MidCrescent_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'MidCrescent',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('SPrairies');
var studyArea = zones0.filterMetadata('name','equals','SPrairies');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/SPrairies_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'SPrairies',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('Hawaii');
//var studyArea = zones0.filterMetadata('name','equals','SPrairies');
var studyArea=hawaii
//studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/Hawaii_2014_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Hawaii',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

