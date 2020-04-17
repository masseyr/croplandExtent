/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var crop = ee.Image("users/images/mexico_cen_america_v5_asset_2010"),
    crop2 = ee.Image("users/images/Caribbean_final_2010_v1");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var states=ee.FeatureCollection('ft:1BOIQj7EiYxquqFVYMmQNJ6Gr1ckpeVLScGVzMZUF')
print(states)


Map.addLayer(crop,{palette:'00ff00'},'crop')
Map.addLayer(crop2,{palette:'00ff00'},'crop2')

var zones=ee.FeatureCollection('ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR')


var outline =ee.Image().byte().paint({
  featureCollection: states,
  color: 1,
  width: 2
});

//Map.addLayer(outline, {palette: '000000'}, 'edges');



crop2=crop2.unmask().float()

var Classif_px = crop2.multiply(ee.Image.pixelArea().divide(10000))


var class_stat= Classif_px.reduceRegions({
  collection:states,
  reducer:ee.Reducer.sum(),
  scale:90
})
.select([".*"], null, false)

print(class_stat)

Export.table.toDrive({
  collection: class_stat,
  description: 'class_stat',
  folder: 'outputStats',
  fileNamePrefix: 'Jamaica_2010_nom_county_Stat_ha1',
  fileFormat: 'CSV'
});

