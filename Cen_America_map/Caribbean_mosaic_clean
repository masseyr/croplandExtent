/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var image = ee.Image("users/images/Cuba_2010_v4"),
    image2 = ee.Image("users/images/Bahamas_2010_v1"),
    image3 = ee.Image("users/images/CarIS_2010_v2"),
    image4 = ee.Image("users/images/DR_2010_v6"),
    image5 = ee.Image("users/images/Haiti_2010_v5"),
    image6 = ee.Image("users/images/Jamaica_2010_v4"),
    image7 = ee.Image("users/images/PuertoRico_2010_v5"),
    image8 = ee.Image("users/images/DRHaiti_2010_v4"),
    studyArea = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-86.26224338724671, 22.193528467064148],
          [-84.33142860939768, 20.86511159941267],
          [-81.78627762543556, 18.32016429997408],
          [-79.45951463920738, 17.211120953233483],
          [-76.25414638393153, 16.516839747410827],
          [-70.36986685969941, 16.68468968064695],
          [-66.92279983660376, 16.895312147103162],
          [-64.85893240664183, 16.87480338897977],
          [-64.52885539943293, 14.613796138921874],
          [-61.71657795532428, 11.018061775110338],
          [-60.530563325361754, 10.889222063416799],
          [-58.53414162463088, 10.909482493499747],
          [-58.664906338969445, 12.848347980630011],
          [-59.36588742039663, 14.85579554944024],
          [-61.63233552010752, 18.8841725414466],
          [-67.03347142107242, 21.028337638193612],
          [-72.170037517634, 23.14308615585915],
          [-76.33923957436338, 27.467381847080993],
          [-79.23590514933107, 27.390273508588034],
          [-78.97353584950434, 25.027695190974576],
          [-81.7832151105905, 24.230757636102297],
          [-85.55927686877055, 22.945424147319784]]]),
    BrVgIs = /* color: #98ff00 */ee.Geometry.Polygon(
        [[[-65.390625, 18.58959249761071],
          [-65.63232421875, 18.000243838894878],
          [-64.940185546875, 17.5189580611757],
          [-63.5504150390625, 17.42464282534238],
          [-62.677001953125, 16.836706111676044],
          [-62.1441650390625, 17.25685106749581],
          [-62.523193359375, 18.089034579614683],
          [-62.7154541015625, 18.49584857586104],
          [-63.7811279296875, 18.475009613927973],
          [-63.8525390625, 18.81852680332258],
          [-64.4732666015625, 18.828925535677083],
          [-64.84130859375, 18.7561209124707]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/

var image8=image8.clip(studyArea)
var mosaic_out=ee.ImageCollection([image,image2,image3,image4,image5,image6,image7,image8]).mosaic()

mosaic_out=mosaic_out.updateMask(mosaic_out.eq(1))

function clean_output_noise_in(image00,studyarea,px,nc){
  image00=image00.unmask().focal_max({kernel: ee.Kernel.circle({
    radius: ee.Number(px),units:'meters'}),iterations: 1})
  function invert_image(in_img,studyarea){
    in_img=in_img.clip(studyarea).subtract(1).abs()
    return in_img.updateMask(in_img.eq(1))
  }
  function make_binary_gt(in_img,studyarea,thresh){
    in_img=ee.Image(in_img.unmask()).clip(studyarea)
    var image01=in_img.updateMask(in_img.gt(ee.Number(thresh)
                .subtract(1))).multiply(0).add(1)
    image01=ee.Image(image01.unmask()).clip(studyarea)
    var image02=in_img.multiply(0)
    var out_img=in_img.multiply(image02).add(image01)
    return out_img.updateMask(out_img.eq(1))
  }
  image00=ee.Image(invert_image(image00,studyarea)).byte()
  var temp_img=image00.connectedPixelCount(ee.Number(nc), true)
  temp_img=make_binary_gt(temp_img,studyarea,ee.Number(nc))
  return ee.Image(invert_image(temp_img.unmask(),studyarea))
  
}
function clean_output_noise(image){
  image=image.clip(studyArea)
  function make_binary_gt(in_img,thresh){
    in_img=in_img.unmask()
    var image1=in_img.updateMask(in_img.gt(ee.Number(thresh).subtract(1))).multiply(0).add(1)
    image1=image1.unmask()
    var image2=in_img.multiply(0)
    var out_img=in_img.multiply(image2).add(image1)
    return out_img.updateMask(out_img.eq(1))
  }
  var kernel = ee.Kernel.square({radius: 45,units:'meters'});
  var temp_img=image
  //.unmask().focal_mode({kernel: kernel, iterations: 1})
  //classified2=classified2.updateMask(classified2.eq(1))
              //.focal_max({kernel: kernel, iterations: 2});
  temp_img=temp_img.connectedPixelCount(100, true)
  return make_binary_gt(temp_img,25)
}
//var final=clean_output_noise(mosaic_out).byte().reproject('EPSG:3857',null,30)
var final=clean_output_noise_in(clean_output_noise(mosaic_out),studyArea,1,16).byte().reproject('EPSG:3857',null,30)

Map.addLayer(final, {palette:'00ff00'},'final')

Export.image.toAsset({
  image: final,
  scale: 30,
  maxPixels:9990000000000,
  description: 'Caribbean_final_v1_asset',
  assetId: 'Caribbean_final_2010_v1',
  region: studyArea, 
});

Export.image.toDrive({
  image: final,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'Caribbean_out1',
  description: 'final_v1_drive',
  fileNamePrefix: 'Caribbean_final_2010_v1',
  region: studyArea, 
});

