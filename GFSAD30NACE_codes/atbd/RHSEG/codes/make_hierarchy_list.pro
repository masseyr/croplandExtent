pro make_hierarchy_list

;this directory contains all the 1deg x 1deg tiles rasters
tiles_dir='/scratch/rm885/gdrive/sync/RHSegTiles/tile_dir/Heartland'

;this directory contains all the digitized field samples
samples_dir='/scratch/rm885/gdrive/sync/RHSegTiles/tile_dir/Heartland_samples'

;this is the directory which contains the RHSeg output folders for each tile
;name of the directory is the Tile ID for each raster
rhseg_dir='/scratch/rm885/gdrive/sync/RHseg/processing/RHSeg/Heartland'

tile_names=file_search(tiles_dir,'*.tif')

n_tiles=n_elements(tile_names)
max_hlevels=10
max_samp=10
list_hlevels=ulonarr(max_hlevels,n_tiles)-1

;initialize array to contain names of all samples
;and their corresponding subsets for each level
;for each tile
tile_samp_level_sub_list=strarr(max_samp,n_tiles,max_hlevels+1)

;make a list of all hierarchy levels
;extract all hierarchies
;extract subsets corresponding to sample extents from each hierarchy
for i=0,n_tiles-1 do begin
  
  in_dir=rhseg_dir+path_sep()+file_basename(tile_names[i],'.tif')
  
  namestr = strsplit(file_basename(tile_names[i],'.tif'),'_',/extract,/regex)
  nID = ulong(namestr[2])

  
  ;log file in the rhseg directory for the tile
  logfile=in_dir+path_sep()+'rhseg.log'

  ;find the number of hlevels and their corresponding objects
  objlist=list_hierarchy(logfile)
  
  nlevels=n_elements(objlist)
  
  print, 'Number of levels: '+strtrim(nlevels,2)
  
  levels=uindgen(nlevels)

  ;loop to extract all the hlevels
  ;sub-loop to extract all the sample extent subsets per hlevel from each hlevel
  openw, lun,in_dir+path_sep()+'extract_files.sh',/get_lun
  
  printf,lun,'#!/bin/bash'
  printf,lun,'#SBATCH --job-name=h'+strtrim(nID,2)
  printf,lun,'#SBATCH --time=1:00:00'
  printf,lun,'#SBATCH --nodes=1'
  printf,lun,'#SBATCH --ntasks-per-node=1'
  printf,lun,'#SBATCH --mem-per-cpu=6000'
  printf,lun,'#SBATCH --partition=all'
  printf,lun,"#SBATCH --output=hsegextract_%j.out"
  printf,lun,'#SBATCH --workdir='+in_dir
  printf,lun,'module load rhseg'
  
  for j=0, nlevels-1 do begin
    ;extract hlevel
    
    param_file=in_dir+path_sep()+'hsegextract'+strtrim(j,2)+'.param'
    openw, lun2, param_file,/get_lun
    printf,lun2,'-oparam rhseg.oparam'
    printf,lun2,'-hseg_level '+strtrim(j,2)
    printf,lun2,'-class_labels_map_ext class_labels_level_'+strtrim(j,2)+'.tif'
    free_lun,lun2
    
    print, 'param_file: ',param_file
    printf,lun,'hsegextract '+'hsegextract'+strtrim(j,2)+'.param'

  endfor
  free_lun,lun
  
  spawn, 'sbatch '+in_dir+path_sep()+'extract_files.sh'
print,'----------------------------'
endfor


print,'----------------------------'
end