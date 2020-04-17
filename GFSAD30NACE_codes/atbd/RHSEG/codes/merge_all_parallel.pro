pro merge_all_parallel
compile_opt idl2

zone='Sonora'
year='2010'
opt=2

in_dir='/scratch/rm885/gdrive/sync/RHSegTiles/tile_dir/'+zone
rf_dir='/scratch/rm885/gdrive/sync/RHseg/RF_tiles/'+zone
rhseg_all_dir='/scratch/rm885/gdrive/sync/RHseg/processing/RHSeg/'+zone
idl_dir='/scratch/rm885/support/idl'
sh_dir='/scratch/rm885/support/sh'
mosaic_dir='/scratch/rm885/gdrive/sync/RHseg/mosaic'


filelist = file_search(in_dir,'*.tif')
print,'************************'
print,'List of files:'
print,filelist
print,'************************'
print,''
mosaic_list=!null
all_id=!null

submit_prog='/scratch/rm885/support/sh/submit_merge'+zone+'_'+year+'.sh'
openw,lunr,submit_prog,/get_lun

for i=0,n_elements(filelist)-1 do begin
    
  dirname = file_basename(filelist[i],'.tif')
  in_file = rhseg_all_dir+path_sep()+dirname+path_sep()+dirname+'_input_object_labels_map_final.tif'
  rf_file = rf_dir+path_sep()+dirname+'.tif'
  out_file = rhseg_all_dir+path_sep()+dirname+path_sep()+dirname+'_input_object_labels_map_final_merged_obj.tif'
  
  finfo1=file_info(in_file)
  file_size1=finfo1.size
  
  finfo2=file_info(rf_file)
  file_size2=finfo2.size
  
  if file_size1 eq 0 or file_size2 eq 0 then begin
    print, 'Null file: '+file_basename(in_file)
    continue
  endif
  
  merged_file= file_dirname(in_file)+path_sep()+file_basename(in_file,'.tif')+'_merged_extent_obj.tif'
  mosaic_list=[mosaic_list,file_dirname(merged_file)+path_sep()+file_basename(merged_file,'_.tif')]
  name_str=strsplit(dirname,'_',/regex,/extract)
  id=name_str[2]
  all_id=[all_id,id]
  
  if file_test(merged_file) eq 1 then begin
    print,'File exists: '+file_basename(merged_file)
    continue
  endif
  

  
  idl_prog=idl_dir+path_sep()+dirname+'.pro'
  openw,lun,idl_prog,/get_lun
  printf,lun,'e=envi(/headless)'
  printf,lun,'.compile /scratch/rm885/Mongolia/code/merge_crop_with_objects.pro'
  printf,lun,'a=merge_crop_with_objects("'+rf_file+'","'+in_file+'",'+strtrim(opt,2)+')'
  printf,lun,'exit'  
  free_lun,lun
  
  sh_prog=sh_dir+path_sep()+dirname+'.sh'
  openw,lun, sh_prog,  /get_lun
  printf,lun,"#!/bin/bash"
  printf,lun,"#SBATCH --job-name=merge"+strtrim(id,2)
  printf,lun,"#SBATCH --time=30:00"
  printf,lun,"#SBATCH --cpus-per-task=1"
  printf,lun,"#SBATCH --mem-per-cpu=6000"
  printf,lun,"#SBATCH --partition=all"
  printf,lun,"#SBATCH --output=/home/rm885/slurm-jobs/merge_"+id+"_%j.out"
  printf,lun,"module load envi/5.3"
  printf,lun,"srun idl '"+idl_prog+"'"
  free_lun,lun
  
  
  
  printf, lunr,"mg"+strtrim(id,2)+"=$(sbatch -o "+rhseg_all_dir+path_sep()+dirname+path_sep()+"mg"+strtrim(id,2)+$
  "_%j.out -e "+rhseg_all_dir+path_sep()+dirname+path_sep()+"mg"+strtrim(id,2)+$
    "_%j.out "+sh_prog+" | awk '{ print $4 }')"
  
endfor



final_out = mosaic_dir+path_sep()+zone+'_'+year+'_final_crop_extent_mosaic'+strtrim(opt,2)
job_string=strjoin("$mg"+all_id,':') ;string of all jobs submitted


mos_idl_prog=idl_dir+path_sep()+zone+'_'+year+'_final_crop_extent_mosaic.pro'
openw,lun,mos_idl_prog,/get_lun
printf,lun,'e=envi(/headless)'
printf,lun,'mosaic_geo_files3,["'+strjoin(mosaic_list,'","')+'"],"'+final_out+'"'
printf,lun,"file_delete,[mosaic_list,mosaic_list+'.hdr']"
printf,lun,'envi_tiff,"'+final_out+'","'+final_out+'_.tif"'
printf,lun,'exit'
free_lun,lun

mos_sh_prog=sh_dir+path_sep()+zone+'_'+year+'_final_crop_extent_mosaic.sh'
openw,lun, mos_sh_prog,  /get_lun
printf,lun,"#!/bin/bash"
printf,lun,"#SBATCH --job-name=mosaic"
printf,lun,"#SBATCH --time=7:00:00"
printf,lun,"#SBATCH --cpus-per-task=6"
printf,lun,"#SBATCH --mem-per-cpu=8000"
printf,lun,"#SBATCH --partition=all"
printf,lun,"module load envi/5.3"
printf,lun,"srun idl '"+mos_idl_prog+"'"
printf,lun,'gdal_translate -of GTiff -co TILED=YES -co COMPRESS=LZW -ot byte '+final_out+'_.tif'+' '+final_out+'_LZW.tif'
free_lun,lun


printf,lunr, "sbatch -o "+mosaic_dir+path_sep()+ "mos_%j.out -e "+$
mosaic_dir+path_sep()+ "mos_%j.out --dependency=afterok:"+ $
  job_string+" "+mos_sh_prog
free_lun,lunr

spawn,'sh '+submit_prog

end
