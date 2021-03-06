/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var CDL = ee.Image("users/images/CDL_composite_08_12_wo_fallow"),
    Cropclass = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-93.80985259747831, 33.185577978546156]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.76144408917753, 33.27029857970914]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.86547088884981, 33.1398809888826]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.79989624285372, 33.098762104929115]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.77620697021484, 33.07431168562383]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.83216857910156, 33.01502720214841]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.77620697021484, 32.9686654182523]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.80023955774959, 33.07805160118962]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.76110076380428, 33.138156103598845]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.78787994384766, 33.25738040161415]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.64952087402344, 33.30645930563042]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.73466491699219, 33.35751796237508]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.77620697021484, 33.392209306807494]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.6529541015625, 33.385902822864495]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.71715545654297, 33.435768874379356]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.69415283203125, 33.398801959904866]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.8180923461914, 33.46355533355756]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.7624740600586, 33.47816113777688]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.81294250488281, 33.493050778007266]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.76522064208984, 33.546846348824985]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.76384735107422, 33.554571701037105]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.84710311889648, 33.540264948421104]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.90924453735352, 33.54913542281857]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.82307052612305, 33.59533295599175]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.90684127807617, 33.60662827967182]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.96469116210938, 33.53954955734541]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.01221466064453, 34.68011712716782]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.0492935180664, 34.75997755061405]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.07366943359375, 34.70721623310717]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.94011688232422, 34.79663668781282]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.16773986816406, 34.79325344989176]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.20413208007812, 34.694514631974094]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.0492935180664, 34.616568841551306]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.96517944335938, 34.656962949054645]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.0328140258789, 34.6688232145928]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.93290710449219, 34.64368873450616]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.89754486083984, 34.74305245584059]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.12413787841797, 34.769566897869]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.97891235351562, 34.615438670877666]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.93565368652344, 34.56541245265648]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.86870574951172, 34.58972273891731]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.90200805664062, 34.62786989157495]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.97067260742188, 34.59735357151779]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.04071044921875, 34.5651297330955]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.05169677734375, 34.58491778102878]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.12310791015625, 34.590005374846186]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.17941284179688, 34.54052945248336]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.0709228515625, 34.502342206320506]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.04448699951172, 34.4335610644498]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.07469940185547, 34.40778893411853]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.94183349609375, 34.49470265657242]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.97582244873047, 34.52865085195228]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.01976778218523, 34.5569304650081]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.03006746480241, 34.526105234335546]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.08774568745866, 34.53063075365888]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.07950594136491, 34.56399886249645]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.20310213277116, 34.59820139853869]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.17357637593523, 34.621654513994216]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.21237184712663, 34.64877274462307]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.1831894130446, 34.68350500062181]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.11452486226335, 34.70636952035964]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.07744600484148, 34.686892735456254]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.06268310546875, 34.81806067165258]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.94183349609375, 34.84511454082344]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.99264526367188, 34.84736862866325]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.33905792236328, 34.79295682832316]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.41527557373047, 34.81297237203553]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.98381809610873, 35.14464628479852]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.89592747110873, 35.22489702125567]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.74761204142123, 35.12611563289032]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.11737060546875, 35.14604995019527]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.68787384033203, 35.0969072599581]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.71533966064453, 35.117972043104864]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.581787109375, 35.11432120409855]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.46986389160156, 35.15559423284738]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.50762939453125, 35.15306791403479]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.4056625366211, 35.15278720710223]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.52891540527344, 35.21311691293869]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.11187744140625, 35.20021292794962]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.70016098022461, 35.34153196031417]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.66222381591797, 35.38017026761017]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.73234748840332, 35.35742350265125]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.7114048213698, 35.396683900502175]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.77500536153093, 35.3926957480069]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.79508972167969, 35.41571236776594]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.0814208984375, 35.48556873671512]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.17137145996094, 35.45019730204591]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.07730102539062, 35.47117038595342]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.1337776184082, 35.435435650549024]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.11068916320801, 35.43907204367144]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.17634963989258, 35.41102562553245]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.20355796813965, 35.39185611182224]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.23471450805664, 35.3817797957771]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.26149368286133, 35.37737101171055]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.20789243886247, 35.370018850557145]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.2800331953913, 35.367930085417356]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.22595986165106, 35.39997950517168]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.10837173461914, 35.461663231345575]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.1169548034668, 35.48822442730101]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.229736328125, 35.465158626862724]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.74746704101562, 35.34512447453303]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.66197967529297, 35.27115949662829]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.7018051147461, 35.295261574876925]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.52739715576172, 35.33588255104847]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.46319580078125, 35.40782958278418]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.01422882080078, 35.45175002334859]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.12752532958984, 35.49564664143945]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.16048431396484, 35.52778495564541]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.2291488647461, 35.437485546687775]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.10005950927734, 35.4718839685646]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.98942375183105, 35.428372221074845]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.97543334960938, 35.455433814233466]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.60405731201172, 35.83176066595327]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.6363296508789, 35.858199062662]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.66688537597656, 35.904375522644045]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.79219818115234, 35.940241046124676]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.55427551269531, 35.9849806206867]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.43136596679688, 36.01969883228735]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.54431915283203, 36.04302088167943]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.44200897216797, 36.09963138923589]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.58895111083984, 36.097966955926616]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.61710357666016, 36.12320707309451]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.69194810464978, 36.28139663213935]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.35926818847656, 36.210514052660635]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.34999864175916, 36.274477338064415]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.33729553222656, 36.31736714076359]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.24116516113281, 36.38400691088207]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.25936126708984, 36.44672317153181]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.18932342529297, 36.59019982612303]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.9620439298451, 36.659359592123934]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.98710649088025, 36.7323095073198]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.95208740234375, 36.754318383478136]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.97200012207031, 36.81316145564619]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.0921630859375, 36.85520379652983]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.9932861328125, 36.91506733390586]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.808578658849, 36.935926289350874]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.81681823730469, 37.00669391714423]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.90470886230469, 36.96336341125674]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.00015258789062, 37.05219178079187]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.11447923257947, 37.02834991379086]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.05645768716931, 37.0790391687902]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.21884934976697, 37.03986071537867]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.76291673257947, 37.06424688551607]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.63382737711072, 37.14420039721316]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.67948930338025, 37.201649021784874]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.58576202392578, 37.20493034738042]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.58953857421875, 37.265065142153624]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.46800231933594, 37.3475356693207]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.59571838378906, 37.387645870554294]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.49478149414062, 37.46970948756995]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.32243347167969, 37.51247765741437]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.46113586425781, 37.60093265198765]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.58404541015625, 37.560664629054926]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.58576202392578, 37.6778709840842]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.33204650878906, 37.70721159947322]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.18716430664062, 37.6708057688479]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.20982360839844, 37.577264222830955]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.99833679199219, 37.46153443935589]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.88984680175781, 37.57318269851351]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.05841835774481, 37.403193035703325]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.03198250569403, 37.3145037025692]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.20261391438544, 37.4037384917058]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.32243355549872, 37.34371453189133]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.25857543945312, 37.25577471690319]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.41272743977606, 37.218874956918604]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.15283203125, 37.310709284619264]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.92623901367188, 37.23093195943014]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.86370849609375, 36.512148482981694]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.99382781982422, 36.51408003219181]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.02163696289062, 36.538082406377555]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.04532623291016, 36.561250044935335]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-97.03571319580078, 36.613076122542964]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.96224212646484, 36.61445400414695]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.94507598876953, 36.672302793849354]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.7068099975586, 36.611422632118256]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.62784576416016, 36.4019705241878]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.70028686523438, 36.34087730513581]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.91864013671875, 36.34447235185586]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.52931213378906, 36.36742129481758]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.34494789876044, 36.43070366975599]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.74182891845703, 36.524288713880665]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.7068099975586, 36.667070643456825]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.74491882324219, 36.86454353472149]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.72672271728516, 36.93071211902331]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.64604187011719, 36.95815111858828]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.4596176147461, 37.06671246642688]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.18427276611328, 36.936749546794765]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.02119445800781, 36.87086085492629]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.96660614013672, 36.83514739552571]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.84197998046875, 36.963089088959165]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.04110717773438, 36.90326323867043]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.97827911376953, 36.79529347193051]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.9933853149414, 36.72185301647741]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.91442108154297, 36.65082130676857]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.69847106933594, 36.79556839762932]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.8553695678711, 36.54497826272779]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.77262878417969, 36.375438052253465]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.65898895263672, 36.39754896190813]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.91545104980469, 36.31764363709525]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.88970188517123, 36.240148642986775]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.75099949259311, 36.20996009708346]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.64081192049343, 36.556547508227396]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.70020675691921, 36.53461983500981]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.59497833284695, 36.59749008321681]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.55995941194851, 36.544412206130616]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5817604038748, 36.503027540410265]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.63394546246855, 36.49447194940114]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.64064025616972, 36.519859975276994]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.73368072509766, 36.47031793728328]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.6368637032574, 36.47225052994856]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.5457115120953, 36.476943768667645]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.46451568603516, 36.509236651502256]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.44099805643782, 36.53599911724527]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.4617691040039, 36.60699888651275]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54176330566406, 36.63593150981961]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45404434204102, 36.665128598474524]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57197570800781, 36.65301036819379]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.50056457519531, 36.70986689141211]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.49644470214844, 36.57764184901383]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.52562713623047, 36.58742876904222]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.54305076599121, 36.95991277867271]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57188987731934, 36.968759543779456]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.57523727416992, 36.96443919250591]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.538330078125, 36.94310798636325]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.45601842692122, 36.99234589108898]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.22865295410156, 36.932358603662]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.25337219238281, 36.91561632337136]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.23242950439453, 36.899144920509926]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.12359610758722, 36.96583226745668]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.09098044596612, 36.975706891609335]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.04703513346612, 37.02670537113652]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.98970031738281, 37.08862508488434]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06900787353516, 37.07410859453973]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.96326446533203, 37.06452070914023]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.9454116821289, 37.11764972547971]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.91279602050781, 37.119018537621464]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.84275817871094, 37.12257733336652]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81117248535156, 37.134621246737005]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81220245361328, 37.09957908594533]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89631652832031, 37.08643409465581]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7916030883789, 37.14885249125893]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76757049560547, 37.12175608765932]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76448059082031, 37.172930035837894]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89871978759766, 37.17511852321703]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.9948501586914, 37.214227040093434]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06694793701172, 37.13434754271921]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08686065673828, 37.15213624437645]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81529235839844, 37.19672656561352]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76997375488281, 37.24211037866778]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.7528076171875, 37.22817006492043]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.74971771240234, 37.2563213776565]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86026763916016, 37.27927194452893]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.93030548095703, 37.27927194452893]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79434967041016, 37.34180402353448]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.77409362792969, 37.34999214538853]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.79812622070312, 37.28528165127342]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.83142836019397, 37.14118984613197]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.89151000976562, 37.05547959279366]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.75692732259631, 37.41791908715105]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.95708448812366, 37.50212837220039]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.86919386312366, 37.56774031810704]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.76654035970569, 37.57399902127363]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.80979902669787, 37.5081202385199]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.78233337402344, 37.619426872942185]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.78439331054688, 37.68384871766705]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.88395690917969, 37.662652761511]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.73873138427734, 37.635741483703214]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.91691589355469, 37.59086768813748]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.80258924886584, 37.699062858374916]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.91657240316272, 37.695803004992314]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81803877279162, 37.64580064064936]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.81357557699084, 37.577264222830955]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.06660461425781, 37.469967737466014]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.01424789428711, 37.497483733232514]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.08102416992188, 37.43671708264632]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.40580749511719, 37.72269224328577]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.29010772705078, 37.72242068091904]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.31139373779297, 37.69390095971039]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.2530288696289, 37.665913939215905]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-90.80268859863281, 37.75554394037992]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.19265747070312, 33.54431569208383]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.40071105957031, 33.6449801209572]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.46937561035156, 33.659525556583304]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.32998657226562, 33.59949434820558]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.58301544189453, 33.63094448450016]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.66506958007812, 33.678669565563176]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.37255859375, 33.59949434820558]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.1030502319336, 33.65723942002114]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.6207809029147, 33.664954887478814]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.72171783447266, 33.71751594063789]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.77699279785156, 33.78745220339343]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.79827880859375, 33.816836941721064]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.83158111572266, 33.831097739605745]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.86557006835938, 33.789449543971664]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.76978300954215, 33.853339973823]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.92565153981559, 33.84963336005167]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.95243071462028, 33.875576278464756]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.00461577321403, 33.88184700954147]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.1076125993859, 33.88441217580027]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.22708893346135, 33.93057183837675]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.25661469029728, 33.90664024662522]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.30433655309025, 33.88583709567638]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.36544800328556, 33.86360346407558]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.3949737601215, 33.845641303046705]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.08632660435978, 33.90834986893732]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.40218353271484, 33.88070677172029]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.44166564941406, 33.89980141450177]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.56869506835938, 33.912908694131424]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.58998107910156, 33.89923148706271]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.6517792167142, 33.88925714025764]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.80627445597202, 33.833949613770415]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.84266666788608, 33.833949613770415]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.89279178995639, 33.8604674859444]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.96763610839844, 33.8681646812067]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.90961456298828, 33.802573765757806]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.95355987548828, 33.79943554795613]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.97793579101562, 33.83024215880336]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.9981918334961, 33.86730947155677]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.77400207519531, 33.83423479595387]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.71529388427734, 35.590535439296254]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.64568519592285, 35.5705011224224]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.6483459469382, 35.538170390351254]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.60328483548801, 35.5621229188527]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.69709777832031, 35.56917463189491]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.77743530273438, 35.59967835696945]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.83253860473633, 35.58997705934413]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.86935997009277, 35.59255953397566]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.90420725056902, 35.598491930439174]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.67272186279297, 35.641702339018664]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.56594848632812, 35.63416870164976]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.87905883789062, 35.68967772386474]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.60371398925781, 35.78108572235875]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.86498260498047, 35.89658840603353]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.63117980957031, 36.05717739592489]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.52268981933594, 36.15841879773692]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.15798189351335, 36.88651457086611]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.16278841206804, 36.87141016243151]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.91284944722429, 36.8535556467628]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.99147033691406, 36.98036946324677]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.99490356445312, 37.03547585384177]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.01653289794922, 37.144747732967936]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.24243927001953, 37.17429798145258]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.20398712158203, 37.22242918651881]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.0484619140625, 37.256594639831235]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.94306182861328, 37.21696127699379]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.81397247314453, 37.318326459299925]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.94340515136719, 37.33470692902435]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.02030944824219, 37.36609284672654]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.27230834960938, 37.37100423745456]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.42440032958984, 37.44845250295902]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.51400756835938, 37.43482305282624]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.11008834838867, 36.77644434560415]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.97241592407227, 36.82963717894876]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.93482208775822, 36.75265368913675]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.10236358642578, 36.71853629274163]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.93344880198129, 36.63126231160837]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.84796143625863, 36.62547630511088]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.70960235595703, 36.92686987053469]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.82633209228516, 37.03986044775568]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.64814758300781, 37.05191751129885]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.76007080078125, 37.0113545894824]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.75801087473519, 37.157061740286]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.72367858886719, 37.22379610196718]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.52214812970487, 37.31040795224062]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.40473175048828, 37.445726811539146]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.8675308227539, 37.39855663254643]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.53607940673828, 37.07273910458867]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.58448791503906, 36.936749546794765]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.38021087646484, 37.00641975104825]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.24837493896484, 36.898321122957775]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.28270721435547, 36.765045621776586]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.3173828125, 37.07465657084524]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.36637874227017, 37.33497990659827]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.45426936727017, 37.37018569466084]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.3619155883789, 37.51411162391741]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.26132193766534, 37.62785653563843]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.52293391805142, 37.48469475411378]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.43984985351562, 37.43700393167253]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.40071105957031, 37.40510224750538]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.38972473144531, 37.322148888300795]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.22904968261719, 37.21750781878708]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.11918640136719, 37.14693676913407]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.93104553222656, 37.046985307691415]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.02845001220703, 34.13940222599003]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.01265716552734, 34.156450076950996]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.9989242553711, 34.19195538068541]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.52540969848633, 35.079615499486096]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.5427474975586, 35.08411072973323]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.5731315612793, 35.0985780701937]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.55167388916016, 35.08846524781749]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.67973327636719, 35.35127060792443]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.63939276896417, 35.405016734874685]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.60660552978516, 35.390184141785795]),
            {
              "class": 1,
              "system:index": "392"
            })]),
    NonCropClass = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-94.581298828125, 36.68696186496828]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.7900390625, 36.316050156499486]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.02099609375, 36.48406362776992]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.32861328125, 35.87217709828407]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.592529296875, 35.88107910861279]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.92236328125, 36.58999011925495]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.691650390625, 36.42220619142191]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.164306640625, 36.52821729962941]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.768798828125, 37.06486034537398]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-91.03271484375, 37.28370804441642]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.427734375, 34.63415247660499]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.427490234375, 34.51655544081163]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.64996337890625, 34.98369338609093]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.1248779296875, 35.22341950001536]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.1473388671875, 35.800226701929525]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.1640625, 35.76903352364678]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.66668701171875, 34.78471912631134]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.85919189453125, 34.5678810484844]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.33734130859375, 34.68766393717344]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.26318359375, 34.75313227852946]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.54058837890625, 34.59727776136818]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.41900634765625, 34.09157358916768]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.8834228515625, 34.631184122106085]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.21026611328125, 34.786974867106274]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.4439697265625, 34.68314696866622]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.0374755859375, 34.454719918810724]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.72686767578125, 34.23929092728962]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.1583251953125, 34.91613309406205]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.1303014755249, 34.899627238209774]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.09154891443904, 34.89681140969427]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.09240722132381, 34.89149626930647]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.13194298744202, 34.86942867300071]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.14539694786072, 34.86756251142214]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.17851686477661, 34.84346983403553]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.40747833251953, 36.39475837818934]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.434579372406, 36.392512945195236]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.3937025043997, 36.39192566740398]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.3757209777832, 36.39465474424815]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.35709571838379, 36.38968015258353]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.34344863891602, 36.39349748918543]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.15111537557095, 36.1805757618335]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.10064693074673, 36.17295468571264]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.11523818969727, 36.23584102181357]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.18733596801758, 36.23196403250381]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.09103393554688, 36.26574276257736]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.04640197753906, 36.27418516345857]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.99919509887695, 36.233348693611696]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.9744758605957, 36.216454152955606]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.98632049560547, 36.262559325286375]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.92950053792447, 36.3093289353811]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.9557647285983, 36.33242665803257]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.19059736654162, 36.364405213325064]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.1178129427135, 36.333988135665]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.12399275228381, 36.296918552830356]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.14665222167969, 36.12240009399469]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.1693115234375, 36.05414919738366]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.73878479003906, 36.089669254331966]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.56575012207031, 36.20001189969033]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.69483947753906, 36.25429443086864]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.79371643066406, 35.893554311782204]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.04365539550781, 35.88465370360837]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.56369018554688, 35.762168935633966]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.36507797241211, 35.84693523205505]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.29750776290894, 35.839265703995025]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.98072747886181, 35.98028279172949]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.0318832397461, 36.190544592003896]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.08106422424316, 36.220602149822696]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.10518264770508, 36.23078031543501]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.12217712402344, 36.254524208483716]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.14912796020508, 36.25009440688826]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.16670179367065, 36.240916649397484]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.1566596031189, 36.24386734090252]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.12839984893799, 36.15246624911297]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.09359550476074, 36.157404005088054]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.06200981140137, 36.17537292181684]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.03091764450073, 36.178104532866136]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.81840085983276, 36.25804898514638]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.78582809260115, 36.27078269003078]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-92.7770304470323, 36.27721795802118]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.13026927853934, 35.308384742364275]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.10553932189941, 35.31400544906234]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.09883379936218, 35.31808503202163]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.08135652542114, 35.31868116992754]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.04678819468245, 35.33097111090728]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.9884877204895, 33.9652363795984]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.95434852223843, 33.97947238266596]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.92572402954102, 33.98808400837558]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.78109931945801, 34.02323315715114]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.75543594360352, 34.03018655072497]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.85869017802179, 34.04665363846932]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.45778846740723, 33.803225119067186]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.40856456756592, 33.80144206845832]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.40624713897705, 33.82982381719716]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.41989413462579, 33.84604283357448]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.4661997910589, 33.86696258827176]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.46413985453546, 33.877367099283]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.99555265903473, 33.424171058820654]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.0206527709961, 33.41714207263337]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.04296875, 33.42430591986909]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.04022216796875, 33.4532418440569]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.00554656982422, 33.46383971771979]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.01388285448775, 33.54769072288662]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.02623168192804, 33.59428485280812]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.99159899912775, 33.59693012506162]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.96709442138672, 33.61519460520935]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.94739627838135, 33.62130570629045]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.93186092376709, 33.630953958436486]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.96044245921075, 33.635956330435214]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.99310111999512, 33.67732196765616]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.97318840026855, 33.69653342524008]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.98816585540771, 33.70406685799199]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.95640850067139, 33.699496892298086]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.94306182861328, 33.70752987319184]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.93027305603027, 33.70106784542646]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.91115951538086, 34.74017007156158]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.8603048324585, 34.72902543552207]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.86270809173584, 34.711353152621086]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.82983493804932, 34.715551098673345]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.82468509674072, 34.701827610915885]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.81206790171564, 34.67529144964508]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.77202796936035, 34.654854208435424]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.71855545043945, 34.634023492636814]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.09500885009766, 34.47404222460596]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.06925964355469, 34.51478849539408]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.76996803283691, 34.526789781876]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.81820487976074, 34.5104535742331]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.72864055633545, 34.531630000145796]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.6828498840332, 34.54509885677099]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.65495491027832, 34.56870831478616]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.57187080383301, 34.613858648029826]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.56088447570801, 34.611244979782306]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.08367919921875, 34.86361682959478]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.05181455612183, 34.77121374122177]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.06292958837003, 34.77812288353616]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.06983895879239, 34.79985118415541]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.96900872886181, 34.868777389243455]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.90927056968212, 34.87469253629085]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.91030053794384, 34.85722754238353]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.70945739746094, 35.63611989140899]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.56663513183594, 35.633608582446115]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.47737121582031, 35.51716478339435]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.82721710205078, 35.539796607921005]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.91442108154297, 35.664018014658524]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.58002471923828, 35.505147764501864]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.60182571411133, 35.605749282771036]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.70199012756348, 35.63568104476734]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.63916206359863, 35.54229050261927]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.69563865661621, 35.534607847168424]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.72765350341797, 35.4780331383331]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.29807090759277, 35.51351155512485]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.30536651611328, 35.49233986964387]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.3239917755127, 35.52776261530757]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.25052070617676, 35.46116614918981]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.17361640930176, 35.41431287351773]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.14666557312012, 35.443896526054885]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.06195068359375, 35.48031913617471]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.9962043762207, 35.51204439058641]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.93732452392578, 35.558072628360854]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.89449467509985, 35.578389319358855]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.96942486613989, 35.60086428884358]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.51620951853693, 36.21914297174116]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.52479267120361, 36.22068365823484]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.52069425582886, 36.24202509420587]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.5196213722229, 36.25960621367702]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.55092811584473, 36.266405720181076]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.55590629577637, 36.291989396465155]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.55779457092285, 36.317391791795345]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.54120779037476, 36.33741044754248]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.54569244384766, 36.35552307001165]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.53088656626642, 36.3626598067644]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.52434197627008, 36.38244225260989]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.52024364471436, 36.40410214573318]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.53073644638062, 36.412909466620654]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.5753173828125, 36.666793509206116]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.60106658935547, 36.7292808938205]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.57600402832031, 36.791717468589724]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.59248352050781, 36.856026181401745]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.58355712890625, 36.916712548080355]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.45790100097656, 36.86921103114807]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.47506579756737, 36.78016915928048]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.48433551192284, 36.716622355838176]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.61651611328125, 36.630984913937894]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.71573638916016, 36.6185857520737]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.4603029191494, 36.556284250354594]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.59007892012596, 36.52180386088577]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.42974719405174, 36.73230762639739]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.40571594238281, 36.98557835993196]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.59969329833984, 36.97515646003117]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.51145800948143, 36.615278972061596]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.58424377441406, 36.56455725564003]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.48605346679688, 36.473229412347735]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.46476745605469, 36.42075689532793]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.38511657714844, 36.330365864790274]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.25877380371094, 36.49834841442045]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.14787921309471, 36.28333210027452]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.22821673750877, 36.319301378851655]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.29859924316406, 36.34585312759517]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.33567810058594, 36.32234446493497]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.24847277998924, 36.43622616778018]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.38134002685547, 36.61279879398197]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.28108978271484, 36.61059412427498]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.1362062394619, 36.64778948202484]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.24675750732422, 36.70038335111519]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.33670806884766, 36.83679419793217]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.25980243086815, 36.87799913066054]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.08436450362206, 36.85877267618186]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.04179382324219, 36.67615608707219]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.03321075439453, 36.63291349318058]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.84884509444237, 36.7713692793245]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.73898181319237, 36.76174325398594]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.80421313643456, 36.86179483309189]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.78842163085938, 36.70974184061368]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.8883285522461, 36.688545982504365]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.73142871260643, 36.60646019869366]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.6576156616211, 36.50331604334424]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.51891192793846, 36.92302555215034]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.47496661543846, 36.82360375649712]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.50964221358299, 36.814534008862466]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.34862384200096, 36.85300433293519]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.25832995772362, 36.862618890645095]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.39771899580956, 36.75596705878643]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.28613910079002, 36.95293659362117]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.24322509765625, 36.710372938534846]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.350341796875, 36.725784310259826]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.3352302312851, 36.64759472671493]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.22811353206635, 36.60571413070916]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.09627759456635, 36.497601302032315]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.1209968328476, 36.42691540761026]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.3352302312851, 36.83247814252185]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.97244262695312, 36.10914194413624]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.8612060546875, 36.09027858553314]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.8941650390625, 36.19895808287125]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.78704833984375, 36.06697053807446]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.04248046875, 36.08805906915821]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.99166870117188, 36.150181832121824]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.81863403320312, 36.20782322962809]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.90927124023438, 36.05031770331517]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.92437744140625, 36.15794372102218]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.56594848632812, 36.19341685630578]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.4107666015625, 36.20449891725504]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.4052734375, 35.98033732539979]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.3448486328125, 35.89027129680156]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.47256469726562, 35.85466138601577]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.5426025390625, 35.92141683747104]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.60371398925781, 36.02108541237468]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.6747817993164, 36.121541311253516]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.89656829833984, 36.103790489772]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.9267807006836, 36.135960899240054]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.64594134688377, 36.0799315063207]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.63907489180565, 36.17948088666974]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.7297120988369, 35.99359033144779]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.50027465820312, 37.065147142175256]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.26382446289062, 37.336422885826735]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.69940185546875, 37.413906870267404]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.84222412109375, 37.16917844379418]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.3231201171875, 37.16261227536001]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.48928833007812, 36.991690705645375]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.669189453125, 36.941217546416155]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.45770263671875, 36.91487044194582]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.38217163085938, 36.83247706911294]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.28466796875, 36.81488831605128]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.45907592773438, 36.714775428034756]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.55795288085938, 36.887415859870444]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.66506958007812, 36.77749879466276]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.36981201171875, 37.01910773219681]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.19540405273438, 37.07172069842985]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.18991088867188, 37.127582007789115]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.91799926757812, 37.11006132534901]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.83560180664062, 37.166988715671316]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.15180072188377, 37.17730521081005]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.02030810713768, 37.195630773362915]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.00073871016502, 37.17484322930944]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.93241748213768, 37.193989859491694]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.27265033125877, 37.2377353559361]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.3238054215908, 37.19481032088534]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.38457354903221, 37.21039739323291]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.87817248702049, 37.25549971715774]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.1524887084961, 37.33798072845808]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.22767639160156, 37.289923319708365]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.15214538574219, 37.35408400588724]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.01172637939453, 37.336888855832285]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.2733383178711, 37.29101587470296]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.46662902832031, 37.664851666953254]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.57649230957031, 37.51522564730113]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.669189453125, 37.611564894384244]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.41650390625, 37.60340538358467]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.51623916625977, 37.60254953928056]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.46371078491211, 37.559288693055066]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.40826416015625, 37.56486776081124]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.51744079589844, 37.56037732444807]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.53632354736328, 37.6324637134106]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.4910042732954, 37.63287155078549]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.37908105552197, 37.664540081899446]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.38491754233837, 37.635590409417404]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.47710037231445, 37.60227753704258]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.46456909179688, 37.545271143213796]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.52585220336914, 37.530978694363256]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.48722772300243, 37.49598466730511]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.56670694053173, 37.49380550831293]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.4328110665083, 37.52321878923842]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.397277161479, 37.35147801253086]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.47898797690868, 37.35475294643158]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.36895303428173, 37.3825841154718]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.26647119224072, 37.3798560259774]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.30063180625439, 37.336329584848976]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.32861261069775, 37.32459086431368]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.41101007163525, 37.32336228754538]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.48482446372509, 37.404950705512825]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.31333474814892, 37.402359796053524]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.49340753257275, 37.332644370115744]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.53409127891064, 37.38162929543793]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.1361083984375, 37.06509363539162]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.4437255859375, 37.05687454530563]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.99946594238281, 37.032760078064]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.62431335449219, 37.03111563089851]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.69091796875, 37.061258170827564]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.93560791015625, 37.1017946984579]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.11550903320312, 37.165294812180335]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.20477294921875, 37.16584199525097]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.07705688476562, 36.98505665608208]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.174560546875, 36.995477199879176]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.24940490722656, 36.99383194577215]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.35240173339844, 37.01466920097152]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.48904418945312, 36.98834750835497]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.98298645019531, 37.05039549828551]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.8750114440918, 37.041626738892674]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.06315231323242, 37.035597629232804]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.88290719687939, 37.00585602068052]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.82934884727001, 36.984879361659445]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.73665170371532, 37.02394912988564]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.93698053061962, 36.99296913715488]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.83879022300243, 36.97418308369021]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.8286622017622, 36.921914274035345]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.7213738411665, 36.93810621385254]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.70661096274853, 36.96389664918399]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.87123489379883, 36.93440168526843]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.77750778198242, 36.89130460818959]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.8508071899414, 36.839803270787954]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.89646911621094, 36.83417035293106]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.90316390991211, 36.871120220827486]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.70026016235352, 36.85010631525812]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.74334582686424, 35.38403912565166]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.58850726485252, 35.372282162030004]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.69425067305565, 35.45482458327197]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.55623492598534, 35.49117236185518]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.76600512862206, 35.497880924066244]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.02967700362206, 35.368362793484046]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.06606921553612, 35.33532055429433]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.86454010009766, 35.25125374166506]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.67845916748047, 35.22938214356016]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.48310852050781, 35.23975786776763]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.4226823747158, 35.33027875100376]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.42542895674706, 35.3834790357387]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.38629016280174, 35.403909823308]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.34440478682518, 35.34960290726227]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.37667712569237, 35.36556285458959]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.37564715743065, 35.335880431345466]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.25308093428612, 35.261906998648975]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.27745819091797, 35.43244828071206]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.3347917497158, 35.54398712240311]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.40002307295799, 35.54566321232844]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.51297625899315, 35.51995931761787]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.65476855635643, 35.55571901618737]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.71769714355469, 35.62049255080656]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.80867767333984, 35.5562773622141]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.8340835571289, 35.61546887214083]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.62671661376953, 35.58699539989005]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.74413299560547, 35.577781225332636]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.57418823242188, 35.554601494163194]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.91270446777344, 35.57080008428295]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.44441223144531, 35.512413947461546]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.4770278930664, 35.661228504592216]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.71975708007812, 35.66624930739397]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.20330047607422, 35.46405288310887]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.06768798828125, 35.4181805888246]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.07798767089844, 35.42965111288654]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.17274475097656, 35.385158747125296]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.27986145019531, 35.355483528296205]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.28329467773438, 35.42349640061724]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.20433044433594, 35.443357645259916]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.17102813720703, 35.35352346001065]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.3941879272461, 35.38207975068138]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.01275634765625, 35.48334499798684]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.71612548828125, 35.4413997120683]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.58257293701172, 35.34344235741558]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.54034423828125, 35.377321070490716]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.74462127685547, 35.324676955980905]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.6690902709961, 35.39663397123836]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.56437683105469, 35.42965111288654]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.76384735107422, 35.40614877227358]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.09020099043846, 33.910342298092125]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.93742236495018, 33.91290660732263]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.8890138566494, 33.97101024958008]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.01158007979393, 33.96531556765285]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.1471925675869, 33.96759348618134]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.26323565840721, 33.9277211053959]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.93948364257812, 33.7611953001548]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.15474700927734, 33.77346770336169]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.8615493774414, 33.78088737352878]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.77125549316406, 33.812271173424]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.76095446944237, 33.92002928368079]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.62705859541893, 33.85504843695307]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.64285278320312, 33.968732700625814]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.49453735351562, 33.851342175760905]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.47359466552734, 33.939969887932044]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.84850311279297, 33.90635349753293]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.72834014892578, 34.04870479503736]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.61195373535156, 34.05126493384524]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.47771319746971, 34.045006680285375]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.35858020186424, 33.92430288191295]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.37231311202049, 33.81398268609488]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.2356706559658, 33.87500424059987]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.22846221923828, 33.992931492518395]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.31085968017578, 33.98154468385915]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.20408630371094, 34.039032461920925]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.31841278076172, 34.043868766375994]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.66276550292969, 34.11694869940785]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.84232330322266, 34.03704096228231]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.96797943115234, 34.05581610084362]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.84163665771484, 34.09761851070178]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.78533172607422, 33.98666893655677]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.69778442382812, 33.9163258445063]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.07200622558594, 34.06605533318844]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.1794662475586, 34.11638022748854]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.98480224609375, 34.23794608249937]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.68679809570312, 34.297245170106166]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.24675750732422, 34.33410867015149]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.41910552978516, 34.34686506338204]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.2398910522461, 34.46356920540389]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.21929168701172, 34.534871340353995]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.10393524169922, 34.58491593509097]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.26014709472656, 34.639732474825585]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.48983001708984, 34.65470183123987]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.65016174316406, 34.558625071407036]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.11492156982422, 34.70806111121634]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.66149139404297, 34.10643135038873]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.48124694824219, 34.137979473921185]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.33087158203125, 34.14678810815966]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.29894256591797, 34.06150471598292]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.99750518798828, 34.111547784309955]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.8948503434658, 34.20927460352591]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.4935073852539, 34.338928084670016]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.25764465332031, 34.34969989224106]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.41763305664062, 34.2844809565776]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.13954162597656, 34.420815747665316]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.08598327636719, 34.3590532340144]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.00358581542969, 34.34147942730612]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.02212524414062, 34.25241977423981]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.0482177734375, 34.15104974337042]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.23223876953125, 34.19848451076723]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.76154327392578, 34.3037683525955]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.96307238936424, 34.40410470285116]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.92668017745018, 34.43978864773454]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.80754718184471, 34.45394472185598]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.50817108154297, 34.438939207001056]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.38835009932518, 34.40523776054644]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.00701904296875, 35.00536299977051]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.38742065429688, 34.914198588899346]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.51812744140625, 35.12226479896378]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.45059204101562, 35.18850962497738]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.64971923828125, 35.22217274244114]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.62774658203125, 35.381322010881945]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.82138061523438, 35.276004696077564]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.45034790039062, 35.1929988468709]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-96.34323120117188, 35.11215491521247]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.26107788085938, 35.04472363936053]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.23110961914062, 35.109908104013854]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.04056549072266, 35.11768939825993]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.09584045410156, 35.22657793984546]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.92898559570312, 35.2428425604185]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.92486572265625, 35.13818729574673]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.2533210515976, 35.18289774881695]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.3137458562851, 35.0064878524461]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.4510749578476, 34.695442337965865]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.64034497737885, 34.91194633309016]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.78866040706635, 34.924332975320496]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.8685554265976, 34.856746767956636]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.80401074886322, 35.0064878524461]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.46343457698822, 35.207587104886095]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-95.15258252620697, 35.04359931267218]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.74883496761322, 34.74397961742061]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-94.59227979183197, 34.59036896702792]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-93.83147656917572, 34.72705124440443]),
            {
              "class": 2,
              "system:index": "482"
            })]),
    input = ee.Image("users/images/input/MidUplands_2010_InputSR");
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
//add all max val to map
//Map.addLayer(FCC,vizParams,'FCC');

