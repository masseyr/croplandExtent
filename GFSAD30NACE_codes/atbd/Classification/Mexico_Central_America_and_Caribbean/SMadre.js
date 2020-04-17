/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var SMadre1 = ee.Image("users/images/RHseg/SMadre_1_2007-13_RHsegTOA"),
    SMadre2 = ee.Image("users/images/RHseg/SMadre_2_2007-13_RHsegTOA"),
    Cropclass = /* color: d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-105.57071685791016, 25.210532457090416]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.55200576782227, 25.18894239449163]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.59234619140625, 25.244385417321848]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.43973922729492, 25.127413040499594]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.40300369262695, 25.021995370323324]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.42600631713867, 24.943884361170777]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.205078125, 25.045481199886144]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.16868591308594, 25.03646068459294]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.00045776367188, 24.965517674784913]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.05950927734375, 25.021839820043855]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.08903503417969, 25.029772632953623]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.06156921386719, 24.98030084581446]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15581130981445, 25.11940883735663]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.20524978637695, 25.16563947254101]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.91715908050537, 24.85811139124959]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.98629570007324, 24.83643976948271]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.89617347717285, 24.75166401400223]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.90072250366211, 24.71128168347837]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82793807983398, 24.842982545833095]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82261657714844, 24.900294929246197]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.84270095825195, 24.945752135262374]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9029541015625, 24.97158677046404]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.96861457824707, 25.01491763306353]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.59465026855469, 25.270777972186078]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.51242446899414, 25.113891071665613]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.48049545288086, 25.060099246452303]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.49834823608398, 25.06670789727661]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.51748847961426, 24.254085926803636]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.52319622039795, 24.265158477605404]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72528457641602, 24.412452698628606]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.754638671875, 24.326763700951044]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.77240562438965, 24.3517101911047]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.80287551879883, 24.315970280287445]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.76785659790039, 24.289060942602404]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.77386474609375, 24.449024825403026]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.71000671386719, 24.468713114969972]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72785949707031, 24.514171921321513]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.754638671875, 24.551339067193442]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7385025024414, 24.587090339209634]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.68116760253906, 24.612609567628585]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.68717575073242, 24.62431389426491]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.65670585632324, 24.64896742277633]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.60984230041504, 24.648187322373158]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.59829807281494, 24.625250193062918]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.11022186279297, 24.549309213139466]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.10301208496094, 24.627044746156027]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.95023345947266, 24.505893706264036]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.8918685913086, 24.55680389559385]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.84963989257812, 24.642648469375377]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.84002685546875, 24.724380091871726]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.04293060302734, 24.756496541668078]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0896224975586, 24.7686549733606]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.15725708007812, 24.797955018426038]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.31655883789062, 24.86151853356795]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93547058105469, 24.243521110315605]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.05014038085938, 24.278264314060753]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.15639877319336, 24.280298531642728]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.09168243408203, 24.328640723773237]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.99057388305664, 24.363517004093172]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.96173477172852, 24.40369882263482]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.81410598754883, 24.43308443291952]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.76724243164062, 24.490585381919598]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.73050689697266, 24.526978651026972]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.7632942199707, 24.571479684478135]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.98662567138672, 23.765236889758675]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.08730506896973, 23.96554842308938]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.14446830749512, 23.94844928487732]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.14532661437988, 23.918873407870677]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.09751892089844, 24.05931798761789]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.05649185180664, 24.01981138926633]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.97357940673828, 23.91785342920472]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.96018981933594, 23.87783252903805]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.90680313110352, 23.813616301146908]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93049240112305, 23.748896919398167]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.89581680297852, 23.70316553279671]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87950897216797, 23.633358927284192]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87126922607422, 23.61244113864463]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.95572662353516, 23.575630309112988]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.8705825805664, 23.582710116906515]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.00671005249023, 23.642794430156226]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.99641036987305, 23.699707525022315]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.04250144958496, 23.69106210479079]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0156364440918, 23.751332333501168]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.07073974609375, 23.753374903754327]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.64570617675781, 23.937937680435958]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.59695434570312, 24.14111438990836]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.36761474609375, 24.164922672981383]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.17054748535156, 24.405262059288088]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.16642761230469, 24.189352875025595]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.25706481933594, 23.84125358928733]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.99339294433594, 23.87328034832418]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.7606201171875, 23.885837699861995]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.13508605957031, 23.543215649525703]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.48733520507812, 24.110407689707007]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.07191467285156, 23.383858787954722]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.98333740234375, 22.984313295763496]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.1893310546875, 23.050039217560304]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.46261596679688, 22.88756221517449]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.72079467773438, 22.881868823503098]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.82997131347656, 22.864787216003133]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.95665740966797, 22.87348645124165]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.00592422485352, 22.826029312537116]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.91030883789062, 23.436789112648597]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.67135620117188, 23.601115829818806]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.07373046875, 23.32838528547691]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.69058227539062, 23.27856546972303]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.18977355957031, 23.004540067371902]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.58013153076172, 23.20001413130303]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.62961292266846, 23.211807667556915]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.65995407104492, 23.19378167519556]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.06232833862305, 22.841929298831342]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.99323463439941, 22.97356659115514]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.08293843269348, 22.33380136327745]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.00637209415436, 22.29107191715613]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.02362942695618, 22.305465409391388]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.32778930664062, 23.69106210479079]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.64982604980469, 23.776233791610863]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.36682891845703, 24.048345151466552]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8212890625, 22.477030464933303]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.26280212402344, 22.480837310735552]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.10281372070312, 22.579144510122088]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.26469039916992, 22.201709805544958]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.24700927734375, 22.11617714721062]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.35034942626953, 21.986189094766967]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.16306686401367, 21.770818826970462]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.05303192138672, 21.83489037819561]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.99501037597656, 21.942886307848124]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.93647384643555, 22.02056719302067]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.99003219604492, 22.05286863657804]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06659317016602, 22.174370448036058]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.54594421386719, 22.13525956810394]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.57272338867188, 22.185497572767567]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.67194366455078, 22.2265013637685]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.73734664916992, 22.234764242769526]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.74455642700195, 22.346900454274113]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8073844909668, 22.334833457530486]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.80978775024414, 22.419597854789533]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.76961898803711, 22.419280481505147]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.65786743164062, 22.44165352071807]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63057327270508, 22.470844117305695]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.56723022460938, 22.51081256269584]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.62954330444336, 22.534280710800704]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.61924362182617, 22.577876475975547]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.60722732543945, 22.607513721516074]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.82472229003906, 22.72615714815323]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06504821777344, 22.75750366659394]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18795776367188, 22.704622043415686]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30228424072266, 22.800870316989613]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.33524322509766, 22.93721111140081]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3270034790039, 23.02065610594082]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.25421905517578, 23.20695627196047]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.19242095947266, 23.2643728691793]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.20203399658203, 23.382913411246957]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0956039428711, 23.502607376729774]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.94522857666016, 23.555175386794573]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92085266113281, 23.63540334395116]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.89544677734375, 23.763351613249508]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.68704986572266, 23.817699452932874]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.75365447998047, 23.921619464249325]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00624084472656, 22.55251334323103]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89912414550781, 22.717606850410043]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.94032287597656, 22.82080801639653]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.87921142578125, 22.604819690104318]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90839385986328, 22.59119025242291]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.87234497070312, 22.236670991830547]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86410522460938, 21.984756493158102]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9585189819336, 21.846522185314605]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01173400878906, 21.646578845653483]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.13224029541016, 21.47064208015211]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.25892639160156, 21.389147342439845]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90770721435547, 21.27081933812041]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8599853515625, 21.25642159182406]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.59150695800781, 21.322319736422028]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.634765625, 21.42670449102585]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.1178207397461, 20.42958666294022]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.03954315185547, 20.32016017148391]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.94186782836914, 20.25382289300216]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85878372192383, 20.270248843593325]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8504581451416, 20.32571382455584]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.81466674804688, 20.35339862623727]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85526466369629, 20.34776549292104]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.91663360595703, 20.33392320731765]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.15231132507324, 20.62852694772825]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.1348876953125, 20.596874588571563]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.85713958740234, 20.290054294551673]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.87027168273926, 20.24617296012019]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.86289024353027, 20.230348482444906]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.59675598144531, 20.621216961632136]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.7886734008789, 20.746803421912382]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.94969177246094, 20.820629174549445]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.70455932617188, 21.05470570160898]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.58748626708984, 21.025546284581797]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.43178939819336, 21.000067179274485]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.42741203308105, 21.14695277642929]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.40998840332031, 21.783093457163133]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2221908569336, 21.959922434835367]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.60455322265625, 22.35452117716211]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.66944122314453, 22.51033681577882]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.54618835449219, 22.555049866430927]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.8162841796875, 22.992530787175003]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.77508544921875, 22.112360353002327]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.13719177246094, 22.297990905053137]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.04861450195312, 22.326576489662482]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.79867553710938, 22.50304182473213]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.58169555664062, 22.22364102295751]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.30429077148438, 22.159426923610894]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.78562927246094, 21.89399562866819]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.59062194824219, 21.763326003988965]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.78631591796875, 21.5808271136885]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.46805572509766, 21.48310196732966]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.70597839355469, 21.474156515240566]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.76502990722656, 21.430699364190282]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.63113403320312, 22.386904597990146]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.42926025390625, 22.475761493075648]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.26309204101562, 22.575340372675885]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.23356628417969, 22.720457009025893]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.05503845214844, 22.812263645386945]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.14498901367188, 22.83061755897877]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.87445068359375, 22.995691227649733]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.77626037597656, 23.08604847963706]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.08456420898438, 23.092364899997815]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.79685974121094, 23.25396400134687]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.95822143554688, 23.156775418370398]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.14567565917969, 23.203800798178765]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.06156158447266, 23.36652581017398]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.998046875, 23.426393755682774]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.83222198486328, 23.54006816942602]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.92732238769531, 23.605834827390268]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.08662414550781, 23.526847930535634]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.12679290771484, 23.64578219760787]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.90706634521484, 23.684774166883752]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.78587341308594, 23.673769547172995]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.78141021728516, 23.749525417720886]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.9153060913086, 23.81926986172776]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.79788970947266, 23.902474313456413]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.8826904296875, 24.116674961751293]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.921142578125, 24.165549146828848]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.89710998535156, 24.266371313255892]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.86758422851562, 24.329266391869332]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.09829711914062, 24.24884275718934]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.48762512207031, 23.02223600607765]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.83163452148438, 23.164351092602256]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.08981323242188, 22.970405633030232]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.12345886230469, 22.72837380478485]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.151611328125, 22.820491567770727]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.29168701171875, 22.78061315938375]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.10869598388672, 22.646650459943984]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.04655456542969, 22.561390970375488]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.15813446044922, 22.413567638369805]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.17315483093262, 22.482502772862023]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.21435356140137, 22.5108918536895]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.24276351928711, 22.075936581224575]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.28430557250977, 22.066550768352254]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.31880950927734, 22.14130179592926]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.2479133605957, 22.19869002167541]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.3244743347168, 22.178185561472954]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.2643928527832, 22.25430719058105]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.26387786865234, 22.234764242769526]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.3606948852539, 22.61496165148808]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.31194305419922, 22.513825588484632]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.18663024902344, 22.847070687839068]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1073226928711, 22.890408821453843]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.07745361328125, 23.07183544864947]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.87935638427734, 23.18581317530292]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.04827117919922, 23.24576250280476]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.04552459716797, 23.38322853756562]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.98784637451172, 23.463876200733193]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.86648178100586, 23.391657888415377]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.83661270141602, 23.428362636033487]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.84064674377441, 23.46844266241918]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.81172180175781, 23.649556122147732]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.90098571777344, 23.99189861594905]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.96209716796875, 24.096932015911914]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.12723541259766, 24.200000473598344]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.95008087158203, 24.25792034683052]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.83060455322266, 24.27795135461814]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.54530334472656, 25.08622077342401]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.33793640136719, 25.17698078439639]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.95890808105469, 25.29685438934387]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.99118041992188, 25.409167118254995]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.18962097167969, 25.341543769441667]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.03512573242188, 24.991036982463747]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.93212890625, 24.86712551196965]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.88818359375, 24.718142926453133]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.943115234375, 24.7686549733606]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.9376220703125, 24.649513490158643]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.93212890625, 24.48871076515322]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.5198974609375, 24.198121550218996]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.294677734375, 24.39963431677686]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.13787841796875, 25.366364073894893]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.27726745605469, 25.47861218860738]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.46197509765625, 25.287542026764452]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.55192565917969, 25.352713536927975]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.60840225219727, 25.26751802594352]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.6379280090332, 25.267983737910004]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.6841049194336, 25.239106218179423]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.72599029541016, 25.347439053044987]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.81285095214844, 25.369156039272518]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.97455596923828, 25.37784174121271]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.97352600097656, 25.19903894345035]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.8162841796875, 25.042370752318636]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.30242919921875, 24.7630435373877]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.12630462646484, 24.094111346612216]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.33583068847656, 24.40401147151357]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.24347686767578, 23.704894502324915]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.18459701538086, 23.66983910123818]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.30184173583984, 23.70395143087651]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.39436721801758, 23.62156359249022]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.72859191894531, 23.04814372631733]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.07147216796875, 23.01781223904758]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01722717285156, 22.914128217769]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01139068603516, 22.69923773788996]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.43404769897461, 21.4647312481123]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46923828125, 21.48821340747312]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46202850341797, 21.51664251594298]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.48348617553711, 21.42682433881134]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.95511245727539, 21.684707520389786]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.95648574829102, 21.659103392220818]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.02437782287598, 21.712539868889206]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.00909996032715, 21.57795378390886]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.76765823364258, 21.40840657539384]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.72645950317383, 21.38459188325522]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63556480407715, 21.428142657958453]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.05922508239746, 21.02578663277319]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.11595916748047, 21.039005186383985]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.01060199737549, 21.047496486919446]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.56242370605469, 20.29399898055976]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.52182579040527, 20.248749821702535]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4752197265625, 20.25172926461317]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.42801284790039, 20.2407775177387]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.41891479492188, 20.191807332165602]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.47685050964355, 20.16836384902053]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.10856437683105, 20.39266390158859]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06015586853027, 20.357663576228738]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97552680969238, 20.3547666418957]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88823699951172, 20.374641737254713]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.76129341125488, 20.377136001639656]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.65452003479004, 20.37528542224718]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69425964355469, 20.357422167110034]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.18917274475098, 23.093233384581158]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.17668437957764, 23.092522806703194]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.15526962280273, 23.130257185291036]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.94390106201172, 25.520910627158745]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.85077476501465, 25.55065005421206]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.14215660095215, 25.095393082661488]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.1515121459961, 25.157715464367914]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.17623138427734, 25.226683668661465]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.2646369934082, 25.313847607017536]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.98295402526855, 24.076088938325952]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.97909164428711, 24.042858381687104]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.08058643341064, 24.114951492528927]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.95049667358398, 22.671996243505433]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.02946090698242, 22.647759435874455]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.95530319213867, 22.630806969032992]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.99478530883789, 22.581205040721038]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.96611785888672, 22.52666985629176]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.03014755249023, 22.521595720313535]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.82322311401367, 22.085480836198617]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.87025833129883, 22.10838441584545]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.71335983276367, 22.00178759823835]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.6052131652832, 21.950051282903274]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.51337432861328, 21.97711570702593]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.43647003173828, 22.014201507479253]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.37175369262695, 22.072914099373374]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.51835250854492, 21.77910830279548]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.19712829589844, 22.058278009715643]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.18305206298828, 22.029160414779703]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.32295608520508, 22.00576653367871]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.35900497436523, 21.91868194589906]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4836311340332, 21.836802521077615]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.15926361083984, 23.341940611453914]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.18106460571289, 23.30773439842414]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.19325256347656, 23.220208448140895]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.07497787475586, 23.250809638521464]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.33950805664062, 22.936262576840043]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.51185607910156, 23.002011886646645]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.59425354003906, 23.172557589410083]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.60523986816406, 23.29496392456275]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.65742492675781, 23.311675655098515]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.07539367675781, 22.800791193322897]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.05779838562012, 22.775469261506775]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.80898857116699, 22.40952089899558]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.77628707885742, 22.456249587361626]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.76049423217773, 22.505262080138394]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.8269271850586, 22.482423465596007]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.34407043457031, 20.29424048868567]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.3587474822998, 20.31806743890241]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.10845184326172, 20.504852665189066]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.03910064697266, 20.468832516453595]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.47942543029785, 20.512220978890312]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.43655300140381, 20.520313656830442]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.44801139831543, 20.523555380960953]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.47358894348145, 20.563032083208743]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.48174285888672, 20.633050327849798]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.54972076416016, 20.570062349678995]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.59624099731445, 20.50495818053576]),
            {
              "class": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.62027359008789, 20.590954104378554]),
            {
              "class": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.62490844726562, 20.518463544834017]),
            {
              "class": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97921752929688, 20.223648766851756]),
            {
              "class": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.98917388916016, 20.27373611485436]),
            {
              "class": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90677642822266, 20.232507833390986]),
            {
              "class": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88669204711914, 20.318012101839475]),
            {
              "class": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92205429077148, 20.329119362823604]),
            {
              "class": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92548751831055, 20.366459663538002]),
            {
              "class": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86643600463867, 20.418109579819603]),
            {
              "class": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.79193496704102, 20.408295819039704]),
            {
              "class": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.68906688690186, 20.3523788934476]),
            {
              "class": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69374465942383, 20.247808668228554]),
            {
              "class": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69649124145508, 20.200773934810762]),
            {
              "class": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.62370681762695, 20.195296363550113]),
            {
              "class": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.66748046875, 20.161298895329743]),
            {
              "class": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.6623306274414, 20.12568222951938]),
            {
              "class": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.59383773803711, 20.20963430390235]),
            {
              "class": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.54903411865234, 20.234440653553087]),
            {
              "class": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.51796340942383, 20.294829163165453]),
            {
              "class": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.45513534545898, 20.350204866047633]),
            {
              "class": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.36690139770508, 20.294346148372373]),
            {
              "class": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.41925811767578, 20.311733732043137]),
            {
              "class": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.44998550415039, 20.303845162868697]),
            {
              "class": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.37479782104492, 20.393171750141732]),
            {
              "class": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4008903503418, 20.428566177306248]),
            {
              "class": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.48225784301758, 20.422935790034725]),
            {
              "class": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.45256042480469, 20.431300862486246]),
            {
              "class": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.45238876342773, 20.461057527053452]),
            {
              "class": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.42646789550781, 20.477783067012467]),
            {
              "class": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.53736114501953, 20.50503982926607]),
            {
              "class": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.58868789672852, 20.380246232478864]),
            {
              "class": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.6122055053711, 20.421998210000158]),
            {
              "class": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.56594276428223, 20.509166173809177]),
            {
              "class": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.52311325073242, 20.548391666863328]),
            {
              "class": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.5195083618164, 20.607532387074027]),
            {
              "class": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.49942398071289, 20.636290913179185]),
            {
              "class": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.47547721862793, 20.65002560992352]),
            {
              "class": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.55881881713867, 20.639584140644306]),
            {
              "class": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.58164978027344, 20.626651789026795]),
            {
              "class": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.59400939941406, 20.612191958312525]),
            {
              "class": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69391632080078, 20.63058783847489]),
            {
              "class": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.65975570678711, 20.603113696510558]),
            {
              "class": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.62568092346191, 20.572259633938863]),
            {
              "class": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.61066055297852, 20.543408657864386]),
            {
              "class": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.6700553894043, 20.46446258864609]),
            {
              "class": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.70378684997559, 20.439451846103616]),
            {
              "class": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.65718078613281, 20.490112462201903]),
            {
              "class": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.47865295410156, 20.80853967158939]),
            {
              "class": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.53289794921875, 20.85442549388764]),
            {
              "class": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.52311325073242, 20.8863447864107]),
            {
              "class": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.44071578979492, 20.916814162205586]),
            {
              "class": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.45084381103516, 20.947758294308706]),
            {
              "class": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.37445449829102, 20.94265565835904]),
            {
              "class": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.44097328186035, 21.0250380470259]),
            {
              "class": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.46706581115723, 21.042262077934648]),
            {
              "class": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.76721572875977, 20.999531310176835]),
            {
              "class": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.66833877563477, 21.03174013405818]),
            {
              "class": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.89115524291992, 20.91040007106942]),
            {
              "class": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.81184768676758, 20.97725347995229]),
            {
              "class": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.71262741088867, 21.02100463237192]),
            {
              "class": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.7385482788086, 21.049203700557246]),
            {
              "class": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.76721572875977, 21.03174013405818]),
            {
              "class": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69717788696289, 21.08348400921676]),
            {
              "class": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.15867614746094, 20.53036014069189]),
            {
              "class": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.28570556640625, 20.526928911702115]),
            {
              "class": 1,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.31900787353516, 20.52403516537145]),
            {
              "class": 1,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.18202209472656, 20.486411486400478]),
            {
              "class": 1,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.1676025390625, 20.60825292275979]),
            {
              "class": 1,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.21326446533203, 20.628175514121576]),
            {
              "class": 1,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00006103515625, 20.48287374239838]),
            {
              "class": 1,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9537124633789, 20.566687259465258]),
            {
              "class": 1,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93551635742188, 20.526180361040137]),
            {
              "class": 1,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86067199707031, 20.567973016914944]),
            {
              "class": 1,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85758209228516, 20.315919340206865]),
            {
              "class": 1,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.79904556274414, 20.618751770424502]),
            {
              "class": 1,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.77638626098633, 20.62067974413862]),
            {
              "class": 1,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.7391357421875, 20.601238224912557]),
            {
              "class": 1,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69364547729492, 20.575848045030458]),
            {
              "class": 1,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.68214416503906, 20.52564280897705]),
            {
              "class": 1,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62103271484375, 20.472903297598894]),
            {
              "class": 1,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.60970306396484, 20.567435611797784]),
            {
              "class": 1,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.55030822753906, 20.57836415140649]),
            {
              "class": 1,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.7999038696289, 20.694351195353576]),
            {
              "class": 1,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.74737548828125, 20.701416796800522]),
            {
              "class": 1,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.92487335205078, 20.619715760332873]),
            {
              "class": 1,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99164962768555, 20.616181100835544]),
            {
              "class": 1,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01448059082031, 20.65891284370089]),
            {
              "class": 1,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99611282348633, 20.6749743027765]),
            {
              "class": 1,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.59013366699219, 21.108733648251583]),
            {
              "class": 1,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.78136444091797, 21.192304553333127]),
            {
              "class": 1,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.73055267333984, 21.16733428221354]),
            {
              "class": 1,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.54550170898438, 21.296301895366742]),
            {
              "class": 1,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.74600219726562, 21.295982016171838]),
            {
              "class": 1,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86410522460938, 21.30653766199208]),
            {
              "class": 1,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.84342002868652, 21.052355235595517]),
            {
              "class": 1,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.71098327636719, 21.402678017815198]),
            {
              "class": 1,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95577239990234, 21.688585630724262]),
            {
              "class": 1,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.07593536376953, 21.628597839967906]),
            {
              "class": 1,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9420394897461, 21.741213917904158]),
            {
              "class": 1,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.997314453125, 21.78680951380657]),
            {
              "class": 1,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.05859756469727, 21.58572062227222]),
            {
              "class": 1,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99920272827148, 21.74732771712628]),
            {
              "class": 1,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95525741577148, 21.712405305651412]),
            {
              "class": 1,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99671363830566, 20.269093950766432]),
            {
              "class": 1,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01173400878906, 20.271428888603705]),
            {
              "class": 1,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97559928894043, 20.232213378209934]),
            {
              "class": 1,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.0079574584961, 20.250574233985308]),
            {
              "class": 1,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.98855972290039, 20.25290945043344]),
            {
              "class": 1,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00014686584473, 20.241394077306488]),
            {
              "class": 1,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95105171203613, 20.252587353700772]),
            {
              "class": 1,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.98898887634277, 20.222065658912356]),
            {
              "class": 1,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99061965942383, 20.24227990554573]),
            {
              "class": 1,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.96435546875, 20.26152529003048]),
            {
              "class": 1,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.13876342773438, 20.45478497979697]),
            {
              "class": 1,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.17120742797852, 20.439665480011346]),
            {
              "class": 1,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.22716903686523, 20.48421548161848]),
            {
              "class": 1,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.09807968139648, 20.481320928424587]),
            {
              "class": 1,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.03699493408203, 22.61950251196116]),
            {
              "class": 1,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.04180145263672, 22.55119056751438]),
            {
              "class": 1,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.04231643676758, 22.51916264565659]),
            {
              "class": 1,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.12814712524414, 22.41684560921306]),
            {
              "class": 1,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.07561874389648, 22.398277684680625]),
            {
              "class": 1,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.13192367553711, 22.464127056845758]),
            {
              "class": 1,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.86361694335938, 22.358435566140674]),
            {
              "class": 1,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.83803939819336, 22.459553816457664]),
            {
              "class": 1,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.7137565612793, 22.675426475194126]),
            {
              "class": 1,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.6888656616211, 22.69316529379811]),
            {
              "class": 1,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.70380020101602, 22.741618568989992]),
            {
              "class": 1,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.70517349243164, 22.71802745046726]),
            {
              "class": 1,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.68611907958984, 22.76900449181329]),
            {
              "class": 1,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63702392578125, 22.797334433297433]),
            {
              "class": 1,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63032913208008, 22.840055609711637]),
            {
              "class": 1,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.60080337524414, 22.908855952234347]),
            {
              "class": 1,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.59239196777344, 23.015703986515202]),
            {
              "class": 1,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63616561889648, 23.008593945802414]),
            {
              "class": 1,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.72972106933594, 23.032450601071513]),
            {
              "class": 1,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.75959014892578, 23.077624479060738]),
            {
              "class": 1,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.76508331298828, 23.148355855892273]),
            {
              "class": 1,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.76800155639648, 23.189703795514987]),
            {
              "class": 1,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.89966583251953, 23.36820504153209]),
            {
              "class": 1,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.86447525024414, 23.392312716233384]),
            {
              "class": 1,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.03905487060547, 23.431325745697155]),
            {
              "class": 1,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.96695709228516, 23.43258824649903]),
            {
              "class": 1,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.9898738861084, 23.389188715307935]),
            {
              "class": 1,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.0037784576416, 23.35483708148673]),
            {
              "class": 1,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.99777030944824, 23.310623843651054]),
            {
              "class": 1,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.06545066833496, 21.933543931907916]),
            {
              "class": 1,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.04013061523438, 21.94365506725272]),
            {
              "class": 1,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.0865650177002, 21.9451676949839]),
            {
              "class": 1,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.06682395935059, 21.976372001777843]),
            {
              "class": 1,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.02450942993164, 21.980510833668838]),
            {
              "class": 1,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.98313903808594, 21.95965626105341]),
            {
              "class": 1,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.0539493560791, 21.899383682701675]),
            {
              "class": 1,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.02622604370117, 21.901613505986]),
            {
              "class": 1,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.03283500671387, 21.924865297838103]),
            {
              "class": 1,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.08476257324219, 22.006375798309552]),
            {
              "class": 1,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.11488914489746, 21.99954566762246]),
            {
              "class": 1,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.04691123962402, 21.956312876882656]),
            {
              "class": 1,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.89799499511719, 21.933623549953918]),
            {
              "class": 1,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.81456756591797, 21.951695693248702]),
            {
              "class": 1,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.82718467712402, 21.969128755657398]),
            {
              "class": 1,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.83473777770996, 21.986320913285663]),
            {
              "class": 1,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.0843334197998, 21.880189833136093]),
            {
              "class": 1,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.08647918701172, 21.92056559503338]),
            {
              "class": 1,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.11308670043945, 21.947556021800246]),
            {
              "class": 1,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.2563247680664, 25.19421891655576]),
            {
              "class": 1,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.97994995117188, 25.260372033938708]),
            {
              "class": 1,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.9926528930664, 25.119637119831268]),
            {
              "class": 1,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.11521911621094, 25.126475682167655]),
            {
              "class": 1,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.93085479736328, 25.175267032252684]),
            {
              "class": 1,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.85189056396484, 25.268134123684195]),
            {
              "class": 1,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.88141632080078, 25.07579906884351]),
            {
              "class": 1,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.14543151855469, 25.072378418592784]),
            {
              "class": 1,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.27177429199219, 25.12305644884269]),
            {
              "class": 1,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.14543151855469, 25.246709550852554]),
            {
              "class": 1,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.04449462890625, 25.23584056935809]),
            {
              "class": 1,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.21306610107422, 22.484841077615695]),
            {
              "class": 1,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.18663024902344, 22.493088645869488]),
            {
              "class": 1,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1574478149414, 22.49681575102888]),
            {
              "class": 1,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.08792495727539, 22.5260740018364]),
            {
              "class": 1,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.09822463989258, 22.549856631968975]),
            {
              "class": 1,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.12611961364746, 22.57101972593057]),
            {
              "class": 1,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.09762382507324, 22.584888905344023]),
            {
              "class": 1,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.04071807861328, 22.572921867411857]),
            {
              "class": 1,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8663101196289, 22.627157756201996]),
            {
              "class": 1,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8381576538086, 22.727893862087782]),
            {
              "class": 1,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.68881225585938, 22.747842224949732]),
            {
              "class": 1,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.81961822509766, 22.892459724733214]),
            {
              "class": 1,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.72486114501953, 22.883603554073073]),
            {
              "class": 1,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.74958038330078, 22.841845255281203]),
            {
              "class": 1,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.60504150390625, 22.889296872982495]),
            {
              "class": 1,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.50032806396484, 22.9101703319013]),
            {
              "class": 1,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.49964141845703, 22.761772688097082]),
            {
              "class": 1,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.42033386230469, 22.72061040129572]),
            {
              "class": 1,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.34548950195312, 22.65028925369679]),
            {
              "class": 1,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.20507049560547, 22.81399926413152]),
            {
              "class": 1,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.08834075927734, 22.858613386719142]),
            {
              "class": 1,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.10138702392578, 22.877593680609213]),
            {
              "class": 1,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.92320251464844, 22.92945961082627]),
            {
              "class": 1,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.85041809082031, 23.08683311362567]),
            {
              "class": 1,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.8830337524414, 23.20647802525569]),
            {
              "class": 1,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.85865783691406, 23.12188529233288]),
            {
              "class": 1,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.78106689453125, 23.311513080570627]),
            {
              "class": 1,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.85934448242188, 23.355962415737284]),
            {
              "class": 1,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.15683364868164, 23.295828630753885]),
            {
              "class": 1,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.11100006103516, 23.58616630102628]),
            {
              "class": 1,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.10138702392578, 23.749363383287267]),
            {
              "class": 1,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.90294647216797, 23.92208530730742]),
            {
              "class": 1,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.899169921875, 24.05131868676739]),
            {
              "class": 1,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.03855895996094, 24.136879927645424]),
            {
              "class": 1,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.8830337524414, 24.42729675135008]),
            {
              "class": 1,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.12850952148438, 24.679616633535833]),
            {
              "class": 1,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.27167510986328, 24.658089360110154]),
            {
              "class": 1,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.26961517333984, 24.761324010166994]),
            {
              "class": 1,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.24661254882812, 24.863849938283717]),
            {
              "class": 1,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.35750579833984, 25.03412282426933]),
            {
              "class": 1,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.3444595336914, 24.942011694653385]),
            {
              "class": 1,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.4206771850586, 25.04532081936268]),
            {
              "class": 1,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.23596954345703, 25.112798174787088]),
            {
              "class": 1,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.23665618896484, 25.362171157497464]),
            {
              "class": 1,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.33587646484375, 25.506962891244207]),
            {
              "class": 1,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.59886169433594, 25.45892497542166]),
            {
              "class": 1,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.7667465209961, 25.43691410317934]),
            {
              "class": 1,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.87420654296875, 25.45644507830478]),
            {
              "class": 1,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1574478149414, 25.50357798505281]),
            {
              "class": 1,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.56342697143555, 24.75594850740434]),
            {
              "class": 1,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.56256866455078, 24.822182232176303]),
            {
              "class": 1,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.49716567993164, 24.772783016326343]),
            {
              "class": 1,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.613037109375, 24.78384890385335]),
            {
              "class": 1,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.54145431518555, 24.77543268485654]),
            {
              "class": 1,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.66659545898438, 24.76888634223095]),
            {
              "class": 1,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.68324661254883, 24.78213453515998]),
            {
              "class": 1,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.72358703613281, 24.832776345244625]),
            {
              "class": 1,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.77182388305664, 24.90005894006617]),
            {
              "class": 1,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.7998046875, 24.976952904959468]),
            {
              "class": 1,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.66779708862305, 25.04563429019013]),
            {
              "class": 1,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.54952239990234, 25.07797579652458]),
            {
              "class": 1,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.59312438964844, 25.042832464365866]),
            {
              "class": 1,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.36824798583984, 24.444488074533695]),
            {
              "class": 1,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.38987731933594, 24.552271032450207]),
            {
              "class": 1,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.37820434570312, 23.48320261962451]),
            {
              "class": 1,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.29091453552246, 23.439977202852297]),
            {
              "class": 1,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.33786392211914, 23.409025730940222]),
            {
              "class": 1,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.437255859375, 23.369514925716647]),
            {
              "class": 1,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.55347061157227, 23.275292188977453]),
            {
              "class": 1,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.54557418823242, 23.227582113343086]),
            {
              "class": 1,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.54136848449707, 23.182222017629755]),
            {
              "class": 1,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.5350170135498, 23.160996098332294]),
            {
              "class": 1,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.68032836914062, 22.78203264321313]),
            {
              "class": 1,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.71569061279297, 22.86304235913999]),
            {
              "class": 1,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.8001480102539, 22.88992944923013]),
            {
              "class": 1,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.68582153320312, 22.870950879405605]),
            {
              "class": 1,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.75139617919922, 22.978460991388605]),
            {
              "class": 1,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.65157508850098, 22.99912688818973]),
            {
              "class": 1,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.64402198791504, 22.990988811046225]),
            {
              "class": 1,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.62153434753418, 22.971471229907678]),
            {
              "class": 1,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.74178314208984, 22.929775805635465]),
            {
              "class": 1,
              "system:index": "652"
            })]),
    NonCropClass = /* color: 98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-104.2489242553711, 24.207202756678246]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.37904357910156, 24.153645618227387]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.42779541015625, 24.26339788913241]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.47028160095215, 24.21150827500936]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.50169563293457, 24.20829872060019]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.66546058654785, 24.000210355716494]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.64717864990234, 24.018243416510245]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.63868141174316, 24.03321677554947]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.67309951782227, 24.02992435406904]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.69284057617188, 24.0031114969872]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.73034858703613, 24.048423532193453]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.66460227966309, 24.054301950335873]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.61919784545898, 24.092074157941315]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.58452224731445, 24.119886819736834]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.37767028808594, 24.272004978717593]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.53903198242188, 24.34396870273136]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.5513916015625, 24.424644585755374]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.53834533691406, 24.398383673275212]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.65644836425781, 24.336461352932133]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.80253219604492, 24.354916123432353]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.79188919067383, 24.373368203546093]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.78691101074219, 24.410655077187386]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.54813003540039, 24.633442508365754]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.45045471191406, 24.607693423770574]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.44745063781738, 24.623689691170078]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.41831111907959, 24.63781152359514]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.4007158279419, 24.63796755702761]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.36222076416016, 24.6242358690485]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.3317723274231, 24.642238896547795]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.316086769104, 24.64920105194691]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.32474493980408, 24.649094188631498]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.3594741821289, 24.510267170845697]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.39483642578125, 24.47496272199275]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.37801361083984, 24.460431907828042]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.3704605102539, 24.464416330182324]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.31540012359619, 24.450157766766488]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.29080963134766, 24.48011841420197]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.27596092224121, 24.4756657833668]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.28711891174316, 24.452306420685087]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.29853439331055, 24.435077092198856]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.27242040634155, 24.42237823432991]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.23450469970703, 24.312998017593962]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.18060302734375, 24.33458444595871]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.1170883178711, 24.277168952638327]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.98387908935547, 24.30767905785884]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.92276763916016, 24.334897265718638]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.98078918457031, 24.387752703615373]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.89907836914062, 24.38212418111824]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.88912200927734, 24.440273486893474]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.83934020996094, 24.50651849623636]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.80226135253906, 24.5430633023384]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.83796691894531, 24.56289299527544]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87487411499023, 24.585373262423506]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.83419036865234, 24.624860069416037]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.84397506713867, 24.611283008161664]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.77076148986816, 24.545952074734764]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.77908706665039, 24.551963631062826]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.72312545776367, 24.579597467728217]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.02730941772461, 24.792968265314457]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.01941299438477, 24.76039360449458]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.05168533325195, 24.75883479403332]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.06421661376953, 24.763978794323194]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.07794952392578, 24.723756389397124]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.09296989440918, 24.73014919154979]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.14258003234863, 24.713932663093154]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.10944938659668, 24.696700286742978]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.1188907623291, 24.69178745317923]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.93797302246094, 24.95119964792312]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.87617492675781, 24.86961742074445]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.19615173339844, 24.954312404113114]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.16216278076172, 24.949798881966657]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.03951072692871, 25.011573065814993]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.07427215576172, 24.99733819121887]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.0619125366211, 25.058310962011944]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.04929542541504, 25.047269671510442]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.07495880126953, 25.050613265871217]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.02689361572266, 25.046880875550418]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.12225151062012, 24.91142726687838]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.11632919311523, 24.89663582978151]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.16276359558105, 24.902786168943077]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15383720397949, 24.933377604268316]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.17396450042725, 24.946841657070184]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2219009399414, 25.082178520610064]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.24670600891113, 25.054501051619468]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15872955322266, 25.149635553515335]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.07495880126953, 25.11233672650463]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.92587089538574, 25.00682829089539]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.84630584716797, 24.988391934383046]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.83463287353516, 24.777383369753395]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.77712631225586, 24.7078509201873]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82450485229492, 24.739971637549157]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.66520309448242, 24.679777489120738]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.3397331237793, 24.89702510083755]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.34436798095703, 24.864166305055974]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.28943634033203, 24.85746889103534]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.28995132446289, 24.877404311858214]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.150390625, 24.022633692038916]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.17167663574219, 23.926169943427215]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.12232398986816, 23.896745909797318]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.13176536560059, 23.94382114664599]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.13571357727051, 23.91196877965738]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.13983345031738, 23.893842375416217]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.13228034973145, 23.94084022395666]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.07520294189453, 23.95472446134088]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0489387512207, 23.970646351102964]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.04516220092773, 23.976606749648163]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.01589393615723, 23.989938221748364]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.96233558654785, 23.986174181208266]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91555786132812, 24.008756773586377]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.94186496734619, 24.01150091578487]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.96087646484375, 23.99693669209523]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.94525527954102, 24.01620502334128]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.92903327941895, 23.985468411357488]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93345355987549, 23.98117489476398]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.83805274963379, 24.013068970755402]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.79264831542969, 24.031100228567592]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.81397724151611, 24.048031628080423]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.79037380218506, 24.051284395978527]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.68128299713135, 24.09810727645737]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.66763591766357, 24.10519778629093]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.66566181182861, 24.102063907700096]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.60004425048828, 24.113228000099813]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.6288833618164, 24.090193647343042]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.57661247253418, 24.117615026090785]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5609483718872, 24.138607996813455]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.55738639831543, 24.147556377932915]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.55488657951355, 24.150982835021406]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5582447052002, 24.15184432977813]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42391967773438, 24.04246646058954]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40804100036621, 24.03376550426105]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42658042907715, 24.055555978034686]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.43765258789062, 23.906554665381364]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42391967773438, 23.775291236451384]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.18702697753906, 23.828691915436455]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.04763793945312, 23.65144304359811]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39988708496094, 23.506700250833525]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45353126525879, 23.54809409479898]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44202995300293, 23.5451434438853]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.64295959472656, 23.5806648783194]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41739654541016, 23.28597656005332]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.23509216308594, 23.310414465672082]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.3542251586914, 23.174766944907365]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44245910644531, 23.143477495929496]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42838287353516, 23.172360323753015]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.58665466308594, 23.14296449326032]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.61532211303711, 23.104602119532295]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.67746353149414, 23.086759091746938]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53515625, 23.010386303890915]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39902877807617, 23.008095241383824]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.20281982421875, 23.01567929952219]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1564712524414, 23.14576625314893]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.15106391906738, 23.144365380525038]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.10480117797852, 23.126547371433073]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.08171272277832, 23.130257185291036]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.216552734375, 23.21839423978725]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.21084499359131, 23.190310307861317]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.19161891937256, 23.20155247765878]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.16290855407715, 23.254693437126974]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.10033798217773, 23.353760987073255]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.09999465942383, 23.37440471739209]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.14157962799072, 23.396187458191466]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.99476623535156, 23.506228002618762]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.96034812927246, 23.4985143754798]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.96343803405762, 23.454427847439106]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.93760299682617, 23.440096554793648]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.86524772644043, 23.44167149815025]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.88610458374023, 23.477417661086694]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.86138534545898, 23.557221022345267]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.89340019226074, 23.565953954391908]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.89958000183105, 23.53219913964181]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.81967163085938, 23.603632649658298]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.777099609375, 23.577832956897748]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.8049087524414, 23.676913818812825]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.82276153564453, 23.70473732422347]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.72233963012695, 23.72296872098585]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.72663116455078, 23.608508850623366]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.73710250854492, 23.494421247100487]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.79014587402344, 23.42970145792603]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.67865180969238, 23.369519850068865]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.68654823303223, 23.35352458987739]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.64989852905273, 23.297328919616135]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.57728576660156, 23.238980113449575]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.34725952148438, 23.29212587501636]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3680305480957, 23.30773439842414]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.81868743896484, 25.18692298426705]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.6844482421875, 25.25711665985981]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.72375869750977, 25.239882585376684]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.51458930969238, 25.304924524991424]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.4548511505127, 25.320985599426727]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.40210819244385, 25.36442517109773]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.40197944641113, 25.42405157535976]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.97171020507812, 25.507742380531404]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.96149635314941, 25.52362155743349]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.9754867553711, 25.470786120212953]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8905143737793, 25.479968138787594]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.85729789733887, 25.55339902982907]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.45037460327148, 25.526022615960862]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.43303680419922, 25.465749272216836]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.47269058227539, 25.372878559426372]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.42496871948242, 25.33270030540095]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.41672897338867, 25.298871973629357]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.40299606323242, 25.207892151323307]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.47972869873047, 25.159890733558385]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.27133178710938, 25.029772632953623]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.32386016845703, 24.816497746975198]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.04079055786133, 24.804499827575405]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.00765991210938, 24.77411029301751]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.82844543457031, 24.735450290511825]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.79342651367188, 24.81945809387079]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.74415969848633, 24.879740283510035]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.68064498901367, 24.889706599619043]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.6516342163086, 24.914930242288328]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.58520126342773, 24.879584553440626]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.56906509399414, 24.904421017666206]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.59086608886719, 24.82935137152157]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.07357788085938, 25.018106554203143]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.05091857910156, 25.069739982463165]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.1437873840332, 25.099590350775866]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.29896926879883, 25.29999715027944]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.31888198852539, 25.30259665639162]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.34823608398438, 25.330372970610558]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.96012306213379, 24.107979039304038]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.94166946411133, 24.125135292207673]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.09942626953125, 24.16617561760282]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.14165496826172, 24.111661168663584]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.12860870361328, 24.017929819664435]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.98235321044922, 23.961313068016988]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.90081405639648, 23.958489420665316]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.84553909301758, 23.99425104958491]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.84845733642578, 23.961234634203358]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.15916442871094, 23.732554898466823]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.12071228027344, 23.740097624402257]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1680908203125, 23.768378956573663]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.15985107421875, 23.70866671996133]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.87969970703125, 23.324602156920964]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.85360717773438, 23.444978818097457]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.93875122070312, 23.62250725836332]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.74237060546875, 23.641379148082567]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.99359703063965, 23.776626520911197]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.83805847167969, 24.264493369270625]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.29124450683594, 24.432771856058068]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.25382232666016, 24.244773282548593]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.27287673950195, 23.88159972993584]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.30720901489258, 23.570280867798363]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.9207992553711, 23.579091596182877]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.0229377746582, 23.53172698288632]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.13168525695801, 23.196227357162588]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.25965881347656, 23.128362825075957]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.16146850585938, 23.00027373492627]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.14035415649414, 23.040403526857926]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.96813488006592, 22.959381213203045]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.89093017578125, 23.031715018113413]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.83823013305664, 22.885189997665922]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.90715217590332, 22.845251449332473]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.91848182678223, 22.854189213257413]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.95955181121826, 22.840703246600388]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.9072380065918, 22.799287834928133]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.89539337158203, 22.74515589629107]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.86243438720703, 22.718873594901428]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.96148300170898, 22.70319680667106]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.02328109741211, 22.527145546985007]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.99924850463867, 22.464181587798944]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.07065963745117, 22.466085200350637]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.14825057983398, 22.485278498549853]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.20026397705078, 22.485912942320958]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.24420928955078, 22.457360094750083]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.16421508789062, 22.826820400544044]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.31287384033203, 22.788209946124166]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.250732421875, 22.804668198971534]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.31974029541016, 22.725523811089413]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.42788696289062, 22.824921781603962]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.58512878417969, 22.74483927212337]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.55560302734375, 22.752438049676062]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.62443923950195, 22.738348315044973]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.59062194824219, 22.79026733638504]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.5554313659668, 22.65599726239356]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.33587646484375, 22.58928836314752]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8168716430664, 22.837262331316275]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.97205352783203, 22.739139911678595]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.96656036376953, 22.7549708816161]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.0084457397461, 22.7549708816161]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.81412506103516, 22.58928836314752]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8436508178711, 22.302120295538398]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.91986846923828, 22.384364994133303]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.69464874267578, 22.264633663305034]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.58238220214844, 22.262409564319135]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.56590270996094, 21.978389199942132]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.78459930419922, 22.003538343588758]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.49964141845703, 21.962788124719157]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.74614715576172, 22.03186558038496]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8824462890625, 22.099000759798155]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.40539932250977, 22.094706336171342]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.43509674072266, 22.036957516604144]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.46994400024414, 21.971225653707116]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.4817886352539, 21.810348942202566]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.33352661132812, 22.556001050606962]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4420166015625, 22.55251334323103]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.54329681396484, 22.588337408660067]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.46261596679688, 22.668511475851467]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.45162963867188, 22.698287544354056]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3995304107666, 22.691160882754726]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.40176200866699, 22.706680692525797]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.41738319396973, 22.700504652351135]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.39077568054199, 22.69678305777567]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.37768650054932, 22.694645074741366]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.36193656921387, 22.71147089084011]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3651123046875, 22.734231938666262]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.50003814697266, 22.756712176333384]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.51428604125977, 22.752121442381736]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.5379753112793, 22.768584048597113]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.56921768188477, 22.76082787560169]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.57282257080078, 22.77633978093272]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.58689880371094, 22.7682674787327]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.48021125793457, 22.75916578121174]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4064826965332, 22.759086633355277]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.33146667480469, 22.80356049432649]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.31893539428711, 22.85925104900916]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30812072753906, 22.883608496293736]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.39017486572266, 22.89230652580047]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.41437911987305, 22.90748720497732]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.48664855957031, 22.939424332866494]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.38425254821777, 22.963846409107052]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.36451148986816, 23.01520530838021]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.36631393432617, 23.038191959605488]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27713584899902, 23.08423245384451]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.49385833740234, 23.061095717966854]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.48287200927734, 23.074994029804955]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.5163459777832, 23.141386011195245]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.52190351486206, 23.134479933642563]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.5929069519043, 23.083363911097347]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.61436462402344, 23.09094373129943]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.67084121704102, 23.075467810580523]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.57994651794434, 23.047038010770983]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.54342555999756, 23.031872996]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09800720214844, 23.1523560772048]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.01131820678711, 23.166876222118244]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.94969177246094, 23.229042501811055]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86883926391602, 23.246077954382567]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.7542552947998, 23.2549102956434]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.73065185546875, 23.44119901711421]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.33686065673828, 23.418517941144092]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.44088745117188, 23.541327170505458]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.87467575073242, 22.389761596907473]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90059661865234, 22.391983666602783]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92480087280273, 22.39753868550049]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.93990707397461, 22.4229302304843]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.83416366577148, 22.450220963459014]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.91364288330078, 22.512239793623987]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.82952880859375, 22.397697397065034]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8571662902832, 22.297196777505224]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90394401550293, 22.308393559019922]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.93836212158203, 22.327052866478418]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.95561408996582, 22.298943852152497]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90814971923828, 22.181364743567322]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.99792861938477, 22.160380813034834]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8099594116211, 22.090372016873232]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.83648109436035, 22.107310893595844]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.72923564910889, 22.18204031049727]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.70902252197266, 22.15354446258496]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.54542922973633, 22.08293576460287]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.53444290161133, 22.125559660391893]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.46835327148438, 22.075141197532776]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.51847839355469, 22.051754916424308]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4396858215332, 21.999718507682932]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.46122932434082, 22.014997233811766]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.25892639160156, 22.022954251360996]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.27540588378906, 22.082776696105153]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.24914169311523, 22.074823042802226]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.53427124023438, 21.861658050921537]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.5330696105957, 21.81066768912434]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.50663375854492, 21.7440341705758]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.52191162109375, 21.704964261126868]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46237182617188, 21.46409222488015]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40658187866211, 21.51217088972491]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.36812973022461, 21.52047522891226]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4798812866211, 21.511611926775053]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.48299264907837, 21.47441610083293]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40838432312012, 21.443961559000876]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.43868255615234, 21.41423978426799]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42778205871582, 21.391944483925105]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.33122253417969, 21.334472476515074]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.27508926391602, 21.40049541327558]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.09844970703125, 21.527820979515607]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.10797691345215, 21.549217352769052]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.37963104248047, 21.77831125863125]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.30513000488281, 21.779905342529645]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.32736015319824, 21.911674651909617]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.33285331726074, 21.853094534469033]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.19303512573242, 21.910719085108788]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.19801330566406, 21.833774949706253]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.12617301940918, 21.837360224601504]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.10840606689453, 21.82738098639821]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.13655853271484, 21.85783440469281]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1407642364502, 21.877270210348943]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.12557220458984, 21.86094112505149]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.07566165924072, 21.89801740097573]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.04622173309326, 21.89578752143349]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.00510883331299, 21.899809243187292]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.97639846801758, 21.898455408929802]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.98360824584961, 21.875278958495983]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.25112915039062, 21.89877395932373]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30159759521484, 21.892402816192003]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.25112915039062, 21.844610172437655]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.34485626220703, 21.959922434835367]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.29198455810547, 21.9156561112446]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.29490280151367, 21.872331854762372]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.31447219848633, 21.849230826434866]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.26091384887695, 21.9352432699047]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.23894119262695, 21.871535329793293]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.31515884399414, 21.876473712942143]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.25018501281738, 21.955703397333846]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.24477767944336, 21.93747253172517]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.40575313568115, 21.996376066861227]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.41609573364258, 22.02470473524494]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4790096282959, 21.905542986880018]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.42864847183228, 22.124685045729922]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.41418600082397, 22.147284141069914]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27516174316406, 22.146071792659132]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.32048034667969, 22.22840822522651]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4808120727539, 22.220860080122876]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.46639251708984, 22.240961082363047]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.46767997741699, 22.285840259868493]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.239013671875, 23.758638302485288]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.26304626464844, 23.79476932125804]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2112045288086, 23.822253586088642]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.20905876159668, 23.74968254182758]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.19137763977051, 23.716839484014912]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.22081756591797, 23.690040335482323]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2338638305664, 23.65026372088081]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.74043655395508, 23.854128042031032]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.67675018310547, 23.869983841670862]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.68258666992188, 23.839840461721728]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.72601699829102, 23.870611754171193]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.73185348510742, 23.922874784864085]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.14364242553711, 24.13531828131119]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.11514663696289, 24.154428779197527]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.09592056274414, 24.159519208481672]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.0802993774414, 24.13140184298305]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.06484985351562, 24.110564375247762]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.09274482727051, 24.08008543011025]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.09660720825195, 24.070211518251273]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.13351440429688, 24.03494134360877]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.13995170593262, 24.02992435406904]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.14407157897949, 24.04662076336919]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.15960693359375, 24.081339205783]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.15076637268066, 24.113463023161145]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.1678466796875, 24.412140070651528]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.21797180175781, 24.31205939384922]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.17196655273438, 24.023260862018518]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.17951965332031, 23.669681880942303]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.9565315246582, 23.633987981966342]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.93867874145508, 23.645939446636824]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.95498657226562, 23.666851883280344]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.99996185302734, 23.65002785506167]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.01541137695312, 23.654116135731922]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.02124786376953, 23.621720870607778]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.0693130493164, 23.59914953070896]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.16063690185547, 23.366840975451563]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.22621154785156, 23.386379759533266]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.08819580078125, 23.3873251115088]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.22998809814453, 23.323656357952093]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.3110122680664, 23.349190566655412]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.21247863769531, 23.231566409784715]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.68832397460938, 23.338788333527102]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.61485290527344, 23.345723246176746]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.53314208984375, 23.230935437265202]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.56541442871094, 23.091101639674804]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.71699142456055, 23.117153979794793]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1299819946289, 22.859409228338897]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.0732479095459, 22.801582427922988]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.10311698913574, 22.801424181370443]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.96003723144531, 22.731223739098]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.21958923339844, 22.70842260221353]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.30473327636719, 22.737873354864686]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.37271118164062, 22.791058632066573]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.34524536132812, 22.79548980302276]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.4537353515625, 22.794856787417594]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.2728042602539, 22.578193485606175]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.18628692626953, 22.43832159451804]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1519546508789, 22.453552603809847]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.3600082397461, 22.44530268140158]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.39159393310547, 22.39991933994392]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.23332214355469, 22.21633099805452]),
            {
              "class": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1874885559082, 22.19376286645917]),
            {
              "class": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.28482055664062, 22.177867639308193]),
            {
              "class": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.54299926757812, 22.35960142753045]),
            {
              "class": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.52583312988281, 22.44149485938026]),
            {
              "class": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.84718322753906, 22.16101673572416]),
            {
              "class": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.75208282470703, 22.14066578415566]),
            {
              "class": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.74315643310547, 22.179139323652443]),
            {
              "class": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.81250762939453, 22.25605480105108]),
            {
              "class": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.86812591552734, 22.22411775047779]),
            {
              "class": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.81971740722656, 22.210768767393205]),
            {
              "class": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.76736068725586, 22.191855534158076]),
            {
              "class": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.82503890991211, 22.337691524829104]),
            {
              "class": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.80512619018555, 22.378650715952503]),
            {
              "class": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.76530075073242, 22.375158541542927]),
            {
              "class": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.77319717407227, 22.43562426232097]),
            {
              "class": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.85113143920898, 22.363570244211427]),
            {
              "class": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.76530075073242, 22.33419832350944]),
            {
              "class": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.78796005249023, 22.344042575753853]),
            {
              "class": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.78315353393555, 22.290525927918978]),
            {
              "class": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.74950790405273, 22.27591247822872]),
            {
              "class": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.85628128051758, 22.298308554808457]),
            {
              "class": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.0800552368164, 21.705761712301282]),
            {
              "class": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.0840356349945, 21.69325118809693]),
            {
              "class": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.09301567077637, 21.6783268546649]),
            {
              "class": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95182418823242, 21.639877368112945]),
            {
              "class": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.88204383850098, 21.680799396158534]),
            {
              "class": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8944034576416, 21.697149005838174]),
            {
              "class": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.87672233581543, 21.7142941632892]),
            {
              "class": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85251808166504, 21.715251042128045]),
            {
              "class": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.84410667419434, 21.7142941632892]),
            {
              "class": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.81779956817627, 21.748618208722252]),
            {
              "class": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93276977539062, 21.45562490252753]),
            {
              "class": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.10237121582031, 21.043491216803552]),
            {
              "class": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.68533325195312, 21.120373561794867]),
            {
              "class": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86111450195312, 21.031955437049735]),
            {
              "class": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69357299804688, 21.116530389515233]),
            {
              "class": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.64413452148438, 21.08578142839556]),
            {
              "class": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.65924072265625, 21.133183416835227]),
            {
              "class": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.3653564453125, 20.662341103925662]),
            {
              "class": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.19094848632812, 20.57365332356332]),
            {
              "class": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.348876953125, 20.6726204014058]),
            {
              "class": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.95621490478516, 20.726575291034358]),
            {
              "class": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.9150161743164, 20.77216503311]),
            {
              "class": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90746307373047, 20.82351727395072]),
            {
              "class": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.98196411132812, 20.817420110284594]),
            {
              "class": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97853088378906, 20.830416398388003]),
            {
              "class": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.85871124267578, 20.85945343272759]),
            {
              "class": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8297004699707, 20.839561262207024]),
            {
              "class": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.81116104125977, 20.794152351133135]),
            {
              "class": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.73460006713867, 20.698957924554914]),
            {
              "class": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.78240776062012, 20.626036772106037]),
            {
              "class": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.78841590881348, 20.581929819929197]),
            {
              "class": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.75288200378418, 20.555170207105093]),
            {
              "class": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.75700187683105, 20.542069948837497]),
            {
              "class": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.71670436859131, 20.531882315735373]),
            {
              "class": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.67469024658203, 20.55838482281507]),
            {
              "class": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.03140258789062, 20.340764026664818]),
            {
              "class": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.04444885253906, 20.416395233305796]),
            {
              "class": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.08255767822266, 20.402237319435788]),
            {
              "class": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.1065902709961, 20.33464754369573]),
            {
              "class": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.11448669433594, 20.334969469885582]),
            {
              "class": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.05706596374512, 20.334406098613428]),
            {
              "class": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.01543807983398, 20.313237948006595]),
            {
              "class": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.00119018554688, 20.320482127830367]),
            {
              "class": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.02513694763184, 20.337544855271105]),
            {
              "class": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.04170227050781, 20.355571351328333]),
            {
              "class": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.01432228088379, 20.359594835591004]),
            {
              "class": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.96900367736816, 20.33810821510484]),
            {
              "class": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90059661865234, 20.312915976588496]),
            {
              "class": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8923568725586, 20.29729955902904]),
            {
              "class": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.81450843811035, 20.33762533537306]),
            {
              "class": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.81219100952148, 20.368526595886184]),
            {
              "class": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.73837661743164, 20.26396853834865]),
            {
              "class": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69486045837402, 20.2923084131382]),
            {
              "class": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.65143013000488, 20.293837974933357]),
            {
              "class": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63928508758545, 20.287920902118476]),
            {
              "class": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.37934684753418, 20.313640411337385]),
            {
              "class": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.34973526000977, 20.30100256336019]),
            {
              "class": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.37411117553711, 20.283211233727474]),
            {
              "class": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.35050773620605, 20.248105610314756]),
            {
              "class": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.29265785217285, 20.24061645687716]),
            {
              "class": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.31986618041992, 20.20260142721196]),
            {
              "class": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.35398387908936, 20.194848281642]),
            {
              "class": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.3517951965332, 20.20294376500099]),
            {
              "class": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.36145114898682, 20.206508060792157]),
            {
              "class": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.35677337646484, 20.16908895802401]),
            {
              "class": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.31420135498047, 20.225798143572288]),
            {
              "class": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.19129180908203, 20.12815531179718]),
            {
              "class": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.12297058105469, 20.211944964974403]),
            {
              "class": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.20914459228516, 20.166188501786795]),
            {
              "class": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.13241195678711, 20.174245191499885]),
            {
              "class": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.04520797729492, 20.14233826215684]),
            {
              "class": 2,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.80230712890625, 20.52285956529547]),
            {
              "class": 2,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8244514465332, 20.539578361617902]),
            {
              "class": 2,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86496353149414, 20.522055730985855]),
            {
              "class": 2,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8186149597168, 20.512570167366874]),
            {
              "class": 2,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.82307815551758, 20.51980497246136]),
            {
              "class": 2,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.81947326660156, 20.536041845540105]),
            {
              "class": 2,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.689697265625, 20.542954050672428]),
            {
              "class": 2,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.74960708618164, 20.573492610453894]),
            {
              "class": 2,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.63064575195312, 20.45789615504685]),
            {
              "class": 2,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62017440795898, 20.457574485567154]),
            {
              "class": 2,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.61948776245117, 20.48700445255163]),
            {
              "class": 2,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.5717658996582, 20.432321329977007]),
            {
              "class": 2,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.51580429077148, 20.4979387393432]),
            {
              "class": 2,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.4560661315918, 20.521251892454806]),
            {
              "class": 2,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.44130325317383, 20.522055730985855]),
            {
              "class": 2,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.36405563354492, 20.54520446863804]),
            {
              "class": 2,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.33676147460938, 20.558867009337707]),
            {
              "class": 2,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.34688949584961, 20.56947472772889]),
            {
              "class": 2,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.38036346435547, 20.556938254115668]),
            {
              "class": 2,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.39392471313477, 20.600007983352214]),
            {
              "class": 2,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.39770126342773, 20.6496516369857]),
            {
              "class": 2,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.4586410522461, 20.64916973761545]),
            {
              "class": 2,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.42757034301758, 20.619288994719977]),
            {
              "class": 2,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.43066024780273, 20.6421017047138]),
            {
              "class": 2,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.4124641418457, 20.586349124428203]),
            {
              "class": 2,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.39083480834961, 20.615754325317265]),
            {
              "class": 2,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.3982162475586, 20.57413546187642]),
            {
              "class": 2,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.39649963378906, 20.690607497544555]),
            {
              "class": 2,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.5564022064209, 20.810440159557896]),
            {
              "class": 2,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.5662727355957, 20.810841314905783]),
            {
              "class": 2,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.47666549682617, 20.8146121229931]),
            {
              "class": 2,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.45846939086914, 20.833865842089896]),
            {
              "class": 2,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.4318618774414, 20.845657529450172]),
            {
              "class": 2,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.1839828491211, 20.621859611844727]),
            {
              "class": 2,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.26809692382812, 20.566903227293405]),
            {
              "class": 2,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.07755279541016, 20.51385637992344]),
            {
              "class": 2,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.99944686889648, 20.510962386479832]),
            {
              "class": 2,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.99738693237305, 20.578313930128054]),
            {
              "class": 2,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.15109348297119, 24.323452569810836]),
            {
              "class": 2,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4030065536499, 24.345167344826056]),
            {
              "class": 2,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.11804866790771, 24.298552464636966]),
            {
              "class": 2,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.08199977874756, 24.306648728060523]),
            {
              "class": 2,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.07762241363525, 24.30864338030189]),
            {
              "class": 2,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.08230018615723, 24.316699891688533]),
            {
              "class": 2,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.07998275756836, 24.30109482521812]),
            {
              "class": 2,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.98739290237427, 24.114964345190685]),
            {
              "class": 2,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.98486089706421, 24.110616399701307]),
            {
              "class": 2,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.41876459121704, 24.281018874018102]),
            {
              "class": 2,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.37374639511108, 24.324782165249413]),
            {
              "class": 2,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.36655807495117, 24.32814519733712]),
            {
              "class": 2,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.23364925384521, 24.740075168624468]),
            {
              "class": 2,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.24208211898804, 24.738659221445893]),
            {
              "class": 2,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.26982688903809, 24.75048142883806]),
            {
              "class": 2,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.28840923309326, 24.65301045880607]),
            {
              "class": 2,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.28793716430664, 24.64946107754475]),
            {
              "class": 2,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.28883838653564, 24.64727679276988]),
            {
              "class": 2,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.28475069999695, 24.659953217516108]),
            {
              "class": 2,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.28308773040771, 24.684872360524647]),
            {
              "class": 2,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.28892421722412, 24.69612822940651]),
            {
              "class": 2,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2893533706665, 24.692326631503764]),
            {
              "class": 2,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.26394748687744, 24.703782857848175]),
            {
              "class": 2,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2476396560669, 24.69360663759539]),
            {
              "class": 2,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2520170211792, 24.70136559345114]),
            {
              "class": 2,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.25330448150635, 24.708461300824737]),
            {
              "class": 2,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.24446392059326, 24.708812176962603]),
            {
              "class": 2,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.25060081481934, 24.718909188812585]),
            {
              "class": 2,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2624454498291, 24.720975271760615]),
            {
              "class": 2,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.25042915344238, 24.730447627984415]),
            {
              "class": 2,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.26248836517334, 24.707135759825718]),
            {
              "class": 2,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2696123123169, 24.710683499666047]),
            {
              "class": 2,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.26871109008789, 24.72007867393915]),
            {
              "class": 2,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.25823974609375, 24.738594057037115]),
            {
              "class": 2,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.28506183624268, 24.720780359740193]),
            {
              "class": 2,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2878942489624, 24.724717523352652]),
            {
              "class": 2,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.27632856369019, 24.715114986671733]),
            {
              "class": 2,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2445068359375, 24.725756611659953]),
            {
              "class": 2,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.23884201049805, 24.685677821013293]),
            {
              "class": 2,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.23073101043701, 24.682734392126324]),
            {
              "class": 2,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.26579284667969, 24.607042312848215]),
            {
              "class": 2,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.26879692077637, 24.616016127387695]),
            {
              "class": 2,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.27471923828125, 24.62748606572764]),
            {
              "class": 2,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2893533706665, 24.613532542339804]),
            {
              "class": 2,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.29743218421936, 24.653225283330983]),
            {
              "class": 2,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.25984907150269, 24.592917614945748]),
            {
              "class": 2,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.24330520629883, 24.58066398534178]),
            {
              "class": 2,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.20270729064941, 24.56768039100738]),
            {
              "class": 2,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.1915922164917, 24.567172996708674]),
            {
              "class": 2,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.18223667144775, 24.57235112736621]),
            {
              "class": 2,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.20536804199219, 24.57852087941818]),
            {
              "class": 2,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.19927406311035, 24.604168361416416]),
            {
              "class": 2,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.19239687919617, 24.604305232259417]),
            {
              "class": 2,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.06035709381104, 24.694357515582944]),
            {
              "class": 2,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.05724573135376, 24.696930875672063]),
            {
              "class": 2,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00132703781128, 24.712525860053614]),
            {
              "class": 2,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99801182746887, 24.715079352663054]),
            {
              "class": 2,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99613428115845, 24.712759769952704]),
            {
              "class": 2,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00419163703918, 24.710537608167957]),
            {
              "class": 2,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00229263305664, 24.702574231513687]),
            {
              "class": 2,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01834297180176, 24.704289697659256]),
            {
              "class": 2,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01147651672363, 24.708422314526153]),
            {
              "class": 2,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99302291870117, 24.713685354422775]),
            {
              "class": 2,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00503921508789, 24.715322699237053]),
            {
              "class": 2,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00456714630127, 24.704250710054712]),
            {
              "class": 2,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.98692893981934, 24.707642585991454]),
            {
              "class": 2,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97667217254639, 24.717622742481126]),
            {
              "class": 2,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97311019897461, 24.715283715087]),
            {
              "class": 2,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97199440002441, 24.72304132040865]),
            {
              "class": 2,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97688674926758, 24.72627676163315]),
            {
              "class": 2,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97787380218506, 24.724561598449924]),
            {
              "class": 2,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.98096370697021, 24.727563118504435]),
            {
              "class": 2,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97830295562744, 24.73204577336114]),
            {
              "class": 2,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97989082336426, 24.738009402869977]),
            {
              "class": 2,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.98349571228027, 24.736255423875818]),
            {
              "class": 2,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97315311431885, 24.710163893675915]),
            {
              "class": 2,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97684383392334, 24.712931851824425]),
            {
              "class": 2,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97647905349731, 24.708175604072498]),
            {
              "class": 2,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.96487045288086, 24.708732986253995]),
            {
              "class": 2,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9453010559082, 24.691421907225475]),
            {
              "class": 2,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93448638916016, 24.72370278981981]),
            {
              "class": 2,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.94736099243164, 24.738514885279574]),
            {
              "class": 2,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.94444274902344, 24.752389879446135]),
            {
              "class": 2,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.94324111938477, 24.758625327386827]),
            {
              "class": 2,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95748901367188, 24.769069001560908]),
            {
              "class": 2,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.96761703491211, 24.781693763245325]),
            {
              "class": 2,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93242645263672, 24.77969444114924]),
            {
              "class": 2,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.92796325683594, 24.788811672878317]),
            {
              "class": 2,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93603134155273, 24.791694760579773]),
            {
              "class": 2,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.953369140625, 24.79387651213759]),
            {
              "class": 2,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.94006538391113, 24.796993233505894]),
            {
              "class": 2,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.92530250549316, 24.791538919714366]),
            {
              "class": 2,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93019485473633, 24.78047371790371]),
            {
              "class": 2,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.91508865356445, 24.72318384726407]),
            {
              "class": 2,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.91414451599121, 24.711020968280106]),
            {
              "class": 2,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89114189147949, 24.71983137747961]),
            {
              "class": 2,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89938163757324, 24.73651486816102]),
            {
              "class": 2,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89543342590332, 24.728017481910097]),
            {
              "class": 2,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.98804473876953, 20.645259268534048]),
            {
              "class": 2,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95474243164062, 20.670156043389223]),
            {
              "class": 2,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.0354232788086, 20.554632756941952]),
            {
              "class": 2,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.06718063354492, 20.61955509577192]),
            {
              "class": 2,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.09001159667969, 20.560097582627233]),
            {
              "class": 2,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.75939178466797, 21.34171766903388]),
            {
              "class": 2,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.6845474243164, 21.224311549684096]),
            {
              "class": 2,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.79235076904297, 21.18174072247047]),
            {
              "class": 2,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.74153900146484, 21.197746232135056]),
            {
              "class": 2,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69038391113281, 21.069974065688083]),
            {
              "class": 2,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.82934379577637, 21.046187276102504]),
            {
              "class": 2,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95680236816406, 21.196520871579853]),
            {
              "class": 2,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.91835021972656, 21.24132744321197]),
            {
              "class": 2,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.80677032470703, 21.257326491643962]),
            {
              "class": 2,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.7859992980957, 21.302114578838292]),
            {
              "class": 2,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.87955474853516, 21.384616858747094]),
            {
              "class": 2,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93294143676758, 21.412746544926478]),
            {
              "class": 2,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8021354675293, 21.461640945709572]),
            {
              "class": 2,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69536209106445, 21.46355803924667]),
            {
              "class": 2,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.5937385559082, 21.500776604315273]),
            {
              "class": 2,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.94713020324707, 23.44235314750144]),
            {
              "class": 2,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.0975513458252, 21.999691151716178]),
            {
              "class": 2,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.12115478515625, 22.00924055036948]),
            {
              "class": 2,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.99309539794922, 21.932986604338492]),
            {
              "class": 2,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.05034446716309, 21.933862403824595]),
            {
              "class": 2,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.95241165161133, 21.940231692454088]),
            {
              "class": 2,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.97567176818848, 21.9061526812977]),
            {
              "class": 2,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.84495162963867, 21.980590425407264]),
            {
              "class": 2,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.82418060302734, 21.988708548277412]),
            {
              "class": 2,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.8541784286499, 21.998630482208824]),
            {
              "class": 2,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.87997055053711, 21.947767486303945]),
            {
              "class": 2,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.93610382080078, 21.921493724742255]),
            {
              "class": 2,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.90983963012695, 21.910823600539835]),
            {
              "class": 2,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.00034809112549, 21.875743171568]),
            {
              "class": 2,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.11420249938965, 21.97446173097949]),
            {
              "class": 2,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.09463310241699, 21.98425159713073]),
            {
              "class": 2,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.03961563110352, 22.02674611028927]),
            {
              "class": 2,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.00185012817383, 21.989504417680116]),
            {
              "class": 2,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.80125045776367, 25.339652951518424]),
            {
              "class": 2,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.7916374206543, 25.372384168823142]),
            {
              "class": 2,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.69722366333008, 25.355956648552823]),
            {
              "class": 2,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.72880935668945, 25.342350994246488]),
            {
              "class": 2,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.88991355895996, 25.17409215142309]),
            {
              "class": 2,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.91094207763672, 25.192274833594343]),
            {
              "class": 2,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.90300273895264, 25.206059920183705]),
            {
              "class": 2,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.89755249023438, 25.21134055393285]),
            {
              "class": 2,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.94046783447266, 25.061173176467733]),
            {
              "class": 2,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.96254777908325, 25.061786672987438]),
            {
              "class": 2,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.99252414703369, 25.04543502975695]),
            {
              "class": 2,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.98595809936523, 25.05064485462728]),
            {
              "class": 2,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.98698806762695, 25.044696305325502]),
            {
              "class": 2,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.9624834060669, 25.120722670018623]),
            {
              "class": 2,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.9608097076416, 25.141298942963886]),
            {
              "class": 2,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.08843994140625, 25.291858783759537]),
            {
              "class": 2,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.11006927490234, 25.321499596228815]),
            {
              "class": 2,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1244888305664, 25.333912441213798]),
            {
              "class": 2,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.0468978881836, 25.373624988464698]),
            {
              "class": 2,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.00209426879883, 25.379067964671343]),
            {
              "class": 2,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.02797222137451, 25.41291989955777]),
            {
              "class": 2,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.00793075561523, 25.43682690422385]),
            {
              "class": 2,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.05157566070557, 25.44245352966668]),
            {
              "class": 2,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.12959575653076, 25.510717465490412]),
            {
              "class": 2,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.1169786453247, 25.534651023411055]),
            {
              "class": 2,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.12985324859619, 25.55064279450987]),
            {
              "class": 2,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.13320064544678, 25.559377108141728]),
            {
              "class": 2,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.16671752929688, 25.563721644555887]),
            {
              "class": 2,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.21478271484375, 25.558192647183326]),
            {
              "class": 2,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.22061920166016, 25.557263460216877]),
            {
              "class": 2,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.18628692626953, 25.554592007548912]),
            {
              "class": 2,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.17658805847168, 25.561212455054957]),
            {
              "class": 2,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.74956703186035, 24.598938502757477]),
            {
              "class": 2,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.74119853973389, 24.622184032206835]),
            {
              "class": 2,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.80218124389648, 24.560365664479846]),
            {
              "class": 2,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.68218994140625, 24.51523594478737]),
            {
              "class": 2,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.66536712646484, 24.56645459117173]),
            {
              "class": 2,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.64871597290039, 24.644959605158146]),
            {
              "class": 2,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.72562026977539, 24.677876455306162]),
            {
              "class": 2,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.72647857666016, 24.766443552302015]),
            {
              "class": 2,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.80389785766602, 24.737447888675824]),
            {
              "class": 2,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.09366226196289, 24.713279669677853]),
            {
              "class": 2,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.07289123535156, 24.68286782582355]),
            {
              "class": 2,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.09795379638672, 24.641839074158717]),
            {
              "class": 2,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.08130264282227, 24.60142115818119]),
            {
              "class": 2,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.05366516113281, 24.645739725725317]),
            {
              "class": 2,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.0533218383789, 24.579724303917878]),
            {
              "class": 2,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.10155868530273, 24.54553242611734]),
            {
              "class": 2,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.02946090698242, 24.541316343516268]),
            {
              "class": 2,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.02928924560547, 24.502896623685633]),
            {
              "class": 2,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.11237335205078, 24.47102745874329]),
            {
              "class": 2,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.98843383789062, 24.406483324458566]),
            {
              "class": 2,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.0588150024414, 24.418675788182117]),
            {
              "class": 2,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.00559997558594, 24.353010167353705]),
            {
              "class": 2,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.97830581665039, 24.29560301808744]),
            {
              "class": 2,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.94002532958984, 24.28809280414056]),
            {
              "class": 2,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.97246932983398, 24.326734372248875]),
            {
              "class": 2,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.04542541503906, 24.31969528746019]),
            {
              "class": 2,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.04542541503906, 24.34223364514755]),
            {
              "class": 2,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.04585456848145, 24.390630384335854]),
            {
              "class": 2,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.05872917175293, 24.356699876840082]),
            {
              "class": 2,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.1368350982666, 24.348567712177623]),
            {
              "class": 2,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.12790870666504, 24.284273963776915]),
            {
              "class": 2,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.29193115234375, 24.220921196957896]),
            {
              "class": 2,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.33999633789062, 24.271946295989647]),
            {
              "class": 2,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.39947700500488, 24.30477015741225]),
            {
              "class": 2,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.38419914245605, 24.28508688275915]),
            {
              "class": 2,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.37668895721436, 24.305739390895102]),
            {
              "class": 2,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.50826740264893, 24.28510277435656]),
            {
              "class": 2,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.71499061584473, 24.384579361725475]),
            {
              "class": 2,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.71129989624023, 24.385908315215882]),
            {
              "class": 2,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.73528957366943, 24.383172219270502]),
            {
              "class": 2,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.69827508926392, 24.393748612086267]),
            {
              "class": 2,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.75558853149414, 24.3863162815908]),
            {
              "class": 2,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.7806510925293, 24.39694737210285]),
            {
              "class": 2,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.82519721984863, 24.41783075556391]),
            {
              "class": 2,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.82768630981445, 24.39297547466012]),
            {
              "class": 2,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8509464263916, 24.43460090810185]),
            {
              "class": 2,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.82983207702637, 24.45013457087088]),
            {
              "class": 2,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.70872497558594, 24.39616570473877]),
            {
              "class": 2,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.8494873046875, 24.519921445490482]),
            {
              "class": 2,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.77601623535156, 24.546937755501503]),
            {
              "class": 2,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.74752044677734, 24.56190987940884]),
            {
              "class": 2,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.76880645751953, 24.561863528842682]),
            {
              "class": 2,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.82412433624268, 24.60019812730785]),
            {
              "class": 2,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-98.89238119125366, 24.63693017484465]),
            {
              "class": 2,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.31589126586914, 24.639513252690083]),
            {
              "class": 2,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.32387351989746, 24.635222315377728]),
            {
              "class": 2,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.30464744567871, 24.617323129263536]),
            {
              "class": 2,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.30971145629883, 24.614279939591775]),
            {
              "class": 2,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.30559158325195, 24.629144047983953]),
            {
              "class": 2,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.30473327636719, 24.647477914337887]),
            {
              "class": 2,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.31031227111816, 24.59816540648394]),
            {
              "class": 2,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.29052829742432, 24.603690379213468]),
            {
              "class": 2,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.28902626037598, 24.608778601110433]),
            {
              "class": 2,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-99.28331851959229, 24.59042320584891]),
            {
              "class": 2,
              "system:index": "844"
            })]),
    input1 = ee.Image("users/images/input/SMadre_0_2007-13_InputTOA"),
    input2 = ee.Image("users/images/input/SMadre_1_2007-13_InputTOA"),
    input3 = ee.Image("users/images/input/SMadre_2_2007-13_InputTOA"),
    input4 = ee.Image("users/images/input/SMadre_3_2007-13_InputTOA"),
    image = ee.Image("users/images/SMadre_2010_v4"),
    image2 = ee.Image("users/images/Chihuahua_2010_v3");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR"); 
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw"); 

/*
function radians(img) {return img.toFloat().multiply(Math.PI).divide(180).divide(1.5708).toFloat();}
var terrain = ee.Algorithms.Terrain(ee.Image('USGS/SRTMGL1_003'));
var slope = radians(terrain.select('slope'));
var elevation = terrain.select('elevation').divide(4000.00).float();
*/

