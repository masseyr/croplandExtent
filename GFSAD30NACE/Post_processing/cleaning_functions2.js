/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var image = ee.Image("users/images/CDL_composite_08_12_30m"),
    usa = /* color: #d63000 */ee.Geometry.Polygon(
        [[[-128.056640625, 38.8225909761771],
          [-125.947265625, 32.175612478499325],
          [-103.974609375, 24.686952411999155],
          [-90.439453125, 22.350075806124863],
          [-77.958984375, 24.206889622398023],
          [-76.81640625, 29.53522956294847],
          [-64.86328125, 39.842286020743394],
          [-63.017578125, 47.10004469402522],
          [-68.642578125, 48.45835188280866],
          [-77.87109375, 46.07323062540835],
          [-82.880859375, 47.15984001304432],
          [-90.87890625, 49.72447918871298],
          [-99.4921875, 49.72447918871298],
          [-116.54296875, 50.233151832472245],
          [-129.375, 49.781264058178344]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/


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

function clean_output_noise_out(image00,studyarea,nc){
  function make_binary_gt(in_img,studyarea,thresh){
    in_img=in_img.unmask().clip(studyarea)
    var image01=in_img.updateMask(in_img.gt(ee.Number(thresh)
                .subtract(1))).multiply(0).add(1)
    image01=image01.unmask().clip(studyarea)
    var image02=in_img.multiply(0)
    var out_img=in_img.multiply(image02).add(image01)
    return out_img.updateMask(out_img.eq(1))
  }
  image00=image00.clip(studyarea).byte()
  var temp_img=image00.connectedPixelCount(ee.Number(nc), true)
  temp_img=make_binary_gt(temp_img,studyarea,ee.Number(nc))
  return temp_img.updateMask(temp_img.eq(1))
}


//fill in the voids; syntax: (raster,geometry, pixelsize (m), connected pixels)
//pixel size is rounded off to nearest 30m
var out_final1=clean_output_noise_in(image,usa,16,256).reproject('EPSG:3857',null,30)

//remove noisy pixels; syntax: (raster, geometry, connected pixels)
var out_final2=clean_output_noise_out(out_final1,usa,100).reproject('EPSG:3857',null,30) 

//fill in the voids
var out_final=clean_output_noise_in(out_final2,usa,15,256).reproject('EPSG:3857',null,30)


Map.addLayer(out_final,{palette:'ffff00'},'output')

Export.image.toAsset({
  image: out_final,
  scale: 30,
  maxPixels:9999990000000,
  description: 'CDL_8-14_cleaned',
  assetId: 'CDL_8-14_cleaned',
  region: usa, 
});







