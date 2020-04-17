pro get_sample_tiles, zone
  ;program to find out which tile
  ; 
  e=envi(/headless)
  print,zone
  print,''
  
  tile_dir='/scratch/rm885/gdrive/sync/RHSegTiles/tile_dir'+path_sep()+zone
  samples_dir='/scratch/rm885/gdrive/sync/RHSegTiles/all_samp'
  out_samp_dir='/scratch/rm885/gdrive/sync/RHSegTiles/samp_dir/'+zone+'_samples'
  
  ;make list of all the tiles
  tilelist=file_search(tile_dir, '*.tif')
  
  ;make list of all the samples
  samplelist=file_search(samples_dir,'*.tif')
  print, 'All Samples: '+strtrim(n_elements(samplelist),2)
  ;max number of samples per region
  n_max=10
  
  ;list for samples' IDs
  blocklist=lonarr(n_max,n_elements(tilelist))-1
  
  ;list of file names for tiles and the samples
  ;the first column is tiles
  ;the rest of the following columns are samples
  namelist=strarr(n_max+1,n_elements(tilelist))
  
  final_list=!null
  ren_list=!null
  
  bound=dblarr(4,n_elements(tilelist))
  
  print,'Building list of tile spatial reference information...'
  print,''
  for i=0, n_elements(tilelist)-1 do begin
    rast=e.openraster(tilelist[i])
          
    namelist[0,i]=file_basename(tilelist[i])
    
    ;derive spatial reference/ extent information of the tile
    ns=rast.ncolumns
    nl=rast.nrows
    spref=rast.spatialref
    ul=spref.tie_point_map
    px=spref.pixel_size
    lr=[ul[0]+px[0]*ns,ul[1]-px[1]*nl]
    
    up=ul[1]
    lw=lr[1]
    lf=ul[0]
    rt=lr[0]

    bound[*,i]=[up,lw,lf,rt]
    rast.close
  endfor
  
  ;extract bounds of the entire region
  outb=[max(bound[0,*]),min(bound[1,*]),min(bound[2,*]),max(bound[3,*])]
  outpol=[[outb[2],outb[0]],[outb[2],outb[1]],[outb[3],outb[1]],[outb[3],outb[0]],[outb[2],outb[0]]]
  print,'Checking samples...'
  print,''
  ;loop for each sample
  for j=0, n_elements(samplelist)-1 do begin
    ;derive spatial reference information of the sample
    samp=e.openraster(samplelist[j])
    ns_=samp.ncolumns
    nl_=samp.nrows
    spref_=samp.spatialref
    px_=spref_.pixel_size
    tp=spref_.tie_point_map
    cp=[tp[0]+px_[0]*ns_*0.5 , tp[1]-px_[1]*nl_*0.5]
    samp.close
    ;check if the sample is inside the region bounds
    if chk_pos(outpol,cp) eq 1 then begin
      
      ;count to check if a sample falls in at max 4 tiles
      mixtilecount=0
      ;if yes then check which tile it belongs to
      for i=0, n_elements(tilelist)-1 do begin
        testlim=reform(bound[*,i])
        testpol=[[testlim[2],testlim[0]],[testlim[2],testlim[1]],[testlim[3],testlim[1]],[testlim[3],testlim[0]],[testlim[2],testlim[0]]]
        
        ;check if a sample falls in at max 4 tiles
        if mixtilecount ge 4 then break
        
        ;check for sample inside a tile
        if chk_pos(testpol,cp) eq 1 then begin
          mixtilecount++
          print,samplelist[j]
          if mixtilecount eq 1 then begin
            final_list=[final_list,file_basename(samplelist[j])]
            ren_list=[ren_list,zone+'_samp_'+strtrim(n_elements(final_list),2)]
          endif
          
          for k=0, n_max-1 do begin
            
            ;put the identified sample at the end of the name list
            if blocklist[k,i] lt 0 then begin
              blocklist[k,i]=j
              namelist[k+1,i]=strtrim(n_elements(final_list),2)
              break
            endif
          endfor
        endif
      endfor
    endif
  endfor
 
  
  ;remove all tile names with no samples in them
  n_tiles=n_elements(reform(namelist[0,*]))
  n_samples=intarr(n_tiles)
  for i=0,n_tiles-1 do begin
    temp_list=namelist[1:-1,i]
    n_samples[i]=n_elements(temp_list[where(strlen(temp_list) gt 1,/NULL)])
  endfor
  namelist=namelist[*,where(n_samples gt 0)]
  
  ;export the samples to the correct directory
  for i=0, n_elements(final_list)-1 do begin
    temprast=e.openraster(samples_dir+path_sep()+final_list[i])
    ns=temprast.ncolumns
    nl=temprast.nrows
    tempdata=temprast.getdata()
    tempdata=uint(tempdata)*(i+1)
    outRaster=enviraster(tempdata,uri = out_samp_dir+path_sep()+ren_list[i]+'_',nbands=1,$
      interleave='bsq',spatialref=temprast.spatialref,$
      data_type=12,nrows=nl,ncolumns=ns)
    outRaster.save
    ;export as tif file
    e.ExportRaster, outRaster, out_samp_dir+path_sep()+ren_list[i]+'.tif', 'TIFF'
    outRaster.close
    temprast.close
    tempdata=!null
    file_delete,[out_samp_dir+path_sep()+ren_list[i]+'_',out_samp_dir+path_sep()+ren_list[i]+'_.hdr']

  endfor
    
  print,''
  print, 'Total samples in this region: '+strtrim(n_elements(final_list),2)
  print,''
  print,'Writing csv file...'
  print,''
  
  ;print information about the samples to file
  openw, lun,out_samp_dir+'_list.csv',/get_lun
  for i=0,n_Elements(namelist[0,*])-1 do printf,lun,strjoin(namelist[*,i],',')
  free_lun,lun
  
  ;print information about the samples
  ;for i=0,n_Elements(namelist[0,*])-1 do print,strjoin(namelist[*,i],',')

  print, 'Done!'
end


