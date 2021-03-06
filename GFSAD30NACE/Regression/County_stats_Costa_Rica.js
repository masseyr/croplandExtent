/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var crop = ee.Image("users/images/mexico_cen_america_v5_asset_2010");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var counties=ee.FeatureCollection('ft:1KKQoxLXoVuWWk1K0XgmU5Y_Uuyf2Gy5dfPywj2dg')
print(counties)


Map.addLayer(crop,{palette:'00ff00'},'crop')


var zones=ee.FeatureCollection('ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR')


var outline =ee.Image().byte().paint({
  featureCollection: counties,
  color: 1,
  width: 2
});

//Map.addLayer(outline, {palette: '000000'}, 'edges');



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
  fileNamePrefix: 'CR_2010_nom_county_Stat_ha1',
  fileFormat: 'CSV'
});

