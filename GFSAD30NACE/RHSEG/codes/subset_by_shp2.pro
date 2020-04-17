pro subset_by_shp2
compile_opt idl2
e=envi(/headless)
zones=['NPrairies','NGreatPlains','SGreatPlains','SRim','SERim','BajaSonora', $
  'NBasinRange','WRim','SBasinRange','WBasinRange','NWRim','Yukon','NWForest','CenForest',$
  'MidEasternForest','NovaScotia','WCrescent', 'MidCrescent', 'MidUplands', 'MidSeaBoard',$
'EUplands', 'ESeaBoard', 'ERim', 'ECrescent','CanPrairies','SPrairies','SWRim',$
'Mississippi','Heartland','Sonora','Chihuahua']
year='2010'


for i =0, n_elements(zones)-1 do begin
  ;define names
  shpfile='/scratch/rm885/gdrive/sync/tile_bounds/'+zones[i]+'.shp'
  rasterfile='/scratch/rm885/gdrive/sync/NorthAmericaAGZoneRHsegDataNDVI/mosaic/'+zones[i]+'_medVC_RHSEG_'+year
  out_dir='/scratch/rm885/gdrive/sync/RHseg/RHSEG_tiles/'+zones[i]
  sh_dir='/scratch/rm885/support/sh'
  idl_dir='/scratch/rm885/support/idl'
  
  file_mkdir, out_dir
  
  ;buffer of 0.1 degree
  buf=0.1
  print,'Opening Raster...'
  print, rasterfile
  rast=e.openraster(rasterfile)
  spref=rast.spatialref
  tp=spref.tie_point_map
  print,'TP',tp
  px=spref.pixel_size
  print,'PX',px
  ns=rast.ncolumns
  nl=rast.nrows
  print,'NS NL',[ns,nl]
  lp=[tp[0]+px[0]*ns,tp[1]-px[1]*nl]
  print,'LP',lp
  shpobj=obj_new('idlffshape',shpfile)
  shpobj->GetProperty, N_ENTITIES=nent
  
  for j=0, nent-1 do begin
    print,strtrim(j+1,2)
    temp_ent=shpobj->getentity(j)
    ul=[temp_ent.bounds[0],temp_ent.bounds[5]]
    lr=[temp_ent.bounds[4],temp_ent.bounds[1]]
    ;print,'UL LR', [ul,lr]
    ;print,'TP LP',[tp,lp]
    infile=rasterfile
    outfile=out_dir+path_sep()+zones[i]+'_'+year+'_'+strtrim(j+1,2)
    print, outfile
    limits=[max([ul[0]-buf,tp[0]]),max([lr[1]-buf,lp[1]]),min([lr[0]+buf,lp[0]]),min([ul[1]+buf,tp[1]])]
  
    print,'Limits: ',limits
    
    sh_file=sh_dir+path_sep()+file_basename(rasterfile)+'_'+strtrim(j+1,2)+'.sh'
    idl_file=idl_dir+path_sep()+file_basename(rasterfile)+'_'+strtrim(j+1,2)+'.pro'
    
    openw,lun, sh_file,  /get_lun
    printf,lun,"#!/bin/bash"
    printf,lun,"#SBATCH --job-name="+strmid(zones[i],0,2)+strtrim(j+1,2)
    printf,lun,"#SBATCH --time=5:59:59"
    printf,lun,"#SBATCH --cpus-per-task=2"
    printf,lun,"#SBATCH --mem-per-cpu=6000"
    printf,lun,"#SBATCH --partition=all"
    printf,lun,"#SBATCH --output=/home/rm885/slurm-jobs/"+zones[i]+'_'+strtrim(j+1,2)+"_%j.out"
    printf,lun,"module load envi/5.3"
    printf,lun,"srun idl '"+idl_file+"'"
    free_lun,lun
  
    openw, lun,idl_file,  /get_lun
    printf,lun,"compile_opt idl2"
    printf,lun,"e=envi(/headless)
    printf,lun,"infile='"+infile+"'
    printf,lun,"outfile='"+outfile+"'
    printf,lun,"rast=e.openraster(infile)"
    printf,lun,"subset=ENVISubsetRaster(rast,SPATIALREF=rast.spatialRef,SUB_RECT=["+$
      strjoin(strtrim(limits,2),',')+"])"
    printf,lun,"subset.export, outfile+'.tif','tiff'"
    printf,lun,"subset=!null"
    printf,lun,"rast.close"
    printf,lun,"exit"
    free_lun,lun
  
    spawn, 'sbatch '+sh_file
    print,'--------------------------------------------'
  endfor
  obj_destroy,shpobj
endfor
end

