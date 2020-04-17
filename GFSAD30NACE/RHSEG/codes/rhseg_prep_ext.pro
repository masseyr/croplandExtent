function RHseg_prep_ext, in_dir, out_dir
  compile_opt idl2
  e=envi(/headless)
  
  ;initial parameters-------------------------------
  
  ;samples
  ins=4454
  ;lines
  inl=4454
  ;bands to use
  ibands=[0,1,2]
  
  ;region size coefficients
  maxReg_coeff1=65500.0
  maxReg_coeff2=24500.0
  minReg_coeff1=6250.0
  minReg_coeff2=3750.0
  midReg_coeff1=220000.0
  midReg_coeff2=0.0
  
  ;rhseg important parameters
  spclust_wght = 0.25
  edge_threshold = 0.001
  edge_wght = 0.1
  dissim_crit = 6
  
  ;--------------------------------------------------
  
  
  
  mode = 'RHSEG'
  zone = file_basename(in_dir)
  
  filelist = file_search(in_dir,'*.tif')
  jobid=!null
  
  for i=0,n_elements(filelist)-1 do begin
    in_file = filelist[i]
    name = strsplit(file_basename(in_file,'.tif'),'_',/extract,/regex)
    nID = ulong(name[2])
    
    dirname = file_basename(in_file,'.tif')
    rhseg_dir = out_dir+path_sep()+dirname
    
    if file_test(rhseg_dir,/directory) eq 1 then continue else file_mkdir, rhseg_dir
    ;file_copy, in_file,rhseg_dir,/verbose
    
    
    out_file = rhseg_dir+path_sep()+file_basename(in_file,'.tif')+'_input.tif'
    mask_envi = rhseg_dir+path_sep()+file_basename(in_file,'.tif')+'_mask'
    ;mask_samples = rhseg_dir+path_sep()+file_basename(in_file,'.tif')+'_samples_mask'
    mask_file = rhseg_dir+path_sep()+file_basename(in_file,'.tif')+'_mask.tif'
    edge_file = rhseg_dir+path_sep()+file_basename(in_file,'.tif')+'_edge.tif'
    edge_mask_file = rhseg_dir+path_sep()+file_basename(in_file,'.tif')+'_edge_mask.tif'
    log_file = rhseg_dir+path_sep()+'init_log.log'
    
    openw, llun, log_file,/get_lun 
    
    print,in_file
    printf,llun,file_basename(in_file,'.tif')
    
    ;subset raster based on bands
    print,'Making input files..'
    img=e.openraster(in_file)
    img_sub=envisubsetraster(img,bands=ibands)
    img_sub.export, out_file, 'tiff'
    img_sub.close
    ns=img.ncolumns
    nl=img.nrows
    print,'ns, nl : '+strjoin(strtrim([ns,nl],2),' ')
    printf,llun, 'ns, nl : '+strjoin(strtrim([ns,nl],2),' ')
    
    ;image size (based on 1deg by 1 deg with an added 0.1 deg buffer on all sides)
    max_img_size=double(ins)*double(inl)
    img_size=double(nl)*double(ns)
    img_perc=img_size/max_img_size
    
    ;computing parameters
    ;change based on image size
    maxReg=ulong(maxReg_coeff1*img_perc+maxReg_coeff2) ;current max 90000
    minReg=ulong(minReg_coeff1*img_perc+minReg_coeff2) ;current max 10000
    midReg=ulong(midReg_coeff1*img_perc+midReg_coeff2) ;current max 220000
        
    print,'percent square: ',img_perc
    printf,llun,'percent square: ',img_perc
    print,'chk_nregions: ',maxReg
    print,'conv_nregions: ',minReg
    printf,llun,'chk_nregions: ',maxReg
    printf,llun,'conv_nregions: ',minReg
    
    ;computing nprocs and nb_levels
    if img_perc gt 0.5 then nb_level=3
    if img_perc le 0.5 and img_perc gt 0.25 then nb_level=2.5
    if img_perc le 0.25 and img_perc gt 0.125 then nb_level=2
    if img_perc le 0.125 then nb_levels=1.5
    nprocs=ulong(4^(nb_level-1))
    
    ;select memory with nprocs
    case nprocs of
      1: mem = 12000
      2: mem = 8000
      4: mem = 6000
      8: mem = 5000
      16: mem = 4000 
      else: mem = 6000
    endcase
    
    ;define nb_levels
    ;inb_level=ulong(floor(nb_level))
    ;onb_level=ulong(floor(nb_level))
    inb_level=ulong(3)
    onb_level=ulong(3)
    
    print,'nprocs: ',nprocs
    print,'inb_level: ',inb_level
    print,'onb_level: ',onb_level
    
    printf,llun,'nprocs: ',nprocs
    printf,llun,'inb_level: ',inb_level
    printf,llun,'onb_level: ',onb_level
    
    ;compute mask
    print,'Computing mask..'
    imgData = img.getdata( BANDS=0)
    maskData = byte(fix(imgData)*0+1)
  
    print,'Writing mask..'
    spref = img.spatialref

    ;save mask
    maskraster = enviraster(maskData,URI = mask_envi, nbands=1,interleave = 'bsq',$
    spatialref = spref, data_type=1,nrows=nl, ncolumns=ns)
    maskraster.save
    e.ExportRaster, maskraster, mask_file, 'tiff'
    maskraster.close
    ;file_delete,mask_envi
    
    
    imgData = !null
    maskData = !null
    img.close

    ;write edge and rhseg parameters
    edge_param_file=rhseg_dir+path_sep()+'edge.params'
    rhseg_param_file=rhseg_dir+path_sep()+'rhseg_run.params'
    
    ;write edge paramaters
    print,'Writing edge param file..'
    openw, lun, edge_param_file, /get_lun
    printf,lun,strjoin(['-input_image',file_basename(out_file)], ' ')
    printf,lun,strjoin(['-mask',file_basename(mask_file)],' ')
    printf,lun,'-bias_value 1000'
    printf,lun,'-edge_operation Frei-Chen'
    printf,lun,'-output_type 3'
    printf,lun,strjoin(['-output_image',file_basename(edge_file)],' ')
    printf,lun,strjoin(['-output_mask_image',file_basename(edge_mask_file)],' ')
    free_lun,lun
    
    ;write rhseg parameters
    print, 'Writing rhseg param file..'
    openw, lun, rhseg_param_file, /get_lun
    printf,lun,'-program_mode '+mode
    printf,lun, strjoin(['-input_image',file_basename(out_file)],' ')
    ;printf,lun,'-mask extent_mask.tif'
    printf,lun, strjoin(['-mask ',file_basename(mask_file)],' ')
    printf,lun, strjoin(['-edge_image',file_basename(edge_file)],' ')
    printf,lun, strjoin(['-edge_mask',file_basename(edge_mask_file)],' ')
    printf,lun,'-log rhseg.log'
    printf,lun, strjoin(['-class_labels_map',file_basename(out_file,'.tif')+'_class_labels_map.tif'],' ')
    printf,lun, strjoin(['-boundary_map',file_basename(out_file,'.tif')+'_boundary_map.tif'],' ')
    printf,lun,'-region_classes rhseg_region_classes'
    printf,lun, strjoin(['-object_labels_map',file_basename(out_file,'.tif')+'_object_labels_map.tif'],' ')
    printf,lun,'-region_objects rhseg_region_objects'
    printf,lun,'-spclust_wght '+strtrim(spclust_wght,2)
    printf,lun,'-oparam rhseg.oparam'
    printf,lun,'-edge_threshold '+strtrim(edge_threshold,2)
    printf,lun,'-edge_wght '+strtrim(edge_wght,2)
    printf,lun,'-region_sum 1'
    printf,lun,'-region_std_dev 1'
    printf,lun,'-region_boundary_npix 0'
    printf,lun,'-region_threshold 1'
    printf,lun,'-gdissim 1'
    printf,lun,'-rnb_levels 5'
    printf,lun,'-ionb_levels 10
    printf,lun,'-min_nregions '+strtrim(maxReg,2)
    printf,lun,'-chk_nregions '+strtrim(midReg,2)
    printf,lun,'-conv_nregions '+strtrim(minReg,2)
    printf,lun,'-min_npixels 25'
    printf,lun,'-dissim_crit '+strtrim(dissim_crit,2)
    printf,lun,'-debug 1'
    free_lun,lun
  
    ;write the batch script for parallel execution
    batch_script=rhseg_dir+path_sep()+file_basename(out_file,'.tif')+'_parallel.sh'
  
    print, 'Writing batch script..'
    openw,lun, batch_script, /get_lun
    printf,lun,'#!/bin/bash'
    printf,lun,'#SBATCH --job-name='+strmid(zone,0,2)+'_'+strmid(mode,0,1)+strtrim(nID,2)
    printf,lun,'#SBATCH --time=9:00:00'
    printf,lun,'#SBATCH --nodes=1'
    printf,lun,'#SBATCH --ntasks-per-node='+strtrim(nprocs,2)
    printf,lun,'#SBATCH --mem-per-cpu='+strtrim(mem,2)
    printf,lun,'#SBATCH --partition=all'
    printf,lun,'#SBATCH --workdir='+rhseg_dir
    printf,lun,''
    printf,lun,'module purge'
    printf,lun,'module load rhseg'
    printf,lun,'module load intel'
    printf,lun,''
    printf,lun,'echo Initiating Parallel RHSEG program at:'
    printf,lun,'date'
    printf,lun,'echo edge edge.params'
    printf,lun,'date'
    printf,lun,'edge edge.params'
    printf,lun,'echo mpirun -n '+strtrim(nprocs,2)+' rhseg_run rhseg_run.params '+strtrim(inb_level,2)+' '+strtrim(onb_level,2)
    printf,lun,'date'
    printf,lun,'mpirun -n '+strtrim(nprocs,2)+' rhseg_run rhseg_run.params '+strtrim(inb_level,2)+' '+strtrim(onb_level,2)

;    if n_samp gt 0 then begin
;      printf,lun,'echo Running hsegrefcomp utility'
;      printf,lun,'date'      
;      printf,lun,'hsegrefcomp hsegrefcomp_.params'
;    endif
    
    printf,lun,'echo Completed Parallel RHSEG program at:'
    printf,lun,'date'
    printf,lun,''
    printf,lun,'exit 0'
    free_lun,lun
  
    print,'Submitting RHseg batch script for execution..'
    print, batch_script
    spawn,'sbatch '+batch_script, spawn_out
    print,'----------------------------------------------------------------------'
    print,''
    print,''
    free_lun,llun
    tempjob=strsplit(spawn_out, ' ',/regex,/extract)
    jobid=[jobid,ulong(tempjob[3])]
  endfor

;making a list of un necessary files
filelist1=file_search(out_dir,'*mask.hdr')
filelist2=filelist1
for i=0, n_elements(filelist1)-1 do filelist2[i]=strsplit(filelist1[i],'.hdr',/regex,/extract)
filelist3=file_search(out_dir,'*mask_init*')

;deleting un necessary files
file_delete,[filelist1,filelist2,filelist3]

print,'Done!'


return, jobid
end
