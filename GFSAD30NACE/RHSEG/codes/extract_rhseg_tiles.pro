function extract_RHseg_Tiles,in_dir,level
compile_opt idl2

  param_file=in_dir+path_sep()+'hsegextract'+strtrim(level,2)+'.param'
  openw, lun, param_file,/get_lun
  printf,lun,'-oparam '+in_dir+path_sep()+'rhseg.oparam'
  printf,lun,'-hseg_level '+strtrim(level,2)
  printf,lun,'-class_labels_map_ext '+in_dir+path_sep()+'class_labels_lap_level_'+strtrim(level,2)+'.tif'
  free_lun,lun
  
  spawn,'hsegextract '+param_file

  return, 'class_level_'+strtrim(level,2)+'.tif'
end