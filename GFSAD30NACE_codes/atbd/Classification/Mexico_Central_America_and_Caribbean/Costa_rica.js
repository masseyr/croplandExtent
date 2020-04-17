/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var input = ee.Image("users/images/input/Costa_Rica_2013-16_InputTOA"),
    input2 = ee.Image("users/images/input/Costa_Rica_2010_InputTOA3season"),
    NonCropClass = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-82.96463012695312, 9.19369399227843]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.0126953125, 9.390208222370232]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.18641662597656, 9.498582324220946]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.41712951660156, 9.451850175617391]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.25920104980469, 9.686123708130738]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.05938720703125, 9.644155963437864]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87467956542969, 9.656340686551495]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.72773742675781, 9.459300654301702]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.14247131347656, 9.373949173121645]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92755126953125, 9.373271696197387]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87879943847656, 9.426110918096546]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.83348083496094, 9.543953816023642]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48854064941406, 8.98350641312456]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.55583190917969, 8.885150832894197]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.56544494628906, 8.828799251428402]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58879089355469, 8.875613444162708]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58604431152344, 8.929883290614036]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46107482910156, 8.732438336844913]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53763580322266, 8.737528446926454]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.61968994140625, 8.767389024931461]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63204956054688, 8.79555078007812]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5898208618164, 8.691375578843509]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58226776123047, 8.629263858159424]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.64784240722656, 8.620777855372223]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.704833984375, 8.618062294227165]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.70037078857422, 8.676103156333046]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63822937011719, 8.668636412499605]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.57746124267578, 8.675424367572804]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52733612060547, 8.717167590000258]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.39000701904297, 8.746011809268062]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.27224731445312, 8.7066473790672]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.55033874511719, 8.576308089685021]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59256744384766, 8.582079269817983]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66827011108398, 9.099235010833882]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68423461914062, 9.121608465859689]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68474960327148, 9.145505834257753]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.70431900024414, 9.147031143764412]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.70122909545898, 9.165842756431243]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.75444412231445, 9.189059318595941]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.71856689453125, 9.2143077206172]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.76285552978516, 9.259208134355555]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.55218410491943, 9.293966008061323]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48214626312256, 9.312558034579379]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5351037979126, 9.330090383345937]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46536636352539, 9.342455664595594]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44178438186646, 9.34308838467491]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.43860864639282, 9.352510247788853]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42133522033691, 9.365573397570484]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.43086242675781, 9.368389214796885]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.43646287918091, 9.372051860183184]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44629049301147, 9.377535170345153]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42395305633545, 9.381282401961357]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45650434494019, 9.381303572646441]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47581624984741, 9.383971068625662]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48223209381104, 9.380477914970538]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47186803817749, 9.377196435548779]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48809003829956, 9.38896727571076]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46886396408081, 9.406643955241618]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45343589782715, 9.407194352324938]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48710298538208, 9.40406131107648]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4925103187561, 9.400060291472323]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49409818649292, 9.405225620259332]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48512887954712, 9.40312986090877]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48635196685791, 9.409607621502749]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4884762763977, 9.395741678723784]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.50523471832275, 9.403193368954412]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.50040674209595, 9.408591510217585]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5074234008789, 9.41688966432369]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.51006269454956, 9.423324830793502]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5016942024231, 9.427897113027528]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48045110702515, 9.437676513924465]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47948551177979, 9.448979630856488]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47040891647339, 9.451561938844335]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45890760421753, 9.45323407876412]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44944477081299, 9.452535590924958]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49540710449219, 9.490077310179036]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47412109375, 9.487029679756839]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47480773925781, 9.477209353049078]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47412109375, 9.509716944732105]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47034454345703, 9.5205521226106]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.51325988769531, 9.555086956900753]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44322204589844, 9.569306165136874]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.36803436279297, 9.541544301530289]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.309326171875, 9.42641008053134]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.41438293457031, 9.50159033603888]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.55342864990234, 9.470775193523973]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.55171203613281, 9.399652787957269]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58810424804688, 9.40845921417737]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.40614318847656, 9.337662768272724]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.39069366455078, 9.385087822177217]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.36563110351562, 9.40845921417737]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.78002166748047, 9.358327337230552]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.7868881225586, 9.339356631547364]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.7704086303711, 9.331226012745633]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.75495910644531, 9.257025377968901]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.7271499633789, 9.215344171218417]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.84937286376953, 9.259736179846852]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.89881134033203, 9.321740051201322]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.92181396484375, 9.329532109960043]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.9520263671875, 9.37560332936194]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.91254425048828, 9.467388745354617]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.90567779541016, 9.485675168650939]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.80130767822266, 9.521567902924506]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.72543334960938, 9.507346703801392]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.88816833496094, 9.510394153409832]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42159271240234, 9.422684505748053]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.33919525146484, 9.50768531065414]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3144760131836, 9.512425771396964]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.36597442626953, 9.488384185511633]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.22933197021484, 9.382377993554508]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.20976257324219, 9.491431803891167]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.22555541992188, 9.535788510020675]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.22452545166016, 9.449440013092076]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2657241821289, 9.41320104310421]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2760238647461, 9.384071638925732]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.21456909179688, 9.34850335088219]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.17817687988281, 9.442327992286053]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.13079833984375, 9.476532078777566]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.18401336669922, 9.399991500802777]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3371353149414, 9.383055452695748]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.09783935546875, 9.322756416559372]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.14693450927734, 9.342405564686935]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0289306640625, 10.373168707554258]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0948486328125, 10.259677163543389]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03854370117188, 10.186696791986185]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.00764465332031, 10.133223533765117]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.88954162597656, 10.14201056503479]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.76457214355469, 10.112944850380842]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.69384765625, 10.068327244048449]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06669616699219, 10.119704553876316]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06326293945312, 9.929026666494682]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.05570983886719, 9.952698444752862]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.13398742675781, 9.952698444752862]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.11544799804688, 9.99800820170111]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.22050476074219, 10.013560842553686]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.24453735351562, 9.975015978292044]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.19784545898438, 9.949316867116325]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09622192382812, 9.912117204991526]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.078369140625, 9.896559730136353]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.91769409179688, 9.866119061717653]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.93348693847656, 9.876942733201354]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.682861328125, 9.903323940265706]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25758361816406, 10.156880376385221]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.21981811523438, 10.229191855839005]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.20333862304688, 10.18661792411119]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34066772460938, 10.304864737516935]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.31320190429688, 10.314998121756224]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.30976867675781, 10.271084438301143]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61944580078125, 10.240679082669562]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.66339111328125, 10.308918130333678]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.68948364257812, 10.378493224167947]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.68536376953125, 10.404157804179208]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.759521484375, 10.363633820387829]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.79110717773438, 10.410235948390303]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.77531433105469, 10.329859828545342]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.76020812988281, 10.261625307232624]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.70733642578125, 10.277165158861386]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.70184326171875, 10.347422757935927]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59129333496094, 10.192024453261894]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.52468872070312, 10.247436080597481]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14541625976562, 10.108888959999682]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08087158203125, 10.171749496400427]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08087158203125, 10.15282504181103]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.79454040527344, 9.988541012361209]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.90646362304688, 9.93917192419466]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55970764160156, 9.770043436995447]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55558776855469, 9.796433179434853]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48966979980469, 9.824173979161161]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38255310058594, 9.705075164836888]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.20402526855469, 9.688154272564132]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15802001953125, 9.623170130589266]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.69522094726562, 9.69492271127732]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59222412109375, 9.733500318609408]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46656799316406, 9.64821756610457]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.35052490234375, 9.732146793669004]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.31756591796875, 9.814025154886219]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.34640502929688, 9.88032503690681]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45008850097656, 9.93173207866818]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49472045898438, 9.989217228674004]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.37181091308594, 9.94120091733098]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.25645446777344, 9.892501116533298]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.20358276367188, 9.899265410269534]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.31069946289062, 9.60556808373498]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.13217163085938, 9.63874036890627]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.57368469238281, 9.639417320395614]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45541000366211, 9.711953241635905]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.32529067993164, 9.68640288977991]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2408332824707, 9.732256766742443]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4330940246582, 9.885846610803958]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2437515258789, 9.92846019715505]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.14830780029297, 9.908676006221496]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3968734741211, 10.019249187369333]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.18624496459961, 10.101900862298361]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.16289901733398, 10.0539012371402]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.26589584350586, 10.174562707138247]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.43395233154297, 10.256160824561313]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4188461303711, 10.322707703302404]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53866577148438, 10.401903779116761]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.51669311523438, 10.451538845648818]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5067367553711, 10.484793281655271]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44802856445312, 10.402579139199146]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.50072860717773, 10.482092546867559]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46742630004883, 10.442929248562223]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.57694625854492, 10.345168324212725]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45541000366211, 10.275923671422646]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.56561660766602, 10.222544261592503]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.638916015625, 10.216631432612546]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6638069152832, 10.124884063863101]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6744499206543, 10.086521479043892]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58844757080078, 10.055591486094357]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.57351303100586, 10.077394904362873]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.50536346435547, 10.099365849717959]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45146179199219, 10.088549571640963]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.72526168823242, 10.166621401327784]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.79152297973633, 10.215617793743204]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.78328323364258, 10.214773092216806]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.89606475830078, 10.178110886321061]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.91683578491211, 10.199230183802053]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.94704818725586, 10.156314305853865]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.87083053588867, 10.24264705668243]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.84902954101562, 10.335711416366038]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.87409210205078, 10.38704548774873]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.90945434570312, 10.402072619274366]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.9520263671875, 10.471626977148292]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.92026901245117, 10.432968828962336]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06635284423828, 10.471626977148292]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12420272827148, 10.520575791222571]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.85297775268555, 10.50302262496136]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.76028060913086, 10.5830164485725]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60200881958008, 10.611701141714331]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58861923217773, 10.77633275413481]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.71376037597656, 10.768069572082023]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.77264022827148, 10.77127368999461]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.89589309692383, 10.768238210716554]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.96318435668945, 10.71123298497736]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03528213500977, 10.701955970194204]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.11527633666992, 10.720341050349765]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.34248352050781, 10.367984760863635]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3476333618164, 10.465232120552793]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3634262084961, 10.48109946375167]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3201675415039, 10.448013446930302]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.30506134033203, 10.436196157886508]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3634262084961, 10.386220949942938]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42213439941406, 10.400066234991893]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.40874481201172, 10.388922517155661]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.38711547851562, 10.364945292720074]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35415649414062, 10.355151250351552]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.30746459960938, 10.36967334153049]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29922485351562, 10.342654959074908]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25562286376953, 10.336913253030758]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23433685302734, 10.330833685181277]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.30094146728516, 10.282679916915027]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29767990112305, 10.302778892317402]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28514862060547, 10.274741313608661]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26540756225586, 10.259370259712302]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24824142456055, 10.24839047844946]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24755477905273, 10.264437722644425]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26575088500977, 10.294165202505116]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23141860961914, 10.279132906046954]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2487564086914, 10.302272211195596]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29596328735352, 10.314094558409312]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3004264831543, 10.291462819967913]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29596328735352, 10.24737694099381]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2568244934082, 10.239099597144635]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2568244934082, 10.222206388614465]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23588180541992, 10.21984126770872]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20927429199219, 10.232511352753441]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20669937133789, 10.199737029743712]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21905899047852, 10.173886859012834]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12636184692383, 10.205312281850848]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.99813079833984, 10.280821963808688]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.31759262084961, 10.181827984106175]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.34111022949219, 10.217476129201067]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35209655761719, 10.171859306052998]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32257080078125, 10.24180242705846]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25596618652344, 10.1289397521766]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27364730834961, 10.13637504753569]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13288497924805, 10.099365849717959]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.17133712768555, 10.089732619757648]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.17528533935547, 10.102069862426633]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13666152954102, 10.082634265874136]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20515441894531, 10.063535537716183]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20378112792969, 10.083310306316262]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1821517944336, 10.05102779362965]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29716491699219, 10.08939460645354]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.31845092773438, 10.099703852549721]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33287048339844, 10.103083861331086]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07143020629883, 10.155976362671636]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13700485229492, 10.220685955767266]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.98302459716797, 10.180476317194609]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.9569320678711, 10.172704121350892]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.98336791992188, 10.283524437441113]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.92757797241211, 10.27051857102756]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89410400390625, 10.283862245019183]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.92156982421875, 10.276937117456763]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.95916366577148, 10.27963962432372]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.95452880859375, 10.315952315480622]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.8994255065918, 10.321694404375073]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02559661865234, 10.365938746259445]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.03211975097656, 10.407813130279544]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01373052597046, 10.36868656800278]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01508235931396, 10.372739137220496]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.00986814498901, 10.373266811643896]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0145673751831, 10.366385867346178]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.95163202285767, 10.404630179931296]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.9702787399292, 10.430355909451855]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.9771237373352, 10.447934294185137]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.96238231658936, 10.464878662511255]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.96620178222656, 10.467558446747706]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44136047363281, 10.64139531889364]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.43981552124023, 10.632453601435975]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4326057434082, 10.642913697709023]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.39147138595581, 10.68060052396458]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3852915763855, 10.685555677310726]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3838324546814, 10.688107022606395]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33166885375977, 10.686268653472183]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.30128479003906, 10.658771868780992]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32154083251953, 10.714268954852479]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.55225372314453, 10.612038510308974]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5750846862793, 10.608495256446982]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.59980392456055, 10.718822976126702]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.57886123657227, 10.760480653502027]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.57594299316406, 10.779873966108267]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3860855102539, 10.81477877807464]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.37149429321289, 10.84900515640217]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.30815124511719, 10.78375247873202]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29579162597656, 10.854062909871205]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29012680053711, 10.900758784380473]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42762756347656, 10.915254931170352]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2978515625, 10.941885542970102]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25167465209961, 10.925199553122763]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.99795913696289, 10.861480793433598]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.86183166503906, 10.898398879653932]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.87676620483398, 10.962952369933253]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.81050491333008, 10.99261191820831]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80724334716797, 10.946436104494552]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.78218078613281, 11.002048422199966]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.75591659545898, 11.025638359739416]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.96294021606445, 11.016708105761218]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.88723754882812, 11.019741052605289]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80157852172852, 11.064052206047494]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.7349739074707, 11.03372590290839]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.71076965332031, 11.136654084526468]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.66150283813477, 11.085784126552012]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.66390609741211, 11.098586672767278]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.68330383300781, 11.042150190340923]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.71626281738281, 11.032546483389725]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.73248481750488, 11.130239036708497]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.75510120391846, 11.122954236344025]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.68879699707031, 11.12842838079822]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59421157836914, 10.98671394988802]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59077835083008, 10.9282334392701]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.5064926147461, 10.943402404576604]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49911117553711, 10.906827024856462]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.44263458251953, 10.915423486858753]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36418533325195, 10.981152900368077]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46426391601562, 10.785944659400684]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40126419067383, 10.75474673942471]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.320068359375, 10.806853886867623]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.52383041381836, 10.798085678320229]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43117618560791, 10.788838792620371]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.41216468811035, 10.768855824206682]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36607360839844, 10.597264877513087]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35551643371582, 10.638517446374783]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37148094177246, 10.637252112980642]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.28522109985352, 10.637167757234415]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29474830627441, 10.64012019447208]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.28891181945801, 10.656400263394977]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38650131225586, 10.577353672602644]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.24050331115723, 10.578787997528437]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25921440124512, 10.568494458316076]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.26668167114258, 10.504447447670486]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2142391204834, 10.484361444250656]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.20282363891602, 10.5095953308909]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2732048034668, 10.452204247907149]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.27775382995605, 10.450516114034643]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29586410522461, 10.41666709581696]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35637474060059, 10.408563044330654]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38693046569824, 10.374625043579016]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34015274047852, 10.37420290594336]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.30736541748047, 10.320924573731796]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15862083435059, 10.33409723735618]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15055274963379, 10.389061807837498]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.21621322631836, 10.355290556061176]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2090892791748, 10.295253183689631]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.21647071838379, 10.305133538648816]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.23234939575195, 10.257333395531504]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.22711372375488, 10.27093099195573]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.24136161804199, 10.264005581082284]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.22788619995117, 10.242721662774972]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.19003486633301, 10.230389849888317]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14823532104492, 10.242468274183622]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.13003921508789, 10.260711734908007]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10540580749512, 10.242214885389785]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.27947044372559, 10.263667752283311]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.28865432739258, 10.283852389554184]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29723739624023, 10.306569120010664]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37251091003418, 10.325231082168834]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37045097351074, 10.30285348422041]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42512512207031, 10.32337337987807]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4313907623291, 10.32835537491006]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43061828613281, 10.335110496309548]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43439483642578, 10.352082097760194]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42306518554688, 10.307244685447102]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4713020324707, 10.328608694582519]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47653770446777, 10.324639996266534]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47104454040527, 10.340767798733381]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.44186210632324, 10.35326416516371]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49756622314453, 10.289172811401004]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.51052665710449, 10.281994443345207]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.51292991638184, 10.302769037443325]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54142570495605, 10.262738721226393]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55799102783203, 10.267468305473102]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49653625488281, 10.22109844153697]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4955062866211, 10.20648504066144]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34556007385254, 10.175397656450821]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.3252182006836, 10.192800207104417]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.32873725891113, 10.163570138688009]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.31363105773926, 10.172102891943148]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.3241024017334, 10.212398058317866]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34710502624512, 10.23005198525658]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.30496215820312, 10.223463553085143]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2757797241211, 10.168977058293033]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.27689552307129, 10.205893732851854]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29491996765137, 10.199896120137028]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39225196838379, 10.185197267798728]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37448501586914, 10.146672925557265]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.61079025268555, 10.128000467841284]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.62366485595703, 10.143715821523026]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.60881614685059, 10.145743552946483]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.6014347076416, 10.162471846964312]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.61765670776367, 10.182071562388577]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.59019088745117, 10.149714489782642]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.63902854919434, 10.173365183637646]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.62787055969238, 10.18472770857974]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.6514310836792, 10.174083273396706]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.63688278198242, 10.155877087668733]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.66580772399902, 10.147639609648781]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.67095756530762, 10.155539144024548]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.6774377822876, 10.156806430849077]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.6794548034668, 10.164494529921948]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.67559242248535, 10.128080030904862]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.65812587738037, 10.119461608868328]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.64962863922119, 10.134501449724127]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.64087390899658, 10.120475552885695]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.57684421539307, 10.119968581277341]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.56156635284424, 10.114814324483582]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.55564403533936, 10.110758457703652]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54495811462402, 10.099097555591403]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.56246757507324, 10.097407534696098]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.53401470184326, 10.098759552122601]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54731845855713, 10.120982523693325]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54776906967163, 10.136294424204351]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51708459854126, 10.137435051134684]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51639795303345, 10.142483332680653]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.52819967269897, 10.14489127158416]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50809383392334, 10.146982361731066]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.49133539199829, 10.144257605207082]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.48206567764282, 10.146348699492437]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.47386884689331, 10.14410974953867]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.47316074371338, 10.135850845968395]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.48322439193726, 10.15726863657867]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50369501113892, 10.164914482799926]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.49483299255371, 10.180459064512156]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5109691619873, 10.185971295485718]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51435947418213, 10.196826521523613]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51592588424683, 10.204830429874995]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4556941986084, 10.201030377293535]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44543743133545, 10.20690000931654]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.43951511383057, 10.215896187984326]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44769048690796, 10.21646635974671]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3982949256897, 10.213509902476966]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.39451837539673, 10.208716159778879]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3602933883667, 10.226138006395495]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33621788024902, 10.204492538075964]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.34462928771973, 10.200712349123107]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1934814453125, 10.152109709516965]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.11795043945312, 10.140281330386578]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1059341430664, 10.17204798716347]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29304504394531, 10.2886112237973]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2315902709961, 10.279490429524891]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4574966430664, 10.152109709516965]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4513168334961, 10.143998868056157]),
            {
              "class": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3857421875, 9.934059869881997]),
            {
              "class": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35930633544922, 9.949953722572976]),
            {
              "class": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35449981689453, 9.908695740146587]),
            {
              "class": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.43380737304688, 9.957054981308746]),
            {
              "class": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.40119171142578, 10.014873755893204]),
            {
              "class": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45989990234375, 10.048681134650462]),
            {
              "class": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4629898071289, 9.938456119210796]),
            {
              "class": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.58280944824219, 9.981062854050485]),
            {
              "class": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.61473846435547, 10.00844995529638]),
            {
              "class": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.39398193359375, 9.890432351851507]),
            {
              "class": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32703399658203, 10.016226118762638]),
            {
              "class": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.18627166748047, 10.03110173807989]),
            {
              "class": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25596618652344, 10.11729923135533]),
            {
              "class": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24635314941406, 9.947248440530437]),
            {
              "class": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2597427368164, 9.852887756773308]),
            {
              "class": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.31845092773438, 9.884006103353865]),
            {
              "class": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.38917541503906, 9.874535613520694]),
            {
              "class": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4606831073761, 10.079288367804857]),
            {
              "class": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4321014881134, 10.082742532913805]),
            {
              "class": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3482985496521, 10.028339013443018]),
            {
              "class": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.36694526672363, 10.045876302681547]),
            {
              "class": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.41756391525269, 10.076342439576127]),
            {
              "class": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.43601751327515, 10.088553429593029]),
            {
              "class": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44148921966553, 10.091278658874229]),
            {
              "class": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4348373413086, 10.091489915994664]),
            {
              "class": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42887210845947, 10.10146109433647]),
            {
              "class": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.37123680114746, 10.10141884423275]),
            {
              "class": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.34256935119629, 10.08933508686222]),
            {
              "class": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33714056015015, 10.097172680503881]),
            {
              "class": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.31905174255371, 10.087623888749162]),
            {
              "class": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.30789375305176, 10.084581736321594]),
            {
              "class": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3009843826294, 10.084771871690036]),
            {
              "class": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29624223709106, 10.080039580275775]),
            {
              "class": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.30840873718262, 10.061997092417384]),
            {
              "class": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28014898300171, 10.042411178692152]),
            {
              "class": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.18704414367676, 9.95786582978753]),
            {
              "class": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21060466766357, 9.941676465613261]),
            {
              "class": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15713214874268, 9.965812273518805]),
            {
              "class": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14344215393066, 9.940366064228849]),
            {
              "class": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1319408416748, 9.927642216505962]),
            {
              "class": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10807991027832, 9.8971621526112]),
            {
              "class": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07404804229736, 9.899910124743206]),
            {
              "class": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.05224704742432, 9.89225802213416]),
            {
              "class": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.05254745483398, 9.886846482862785]),
            {
              "class": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0717306137085, 9.883971566387833]),
            {
              "class": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.93139743804932, 9.832261063559997]),
            {
              "class": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89054203033447, 9.828455391700356]),
            {
              "class": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89127159118652, 9.817799277570733]),
            {
              "class": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.9047040939331, 9.813232266502462]),
            {
              "class": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89873886108398, 9.809595527468801]),
            {
              "class": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01963138580322, 9.8262988248733]),
            {
              "class": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0495433807373, 9.83509414638839]),
            {
              "class": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09318828582764, 9.821013062413497]),
            {
              "class": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1021146774292, 9.809595527468801]),
            {
              "class": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.69188690185547, 11.13824436783757]),
            {
              "class": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61850166320801, 11.119716703584489]),
            {
              "class": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.57086563110352, 11.137402226855253]),
            {
              "class": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6632194519043, 11.089143483798924]),
            {
              "class": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.72330093383789, 11.082320923688789]),
            {
              "class": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.73299980163574, 11.11078931756215]),
            {
              "class": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.71823692321777, 11.114831941315527]),
            {
              "class": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.74329948425293, 11.13007549750535]),
            {
              "class": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.77376937866211, 11.131675603559348]),
            {
              "class": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.781494140625, 11.148602502529904]),
            {
              "class": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.7935962677002, 11.153907745701206]),
            {
              "class": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80775833129883, 11.141191842082954]),
            {
              "class": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.78389739990234, 11.204513205969349]),
            {
              "class": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.69926834106445, 11.239620280826847]),
            {
              "class": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.65085983276367, 11.337594432351587]),
            {
              "class": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.63103294372559, 11.328252988358885]),
            {
              "class": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59532737731934, 11.306034274553497]),
            {
              "class": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.74544525146484, 11.44150786316793]),
            {
              "class": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.67523574829102, 11.437133327428525]),
            {
              "class": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.69841003417969, 11.462706578376235]),
            {
              "class": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.79471206665039, 11.475155876389682]),
            {
              "class": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.82037544250488, 11.49214659957094]),
            {
              "class": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89075660705566, 11.480539186582435]),
            {
              "class": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.87101554870605, 11.501987292645053]),
            {
              "class": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89092826843262, 11.501987292645053]),
            {
              "class": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.91024017333984, 11.4930718075764]),
            {
              "class": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.90955352783203, 11.51468716591443]),
            {
              "class": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.90251541137695, 11.52620907135047]),
            {
              "class": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.56863403320312, 9.525072313552716]),
            {
              "class": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06988525390625, 9.60632408839173]),
            {
              "class": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80621337890625, 9.82560604379184]),
            {
              "class": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12653350830078, 10.764865420091764]),
            {
              "class": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14387130737305, 10.749012798700235]),
            {
              "class": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.11468887329102, 10.726075617567867]),
            {
              "class": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12052536010742, 10.72658160357418]),
            {
              "class": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.11486053466797, 10.774130663640737]),
            {
              "class": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1304817199707, 10.778683781985867]),
            {
              "class": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10129928588867, 10.785091757774246]),
            {
              "class": 2,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02954483032227, 10.707016195283058]),
            {
              "class": 2,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01031875610352, 10.685087943448075]),
            {
              "class": 2,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.68484878540039, 10.291293920290833]),
            {
              "class": 2,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.65377807617188, 10.28825371064559]),
            {
              "class": 2,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.68381881713867, 10.273558951371697]),
            {
              "class": 2,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.56829071044922, 10.2029371773253]),
            {
              "class": 2,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54142570495605, 10.198966902425303]),
            {
              "class": 2,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.51292991638184, 10.233177219379337]),
            {
              "class": 2,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.5094108581543, 10.226335450579155]),
            {
              "class": 2,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.53524589538574, 10.242721662774972]),
            {
              "class": 2,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07819747924805, 9.934378312628375]),
            {
              "class": 2,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12025451660156, 9.938605472421564]),
            {
              "class": 2,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.99803161621094, 9.89548588244695]),
            {
              "class": 2,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.95065307617188, 9.854390180986478]),
            {
              "class": 2,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.92267227172852, 9.85168411126564]),
            {
              "class": 2,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.88216018676758, 9.838829977090189]),
            {
              "class": 2,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.85452270507812, 9.79451321070962]),
            {
              "class": 2,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.3145751953125, 9.46818459674594]),
            {
              "class": 2,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07150268554688, 9.32998949760708]),
            {
              "class": 2,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.77487182617188, 9.151067571733225]),
            {
              "class": 2,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.92431640625, 10.014992120886046]),
            {
              "class": 2,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.04241943359375, 10.115051661903586]),
            {
              "class": 2,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.99298095703125, 9.970958358537365]),
            {
              "class": 2,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10215759277344, 10.014913210895608]),
            {
              "class": 2,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35209655761719, 9.820791079190416]),
            {
              "class": 2,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.57044982910156, 9.858677581262203]),
            {
              "class": 2,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.65834045410156, 9.87626626415928]),
            {
              "class": 2,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28549194335938, 9.739591133608986]),
            {
              "class": 2,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.61213684082031, 10.948686177287707]),
            {
              "class": 2,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46244812011719, 10.574300848533372]),
            {
              "class": 2,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.43154907226562, 10.44940336667365]),
            {
              "class": 2,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.20770263671875, 10.193376071220284]),
            {
              "class": 2,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.05732727050781, 10.034521918031322]),
            {
              "class": 2,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99827575683594, 10.019646455696542]),
            {
              "class": 2,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88566589355469, 9.835675580284107]),
            {
              "class": 2,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.71263122558594, 9.664463590392547]),
            {
              "class": 2,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.54165649414062, 9.575100897194543]),
            {
              "class": 2,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2320785522461, 9.765416541491172]),
            {
              "class": 2,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.22023391723633, 9.817010631047363]),
            {
              "class": 2,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.22559833526611, 9.826848539321306]),
            {
              "class": 2,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.16075325012207, 10.071638547940118]),
            {
              "class": 2,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.13191413879395, 10.036312258531739]),
            {
              "class": 2,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.03689956665039, 9.982132166818946]),
            {
              "class": 2,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.05046081542969, 9.996079544153067]),
            {
              "class": 2,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02754402160645, 9.992613888050602]),
            {
              "class": 2,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.05672645568848, 9.983907320776032]),
            {
              "class": 2,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15177583694458, 9.690890921224627]),
            {
              "class": 2,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14357900619507, 9.695734574343758]),
            {
              "class": 2,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12583351135254, 9.707388646285846]),
            {
              "class": 2,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09883975982666, 9.70872112106817]),
            {
              "class": 2,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10787343978882, 9.725619825131451]),
            {
              "class": 2,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1197395324707, 9.747508615972361]),
            {
              "class": 2,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12188529968262, 9.744061490989065]),
            {
              "class": 2,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1302752494812, 9.734417811095135]),
            {
              "class": 2,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.13192749023438, 9.798428857242735]),
            {
              "class": 2,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.13433074951172, 9.80933932219185]),
            {
              "class": 2,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10102844238281, 9.87238461217007]),
            {
              "class": 2,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08362627029419, 9.882066567370904]),
            {
              "class": 2,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0842056274414, 9.891748227245174]),
            {
              "class": 2,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09804582595825, 9.900647492663298]),
            {
              "class": 2,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1321849822998, 9.94727484908883]),
            {
              "class": 2,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.151132106781, 9.939708395060013]),
            {
              "class": 2,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.18398380279541, 9.932564487248793]),
            {
              "class": 2,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03272867202759, 10.044249389333448]),
            {
              "class": 2,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03942346572876, 10.024239799268754]),
            {
              "class": 2,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14160490036011, 10.037805041791428]),
            {
              "class": 2,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15699005126953, 10.009596306871666]),
            {
              "class": 2,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01588439941406, 10.382506256904458]),
            {
              "class": 2,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0066146850586, 10.241315361784809]),
            {
              "class": 2,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.98704528808594, 10.214285985482475]),
            {
              "class": 2,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58673095703125, 10.655248927205097]),
            {
              "class": 2,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60801696777344, 10.696409309714127]),
            {
              "class": 2,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.51703643798828, 10.399053186165101]),
            {
              "class": 2,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.70346069335938, 10.67785408964159]),
            {
              "class": 2,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66912841796875, 10.750381671559794]),
            {
              "class": 2,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60286712646484, 10.755441086383822]),
            {
              "class": 2,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5946273803711, 10.81311240792548]),
            {
              "class": 2,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12677764892578, 10.709228617085161]),
            {
              "class": 2,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.20024871826172, 10.588098340091598]),
            {
              "class": 2,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.32899475097656, 10.260572387369546]),
            {
              "class": 2,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.62528228759766, 10.279828241417398]),
            {
              "class": 2,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.62528228759766, 10.343330447001216]),
            {
              "class": 2,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.7646713256836, 10.299420712747182]),
            {
              "class": 2,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.7210693359375, 10.40749515925267]),
            {
              "class": 2,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.7049331665039, 10.466244953957741]),
            {
              "class": 2,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.67609405517578, 10.420664181034748]),
            {
              "class": 2,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.74990844726562, 10.38453245857844]),
            {
              "class": 2,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13957977294922, 10.319687505419735]),
            {
              "class": 2,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2425765991211, 10.318674196765542]),
            {
              "class": 2,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26866912841797, 10.318674196765542]),
            {
              "class": 2,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.286865234375, 10.301924568428092]),
            {
              "class": 2,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27914047241211, 10.32869313442798]),
            {
              "class": 2,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28068542480469, 10.361538512212332]),
            {
              "class": 2,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33784866333008, 10.39573119891524]),
            {
              "class": 2,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27828216552734, 10.395815620674488]),
            {
              "class": 2,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24266242980957, 10.38973719569091]),
            {
              "class": 2,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.22661209106445, 10.389061807837498]),
            {
              "class": 2,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1425838470459, 10.470773114610704]),
            {
              "class": 2,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14404296875, 10.506894812685223]),
            {
              "class": 2,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15777587890625, 10.51508068579655]),
            {
              "class": 2,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13125419616699, 10.477018756280982]),
            {
              "class": 2,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14215469360352, 10.539890149774195]),
            {
              "class": 2,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1319408416748, 10.584440901069618]),
            {
              "class": 2,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09778022766113, 10.573219445619346]),
            {
              "class": 2,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09881019592285, 10.561153814050511]),
            {
              "class": 2,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10945320129395, 10.603423631074426]),
            {
              "class": 2,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12481689453125, 10.642229101903212]),
            {
              "class": 2,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13005256652832, 10.63016619019036]),
            {
              "class": 2,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15631675720215, 10.601061399882347]),
            {
              "class": 2,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14850616455078, 10.588912494473611]),
            {
              "class": 2,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1986312866211, 10.57600375480383]),
            {
              "class": 2,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2004337310791, 10.594143332260192]),
            {
              "class": 2,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27862548828125, 10.544024866248916]),
            {
              "class": 2,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27167320251465, 10.573303818996047]),
            {
              "class": 2,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29192924499512, 10.567819501278578]),
            {
              "class": 2,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27326107025146, 10.566295826558006]),
            {
              "class": 2,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2918004989624, 10.592155763661255]),
            {
              "class": 2,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28420448303223, 10.605654374740476]),
            {
              "class": 2,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2674674987793, 10.605063822956282]),
            {
              "class": 2,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26703834533691, 10.62476232775789]),
            {
              "class": 2,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28780937194824, 10.626618224216546]),
            {
              "class": 2,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26751041412354, 10.636909808915513]),
            {
              "class": 2,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29716491699219, 10.638934342098535]),
            {
              "class": 2,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2899980545044, 10.661582890405564]),
            {
              "class": 2,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28184413909912, 10.655172298983734]),
            {
              "class": 2,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.307936668396, 10.619658554354062]),
            {
              "class": 2,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32351493835449, 10.635728825020697]),
            {
              "class": 2,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.31553268432617, 10.595530472215744]),
            {
              "class": 2,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3372049331665, 10.543302699860991]),
            {
              "class": 2,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33325672149658, 10.534442504373445]),
            {
              "class": 2,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35432815551758, 10.521151733457517]),
            {
              "class": 2,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.34540176391602, 10.527396357499526]),
            {
              "class": 2,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.36458492279053, 10.494399684590755]),
            {
              "class": 2,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44543743133545, 10.60915547976495]),
            {
              "class": 2,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.48410415649414, 10.57975339049991]),
            {
              "class": 2,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.49723625183105, 10.55916603175452]),
            {
              "class": 2,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.47466278076172, 10.545454423145289]),
            {
              "class": 2,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45878410339355, 10.53933673910857]),
            {
              "class": 2,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44822692871094, 10.543091745788244]),
            {
              "class": 2,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44462203979492, 10.522586320437364]),
            {
              "class": 2,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44110298156738, 10.51372552952498]),
            {
              "class": 2,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.47612190246582, 10.512501876504368]),
            {
              "class": 2,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45101642608643, 10.493597931297614]),
            {
              "class": 2,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4470682144165, 10.486888440716365]),
            {
              "class": 2,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12988090515137, 10.538788251154102]),
            {
              "class": 2,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12052536010742, 10.551276657777384]),
            {
              "class": 2,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1041316986084, 10.54072905029794]),
            {
              "class": 2,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12425899505615, 10.562330162292948]),
            {
              "class": 2,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1090669631958, 10.573889508840074]),
            {
              "class": 2,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09434700012207, 10.567603640781293]),
            {
              "class": 2,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.00804424285889, 10.620670879824187]),
            {
              "class": 2,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.00044822692871, 10.649183335072784]),
            {
              "class": 2,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.98147964477539, 10.600550282397077]),
            {
              "class": 2,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.94345664978027, 10.53528634349608]),
            {
              "class": 2,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.92337226867676, 10.532037550195243]),
            {
              "class": 2,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.96199607849121, 10.547606131386631]),
            {
              "class": 2,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.8395586013794, 10.45169288361647]),
            {
              "class": 2,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.82715606689453, 10.419651199112565]),
            {
              "class": 2,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.79488372802734, 10.312256499531438]),
            {
              "class": 2,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.73480224609375, 10.37338818694157]),
            {
              "class": 2,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.91092681884766, 10.280166052948683]),
            {
              "class": 2,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.91195678710938, 10.232531066879872]),
            {
              "class": 2,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.72175598144531, 9.98140081537003]),
            {
              "class": 2,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6661376953125, 9.994925584098178]),
            {
              "class": 2,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.66433525085449, 10.027015187287232]),
            {
              "class": 2,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.70107078552246, 9.94324537787609]),
            {
              "class": 2,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.70767974853516, 9.96733880218968]),
            {
              "class": 2,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.71162796020508, 9.902324758283063]),
            {
              "class": 2,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.67540740966797, 9.917712863694858]),
            {
              "class": 2,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.84689712524414, 10.000728539573256]),
            {
              "class": 2,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.88655090332031, 10.02059166841879]),
            {
              "class": 2,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.83359336853027, 9.978919920167156]),
            {
              "class": 2,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.71978187561035, 10.026846189131325]),
            {
              "class": 2,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.71428871154785, 10.057947957336486]),
            {
              "class": 2,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.71214294433594, 10.09496191928341]),
            {
              "class": 2,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6566104888916, 10.133492480101648]),
            {
              "class": 2,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61472511291504, 10.172947706596611]),
            {
              "class": 2,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54863548278809, 10.193982870252414]),
            {
              "class": 2,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4010066986084, 10.217627817580937]),
            {
              "class": 2,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35294151306152, 10.245846772084112]),
            {
              "class": 2,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37714576721191, 10.097665969008334]),
            {
              "class": 2,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43593978881836, 10.05676479262648]),
            {
              "class": 2,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47173118591309, 10.090145274434628]),
            {
              "class": 2,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.51574087142944, 9.986626035338935]),
            {
              "class": 2,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49896097183228, 9.999791348168682]),
            {
              "class": 2,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.505934715271, 9.996854029229036]),
            {
              "class": 2,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50350999832153, 10.012618034028433]),
            {
              "class": 2,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50140714645386, 10.020943486348287]),
            {
              "class": 2,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49896097183228, 10.023953309810256]),
            {
              "class": 2,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4874382019043, 10.03809961783766]),
            {
              "class": 2,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4822883605957, 10.034486504563223]),
            {
              "class": 2,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47808265686035, 10.042864217247255]),
            {
              "class": 2,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38276767730713, 10.067236704040699]),
            {
              "class": 2,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37362670898438, 10.087792906690284]),
            {
              "class": 2,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29522037506104, 10.156529387609615]),
            {
              "class": 2,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.27897691726685, 10.162168757963535]),
            {
              "class": 2,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25477266311646, 10.171630848719667]),
            {
              "class": 2,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6993408203125, 9.579242363277428]),
            {
              "class": 2,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.75564575195312, 9.633403729805224]),
            {
              "class": 2,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.770751953125, 9.653712004675995]),
            {
              "class": 2,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.62655639648438, 9.606324129713574]),
            {
              "class": 2,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.61557006835938, 9.657773512807264]),
            {
              "class": 2,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.06350708007812, 9.301530739069563]),
            {
              "class": 2,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.06488037109375, 9.381480391232857]),
            {
              "class": 2,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.05252075195312, 9.472248321127609]),
            {
              "class": 2,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.8311767578125, 10.069082211287167]),
            {
              "class": 2,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.902587890625, 10.062321444820878]),
            {
              "class": 2,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.92044067382812, 10.109643832147244]),
            {
              "class": 2,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4466552734375, 9.958187819890153]),
            {
              "class": 2,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.39447021484375, 9.970361004487604]),
            {
              "class": 2,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92750835418701, 8.756981560317044]),
            {
              "class": 2,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67256164550781, 9.495954316901056]),
            {
              "class": 2,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67617726325989, 9.506366671297007]),
            {
              "class": 2,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6797821521759, 9.505805851353571]),
            {
              "class": 2,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68470668792725, 9.495361734705432]),
            {
              "class": 2,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86605620384216, 9.570357583463306]),
            {
              "class": 2,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86853456497192, 9.583973145203515]),
            {
              "class": 2,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.89606475830078, 9.663078036203077]),
            {
              "class": 2,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.93800914287567, 9.640840940214378]),
            {
              "class": 2,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12187457084656, 9.6458035144655]),
            {
              "class": 2,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12731409072876, 9.651631477091417]),
            {
              "class": 2,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1289234161377, 9.629863363576831]),
            {
              "class": 2,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14255976676941, 9.598381559600695]),
            {
              "class": 2,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14324104785919, 9.593493575235662]),
            {
              "class": 2,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14369702339172, 9.586025482439188]),
            {
              "class": 2,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2845344543457, 9.533722457893212]),
            {
              "class": 2,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38261210918427, 9.608975284992704]),
            {
              "class": 2,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38478469848633, 9.61011306858365]),
            {
              "class": 2,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59283828735352, 11.047953018144362]),
            {
              "class": 2,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54374313354492, 11.03312640363718]),
            {
              "class": 2,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55953598022461, 11.043993711403992]),
            {
              "class": 2,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55902099609375, 11.015266079298986]),
            {
              "class": 2,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59549903869629, 10.986451426668715]),
            {
              "class": 2,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54425811767578, 10.953841933010999]),
            {
              "class": 2,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50820922851562, 10.941370168708978]),
            {
              "class": 2,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50803756713867, 10.989990224957518]),
            {
              "class": 2,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49928283691406, 10.998331510102673]),
            {
              "class": 2,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48022842407227, 10.981985739700665]),
            {
              "class": 2,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46503639221191, 10.983923687625497]),
            {
              "class": 2,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.44563865661621, 10.91743639487334]),
            {
              "class": 2,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49739456176758, 10.905805906873375]),
            {
              "class": 2,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55275535583496, 10.825222813765667]),
            {
              "class": 2,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55163955688477, 10.801026789728217]),
            {
              "class": 2,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46246147155762, 10.787283928681482]),
            {
              "class": 2,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.52267169952393, 10.796890646752608]),
            {
              "class": 2,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4028091430664, 10.832425740489843]),
            {
              "class": 2,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42851543426514, 10.787574107709233]),
            {
              "class": 2,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.41272258758545, 10.767211617449904]),
            {
              "class": 2,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40371036529541, 10.750389391678773]),
            {
              "class": 2,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36989307403564, 10.754352607056468]),
            {
              "class": 2,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45808410644531, 10.387288907778018]),
            {
              "class": 2,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43181991577148, 10.338319128101993]),
            {
              "class": 2,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42744255065918, 10.321600108365708]),
            {
              "class": 2,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46932792663574, 10.342625398199255]),
            {
              "class": 2,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37448501586914, 10.315942461018697]),
            {
              "class": 2,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35637474060059, 10.307920249434938]),
            {
              "class": 2,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36324119567871, 10.35951216170086]),
            {
              "class": 2,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2116641998291, 10.483686261820466]),
            {
              "class": 2,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14789199829102, 10.496598870512797]),
            {
              "class": 2,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12403106689453, 10.51980645186193]),
            {
              "class": 2,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09090042114258, 10.561744450403737]),
            {
              "class": 2,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15484428405762, 10.605279657077928]),
            {
              "class": 2,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2058277130127, 10.602326883145269]),
            {
              "class": 2,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.22059059143066, 10.658762107600468]),
            {
              "class": 2,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.24324989318848, 10.580222356945322]),
            {
              "class": 2,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29045677185059, 10.63311869517736]),
            {
              "class": 2,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2841911315918, 10.606038937198422]),
            {
              "class": 2,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35070991516113, 10.584862752290244]),
            {
              "class": 2,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36864852905273, 10.597771118917471]),
            {
              "class": 2,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01519775390625, 10.371063610437673]),
            {
              "class": 2,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.32693481445312, 10.285272604248156]),
            {
              "class": 2,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.7978744506836, 10.606996479347178]),
            {
              "class": 2,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.7813949584961, 10.743972957682864]),
            {
              "class": 2,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.76216888427734, 10.732167076113143]),
            {
              "class": 2,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.73221397399902, 10.707596707402566]),
            {
              "class": 2,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.71916770935059, 10.712488168627958]),
            {
              "class": 2,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.70303153991699, 10.689295195473196]),
            {
              "class": 2,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68852615356445, 10.673101232451648]),
            {
              "class": 2,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65668296813965, 10.69182542418854]),
            {
              "class": 2,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65874290466309, 10.705741304900158]),
            {
              "class": 2,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67024421691895, 10.701693114559914]),
            {
              "class": 2,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66698265075684, 10.721427531552555]),
            {
              "class": 2,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68912696838379, 10.721005869422713]),
            {
              "class": 2,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67290496826172, 10.746051580106586]),
            {
              "class": 2,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65067481994629, 10.740317391857847]),
            {
              "class": 2,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.62329483032227, 10.735004737952549]),
            {
              "class": 2,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60149383544922, 10.7568450507222]),
            {
              "class": 2,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59050750732422, 10.774467934027866]),
            {
              "class": 2,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.56656074523926, 10.70675334403703]),
            {
              "class": 2,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.81237983703613, 10.751111067529354]),
            {
              "class": 2,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86362075805664, 10.722523850340348]),
            {
              "class": 2,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.90284538269043, 10.708440068420789]),
            {
              "class": 2,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.9106559753418, 10.73281218689136]),
            {
              "class": 2,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.87692451477051, 10.785344701386709]),
            {
              "class": 2,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.88473510742188, 10.781466209289658]),
            {
              "class": 2,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.93631935119629, 10.755495888011826]),
            {
              "class": 2,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.95837783813477, 10.760555217053124]),
            {
              "class": 2,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.97099494934082, 10.771179531639381]),
            {
              "class": 2,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.98292541503906, 10.783827036521327]),
            {
              "class": 2,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.96550178527832, 10.730366630407493]),
            {
              "class": 2,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01416778564453, 10.724210486872684]),
            {
              "class": 2,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.98524284362793, 10.74731645991307]),
            {
              "class": 2,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.9798355102539, 10.774383616466489]),
            {
              "class": 2,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.02944564819336, 10.763506453121579]),
            {
              "class": 2,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.05399322509766, 10.691235039375059]),
            {
              "class": 2,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.05021667480469, 10.673607306860397]),
            {
              "class": 2,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08429145812988, 10.646784203205783]),
            {
              "class": 2,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10566329956055, 10.655894201551353]),
            {
              "class": 2,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12034034729004, 10.664076097393377]),
            {
              "class": 2,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.54278564453125, 9.269714951882776]),
            {
              "class": 2,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.55100929737091, 9.288646469162869]),
            {
              "class": 2,
              "system:index": "885"
            })]),
    Cropclass = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-82.98402786254883, 9.88583674057453]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00376892089844, 9.894884135537565]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.0170726776123, 9.899111804774508]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99982070922852, 9.706369561401221]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.97286987304688, 9.69503270174553]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00308227539062, 9.72515067835126]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02561283111572, 8.831266605736808]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01278114318848, 8.859253880126838]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.03853034973145, 8.874857979753523]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00891876220703, 8.881048553399165]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99110889434814, 8.90619138362396]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00638675689697, 8.910643138120323]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00398349761963, 8.935656750679748]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.06698322296143, 8.918232195847372]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.09934139251709, 8.846575060324069]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.1289529800415, 8.834404678716522]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.18233966827393, 8.892369400574614]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.19053649902344, 8.947018298841094]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.22813034057617, 8.992800043051089]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.21804523468018, 9.019291465622029]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.29919815063477, 9.073836473474238]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.35116863250732, 9.048111924970028]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.35983753204346, 9.062775567153217]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3618974685669, 9.028955052908668]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.35927963256836, 9.052731460588635]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3741283416748, 9.052561937394445]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3549451828003, 9.086719244769188]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.34202766418457, 9.081803505084348]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3911657333374, 9.07214133753358]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.38326930999756, 9.115025811303601]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.39391231536865, 9.126720684185656]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.39983463287354, 9.140745551337218]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.40155124664307, 9.127271520194618]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4067440032959, 9.154981709543677]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.41395378112793, 9.162819827183501]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.396315574646, 9.16985280174266]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.38339805603027, 9.175148624350111]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4356689453125, 9.154812234820744]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.43777179718018, 9.173835267714045]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42918872833252, 9.194212930794787]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42425346374512, 9.201584187489212]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45862865447998, 9.197220760979869]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47021579742432, 9.194170566806816]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45922946929932, 9.186968615178214]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47236156463623, 9.206752448275322]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45498085021973, 9.231618350806349]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49420547485352, 9.225264347906894]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47987174987793, 9.220519966550903]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49802494049072, 9.209633085428578]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5287094116211, 9.255677704234781]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5218858718872, 9.268299745863482]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53437423706055, 9.248773509842042]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53321552276611, 9.265885497809347]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.54930877685547, 9.276220057100076]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.54570388793945, 9.253559867604872]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58351230621338, 9.252246802489044]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59930515289307, 9.269146846509772]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.61977577209473, 9.293288354999067]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6015796661377, 9.29837056589584]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.61127853393555, 9.265758431662507]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63183498382568, 9.284860192681249]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63672733306885, 9.299471701863334]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.61921787261963, 9.315098988562513]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60029220581055, 9.315268386216152]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66496562957764, 9.386511511568948]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66543769836426, 9.399277007333016]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6904788017273, 9.420636460221397]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67335557937622, 9.431283940007118]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67033004760742, 9.442015759003638]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67839813232422, 9.44900078705893]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65198373794556, 9.458017613703387]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63273620605469, 9.438692529267751]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63685607910156, 9.41788457307498]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47944259643555, 8.894080139897646]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53317260742188, 8.921893038573751]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5232162475586, 8.925454293400641]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49789619445801, 8.937569404056148]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47978591918945, 8.9332451623407]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.51094245910645, 8.918745859998314]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4880256652832, 8.90967290418197]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.50776672363281, 8.888643131598183]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45781326293945, 8.881943877798633]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44253540039062, 8.891271919247929]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44948768615723, 8.899242966426627]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4203052520752, 8.895172666148323]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42365264892578, 8.86939304760237]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4180736541748, 8.859216383804391]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46648216247559, 8.856502559195373]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42107772827148, 8.913149483975339]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.36348533630371, 8.855145639379563]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.34237098693848, 8.837759702899891]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.31250190734863, 8.816640997330113]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3379077911377, 8.818676587841978]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.31443309783936, 8.863197349693861]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3373498916626, 8.930993305407153]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.31121444702148, 8.935571940974224]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.29795360565186, 8.92361649383782]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.30825328826904, 8.953843515292842]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2752513885498, 8.961177322992897]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.28357696533203, 9.009881913972183]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.30962657928467, 9.011831656736451]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.32777976989746, 8.992164204369093]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.32421779632568, 9.030650371708383]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3137035369873, 9.068327231697031]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.29022884368896, 9.075912983393566]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.26937198638916, 9.094346962448801]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.22911739349365, 9.120364801862879]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.24336528778076, 9.160870885286934]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.25233459472656, 9.148965286730295]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.25503826141357, 9.16743785971278]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.26692581176758, 9.148965286730295]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2749080657959, 9.146211265891187]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.30662250518799, 9.180698540911045]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3191967010498, 9.170488283941612]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.31705093383789, 9.157905115109084]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.32383155822754, 9.148160267459057]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.31387519836426, 9.14413514378441]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3338737487793, 9.141592936957938]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3399248123169, 9.151168488052035]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.32812309265137, 9.159091426150496]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.34601879119873, 9.118500394309232]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3263635635376, 9.11646648405419]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.32855224609375, 9.1250681503648]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.36138248443604, 9.117568186880698]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.37399959564209, 9.17637722321129]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.38146686553955, 9.179427570583826]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.36558818817139, 9.194975461025642]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.38786125183105, 9.199381278593775]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3706521987915, 9.20556627605674]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.38584423065186, 9.184638519965661]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.38983535766602, 9.210565071929727]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.39597225189209, 9.223358172288847]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.41382503509521, 9.210734478626778]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.43034744262695, 9.230093384832879]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42451095581055, 9.2154366714116]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.39824676513672, 9.221494305723253]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.40498447418213, 9.198152738825954]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.40944766998291, 9.205693363911438]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.41794490814209, 9.186333121141061]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44639778137207, 9.167226023723554]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45858573913574, 9.166039739848214]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49454879760742, 9.171674552950645]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.50845336914062, 9.158159324951331]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.517165184021, 9.187349877955825]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52763652801514, 9.194128182128244]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.50935459136963, 9.16955621265288]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.50497722625732, 9.19700892210411]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.51810932159424, 9.209971961688938]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45399379730225, 9.254110547719762]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46176147460938, 9.271264630544794]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47527980804443, 9.28854493296619]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.51574897766113, 9.287697879172192]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.51531982421875, 9.274356511900079]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.50768089294434, 9.278973105947818]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52171421051025, 9.296464786815777]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53403091430664, 9.281641384887175]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.56432914733887, 9.235600141977688]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.37747573852539, 9.213535365613025]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2249116897583, 9.129983295143745]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.19869041442871, 9.11549189795094]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2098913192749, 9.097694640750104]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.20186614990234, 9.087312498443975]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.21117877960205, 9.02238551639378]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.16787719726562, 9.024759032688303]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.14079761505127, 8.996063870429733]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.15526008605957, 9.005177056592869]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.10904026031494, 9.0280225920936]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.10603618621826, 9.019121905997256]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.09569358825684, 9.037770710508495]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.11024188995361, 9.039635537893009]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.10659408569336, 9.05684235288416]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.08470726013184, 9.040228890035896]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.09732437133789, 9.049001911164913]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.07509422302246, 9.004461413213255]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.10650825500488, 8.978350410598354]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.07372093200684, 9.013993315761576]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.97926425933838, 8.9504097163343]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96173334121704, 8.940677979992238]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96267747879028, 8.949474610723849]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96091794967651, 8.930969644502683]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.95454502105713, 8.931372397186546]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94772148132324, 8.925585434323116]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93776512145996, 8.934785178383871]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92583465576172, 8.93512433501809]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90851831436157, 8.935845041817755]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8952145576477, 8.924143978741139]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89412021636963, 8.914668386367971]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88845539093018, 8.9089871526963]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89826154708862, 8.904895761808453]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8912878036499, 8.90565892627668]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88122415542603, 8.911742986031628]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87444353103638, 8.91182778057392]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87684679031372, 8.907164051531486]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87019491195679, 8.90773642148101]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87822008132935, 8.895504468698118]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.86699771881104, 8.889271739345508]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.86927223205566, 8.873562247107238]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.86680459976196, 8.88017685218729]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.85826444625854, 8.885243728586532]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.86036729812622, 8.8622832225025]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8658390045166, 8.856389158358194]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.85807132720947, 8.856177139901641]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87959337234497, 8.838345960895458]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88718938827515, 8.827108263826402]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88249015808105, 8.843349806318278]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88796186447144, 8.83953332019711]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88858413696289, 8.848968450015002]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88607358932495, 8.852996858738235]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8175163269043, 8.86107719889313]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.82876014709473, 8.856285613031547]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.84163475036621, 8.861670842350337]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.81567096710205, 8.876935630269784]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.78786182403564, 8.902036344447575]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.79764652252197, 8.900298005846293]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.7799654006958, 8.895464533160373]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.12247276306152, 8.898983646786384]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.11062812805176, 8.911151887202257]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.1031608581543, 8.91759622674957]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.10135841369629, 8.875790793194438]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.07050228118896, 8.85590397961428]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.07363510131836, 8.879479699867632]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.07028770446777, 8.895716464429455]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.06262731552124, 8.883568911081676]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.05958032608032, 8.90428098927297]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.05870056152344, 8.912760519240274]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.04846525192261, 8.92234215125585]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.06479454040527, 8.923423248814656]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.07114601135254, 8.926920895441446]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.05301427841187, 8.96416345000611]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.08882713317871, 8.96335801677156]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.11782717704773, 8.925552405860023]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.22214365005493, 8.926878499925527]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.21441888809204, 8.934594402638428]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.20673704147339, 8.92723886165375]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.20549249649048, 8.915134752372488]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.16152572631836, 8.98951248776132]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.1714391708374, 9.032491581665349]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.29765319824219, 9.271984618780962]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.29936981201172, 9.306205496412044]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.34108352661133, 9.242335120603855]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48236083984375, 9.061249877469553]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48639488220215, 9.070700444994907]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47600936889648, 9.096338622933102]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44545364379883, 9.066335415569233]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42742919921875, 9.07841327981027]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4261417388916, 9.083413820336633]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46214771270752, 9.118669886307423]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.46206188201904, 9.131423928187386]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52720737457275, 9.131127327742568]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5218858718872, 9.132440842124518]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52660655975342, 9.175021504846667]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53428840637207, 9.167268390931518]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53991031646729, 9.179681765013767]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53793621063232, 9.188790278447817]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53222846984863, 9.20111817236523]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52270126342773, 9.22763651465955]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53021144866943, 9.229966305760975]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52137088775635, 9.241318522065322]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.5365629196167, 9.221155378467571]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42803001403809, 9.238866652684177]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.44712734222412, 9.294008339362007]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.03730726242065, 8.832748348022056]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.04683446884155, 8.835377535550258]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.04245710372925, 8.844982391839835]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.04224252700806, 8.860396284194797]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.0333161354065, 8.855647093225452]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02977561950684, 8.860269074522092]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02069902420044, 8.868240795581602]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01218032836914, 8.862558841893774]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01851034164429, 8.852742423876478]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02250146865845, 8.850007349290284]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.03277969360352, 8.841950422312458]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01430463790894, 8.843561821812653]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.0012583732605, 8.842459286074202]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99872636795044, 8.855604689458348]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00134420394897, 8.86686271787271]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99911260604858, 8.870360905035085]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9955506324768, 8.872968622871472]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00009965896606, 8.87918042892441]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.98701047897339, 8.8817032825733]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01061391830444, 8.88583735365708]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.0196475982666, 8.884989347123819]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.0132532119751, 8.901334327268684]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00479888916016, 8.905489355012438]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01576375961304, 8.911128245713408]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02511930465698, 8.905489355012438]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.03662061691284, 8.910873861540532]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02338123321533, 8.92149425006219]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.0308485031128, 8.928192779328393]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01816701889038, 8.930927270158165]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01205158233643, 8.934869988272506]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00818920135498, 8.940042091438153]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.04320812225342, 8.958440616888407]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.04020404815674, 8.972387265695383]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.03479671478271, 8.985464411472776]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.03181409835815, 8.9905722122399]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02190065383911, 8.987965335370149]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02593469619751, 8.980822820530179]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02636384963989, 9.005831602681006]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01870346069336, 9.006191886065247]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01106452941895, 9.021789692808953]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01042079925537, 9.01636444513155]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.00524950027466, 9.025477119284187]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.04885149002075, 9.026240030400903]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.20083618164062, 9.146992663543124]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.19645881652832, 9.145043655580329]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.20390462875366, 9.143179377107279]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.20268154144287, 9.133116341823802]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.17652463912964, 9.165253501877467]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2058572769165, 9.123222512228546]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.21351766586304, 9.117502185774189]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.22173595428467, 9.111463963970033]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.23325872421265, 9.089047497535942]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.21480512619019, 9.096569247297657]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.19557905197144, 9.09413264144158]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.15083980560303, 9.107396051739409]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.16890716552734, 9.111908889060455]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.12783718109131, 9.071587933509578]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.10414791107178, 9.073198315327195]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.09698104858398, 9.074406096947035]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.1180739402771, 9.035204094416118]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.14028263092041, 9.004348058384073]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.15414428710938, 9.018356517040333]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.15972328186035, 9.029100912020418]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.21268081665039, 8.98580596312416]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.30593585968018, 9.030480838117633]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.33842277526855, 9.05552856106025]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.33104133605957, 9.027598754878372]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.33481788635254, 8.96906206093946]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.2249116897583, 8.896354914504103]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.34516048431396, 8.864257420506755]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3561897277832, 8.860017118905978]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.35996627807617, 8.875409180042126]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.37708950042725, 8.880666926307399]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.41219425201016, 8.918359364692302]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94091939926147, 8.892790912494913]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94491052627563, 8.898599594185756]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94883728027344, 8.906231298582561]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.95141220092773, 8.911700588753098]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96059608459473, 8.909559519791149]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96836376190186, 8.909071947878024]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.97385692596436, 8.906994460263235]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.97207593917847, 8.895843661809328]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96802043914795, 8.885074127162133]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.97885656356812, 8.89876918934646]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.98205375671387, 8.897497223725427]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.97656059265137, 8.882636098014235]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.97668933868408, 8.869661270268807]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.97035932540894, 8.863830928712884]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96450138092041, 8.860989928751865]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.95364379882812, 8.865060608451348]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94484615325928, 8.859039378749637]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93677806854248, 8.881152072333581]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92443990707397, 8.88060086126524]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92081356048584, 8.868346801345009]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90939807891846, 8.866693107951154]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9168438911438, 8.86200760290449]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90454864501953, 8.8584881344818]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90098667144775, 8.86512421246379]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88405656814575, 8.869809677754883]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88916349411011, 8.866141875165157]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8809666633606, 8.876869564555523]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87558078765869, 8.881406477162571]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87171840667725, 8.8758519315928]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87264108657837, 8.864318560825778]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.86577463150024, 8.86686271787271]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87184715270996, 8.85450220015013]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88899183273315, 8.84214125665836]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88135290145874, 8.833342047520484]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.87751197814941, 8.829589067918024]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88038730621338, 8.82363086933049]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90111541748047, 8.820047422434664]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89961338043213, 8.810759984037727]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90740251541138, 8.808406281071056]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89922714233398, 8.802108461627807]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90263891220093, 8.790042642886231]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88497924804688, 8.777297827701267]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89268255233765, 8.777721955051435]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89294004440308, 8.772505154961506]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89557933807373, 8.76644000254991]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89663076400757, 8.762940831116824]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91341066360474, 8.758211595563738]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90727376937866, 8.769578625253999]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91053533554077, 8.743599362400731]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91057825088501, 8.740121184679378]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91446208953857, 8.728626000631177]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90356159210205, 8.727565541451758]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90892601013184, 8.72323883677807]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9047417640686, 8.71660021694951]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94943809509277, 8.726780799719133]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94885873794556, 8.730768118981612]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94270038604736, 8.727650378297005]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9471206665039, 8.718445468164814]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93540477752686, 8.731255926391732]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93053388595581, 8.745232398055723]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93143510818481, 8.752867274937952]),
            {
              "class": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94235706329346, 8.758550914915885]),
            {
              "class": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93641328811646, 8.764043603851254]),
            {
              "class": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92931079864502, 8.764213260904572]),
            {
              "class": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92519092559814, 8.771572061037539]),
            {
              "class": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93772220611572, 8.782069232436044]),
            {
              "class": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94068336486816, 8.77630112652027]),
            {
              "class": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92622089385986, 8.779715347103238]),
            {
              "class": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93027639389038, 8.777000938267712]),
            {
              "class": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92317390441895, 8.767648799568969]),
            {
              "class": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9193115234375, 8.780054646811326]),
            {
              "class": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91529893875122, 8.78380812912339]),
            {
              "class": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91946172714233, 8.793308298711807]),
            {
              "class": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91182279586792, 8.798630831885326]),
            {
              "class": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90199518203735, 8.77888830276469]),
            {
              "class": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90266036987305, 8.766355174541237]),
            {
              "class": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9189682006836, 8.733419238523497]),
            {
              "class": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93154239654541, 8.722644971438967]),
            {
              "class": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92495489120483, 8.734140339779229]),
            {
              "class": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90259599685669, 8.742814654409658]),
            {
              "class": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.93270111083984, 8.735497703066368]),
            {
              "class": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96025276184082, 8.739697014443587]),
            {
              "class": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.95544624328613, 8.752400703620806]),
            {
              "class": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9507040977478, 8.774562194646727]),
            {
              "class": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94347286224365, 8.782238881252285]),
            {
              "class": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92815208435059, 8.80494991532579]),
            {
              "class": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9199767112732, 8.811629366028198]),
            {
              "class": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91980504989624, 8.807960984229643]),
            {
              "class": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91665077209473, 8.804059312783577]),
            {
              "class": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9093337059021, 8.79928819123147]),
            {
              "class": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88873434066772, 8.821065209704923]),
            {
              "class": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90072917938232, 8.836649726684728]),
            {
              "class": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9008150100708, 8.846869419573654]),
            {
              "class": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88427114486694, 8.860693106593187]),
            {
              "class": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8418493270874, 8.84559727408695]),
            {
              "class": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8540587425232, 8.839088060907397]),
            {
              "class": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.86800622940063, 8.808279053456804]),
            {
              "class": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8754734992981, 8.80013639511432]),
            {
              "class": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88641691207886, 8.80013639511432]),
            {
              "class": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89427042007446, 8.788833918821094]),
            {
              "class": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89729595184326, 8.772123435003293]),
            {
              "class": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90566444396973, 8.773353420130196]),
            {
              "class": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.90892601013184, 8.780393946209067]),
            {
              "class": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.91667222976685, 8.771784128044343]),
            {
              "class": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9213285446167, 8.761710811514794]),
            {
              "class": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89798259735107, 8.751616014177406]),
            {
              "class": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89216756820679, 8.751616014177406]),
            {
              "class": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.89143800735474, 8.744511318259587]),
            {
              "class": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88976430892944, 8.741266441904509]),
            {
              "class": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8805160522461, 8.738000328673213]),
            {
              "class": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88828372955322, 8.735031109993693]),
            {
              "class": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.88603067398071, 8.725614288689231]),
            {
              "class": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.8913950920105, 8.715157945287826]),
            {
              "class": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9759168624878, 8.746038309117065]),
            {
              "class": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66359233856201, 9.187307533832733]),
            {
              "class": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58956336975098, 9.224266429293444]),
            {
              "class": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.57943534851074, 9.228798961137828]),
            {
              "class": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.57473611831665, 9.225219536619955]),
            {
              "class": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.69477033615112, 9.241210175305264]),
            {
              "class": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68176698684692, 9.275179928767225]),
            {
              "class": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67990016937256, 9.285853038140381]),
            {
              "class": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66337776184082, 9.29027889491323]),
            {
              "class": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66816282272339, 9.29783872185558]),
            {
              "class": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65269184112549, 9.321215976318154]),
            {
              "class": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.64556789398193, 9.327928177837794]),
            {
              "class": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65228414535522, 9.332057070452196]),
            {
              "class": 1,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63119125366211, 9.311581518295505]),
            {
              "class": 1,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.64389419555664, 9.294344704481178]),
            {
              "class": 1,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63430261611938, 9.279627097154098]),
            {
              "class": 1,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.64762783050537, 9.276598793377435]),
            {
              "class": 1,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.64857196807861, 9.269885607188307]),
            {
              "class": 1,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68110179901123, 9.218484189662655]),
            {
              "class": 1,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66498708724976, 9.216090780706581]),
            {
              "class": 1,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53660583496094, 8.959613800985915]),
            {
              "class": 1,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.56793403625488, 8.969787668131271]),
            {
              "class": 1,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.57866287231445, 9.004037589735328]),
            {
              "class": 1,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59548568725586, 9.01683808965466]),
            {
              "class": 1,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.56441497802734, 8.984793601602131]),
            {
              "class": 1,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.56810569763184, 8.953000634580778]),
            {
              "class": 1,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53557586669922, 8.935280147411412]),
            {
              "class": 1,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.54922294616699, 8.922222394828397]),
            {
              "class": 1,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.51866722106934, 8.904415615768894]),
            {
              "class": 1,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49051475524902, 8.922900731148488]),
            {
              "class": 1,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60003471374512, 9.029553366175058]),
            {
              "class": 1,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6166000366211, 9.04413300096679]),
            {
              "class": 1,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.53394508361816, 9.116852808719626]),
            {
              "class": 1,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52373123168945, 9.054558773071783]),
            {
              "class": 1,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.48905563354492, 9.135411789886037]),
            {
              "class": 1,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49248886108398, 9.162867139198214]),
            {
              "class": 1,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.64312171936035, 9.248185469001893]),
            {
              "class": 1,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.70268821716309, 9.285114331772617]),
            {
              "class": 1,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.71869564056396, 9.287994327553026]),
            {
              "class": 1,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.71157169342041, 9.293966008061323]),
            {
              "class": 1,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.72393131256104, 9.317512918048944]),
            {
              "class": 1,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.71410369873047, 9.32390757826485]),
            {
              "class": 1,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.70663642883301, 9.33623073195663]),
            {
              "class": 1,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.70732307434082, 9.348765176651447]),
            {
              "class": 1,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66775512695312, 9.360621668326065]),
            {
              "class": 1,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65565299987793, 9.372520098012359]),
            {
              "class": 1,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.64779949188232, 9.346817285802913]),
            {
              "class": 1,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6385726928711, 9.34719839573972]),
            {
              "class": 1,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60737323760986, 9.33885622731274]),
            {
              "class": 1,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60462665557861, 9.340677123763268]),
            {
              "class": 1,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63119125366211, 9.322764170800296]),
            {
              "class": 1,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63428115844727, 9.308534786908615]),
            {
              "class": 1,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.64166259765625, 9.321663108219967]),
            {
              "class": 1,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66724014282227, 9.317446923290987]),
            {
              "class": 1,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67820501327515, 9.32058074551284]),
            {
              "class": 1,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68940591812134, 9.32644599933605]),
            {
              "class": 1,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.76040935516357, 9.399975613308868]),
            {
              "class": 1,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.75549554824829, 9.406643955241618]),
            {
              "class": 1,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.72841596603394, 9.357019948164401]),
            {
              "class": 1,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.73298645019531, 9.353314799558945]),
            {
              "class": 1,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.84688377380371, 9.310106683723246]),
            {
              "class": 1,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.90507698059082, 9.292827445114495]),
            {
              "class": 1,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.92327308654785, 9.303584718453594]),
            {
              "class": 1,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.9370059967041, 9.313579368827932]),
            {
              "class": 1,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.91606330871582, 9.30350001680575]),
            {
              "class": 1,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.93391609191895, 9.319847054561995]),
            {
              "class": 1,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.89700889587402, 9.288507502165508]),
            {
              "class": 1,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.97640228271484, 9.336701488931036]),
            {
              "class": 1,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.99682998657227, 9.344408521577003]),
            {
              "class": 1,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21674156188965, 10.354192929283808]),
            {
              "class": 1,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1561450958252, 10.307920249434938]),
            {
              "class": 1,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16781806945801, 10.377326710962876]),
            {
              "class": 1,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16867637634277, 10.426290342042067]),
            {
              "class": 1,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.17202377319336, 10.4527106450657]),
            {
              "class": 1,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12679100036621, 10.403582283655256]),
            {
              "class": 1,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23562431335449, 10.418017709363955]),
            {
              "class": 1,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2597427368164, 10.424179997438344]),
            {
              "class": 1,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29596328735352, 10.399276851931852]),
            {
              "class": 1,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25545120239258, 10.374118437123478]),
            {
              "class": 1,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54517269134521, 10.034321167721538]),
            {
              "class": 1,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.52740573883057, 10.033687283718605]),
            {
              "class": 1,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.52929401397705, 10.053506136045739]),
            {
              "class": 1,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50560474395752, 10.063774274669544]),
            {
              "class": 1,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.48500537872314, 10.02979943469322]),
            {
              "class": 1,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50230026245117, 10.014796971327145]),
            {
              "class": 1,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4996395111084, 10.034955050483584]),
            {
              "class": 1,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45354843139648, 9.988002114398219]),
            {
              "class": 1,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.39140701293945, 9.987748524759542]),
            {
              "class": 1,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3461742401123, 10.009091627077341]),
            {
              "class": 1,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35098075866699, 9.987790789713054]),
            {
              "class": 1,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33128261566162, 9.946918018613847]),
            {
              "class": 1,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35055160522461, 9.93356034677211]),
            {
              "class": 1,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29802322387695, 9.911113157630956]),
            {
              "class": 1,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33351421356201, 9.882111312921618]),
            {
              "class": 1,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33162593841553, 9.87116097137368]),
            {
              "class": 1,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33038139343262, 9.860125702792597]),
            {
              "class": 1,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32372951507568, 9.84655308431697]),
            {
              "class": 1,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32986640930176, 9.830104521550528]),
            {
              "class": 1,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.34643173217773, 9.841775051511252]),
            {
              "class": 1,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.34686088562012, 9.856616325382195]),
            {
              "class": 1,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29334545135498, 9.824861105844418]),
            {
              "class": 1,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28785228729248, 9.813697427917718]),
            {
              "class": 1,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28162956237793, 9.80392890106353]),
            {
              "class": 1,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23279190063477, 9.835559277069398]),
            {
              "class": 1,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.22373676300049, 9.850147134216348]),
            {
              "class": 1,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23189067840576, 9.827355967231702]),
            {
              "class": 1,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2304744720459, 9.816868965609526]),
            {
              "class": 1,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21790027618408, 9.82722911032709]),
            {
              "class": 1,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24274826049805, 9.794540694960627]),
            {
              "class": 1,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23626804351807, 9.849090064779338]),
            {
              "class": 1,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21472454071045, 9.88118118224274]),
            {
              "class": 1,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19356727600098, 9.862789422151558]),
            {
              "class": 1,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.18099308013916, 9.856404915911636]),
            {
              "class": 1,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16695976257324, 9.891158810431765]),
            {
              "class": 1,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15786170959473, 9.912761873569071]),
            {
              "class": 1,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14198303222656, 9.91766569760645]),
            {
              "class": 1,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15434265136719, 9.953047147315461]),
            {
              "class": 1,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13357162475586, 9.955963726783127]),
            {
              "class": 1,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12460231781006, 9.966657628479568]),
            {
              "class": 1,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10250091552734, 9.96112051365675]),
            {
              "class": 1,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14533042907715, 9.975533723205997]),
            {
              "class": 1,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16292572021484, 9.978365569215233]),
            {
              "class": 1,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16610145568848, 9.994510847465651]),
            {
              "class": 1,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16133785247803, 9.997596110481362]),
            {
              "class": 1,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1793622970581, 9.981366453783881]),
            {
              "class": 1,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20313739776611, 10.001146239903976]),
            {
              "class": 1,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21777153015137, 10.015642198981208]),
            {
              "class": 1,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.22983074188232, 10.017670736366101]),
            {
              "class": 1,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2313756942749, 10.035842484265602]),
            {
              "class": 1,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24017333984375, 10.032250475384968]),
            {
              "class": 1,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25313377380371, 10.025827019018992]),
            {
              "class": 1,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27171611785889, 10.054139981214583]),
            {
              "class": 1,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25927066802979, 10.055914741073082]),
            {
              "class": 1,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24768352508545, 10.090309350012419]),
            {
              "class": 1,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25068759918213, 10.09280218270552]),
            {
              "class": 1,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27107238769531, 10.021051603814142]),
            {
              "class": 1,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32626152038574, 10.134168413570539]),
            {
              "class": 1,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32523155212402, 10.162894267304678]),
            {
              "class": 1,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.37750244140625, 10.093694388153198]),
            {
              "class": 1,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33407211303711, 10.053046246759436]),
            {
              "class": 1,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28609275817871, 10.046031600591167]),
            {
              "class": 1,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.36917686462402, 10.01712134207694]),
            {
              "class": 1,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32540321350098, 10.04235025766072]),
            {
              "class": 1,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28115749359131, 10.096520270172268]),
            {
              "class": 1,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2623176574707, 10.099858062097702]),
            {
              "class": 1,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.30252933502197, 10.115405800776882]),
            {
              "class": 1,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27716636657715, 10.06761946065795]),
            {
              "class": 1,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27051448822021, 10.047125358778214]),
            {
              "class": 1,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23682594299316, 10.049618525151333]),
            {
              "class": 1,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.85934257507324, 10.155665872932952]),
            {
              "class": 1,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.9116563796997, 10.14548515734344]),
            {
              "class": 1,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.92208480834961, 10.12039105767324]),
            {
              "class": 1,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.93152618408203, 10.121700730966767]),
            {
              "class": 1,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.95242595672607, 10.121489493700231]),
            {
              "class": 1,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.95294094085693, 10.126390162476492]),
            {
              "class": 1,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.97547149658203, 10.126728136874338]),
            {
              "class": 1,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89891052246094, 10.092717680218449]),
            {
              "class": 1,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.86886978149414, 10.085577139944698]),
            {
              "class": 1,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.87221717834473, 10.094914737672102]),
            {
              "class": 1,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.86110210418701, 10.072225172578873]),
            {
              "class": 1,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.87479209899902, 10.072774473281624]),
            {
              "class": 1,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.86371994018555, 10.061661515619097]),
            {
              "class": 1,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.85208988189697, 10.043153155698583]),
            {
              "class": 1,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.84586715698242, 10.054097724908667]),
            {
              "class": 1,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.87032890319824, 10.053801930612568]),
            {
              "class": 1,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.86384868621826, 10.03056010447888]),
            {
              "class": 1,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.83535289764404, 10.02713707637867]),
            {
              "class": 1,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80157852172852, 10.036560881259895]),
            {
              "class": 1,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80964660644531, 10.058703629725269]),
            {
              "class": 1,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80003356933594, 10.014881494191634]),
            {
              "class": 1,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.78046417236328, 10.025277638550143]),
            {
              "class": 1,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.7633409500122, 10.015599937650805]),
            {
              "class": 1,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.76437091827393, 10.026798997567042]),
            {
              "class": 1,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.75282669067383, 9.999709287428924]),
            {
              "class": 1,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.75844860076904, 10.037321535163315]),
            {
              "class": 1,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.73540306091309, 9.998145537809553]),
            {
              "class": 1,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.73450183868408, 10.0150082784471]),
            {
              "class": 1,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.74493026733398, 9.9931583941734]),
            {
              "class": 1,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.74488735198975, 9.98901647097621]),
            {
              "class": 1,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.78394031524658, 10.008457693747976]),
            {
              "class": 1,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.8199462890625, 10.038462512667005]),
            {
              "class": 1,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.81466770172119, 10.050590432258224]),
            {
              "class": 1,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.83363628387451, 10.049576268254318]),
            {
              "class": 1,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.83316421508789, 10.011204729234425]),
            {
              "class": 1,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.84453678131104, 10.015642198981208]),
            {
              "class": 1,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.88564968109131, 10.05236521160907]),
            {
              "class": 1,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.8951768875122, 10.039983809748646]),
            {
              "class": 1,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89972591400146, 10.04268832023531]),
            {
              "class": 1,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.90393161773682, 10.03973026073163]),
            {
              "class": 1,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.90599155426025, 10.057858514494427]),
            {
              "class": 1,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89367485046387, 10.065464471954991]),
            {
              "class": 1,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89238739013672, 10.053041315465135]),
            {
              "class": 1,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.87702369689941, 10.03842025431266]),
            {
              "class": 1,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.88281726837158, 10.08304199880933]),
            {
              "class": 1,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.94410037994385, 10.097365284059952]),
            {
              "class": 1,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.93483066558838, 10.128840468793074]),
            {
              "class": 1,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.47672271728516, 10.383161954220038]),
            {
              "class": 1,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50195693969727, 10.466394059768096]),
            {
              "class": 1,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54864883422852, 10.462680322901065]),
            {
              "class": 1,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5556869506836, 10.524120059434619]),
            {
              "class": 1,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.55929183959961, 10.540996968121764]),
            {
              "class": 1,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45269012451172, 10.470445358362676]),
            {
              "class": 1,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.40857315063477, 10.451201218885013]),
            {
              "class": 1,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.55156707763672, 10.386370094078734]),
            {
              "class": 1,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54109573364258, 10.373537337196218]),
            {
              "class": 1,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.62383651733398, 10.308521221430368]),
            {
              "class": 1,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.62023162841797, 10.299232107362268]),
            {
              "class": 1,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.68683624267578, 10.287071398986086]),
            {
              "class": 1,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.75550079345703, 10.27051857102756]),
            {
              "class": 1,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.66692352294922, 10.321525520903199]),
            {
              "class": 1,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.69095611572266, 10.347532506664312]),
            {
              "class": 1,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.62881469726562, 10.355638139821492]),
            {
              "class": 1,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.76056480407715, 10.19212439762057]),
            {
              "class": 1,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.74502944946289, 10.224477166930262]),
            {
              "class": 1,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.72005271911621, 10.235711170401498]),
            {
              "class": 1,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.7058048248291, 10.251759056756814]),
            {
              "class": 1,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.79403877258301, 10.130281776662699]),
            {
              "class": 1,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.48049926757812, 10.072314611440188]),
            {
              "class": 1,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.47689437866211, 10.087103145823296]),
            {
              "class": 1,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.49131393432617, 10.080680779958646]),
            {
              "class": 1,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45801162719727, 10.115748717075734]),
            {
              "class": 1,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45286178588867, 10.103580998541876]),
            {
              "class": 1,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.41543960571289, 10.124620721244632]),
            {
              "class": 1,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.39896011352539, 10.163401170976167]),
            {
              "class": 1,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33913612365723, 10.163063235284488]),
            {
              "class": 1,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.41003227233887, 10.193391539227095]),
            {
              "class": 1,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.41664123535156, 10.193729442804509]),
            {
              "class": 1,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.38153648376465, 10.213073824765667]),
            {
              "class": 1,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35630226135254, 10.258177983755527]),
            {
              "class": 1,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3223991394043, 10.21231358741093]),
            {
              "class": 1,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.39114952087402, 10.244410914875582]),
            {
              "class": 1,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3476333618164, 10.250998912050227]),
            {
              "class": 1,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29664993286133, 10.205893732851854]),
            {
              "class": 1,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26987075805664, 10.145152132607752]),
            {
              "class": 1,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25055885314941, 10.155206129751]),
            {
              "class": 1,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80690002441406, 10.683401089212596]),
            {
              "class": 1,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.79145050048828, 10.705666810186596]),
            {
              "class": 1,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.76724624633789, 10.710895643961765]),
            {
              "class": 1,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.77497100830078, 10.741592136549308]),
            {
              "class": 1,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.83402252197266, 10.671761539709586]),
            {
              "class": 1,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.77685928344727, 10.696220946324758]),
            {
              "class": 1,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.76278305053711, 10.693016032814038]),
            {
              "class": 1,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.79076385498047, 10.544362391672779]),
            {
              "class": 1,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.76956367492676, 10.550184646967436]),
            {
              "class": 1,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.79672908782959, 10.473511223665662]),
            {
              "class": 1,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80522632598877, 10.474017627259482]),
            {
              "class": 1,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.81398105621338, 10.475368032797615]),
            {
              "class": 1,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.7901201248169, 10.479588012171966]),
            {
              "class": 1,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.78539943695068, 10.494948251436035]),
            {
              "class": 1,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.56910610198975, 10.361364723651674]),
            {
              "class": 1,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.5573902130127, 10.358789566194087]),
            {
              "class": 1,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.56223964691162, 10.381669731723893]),
            {
              "class": 1,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54550266265869, 10.392222749751516]),
            {
              "class": 1,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54232692718506, 10.361997955850647]),
            {
              "class": 1,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.53906536102295, 10.371285214377677]),
            {
              "class": 1,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.52383041381836, 10.353343671734681]),
            {
              "class": 1,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.52704906463623, 10.321932946713016]),
            {
              "class": 1,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.505934715271, 10.32113075002245]),
            {
              "class": 1,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50563430786133, 10.339411882249616]),
            {
              "class": 1,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50117111206055, 10.344689148797478]),
            {
              "class": 1,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50503349304199, 10.360435980778583]),
            {
              "class": 1,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50250148773193, 10.366979337847722]),
            {
              "class": 1,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48593616485596, 10.359633882445982]),
            {
              "class": 1,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.51365947723389, 10.385595496044704]),
            {
              "class": 1,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.51035499572754, 10.396232803158988]),
            {
              "class": 1,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50155735015869, 10.402311101719283]),
            {
              "class": 1,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.51773643493652, 10.392096115647533]),
            {
              "class": 1,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.53893661499023, 10.396612700285692]),
            {
              "class": 1,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50700759887695, 10.408051608337]),
            {
              "class": 1,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49709415435791, 10.417506330097952]),
            {
              "class": 1,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48327541351318, 10.415311509529934]),
            {
              "class": 1,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47975635528564, 10.422740070606743]),
            {
              "class": 1,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47507858276367, 10.416831002338611]),
            {
              "class": 1,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47606563568115, 10.425694562708197]),
            {
              "class": 1,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47606563568115, 10.431898904868493]),
            {
              "class": 1,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47357654571533, 10.433333905172834]),
            {
              "class": 1,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48928356170654, 10.435275365639002]),
            {
              "class": 1,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45786952972412, 10.44093085532722]),
            {
              "class": 1,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47739601135254, 10.452536948501724]),
            {
              "class": 1,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47078704833984, 10.463382978085727]),
            {
              "class": 1,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47078704833984, 10.478237625026065]),
            {
              "class": 1,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46653842926025, 10.486466455314575]),
            {
              "class": 1,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.44619655609131, 10.477731228328759]),
            {
              "class": 1,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.44559574127197, 10.491108263089938]),
            {
              "class": 1,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45443630218506, 10.459584800729788]),
            {
              "class": 1,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6664810180664, 10.544484039996838]),
            {
              "class": 1,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6641206741333, 10.537438122796944]),
            {
              "class": 1,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.63858604431152, 10.494910978426615]),
            {
              "class": 1,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6445083618164, 10.500734167185854]),
            {
              "class": 1,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.68184471130371, 10.491113187556058]),
            {
              "class": 1,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61730003356934, 10.486049393884215]),
            {
              "class": 1,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6383285522461, 10.48453023962815]),
            {
              "class": 1,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.62004661560059, 10.459209905410525]),
            {
              "class": 1,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6522331237793, 10.445367249068092]),
            {
              "class": 1,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.62828636169434, 10.510186066101028]),
            {
              "class": 1,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59549903869629, 10.498033571542614]),
            {
              "class": 1,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55395698547363, 10.482504689024948]),
            {
              "class": 1,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.5167064666748, 10.478369148739898]),
            {
              "class": 1,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.58580017089844, 10.44916560033124]),
            {
              "class": 1,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48709487915039, 10.443763486818009]),
            {
              "class": 1,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49224472045898, 10.477947151728777]),
            {
              "class": 1,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4947338104248, 10.503350346716285]),
            {
              "class": 1,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49627876281738, 10.51516507511082]),
            {
              "class": 1,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46134567260742, 10.512633385647776]),
            {
              "class": 1,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45645332336426, 10.512802165591197]),
            {
              "class": 1,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45104598999023, 10.546387536443325]),
            {
              "class": 1,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46520805358887, 10.537443046524082]),
            {
              "class": 1,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42787170410156, 10.535080307697003]),
            {
              "class": 1,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.41688537597656, 10.571700720873084]),
            {
              "class": 1,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40169334411621, 10.498624328855309]),
            {
              "class": 1,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38864707946777, 10.480732321378515]),
            {
              "class": 1,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.41439628601074, 10.504278663161823]),
            {
              "class": 1,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39834594726562, 10.516768467698315]),
            {
              "class": 1,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35937881469727, 10.500987346817865]),
            {
              "class": 1,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35302734375, 10.512380215559668]),
            {
              "class": 1,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.3394660949707, 10.501409312410411]),
            {
              "class": 1,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.32169914245605, 10.490353623787515]),
            {
              "class": 1,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.32393074035645, 10.459125500839324]),
            {
              "class": 1,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.31998252868652, 10.443088216026643]),
            {
              "class": 1,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29054260253906, 10.451022555159733]),
            {
              "class": 1,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.33088302612305, 10.406030485052568]),
            {
              "class": 1,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.3449592590332, 10.379606224672624]),
            {
              "class": 1,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36195373535156, 10.397166365718654]),
            {
              "class": 1,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37929153442383, 10.382476699788247]),
            {
              "class": 1,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38864707946777, 10.35233539829313]),
            {
              "class": 1,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36212539672852, 10.369474925529222]),
            {
              "class": 1,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37294006347656, 10.398939209722155]),
            {
              "class": 1,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40718650817871, 10.395140245961576]),
            {
              "class": 1,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.44117546081543, 10.432705743012175]),
            {
              "class": 1,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.44314956665039, 10.421985265099194]),
            {
              "class": 1,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43997383117676, 10.412361844691585]),
            {
              "class": 1,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47370529174805, 10.37597588018663]),
            {
              "class": 1,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.41079139709473, 10.280643200296494]),
            {
              "class": 1,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45053100585938, 10.2476204690678]),
            {
              "class": 1,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49078559875488, 10.280643202873787]),
            {
              "class": 1,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45327758789062, 10.289003907921087]),
            {
              "class": 1,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.41697120666504, 10.323711142170119]),
            {
              "class": 1,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.23543930053711, 10.341189978818386]),
            {
              "class": 1,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.23492431640625, 10.354615091306952]),
            {
              "class": 1,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.26196098327637, 10.383320949584716]),
            {
              "class": 1,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2497730255127, 10.395900039834563]),
            {
              "class": 1,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.26565170288086, 10.41497876912891]),
            {
              "class": 1,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.26788330078125, 10.428063061673436]),
            {
              "class": 1,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25646781921387, 10.455158460104638]),
            {
              "class": 1,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.26719665527344, 10.473305146673352]),
            {
              "class": 1,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25792694091797, 10.494657793819174]),
            {
              "class": 1,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.27226066589355, 10.51735918918351]),
            {
              "class": 1,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25869941711426, 10.541409031666142]),
            {
              "class": 1,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25732612609863, 10.527401281387116]),
            {
              "class": 1,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.24127578735352, 10.512633385647776]),
            {
              "class": 1,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.22144889831543, 10.505966504099607]),
            {
              "class": 1,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2047119140625, 10.529004610374995]),
            {
              "class": 1,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.18608665466309, 10.525376011800677]),
            {
              "class": 1,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.18745994567871, 10.539383854145347]),
            {
              "class": 1,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29140090942383, 10.553559816977918]),
            {
              "class": 1,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.3266773223877, 10.565203869101751]),
            {
              "class": 1,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.31234359741211, 10.572966325350109]),
            {
              "class": 1,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35088157653809, 10.529257766821347]),
            {
              "class": 1,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39783096313477, 10.592709079172444]),
            {
              "class": 1,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42057609558105, 10.490016039291882]),
            {
              "class": 1,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42229270935059, 10.456593353030806]),
            {
              "class": 1,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39414024353027, 10.44148444201844]),
            {
              "class": 1,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36409950256348, 10.468409866027603]),
            {
              "class": 1,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34324264526367, 10.426205969750049]),
            {
              "class": 1,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36049461364746, 10.427809822517956]),
            {
              "class": 1,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.41671371459961, 10.438530099822039]),
            {
              "class": 1,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48203086853027, 10.401640666941057]),
            {
              "class": 1,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.65224647521973, 11.049806333440188]),
            {
              "class": 1,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.49328804016113, 11.032452489966193]),
            {
              "class": 1,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50084114074707, 11.040371361295431]),
            {
              "class": 1,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50127029418945, 11.063115867475883]),
            {
              "class": 1,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4765510559082, 11.02520737820564]),
            {
              "class": 1,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4337215423584, 11.042814374249032]),
            {
              "class": 1,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.40462493896484, 11.032620978812567]),
            {
              "class": 1,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.56392669677734, 10.823621046732645]),
            {
              "class": 1,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.53251266479492, 10.776154280296153]),
            {
              "class": 1,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5453872680664, 10.756339115413049]),
            {
              "class": 1,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.52882194519043, 10.761229787844671]),
            {
              "class": 1,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51783561706543, 10.77311885021265]),
            {
              "class": 1,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.52384376525879, 10.758447173601654]),
            {
              "class": 1,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50152778625488, 10.735257723589935]),
            {
              "class": 1,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.52204132080078, 10.728933019133859]),
            {
              "class": 1,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4970645904541, 10.707934052091538]),
            {
              "class": 1,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.49148559570312, 10.717295217348228]),
            {
              "class": 1,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.506591796875, 10.70211480357608]),
            {
              "class": 1,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.53800582885742, 10.668124789233307]),
            {
              "class": 1,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.52144050598145, 10.654207185375403]),
            {
              "class": 1,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54736137390137, 10.65361672750608]),
            {
              "class": 1,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.58323860168457, 10.629406970006322]),
            {
              "class": 1,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.56581497192383, 10.642650873401493]),
            {
              "class": 1,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54959297180176, 10.620296180563486]),
            {
              "class": 1,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5282211303711, 10.638686198286562]),
            {
              "class": 1,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50461769104004, 10.659352555492353]),
            {
              "class": 1,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51938056945801, 10.632106410970685]),
            {
              "class": 1,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44960021972656, 10.601314496953458]),
            {
              "class": 1,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.48341751098633, 10.623670578711005]),
            {
              "class": 1,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.48213005065918, 10.628985180199345]),
            {
              "class": 1,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45835494995117, 10.66685957882161]),
            {
              "class": 1,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.46084403991699, 10.632696910499284]),
            {
              "class": 1,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45183181762695, 10.613884721427016]),
            {
              "class": 1,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42745590209961, 10.586297042098767]),
            {
              "class": 1,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.43784141540527, 10.586212672295776]),
            {
              "class": 1,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.41569709777832, 10.557778727399787]),
            {
              "class": 1,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.40745735168457, 10.596674350738994]),
            {
              "class": 1,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.46195983886719, 10.560731930246046]),
            {
              "class": 1,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42994499206543, 10.56824137534999]),
            {
              "class": 1,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.39518356323242, 10.481576307237086]),
            {
              "class": 1,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.43912887573242, 10.457690619617201]),
            {
              "class": 1,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32806396484375, 10.50216884902534]),
            {
              "class": 1,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3374195098877, 10.52892022484668]),
            {
              "class": 1,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.36376953125, 10.531620550294546]),
            {
              "class": 1,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.30703544616699, 10.578281807164629]),
            {
              "class": 1,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2949333190918, 10.577606830450618]),
            {
              "class": 1,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.40462493896484, 10.608991675310504]),
            {
              "class": 1,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27424812316895, 10.71670488214239]),
            {
              "class": 1,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24317741394043, 10.701777452410061]),
            {
              "class": 1,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21717071533203, 10.746726183329589]),
            {
              "class": 1,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20077705383301, 10.718222884631489]),
            {
              "class": 1,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21227836608887, 10.714259195455993]),
            {
              "class": 1,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.18627166748047, 10.614643980186486]),
            {
              "class": 1,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12533187866211, 10.523181954738947]),
            {
              "class": 1,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07683753967285, 10.5522097534181]),
            {
              "class": 1,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.05014419555664, 10.533645778854119]),
            {
              "class": 1,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0462818145752, 10.483433068029555]),
            {
              "class": 1,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01761436462402, 10.473389547385905]),
            {
              "class": 1,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.98894691467285, 10.55060654524409]),
            {
              "class": 1,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.00096321105957, 10.564106984463649]),
            {
              "class": 1,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07546424865723, 10.613125460782102]),
            {
              "class": 1,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06482124328613, 10.621224143769398]),
            {
              "class": 1,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06816864013672, 10.627888523974091]),
            {
              "class": 1,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20137786865234, 10.62544212281696]),
            {
              "class": 1,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1729679107666, 10.789223143470926]),
            {
              "class": 1,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21648406982422, 10.774552251565606]),
            {
              "class": 1,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.17691612243652, 10.819574439254406]),
            {
              "class": 1,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1590633392334, 10.79343878464323]),
            {
              "class": 1,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14670372009277, 10.809710604733707]),
            {
              "class": 1,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15485763549805, 10.77716608352286]),
            {
              "class": 1,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10550498962402, 10.83053387476085]),
            {
              "class": 1,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1067066192627, 10.839301134439982]),
            {
              "class": 1,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09177207946777, 10.806506896401352]),
            {
              "class": 1,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.05881309509277, 10.887010751219885]),
            {
              "class": 1,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06138801574707, 10.87639054239817]),
            {
              "class": 1,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0784683227539, 10.8663599978563]),
            {
              "class": 1,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07718086242676, 10.882122130673196]),
            {
              "class": 1,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08936882019043, 10.898979104197789]),
            {
              "class": 1,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.9916934967041, 10.898389126242119]),
            {
              "class": 1,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02731323242188, 10.913728172762976]),
            {
              "class": 1,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02860069274902, 10.943645459592318]),
            {
              "class": 1,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.05529403686523, 10.935892536183275]),
            {
              "class": 1,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01967430114746, 10.942634220213415]),
            {
              "class": 1,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16575813293457, 10.987715288072163]),
            {
              "class": 1,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1781177520752, 11.005324526895192]),
            {
              "class": 1,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19433975219727, 10.99386600295276]),
            {
              "class": 1,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12567520101602, 11.002881202538953]),
            {
              "class": 1,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13648986816406, 10.974065298587822]),
            {
              "class": 1,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1601791381836, 10.969009586854874]),
            {
              "class": 1,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13099670410156, 10.961510121875175]),
            {
              "class": 1,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10378837585449, 10.985524591532997]),
            {
              "class": 1,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0367546081543, 10.97541347120384]),
            {
              "class": 1,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06593704223633, 10.970104995831107]),
            {
              "class": 1,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.94577407836914, 10.941960058710402]),
            {
              "class": 1,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.94062423706055, 10.905384501266282]),
            {
              "class": 1,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.96671676635742, 10.891056442916181]),
            {
              "class": 1,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.92697715759277, 10.893500689902735]),
            {
              "class": 1,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.95993614196777, 10.86981593783571]),
            {
              "class": 1,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.92998123168945, 10.780623052217493]),
            {
              "class": 1,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01615524291992, 10.825728633155137]),
            {
              "class": 1,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02799987792969, 10.825391420323706]),
            {
              "class": 1,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.92225646972656, 10.716283213433467]),
            {
              "class": 1,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89195823669434, 10.734330108550846]),
            {
              "class": 1,
              "system:index": "917"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.91581916809082, 10.7344144373084]),
            {
              "class": 1,
              "system:index": "918"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.92225646972656, 10.737787568315207]),
            {
              "class": 1,
              "system:index": "919"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.86775398254395, 10.672679503134164]),
            {
              "class": 1,
              "system:index": "920"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.84088897705078, 10.667956094815803]),
            {
              "class": 1,
              "system:index": "921"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.87642288208008, 10.680607916395351]),
            {
              "class": 1,
              "system:index": "922"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.84166145324707, 10.50495380064332]),
            {
              "class": 1,
              "system:index": "923"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.85659599304199, 10.52065033104368]),
            {
              "class": 1,
              "system:index": "924"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.8554801940918, 10.469253885446458]),
            {
              "class": 1,
              "system:index": "925"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.85470771789551, 10.462164050940672]),
            {
              "class": 1,
              "system:index": "926"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.86775398254395, 10.41286834790989]),
            {
              "class": 1,
              "system:index": "927"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.90045547485352, 10.398939209722155]),
            {
              "class": 1,
              "system:index": "928"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.94088172912598, 10.430511029555444]),
            {
              "class": 1,
              "system:index": "929"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.84904289245605, 10.324888391841217]),
            {
              "class": 1,
              "system:index": "930"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.84003067016602, 10.30871755244479]),
            {
              "class": 1,
              "system:index": "931"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08825302124023, 10.246025552677716]),
            {
              "class": 1,
              "system:index": "932"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08018493652344, 10.314263445868812]),
            {
              "class": 1,
              "system:index": "933"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06113052368164, 10.24551878057375]),
            {
              "class": 1,
              "system:index": "934"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.18335342407227, 10.340102158998844]),
            {
              "class": 1,
              "system:index": "935"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.90938186645508, 10.214209248574523]),
            {
              "class": 1,
              "system:index": "936"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.9373197555542, 10.25563928415253]),
            {
              "class": 1,
              "system:index": "937"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.95954990386963, 10.267463377485027]),
            {
              "class": 1,
              "system:index": "938"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01036167144775, 10.308506439388532]),
            {
              "class": 1,
              "system:index": "939"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.04894256591797, 10.330123681321806]),
            {
              "class": 1,
              "system:index": "940"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07052898406982, 10.30719753528194]),
            {
              "class": 1,
              "system:index": "941"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07640838623047, 10.297486141466127]),
            {
              "class": 1,
              "system:index": "942"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.04366397857666, 10.278611403514809]),
            {
              "class": 1,
              "system:index": "943"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07306098937988, 10.279498161429546]),
            {
              "class": 1,
              "system:index": "944"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0590705871582, 10.29951289183556]),
            {
              "class": 1,
              "system:index": "945"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0647783279419, 10.28220064638837]),
            {
              "class": 1,
              "system:index": "946"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08516311645508, 10.309899782945115]),
            {
              "class": 1,
              "system:index": "947"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.11413097381592, 10.306564192632937]),
            {
              "class": 1,
              "system:index": "948"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09503364562988, 10.281398348579396]),
            {
              "class": 1,
              "system:index": "949"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.31918048858643, 10.40758730658064]),
            {
              "class": 1,
              "system:index": "950"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33360004425049, 10.418941396727416]),
            {
              "class": 1,
              "system:index": "951"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33939361572266, 10.427002971683402]),
            {
              "class": 1,
              "system:index": "952"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32227039337158, 10.428775646039957]),
            {
              "class": 1,
              "system:index": "953"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32875061035156, 10.405392416195872]),
            {
              "class": 1,
              "system:index": "954"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29150009155273, 10.382387348237968]),
            {
              "class": 1,
              "system:index": "955"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26300430297852, 10.37715293116471]),
            {
              "class": 1,
              "system:index": "956"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25115966796875, 10.461357289281327]),
            {
              "class": 1,
              "system:index": "957"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24141788482666, 10.476380833089399]),
            {
              "class": 1,
              "system:index": "958"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23330688476562, 10.45840313607154]),
            {
              "class": 1,
              "system:index": "959"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.23317813873291, 10.434811104455754]),
            {
              "class": 1,
              "system:index": "960"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2114200592041, 10.448401008648654]),
            {
              "class": 1,
              "system:index": "961"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20184993743896, 10.443758561599966]),
            {
              "class": 1,
              "system:index": "962"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20923137664795, 10.426538698160238]),
            {
              "class": 1,
              "system:index": "963"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19416809082031, 10.42084073945679]),
            {
              "class": 1,
              "system:index": "964"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.17631530761719, 10.437090198161973]),
            {
              "class": 1,
              "system:index": "965"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.18901824951172, 10.455111332233049]),
            {
              "class": 1,
              "system:index": "966"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.17017841339111, 10.475621233180902]),
            {
              "class": 1,
              "system:index": "967"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19648551940918, 10.472625015385574]),
            {
              "class": 1,
              "system:index": "968"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20901679992676, 10.489715728067797]),
            {
              "class": 1,
              "system:index": "969"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21923065185547, 10.502543692348842]),
            {
              "class": 1,
              "system:index": "970"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14657497406006, 10.446290814041964]),
            {
              "class": 1,
              "system:index": "971"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12970924377441, 10.433924785727593]),
            {
              "class": 1,
              "system:index": "972"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14219760894775, 10.423753042484634]),
            {
              "class": 1,
              "system:index": "973"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15241146087646, 10.41721087438331]),
            {
              "class": 1,
              "system:index": "974"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16404151916504, 10.404168336005291]),
            {
              "class": 1,
              "system:index": "975"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15644550323486, 10.388423704306787]),
            {
              "class": 1,
              "system:index": "976"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.18996238708496, 10.387832737531147]),
            {
              "class": 1,
              "system:index": "977"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13301372528076, 10.37715293116471]),
            {
              "class": 1,
              "system:index": "978"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13099670410156, 10.363813214395279]),
            {
              "class": 1,
              "system:index": "979"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10803699493408, 10.371918426520047]),
            {
              "class": 1,
              "system:index": "980"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09932518005371, 10.404506013778871]),
            {
              "class": 1,
              "system:index": "981"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08718013763428, 10.384075851186847]),
            {
              "class": 1,
              "system:index": "982"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06937026977539, 10.379052528131469]),
            {
              "class": 1,
              "system:index": "983"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07104396820068, 10.408304863549207]),
            {
              "class": 1,
              "system:index": "984"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08022785186768, 10.432447582236824]),
            {
              "class": 1,
              "system:index": "985"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14206886291504, 10.48878736790496]),
            {
              "class": 1,
              "system:index": "986"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13494491577148, 10.526974427425941]),
            {
              "class": 1,
              "system:index": "987"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08615016937256, 10.553892408477953]),
            {
              "class": 1,
              "system:index": "988"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.04765510559082, 10.55646594793764]),
            {
              "class": 1,
              "system:index": "989"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.05190372467041, 10.54410432401902]),
            {
              "class": 1,
              "system:index": "990"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.00988960266113, 10.574184814912378]),
            {
              "class": 1,
              "system:index": "991"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02040386199951, 10.563005172591303]),
            {
              "class": 1,
              "system:index": "992"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.03284931182861, 10.59261978829188]),
            {
              "class": 1,
              "system:index": "993"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.03001689910889, 10.631764059943029]),
            {
              "class": 1,
              "system:index": "994"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.05868434906006, 10.634083875549415]),
            {
              "class": 1,
              "system:index": "995"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07936954498291, 10.603081247917135]),
            {
              "class": 1,
              "system:index": "996"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07452011108398, 10.600508099461111]),
            {
              "class": 1,
              "system:index": "997"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10237216949463, 10.587473293977027]),
            {
              "class": 1,
              "system:index": "998"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07001399993896, 10.57886748750765]),
            {
              "class": 1,
              "system:index": "999"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14563083648682, 10.58093459050974]),
            {
              "class": 1,
              "system:index": "1000"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1576042175293, 10.670481578379267]),
            {
              "class": 1,
              "system:index": "1001"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16953468322754, 10.671156349884273]),
            {
              "class": 1,
              "system:index": "1002"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.22249221801758, 10.67921131906875]),
            {
              "class": 1,
              "system:index": "1003"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19974708557129, 10.659642855959278]),
            {
              "class": 1,
              "system:index": "1004"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20240783691406, 10.676554468009968]),
            {
              "class": 1,
              "system:index": "1005"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25459289550781, 10.663607258360821]),
            {
              "class": 1,
              "system:index": "1006"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32053232192993, 10.911339924749504]),
            {
              "class": 1,
              "system:index": "1007"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32450199127197, 10.90590388093583]),
            {
              "class": 1,
              "system:index": "1008"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33405065536499, 10.906430633716324]),
            {
              "class": 1,
              "system:index": "1009"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35634517669678, 10.912730524640677]),
            {
              "class": 1,
              "system:index": "1010"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3698205947876, 10.914437160425113]),
            {
              "class": 1,
              "system:index": "1011"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.38224458694458, 10.919451665058894]),
            {
              "class": 1,
              "system:index": "1012"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.38269519805908, 10.906788825074042]),
            {
              "class": 1,
              "system:index": "1013"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35078763961792, 10.924023639612917]),
            {
              "class": 1,
              "system:index": "1014"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33061742782593, 10.93390476339125]),
            {
              "class": 1,
              "system:index": "1015"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28774499893188, 10.965147173425876]),
            {
              "class": 1,
              "system:index": "1016"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28360366821289, 10.9689600805261]),
            {
              "class": 1,
              "system:index": "1017"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27907609939575, 10.975574620371894]),
            {
              "class": 1,
              "system:index": "1018"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2759861946106, 10.97846053562726]),
            {
              "class": 1,
              "system:index": "1019"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26023626327515, 10.966663915841373]),
            {
              "class": 1,
              "system:index": "1020"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25954961776733, 10.970266147894039]),
            {
              "class": 1,
              "system:index": "1021"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24879932403564, 10.965463162070664]),
            {
              "class": 1,
              "system:index": "1022"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25000095367432, 10.960554767014457]),
            {
              "class": 1,
              "system:index": "1023"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25002241134644, 10.955393491245202]),
            {
              "class": 1,
              "system:index": "1024"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.25336980819702, 10.957689743417498]),
            {
              "class": 1,
              "system:index": "1025"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2424693107605, 10.933967967814567]),
            {
              "class": 1,
              "system:index": "1026"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.22774934768677, 10.922401334119684]),
            {
              "class": 1,
              "system:index": "1027"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.20108515701294, 10.906493843987265]),
            {
              "class": 1,
              "system:index": "1028"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19536972045898, 10.90752627651068]),
            {
              "class": 1,
              "system:index": "1029"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19127130508423, 10.908769404791867]),
            {
              "class": 1,
              "system:index": "1030"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19206523895264, 10.901120922993455]),
            {
              "class": 1,
              "system:index": "1031"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.18738746643066, 10.903375454601752]),
            {
              "class": 1,
              "system:index": "1032"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1835036277771, 10.910202156362754]),
            {
              "class": 1,
              "system:index": "1033"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.17865419387817, 10.920610467755745]),
            {
              "class": 1,
              "system:index": "1034"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16822576522827, 10.89722286074848]),
            {
              "class": 1,
              "system:index": "1035"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.17301082611084, 10.901120922993455]),
            {
              "class": 1,
              "system:index": "1036"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15914916992188, 10.907631626566607]),
            {
              "class": 1,
              "system:index": "1037"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15666007995605, 10.88759337466645]),
            {
              "class": 1,
              "system:index": "1038"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.16753911972046, 10.87842716328049]),
            {
              "class": 1,
              "system:index": "1039"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12153387069702, 10.928890502894099]),
            {
              "class": 1,
              "system:index": "1040"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09250164031982, 10.95118013817887]),
            {
              "class": 1,
              "system:index": "1041"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07829666137695, 10.942984994778218]),
            {
              "class": 1,
              "system:index": "1042"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09160041809082, 10.933293787247766]),
            {
              "class": 1,
              "system:index": "1043"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09917497634888, 10.926488684236062]),
            {
              "class": 1,
              "system:index": "1044"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08887529373169, 10.91974663328342]),
            {
              "class": 1,
              "system:index": "1045"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09913206100464, 10.919304180836777]),
            {
              "class": 1,
              "system:index": "1046"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10537624359131, 10.924992804898267]),
            {
              "class": 1,
              "system:index": "1047"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08958339691162, 10.904892512981732]),
            {
              "class": 1,
              "system:index": "1048"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.09007692337036, 10.890901570208555]),
            {
              "class": 1,
              "system:index": "1049"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10327339172363, 10.884390500666127]),
            {
              "class": 1,
              "system:index": "1050"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06866216659546, 10.873622691626444]),
            {
              "class": 1,
              "system:index": "1051"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06677389144897, 10.886265871857683]),
            {
              "class": 1,
              "system:index": "1052"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07490634918213, 10.89595861337911]),
            {
              "class": 1,
              "system:index": "1053"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0764513015747, 10.904176125266586]),
            {
              "class": 1,
              "system:index": "1054"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08520603179932, 10.915806677037972]),
            {
              "class": 1,
              "system:index": "1055"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06278276443481, 10.912098433944672]),
            {
              "class": 1,
              "system:index": "1056"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06155967712402, 10.91974663328342]),
            {
              "class": 1,
              "system:index": "1057"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.04394292831421, 10.91734474065011]),
            {
              "class": 1,
              "system:index": "1058"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.0505518913269, 10.930955208657101]),
            {
              "class": 1,
              "system:index": "1059"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.03636837005615, 10.929016913863926]),
            {
              "class": 1,
              "system:index": "1060"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.03173351287842, 10.93190328302012]),
            {
              "class": 1,
              "system:index": "1061"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02111196517944, 10.917281532686939]),
            {
              "class": 1,
              "system:index": "1062"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01697063446045, 10.911424203716006]),
            {
              "class": 1,
              "system:index": "1063"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.01171350479126, 10.904344687237167]),
            {
              "class": 1,
              "system:index": "1064"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.00126361846924, 10.89760213391207]),
            {
              "class": 1,
              "system:index": "1065"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.99032020568848, 10.905946021192618]),
            {
              "class": 1,
              "system:index": "1066"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.99036312103271, 10.909380432041612]),
            {
              "class": 1,
              "system:index": "1067"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.00027656555176, 10.906283143031839]),
            {
              "class": 1,
              "system:index": "1068"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.98873233795166, 10.916228065297108]),
            {
              "class": 1,
              "system:index": "1069"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.98512744903564, 10.912309131421388]),
            {
              "class": 1,
              "system:index": "1070"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.98727321624756, 10.922127437512392]),
            {
              "class": 1,
              "system:index": "1071"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.98639345169067, 10.925898760890478]),
            {
              "class": 1,
              "system:index": "1072"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.99255180358887, 10.926867920053326]),
            {
              "class": 1,
              "system:index": "1073"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.00109195709229, 10.927584253052661]),
            {
              "class": 1,
              "system:index": "1074"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.74500274658203, 10.433296624759784]),
            {
              "class": 1,
              "system:index": "1075"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.71770858764648, 10.45566489365933]),
            {
              "class": 1,
              "system:index": "1076"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.75813484191895, 10.419368399494227]),
            {
              "class": 1,
              "system:index": "1077"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.77547264099121, 10.4046797783648]),
            {
              "class": 1,
              "system:index": "1078"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.72689247131348, 10.395646777133182]),
            {
              "class": 1,
              "system:index": "1079"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.7637996673584, 10.363649280061598]),
            {
              "class": 1,
              "system:index": "1080"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.78345489501953, 10.33392836054627]),
            {
              "class": 1,
              "system:index": "1081"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.72560501098633, 10.35410849629565]),
            {
              "class": 1,
              "system:index": "1082"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68818283081055, 10.325231082168834]),
            {
              "class": 1,
              "system:index": "1083"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.73049736022949, 10.301080097150518]),
            {
              "class": 1,
              "system:index": "1084"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.75289916992188, 10.279883127568453]),
            {
              "class": 1,
              "system:index": "1085"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.7528133392334, 10.241792570283465]),
            {
              "class": 1,
              "system:index": "1086"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.73307228088379, 10.257164477616346]),
            {
              "class": 1,
              "system:index": "1087"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67316246032715, 10.273295731665522]),
            {
              "class": 1,
              "system:index": "1088"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65093231201172, 10.289172811401004]),
            {
              "class": 1,
              "system:index": "1089"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66595268249512, 10.305555769140067]),
            {
              "class": 1,
              "system:index": "1090"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.62037658691406, 10.321853433479458]),
            {
              "class": 1,
              "system:index": "1091"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6125659942627, 10.33249290399766]),
            {
              "class": 1,
              "system:index": "1092"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59376907348633, 10.300404518499688]),
            {
              "class": 1,
              "system:index": "1093"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.58295440673828, 10.279376409682259]),
            {
              "class": 1,
              "system:index": "1094"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.56432914733887, 10.290692915457676]),
            {
              "class": 1,
              "system:index": "1095"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.57574462890625, 10.262316433480681]),
            {
              "class": 1,
              "system:index": "1096"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60690116882324, 10.267214936680984]),
            {
              "class": 1,
              "system:index": "1097"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6129093170166, 10.216114756009684]),
            {
              "class": 1,
              "system:index": "1098"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59308242797852, 10.196770558874794]),
            {
              "class": 1,
              "system:index": "1099"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59213829040527, 10.133914938686733]),
            {
              "class": 1,
              "system:index": "1100"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.55282783508301, 10.159261434135455]),
            {
              "class": 1,
              "system:index": "1101"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52381706237793, 10.136280696473783]),
            {
              "class": 1,
              "system:index": "1102"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.49540710449219, 10.159683858717981]),
            {
              "class": 1,
              "system:index": "1103"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4576416015625, 10.166358093035363]),
            {
              "class": 1,
              "system:index": "1104"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.41326713562012, 10.178607907108512]),
            {
              "class": 1,
              "system:index": "1105"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42099189758301, 10.138477455924754]),
            {
              "class": 1,
              "system:index": "1106"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.43635559082031, 10.148193711282566]),
            {
              "class": 1,
              "system:index": "1107"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45772743225098, 10.14042073057687]),
            {
              "class": 1,
              "system:index": "1108"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.47352027893066, 10.132309593101695]),
            {
              "class": 1,
              "system:index": "1109"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.45412254333496, 10.11152386702479]),
            {
              "class": 1,
              "system:index": "1110"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.42253684997559, 10.117100657354678]),
            {
              "class": 1,
              "system:index": "1111"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.39146614074707, 10.133914938686733]),
            {
              "class": 1,
              "system:index": "1112"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.33988189697266, 10.12749350812178]),
            {
              "class": 1,
              "system:index": "1113"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.30743789672852, 10.089225599668431]),
            {
              "class": 1,
              "system:index": "1114"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3067512512207, 10.134178273673461]),
            {
              "class": 1,
              "system:index": "1115"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.25233459472656, 10.070972345064291]),
            {
              "class": 1,
              "system:index": "1116"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.24684143066406, 10.018065881195035]),
            {
              "class": 1,
              "system:index": "1117"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.3309555053711, 10.06759199933261]),
            {
              "class": 1,
              "system:index": "1118"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.35258483886719, 10.070465295462288]),
            {
              "class": 1,
              "system:index": "1119"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.21542739868164, 10.049506548488822]),
            {
              "class": 1,
              "system:index": "1120"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.34039688110352, 10.040209894914705]),
            {
              "class": 1,
              "system:index": "1121"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.32271575927734, 10.012994520127743]),
            {
              "class": 1,
              "system:index": "1122"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.40082168579102, 10.21848976214532]),
            {
              "class": 1,
              "system:index": "1123"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.4166145324707, 10.20615700850013]),
            {
              "class": 1,
              "system:index": "1124"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.38571548461914, 10.265620118985206]),
            {
              "class": 1,
              "system:index": "1125"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.32803726196289, 10.228119113846816]),
            {
              "class": 1,
              "system:index": "1126"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.52184295654297, 10.244167384335748]),
            {
              "class": 1,
              "system:index": "1127"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.61333847045898, 10.097675830232072]),
            {
              "class": 1,
              "system:index": "1128"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59771728515625, 10.074690684458567]),
            {
              "class": 1,
              "system:index": "1129"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65316390991211, 10.062690435130119]),
            {
              "class": 1,
              "system:index": "1130"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.65093231201172, 10.147865619205154]),
            {
              "class": 1,
              "system:index": "1131"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.66518020629883, 10.200919667137015]),
            {
              "class": 1,
              "system:index": "1132"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.80027770996094, 10.293151811766204]),
            {
              "class": 1,
              "system:index": "1133"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.80027770996094, 10.23284921476757]),
            {
              "class": 1,
              "system:index": "1134"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.80165100097656, 10.188586232745177]),
            {
              "class": 1,
              "system:index": "1135"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86688232421875, 10.291631719554589]),
            {
              "class": 1,
              "system:index": "1136"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86653900146484, 10.32236993735595]),
            {
              "class": 1,
              "system:index": "1137"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.93829345703125, 10.284706762383363]),
            {
              "class": 1,
              "system:index": "1138"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.8890266418457, 10.259708093098691]),
            {
              "class": 1,
              "system:index": "1139"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.85452270507812, 10.210718493656428]),
            {
              "class": 1,
              "system:index": "1140"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.95769119262695, 10.380629188976025]),
            {
              "class": 1,
              "system:index": "1141"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.8205337524414, 10.398864640663367]),
            {
              "class": 1,
              "system:index": "1142"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.9659309387207, 10.483274121235699]),
            {
              "class": 1,
              "system:index": "1143"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.99580001831055, 10.502685054295455]),
            {
              "class": 1,
              "system:index": "1144"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.96747589111328, 10.560573023276183]),
            {
              "class": 1,
              "system:index": "1145"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.95597457885742, 10.507411010060272]),
            {
              "class": 1,
              "system:index": "1146"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.91958236694336, 10.454239846546399]),
            {
              "class": 1,
              "system:index": "1147"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.90447616577148, 10.437020563556539]),
            {
              "class": 1,
              "system:index": "1148"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.88078689575195, 10.573735531823742]),
            {
              "class": 1,
              "system:index": "1149"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.93606185913086, 10.559729253493558]),
            {
              "class": 1,
              "system:index": "1150"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86001586914062, 10.579472858948883]),
            {
              "class": 1,
              "system:index": "1151"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86791229248047, 10.542009553242371]),
            {
              "class": 1,
              "system:index": "1152"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.84319305419922, 10.612038592694425]),
            {
              "class": 1,
              "system:index": "1153"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.88250350952148, 10.544372238905549]),
            {
              "class": 1,
              "system:index": "1154"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.84920120239258, 10.388058575517448]),
            {
              "class": 1,
              "system:index": "1155"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.89829635620117, 10.401566098527564]),
            {
              "class": 1,
              "system:index": "1156"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.94344329833984, 10.353442884858099]),
            {
              "class": 1,
              "system:index": "1157"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.76113891601562, 10.226598709299783]),
            {
              "class": 1,
              "system:index": "1158"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60492706298828, 10.461667477858265]),
            {
              "class": 1,
              "system:index": "1159"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.60870361328125, 10.504372903937679]),
            {
              "class": 1,
              "system:index": "1160"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.69436264038086, 10.499140540044515]),
            {
              "class": 1,
              "system:index": "1161"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.59136581420898, 10.488169167009115]),
            {
              "class": 1,
              "system:index": "1162"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.62312316894531, 10.536271526867617]),
            {
              "class": 1,
              "system:index": "1163"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.63479614257812, 10.505554393201859]),
            {
              "class": 1,
              "system:index": "1164"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.64063262939453, 10.479054192077982]),
            {
              "class": 1,
              "system:index": "1165"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68560791015625, 10.583691413382475]),
            {
              "class": 1,
              "system:index": "1166"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.80388259887695, 10.564454334436059]),
            {
              "class": 1,
              "system:index": "1167"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.81916046142578, 10.637683776785698]),
            {
              "class": 1,
              "system:index": "1168"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.90825271606445, 10.608157883944035]),
            {
              "class": 1,
              "system:index": "1169"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.94584655761719, 10.599215193774366]),
            {
              "class": 1,
              "system:index": "1170"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.9381217956543, 10.665182466766304]),
            {
              "class": 1,
              "system:index": "1171"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.11767959594727, 10.584197636014956]),
            {
              "class": 1,
              "system:index": "1172"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1659164428711, 10.575254246502011]),
            {
              "class": 1,
              "system:index": "1173"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12214279174805, 10.66079633909241]),
            {
              "class": 1,
              "system:index": "1174"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49902534484863, 10.598314578782432]),
            {
              "class": 1,
              "system:index": "1175"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49009895324707, 10.61274090723346]),
            {
              "class": 1,
              "system:index": "1176"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.50825214385986, 10.59430714466044]),
            {
              "class": 1,
              "system:index": "1177"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4612169265747, 10.573678575757333]),
            {
              "class": 1,
              "system:index": "1178"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45580959320068, 10.557858181617313]),
            {
              "class": 1,
              "system:index": "1179"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43387985229492, 10.55688783759728]),
            {
              "class": 1,
              "system:index": "1180"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42452430725098, 10.549040595188904]),
            {
              "class": 1,
              "system:index": "1181"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48400497436523, 10.517565236823971]),
            {
              "class": 1,
              "system:index": "1182"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.22402381896973, 9.786904827946255]),
            {
              "class": 1,
              "system:index": "1183"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.19962644577026, 9.77726238847117]),
            {
              "class": 1,
              "system:index": "1184"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12720680236816, 9.817521945522046]),
            {
              "class": 1,
              "system:index": "1185"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12154197692871, 9.820651160100692]),
            {
              "class": 1,
              "system:index": "1186"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09853935241699, 9.838685853732416]),
            {
              "class": 1,
              "system:index": "1187"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08160924911499, 9.822152326865233]),
            {
              "class": 1,
              "system:index": "1188"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0800428390503, 9.810459960711906]),
            {
              "class": 1,
              "system:index": "1189"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07832622528076, 9.802002295814795]),
            {
              "class": 1,
              "system:index": "1190"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08115863800049, 9.796737290476445]),
            {
              "class": 1,
              "system:index": "1191"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.11611318588257, 9.77430193426739]),
            {
              "class": 1,
              "system:index": "1192"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10843133926392, 9.782591139608126]),
            {
              "class": 1,
              "system:index": "1193"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09753084182739, 9.782908324481767]),
            {
              "class": 1,
              "system:index": "1194"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10643577575684, 9.744611351859783]),
            {
              "class": 1,
              "system:index": "1195"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10244464874268, 9.73274706786921]),
            {
              "class": 1,
              "system:index": "1196"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.11096334457397, 9.733487265843815]),
            {
              "class": 1,
              "system:index": "1197"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12817239761353, 9.742348499579547]),
            {
              "class": 1,
              "system:index": "1198"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14718389511108, 9.745182349542997]),
            {
              "class": 1,
              "system:index": "1199"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14051055908203, 9.747318295173333]),
            {
              "class": 1,
              "system:index": "1200"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.22998905181885, 9.679407910513309]),
            {
              "class": 1,
              "system:index": "1201"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.18754577636719, 9.661724206278507]),
            {
              "class": 1,
              "system:index": "1202"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15690422058105, 9.677715730263388]),
            {
              "class": 1,
              "system:index": "1203"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.14806365966797, 9.686726491917005]),
            {
              "class": 1,
              "system:index": "1204"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.11428928375244, 9.67758881640106]),
            {
              "class": 1,
              "system:index": "1205"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10424709320068, 9.679746345540432]),
            {
              "class": 1,
              "system:index": "1206"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10926818847656, 9.691379842201965]),
            {
              "class": 1,
              "system:index": "1207"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10004138946533, 9.665997148242887]),
            {
              "class": 1,
              "system:index": "1208"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08811092376709, 9.664474125647727]),
            {
              "class": 1,
              "system:index": "1209"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09793853759766, 9.655970456146262]),
            {
              "class": 1,
              "system:index": "1210"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09128665924072, 9.670227730379935]),
            {
              "class": 1,
              "system:index": "1211"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07339096069336, 9.681353907262576]),
            {
              "class": 1,
              "system:index": "1212"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.05991554260254, 9.69264892653416]),
            {
              "class": 1,
              "system:index": "1213"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08519268035889, 9.721963436938045]),
            {
              "class": 1,
              "system:index": "1214"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03948783874512, 9.7309730293198]),
            {
              "class": 1,
              "system:index": "1215"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.04073238372803, 9.756562271134028]),
            {
              "class": 1,
              "system:index": "1216"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.05433654785156, 9.738628859433977]),
            {
              "class": 1,
              "system:index": "1217"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03051853179932, 9.737782919980596]),
            {
              "class": 1,
              "system:index": "1218"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06146049499512, 9.73224196357063]),
            {
              "class": 1,
              "system:index": "1219"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.96686434745789, 9.703305358402583]),
            {
              "class": 1,
              "system:index": "1220"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.00745153427124, 9.701762583215451]),
            {
              "class": 1,
              "system:index": "1221"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01845932006836, 9.712464712320326]),
            {
              "class": 1,
              "system:index": "1222"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01532649993896, 9.717456102198229]),
            {
              "class": 1,
              "system:index": "1223"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01991844177246, 9.709926688921891]),
            {
              "class": 1,
              "system:index": "1224"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0245532989502, 9.719549936111392]),
            {
              "class": 1,
              "system:index": "1225"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.02618408203125, 9.72473156438758]),
            {
              "class": 1,
              "system:index": "1226"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0328574180603, 9.729024852695376]),
            {
              "class": 1,
              "system:index": "1227"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03927326202393, 9.726656148724228]),
            {
              "class": 1,
              "system:index": "1228"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01371717453003, 9.73752666970975]),
            {
              "class": 1,
              "system:index": "1229"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01551961898804, 9.72919404519376]),
            {
              "class": 1,
              "system:index": "1230"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.00657176971436, 9.734629308617212]),
            {
              "class": 1,
              "system:index": "1231"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01835203170776, 9.736130863854486]),
            {
              "class": 1,
              "system:index": "1232"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.00277376174927, 9.721812942825483]),
            {
              "class": 1,
              "system:index": "1233"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.00652885437012, 9.752203426331207]),
            {
              "class": 1,
              "system:index": "1234"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.00667905807495, 9.760450887892782]),
            {
              "class": 1,
              "system:index": "1235"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0259051322937, 9.762607882618765]),
            {
              "class": 1,
              "system:index": "1236"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01972532272339, 9.762058061760392]),
            {
              "class": 1,
              "system:index": "1237"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01539087295532, 9.780518857650376]),
            {
              "class": 1,
              "system:index": "1238"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0080738067627, 9.79045723510331]),
            {
              "class": 1,
              "system:index": "1239"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01809453964233, 9.78836385691277]),
            {
              "class": 1,
              "system:index": "1240"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.02485370635986, 9.790097767059592]),
            {
              "class": 1,
              "system:index": "1241"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03534650802612, 9.78182989467616]),
            {
              "class": 1,
              "system:index": "1242"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03783559799194, 9.77506319643692]),
            {
              "class": 1,
              "system:index": "1243"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.04330730438232, 9.766245136197092]),
            {
              "class": 1,
              "system:index": "1244"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0568470954895, 9.763242290173464]),
            {
              "class": 1,
              "system:index": "1245"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06543016433716, 9.77506319643692]),
            {
              "class": 1,
              "system:index": "1246"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07000064849854, 9.781597291710254]),
            {
              "class": 1,
              "system:index": "1247"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.05334949493408, 9.786355047252881]),
            {
              "class": 1,
              "system:index": "1248"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.04910087585449, 9.79166250746868]),
            {
              "class": 1,
              "system:index": "1249"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07527923583984, 9.784557680944054]),
            {
              "class": 1,
              "system:index": "1250"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08862590789795, 9.764764863373108]),
            {
              "class": 1,
              "system:index": "1251"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10446166992188, 9.77288513614625]),
            {
              "class": 1,
              "system:index": "1252"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0809440612793, 9.7511248970372]),
            {
              "class": 1,
              "system:index": "1253"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07023668289185, 9.75791322915513]),
            {
              "class": 1,
              "system:index": "1254"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06736135482788, 9.747064520170861]),
            {
              "class": 1,
              "system:index": "1255"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06002283096313, 9.755016045132914]),
            {
              "class": 1,
              "system:index": "1256"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.02345895767212, 9.767958015106394]),
            {
              "class": 1,
              "system:index": "1257"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34126853942871, 10.029923747291564]),
            {
              "class": 1,
              "system:index": "1258"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34794187545776, 10.036262605150847]),
            {
              "class": 1,
              "system:index": "1259"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35032367706299, 10.026733141903012]),
            {
              "class": 1,
              "system:index": "1260"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.33227777481079, 10.02540195288326]),
            {
              "class": 1,
              "system:index": "1261"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35521602630615, 10.024514490499136]),
            {
              "class": 1,
              "system:index": "1262"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37042951583862, 10.026331672774509]),
            {
              "class": 1,
              "system:index": "1263"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37969923019409, 10.015048073918113]),
            {
              "class": 1,
              "system:index": "1264"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.3940544128418, 10.012956127624626]),
            {
              "class": 1,
              "system:index": "1265"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37884092330933, 9.93374809374011]),
            {
              "class": 1,
              "system:index": "1266"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40577030181885, 9.942202374973999]),
            {
              "class": 1,
              "system:index": "1267"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42072629928589, 9.928654283812625]),
            {
              "class": 1,
              "system:index": "1268"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39946174621582, 9.918973712897635]),
            {
              "class": 1,
              "system:index": "1269"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34150457382202, 9.919840325884438]),
            {
              "class": 1,
              "system:index": "1270"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.33126926422119, 9.919163945213045]),
            {
              "class": 1,
              "system:index": "1271"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.31575536727905, 9.91466175079407]),
            {
              "class": 1,
              "system:index": "1272"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.26573753356934, 9.949853311007889]),
            {
              "class": 1,
              "system:index": "1273"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.27341938018799, 9.951079134933552]),
            {
              "class": 1,
              "system:index": "1274"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.26359176635742, 9.958814400450253]),
            {
              "class": 1,
              "system:index": "1275"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.23243522644043, 9.981363987591832]),
            {
              "class": 1,
              "system:index": "1276"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34311389923096, 9.743130972618674]),
            {
              "class": 1,
              "system:index": "1277"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.19857501983643, 9.735602137665266]),
            {
              "class": 1,
              "system:index": "1278"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.20018434524536, 9.74291949080897]),
            {
              "class": 1,
              "system:index": "1279"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.21245813369751, 9.735158015693653]),
            {
              "class": 1,
              "system:index": "1280"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.19110774993896, 9.74681073464915]),
            {
              "class": 1,
              "system:index": "1281"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12493228912354, 9.743765417243605]),
            {
              "class": 1,
              "system:index": "1282"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1038179397583, 9.748417974293341]),
            {
              "class": 1,
              "system:index": "1283"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09956932067871, 9.745118895078047]),
            {
              "class": 1,
              "system:index": "1284"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09504175186157, 9.739916434647762]),
            {
              "class": 1,
              "system:index": "1285"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08474206924438, 9.73471389313141]),
            {
              "class": 1,
              "system:index": "1286"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07060146331787, 9.720988100049023]),
            {
              "class": 1,
              "system:index": "1287"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.00888919830322, 9.742940638995956]),
            {
              "class": 1,
              "system:index": "1288"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.99738788604736, 9.756306024964418]),
            {
              "class": 1,
              "system:index": "1289"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.85390043258667, 9.937679361701088]),
            {
              "class": 1,
              "system:index": "1290"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.84458780288696, 9.936453487514289]),
            {
              "class": 1,
              "system:index": "1291"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86887788772583, 9.928020194040412]),
            {
              "class": 1,
              "system:index": "1292"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.88211727142334, 9.922249920677167]),
            {
              "class": 1,
              "system:index": "1293"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.89042139053345, 9.932184027758218]),
            {
              "class": 1,
              "system:index": "1294"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.8936185836792, 9.941166737271555]),
            {
              "class": 1,
              "system:index": "1295"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86999368667603, 9.944865428283894]),
            {
              "class": 1,
              "system:index": "1296"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.86392116546631, 9.952368358580625]),
            {
              "class": 1,
              "system:index": "1297"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.8452959060669, 9.964858769932025]),
            {
              "class": 1,
              "system:index": "1298"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.82394552230835, 9.9698886143797]),
            {
              "class": 1,
              "system:index": "1299"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.81210088729858, 9.959089146947074]),
            {
              "class": 1,
              "system:index": "1300"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.80632877349854, 9.948796562551744]),
            {
              "class": 1,
              "system:index": "1301"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.81534099578857, 9.940469265133279]),
            {
              "class": 1,
              "system:index": "1302"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.7811803817749, 9.93370582178486]),
            {
              "class": 1,
              "system:index": "1303"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.78216743469238, 9.925420413133544]),
            {
              "class": 1,
              "system:index": "1304"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.8022518157959, 9.913858535899184]),
            {
              "class": 1,
              "system:index": "1305"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.81158590316772, 9.904431182443318]),
            {
              "class": 1,
              "system:index": "1306"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.81634950637817, 9.899062120171662]),
            {
              "class": 1,
              "system:index": "1307"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.82797956466675, 9.893714108656246]),
            {
              "class": 1,
              "system:index": "1308"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.83040428161621, 9.900161305423635]),
            {
              "class": 1,
              "system:index": "1309"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.82948160171509, 9.903585666652388]),
            {
              "class": 1,
              "system:index": "1310"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.8172721862793, 9.872067533733082]),
            {
              "class": 1,
              "system:index": "1311"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.81482601165771, 9.861159139437794]),
            {
              "class": 1,
              "system:index": "1312"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.82218599319458, 9.844711304392238]),
            {
              "class": 1,
              "system:index": "1313"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.02828693389893, 10.030113914832448]),
            {
              "class": 1,
              "system:index": "1314"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.02217149734497, 10.0382487550802]),
            {
              "class": 1,
              "system:index": "1315"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.05465841293335, 10.028867258920494]),
            {
              "class": 1,
              "system:index": "1316"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.063241481781, 10.018069750306205]),
            {
              "class": 1,
              "system:index": "1317"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06914234161377, 10.013716836928182]),
            {
              "class": 1,
              "system:index": "1318"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07712459564209, 10.011012084636462]),
            {
              "class": 1,
              "system:index": "1319"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08394813537598, 10.00872993235822]),
            {
              "class": 1,
              "system:index": "1320"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09057855606079, 10.017858445180435]),
            {
              "class": 1,
              "system:index": "1321"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.082510471344, 10.01762600938311]),
            {
              "class": 1,
              "system:index": "1322"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0703010559082, 10.029860358086458]),
            {
              "class": 1,
              "system:index": "1323"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06371355056763, 10.031508473387774]),
            {
              "class": 1,
              "system:index": "1324"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.07457113265991, 10.04741869349344]),
            {
              "class": 1,
              "system:index": "1325"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09313201904297, 10.05939838252747]),
            {
              "class": 1,
              "system:index": "1326"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.11094188690186, 10.054729103282899]),
            {
              "class": 1,
              "system:index": "1327"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10306692123413, 10.065060585345625]),
            {
              "class": 1,
              "system:index": "1328"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12252902984619, 10.054644590819624]),
            {
              "class": 1,
              "system:index": "1329"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.11946058273315, 10.048094807694564]),
            {
              "class": 1,
              "system:index": "1330"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12952423095703, 10.053355773016024]),
            {
              "class": 1,
              "system:index": "1331"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1318416595459, 10.057856048884013]),
            {
              "class": 1,
              "system:index": "1332"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.33548831939697, 10.503176637334466]),
            {
              "class": 1,
              "system:index": "1333"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.34111022949219, 10.488407583399292]),
            {
              "class": 1,
              "system:index": "1334"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35218238830566, 10.491445846393917]),
            {
              "class": 1,
              "system:index": "1335"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3328275680542, 10.528113637299471]),
            {
              "class": 1,
              "system:index": "1336"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.31935214996338, 10.52490696171968]),
            {
              "class": 1,
              "system:index": "1337"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.36582946777344, 10.52963257724919]),
            {
              "class": 1,
              "system:index": "1338"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.35969257354736, 10.546256041699422]),
            {
              "class": 1,
              "system:index": "1339"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.38784503936768, 10.550643811524015]),
            {
              "class": 1,
              "system:index": "1340"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.41269302368164, 10.565536448001989]),
            {
              "class": 1,
              "system:index": "1341"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42625427246094, 10.565156758020004]),
            {
              "class": 1,
              "system:index": "1342"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42685508728027, 10.587304554995296]),
            {
              "class": 1,
              "system:index": "1343"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44363498687744, 10.564355188739114]),
            {
              "class": 1,
              "system:index": "1344"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45530796051025, 10.596036675292229]),
            {
              "class": 1,
              "system:index": "1345"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45831203460693, 10.606287107530205]),
            {
              "class": 1,
              "system:index": "1346"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.46985626220703, 10.569333322006798]),
            {
              "class": 1,
              "system:index": "1347"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38293933868408, 10.192687218243698]),
            {
              "class": 1,
              "system:index": "1348"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40731525421143, 10.184957559007229]),
            {
              "class": 1,
              "system:index": "1349"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.42003965377808, 10.172855831048834]),
            {
              "class": 1,
              "system:index": "1350"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.41437482833862, 10.165189053986126]),
            {
              "class": 1,
              "system:index": "1351"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40819501876831, 10.160436827089681]),
            {
              "class": 1,
              "system:index": "1352"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40203666687012, 10.145398203782975]),
            {
              "class": 1,
              "system:index": "1353"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39319610595703, 10.145841768798535]),
            {
              "class": 1,
              "system:index": "1354"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38169479370117, 10.134815817383151]),
            {
              "class": 1,
              "system:index": "1355"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37437772750854, 10.138829134888717]),
            {
              "class": 1,
              "system:index": "1356"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35532331466675, 10.148798853196933]),
            {
              "class": 1,
              "system:index": "1357"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.3460750579834, 10.16250669460092]),
            {
              "class": 1,
              "system:index": "1358"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36969995498657, 10.168441648546763]),
            {
              "class": 1,
              "system:index": "1359"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37461376190186, 10.186794954001572]),
            {
              "class": 1,
              "system:index": "1360"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40405368804932, 10.19498918435838]),
            {
              "class": 1,
              "system:index": "1361"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4059419631958, 10.199128457727989]),
            {
              "class": 1,
              "system:index": "1362"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46291208267212, 10.008920112327514]),
            {
              "class": 1,
              "system:index": "1363"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4567322731018, 9.995100077924038]),
            {
              "class": 1,
              "system:index": "1364"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45600271224976, 9.991317427841961]),
            {
              "class": 1,
              "system:index": "1365"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47014331817627, 9.988422297218175]),
            {
              "class": 1,
              "system:index": "1366"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46930646896362, 9.97722191427826]),
            {
              "class": 1,
              "system:index": "1367"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4863224029541, 10.003827476926828]),
            {
              "class": 1,
              "system:index": "1368"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48226690292358, 10.001524142573844]),
            {
              "class": 1,
              "system:index": "1369"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48871493339539, 10.0300281630279]),
            {
              "class": 1,
              "system:index": "1370"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4860327243805, 10.026573434382028]),
            {
              "class": 1,
              "system:index": "1371"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.49668645858765, 10.026245919968952]),
            {
              "class": 1,
              "system:index": "1372"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48091506958008, 10.055794838417567]),
            {
              "class": 1,
              "system:index": "1373"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.48442339897156, 10.057622409000029]),
            {
              "class": 1,
              "system:index": "1374"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.47242856025696, 10.042335994606402]),
            {
              "class": 1,
              "system:index": "1375"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46516513824463, 10.044311542864106]),
            {
              "class": 1,
              "system:index": "1376"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4667637348175, 10.036039514332902]),
            {
              "class": 1,
              "system:index": "1377"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46256875991821, 10.0339265740438]),
            {
              "class": 1,
              "system:index": "1378"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45535898208618, 10.03053527605874]),
            {
              "class": 1,
              "system:index": "1379"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45897459983826, 10.016980294476596]),
            {
              "class": 1,
              "system:index": "1380"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.3297028541565, 10.147235826275335]),
            {
              "class": 1,
              "system:index": "1381"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.31989669799805, 10.155452193195796]),
            {
              "class": 1,
              "system:index": "1382"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.33629035949707, 10.132788027110054]),
            {
              "class": 1,
              "system:index": "1383"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.33895111083984, 10.138047608366048]),
            {
              "class": 1,
              "system:index": "1384"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96394348144531, 8.617183967456878]),
            {
              "class": 1,
              "system:index": "1385"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96051025390625, 8.636107672185359]),
            {
              "class": 1,
              "system:index": "1386"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99527168273926, 8.624397150588635]),
            {
              "class": 1,
              "system:index": "1387"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02325248718262, 8.62779154205905]),
            {
              "class": 1,
              "system:index": "1388"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96480178833008, 8.61429865566497]),
            {
              "class": 1,
              "system:index": "1389"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9592227935791, 8.590960766601135]),
            {
              "class": 1,
              "system:index": "1390"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96892166137695, 8.589942353257095]),
            {
              "class": 1,
              "system:index": "1391"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02865982055664, 8.622021058410759]),
            {
              "class": 1,
              "system:index": "1392"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.98651695251465, 8.641877940469042]),
            {
              "class": 1,
              "system:index": "1393"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02059173583984, 8.65358791925681]),
            {
              "class": 1,
              "system:index": "1394"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99956321716309, 8.632798213780136]),
            {
              "class": 1,
              "system:index": "1395"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99964904785156, 8.628215838847698]),
            {
              "class": 1,
              "system:index": "1396"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.95578956604004, 8.621257311323145]),
            {
              "class": 1,
              "system:index": "1397"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9588794708252, 8.597495520471787]),
            {
              "class": 1,
              "system:index": "1398"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.92729377746582, 8.589857485355006]),
            {
              "class": 1,
              "system:index": "1399"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96814918518066, 8.621257311323145]),
            {
              "class": 1,
              "system:index": "1400"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99544334411621, 8.611667911023401]),
            {
              "class": 1,
              "system:index": "1401"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96523094177246, 8.61090414302341]),
            {
              "class": 1,
              "system:index": "1402"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94119834899902, 8.617099105659594]),
            {
              "class": 1,
              "system:index": "1403"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94634819030762, 8.615995900561732]),
            {
              "class": 1,
              "system:index": "1404"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.94930934906006, 8.53243505464838]),
            {
              "class": 1,
              "system:index": "1405"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01441192626953, 8.648666378312656]),
            {
              "class": 1,
              "system:index": "1406"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01441192626953, 8.638059390456323]),
            {
              "class": 1,
              "system:index": "1407"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.98831939697266, 8.65010890559734]),
            {
              "class": 1,
              "system:index": "1408"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.02329540252686, 8.606358982967205]),
            {
              "class": 1,
              "system:index": "1409"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.03024768829346, 8.628465465187746]),
            {
              "class": 1,
              "system:index": "1410"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.979736328125, 8.641194138622579]),
            {
              "class": 1,
              "system:index": "1411"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.96814918518066, 8.640600143416519]),
            {
              "class": 1,
              "system:index": "1412"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.95939445495605, 8.621761524627573]),
            {
              "class": 1,
              "system:index": "1413"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.01814556121826, 8.581068602707516]),
            {
              "class": 1,
              "system:index": "1414"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99201011657715, 8.585948589273805]),
            {
              "class": 1,
              "system:index": "1415"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.99093723297119, 8.585312072844994]),
            {
              "class": 1,
              "system:index": "1416"
            }),
        ee.Feature(
            ee.Geometry.Point([-82.9594373703003, 8.594944573921316]),
            {
              "class": 1,
              "system:index": "1417"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.6880111694336, 9.524989603602055]),
            {
              "class": 1,
              "system:index": "1418"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.68690609931946, 9.520535005884595]),
            {
              "class": 1,
              "system:index": "1419"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.67375254631042, 9.529475885562569]),
            {
              "class": 1,
              "system:index": "1420"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.91074180603027, 9.663078036203077]),
            {
              "class": 1,
              "system:index": "1421"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.91554832458496, 9.651908946929165]),
            {
              "class": 1,
              "system:index": "1422"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.90902519226074, 9.687403367533506]),
            {
              "class": 1,
              "system:index": "1423"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29131507873535, 9.537700760024755]),
            {
              "class": 1,
              "system:index": "1424"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.30285930633545, 9.524199737805107]),
            {
              "class": 1,
              "system:index": "1425"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.28637981414795, 9.559411314008354]),
            {
              "class": 1,
              "system:index": "1426"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.33122634887695, 9.53922435280644]),
            {
              "class": 1,
              "system:index": "1427"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35641765594482, 9.519925008195287]),
            {
              "class": 1,
              "system:index": "1428"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34740543365479, 9.534526586533685]),
            {
              "class": 1,
              "system:index": "1429"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37289714813232, 9.509428415566527]),
            {
              "class": 1,
              "system:index": "1430"
            })]),
    input3 = ee.Image("users/images/input/Costa_Rica_2010_InputTOA3seasonV2"),
    input4 = ee.Image("users/images/input/Costa_Rica_2010_InputTOA3seasonV3"),
    prev_sd1 = ee.Image("users/images/Nicaragua_2010_v4"),
    prev_sd2 = ee.Image("users/images/Panama_2010_v7_cleaned"),
    prev = ee.Image("users/images/Costa_Rica_2010_v8"),
    prev_sd2_ = ee.Image("users/images/Panama_2010_v5");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw");