//input=input.select(ee.List.sequence(0,43)).addBands(slope).addBands(elevation);

//visual parameters for FCC display 
var vizParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  gamma: [1.5,1.6, 1.7]
};

var SMadre=ee.ImageCollection([SMadre1,SMadre2]).mosaic()


//add all max val to map
//Map.addLayer(SMadre,vizParams,'FCC');
//Map.addLayer(image,{palette: '00ff00'},'Prev_crop')
//print(countries)
//throw('stop')
var input=ee.ImageCollection([input1,input2,input3,input4]).mosaic()


//Map.addLayer(image,{palette: 'ffff00'},'Prev_crop')
//throw('stop')

//create bounds for training samples inside area of interest
function buffer(geometry) {
  return geometry.buffer(60).bounds();
} 

//buffer function of 1km********************************************************
function buffer1(geometry) {
  return geometry.buffer(10000);
}

function buffer2(geometry) {
  return geometry.buffer(10000);
}

var studyArea = zones.filterMetadata('name','equals','SMadre');

var region= ee.FeatureCollection(countries.filterMetadata('Country','equals','Mexico'))
  //          .merge(ee.FeatureCollection(countries.filterMetadata('Country','equals','Dominican Republic')))
  //          .merge(ee.FeatureCollection(countries.filterMetadata('Country','equals','United States')))
  //          .merge(ee.FeatureCollection(countries.filterMetadata('Country','equals','United Kingdom')))
              .map(buffer2)

