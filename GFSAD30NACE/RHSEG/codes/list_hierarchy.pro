pro list_hierarchy
compile_opt idl2
subsetdir='\\minim.hpc.nau.edu\scratch\tts32\gdrive\Subsets_TOA_2014'
rhsegdir='\\minim.hpc.nau.edu\scratch\tts32\gdrive\RHSEG_Output_TOA_2014'
outlog='\\minim.hpc.nau.edu\scratch\tts32\RSG_Lab_shared_2\Richard\nobjlog.csv'
outlog2='\\minim.hpc.nau.edu\scratch\tts32\RSG_Lab_shared_2\Richard\mgthreshlog.csv'
openw, olun,outlog,/get_lun
openw, olun2,outlog2,/get_lun
filelist=file_search(subsetdir,'*.tif')
for i=0,n_elements(filelist)-1 do begin
  in_file = filelist[i]
  dirname = file_basename(in_file,'.tif')
  rhsegoutdir = rhsegdir+path_sep()+dirname
  
  logfile=rhsegoutdir+path_sep()+'rhseg.log'
  
  ;read the log file into array
  nlines = FILE_LINES(logFile)
  array = STRARR(nlines)
  OPENR, lun, logFile,/GET_LUN
  READF, lun, array
  FREE_LUN, lun
  
  ;;find number of levels
  ;lvl_pos=where(strpos(array,'Number of Recursive Stage Levels') ne -1)
  ;nlevels=ulong(strsplit(array[53],'Number of Recursive Stage Levels  =',/regex,/extract))
  ;nlevels=nlevels[0]
  
  ;position of information about levels
  linenum=where(strpos(array,'Data written at hlevel') ne -1)
  
  ;find final output levels
  nlevels=n_elements(linenum)
      
  ;array to store levels
  nobjarr=ulonarr(nlevels)
  mgthresharr=fltarr(nlevels)
  
  ;read number of objects at each level
  for j=0,nlevels-1 do begin
    st=strpos(array[linenum[j]+1],'are')+3
    en=strpos(array[linenum[j]+1],'region objects')
    nobjarr[j]=ulong( strmid(array[linenum[j]+1],st,en-st))
    
    st=strpos(array[linenum[j]],'threshold = ')+11
    mgthresharr[j]=float( strtrim(strmid(array[linenum[j]],st),2))
    
  endfor
  printf,olun,dirname+','+strtrim(nlevels,2)+','+strjoin(strtrim(nobjarr,2),',')
  printf,olun2,dirname+','+strtrim(nlevels,2)+','+strjoin(strtrim(mgthresharr,2),',')
  array=!null
  linenum=!null
endfor  
free_lun,olun
free_lun,olun2

end
 