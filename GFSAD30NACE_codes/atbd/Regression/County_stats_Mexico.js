/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var ref = ee.Image("users/images/reference/Mexico_crop_extent2017_gob_mx"),
    crop = ee.Image("users/images/mexico_cen_america_v5_asset_2010");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var counties=ee.FeatureCollection('ft:1pcs6Aumvrvt6L3oNL3-uaMdGwzeNBtDTkfLfOvxk')
print(counties)


Map.addLayer(crop,{palette:'00ff00'},'crop')
Map.addLayer(ref,{palette:'ffff00'},'ref')

var zones=ee.FeatureCollection('ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR')


var outline =ee.Image().byte().paint({
  featureCollection: counties,
  color: 1,
  width: 2
});

//Map.addLayer(outline, {palette: '000000'}, 'edges');


ref=ref.unmask().float()
crop=crop.unmask().float()

var Classif_px = crop.multiply(ee.Image.pixelArea().divide(10000))


var class_stat= Classif_px.reduceRegions({
  collection:counties,
  reducer:ee.Reducer.sum(),
  scale:90
})
.select([".*"], null, false)

print(class_stat)

Export.table.toDrive({
  collection: class_stat,
  description: 'class_stat',
  folder: 'outputStats',
  fileNamePrefix: 'Mexico_2010_nom_county_Stat_ha1',
  fileFormat: 'CSV'
});


ref=ref.float()
crop=crop.float()

var Classif_px = ref.multiply(ee.Image.pixelArea().divide(10000))


var class_stat= Classif_px.reduceRegions({
  collection:counties,
  reducer:ee.Reducer.sum(),
  scale:90
})
.select([".*"], null, false)


print(class_stat)

Export.table.toDrive({
  collection: class_stat,
  description: 'class_stat',
  folder: 'outputStats',
  fileNamePrefix: 'Mexico_2017_ref_county_Stat_ha1',
  fileFormat: 'CSV'
});