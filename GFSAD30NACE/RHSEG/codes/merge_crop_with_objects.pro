function merge_crop_with_objects,crop_file,obj_file,opt
  ;program to merge cropland extent with RHSeg objects
  ;typically takes 20-35 seconds per tile and includes:
  ;1. selecting objects between 10 and 1000 pixel sizes
  ;2. overlay objects with crop extent
  
  e=envi(/headless)
  time=systime()
  print,'Start: ',time
  
  ;threshold for percentage of croplands per object
  thresh=0.25
  
  ;object size constraints
  min_size=9
  
  ;obj file from rhseg
  objRaster = e.OpenRaster(obj_file)
  objns=objRaster.ncolumns
  objnl=objRaster.nrows
  print, 'Object data : '+strjoin(strtrim([objns,objnl],2)," x ")
  
  objspref=objRaster.spatialref
  objmc=objspref.tie_point_map
  objpx=objspref.pixel_size
  objulx=objmc[0];+objpx[0]/2.0
  objuly=objmc[1];-objpx[1]/2.0
  objlrx=objmc[0]+(objns-1)*objpx[0];+objpx[0]/2.0
  objlry=objmc[1]-(objnl-1)*objpx[1];-objpx[1]/2.0
  
  ;open cropland extent for the tile
  cropRaster = e.OpenRaster(crop_file)
  cropns=cropRaster.ncolumns
  cropnl=cropRaster.nrows
  print, 'Crop data : '+strjoin(strtrim([cropns,cropnl],2)," x ")
  
  cropspref=cropRaster.spatialref
  cropmc=cropspref.tie_point_map
  croppx=cropspref.pixel_size
  cropulx=cropmc[0];+croppx[0]/2.0
  cropuly=cropmc[1];-croppx[1]/2.0
  croplrx=cropmc[0]+(cropns-1)*croppx[0];+croppx[0]/2.0
  croplry=cropmc[1]-(cropnl-1)*croppx[1];-croppx[1]/2.0
  
  
  print, 'Finding overlap coordinates...'
  print, 'Object coordinates: '+strjoin(strtrim([objulx,objuly,objlrx,objlry],2),", ")
  print, 'Crop coordinates: '+strjoin(strtrim([cropulx,cropuly,croplrx,croplry],2),", ")
  
  ;find overlap coordinates
  ulx=max([objulx,cropulx])
  uly=min([objuly,cropuly])
  lrx=min([objlrx,croplrx])  
  lry=max([objlry,croplry])
  
  print, 'Final coordinates: '+strjoin(strtrim([ulx,uly,lrx,lry],2),", ")

  ; Convert from Lon/Lat to MapX/MayY and subset
  objspref.ConvertLonLatToMap, ulx, uly, X1, Y1
  objspref.ConvertLonLatToMap, lrx, lry, X2, Y2
  objRasterSub = objRaster.Subset(SPATIALREF=objspref, $
    SUB_RECT=[X1, Y2, X2, Y1])
  
  
  ; Convert from Lon/Lat to MapX/MayY and subset
  cropspref.ConvertLonLatToMap, ulx, uly, X1, Y1
  cropspref.ConvertLonLatToMap, lrx, lry, X2, Y2  
  cropRasterSub = cropRaster.Subset(SPATIALREF=cropspref, $
    SUB_RECT=[X1, Y2, X2, Y1])
  
  
  
  ;reading object data as 2d array
  odata=objRasterSub.getdata()
  
  print,'Size of object data: '+strjoin(strtrim(size(odata),2)," ")
  
  ;read cropland extent as 2d array
  cdata=cropRasterSub.getdata()
  
  print,'Size of crop data: '+strjoin(strtrim(size(cdata),2)," ")
    
  omin=min(odata)
  
  ;number of samples and lines
  ns=objRaster.ncolumns
  nl=objRaster.nrows
  
  ;generate histogram of obj-bsed classification from rhseg
  histo= histogram(odata, binsize=1)
  reassign_list=histo*0
  
  ;total objects
  ;0 is background value in RHSEG outputs
  ;objects start from 0
  ntotalo=n_elements(histo)
