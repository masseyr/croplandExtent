/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var image2 = ee.Image("users/images/CenForest_2010"),
    image4 = ee.Image("users/images/NEasternForest_2010"),
    image5 = ee.Image("users/images/NewFoundLand_2010"),
    image7 = ee.Image("users/images/Yukon_2010"),
    Canada = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-137.63671875, 59.085738569819505],
          [-134.82421875, 54.470037612805754],
          [-131.66015625, 50.401515322782366],
          [-126.298828125, 48.28319289548349],
          [-122.958984375, 47.931066347509784],
          [-118.828125, 48.45835188280866],
          [-103.623046875, 48.3416461723746],
          [-96.85546875, 48.63290858589533],
          [-92.63671875, 47.87214396888731],
          [-88.9453125, 47.694974341862824],
          [-86.220703125, 46.25584681848034],
          [-82.705078125, 44.08758502824518],
          [-83.935546875, 42.22851735620852],
          [-83.232421875, 41.11246878918085],
          [-80.68359375, 41.37680856570233],
          [-77.958984375, 43.004647127794435],
          [-74.70703125, 44.276671273775186],
          [-70.927734375, 44.59046718130883],
          [-69.2578125, 46.25584681848034],
          [-68.5546875, 46.55886030311719],
          [-66.97265625, 43.70759350405294],
          [-63.6328125, 42.032974332441405],
          [-58.095703125, 44.150681159780916],
          [-50.2734375, 46.55886030311719],
          [-50.185546875, 51.67255514839676],
          [-53.701171875, 54.826007999094955],
          [-58.974609375, 54.11094294272433],
          [-68.02734375, 54.521081495443596],
          [-75.146484375, 55.57834467218206],
          [-84.0234375, 56.8970039212726],
          [-95.80078125, 59.13086309725591],
          [-106.875, 59.80063426102869],
          [-121.46484375, 59.5343180010956],
          [-135.087890625, 59.712097173322924]]]),
    image = ee.Image("users/images/CanPrairies_2010"),
    image3 = ee.Image("users/images/MidEasternForest_2010"),
    image6 = ee.Image("users/images/NWForest_2010"),
    image8 = ee.Image("users/images/NovaScotia_2010");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw");


//throw('stop')
var final=ee.ImageCollection([
  image,image2,image3,image4,image5,image6,
  image7,image8]).qualityMosaic('classification')
final=final.clip(Canada)
//final=final.connectedPixelCount(2,false).eq(2)
  
////Export the classified image
Export.image.toAsset({
  image: final,
  scale: 30,
  maxPixels:9999999999990,
  description: 'Canada_2010',
  assetId: 'Canada_2010',
  region: Canada
});

Map.addLayer(final,{palette:'00ff00'},'final')
//Map.addLayer(final,{},'final')

Export.image.toDrive({
  image: final,
  scale: 30,
  maxPixels:9999999999990,
  folder: 'data/CanadaFinal',
  description: 'Canada_2010',
  fileNamePrefix: 'Canada_2010',
  region: Canada
});