//input2=input2.select([11,12,13,14,15,16,17,18,19,20,
//                      21,22,23,24,25,26,27,28,29,30,
//                      31,32,33,34])
print(input3);

//create bounds for training samples inside area of interest
function buffer1(geometry) {
  return geometry.buffer(45).bounds();
} 

//buffer function of 1km********************************************************
function buffer2(geometry) {
  return geometry.buffer(5000);
}

function clean_output_noise(image){
  image=image.clip(studyArea)
  function make_binary_gt(in_img,thresh){
    in_img=in_img.unmask()
    var image1=in_img.updateMask(in_img.gt(ee.Number(thresh).subtract(1))).multiply(0).add(1)
    image1=image1.unmask()
    var image2=in_img.multiply(0)
    var out_img=in_img.multiply(image2).add(image1)
    return out_img.updateMask(out_img.eq(1))
  }
  var kernel = ee.Kernel.square({radius: 45,units:'meters'});
  var temp_img=image
  //.unmask().focal_mode({kernel: kernel, iterations: 1})
  //classified2=classified2.updateMask(classified2.eq(1))
  temp_img=temp_img.connectedPixelCount(100, true)
  return make_binary_gt(temp_img,75)
}

var region = countries.filterMetadata('Country','equals','Costa Rica').geometry()
var studyArea = region
studyArea=buffer2(studyArea);

