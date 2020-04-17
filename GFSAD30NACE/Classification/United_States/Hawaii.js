/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var hawaii = /* color: #ffc82d */ee.Geometry.Polygon(
        [[[-160.323486328125, 21.662533492414674],
          [-159.6368408203125, 21.71357649998363],
          [-159.14794921875, 21.82070785387502],
          [-158.62060546875, 21.514406720030294],
          [-158.148193359375, 21.130621534363144],
          [-157.5, 21.105000275382064],
          [-157.39013671875, 20.75097714407783],
          [-156.24755859375, 20.11268153468498],
          [-156.4013671875, 19.088075584093133],
          [-155.6158447265625, 18.771115062337024],
          [-154.5391845703125, 19.38888634723281],
          [-154.632568359375, 19.777042202225964],
          [-155.3302001953125, 20.24158281954221],
          [-155.6927490234375, 20.58650982399772],
          [-156.1651611328125, 21.099875492701216],
          [-156.6925048828125, 21.233062254412793],
          [-157.412109375, 21.396819374082195],
          [-157.9010009765625, 21.795207646171395],
          [-158.6700439453125, 21.785006291915956],
          [-158.9996337890625, 22.2026634080092],
          [-159.6588134765625, 22.39579284633252],
          [-160.4498291015625, 22.01945321869661]]]),
    prev = ee.Image("users/images/Hawaii_2010_v3"),
    Cropclass = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-159.75605964660645, 22.00012105556382]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.74696159362793, 21.980542837481142]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.73389387130737, 21.98752451912184]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.7197425365448, 21.979554403112484]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.62388038635254, 21.926972140572232]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.61495399475098, 21.931271649862214]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60328102111816, 21.928803428927438]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60928916931152, 21.915904287783455]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.65765476226807, 21.953120834790766]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.65031623840332, 21.96088231600855]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.63624000549316, 21.965220600290934]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.62817192077637, 21.978433640627863]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6207046508789, 21.999046711225596]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.67294335365295, 21.975355847362575]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6744668483734, 21.97902710316558]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.71872329711914, 21.992976180576825]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6919870376587, 22.006485051848106]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.7573471069336, 22.009948938891043]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.76112365722656, 22.02307824597639]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.7718095779419, 22.030796119200012]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.74219799041748, 22.029483314783537]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.764986038208, 22.067629222431112]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.7677755355835, 22.044559922219467]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.75820541381836, 22.081508763092504]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.47841882705688, 22.207413765826377]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.48700189590454, 22.21134717438437]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4558882713318, 22.218399221740547]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4449019432068, 22.20139424536039]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4556736946106, 22.205963541926085]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4407606124878, 22.188162313079978]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4231653213501, 22.194877773856298]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.40473318099976, 22.194242004347778]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.39664363861084, 22.189274955990758]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4044327735901, 22.21913420346023]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.38095808029175, 22.207672023305232]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3723750114441, 22.205268223782706]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3600583076477, 22.203003449378443]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3449306488037, 22.196169171809544]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.37376976013184, 22.19374530741662]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3564748764038, 22.188500080609444]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.31898832321167, 22.18492367731027]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.32270050048828, 22.1777109870884]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.33139085769653, 22.178625012392526]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.31671380996704, 22.16612619488432]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.31130647659302, 22.156587408882594]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.31192874908447, 22.143728883856472]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.313645362854, 22.133751290203588]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3101692199707, 22.118902845549133]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.32591915130615, 22.120711775904937]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.317786693573, 22.127072665327994]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3105983734131, 22.108309535914547]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.33488845825195, 22.057805362024407]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.33621883392334, 22.068941692312585]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.32201385498047, 22.079401089080058]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.32411670684814, 22.070850689407955]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.36724662780762, 22.063890679793456]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3749713897705, 22.071685867527837]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.39091444015503, 22.04948999424463]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.38284635543823, 22.04282727138602]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3980598449707, 22.055038709011132]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4072437286377, 22.02130552837094]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.392352104187, 22.019117367628546]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3908715248108, 22.011538113276302]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3793487548828, 22.012177028219227]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3708086013794, 22.004935609847383]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3684482574463, 22.01345020639455]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3603801727295, 22.00521413277878]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.35694694519043, 21.98253261710466]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3898630142212, 21.985159083496214]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.41479682922363, 21.957976785499653]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3859577178955, 21.95586725352428]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.43565368652344, 21.95013553685045]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.41930294036865, 21.94002486221632]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.47311878204346, 21.94285114680206]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.46625232696533, 21.95475277116081]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4489574432373, 21.959648467844485]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.43659782409668, 21.9682055813457]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.45651054382324, 21.98117956999541]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.45093154907227, 21.988143645394214]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5674467086792, 21.92768408859948]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5665454864502, 21.91613852513673]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.555344581604, 21.904432756974064]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.54667568206787, 21.912913562563133]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.57560062408447, 21.90387531545164]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.54079627990723, 21.91832827291017]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.54474449157715, 21.897305304649603]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.52144145965576, 21.896747835249347]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.51290130615234, 21.90359659387269]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.52178478240967, 21.890453919595938]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5106053352356, 21.891548995052464]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.42801475524902, 21.893004769961536]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4376277923584, 21.896429280327528]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.44900035858154, 21.878429771172144]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.41973209381104, 21.901088075130644]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.41260814666748, 21.913789485547223]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.42915201187134, 21.887228376358312]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.44307804107666, 21.889956155852325]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.44430112838745, 21.8960287622207]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4464898109436, 21.905147140993755]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.45183277130127, 21.89369930117584]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.47105884552002, 21.882748333329296]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4777536392212, 21.908909795363673]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.474835395813, 21.9014242052833]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.48099374771118, 21.911079746618444]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.49152946472168, 21.894973540993085]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.49231266975403, 21.89713258794456]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.49549913406372, 21.893220296558592]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.05137634277344, 21.37029454630306]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0148983001709, 21.34991113421265]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.99996376037598, 21.333442464392274]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0394458770752, 21.385240578810688]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0427074432373, 21.40162351272882]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06425094604492, 21.409934152989067]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.05137634277344, 21.43710025728219]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.03695678710938, 21.441654079587813]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0002212524414, 21.436541006147877]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.98457860946655, 21.452451860453355]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.97354936599731, 21.45918197071864]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9672408103943, 21.460360207320548]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9641079902649, 21.4445231118224]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9757595062256, 21.42027717660726]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.07661056518555, 21.51912713948168]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0504322052002, 21.534936158431254]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.03481101989746, 21.53317968574565]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.05034637451172, 21.547390536950612]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0760097503662, 21.546911542154024]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0990982055664, 21.567107783374183]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.11205863952637, 21.558486807052734]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.1342887878418, 21.559364892900856]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0244255065918, 21.52615358254601]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0449390411377, 21.461944822630457]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06021690368652, 21.465219835334953]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.13514709472656, 21.576925490632032]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.1598663330078, 21.571098800069034]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.1071662902832, 21.584906878170056]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.08210372924805, 21.595681053630198]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.07592391967773, 21.614434186652968]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.07085990905762, 21.5834702608694]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.08691024780273, 21.580517169445656]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06425094604492, 21.538369202780764]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.08448553085327, 21.49799885260713]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0212926864624, 21.47110368805106]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.02429676055908, 21.476914422753257]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.10912704467773, 21.15592752434264]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.1169376373291, 21.17225597606781]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.09342002868652, 21.178818865612616]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0862102508545, 21.16697343883731]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0791721343994, 21.147555490889363]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.07189798355103, 21.163784814139742]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.07462310791016, 21.186134741567393]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0868968963623, 21.17699108816142]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.09771156311035, 21.16816702665614]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.09959983825684, 21.161943845973088]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.113139629364, 21.16192383532372]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.06106185913086, 21.125942650113423]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.06252098083496, 21.13446901278827]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.07058906555176, 21.128104309585595]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.07494497299194, 21.13364608607246]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.07762718200684, 21.1291827917602]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.08518028259277, 21.126620840154846]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.08908557891846, 21.13164462542129]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.08264827728271, 21.137989162732136]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.09258317947388, 21.142952523062178]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0906949043274, 21.134126432607538]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.10386991500854, 21.139550237532077]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.12416887283325, 21.142532244961327]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.12672233581543, 21.144473519557334]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.10798978805542, 21.143092615497526]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.09582328796387, 21.132905548781167]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.07610368728638, 21.13894982609366]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.06958055496216, 21.146714959612673]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.05865859985352, 21.143352786811715]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.04790830612183, 21.142852456955826]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.043616771698, 21.14783566692165]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.04123497009277, 21.152618589678966]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0458698272705, 21.158541996110277]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.05151319503784, 21.15612063225325]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0608901977539, 21.15017711671568]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.07979440689087, 21.18591466027157]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.1002435684204, 21.176991087550803]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.10955619812012, 21.18037250508973]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.11858987808228, 21.166746322962265]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.92124366760254, 20.812856438397848]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9263505935669, 20.834793035039212]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.91476345062256, 20.790385713523232]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.96742057800293, 20.863708920689966]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.94454669952393, 20.844900189937054]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.97729110717773, 20.876260133421454]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9328737258911, 20.8260088850426]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.95746421813965, 20.80631287894014]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.95566177368164, 20.837079236611526]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.50256156921387, 20.802426191859624]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.4994716644287, 20.82537178156977]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.49972915649414, 20.843340712220837]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.4753532409668, 20.836923483181124]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.46822929382324, 20.85007850821189]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.4621353149414, 20.828019124788305]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.47269248962402, 20.812455288412664]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.48908615112305, 20.81582491510585]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.4496898651123, 20.805394873945293]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.45329475402832, 20.836682831769984]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.42745971679688, 20.82793890295018]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.45140647888184, 20.85529207182555]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.42295360565186, 20.846464331829893]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.4181900024414, 20.871528489427583]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.43192291259766, 20.85661080611462]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.40522956848145, 20.86755860537174]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.38081073760986, 20.87802443710695]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.40325546264648, 20.847106026364376]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.37128353118896, 20.86832051044349]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.35639190673828, 20.876220035369617]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3929557800293, 20.903845054261623]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.36754989624023, 20.906811735179105]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.334547996521, 20.90829505363415]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.34068489074707, 20.929180224225515]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.35677814483643, 20.91871795871288]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.34793758392334, 20.89346120906191]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3257074356079, 20.865794177574234]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32956981658936, 20.858615957185105]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.34793758392334, 20.854004069752914]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.35566234588623, 20.836718259724048]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3620138168335, 20.849833197603182]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3751459121704, 20.84979309250195]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.38853549957275, 20.828816659932553]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3764762878418, 20.811367496691158]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3993501663208, 20.809522179692966]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.40793323516846, 20.800215019324657]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.42539978027344, 20.79050607624228]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.43805980682373, 20.78854013981012]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.45089149475098, 20.791910300871045]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.45732879638672, 20.785210025794292]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.42900466918945, 20.81289187195606]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3154935836792, 20.73235971675712]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.33102893829346, 20.727182041809876]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3047218322754, 20.749818012623788]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2819766998291, 20.79154921456159]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.27695560455322, 20.794397751197756]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2951946258545, 20.803103509877975]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2977695465088, 20.81918978527389]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30146026611328, 20.826169330732046]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30811214447021, 20.84189217906169]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.31961345672607, 20.837119345101144]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.31399154663086, 20.823040608961797]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2949800491333, 20.842213036419643]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30257606506348, 20.851437392885494]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2983274459839, 20.88993294490915]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30592346191406, 20.888409350132882]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32742404937744, 20.88953200041453]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32665157318115, 20.909818447730224]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.326265335083, 20.936114579180966]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3136911392212, 20.939000458884614]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.28901481628418, 20.936755890587992]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2632656097412, 20.935874086695307]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.28193378448486, 20.937637689288362]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.28798484802246, 20.927376437669043]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3059663772583, 20.93074348834067]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.33188724517822, 20.936635644908375]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.56220054626465, 20.0074771141739]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.58091163635254, 20.0197711493871]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.61790466308594, 20.026464486301595]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.63515663146973, 20.031262546425353]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.64232349395752, 20.026141922383587]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.64910411834717, 20.023400102357282]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.68922996520996, 20.00505287057862]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.68339347839355, 20.011020996181838]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.69468021392822, 20.018884059255722]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.6205654144287, 20.04392227068132]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.5770492553711, 20.045413954432572]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.51632404327393, 20.030778715070277]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.50611019134521, 20.10909964885104]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.44246673583984, 20.06460300027655]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.4507064819336, 20.045736478786004]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.4629373550415, 20.032714031552892]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.4710054397583, 20.060128453560196]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.453839302063, 20.052791533263175]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.43907642364502, 20.057830663764836]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.3913974761963, 20.04239025640455]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.38028240203857, 20.03420582174083]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.3869342803955, 20.030617437620915]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.37285804748535, 20.034326777081294]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.36543369293213, 20.022714639879126]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.3623867034912, 20.039890622081533]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.34775257110596, 20.043680374683817]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.34221649169922, 20.02412588290029]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.34839630126953, 20.006423946488056]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.31929969787598, 20.021263062413382]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.2920913696289, 19.987631101517554]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.27775764465332, 20.005012544635754]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.29372215270996, 20.008762813115805]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.29822826385498, 20.01868244716433]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.31221866607666, 20.02428716701037]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.30685424804688, 20.00033466514631]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.25660037994385, 19.9829527056515]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.2683162689209, 19.989042659192915]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.21218299865723, 19.96770662435449]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.22231101989746, 19.944471666155195]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.20737648010254, 19.95935695510262]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.22977828979492, 19.96560916447163]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.24419784545898, 19.95415331450937]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.24205207824707, 19.983275358102368]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.20578861236572, 19.948828481397666]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.21986484527588, 19.95798546958549]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.18892288208008, 19.938057247160533]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.20196914672852, 19.931682912372953]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.19372940063477, 19.926841473612058]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.15120029449463, 19.908523355218374]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1694393157959, 19.91719849959042]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.16351699829102, 19.927608044632308]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.158109664917, 19.901703954297048]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1558780670166, 19.909411066261878]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.14956951141357, 19.89552992368925]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1428747177124, 19.910379472628154]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.12407779693604, 19.86953986173762]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.12133121490479, 19.86045847822519]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13287544250488, 19.85613959340068]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.14665126800537, 19.879347171681076]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.14180183410645, 19.87147715624004]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.15012741088867, 19.85464611988873]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13969898223877, 19.887136084149102]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13248920440674, 19.89161554426874]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.09682655334473, 19.854282840422414]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.10124683380127, 19.857067960509667]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.11785507202148, 19.828972323086056]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1341199874878, 19.821745773747512]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.12210369110107, 19.818192936282415]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.11055946350098, 19.81399402600809]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.10090351104736, 19.8246525817011]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.0983715057373, 19.819242646524867]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.14437675476074, 19.8045911603453]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1082420349121, 19.752935818374514]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.09944438934326, 19.746594438894153]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.10210514068604, 19.776118079327865]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1136064529419, 19.767112130917734]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.12330532073975, 19.772806534134624]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.11476516723633, 19.759721219200642]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.11703968048096, 19.74522111333062]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13420581817627, 19.770262251453836]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1111602783203, 19.79966037224471]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1016330718994, 19.799821885395783]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.0904107093811, 19.786251854385434]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.0906252861023, 19.783021284895046]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.09146213531494, 19.770906065847353]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.0952386856079, 19.771612812255658]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.09946584701538, 19.767029001236622]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.10500192642212, 19.77108780093736]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.10650396347046, 19.76775595803341]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1018476486206, 19.75501354079902]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.09830713272095, 19.751378433266567]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.11257648468018, 19.74229030216066]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1068902015686, 19.7375238754616]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.10704040527344, 19.733585407073225]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.10920763015747, 19.72566778192246]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.11828422546387, 19.729283276780784]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1241636276245, 19.727465440430105]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13148069381714, 19.73097990538023]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1396346092224, 19.730858718220674]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.12233972549438, 19.737887421493184]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.09603261947632, 19.744572481515807]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.10236263275146, 19.7287177299103]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1002812385559, 19.724516461917442]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1162886619568, 19.724132686739143]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13306856155396, 19.690094224670617]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.138840675354, 19.690053818632503]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1452350616455, 19.67702233951078]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.12856245040894, 19.691811471864312]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.14883995056152, 19.68518481639779]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.14967679977417, 19.691932688617293]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.11785507202148, 19.65127952880086]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13156652450562, 19.64287281819232]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13388395309448, 19.65125932088993]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.60365676879883, 19.07299763202006]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.57730674743652, 19.09854809668959]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.5740451812744, 19.130825264892582]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.55456161499023, 19.17282479637167]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.5077838897705, 19.17947239019759]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.47988891601562, 19.18992964723924]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.47061920166016, 19.214003132077256]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.54142951965332, 19.19317207266424]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.476713180542, 19.230860578683544]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.4762840270996, 19.246905963914042]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.4411792755127, 19.27372580608257]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.45705795288086, 19.280774401917895]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.45971870422363, 19.285959382231056]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.4319953918457, 19.294465634898476]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.41903495788574, 19.322411637276772]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.44435501098633, 19.32710933674736]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.46401023864746, 19.29438462505317]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.68811416625977, 19.054510971602213]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.66991806030273, 19.07300709852537]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.68365097045898, 19.107397914723514]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8514928817749, 19.182588693913175]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.87599754333496, 19.20025992598078]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8623504638672, 19.20354267524149]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.87797164916992, 19.27048024301781]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.87432384490967, 19.290815425167402]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.86805820465088, 19.319086042058913]),
            {
              "class": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.86187839508057, 19.337430975545836]),
            {
              "class": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8714485168457, 19.33022283680748]),
            {
              "class": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.9249210357666, 19.61899111480826]),
            {
              "class": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.93560695648193, 19.62339254844442]),
            {
              "class": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.95174312591553, 19.651888121949995]),
            {
              "class": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.9674072265625, 19.68280312739885]),
            {
              "class": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.9841012954712, 19.713712165834888]),
            {
              "class": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.96174240112305, 19.74946222770427]),
            {
              "class": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.6499195098877, 19.84923720628861]),
            {
              "class": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.66442489624023, 19.861306096022915]),
            {
              "class": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.66760063171387, 19.873737303236823]),
            {
              "class": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.78570365905762, 20.130340593397833]),
            {
              "class": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.81703186035156, 20.1613636908558]),
            {
              "class": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7780647277832, 20.113013326193084]),
            {
              "class": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.76021194458008, 20.105275880047753]),
            {
              "class": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.69146156311035, 20.03876644692565]),
            {
              "class": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8253574371338, 20.176027009128074]),
            {
              "class": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.83608627319336, 20.186016612126718]),
            {
              "class": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8227825164795, 20.234585952274585]),
            {
              "class": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.78656196594238, 20.23257259929948]),
            {
              "class": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.85067749023438, 20.24191433685999]),
            {
              "class": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8509349822998, 20.216303750881167]),
            {
              "class": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4523048400879, 22.194284048886267]),
            {
              "class": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.43028926849365, 22.1784263117451]),
            {
              "class": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.50064897537231, 22.196705595160577]),
            {
              "class": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5197892189026, 22.203559713143672]),
            {
              "class": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.53423023223877, 22.210969730870644]),
            {
              "class": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3607234954834, 22.024709377945744]),
            {
              "class": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.33948040008545, 22.037598638031643]),
            {
              "class": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.44908618927002, 21.94535892975837]),
            {
              "class": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.44217681884766, 21.99307798337233]),
            {
              "class": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.44706916809082, 21.995624671310217]),
            {
              "class": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.43626523017883, 21.980260782990825]),
            {
              "class": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.44610357284546, 21.98060899713034]),
            {
              "class": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.41009759902954, 21.979713587617226]),
            {
              "class": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.7509527206421, 22.05197600447843]),
            {
              "class": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.7635054588318, 22.062933816741285]),
            {
              "class": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.7704792022705, 22.049847982411073]),
            {
              "class": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60336685180664, 21.969916922759108]),
            {
              "class": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6056842803955, 21.95948924141491]),
            {
              "class": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.61040496826172, 21.952125723007573]),
            {
              "class": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.62194919586182, 21.95113062369392]),
            {
              "class": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60684299468994, 21.938950043760915]),
            {
              "class": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.53749179840088, 21.929157056454194]),
            {
              "class": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06551694869995, 21.44136746089176]),
            {
              "class": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06307077407837, 21.445182183802597]),
            {
              "class": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06480884552002, 21.433617873728476]),
            {
              "class": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06744813919067, 21.436653843506992]),
            {
              "class": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.99498558044434, 21.534691962594817]),
            {
              "class": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.00631523132324, 21.529382550823073]),
            {
              "class": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.02481174468994, 21.524991161345927]),
            {
              "class": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.03322315216064, 21.50950047318652]),
            {
              "class": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.04352283477783, 21.560677334456358]),
            {
              "class": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.03614139556885, 21.590209622502048]),
            {
              "class": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06661128997803, 21.61909750785945]),
            {
              "class": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.04867267608643, 21.597631646338904]),
            {
              "class": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.04888725280762, 21.577798829500637]),
            {
              "class": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.00142288208008, 21.54379335964465]),
            {
              "class": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.99447059631348, 21.500876075785545]),
            {
              "class": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.97245502471924, 21.681362340508866]),
            {
              "class": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.98537254333496, 21.695199759687558]),
            {
              "class": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.95305728912354, 21.69161093136617]),
            {
              "class": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.96026706695557, 21.688380909422392]),
            {
              "class": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9579496383667, 21.682638469375714]),
            {
              "class": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.95799255371094, 21.67916896761724]),
            {
              "class": 1,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.94520378112793, 21.67039514228585]),
            {
              "class": 1,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9564905166626, 21.66628721328632]),
            {
              "class": 1,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.93614864349365, 21.642554654111425]),
            {
              "class": 1,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.92653560638428, 21.63274139712279]),
            {
              "class": 1,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9365885257721, 21.65634246339552]),
            {
              "class": 1,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.01520943641663, 21.692883493937305]),
            {
              "class": 1,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.01072478294373, 21.693312160457715]),
            {
              "class": 1,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.00293564796448, 21.69280374188578]),
            {
              "class": 1,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9971420764923, 21.694907187467198]),
            {
              "class": 1,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9930865764618, 21.692295321519143]),
            {
              "class": 1,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.98147797584534, 21.693700949919407]),
            {
              "class": 1,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.97386050224304, 21.69334206737665]),
            {
              "class": 1,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.97725081443787, 21.694149551840287]),
            {
              "class": 1,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.97415018081665, 21.689673438982084]),
            {
              "class": 1,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06038856506348, 21.629168643362345]),
            {
              "class": 1,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.07989358901978, 21.61859644470552]),
            {
              "class": 1,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.02972555160522, 21.669914237254677]),
            {
              "class": 1,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.02760124206543, 21.66746145059259]),
            {
              "class": 1,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.88815319538116, 21.57778475557122]),
            {
              "class": 1,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.89117872714996, 21.579146602858202]),
            {
              "class": 1,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.88959085941315, 21.5827232616888]),
            {
              "class": 1,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8900843858719, 21.582079768916532]),
            {
              "class": 1,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8866672515869, 21.57872258584459]),
            {
              "class": 1,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.88856625556946, 21.571943133533367]),
            {
              "class": 1,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8923374414444, 21.572596648637216]),
            {
              "class": 1,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8928416967392, 21.573364899265414]),
            {
              "class": 1,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.7333173751831, 21.136988455335885]),
            {
              "class": 1,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.73042058944702, 21.14555420833185]),
            {
              "class": 1,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.7381453514099, 21.147835657149898]),
            {
              "class": 1,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.75288677215576, 21.136847194204208]),
            {
              "class": 1,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.7742908000946, 21.094051004593226]),
            {
              "class": 1,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.77842140197754, 21.099756541701527]),
            {
              "class": 1,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6543745994568, 20.88032768057609]),
            {
              "class": 1,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6433024406433, 20.876337979999374]),
            {
              "class": 1,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6606616973877, 20.87681915553741]),
            {
              "class": 1,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.67102575302124, 20.893559094661565]),
            {
              "class": 1,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.67598247528076, 20.904043159686587]),
            {
              "class": 1,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.67304277420044, 20.909194716684578]),
            {
              "class": 1,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.66216373443604, 20.90865351084325]),
            {
              "class": 1,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.65512561798096, 20.90807221350498]),
            {
              "class": 1,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.65827989578247, 20.91552868429167]),
            {
              "class": 1,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6602110862732, 20.922303347714617]),
            {
              "class": 1,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6744589805603, 20.925430003134963]),
            {
              "class": 1,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6464138031006, 20.846223715256954]),
            {
              "class": 1,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.64353847503662, 20.85645041245566]),
            {
              "class": 1,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.65431022644043, 20.872771582453453]),
            {
              "class": 1,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6107726097107, 20.813711875423042]),
            {
              "class": 1,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.60972118377686, 20.820711731056615]),
            {
              "class": 1,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.61954879760742, 20.815878054599743]),
            {
              "class": 1,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6158366203308, 20.815958282860226]),
            {
              "class": 1,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.50779724121094, 20.836918782961934]),
            {
              "class": 1,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.46453857421875, 20.86078150989002]),
            {
              "class": 1,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.66439533233643, 20.938479420956806]),
            {
              "class": 1,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6622495651245, 20.948218888196454]),
            {
              "class": 1,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.66950225830078, 20.95823825481413]),
            {
              "class": 1,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6409206390381, 20.958118026392224]),
            {
              "class": 1,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.64920330047607, 20.945573663477823]),
            {
              "class": 1,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.68001651763916, 20.937317055387435]),
            {
              "class": 1,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.65795803070068, 20.97158300887748]),
            {
              "class": 1,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.66980266571045, 20.97915652860482]),
            {
              "class": 1,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.65469646453857, 20.98316352663237]),
            {
              "class": 1,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.64031982421875, 20.964289627202614]),
            {
              "class": 1,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.59796237945557, 21.011209502642345]),
            {
              "class": 1,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.60255432128906, 21.022346299404994]),
            {
              "class": 1,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.59770488739014, 21.019742446602496]),
            {
              "class": 1,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6139268875122, 21.013012277956285]),
            {
              "class": 1,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.62010961242676, 21.01573643042453]),
            {
              "class": 1,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.5095567703247, 20.907934268591006]),
            {
              "class": 1,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.50183200836182, 20.915190308139398]),
            {
              "class": 1,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.51307582855225, 20.924089501455697]),
            {
              "class": 1,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.51483535766602, 20.854204569956657]),
            {
              "class": 1,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.51474952697754, 20.85889665661993]),
            {
              "class": 1,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.78632593154907, 20.211141849746056]),
            {
              "class": 1,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.77203512191772, 20.20522162545479]),
            {
              "class": 1,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.77624082565308, 20.21098075818781]),
            {
              "class": 1,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.76285123825073, 20.21466568586297]),
            {
              "class": 1,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.77529668807983, 20.22205543409685]),
            {
              "class": 1,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.76804399490356, 20.235968111860032]),
            {
              "class": 1,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.78338623046875, 20.241705973727424]),
            {
              "class": 1,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7948660850525, 20.24782612617412]),
            {
              "class": 1,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.80492973327637, 20.237436650325]),
            {
              "class": 1,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.78610062599182, 20.224661707983632]),
            {
              "class": 1,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.79028487205505, 20.224863064530012]),
            {
              "class": 1,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.75835585594177, 20.227289271948678]),
            {
              "class": 1,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.74517011642456, 20.203911531845392]),
            {
              "class": 1,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.736962556839, 20.21196627625041]),
            {
              "class": 1,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7441508769989, 20.220624656256202]),
            {
              "class": 1,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.749933719635, 20.184640056730238]),
            {
              "class": 1,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.748131275177, 20.19497146299551]),
            {
              "class": 1,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7534098625183, 20.187076960875842]),
            {
              "class": 1,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.791175365448, 20.140567814732588]),
            {
              "class": 1,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.80660343170166, 20.13843237119176]),
            {
              "class": 1,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8164095878601, 20.141716106264774]),
            {
              "class": 1,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8060884475708, 20.155515097779773]),
            {
              "class": 1,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7719922065735, 20.12267754207342]),
            {
              "class": 1,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.76905250549316, 20.110608510519377]),
            {
              "class": 1,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.75403213500977, 20.095294209104246]),
            {
              "class": 1,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.69362878799438, 20.007994283538913]),
            {
              "class": 1,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.2595829963684, 19.998174794914945]),
            {
              "class": 1,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.24430513381958, 19.987366600432438]),
            {
              "class": 1,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.23404836654663, 19.97909863761054]),
            {
              "class": 1,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.15349626541138, 19.919838943567882]),
            {
              "class": 1,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13139486312866, 19.873472611435492]),
            {
              "class": 1,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1097011566162, 19.84130278972569]),
            {
              "class": 1,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.12042999267578, 19.844189056349823]),
            {
              "class": 1,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.13708114624023, 19.838133881267616]),
            {
              "class": 1,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.12306928634644, 19.838598118774204]),
            {
              "class": 1,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.09676218032837, 19.83730632408586]),
            {
              "class": 1,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.0891661643982, 19.800788596192472]),
            {
              "class": 1,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.1015043258667, 19.787180621127696]),
            {
              "class": 1,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.11682510375977, 19.786817187450595]),
            {
              "class": 1,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.51949977874756, 19.172374200963258]),
            {
              "class": 1,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3566493988037, 20.794161754239287]),
            {
              "class": 1,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.38299942016602, 20.8100484052582]),
            {
              "class": 1,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3302993774414, 20.726745249699512]),
            {
              "class": 1,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.33652210235596, 20.791107907987723]),
            {
              "class": 1,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.33429050445557, 20.786971889850044]),
            {
              "class": 1,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.34368896484375, 20.787615013202306]),
            {
              "class": 1,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.36233568191528, 20.794515761169972]),
            {
              "class": 1,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3781714439392, 20.79770525348062]),
            {
              "class": 1,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.34832382202148, 20.804264563436398]),
            {
              "class": 1,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.33868932724, 20.810823588092884]),
            {
              "class": 1,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.33182287216187, 20.811806414299138]),
            {
              "class": 1,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.31993532180786, 20.80452532521442]),
            {
              "class": 1,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32145881652832, 20.824863354260636]),
            {
              "class": 1,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32755279541016, 20.8364752578683]),
            {
              "class": 1,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3070821762085, 20.842030204210147]),
            {
              "class": 1,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3008165359497, 20.85035221304652]),
            {
              "class": 1,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2847661972046, 20.85857350465433]),
            {
              "class": 1,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.27944469451904, 20.862924591738505]),
            {
              "class": 1,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.29343509674072, 20.899452712761523]),
            {
              "class": 1,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.25075578689575, 20.926933160061814]),
            {
              "class": 1,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.25296592712402, 20.929558672173012]),
            {
              "class": 1,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.22910499572754, 20.92478862366619]),
            {
              "class": 1,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.27060413360596, 20.927995395694417]),
            {
              "class": 1,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.28682613372803, 20.928576615777306]),
            {
              "class": 1,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.29693269729614, 20.93731468727757]),
            {
              "class": 1,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30588054656982, 20.930079760707567]),
            {
              "class": 1,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.31669521331787, 20.92424747411868]),
            {
              "class": 1,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32193088531494, 20.933827536381607]),
            {
              "class": 1,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.33115768432617, 20.9355109986757]),
            {
              "class": 1,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3392686843872, 20.92476858112521]),
            {
              "class": 1,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.34529829025269, 20.934168238611242]),
            {
              "class": 1,
              "system:index": "603"
            })]),
    NonCropClass = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-159.59190845489502, 22.044082606044554]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.58924770355225, 22.027533976681404]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6117353439331, 21.988422201301926]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60169315338135, 21.99860901305075]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60336685180664, 22.011580222012277]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.63181972503662, 22.014749730569626]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6316909790039, 22.020846845939857]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.62836503982544, 22.026237551559447]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.62071537971497, 22.031787178045555]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6159303188324, 22.037644881135606]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60972905158997, 22.038907885518697]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6015965938568, 22.03690895212528]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.61030840873718, 22.033368483408296]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6006202697754, 22.027331581160364]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.59479451179504, 22.030643455613326]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5896339416504, 22.03746587172848]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.59612488746643, 22.04184159236164]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60458993911743, 22.04497412744222]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.61597323417664, 22.04775854484944]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60713267326355, 22.053635469679225]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.60931062698364, 22.05703622100323]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.52762126922607, 22.156013385708288]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.53895092010498, 22.17302385561612]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.49564933776855, 22.16813554339335]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.47423458099365, 22.191303841842373]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.47912693023682, 22.222590552336595]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.49586391448975, 22.20423517332371]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.54577445983887, 22.202983582774632]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5453667640686, 22.187407300371706]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.56377744674683, 22.18695031702442]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.57615852355957, 22.175863057911247]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5654296875, 22.155236027187613]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5514178276062, 22.138521542692498]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.52813625335693, 22.141940124254294]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.54206228256226, 22.124607854746536]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.56718921661377, 22.09948255015791]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5159912109375, 22.0969774941427]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.50247287750244, 22.066595181387527]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5390796661377, 22.05124247091686]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5117425918579, 22.028409193026153]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.48766708374023, 22.02614157589432]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.47972774505615, 22.047941022690885]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.435396194458, 22.025425478730366]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.39836025238037, 22.045912383757553]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4202470779419, 22.078526188230175]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.38995957374573, 22.090387508818438]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.38776016235352, 22.07419137226883]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.35540199279785, 22.060072471806492]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.33990955352783, 22.054185865805987]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.31922435760498, 22.07478791446803]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.32167053222656, 22.092563715829105]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.39342498779297, 21.99172503680947]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.39046382904053, 21.961280329259868]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.40205097198486, 21.930072708958924]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4009780883789, 21.9231854114157]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.39685821533203, 21.904273486975057]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.44595336914062, 21.872933892016224]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4663381576538, 21.897942408650888]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.43973064422607, 21.93361575531807]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.48826789855957, 21.947824540850288]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4887614250183, 21.959327731255478]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.47734594345093, 21.97333727982959]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.48296785354614, 21.978491013202248]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.48833227157593, 21.986668947396172]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.49998378753662, 21.989633580878575]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.48760271072388, 21.99210074541065]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5062494277954, 21.97516797102181]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.51333045959473, 21.981654795451377]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.52094793319702, 21.97319798714222]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.51931715011597, 21.98599244517051]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.49867486953735, 22.00278466427613]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4819164276123, 22.008255633242776]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.46850538253784, 22.00779806938343]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.45284128189087, 22.01599420693708]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.78466272354126, 22.032623747463234]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.73668336868286, 22.045750952586104]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.67076539993286, 22.05833999156446]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.65894222259521, 22.064783236679762]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.64417934417725, 22.071524465779472]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6417760848999, 22.08248076259142]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.63589668273926, 22.092640924351993]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.62381601333618, 22.099619398511994]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.64325666427612, 22.088167362003244]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.63293552398682, 22.105186025032996]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6375060081482, 22.11389337880756]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.63081121444702, 22.124727120767215]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.64194774627686, 22.107889735804342]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5667600631714, 22.14676971331995]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5642387866974, 22.148139895861423]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5742917060852, 22.15737123226514]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.56480741500854, 22.16875803138057]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.6637487411499, 21.958215579032547]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.58117961883545, 21.971548666222326]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5687770843506, 21.994072769359956]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.64035987854004, 21.999683341275844]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.502215385437, 22.084133393957732]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.47153091430664, 22.09646055287167]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.44599628448486, 22.097772735422822]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.35475826263428, 22.155297947038452]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.30261611938477, 22.13745055005681]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.3334722518921, 22.09801131275764]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.421706199646, 22.144605680251217]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4411039352417, 22.160544412805066]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.497709274292, 22.139597127289672]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.51650619506836, 22.129022930512082]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5331573486328, 22.086598911850025]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.55345630645752, 22.05736782600491]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.56143856048584, 22.037161039514473]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.54118251800537, 22.010903819178917]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5228147506714, 22.003702125145757]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.01189422607422, 21.447814753313125]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.95953750610352, 21.404829218647873]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.09720993041992, 21.435032273525593]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.1009864807129, 21.392842148964558]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.10072898864746, 21.3569010805309]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.08493614196777, 21.369610463985353]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06699752807617, 21.376564188079968]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.08133125305176, 21.42626969086104]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.07785511016846, 21.46701238686209]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06592464447021, 21.491093154163377]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.02528381347656, 21.496483825003427]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.98932075500488, 21.479113170712587]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9588508605957, 21.565201292434395]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.88366317749023, 21.520334092796606]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.99283981323242, 21.612288931686834]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.00331115722656, 21.665583215491615]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.03627014160156, 21.64165108975738]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.13892364501953, 21.534067164002536]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.12025547027588, 21.568060960978727]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.19243907928467, 21.561595319303866]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.23320865631104, 21.568819258083316]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.24994564056396, 21.568859168347345]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.26900005340576, 21.57340886640781]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.1869888305664, 21.50598689154671]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.18419933319092, 21.471365589894646]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.11424732208252, 21.453233042939]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.14478158950806, 21.450794238771277]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.12875270843506, 21.45343043203149]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.11765909194946, 21.44995544001188]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.12057733535767, 21.468208208499878]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.09881925582886, 21.471942355356003]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.08229684829712, 21.444183574878647]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.92760848999023, 21.324967537330448]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.01910400390625, 21.317211784198708]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.06339263916016, 21.33272288063915]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0961799621582, 21.30865599365738]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.07180404663086, 21.306417012920523]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.98133850097656, 21.35894409681398]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.95833587646484, 21.364859210472808]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.92494773864746, 21.385000778349724]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.89979934692383, 21.338559105777982]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8628921508789, 21.333522377260365]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.82126426696777, 21.303778170386373]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8573989868164, 21.298740248488865]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.80478477478027, 21.263469961349234]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.7900218963623, 21.30505761511003]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.7493381500244, 21.35071050053411]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.72624969482422, 21.375010267651994]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.74968147277832, 21.405539125143175]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.69144535064697, 21.326881777609458]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.68539428710938, 21.299375347596076]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.65792846679688, 21.30397343792393]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.7275800704956, 21.32312393555285]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.74749279022217, 21.326042268049815]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.7767188102007, 21.334477121984847]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.7876615524292, 21.355022556115806]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.7979612350464, 21.389112026625767]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8003215789795, 21.40701281197035]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.80555725097656, 21.42351315643468]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.80731678009033, 21.469208973458148]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.78525829315186, 21.44784077119558]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.82877445220947, 21.455829250806428]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.83705711364746, 21.443047473377945]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.85473823547363, 21.447241617582826]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.87761211395264, 21.43457892899637]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.91645050048828, 21.427108625791824]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8933620452881, 21.40121927087758]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.948637008667, 21.426509387047453]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.96533107757568, 21.482986806549917]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.92953968048096, 21.483106608077083]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9568338394165, 21.507743692980085]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.94756412506104, 21.531498354719254]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9795789718628, 21.554530677497773]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9339599609375, 21.403736492804473]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8927183151245, 21.35422317672010]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.82898902893066, 21.37148880132668]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.77568817138672, 21.370329830069416]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.75315761566162, 21.393547470068373]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.7495527267456, 21.361097697008628]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.74766445159912, 21.30337369517141]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.69432067871094, 21.31216967683051]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.03614139556885, 21.662017311640124]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.011314868927, 21.65457865045945]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.02030563354492, 21.6479174327288]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.00790309906006, 21.638284050274706]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.020498752594, 21.629627419380224]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.03221464157104, 21.630684593353976]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0428147315979, 21.619274684434842]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9976463317871, 21.622785521577445]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.97586679458618, 21.62978699330586]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.96417236328125, 21.64833626086417]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9743218421936, 21.6778506106038]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.98805475234985, 21.66766086570034]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0357551574707, 21.679206530187834]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.0470848083496, 21.664649668220097]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-158.04783582687378, 21.649832065713504]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9798150062561, 21.643888642892968]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.93842315673828, 21.612786256765087]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9123306274414, 21.55819529291295]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.91919708251953, 21.548428314605076]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.92177334427834, 21.58674249855912]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.87962913513184, 21.56085462151238]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8804874420166, 21.567360206897156]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8846287727356, 21.56775815354944]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.88415670394897, 21.579022471811083]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8983509540558, 21.583641686589406]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.89227843284607, 21.589248397303308]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.8902292251587, 21.590635076965473]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.90852189064026, 21.592650228051664]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.91507720947266, 21.593398420571674]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.9193150997162, 21.614186649772897]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.91630029678345, 21.619692436524243]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.93155670166016, 21.627292471548728]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.92563438415527, 21.623761796317616]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.93290853500366, 21.618834664694948]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.161226272583, 21.1114907273082]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.18066692352295, 21.110649991545564]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.14414596557617, 21.129345228460693]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.10951328277588, 21.133628387727814]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.1328592300415, 21.15820412323976]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.09779739379883, 21.19025851873037]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.14702129364014, 21.18369613693306]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.1372365951538, 21.19786091379701]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.15938091278076, 21.199941501110064]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.18894958496094, 21.192539278319632]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.23001956939697, 21.193339536499845]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.24246501922607, 21.161045679773164]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.2110080718994, 21.13170698579212]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.20929145812988, 21.11489365673619]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.23177909851074, 21.11465345251302]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.26250648498535, 21.10640620500182]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.281174659729, 21.116575075409557]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.2615623474121, 21.133548329811074]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.17950820922852, 21.17897424299548]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.12655067443848, 21.187097407769873]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0042848587036, 21.16342461674699]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.00754642486572, 21.175970635611154]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.99503660202026, 21.15702113493778]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.00971364974976, 21.144713665699236]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.02516317367554, 21.154179501154474]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.94684267044067, 21.150337205375724]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.93244457244873, 21.157221247937287]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.93469762802124, 21.166826353775335]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.92665100097656, 21.15120005382292]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.90570831298828, 21.144956146946768]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.91596508026123, 21.13314803957876]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.93188667297363, 21.13218733861089]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.8913745880127, 21.13482925129011]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.85094833374023, 21.131346720156586]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.82305335998535, 21.113332322334607]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.79327011108398, 21.114052940253806]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.81026458740234, 21.091351795095985]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.7871332168579, 21.072932090889722]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.7735719680786, 21.0821422283496]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.81494235992432, 21.06059762201021]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.83047771453857, 21.054309853127833]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.83120727539062, 21.079256789486692]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.84024095535278, 21.076533798881194]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.8579649925232, 21.079256789486692]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.87515258789062, 21.079156680421136]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.74893856048584, 21.118874660605634]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.73361778259277, 21.127781720187766]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.72293186187744, 21.139530214084367]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.719069480896, 21.14753546852357]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.7317509651184, 21.15522010577044]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.7148208618164, 21.155360186602525]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.74402475357056, 21.15175806595231]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.7620062828064, 21.15319892472764]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.76567554473877, 21.147015140130073]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.75715684890747, 21.139590255102508]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.75373435020447, 21.09795481682214]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.75877690315247, 21.106162497543455]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.77080392837524, 21.102389022634817]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.83777332305908, 21.10256267097521]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.8558943271637, 21.063878083527847]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.85635566711426, 21.04462201247404]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.8908166885376, 21.08726762289247]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9214153289795, 21.055871807777873]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.89897060394287, 21.05162645687086]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9602108001709, 21.090190620304217]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.98033809661865, 21.088869272432106]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.99904918670654, 21.1000002596758]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.02439069747925, 21.103040791790168]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.00048685073853, 21.137348707258894]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.1017026901245, 21.107727396839337]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.08651065826416, 21.11181100634585]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0866823196411, 21.100680904490368]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.05973148345947, 21.097918267934222]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.05745697021484, 21.117073167793688]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.03460454940796, 21.13048375608876]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0232105255127, 21.17282924788557]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0399045944214, 21.18063262065116]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.05410957336426, 21.1795521782112]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0647954940796, 21.17839169420479]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0698380470276, 21.187575275363134]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.08719730377197, 21.19151663740108]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.09964275360107, 21.18073266121849]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.11858987808228, 21.19587802211192]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.1314001083374, 21.174349937440834]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.156720161438, 21.185834640397466]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.15637683868408, 21.177671389206548]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.1720838546753, 21.180192441350815]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.18291997909546, 21.174730107386882]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.19746828079224, 21.172529109941895]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.96892261505127, 21.195180152941617]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.96630477905273, 21.211064182876054]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.97111129760742, 21.214504830716738]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9733428955078, 21.1457743496618]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.96529626846313, 21.149936960498913]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.98619604110718, 21.156460817100175]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.01597929000854, 21.160843246470133]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9719696044922, 21.13104417218354]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9527006149292, 21.143913144472307]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.02192306518555, 20.873908290185522]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.93815231323242, 20.90790811639775]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.97832107543945, 20.82738663240789]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.92562103271484, 20.749390534975735]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.92090034484863, 20.827492981563303]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.8945074081421, 20.822799915778766]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.89214706420898, 20.844378786109722]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9294834136963, 20.862305345710908]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9252347946167, 20.875859132842187]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9019317626953, 20.889171129876377]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.94175720214844, 20.884961137916445]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.960768699646, 20.877663578072323]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.95446014404297, 20.901479706346063]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.98840618133545, 20.925131714755285]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.00098037719727, 20.895385703292998]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.0383596420288, 20.89113575239074]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.03694343566895, 20.876340309913928]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.01286792755127, 20.892338608965762]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-157.02986240386963, 20.914348465203222]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9748878479004, 20.904085618942386]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.91227436065674, 20.883958780636167]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.8854522705078, 20.89983595358217]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.87004566192627, 20.87413490234625]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.86416625976562, 20.857372747089435]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.82940483093262, 20.837199542464113]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.82682991027832, 20.79050605665201]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9111156463623, 20.755356065902177]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9702959060669, 20.800576064080143]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.9018030166626, 20.831303482964966]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.91141605377197, 20.82945841011551]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.64113521575928, 20.88832914092826]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.51702404022217, 20.837039147695457]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.50123119354248, 20.860300283002378]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.48582458496094, 20.87060622206342]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.46543979644775, 20.879147184605728]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.43123626708984, 20.900437328633554]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.47436618804932, 20.885763089403614]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.62538528442383, 20.92481573198152]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.62538528442383, 20.97379167871314]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.68821334838867, 20.929225025027986]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.66697025299072, 20.98773137328714]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.65851593017578, 20.999430834506853]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6458559036255, 21.007443635033102]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.63783073425293, 21.004238566450802]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.59500122070312, 20.974868921713174]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.54916763305664, 20.98111997106603]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.53075695037842, 20.98168094988728]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.57139778137207, 21.0084051421829]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.55723571777344, 21.008084640488114]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.54290199279785, 20.994502748549948]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.54534816741943, 20.952306870801905]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.53311729431152, 20.944691911516497]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.52783870697021, 20.930262505307102]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.5363359451294, 20.876500701928702]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.56564712524414, 20.89354141674797]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.57015323638916, 20.90957793261704]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.58710479736328, 20.888329180083367]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.60680294036865, 20.890374002193706]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6254711151123, 20.903564440044402]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.60362720489502, 20.960282123201095]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.62963390350342, 21.01381350443539]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.6177463531494, 21.02066381510039]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.59096717834473, 21.02695300449509]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.5828561782837, 21.009727204396086]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.57148361206055, 21.016016855059863]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.58697605133057, 20.988252259208096]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.5601110458374, 20.987050212034077]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.53856754302979, 20.98624884187691]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.54466152191162, 20.96665400419101]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.55779361724854, 20.94413079392772]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.56431674957275, 20.930262505307102]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.57448768615723, 20.919439538426886]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.59010887145996, 20.92873932020057]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.387677192688, 20.783244000788518]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.25240802764893, 20.80430701169225]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.24708652496338, 20.78557110645534]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30291938781738, 20.77746620404781]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.29918575286865, 20.727663673862498]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.314377784729, 20.71305289225377]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32459163665771, 20.713414164834433]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2781572341919, 20.697356774271103]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.257643699646, 20.707794271626433]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.23584270477295, 20.70201359263944]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2321949005127, 20.73336310205153]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.21700286865234, 20.718190910182976]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2032699584961, 20.715100092154586]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.17769241333008, 20.726499679749526]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.15636348724365, 20.73276105991438]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.13190174102783, 20.73195833333998]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.13666534423828, 20.71048381795069]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.08598232269287, 20.741470369552776]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.1173963546753, 20.82564790120217]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.14765167236328, 20.849351955265305]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.17138385772705, 20.849392060484153]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.1973476409912, 20.85637020577117]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.21065139770508, 20.85388377733521]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.23528480529785, 20.817424811112314]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.19657516479492, 20.748694301317144]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2213373184204, 20.748774565287686]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.25614166259766, 20.727824224072386]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.45235061645508, 20.756685021154073]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.44230842590332, 20.71743291139991]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.38797760009766, 20.7206441001828]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.42677307128906, 20.697522021948647]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.43638610839844, 20.671425164530014]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.35252952575684, 20.605721539697615]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3705539703369, 20.589331376405216]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3222312927246, 20.5960804805718]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.289701461792, 20.59423254127155]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2600040435791, 20.631267396018927]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.26429557800293, 20.682667437939124]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.20558738708496, 20.65624677519003]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.16910934448242, 20.681864446021066]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.1084270477295, 20.661145786160358]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.12988471984863, 20.681302349150624]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.15863800048828, 20.64556477755251]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.06267929077148, 20.697281148405594]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.02800369262695, 20.728430950244686]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.00783348083496, 20.7017773914535]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.9893798828125, 20.735173878288883]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.99839210510254, 20.773699130476725]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.0197639465332, 20.770408815367663]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.04748725891113, 20.76495154938822]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.0849952697754, 20.77971781409416]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.24086380004883, 20.80025511803883]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.1828851699829, 20.79499952946621]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.11881256103516, 20.765789565077302]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.05903148651123, 20.783364369202793]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.14044189453125, 20.784079093868094]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7373809814453, 19.9614282041666]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.79059600830078, 19.935126220560942]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.82029342651367, 19.99860525510903]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7762622833252, 20.03562162730341]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.74193000793457, 19.993039949387633]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.67523956298828, 20.023445089665547]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.66545486450195, 20.040217823358923]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.71128845214844, 20.067389075709954]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.69034576416016, 20.063196785841875]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.66296577453613, 20.07367730040765]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.6421947479248, 20.070130127732657]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.70176124572754, 20.11381924881073]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.6894016265869, 20.160396790888132]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.84063529968262, 20.144603886215968]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8582305908203, 20.160396790888132]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.80570220947266, 20.203577386841147]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.88621139526367, 20.2297538220022]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.79505920410156, 20.231606141285166]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.82304000854492, 20.21799510673832]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.76287269592285, 20.19761659852812]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.72965621948242, 20.195877694018694]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.733003616333, 20.191688848709642]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.73761701583862, 20.179202199367488]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7449769973755, 20.151043149615223]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7602334022522, 20.156079118180568]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.74759483337402, 20.164096044916384]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.78396558761597, 20.168688470651418]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.74021339416504, 20.03118661319314]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.70545196533203, 20.02602566612173]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.65532684326172, 19.98287674910381]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.59833526611328, 19.949397952608063]),
            {
              "class": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.66468238830566, 19.92002757105534]),
            {
              "class": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.69884300231934, 19.87676894516732]),
            {
              "class": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.74055671691895, 19.882257634407956]),
            {
              "class": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.77248573303223, 19.84391355331736]),
            {
              "class": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8048439025879, 19.882984064324674]),
            {
              "class": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.85471153259277, 19.850856537264654]),
            {
              "class": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.84235191345215, 19.822759761327994]),
            {
              "class": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.83256721496582, 19.771074638165167]),
            {
              "class": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8711051940918, 19.750719018805107]),
            {
              "class": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.83711624145508, 19.680908622283628]),
            {
              "class": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7759189605713, 19.622063268333413]),
            {
              "class": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.88749885559082, 19.655045191076834]),
            {
              "class": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.93899726867676, 19.825262833165034]),
            {
              "class": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.98706245422363, 19.820418142310572]),
            {
              "class": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.85591316223145, 19.869262047697575]),
            {
              "class": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.8714485168457, 19.920753827630488]),
            {
              "class": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.86509704589844, 19.93632719337663]),
            {
              "class": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.5660629272461, 20.083109203950603]),
            {
              "class": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.62880516052246, 20.09737684256704]),
            {
              "class": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.6645107269287, 20.157496212411832]),
            {
              "class": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.48812866210938, 19.838451802896063]),
            {
              "class": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.40573120117188, 19.831346795547873]),
            {
              "class": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.44933319091797, 19.883335178805954]),
            {
              "class": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.49602508544922, 19.87332631786183]),
            {
              "class": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.51859855651855, 19.766228337234164]),
            {
              "class": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.564603805542, 19.794254300478837]),
            {
              "class": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.49396514892578, 19.805237194411568]),
            {
              "class": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.47173500061035, 19.814200612150145]),
            {
              "class": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.38822174072266, 19.74643758548499]),
            {
              "class": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.37723541259766, 19.68579328206807]),
            {
              "class": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.33552169799805, 19.69359166600063]),
            {
              "class": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.31749725341797, 19.761377136300766]),
            {
              "class": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.34607887268066, 19.80272909531674]),
            {
              "class": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.23990631103516, 19.914051291678703]),
            {
              "class": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.11579513549805, 19.703221868872728]),
            {
              "class": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.07923126220703, 19.68867622903513]),
            {
              "class": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.06515502929688, 19.70483796946907]),
            {
              "class": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.05382537841797, 19.721321262832785]),
            {
              "class": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.04318237304688, 19.73069335795647]),
            {
              "class": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.23415565490723, 19.690157171654494]),
            {
              "class": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.24278163909912, 19.69884422962632]),
            {
              "class": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.24694442749023, 19.65006938817144]),
            {
              "class": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.30011653900146, 19.660940957190757]),
            {
              "class": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.42015075683594, 19.49576027324205]),
            {
              "class": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.22960662841797, 19.476664460707926]),
            {
              "class": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.14446258544922, 19.391838939082643]),
            {
              "class": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.06549835205078, 19.356535895126587]),
            {
              "class": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.23441314697266, 19.299516685683788]),
            {
              "class": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.31578063964844, 19.38600960598445]),
            {
              "class": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.51834106445312, 19.426162997873334]),
            {
              "class": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.5276107788086, 19.538474946570556]),
            {
              "class": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.65017700195312, 19.41256376574351]),
            {
              "class": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7363510131836, 19.249608569681122]),
            {
              "class": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.64983367919922, 19.13644896120256]),
            {
              "class": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.7257080078125, 18.99951625160238]),
            {
              "class": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.5067539215088, 19.28056715277957]),
            {
              "class": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.45903205871582, 19.254963874751788]),
            {
              "class": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.45804500579834, 19.165807394101414]),
            {
              "class": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.5965757369995, 19.18720935661483]),
            {
              "class": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.66665649414062, 19.268731007824577]),
            {
              "class": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.69446563720703, 19.52423797640724]),
            {
              "class": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-155.70545196533203, 19.743153864504727]),
            {
              "class": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3910675048828, 20.71984138776691]),
            {
              "class": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.35870933532715, 20.76880383597276]),
            {
              "class": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.41467094421387, 20.760216487296823]),
            {
              "class": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3830852508545, 20.785415358568475]),
            {
              "class": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3563060760498, 20.747133887586664]),
            {
              "class": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3787078857422, 20.714944271673314]),
            {
              "class": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.39999389648438, 20.695595101302228]),
            {
              "class": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3563060760498, 20.729554870835887]),
            {
              "class": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.31699562072754, 20.710689271799414]),
            {
              "class": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.29982948303223, 20.73308689200114]),
            {
              "class": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.24455451965332, 20.74986286684375]),
            {
              "class": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2522792816162, 20.764951627762596]),
            {
              "class": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.22764587402344, 20.779798139955215]),
            {
              "class": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.24309539794922, 20.80868446554619]),
            {
              "class": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.27262115478516, 20.823526675225555]),
            {
              "class": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2812900543213, 20.804432103714092]),
            {
              "class": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32102966308594, 20.847271169049318]),
            {
              "class": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.33931159973145, 20.83596091439716]),
            {
              "class": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.35089874267578, 20.829784033586478]),
            {
              "class": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3237762451172, 20.816065639017953]),
            {
              "class": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.4060878753662, 20.688845667773]),
            {
              "class": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.40625953674316, 20.6632291747815]),
            {
              "class": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.42106533050537, 20.619775656477124]),
            {
              "class": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.43067836761475, 20.605716871526365]),
            {
              "class": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.404070854187, 20.616321332419908]),
            {
              "class": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.40119552612305, 20.607444163584375]),
            {
              "class": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.41767501831055, 20.648491711085974]),
            {
              "class": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.43368244171143, 20.66555812545144]),
            {
              "class": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.43715858459473, 20.652105935248507]),
            {
              "class": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.38832092285156, 20.632788917729584]),
            {
              "class": 2,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.37033939361572, 20.609934643244827]),
            {
              "class": 2,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.37046813964844, 20.596196329111432]),
            {
              "class": 2,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.3508129119873, 20.628732434033722]),
            {
              "class": 2,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32347583770752, 20.620016652905893]),
            {
              "class": 2,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.34583473205566, 20.65230672296034]),
            {
              "class": 2,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.32399082183838, 20.664995968213926]),
            {
              "class": 2,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.33167266845703, 20.674351599975346]),
            {
              "class": 2,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.31566524505615, 20.68828359676141]),
            {
              "class": 2,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30733966827393, 20.672464458856467]),
            {
              "class": 2,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.28721237182617, 20.66447396320208]),
            {
              "class": 2,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30789756774902, 20.660659256746445]),
            {
              "class": 2,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.29146099090576, 20.688444188691484]),
            {
              "class": 2,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.24906063079834, 20.703659502852997]),
            {
              "class": 2,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2440824508667, 20.689809213234035]),
            {
              "class": 2,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2169599533081, 20.682622622632966]),
            {
              "class": 2,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.23614311218262, 20.682140827849693]),
            {
              "class": 2,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2140417098999, 20.700207085251616]),
            {
              "class": 2,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.18507385253906, 20.70265590119021]),
            {
              "class": 2,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2424087524414, 20.72666023119366]),
            {
              "class": 2,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2551975250244, 20.741911841946045]),
            {
              "class": 2,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.27309322357178, 20.720438738230733]),
            {
              "class": 2,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.282320022583, 20.711045806676214]),
            {
              "class": 2,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30206108093262, 20.693783773571703]),
            {
              "class": 2,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.28283500671387, 20.735530433917546]),
            {
              "class": 2,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2689733505249, 20.75210548249813]),
            {
              "class": 2,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.2348985671997, 20.774737742774473]),
            {
              "class": 2,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-156.30073070526123, 20.771327072376245]),
            {
              "class": 2,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.45456862449646, 22.066979473962448]),
            {
              "class": 2,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.45993304252625, 22.070002082755792]),
            {
              "class": 2,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.46394562721252, 22.068063245733587]),
            {
              "class": 2,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4529914855957, 22.065259342070824]),
            {
              "class": 2,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4481635093689, 22.0681427882885]),
            {
              "class": 2,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4438934326172, 22.065289171125915]),
            {
              "class": 2,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.43962335586548, 22.062346007361004]),
            {
              "class": 2,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4375741481781, 22.067059017127324]),
            {
              "class": 2,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.45015907287598, 22.058637136035145]),
            {
              "class": 2,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.455748796463, 22.05622084363622]),
            {
              "class": 2,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.4598364830017, 22.05775215822946]),
            {
              "class": 2,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.47139143943787, 22.056270561902945]),
            {
              "class": 2,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.53693389892578, 22.05909197692229]),
            {
              "class": 2,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-159.5244026184082, 22.00069197254243]),
            {
              "class": 2,
              "system:index": "615"
            })]),
    cropIs = /* color: #0b4a8b */ee.Geometry.MultiPolygon(
        [[[[-159.7858428955078, 21.969867213054357],
           [-159.70687866210938, 21.924648511822525],
           [-159.60525512695312, 21.87559227137177],
           [-159.4720458984375, 21.818232428521803],
           [-159.35325622558594, 21.857749454358817],
           [-159.25369262695312, 21.976234888470255],
           [-159.2516326904297, 22.185571771339674],
           [-159.3450164794922, 22.244689667635377],
           [-159.5825958251953, 22.24977391395513],
           [-159.70481872558594, 22.230707038861695],
           [-159.8064422607422, 22.139149965217246]]],
         [[[-158.34182739257812, 21.58991501566988],
           [-158.14956665039062, 21.22553105402484],
           [-157.79388427734375, 21.206327847433005],
           [-157.64694213867188, 21.21400942987876],
           [-157.54119873046875, 21.329185133874653],
           [-157.77053833007812, 21.587361107829878],
           [-157.91748046875, 21.762199431194862],
           [-158.02459716796875, 21.75709767079433],
           [-158.17428588867188, 21.642260192867738],
           [-158.302001953125, 21.64353666769553]]],
         [[[-157.32147216796875, 21.243601163875933],
           [-157.34893798828125, 21.06173309822807],
           [-157.1319580078125, 21.05916998293115],
           [-156.895751953125, 21.002770284013955],
           [-156.71722412109375, 21.04122693987788],
           [-156.65130615234375, 21.210318094317138],
           [-157.0001220703125, 21.266638887577475],
           [-157.25555419921875, 21.26407931845442]]],
         [[[-156.85523986816406, 20.724723607238325],
           [-156.77764892578125, 20.769029861740613],
           [-156.7961883544922, 20.853753439226885],
           [-156.90536499023438, 20.949972325784977],
           [-157.0269012451172, 20.9429183719557],
           [-157.09487915039062, 20.905077858377496],
           [-157.0323944091797, 20.83578575167619],
           [-157.0008087158203, 20.778017952120774],
           [-156.98226928710938, 20.713163320389853],
           [-156.88819885253906, 20.697105903253473]]],
         [[[-156.6808319091797, 20.998699645039697],
           [-156.71035766601562, 20.92367862691281],
           [-156.6822052001953, 20.830651732678284],
           [-156.60049438476562, 20.77159794213916],
           [-156.54144287109375, 20.760041236600294],
           [-156.49337768554688, 20.772881965966835],
           [-156.47415161132812, 20.709309695410738],
           [-156.45904541015625, 20.60201120069112],
           [-156.4061737060547, 20.560870766844964],
           [-156.27777099609375, 20.575014042034805],
           [-156.1644744873047, 20.610366495368684],
           [-156.08413696289062, 20.61100919136692],
           [-155.96466064453125, 20.691967170595248],
           [-155.93856811523438, 20.7741659788794],
           [-156.1260223388672, 20.87428531123123],
           [-156.21253967285156, 20.932016153190748],
           [-156.27090454101562, 20.96087323679311],
           [-156.34368896484375, 20.9506135778297],
           [-156.41510009765625, 20.92367862691281],
           [-156.4624786376953, 20.919188997529872],
           [-156.50779724121094, 20.97305566776996],
           [-156.5489959716797, 21.026262007807336],
           [-156.60804748535156, 21.044206853829703],
           [-156.65199279785156, 21.030107513896233]]],
         [[[-156.09100341796875, 19.779928373208435],
           [-156.08551025390625, 19.70495933417709],
           [-156.0552978515625, 19.606670855540536],
           [-156.01409912109375, 19.490198900858836],
           [-155.94268798828125, 19.306261672159923],
           [-155.96466064453125, 19.088378484421067],
           [-155.90423583984375, 19.00010589051083],
           [-155.77789306640625, 18.94296335169976],
           [-155.71746826171875, 18.859812016758436],
           [-155.66802978515625, 18.83381875947144],
           [-155.58013916015625, 18.919581216214898],
           [-155.49774169921875, 19.04424805559218],
           [-155.3851318359375, 19.127307333330673],
           [-155.27252197265625, 19.207731208123754],
           [-155.1544189453125, 19.20513750240779],
           [-154.95941162109375, 19.314037869800657],
           [-154.78912353515625, 19.448766419709624],
           [-154.7479248046875, 19.53420929572923],
           [-154.81658935546875, 19.58855852064595],
           [-154.93743896484375, 19.64806281768278],
           [-154.951171875, 19.73598527487816],
           [-155.050048828125, 19.76183562240812],
           [-155.028076171875, 19.826443152221877],
           [-155.11871337890625, 19.97365003079896],
           [-155.357666015625, 20.10782425629321],
           [-155.64056396484375, 20.218689230997512],
           [-155.81634521484375, 20.337201556865644],
           [-155.98114013671875, 20.321748566801677],
           [-155.97564697265625, 20.205802004442045],
           [-155.91522216796875, 20.025269063150137],
           [-155.950927734375, 19.92717844460102],
           [-156.0552978515625, 19.83677792231201]]]]),
    input = ee.Image("users/images/input/Hawaii_2010_InputTOA4season"),
    prev2 = ee.Image("users/images/Hawaii_2010_v6");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var input=input.clip(cropIs)

