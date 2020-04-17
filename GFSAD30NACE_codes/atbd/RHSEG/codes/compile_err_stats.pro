pro compile_err_stats, rhseg_dir 
compile_opt idl2

;this script is used to write a .txt file to compile the error rate for each sample across
;all hierarchy levels
;this script also lists the corresponding number of objects for each hierarchy 

err_lim=0.99

zone=file_basename(rhseg_dir)

;output file
out_file=file_dirname(rhseg_dir)+path_sep()+zone+'_err_list.csv'
file_list=file_Search(rhseg_dir,'*hsegrefcomp_.log')

print,'Out file: '+out_file
print,'Dir List: '+file_list
final_arr=!null

for i=0, n_elements(file_list)-1 do begin

  logfile=file_list[i]

  fl=file_lines(logfile[0])
  
  if fl eq 0 then continue
  arr=strarr(fl)
  openr, lunf, logfile[0],/get_lun
  readf,lunf,arr
  free_lun,lunf
  
  if i eq 0 then begin
    final_arr=arr[0]
    labels=strsplit(final_arr,',',/extract)
    objlloc=where(strpos(labels,'object_label') ge 0)
    errloc=where(strpos(labels,'error_rate') ge 0)
  endif
  
  arr=arr[1:-1]
  for j=0,n_elements(arr)-1 do begin
    tempstr=strsplit(arr[j],',',/extract)
    objlabel=ulong(tempstr[objlloc])
    err_rate=double(tempstr[errloc])
    
    if objlabel gt 0 and err_rate lt err_lim then final_arr=[final_arr,arr[j]]  
    
  endfor  
endfor

openw, lun, out_file, /get_lun
for i=0, n_elements(final_arr)-1 do printf,lun, final_arr[i]
free_lun,lun 
  

end
