/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var CDL_coll = ee.ImageCollection("USDA/NASS/CDL"),
    county = ee.FeatureCollection("ft:1J4RhPII5vTg0h57JjK9IPi7foufLpl9CvYnZngzS"),
    agrozones = ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR"),
    usa = /* color: #98ff00 */ee.Geometry.Polygon(
        [[[-127.2216796875, 44.84029065139799],
          [-126.03515625, 39.842286020743394],
          [-122.431640625, 34.23451236236984],
          [-116.982421875, 31.728167146023935],
          [-112.3681640625, 30.93992433102347],
          [-108.017578125, 30.410781790845913],
          [-103.974609375, 29.19053283229458],
          [-103.07373046875, 28.9023972285585],
          [-102.052001953125, 28.623103554529894],
          [-101.2060546875, 27.644606381943326],
          [-98.81103515625, 25.621715959845755],
          [-96.7236328125, 25.04579224030345],
          [-96.48193359375, 26.2145910237943],
          [-96.61376953125, 27.56672143040971],
          [-95.11962890625, 28.439713817027883],
          [-93.9111328125, 29.363027037783755],
          [-92.63671875, 29.286398892934763],
          [-90.32958984375, 28.825425374477224],
          [-89.560546875, 28.459033019728043],
          [-88.65966796875, 29.05616970274342],
          [-88.1103515625, 29.745301662213596],
          [-86.6162109375, 29.80251790576445],
          [-85.45166015625, 28.9023972285585],
          [-83.9794921875, 29.516110386062277],
          [-83.49609375, 28.709860843942835],
          [-82.50732421875, 25.443274612305743],
          [-80.79345703125, 24.32707654001865],
          [-79.78271484375, 25.185058883580673],
          [-79.69482421875, 27.35225293806387],
          [-80.79345703125, 30.29701788337205],
          [-80.2001953125, 31.821564514920738],
          [-74.94873046875, 34.90395296559004],
          [-75.234375, 36.89719446989036],
          [-73.10302734375, 40.1620833816462],
          [-68.57666015625, 40.896905775860006],
          [-69.3017578125, 42.924251753870685],
          [-65.8740234375, 43.99281450048992],
          [-66.73095703125, 46.01222384063239],
          [-67.30224609375, 47.82790816919327],
          [-70.07080078125, 47.724544549099676],
          [-71.3232421875, 45.78284835197677],
          [-72.92724609375, 45.42929873257378],
          [-75.56396484375, 44.99588261816546],
          [-77.16796875, 43.96119063892024],
          [-79.43115234375, 43.73935207915473],
          [-79.62890625, 42.82763863624229],
          [-81.03515625, 42.09822241118974],
          [-82.001953125, 45.27488643704894],
          [-82.79296875, 46.86019101567027],
          [-85.95703125, 47.10004469402522],
          [-87.451171875, 47.81315451752767],
          [-90, 47.15984001304432],
          [-92.548828125, 48.10743118848039],
          [-93.603515625, 49.26780455063753],
          [-97.3828125, 49.38237278700955],
          [-110.302734375, 49.38237278700955],
          [-122.607421875, 49.49667452747045],
          [-124.892578125, 49.09545216253482],
          [-125.244140625, 48.3416461723746]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
  
var legend_dict=ee.Dictionary({
crops:ee.List([1,2,3,4,5,6,10,11,12,13,14,21,22,23,24,25,26,27,28,
29,30,31,32,33,34,35,36,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
55,56,57,58,59,60,66,67,68,69,71,72,74,75,76,77,    204,205,206,207,208,
209,210,211,212,213,214,216,217,218,219,220,221,222,223,224,225,226,227,
229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,
248,249,250,254]),
pasture:ee.List([176]),
fallow:ee.List([61]),
otherhay:ee.List([37])
})

//37 other hay/non-alfalfa
// 176,  grassland/pasture
//1,2,3,4,5,6,10,11,12,13,14,21,22,23,24,25,26,27,28,
//29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,
//55,56,57,58,59,60,71,74,75,76,77, 176,   204,205,206,207, 208, 209, 210, 211, 212,213,
//214,216,217,218,219,220,221,222,223,224,225,226,227,229,230,231,232,233,234,
//235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,254

var remap_crops=ee.List(legend_dict.get('crops')).map(function(num){return ee.Number(num).multiply(0).add(1)})


var CDL_2008=ee.Image(CDL_coll.filterMetadata('system:index','equals','2008').first())
                  .remap(legend_dict.get('crops'), remap_crops)
var CDL_2009=ee.Image(CDL_coll.filterMetadata('system:index','equals','2009').first())
                  .remap(legend_dict.get('crops'), remap_crops)
var CDL_2010=ee.Image(CDL_coll.filterMetadata('system:index','equals','2010').first())
                  .remap(legend_dict.get('crops'), remap_crops)
var CDL_2011=ee.Image(CDL_coll.filterMetadata('system:index','equals','2011').first())
                  .remap(legend_dict.get('crops'), remap_crops)                 
var CDL_2012=ee.Image(CDL_coll.filterMetadata('system:index','equals','2012').first())
                  .remap(legend_dict.get('crops'), remap_crops)
var CDL_2013=ee.Image(CDL_coll.filterMetadata('system:index','equals','2013').first())
                  .remap(legend_dict.get('crops'), remap_crops)     
var CDL_2014=ee.Image(CDL_coll.filterMetadata('system:index','equals','2014').first())
                  .remap(legend_dict.get('crops'), remap_crops)     
var CDL_2015=ee.Image(CDL_coll.filterMetadata('system:index','equals','2015').first())
                  .remap(legend_dict.get('crops'), remap_crops)                     
                  
var CDL_composite=ee.ImageCollection([CDL_2008,CDL_2009,CDL_2010,
                            CDL_2011,CDL_2012, CDL_2013, CDL_2014, CDL_2015])
                             .reduce(ee.Reducer.max())
CDL_composite=CDL_composite.updateMask(CDL_composite.eq(1))

Map.addLayer(CDL_composite,{palette:'ffff00'},'CDL_08_15')

Export.image.toDrive({
  image: CDL_composite,
  description: 'CDL_composite',
  folder: 'reference_layers',
  fileNamePrefix: 'CDL_composite_08_15_30m',
  region: usa,
  crs: 'EPSG:4326',
  scale: 30,
  maxPixels: 1e13
});