Map.addLayer(CDL,{palette:'ffff00'},'CDL')
//Map.addLayer(prev,{palette:'00ffff'},'prev')
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

var studyArea = zones.filterMetadata('name','equals','MidUplands');

var region= ee.FeatureCollection(countries.filterMetadata('Country','equals','United States'))
              .map(buffer2)

studyArea=buffer1(studyArea.geometry());



var CropSamplesArea = Cropclass.filterBounds(studyArea).map(buffer);
print('Crop:',CropSamplesArea);

//var CropSamplesArea2 = Cropclass2.filterBounds(studyArea).map(buffer);
//print('Crop:',CropSamplesArea2);


var NonCropSamplesArea = NonCropClass.filterBounds(studyArea).map(buffer);
print('Non-crop:',NonCropSamplesArea);

//var NonCropSamplesArea2 = NonCropClass2.filterBounds(studyArea).map(buffer);
//print('Non-crop:',NonCropSamplesArea2);

//merge all training samples into one feature collection
var TrainingSamples=CropSamplesArea
//                    .merge(CropSamplesArea2)
                    .merge(NonCropSamplesArea)
//                   .merge(NonCropSamplesArea2);
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
var classifier = ee.Classifier.randomForest(100,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);

classified = classified.updateMask(classified.eq(1)).clip(studyArea).clipToCollection(region);

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'MidUplands_v1_asset',
  assetId: 'MidUplands_2010_v1',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'MidUplands',
  fileNamePrefix: 'MidUplands_2010_v1',
  region: studyArea, 
});
 

Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_MidUplands_v1',
  folder: 'data',
  fileNamePrefix: 'RFtable_MidUplands_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');



