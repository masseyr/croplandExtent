/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var canada = /* color: #98ff00 */ee.Geometry.Polygon(
        [[[-133.9453125, 52.372245568669335],
          [-126.73828125, 46.796298989977444],
          [-113.5546875, 47.156104775044035],
          [-97.734375, 47.275502165737066],
          [-89.12109375, 46.5550830224305],
          [-86.30859375, 43.957236472025635],
          [-82.08984375, 40.70979201243496],
          [-73.30078125, 43.19316262092607],
          [-68.73046875, 41.89818843043047],
          [-60.4605672265501, 44.41656774789148],
          [-52.173026199458945, 46.49962271830875],
          [-48.69140625, 53.537042913738745],
          [-64.51171875, 58.167805323999566],
          [-77.34375, 58.35274828236215],
          [-82.96875, 57.32355561685943],
          [-90.17578125, 61.68726699130697],
          [-100.546875, 63.15187444089293],
          [-124.98046875, 62.91273185001395],
          [-142.734375, 63.467691042267994],
          [-142.20703125, 59.442282456336535]]]),
    aci2009 = ee.Image("users/images/AAFCmosaic2009"),
    aci2010 = ee.Image("users/images/AAFCmosaic2010"),
    aci2011 = ee.Image("users/images/AAFCmosaic2011"),
    aci2012 = ee.Image("users/images/AAFCmosaic2012");
	aci2013 = ee.Image("users/images/AAFCmosaic2013");
	aci2014 = ee.Image("users/images/AAFCmosaic2014");
	aci2015 = ee.Image("users/images/AAFCmosaic2015");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
//remap AAFC ACI
var legend_dict=ee.Dictionary({
crops:ee.List([132,133,134,135,136,137,138,139,
140,141,145,146,147,148,149,150,151,152,153,154,
155,156,157,158,160,162,167,174,175,176,177,178,
179,180,181,182,183,184,185,186,187,188,189,190,
191,192,193,194,195,196,197,198,199]),
pasture:ee.List([122]),
fallow:ee.List([131]),
otherhay:ee.List([110])
})

var remap_crops=ee.List(legend_dict.get('crops'))
                  .map(function(num)
                  {return ee.Number(num)
                  .multiply(0).add(1)})
var ACI_2009=ee.Image(aci2009.remap(legend_dict.get('crops'), remap_crops))
var ACI_2010=ee.Image(aci2010.remap(legend_dict.get('crops'), remap_crops))
var ACI_2011=ee.Image(aci2011.remap(legend_dict.get('crops'), remap_crops))
var ACI_2012=ee.Image(aci2012.remap(legend_dict.get('crops'), remap_crops))
var ACI_2013=ee.Image(aci2013.remap(legend_dict.get('crops'), remap_crops))
var ACI_2014=ee.Image(aci2014.remap(legend_dict.get('crops'), remap_crops))
var ACI_2015=ee.Image(aci2015.remap(legend_dict.get('crops'), remap_crops))

var ACI_composite=ee.ImageCollection([ACI_2009,ACI_2010,
                                      ACI_2011,ACI_2012,
									  ACI_2013,ACI_2014,
									  ACI_2015])
                                .reduce(ee.Reducer.max())
ACI_composite=ACI_composite.updateMask(ACI_composite.eq(1))

Map.addLayer(ACI_composite,{palette:'ffff00'},'ACI_composite')

Export.image.toAsset({
  image: ACI_composite,
  scale: 30,
  maxPixels:1e13,
  description: 'ACI_composite',
  assetId: 'ACI_composite_2009_15_30m',
  region: canada, 
});

Export.image.toDrive({
  image: ACI_composite,
  description: 'ACI_composite',
  folder: 'reference_layers',
  fileNamePrefix: 'ACI_composite_2009_15_30m',
  region: canada,
  crs: 'EPSG:4326',
  scale: 30,
  maxPixels: 1e13
});