var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw");

print(input);

function clean_output_noise(image){
  //image=image.clip(studyArea)
  function make_binary_gt(in_img,thresh){
    in_img=in_img.unmask()
    var image1=in_img.updateMask(in_img.gt(ee.Number(thresh).subtract(1))).multiply(0).add(1)
    image1=image1.unmask()
    var image2=in_img.multiply(0)
    var out_img=in_img.multiply(image2).add(image1)
    return out_img.updateMask(out_img.eq(1))
  }
 // var kernel = ee.Kernel.square({radius: 45,units:'meters'});
  var temp_img=image
  //.unmask().focal_mode({kernel: kernel, iterations: 2})
  //classified2=classified2.updateMask(classified2.eq(1))
              //.focal_max({kernel: kernel, iterations: 2});
  temp_img=temp_img.connectedPixelCount(1, true)
  return make_binary_gt(temp_img,1)
}

//add layer to map
//Map.addLayer(image, {palette: '00FF00'}, 'cropland');
//print(input1)
//print(input2)

//create bounds for training samples inside area of interest
function buffer1(geometry) {
  return geometry.buffer(60).bounds();
} 

//buffer function of 1km********************************************************
function buffer2(geometry) {
  return geometry.buffer(2000);
}

var studyArea = hawaii
studyArea=buffer2(studyArea);

