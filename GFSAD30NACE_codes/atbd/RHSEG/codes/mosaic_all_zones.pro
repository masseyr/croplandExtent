pro mosaic_all_zones
compile_opt idl2
e=envi(/headless)
zones=['NPrairies','NGreatPlains','SGreatPlains','SRim','SERim','BajaSonora', $
  'NBasinRange','WRim','SBasinRange','WBasinRange','NWRim','Yukon','NWForest','CenForest',$
  'MidEasternForest','NovaScotia','WCrescent', 'MidCrescent', 'MidUplands', 'MidSeaBoard',$
'EUplands', 'ESeaBoard', 'ERim', 'ECrescent','CanPrairies','SPrairies','SWRim',$
'Mississippi','Heartland','Sonora','Chihuahua']

year='2010'
version='8'
file_ender='*object_labels_map_merged_obj_v'+version+'_.tif'
rasterdir='/scratch/rm885/gdrive/sync/RHseg/processing/RHSeg/'
outdir='/scratch/rm885/gdrive/sync/RHseg/mosaic/byregion/'
sh_dir='/scratch/rm885/support/sh'
idl_dir='/scratch/rm885/support/idl'

for i =0, n_elements(zones)-1 do begin

  filedir=rasterdir+zones[i]
  outfile=outdir+zones[i]+'_'+year+'_v'+version
  
  mosaic_sh_file=sh_dir+path_sep()+file_basename(outfile)+'_mosaic.sh'
  mosaic_idl_file=idl_dir+path_sep()+file_basename(outfile)+'_mosaic.pro'
  
  openw,lun, mosaic_sh_file,  /get_lun
  printf,lun,"#!/bin/bash"
  printf,lun,"#SBATCH --job-name=m_"+strmid(zones[i],0,2)+'_v'+version
  printf,lun,"#SBATCH --time=5:59:59"
  printf,lun,"#SBATCH --cpus-per-task=6"
  printf,lun,"#SBATCH --mem-per-cpu=6000"
  printf,lun,"#SBATCH --partition=all"
  printf,lun,"#SBATCH --output=/home/rm885/slurm-jobs/mosaic_"+zones[i]+"_%j.out"
  printf,lun,"module load envi/5.3"
  printf,lun,"srun idl '"+mosaic_idl_file+"'"
  free_lun,lun
  
  openw, lun,mosaic_idl_file,  /get_lun
  printf,lun,"compile_opt idl2"
  printf,lun,"infilelist=file_search('"+filedir+"','"+file_ender+"')"
  printf,lun,"outfile='"+outfile+"'
  printf,lun,"mosaic_geo_files3,infilelist,outfile,'ENVI'"
  printf,lun,"envi_tiff, outfile, outfile+'_.tif'"
  printf,lun,"spawn, 'gdal_translate -of GTiff -co TILED=YES -co COMPRESS=LZW -ot byte '+outfile+'_.tif'+' '+outfile+'_LZW.tif'"
  printf,lun,"exit"
  free_lun,lun
  
  spawn, 'sbatch '+mosaic_sh_file
endfor
end