//region=region.merge(Islands)
//print(region)
//Map.addLayer(region)
//throw('stop')

studyArea=buffer1(studyArea.geometry());


//print(CropSamples);
var CropSamplesArea = Cropclass.filterBounds(studyArea).map(buffer);
print('Crop:',CropSamplesArea);

//print(NonCropSamples);
var NonCropSamplesArea = NonCropClass.filterBounds(studyArea).map(buffer);
print('Non-crop:',NonCropSamplesArea);

//var NonCropSamplesArea2 = NonCropClass2.filterBounds(studyArea).map(buffer);
//print('Non-crop:',NonCropSamplesArea2);

//merge all training samples into one feature collection
var TrainingSamples=CropSamplesArea
                    .merge(NonCropSamplesArea)
//                    .merge(NonCropSamplesArea2);
print('Training samples:',TrainingSamples);

//add layer to map
//Map.addLayer(TrainingSamples, { },'Samples');

print('Study Area:');
print(studyArea);

print(input)

var training = input.sampleRegions({
    collection: TrainingSamples,
  properties: ['class'],
  scale: 30
});
 

//build classifier
var classifier = ee.Classifier.randomForest(200,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);

classified = classified.updateMask(classified.eq(1)).clip(studyArea).clipToCollection(region);

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'SMadre_v1_asset',
  assetId: 'SMadre_2010_v1',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'SMadre',
  fileNamePrefix: 'SMadre_2010_v1',
  region: studyArea, 
});
 

Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_SMadre_v1',
  folder: 'data',
  fileNamePrefix: 'RFtable_SMadre_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');
//Map.addLayer(image.updateMask(image.eq(1)), {palette: 'FFFF00'}, 'cropland2');




