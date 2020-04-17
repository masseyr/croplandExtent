pro merge_all
compile_opt idl2
in_dir='/scratch/rm885/Mongolia/subsets'
rf_dir='/scratch/rm885/Mongolia/RF_output_tiles'
rhseg_all_dir='/scratch/rm885/Mongolia/RHSEG'
filelist = file_search(in_dir,'*.tif')
print,filelist
mosaic_list=!null
for i=0,n_elements(filelist)-1 do begin
  dirname = file_basename(filelist[i],'.tif')
  in_file = rhseg_all_dir+path_sep()+dirname+path_sep()+dirname+'_input_object_labels_map_final.tif'
  rf_file = rf_dir+path_sep()+dirname+'.tif'
  out_file = rhseg_all_dir+path_sep()+dirname+path_sep()+dirname+'_input_object_labels_map_final_merged.tif'
  
  finfo1=file_info(in_file)
  file_size1=finfo1.size
  
  finfo2=file_info(rf_file)
  file_size2=finfo2.size
  
  if file_size1 eq 0 or file_size2 eq 0 then continue
  
  merged_file= file_dirname(in_file)+path_sep()+file_basename(in_file,'.tif')+'_merged_extent_.tif'
  mosaic_list=[mosaic_list,merged_file]
  
  if file_test(merged_file) eq 1 then begin
    print,'File exists: '+file_basename(merged_file)
    continue
  endif
    
  a=merge_crop_with_objects(rf_file,in_file,1)
  print,'Out file: '+a
endfor
final_out=  rhseg_all_dir+path_sep()+'mongolia_2014_final'
mosaic_geo_files2,mosaic_list,final_out
end
