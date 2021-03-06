/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var BajaSonora = ee.Image("users/images/RHseg/BajaSonora_2007-13_RHsegSR"),
    Cropclass = /* color: d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-115.65101623535156, 32.65685955353745]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.43403625488281, 32.67477881802807]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.28812408447266, 32.52257000025248]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.30752182006836, 32.58811392096015]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.37824630737305, 32.56616389344799]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.44021606445312, 32.540082001891854]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.3787612915039, 32.464654797266206]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.21310806274414, 32.463061602493525]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.19800186157227, 32.56381182649107]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.12744903564453, 32.549487865794376]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.05861282348633, 32.62122938045485]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.9990463256836, 32.64378137127914]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.87373352050781, 32.67745420631402]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.8097038269043, 32.67254136427603]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.84506607055664, 32.60590234906006]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.70670700073242, 32.623542666729925]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.620361328125, 32.519385633187596]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.6778678894043, 32.547751472780675]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.65538024902344, 32.53328022493942]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.56697463989258, 32.49998750638309]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.67735290527344, 32.46899973066728]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.76747512817383, 32.52097783082501]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.72970962524414, 32.53574050160048]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.82841491699219, 32.514898378987205]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.90411758422852, 32.5098318549958]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.07320404052734, 32.5143193621267]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.05208969116211, 32.42423687821636]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.10444641113281, 32.3916285834709]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.11165618896484, 32.17807796388072]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.22529602050781, 32.23762887831813]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.0320053100586, 32.26318023332664]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.93141174316406, 32.33573006583024]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.93158340454102, 32.3664736566506]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.12247085571289, 32.34617245708344]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.98342514038086, 32.36509848492597]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.21664047241211, 31.8908924623929]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.2379264831543, 31.90226026574484]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.2324333190918, 31.859405067323152]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.15982055664062, 31.885974405000066]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.29749298095703, 31.925137356621228]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.28753662109375, 31.965631877303082]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.28564834594727, 31.989512359923804]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.3455581665039, 32.00217814176812]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.15020751953125, 30.880270901885503]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.13475799560547, 30.949195094079922]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.27105712890625, 31.00894805967989]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.17870330810547, 30.98893645528136]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.2518310546875, 31.084836227582315]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.0928726196289, 30.844611147809946]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.97957611083984, 30.833704278068982]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.9713363647461, 30.948606208835443]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.90404510498047, 31.00306272962487]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.99777221679688, 30.99393975007119]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.06197357177734, 31.06631098009583]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.06300354003906, 31.12452102758336]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.1968994140625, 31.21294368345609]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.1471176147461, 31.265194631838376]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.24702453613281, 31.261379529816796]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.33113861083984, 31.255803334056036]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.3895034790039, 31.289842341706354]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.25492095947266, 31.452531242684653]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.378173828125, 31.399505096346363]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.44683837890625, 31.499162941278232]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.40400886535645, 31.567602030539028]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.42709732055664, 31.586760050711177]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.59051895141602, 31.745611064135257]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.53730392456055, 31.764440511548184]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.58674240112305, 31.704435682465604]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.56494140625, 31.673978140213144]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.25398254394531, 27.44932856364043]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.16162872314453, 27.541300825697892]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.02944946289062, 27.44932856364043]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.12248992919922, 27.40666636772466]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.03150939941406, 27.239516030402342]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.09124755859375, 27.36795140791684]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.99237060546875, 27.440492748385008]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.12248992919922, 27.30237946348898]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2642822265625, 27.578129064055346]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.32402038574219, 27.656918199015486]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.43800354003906, 27.641104079673607]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.48160552978516, 27.59699494320884]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91649627685547, 27.39477896378118]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.49131774902344, 28.87623582444846]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51603698730469, 29.03665109838785]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56135559082031, 28.6204642210998]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61937713623047, 28.678987210186794]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.3193130493164, 28.776532031453442]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.37201309204102, 28.784132430028645]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.47706985473633, 28.796167808076504]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.41348266601562, 30.837089777821117]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.7471923828125, 30.855364807534794]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.85551071166992, 30.81579599246848]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.91318893432617, 30.807392342893117]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.3297119140625, 30.69829715505757]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.4399185180664, 30.725452842016768]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.54497528076172, 30.757911559465043]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.36953735351562, 30.639017451556054]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.40867614746094, 30.675639276975154]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.22817420959473, 30.69339258947014]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.18414306640625, 30.67877774375182]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.13667869567871, 30.68992360916459]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.1044921875, 30.707562448079926]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.0524787902832, 30.722172935144407]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.03660011291504, 30.74246160562548]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.65947341918945, 30.812847427209412]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.77791976928711, 30.76403553242943]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.9555892944336, 30.72272516629292]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.9969596862793, 30.631927753961342]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.98185348510742, 30.593368432614334]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.86029052734375, 29.357563857608337]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.92294692993164, 29.365792412647565]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.93221664428711, 29.31356721905352]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.8517074584961, 29.417691779269845]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.79729080200195, 29.374768259828297]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.85187911987305, 29.29874775240114]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.88157653808594, 29.133042760403136]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.81986427307129, 29.156020399184808]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.81188201904297, 29.185510029545135]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.64382553100586, 29.259368419790704]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61346292495728, 29.27288338004874]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.86475372314453, 29.15028496276629]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.86801528930664, 29.184011336794406]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.83292388916016, 30.59056083273026]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77301406860352, 30.57814731126675]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.85918807983398, 30.62661013983065]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.88751220703125, 30.624689818472792]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.97042465209961, 30.637688172832608]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.00492858886719, 30.676082197981952]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.03084945678711, 30.710476190168723]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.07754135131836, 30.724348407805415]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.93008422851562, 30.97002687402921]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.9723129272461, 30.92541826870576]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.06398010253906, 31.000784365642573]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.02595710754395, 31.018551172515778]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.03951835632324, 31.007811253730075]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.05780029296875, 31.02737759678161]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.02655792236328, 31.042601256464085]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.02424049377441, 31.037085718902684]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.69912719726562, 31.832790470652444]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.75337219238281, 31.847373513905755]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.61432647705078, 31.747287532887224]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.58583068847656, 31.692091825586008]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.5937271118164, 31.699945848775748]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.60239601135254, 31.695345112710005]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7892951965332, 30.105110764120795]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.8189926147461, 30.074811018815424]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7618293762207, 30.140894084001737]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.77676391601562, 30.17889037382412]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.78620529174805, 30.15232419514167]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7947883605957, 30.034396920891737]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7673225402832, 29.97612407402055]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.73899841308594, 29.932545753989604]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21553039550781, 29.960770891505113]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.20162582397461, 29.948277471543367]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2174186706543, 29.929311245369128]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22831916809082, 29.911085387504777]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23724555969238, 29.85586672979882]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.95416259765625, 30.498603989605147]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.92755508422852, 30.47597104024265]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.96926879882812, 30.5331730950001]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.95004272460938, 30.570757555781064]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.92257690429688, 30.438237764657266]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.92051696777344, 30.38805208834296]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.92927169799805, 30.348359021052367]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.56235885620117, 30.879757558170063]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.62604522705078, 30.87474828410456]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.54364776611328, 30.93307535111322]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.93084335327148, 30.679146832738255]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.9589958190918, 30.65153508397923]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.41286849975586, 30.57637382130437]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.69978713989258, 30.472272345645777]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.72519302368164, 30.364949128331435]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87755584716797, 25.44435484819443]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7584228515625, 25.34696879836861]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.71825408935547, 25.369926726687343]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6866683959961, 25.328040742317153]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61233901977539, 25.33820572860605]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.74674987792969, 25.371712860696874]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8159294128418, 25.488102308134724]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8821907043457, 25.501000357066754]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.08861351013184, 26.178181726690113]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.28230094909668, 31.982159580777385]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.24427795410156, 31.969984226089256]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.25080108642578, 31.4132440070715]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.26916885375977, 31.420642017245605]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.8592414855957, 31.595735019037964]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.90524673461914, 31.654475045668953]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.79795837402344, 31.557691283156817]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.77341079711914, 31.584748232331137]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.36433362960815, 31.405818800834062]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.35997772216797, 31.38463417660512]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.44083023071289, 31.425842249394595]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.48408889770508, 31.42437742444185]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.47550582885742, 31.438219106583478]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.4012622833252, 31.432965206720354]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.5215539932251, 31.43747849788976]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.57343864440918, 31.4800978796613]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.59987449645996, 31.550341817782922]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.0427474975586, 30.793013671148714]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.01390838623047, 30.800976232958032]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.96275329589844, 30.731650350824275]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.87211608886719, 30.491427751140943]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.99605560302734, 30.638055110972093]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.99605560302734, 30.753781057385968]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.83332061767578, 30.394639041143236]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.81499862670898, 30.82412289697485]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.82306671142578, 30.914150106881735]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.8024673461914, 30.918862785289907]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.79216766357422, 30.921513564876197]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.43322372436523, 30.807282915524606]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.42704391479492, 30.787450315249394]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.39717483520508, 30.792906531488658]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.49184608459473, 30.704315372603368]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.45107650756836, 30.6905878916394]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.42755889892578, 30.689480751641895]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.35889434814453, 30.502964942581528]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.25383758544922, 30.635396508811414]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.88756561279297, 30.55412623763706]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.9383773803711, 30.66818082812296]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.94524383544922, 30.54496058815456]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.02506637573242, 30.49742069784142]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.89795112609863, 30.568356918735148]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.6391716003418, 31.3693755852899]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.7358169555664, 31.38225392394323]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.70157051086426, 31.36723140952921]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.54863357543945, 31.7250256599677]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61231994628906, 31.724733635520266]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.66592693328857, 29.25197550024859]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.66365242004395, 29.241603334588977]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.63602566719055, 29.26475715692586]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.60567378997803, 29.29009475973207]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.05134963989258, 29.026526889106815]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.07589721679688, 29.021273259787755]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.12516403198242, 28.959110060232376]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.15906715393066, 28.932485255720604]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.18395805358887, 28.901005955402024]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.2325382232666, 28.86485684536846]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.3999080657959, 28.673380652698345]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57998085021973, 28.59269775815175]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54848098754883, 28.754940870356993]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60581588745117, 28.855572113043564]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61113739013672, 28.951750107538835]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66014671325684, 28.997517187347956]),
            {
              "class": 1,
              "system:index": "242"
            })]),
    NonCropClass = /* color: 98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-116.2353515625, 31.956672818735708]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.24616622924805, 31.948591394209902]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.18934631347656, 31.974078124041824]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.2247085571289, 32.043366225569635]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.32049560546875, 32.02488481765442]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.3426399230957, 32.020518586164734]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.26195907592773, 32.01324107127199]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.2188720703125, 31.965906642843173]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.28049850463867, 32.001652141735015]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.30680561065674, 32.005182254932144]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.2796401977539, 32.013806805061805]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.33161067962646, 32.0198107595057]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.26195907592773, 31.839976325413474]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.1419677734375, 31.826850637958092]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.1046314239502, 31.84610100732012]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.1038589477539, 31.87941506818509]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.60511016845703, 31.783266128313368]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.59721374511719, 31.81550886000675]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.64339065551758, 31.695234427509266]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.53009414672852, 31.715388367395864]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.56923294067383, 31.71334396441005]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.45421981811523, 31.5512549612098]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.39122009277344, 31.584309533628307]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.47224426269531, 31.586795465637167]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.26753807067871, 31.47087444367547]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.28255844116211, 31.4804638702738]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.30856513977051, 31.45667150329285]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.2668514251709, 31.434484250827726]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.23251914978027, 31.456525070007622]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.23603820800781, 31.43126190275396]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.27114295959473, 31.407823312458248]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.27586364746094, 31.41414189383901]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.78765869140625, 31.361037358187595]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.67951202392578, 31.39694320744171]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.72603225708008, 31.40016673457783]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.7076644897461, 31.399287601791592]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.70011138916016, 31.31452371005856]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.66431999206543, 31.327941683620598]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.65093040466309, 31.332340602941464]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.74997901916504, 31.330361114688422]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.7296371459961, 31.330141168979317]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.83332061767578, 31.568222488511765]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.7929801940918, 31.57389097506777]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.78516960144043, 31.5930477027371]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.84143161773682, 31.603008946838944]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.8799695968628, 31.599975166614932]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.89099884033203, 31.611049813828544]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.81066131591797, 31.66901086717492]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.8834457397461, 31.571657214313696]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.93425750732422, 31.605874156422495]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.89683532714844, 31.633940208543677]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.77152252197266, 31.570487182208392]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.3715648651123, 31.391119744131892]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.37860298156738, 31.411192970264526]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.3631534576416, 31.408318352989962]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.4027214050293, 31.4381281398981]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.41478061676025, 31.417840936453906]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.44121646881104, 31.420551033504722]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.49773597717285, 31.42853437776828]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.5076494216919, 31.440801036124196]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.61283493041992, 31.56511558663552]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.60326480865479, 31.536755039634382]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.63841247558594, 31.606458952169024]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.60167694091797, 31.652938457954384]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.62673950195312, 31.66667323499611]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.51653289794922, 31.59037573094841]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.1090087890625, 30.86125923574221]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.97991943359375, 30.785783204324645]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.99639892578125, 30.88188688073614]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.99021911621094, 30.728994324415396]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.9552001953125, 30.753781057385968]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.02592468261719, 30.831935479686862]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.95417022705078, 30.70567717431051]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.97614288330078, 30.6805828061564]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.87623596191406, 30.6058515697844]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.90919494628906, 30.58161799268973]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.93116760253906, 30.52396503397714]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.84087371826172, 30.454440355117086]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.80448150634766, 30.339838370761626]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.69290161132812, 30.40974085137694]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.68946838378906, 30.368279308793113]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.7797622680664, 30.586051416976993]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.73817729949951, 30.692341413955216]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.42957305908203, 32.631997851946316]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.47832489013672, 32.658812873646255]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.4524040222168, 32.62441013367044]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.34957885742188, 32.57885675680305]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.33121109008789, 32.61067425327492]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.34683227539062, 32.64811764090334]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.47660827636719, 32.57567438585961]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.51712036132812, 32.65707859849526]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.57428359985352, 32.63322890365988]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.2440071105957, 32.707647799314444]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.23731231689453, 32.72858950612095]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.14753341674805, 32.62325350921489]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.11148452758789, 32.635830997598866]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.1480484008789, 32.55021135297046]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.24023056030273, 32.48623256786127]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.29996871948242, 32.395977036735296]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.28074264526367, 32.39148363142263]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.26220321655273, 32.402681624225345]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.26065826416016, 32.41253661107923]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.25237560272217, 32.40596126682635]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.22357940673828, 32.40101486566374]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.21842956542969, 32.42152110238259]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.23336410522461, 32.410290348466354]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.19001960754395, 32.40949327409959]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.92300033569336, 32.50968709297158]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.9770736694336, 32.51518788601876]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.92094039916992, 32.525030570242365]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.84798431396484, 32.50442291242709]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.76318359375, 32.45893138538592]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.77622985839844, 32.47833836484197]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.8287582397461, 32.39343819961589]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.9557876586914, 32.39604724441926]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.10478973388672, 32.289885324575586]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.89982604980469, 32.283500039714724]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.80026245117188, 31.900577500363784]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.048828125, 31.969338582886085]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.86961364746094, 31.811344654617084]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.00076293945312, 31.740713776840057]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.99320983886719, 31.66301600101977]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.02616882324219, 31.645481194534337]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.6478271484375, 31.847514775863996]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.37042236328125, 31.989723925601226]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.74371337890625, 32.21625041086989]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.58990478515625, 32.10696984419854]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.6805419921875, 32.529411032214846]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.7684326171875, 32.62661716659996]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.64483642578125, 32.41587080404862]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.98016357421875, 31.108176022065273]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.27679443359375, 31.117581977375448]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.65483856201172, 31.775677968529195]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.6871109008789, 31.770716142826004]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.72470474243164, 31.78457940045417]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.71183013916016, 31.78341204836121]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.7501106262207, 31.820176558340155]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.71234512329102, 31.840157474184384]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.66050338745117, 31.768818903841805]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.70118713378906, 31.815946466748084]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.55424499511719, 31.668647898849112]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.56282806396484, 31.634307879769235]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.59767532348633, 31.656812984777723]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.61913299560547, 31.69435806991856]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.73215866088867, 25.35589120545621]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.74520492553711, 25.333706378982097]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.72563552856445, 25.380398378809122]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.796875, 25.35620105389634]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.75601959228516, 25.406296125384877]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66109085083008, 25.348910405093626]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65473937988281, 25.339912334700262]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.63585662841797, 25.332309995085357]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94121551513672, 27.476745552093938]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.27217864990234, 27.481618969394756]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1218032836914, 27.59699494320884]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.11219024658203, 27.531559061099447]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.99992370605469, 27.613423870189212]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.92919921875, 27.51572685208003]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.0174331665039, 27.585128075346383]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.0679874420166, 27.566910457761754]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.08712768554688, 27.585967261047]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.08609771728516, 27.612589648113122]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.14034271240234, 27.557512194226526]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.19424438476562, 27.34409314275984]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.159912109375, 27.360712283867578]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.09244918823242, 27.3413484575624]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.10450839996338, 27.354520301470085]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.01811981201172, 27.43432487287636]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94499206542969, 27.447122056461758]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91203308105469, 27.469665863149405]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90825653076172, 27.51154244849542]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95803833007812, 27.574860011419865]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.98687744140625, 27.632210009095466]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.04850387573242, 27.64589655051546]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.01211166381836, 27.667639422119667]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.44727325439453, 27.577903205369577]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.45757293701172, 27.61624021402546]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.467529296875, 27.644832103141656]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.50512313842773, 27.662774259974658]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.41568756103516, 27.62551818804279]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.49894332885742, 27.607722037640094]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33140182495117, 27.6451362320197]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.884521484375, 30.72102580605205]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.72830963134766, 30.800681335023636]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.71835327148438, 30.754371139960234]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.78289794921875, 30.660207287201803]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.85224914550781, 30.60910195444567]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.92984008789062, 30.65430053645012]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.9452896118164, 30.608215496719865]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.9892349243164, 30.708629023955528]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.93988227844238, 30.767649346468417]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.04691314697266, 30.656663280064393]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.06922912597656, 30.667294911621994]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.04656982421875, 30.683240165704547]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.81791687011719, 30.681763863872415]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.69208908081055, 30.82644808200917]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.66410827636719, 30.86576040077019]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.57038116455078, 30.905094577707633]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.45811462402344, 30.86281337031559]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.42755889892578, 30.806433985284933]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.07324981689453, 30.477522138472178]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.1323013305664, 30.503852362169102]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.1923828125, 30.566838447601288]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.24594116210938, 30.575706444937538]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.27031707763672, 30.473083758803114]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.30533599853516, 30.467461520790206]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.14775085449219, 30.635691912659517]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.15599060058594, 30.715417935345783]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.05162048339844, 30.688849906818838]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.2586441040039, 30.681763863872415]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.23461151123047, 30.725157712610383]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.99102401733398, 30.998909445064726]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.98776245117188, 31.04460573047697]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.00475692749023, 31.032267405567474]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.04458236694336, 30.939406706082938]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.06295013427734, 30.974736797839476]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.10466384887695, 31.01005381747531]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.1238899230957, 31.017556999275786]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.09616661071777, 31.028775038966497]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.12414741516113, 30.990006805344997]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.08621025085449, 30.999350876648737]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.02861785888672, 30.981912775461605]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.00295448303223, 30.99486289366166]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.95840835571289, 31.013143434462307]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.90021514892578, 31.072415245717092]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.95789337158203, 31.108577906889213]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.02810287475586, 31.104168563204368]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.96544647216797, 31.079436849065264]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.95265769958496, 31.069953598993983]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.95164918899536, 31.076451323938436]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.96083307266235, 31.075293499600882]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.96922302246094, 31.073028493684898]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.97627186775208, 31.07609768935481]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.98387861251831, 31.073644178604642]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.26747131347656, 28.693745199658906]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.49646759033203, 28.84361643214302]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.49166107177734, 28.92215481581169]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.64718627929688, 28.90742913759766]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7258071899414, 28.8403858836498]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.72889709472656, 28.798273856391223]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7416000366211, 28.54810984659634]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68632507324219, 28.469518906542092]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58504486083984, 28.455484041212728]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57697677612305, 28.506181851621296]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46865844726562, 28.55007009997611]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.29322052001953, 28.620537209802986]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.8853530883789, 29.18142721123161]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.83840370178223, 29.18494919318106]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.84415435791016, 29.223158667413834]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.90475082397461, 29.0748113978799]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.83514213562012, 29.109687381622244]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.76733589172363, 29.087863148990206]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.79351425170898, 29.10811259190503]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95942497253418, 29.099038334080383]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.98337173461914, 29.10878750473488]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.00826263427734, 29.109012474694463]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.97933769226074, 29.125658886687734]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.9974479675293, 29.139228967530833]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.01203918457031, 29.155945443535156]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.00199699401855, 29.165464373322333]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95710754394531, 29.055114610726616]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95264434814453, 29.19727166558808]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.0934066772461, 29.19397489073213]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.76734399795532, 30.15764188818719]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.79616165161133, 30.158373871129132]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7698974609375, 30.133509500365008]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.81392860412598, 30.130688668591606]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.77358818054199, 30.1867932183077]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.75427627563477, 30.191392968465607]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.77530479431152, 30.199330741633396]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.95090103149414, 30.51398547256421]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.973388671875, 30.504372330821397]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.98077011108398, 30.543114880176557]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.90626907348633, 30.545776014922904]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.95622253417969, 30.562036920123035]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.28782653808594, 30.763811969323655]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.40421295166016, 30.726928475495352]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.47116088867188, 30.602010065463027]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.52506256103516, 30.59669080798681]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.3135757446289, 30.593440006877117]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.57823753356934, 30.917062192159285]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.57969665527344, 30.89467448124011]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.91998291015625, 31.883351865091427]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.59588623046875, 31.619437730982714]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.49700927734375, 31.464945755899546]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.21685791015625, 31.54690516411476]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.26605224609375, 32.24877672250788]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.664306640625, 32.19533449236381]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.29351806640625, 31.85069539106691]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.17816162109375, 31.635808237342815]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.8565673828125, 31.680227943609886]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.89227294921875, 31.460260191226844]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.72747802734375, 31.72229017615574]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.5272216796875, 31.368844841933754]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.2633056640625, 32.18138787520091]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.34295654296875, 32.39036251006614]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.24407958984375, 32.357886986641255]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.54345703125, 32.27896929859497]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.58740234375, 32.46454843428862]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.20013427734375, 32.311473144908135]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.75244140625, 31.783013047684392]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.4388427734375, 31.99988760282659]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.2191162109375, 31.701261443900847]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.2520751953125, 31.76433332955566]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.02960205078125, 31.406359350726138]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.9554443359375, 31.228032094148688]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.0982666015625, 31.84602923605866]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.2740478515625, 31.89501208695374]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.0979232788086, 31.928704558929397]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.18512725830078, 31.9546337541818]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.11852264404297, 31.90509972025097]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.15697479248047, 31.991038806720294]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.25104522705078, 31.979973198322128]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.98016357421875, 31.9113339168641]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.7027587890625, 32.137209494196945]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.54345703125, 31.948630084784657]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.45556640625, 32.15581352817387]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.3621826171875, 31.747985482358068]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.91998291015625, 31.790016969397872]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.06829833984375, 31.90200751133846]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.04632568359375, 32.048788519387]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.02984619140625, 31.757327462856633]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.20013427734375, 31.98824068067838]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.81011962890625, 32.046460496319696]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.35943603515625, 32.139535206040556]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.30999755859375, 32.35324667361139]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.9337158203125, 32.29522267859596]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.76617431640625, 31.881019643557085]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.84857177734375, 31.77600859543426]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.719482421875, 31.649837806879734]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.169921875, 31.77600859543426]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.9169921875, 32.751441494571544]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.01312255859375, 32.74220123432006]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.05706787109375, 32.7445113892332]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.1641845703125, 31.96204790364594]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.18478393554688, 31.917763485784956]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.16006469726562, 31.91310072703467]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.23422241210938, 31.920094776532718]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.77279663085938, 32.27840690853225]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.65572357177734, 32.43662267702915]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.52972412109375, 32.25574513150764]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.31549072265625, 32.25109958492803]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.4500732421875, 31.745649839945848]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.48028564453125, 31.801688993108318]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.5162353515625, 31.471973663256172]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.42010498046875, 31.404015133007874]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.5986328125, 31.525836752015817]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.04632568359375, 31.65217586264255]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.1094970703125, 31.572648987842662]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.21685791015625, 31.371189937728282]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.39813232421875, 31.333661384156613]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.1864013671875, 32.24413081941839]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.26599311828613, 31.83684091423607]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.28925323486328, 31.847559204983565]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.30865097045898, 31.882130530856664]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.22093200683594, 31.838226341615098]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.20814323425293, 31.844132403908468]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.17634296417236, 31.83747951225287]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.29783630371094, 31.833594876689812]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.37619972229004, 31.838864930043744]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.35358333587646, 31.84258358020362]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.39448165893555, 31.847302882845465]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.40083312988281, 31.838990824297163]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.41791343688965, 31.83355955589201]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.44563674926758, 31.86039035033318]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.47911071777344, 31.844934432591973]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.72026824951172, 30.47389978857788]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.64405059814453, 30.508069805505123]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.63890075683594, 30.48603077867746]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.65932846069336, 30.493722818309823]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.66739654541016, 30.517238936018163]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.77210998535156, 30.483959741045467]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.70945358276367, 30.46221118558295]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.66207504272461, 30.46738985365474]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.67220306396484, 30.412037843026962]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.68473434448242, 30.421067989110103]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.70945358276367, 30.42269628718436]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.66344833374023, 30.44104976740275]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.64628219604492, 30.38671937369736]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.68095779418945, 30.403006861476182]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.7353744506836, 30.380944066851658]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.75048065185547, 30.362875518787284]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.77108001708984, 30.34332218185872]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.79888916015625, 30.35265494374989]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.72867965698242, 30.328210109145946]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.81176376342773, 30.39560379462076]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.7690200805664, 30.39767670990664]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.70258712768555, 30.355173155574686]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.71271514892578, 30.337396156836594]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.66825485229492, 30.34584063385787]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.65984344482422, 30.413814331223048]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.77331161499023, 30.443861689047953]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.66241836547852, 30.303759171788045]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.76661682128906, 30.32509851053272]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.66842651367188, 30.332803240709836]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.68868255615234, 30.299164678555286]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.6723747253418, 30.37901888872352]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.71048355102539, 30.38316537910796]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.70499038696289, 30.305537627493067]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.70464706420898, 30.416627038073997]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-114.74876403808594, 30.429949284833295]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.01493835449219, 30.66404648162368]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.00669860839844, 30.6805828061564]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.01871490478516, 30.465686009774558]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.97648620605469, 30.44792911968643]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.91846466064453, 30.449113013030015]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.91846466064453, 30.473083758803114]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.93700408935547, 30.56174129161816]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.63183307647705, 31.424139960428928]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.63556671142578, 31.412603635159513]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.61891555786133, 31.429376617572355]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.61393737792969, 31.411980999475873]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.62603950500488, 31.399197742052095]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.63427925109863, 31.39447225773966]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.63273429870605, 31.381393514740328]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.3729248046875, 30.94813233760494]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.279541015625, 30.683946014542467]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.90301513671875, 31.89967576227679]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.98541259765625, 32.38572386410969]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-117.01263427734375, 32.51783185630887]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.87255859375, 32.49466902872255]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.7684326171875, 32.515515842076475]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.63385009765625, 32.32075781716909]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.521240234375, 31.806357389835934]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.21063232421875, 31.754992056109312]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-116.65008544921875, 32.139535206040556]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.92498779296875, 31.361809203447933]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.806884765625, 31.176348075348923]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.67779541015625, 30.92928600024664]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.29327392578125, 30.134401432453362]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-115.5322265625, 29.84894479997479]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.12921142578125, 31.460260191226844]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.71722412109375, 31.453231404614243]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.0003662109375, 31.101120944034022]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.27801513671875, 30.56813636660866]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.0885009765625, 30.688669994194274]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.92645263671875, 30.94342110163165]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23956298828125, 30.95755411269655]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.56365966796875, 30.10351663856357]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.95068359375, 29.684436325618947]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.0660400390625, 29.50292650572396]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.31072998046875, 29.242034553982744]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.89324951171875, 28.725480062668236]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.44830322265625, 28.867488836835054]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.51971435546875, 28.291041942116266]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.8245849609375, 28.426392077174604]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.137939453125, 27.840252489970712]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.91230392456055, 29.212521381938853]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.91118812561035, 29.238063990342074]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.94322443008423, 29.235995854301063]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95024108886719, 29.262327309932513]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.95494031906128, 29.28491074170661]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.80132484436035, 29.24968239903346]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.80278396606445, 29.258967986107876]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.78990936279297, 29.268691734036555]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.77274322509766, 29.254725749794208]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.75077056884766, 29.276927459450764]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.82883358001709, 29.218870761636996]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.77445983886719, 29.224318542293418]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.753173828125, 29.217372556530588]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.71283340454102, 29.257385248587426]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.70528030395508, 29.27775099549384]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.66631317138672, 29.246087751947055]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.68259954452515, 29.239796815683494]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.68071126937866, 29.232438176369758]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.67446708679199, 29.228056445239424]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.66026210784912, 29.22459212337896]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.67026138305664, 29.23478783755733]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.67305088043213, 29.237184547585972]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.67348003387451, 29.244224558759694]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.6588888168335, 29.248006492452653]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61756134033203, 29.22961974062163]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.60584545135498, 29.238869700725857]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61644554138184, 29.24675151912282]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.59301376342773, 29.255513193290554]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.60352802276611, 29.267971953918913]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.6337833404541, 29.242829993945428]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.6484603881836, 29.23720151628014]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.70244789123535, 29.2489981737768]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.68279266357422, 29.275654708876278]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.66150665283203, 29.27430707334478]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.63755989074707, 29.28403959733672]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.6852388381958, 29.25179793958447]),
            {
              "class": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.78810691833496, 29.201508380746006]),
            {
              "class": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.75652122497559, 29.236266478524357]),
            {
              "class": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.81686019897461, 29.244280142027456]),
            {
              "class": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.83462715148926, 29.238513363364465]),
            {
              "class": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.84973335266113, 29.22997493860315]),
            {
              "class": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.87114810943604, 29.220256581852542]),
            {
              "class": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.86235046386719, 29.221660525021935]),
            {
              "class": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.86535453796387, 29.210948168509503]),
            {
              "class": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.86681365966797, 29.1939409390192]),
            {
              "class": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.90080261230469, 29.18078673144142]),
            {
              "class": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.89719772338867, 29.166888389294275]),
            {
              "class": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.90312004089355, 29.14470147661035]),
            {
              "class": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.90367794036865, 29.12399120353932]),
            {
              "class": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.07109069824219, 28.93079156138363]),
            {
              "class": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.12035751342773, 28.990947091814757]),
            {
              "class": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.0494613647461, 29.01076519936974]),
            {
              "class": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.07950210571289, 29.035382402004387]),
            {
              "class": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.09709739685059, 28.944428360151953]),
            {
              "class": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.13649368286133, 28.912952685850897]),
            {
              "class": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.18919372558594, 28.933195354953025]),
            {
              "class": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.18885040283203, 28.977054792387346]),
            {
              "class": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.19674682617188, 28.956406464925998]),
            {
              "class": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.00191116333008, 29.01992228333348]),
            {
              "class": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.97358703613281, 29.041835941272158]),
            {
              "class": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.02165222167969, 29.043186630974116]),
            {
              "class": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1712417602539, 28.90977888274776]),
            {
              "class": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.17634868621826, 28.91518843595679]),
            {
              "class": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.14201641082764, 28.91958349021822]),
            {
              "class": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.15047073364258, 28.91864439170601]),
            {
              "class": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.12600898742676, 28.931941234257188]),
            {
              "class": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.10961532592773, 28.923677860364844]),
            {
              "class": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.14845371246338, 28.90459446290109]),
            {
              "class": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.14313220977783, 28.89016688805209]),
            {
              "class": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.16355991363525, 28.883891770242894]),
            {
              "class": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.16493320465088, 28.873332183364376]),
            {
              "class": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.18025398254395, 28.866830551600795]),
            {
              "class": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1882791519165, 28.875925206255133]),
            {
              "class": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2093505859375, 28.867958031348213]),
            {
              "class": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21975755691528, 28.939274720283386]),
            {
              "class": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22692441940308, 28.939838068289767]),
            {
              "class": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21862030029297, 28.951112893153624]),
            {
              "class": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23767471313477, 28.94630608152691]),
            {
              "class": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23574352264404, 28.94967738616252]),
            {
              "class": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2291989326477, 28.943781418576716]),
            {
              "class": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22801876068115, 28.94680455215634]),
            {
              "class": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23185968399048, 28.948156483966578]),
            {
              "class": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2304220199585, 28.94199754060803]),
            {
              "class": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22248268127441, 28.94256087381104]),
            {
              "class": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23398399353027, 28.934617592794115]),
            {
              "class": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23241758346558, 28.933847644299853]),
            {
              "class": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2222466468811, 28.931763120892253]),
            {
              "class": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21941423416138, 28.945734260293523]),
            {
              "class": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22153854370117, 28.951310922905897]),
            {
              "class": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22351264953613, 28.951310922905897]),
            {
              "class": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22793292999268, 28.953639137642874]),
            {
              "class": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2223539352417, 28.95752563756139]),
            {
              "class": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23385524749756, 28.95784481223245]),
            {
              "class": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23338317871094, 28.94453251590102]),
            {
              "class": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23675203323364, 28.938504806388337]),
            {
              "class": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22263288497925, 28.92830760236294]),
            {
              "class": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21617412567139, 28.93722786341473]),
            {
              "class": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21600246429443, 28.933885202895702]),
            {
              "class": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21782636642456, 28.932307730152374]),
            {
              "class": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21913528442383, 28.936241097301874]),
            {
              "class": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2284049987793, 28.934964126435155]),
            {
              "class": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23338317871094, 28.939921689998414]),
            {
              "class": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22831916809082, 28.931809189782054]),
            {
              "class": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21930694580078, 28.931208238579284]),
            {
              "class": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21561622619629, 28.942926158547873]),
            {
              "class": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21209716796875, 28.93924567256879]),
            {
              "class": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2090072631836, 28.940447478283488]),
            {
              "class": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.20960807800293, 28.947733127009446]),
            {
              "class": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21132469177246, 28.94803355513235]),
            {
              "class": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21754741668701, 28.949742810273765]),
            {
              "class": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21746158599854, 28.946287891264326]),
            {
              "class": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22231101989746, 28.94617522892184]),
            {
              "class": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2254867553711, 28.949592598799946]),
            {
              "class": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21917819976807, 28.943396185687984]),
            {
              "class": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.39474487304688, 27.48115733657033]),
            {
              "class": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.47988891601562, 27.404985254003083]),
            {
              "class": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.54100036621094, 27.446429389766163]),
            {
              "class": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.511474609375, 27.38913485693724]),
            {
              "class": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.58975219726562, 27.70874946606507]),
            {
              "class": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.49293518066406, 27.81993890775151]),
            {
              "class": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.92228698730469, 26.763688281378755]),
            {
              "class": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.81036376953125, 26.569788149345595]),
            {
              "class": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.7911376953125, 26.7557178821716]),
            {
              "class": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.96417236328125, 26.678437370435457]),
            {
              "class": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.97378540039062, 26.541534732246014]),
            {
              "class": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.02803039550781, 26.59742062144591]),
            {
              "class": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-113.0438232421875, 26.7771753753949]),
            {
              "class": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.48008728027344, 26.8170142472659]),
            {
              "class": 2,
              "system:index": "574"
            })]),
    input = ee.Image("users/images/input/BajaSonora_2007-13_InputSR");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw");


/*
function radians(img) {return img.toFloat().multiply(Math.PI).divide(180).divide(1.5708).toFloat();}
var terrain = ee.Algorithms.Terrain(ee.Image('USGS/SRTMGL1_003'));
var slope = radians(terrain.select('slope'));
var elevation = terrain.select('elevation').divide(4000.00).float();

input=input.select(ee.List.sequence(0,43)).addBands(slope).addBands(elevation);
*/



//visual parameters for FCC display 
var vizParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 255,
  gamma: [1.5,1.6, 1.7]
};


//add all max val to map
Map.addLayer(BajaSonora,vizParams,'FCC');

//throw('stop')


//Map.addLayer(prev_class.updateMask(prev_class.eq(1)),{palette: '00ff00'},'Prev_crop')
//throw('stop')

//create bounds for training samples inside area of interest
function buffer(geometry) {
  return geometry.buffer(60).bounds();
} 

//buffer function of 1km********************************************************
function buffer1(geometry) {
  return geometry.buffer(10000);
}

var studyArea = zones.filterMetadata('name','equals','BajaSonora');

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

var training = input.sampleRegions({
    collection: TrainingSamples,
  properties: ['class'],
  scale: 30
});
 

//build classifier
var classifier = ee.Classifier.randomForest(120,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);

classified = classified.updateMask(classified.eq(1));

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'BajaSonora_v1_asset',
  assetId: 'BajaSonora_2010_v1',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'BajaSonora',
  fileNamePrefix: 'BajaSonora_2010_v1',
  region: studyArea, 
});


Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_BajaSonora_v1',
  folder: 'BajaSonora',
  fileNamePrefix: 'RFtable_BajaSonora_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');