;  
;  k=1
;  for i=0, n_elements(reassign_list)-1 do if histo[i] gt 0 then reassign_list[i]=k++
;  
;  print,'Step 1 of 2: Reassignment'
;  val=-1
;  for i=0, nl-1 do begin
;    for j=0, ns-1 do begin
;      odata[j,i]=reassign_list[odata[j,i]-1]
;
;      ;display progress
;      if (fix((double(i)/double(nl))*100.0) mod 10 eq 0) and (val mod 10 ne 0) then $
;        print,'-Re-assigned- '+strtrim( fix((double(i)/double(nl))*100.0),2)+' %'
;      val= fix((double(i)/double(nl))*100.0)
;    endfor
;  endfor
;
;  ;display progress
;  if (fix((double(i)/double(nl))*100.0) mod 10 eq 0) and (val mod 10 ne 0) then $
;    print,'-Re-assigned- '+strtrim( fix((double(i)/double(nl))*100.0),2)+' %'
  
  histo= histogram(odata, binsize=1)
  ntotalo=n_elements(histo)
  
  print,'Number of total objects: ',ntotalo
  

  


  sz=size(cdata)
  dt=sz[sz[0]+1]
  
  if max(cdata) eq 0 and min(cdata) eq 0 then begin
    print,'No croplands in this tile!'
    temp_data=cdata
  endif else begin
    
    ;intersection array
    ;multiply 0-1 crop data with 0-n object data
    ;n is number of objects
    ; result are objects which have some or any overlap with extent
    cdata=ulong(cdata)*ulong(odata)
    
  ;  mult_map=file_dirname(obj_file)+path_sep()+$
  ;    file_basename(obj_file,'.tif')+'_multiplied'
  ;  outRaster=enviraster(cdata,uri = mult_map,nbands=1,$
  ;    interleave='bsq',spatialref=objRaster.spatialref,$
  ;    data_type=dt,nrows=nl,ncolumns=ns)
  ;  outRaster.save
    
    ;histogram of crop overlay objects
    histc= histogram(cdata,binsize=1)
    histc=histc[omin:-1]
    ntotalc=n_elements(histc)
    print,'Number of cropland objects: ',ntotalc
    
    ;initialize final list
    final_list=histo*0
    mbrship_arr=dblarr(n_elements(final_list))
    
    
    ;identify objects with less then 25% cropland
    for i=0,ntotalc-1 do begin
      if histc[i] gt 0 and histo[i] gt 0 then begin
        mbrship_arr[i]=double(histc[i])/double(histo[i])
        if (mbrship_arr[i]) ge thresh and histo[i] ge min_size then final_list[i]=1
      endif
    endfor
  
    ;create the reassignment array    
    final_list[0]=0
    ;array to reassign object IDs
    reassign_arr=final_list*0
    
    k=0
    for i=0, n_elements(final_list)-1 do if final_list[i] eq 1 then reassign_arr[i]=k++
    
    ;number of objects to be eliminated
    n_elim=n_elements(where(final_list eq 0,/NULL))

    ;number of objects kept
    n_final=n_elements(where(final_list eq 1,/NULL))


    
    print,'Number of objects to be eliminated: '+strtrim(n_elim,2)
    print,'Number of objects in the final map: '+strtrim(n_final,2)
    
    if n_final eq 0 then temp_data=odata*0 else begin
    
      ;original object classification to temp variable
      temp_data=odata
      if opt eq 1 then temp_data2=byte(odata*0) else temp_data2=ulong(odata*0)
    
      ;print,'Step 2 of 2: Elimination'
      ;choice to produce merged extent (opt=1) or merged objects map(opt=2)
      if opt eq 1 then use_list=final_list else use_list=reassign_arr
      
      
      ;begin elimination
      val=-1
      for i=0, nl-1 do begin
        for j=0, ns-1 do begin
          ;if the value is to be eliminated then call it 0
          ;if the value is not to be eliminated then reassign the value
          temp_data2[j,i]=use_list[temp_data[j,i]-omin]
          
          ;display progress
          if (fix((double(i)/double(nl))*100.0) mod 10 eq 0) and (val mod 10 ne 0) then $
            print,'-Processed- '+strtrim( fix((double(i)/double(nl))*100.0),2)+' %'
          val= fix((double(i)/double(nl))*100.0)
        endfor
      endfor
      
      ;display progress
      if (fix((double(i)/double(nl))*100.0) mod 10 eq 0) and (val mod 10 ne 0) then $
        print,'-Processed- '+strtrim( fix((double(i)/double(nl))*100.0),2)+' %'
        
      Print,'Flattening objects...'
    endelse
  endelse
    
  print,'writing file ...'
 
  ;export remaining objects as a envi file
  if opt eq 1 then out_map=file_dirname(obj_file)+path_sep()+$
      file_basename(obj_file,'.tif')+'_merged_extent' else $
      out_map=file_dirname(obj_file)+path_sep()+$
      file_basename(obj_file,'.tif')+'_merged_extent2'
  
  if opt eq 1 then dt=1 else dt =13
  
  outRaster=enviraster(temp_data2,uri = out_map,nbands=1,$
      interleave='bsq',spatialref=objRaster.spatialref,$
      data_type=dt,nrows=nl,ncolumns=ns)
  outRaster.save
  
  ;export as tif file
  e.ExportRaster, outRaster, out_map+'_.tif', 'TIFF'

  outRaster.close
  objRaster.close
  cropRaster.close
  
  sdata=!null
  odata=!null
  temp_data=!null

  time=systime()
  print,'End: ',time

  ;file_delete,[out_map,out_map+'.hdr']

  return, out_map+'_map.tif'

end