//visual parameters for FCC display 
var vizParams = {
  bands: ['B4_2', 'B3_2', 'B2_2'],
  min: 0,
  max: 255,
  gamma: [1.5,1.6, 1.7]
};

//add all max val to map
//Map.addLayer(input4.clip(studyArea),vizParams,'FCC');
Map.addLayer(prev, {palette: '00ff00'}, 'cropland');
Map.addLayer(prev_sd1, {palette: '00ff00'}, 'cropland_ni');

Map.addLayer(prev_sd2_, {palette: '00ff00'}, 'cropland_pa_');
Map.addLayer(prev_sd2, {palette: 'ffff00'}, 'cropland_pa');
//throw('stop')

var studyArea = region
studyArea=buffer1(studyArea);

//print(CropSamples);
var CropSamplesArea = Cropclass.filterBounds(studyArea).map(buffer1);
print('Crop:',CropSamplesArea);

//print(NonCropSamples);
var NonCropSamplesArea = NonCropClass.filterBounds(studyArea).map(buffer1);
print('Non-crop:',NonCropSamplesArea);


//merge all training samples into one feature collection
var TrainingSamples=CropSamplesArea
                    .merge(NonCropSamplesArea)

print('Training samples:',TrainingSamples);


print('Study Area:');
print(studyArea);


print(input2);

var training = input4.sampleRegions({
    collection: TrainingSamples,
  properties: ['class'],
  scale: 30
});

//build classifier
var classifier = ee.Classifier.randomForest(400,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input4.classify(classifier);
classified = classified.updateMask(classified.eq(1)).clip(studyArea);

Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_Costa_Rica_v1',
  folder: 'data',
  fileNamePrefix: 'RFtable_Costa_Rica_2010_v1',
  fileFormat: 'CSV'
});

//var classified2=clean_output_noise(classified)
var classified2=classified
Map.addLayer(classified2, {palette: '00ff00'}, 'cropland_final');

Export.image.toAsset({
  image: classified2,
  scale: 30,
  maxPixels:9990000000000,
  description: 'Costa_Rica_v1_asset',
  assetId: 'Costa_Rica_2010_v1',
  region: studyArea, 
});

Export.image.toDrive({
  image: classified2,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'Costa_Rica_v1_drive',
  fileNamePrefix: 'Costa_Rica_2010_v1',
  region: studyArea, 
});
