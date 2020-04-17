var zones0=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");

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
  in_image = in_image.addBands(vari_calc(in_image));
  in_image = in_image.addBands(nbr_calc(in_image));
  return in_image;
}
function mask_sr(image_sr) {return image_sr.mask(image_sr.select('cfmask').eq(0))}
function LEDAPScfmaskImages(startDate,endDate,startJulian,endJulian){  return ee.ImageCollection(collection).filterDate(startDate,endDate)
  .filter(ee.Filter.calendarRange(startJulian,endJulian)).filterBounds(area).map(mask_sr).select(sensor_band_dict.get('L5'),bandNames)
  .map(bandFloat).map(addIndices)}
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
  var startJulian0 = 0;
  var endJulian0 = 90;
  var startJulian1 = 91;
  var endJulian1 = 180;
  var startJulian2 = 181;
  var endJulian2 = 270;
  var startJulian3 = 271;
  var endJulian3 = 365;
function radians(img) {return img.toFloat().multiply(Math.PI).divide(180).divide(1.5708).toFloat();}
var terrain = ee.Algorithms.Terrain(ee.Image('USGS/SRTMGL1_003'));
var slope = radians(terrain.select('slope'));
var elevation = terrain.select('elevation').divide(4000.00).float();
  var allImages0 = LEDAPScfmaskImages(startDate,endDate,startJulian0,endJulian0);
  var allImages1 = LEDAPScfmaskImages(startDate,endDate,startJulian1,endJulian1);
  var allImages2 = LEDAPScfmaskImages(startDate,endDate,startJulian2,endJulian2);
  var allImages3 = LEDAPScfmaskImages(startDate,endDate,startJulian3,endJulian3);
  var pctl=85; //range: 0-99
  var imgSeason0= maxvalcompNDVI(allImages0,area,pctl).select(['B1','B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  var imgSeason1= maxvalcompNDVI(allImages1,area,pctl).select(['B1','B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  var imgSeason2= maxvalcompNDVI(allImages2,area,pctl).select(['B1','B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  var imgSeason3= maxvalcompNDVI(allImages3,area,pctl).select(['B1','B2','B3','B4','B5','B7','NDVI','EVI','NDWI','VARI','NBR']);
  
//  print(imgSeason0,imgSeason1,imgSeason2,imgSeason3)
  return imgSeason0.addBands(imgSeason1).addBands(imgSeason2)
  .addBands(imgSeason3)
  .addBands(slope).addBands(elevation);}
  

print('Yukon');
var studyArea = zones0.filterMetadata('name','equals','Yukon');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/Yukon_1990_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'Yukon',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('NWForest');
var studyArea = zones0.filterMetadata('name','equals','NWForest');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/NWForest_1990_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'NWForest',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('CanPrairies');
var studyArea = zones0.filterMetadata('name','equals','CanPrairies');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/CanPrairies_1990_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'CanPrairies',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('CenForest');
var studyArea = zones0.filterMetadata('name','equals','CenForest');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/CenForest_1990_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'CenForest',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});



print('MidEasternForest');
var studyArea = zones0.filterMetadata('name','equals','MidEasternForest');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/MidEasternForest_1990_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'MidEasternForest',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});


print('NEasternForest');
var studyArea = zones0.filterMetadata('name','equals','NEasternForest');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/NEasternForest_1990_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'NEasternForest',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});

print('NovaScotia');
var studyArea = zones0.filterMetadata('name','equals','NovaScotia');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/NovaScotia_1990_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'NovaScotia',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});


print('NewFoundLand');
var studyArea = zones0.filterMetadata('name','equals','NewFoundLand');
studyArea=buffer1(studyArea.geometry());
var input=makeRHSEGImageSR(studyArea);
var out_img=input.multiply(256).byte();
var out_name='input/NewFoundLand_1990_InputSR';
Export.image.toAsset({
  image: out_img,
  scale: 30,
  maxPixels:9999999999900,
  description: 'NewFoundLand',
  assetId: out_name,
  region: studyArea,
  crs: 'EPSG:4326'
});
