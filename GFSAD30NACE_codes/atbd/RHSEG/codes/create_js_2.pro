pro create_JS_2

zonelist=['NPrairies','NGreatPlains','SGreatPlains','SRim','SERim','BajaSonora', $
  'NBasinRange','WRim','SBasinRange','WBasinRange','NWRim','Yukon','NWForest','CenForest',$
  'MidEasternForest','NovaScotia','WCrescent', 'MidCrescent', 'MidUplands', 'MidSeaBoard',$
'EUplands', 'ESeaBoard', 'ERim', 'ECrescent','CanPrairies','SPrairies','SWRim',$
'Mississippi','Heartland','Sonora','Chihuahua']

openw, lun,'\\minim.hpc.nau.edu\scratch\rm885\gdrive\sync\RHSEG_CODE\JS_code_2.txt',/get_lun

print,n_elements(zonelist)

for i=0,n_elements(zonelist)-1 do begin
  
  zone=zonelist[i]

  printf,lun,'print("'+zone+'");'
  printf,lun,'var studyArea = zones0.filterMetadata("name","equals","'+zone+'");
  printf,lun,'studyArea=buffer1(studyArea.geometry());
  printf,lun,'print(studyArea);
  printf,lun,'var input=makeRHSEGImageSR(studyArea);
  printf,lun,'var out_img=input.multiply(10000).int();
  printf,lun,'var out_name="'+zone+'_2010_medVC_RHSEG";
  printf,lun,'Export.image.toDrive({
  printf,lun,'image: out_img,
  printf,lun,'scale: 30,
  printf,lun,'maxPixels:1e13,
  printf,lun,'folder: "NorthAmericaAGZoneRHsegDataNDVI",
  printf,lun,'description: "'+zone+'",
  printf,lun,'fileNamePrefix: out_name,
  printf,lun,'region: studyArea,
  printf,lun,'crs: "EPSG:4326"
  printf,lun,'});
  printf,lun,''
  
endfor
free_lun,lun
end
  