//visual parameters for FCC display 
var vizParams = {
  bands: ['B4_1', 'B3_1', 'B2_1'],
  min: 0,
  max: 1,
  gamma: [1.5,1.6, 1.7]
};
//var prev2= ee.Image(clean_output_noise(prev)).reproject('EPSG:4326',null, 30)

//add all max val to map
//Map.addLayer(input.clip(studyArea),vizParams,'FCC');
Map.addLayer(prev2.clip(studyArea), {palette: '00ff00'}, 'cropland1');
Map.addLayer(prev.clip(studyArea), {palette: 'ffff00'}, 'cropland0');


//var input=ee.ImageCollection([input1,input2]).mosaic()


//add layer to map
//Map.addLayer(input1.select([0]), {min:0,max:0.5}, 'inp1');
//Map.addLayer(input2.select([0]), {min:0,max:0.5}, 'inp2');


throw('stop')


//var studyArea = zones.filterMetadata('name','equals','CenAM1');
var studyArea = hawaii
studyArea=buffer1(studyArea);


//print(CropSamples);
var CropSamplesArea = Cropclass.filterBounds(studyArea).map(buffer1);
print('Crop:',CropSamplesArea);

//print(NonCropSamples);
var NonCropSamplesArea = NonCropClass.filterBounds(studyArea).map(buffer1);
print('Non-crop:',NonCropSamplesArea);

//print(NonCropSamples);
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


print(input);

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
//studyArea = zones.filterMetadata('name','equals','CenAM1');
classified = classified.updateMask(classified.eq(1)).clip(studyArea);


Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_Hawaii_v1',
  folder: 'data',
  fileNamePrefix: 'RFtable_Hawaii_2010_v1',
  fileFormat: 'CSV'
});


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
              //.focal_max({kernel: kernel, iterations: 2});
  temp_img=temp_img.connectedPixelCount(100, true)
  return make_binary_gt(temp_img,60)
}

var classified2=classified//clean_output_noise(classified)
//Map.addLayer(prev2, {palette: '00FF00'}, 'prev2');
Map.addLayer(classified2, {palette: '00ff00'}, 'cropland_final');
//Map.addLayer(prev3, {palette: '0000ff'}, 'prev3');


Export.image.toAsset({
  image: classified2,
  scale: 30,
  maxPixels:9990000000000,
  description: 'Hawaii_v1_asset',
  assetId: 'Hawaii_2010_v1',
  region: studyArea, 
});

Export.image.toDrive({
  image: classified2,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'Hawaii_v1_drive',
  fileNamePrefix: 'Hawaii_2010_v1',
  region: studyArea, 
});
