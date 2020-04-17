/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var caribbean = ee.Image("users/images/Caribbean_final_2010_v1"),
    hawaii = ee.Image("users/images/Hawaii_final_2010_v1"),
    iceland = ee.Image("users/images/Iceland_final_2010_v1"),
    mexico = ee.Image("users/images/Mexico_final_2010_v1"),
    centralAmerica = ee.Image("users/images/Cen_America_final_2010_v1"),
    usa = ee.Image("users/images/US_2010_v4_cleaned"),
    canada = ee.Image("users/images/Canada_2010_v3_cleaned"),
    studyArea = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-132.5390625, 50.064191736659104],
          [-125.859375, 33.13755119234614],
          [-109.3359375, 16.636191878397664],
          [-88.9453125, 4.214943141390651],
          [-75.5859375, 0.3515602939922709],
          [-61.5234375, 12.897489183755892],
          [-50.625, 32.54681317351514],
          [-45.703125, 51.39920565355378],
          [-66.796875, 57.51582286553883],
          [-100.1953125, 65.6582745198266],
          [-135.703125, 68.52823492039876],
          [-177.5390625, 62.2679226294176],
          [-175.78125, 49.15296965617043],
          [-148.7109375, 53.9560855309879]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var final=ee.ImageCollection([caribbean,hawaii,mexico,centralAmerica,
canada,usa]).map(function(img){return img.byte().rename('classification')})

final=final.mosaic()
Map.addLayer(final, {palette:'00ff00'},'cropland')

Export.image.toAsset({
  image: final,
  scale: 30,
  maxPixels:9990000000000,
  description: 'North_America_final_v2_asset',
  assetId: 'North_America_final_v2',
  region: studyArea, 
});

Export.image.toDrive({
  image: final,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'North_America',
  description: 'North_America_final_v2',
  fileNamePrefix: 'North_America_final_v2',
  region: studyArea, 
  crs:'EPSG:4326'
});


