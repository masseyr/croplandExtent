/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var input = ee.Image("users/images/input/Puerto_Rico_2010_InputTOA3season"),
    Cropclass = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-67.1469783782959, 18.390207874831724]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.13697910308838, 18.395013199143015]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.14483261108398, 18.3818593233366]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15702056884766, 18.376524183594004]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.2308349609375, 18.321538863829765]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.20972061157227, 18.3720489008179]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16766357421875, 18.293752054450724]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.12955474853516, 18.27533370768838]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.14783668518066, 18.262129972591097]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.17135429382324, 18.269384000775155]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.13951110839844, 18.129140270399855]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16551780700684, 18.162499156040656]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1198558807373, 18.106951865963172]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.10646629333496, 18.11649648744408]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.07659721374512, 18.100017413160042]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.08938598632812, 18.0980594003481]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.06629753112793, 18.10197540410178]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.00261116027832, 18.027882858771427]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.0246696472168, 18.018415041689376]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.01265335083008, 18.014660421567033]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.04741477966309, 18.01335444798519]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.06947326660156, 17.982579645651565]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.07144737243652, 17.978252784140665]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.08209037780762, 18.021516624037158]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.97995185852051, 18.004783756181563]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.95943832397461, 17.997763641036215]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.95591926574707, 18.021761483475217]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92493438720703, 18.015231781965063]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90982818603516, 17.983232747611066]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89841270446777, 17.99506980172885]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.88373565673828, 18.004620500864334]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90098762512207, 17.976456697275555]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.91180229187012, 18.043797438290536]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.91652297973633, 18.03604436140315]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87360763549805, 18.0522030197269]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83850288391113, 18.02233282084004]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83996200561523, 18.02837255960123]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83876037597656, 18.00274305385027]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.78863525390625, 18.01164034296918]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.80665969848633, 17.993518784676684]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81944847106934, 17.981599988181586]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81532859802246, 17.973925816594857]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.84313774108887, 17.988620746566575]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9752311706543, 17.969517099120054]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.96175575256348, 17.97270118388992]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.04200744628906, 18.030249733495783]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.12783813476562, 17.97449730895118]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1542739868164, 17.99596775273613]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16285705566406, 17.966577893008896]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15470314025879, 18.032698191099144]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.13324546813965, 18.022740917822922]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.08930015563965, 18.033677564603234]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.96808576583862, 18.0688834381586]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.98535919189453, 18.067108675098325]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.96087598800659, 18.045626500539274]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.97177648544312, 18.041790850356676]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.95422410964966, 18.034098895576903]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.96214199066162, 18.02008112674078]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9755744934082, 18.017999790809185]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.97980165481567, 18.01153116824686]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9959807395935, 18.015632751430882]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87789916992188, 18.006125843876326]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87944412231445, 18.01718595522899]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.78717613220215, 18.005840149147076]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.55637741088867, 18.016945852041204]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.5511417388916, 18.014252305862577]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.53449058532715, 17.98984526884175]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.5800666809082, 17.983640935108642]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.51466369628906, 18.000130920399542]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.51886940002441, 18.002824682397048]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.50771141052246, 17.992865720785375]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.48822784423828, 18.013517695212308]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.54487609863281, 18.02820932614264]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.51105880737305, 18.030331349297963]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.4724349975586, 18.013109576860945]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.44393920898438, 18.001845137341405]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.4207649230957, 17.999804400997377]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.42394065856934, 17.980865241511324]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.43209457397461, 17.969762030755394]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.3973331451416, 17.97710982188577]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.412353515625, 17.958984717599538]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.37810707092285, 18.002987939377235]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.38368606567383, 17.95792327999602]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.3797378540039, 17.982171455699795]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.38136863708496, 17.991641219473085]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.3643741607666, 17.99621264767202]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.3515853881836, 17.998416686793185]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.35124206542969, 17.98764112262814]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.34978294372559, 17.982906196933357]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.33793830871582, 17.996539173724255]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.33278846740723, 18.001273733545812]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.30858421325684, 17.976211774923936]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.2958812713623, 17.992702454434802]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.30618095397949, 17.991641219473085]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.27081871032715, 17.965271563486855]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.28515243530273, 17.965598146772777]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.2611198425293, 17.983396022723365]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.25579833984375, 17.990988148631416]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24781608581543, 17.97890590210735]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.2091064453125, 17.97433402560951]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24618530273438, 17.991886120415458]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.1622428894043, 17.98168162651175]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.18610382080078, 17.974660592141884]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.1333179473877, 17.955099210575085]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.1280608177185, 17.962182257864924]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.12415552139282, 17.95081250233497]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.12040042877197, 17.95416022623002]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.06924533843994, 17.986860819729678]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.04941844940186, 17.975839627038443]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.03765964508057, 17.983227984089282]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.02118015289307, 17.98902415823716]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.01375579833984, 17.995391566703354]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.00573062896729, 17.993228306269888]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.0197639465332, 18.004697365599785]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.973801612854, 17.980044089127905]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.9648323059082, 17.980738019846665]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.91148853302002, 18.00228933316032]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.90535163879395, 18.01020714659238]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.92015743255615, 18.003921901116527]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.9300708770752, 18.016777845375014]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.90251922607422, 17.992983407190703]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.92105865478516, 18.009146016977873]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.89239120483398, 18.01122745750404]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8586597442627, 18.05383036325886]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.87007522583008, 18.059052998021816]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.84557056427002, 18.062888271579222]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.86831569671631, 18.068641024925782]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.88088989257812, 18.07357763465492]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8875846862793, 18.058889793034762]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.89715480804443, 18.05309591779906]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.9038496017456, 18.05289190462676]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.91496467590332, 18.049056412921622]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.90419292449951, 18.058032964365886]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.91818332672119, 18.053707955895327]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.88659763336182, 18.071252121655643]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.88930130004883, 18.084715075535872]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.86865901947021, 18.092302830764265]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.85338115692139, 18.07398559280013]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.84896087646484, 18.066886639199748]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.82471370697021, 18.070966552584046]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.79647541046143, 18.119836281056756]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.79188346862793, 18.140921937126464]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.77759265899658, 18.19213684335233]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.76712131500244, 18.190954503057466]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.77145576477051, 18.199067642420484]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.79235553741455, 18.180394625608447]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.7956600189209, 18.179742257000534]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8031702041626, 18.185164996911432]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.77506065368652, 18.194216112007627]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.76626300811768, 18.209544856511943]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.75759410858154, 18.22780713124908]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.7357931137085, 18.2329430507418]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.71038722991943, 18.2329430507418]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.70103168487549, 18.25511543805705]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.73364734649658, 18.235144112673524]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.76536178588867, 18.21908387295384]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.78857898712158, 18.22780713124908]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.78081130981445, 18.210074815578796]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.78441619873047, 18.194705348087123]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.78428745269775, 18.174156250941373]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.81969261169434, 18.187244348702535]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.82419872283936, 18.19833380615251]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.82561492919922, 18.21374371873515]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.85711479187012, 18.209667154901275]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8439826965332, 18.22776636937679]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.83205223083496, 18.224872252035347]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.82046508789062, 18.208974129559643]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.83883285522461, 18.20958562265126]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.85638523101807, 18.196947662549288]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8535099029541, 18.19005754989929]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.85848808288574, 18.192096073130806]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.87960243225098, 18.215863494213266]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.87483882904053, 18.220836712292776]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.88157653808594, 18.222059613005705]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.86372375488281, 18.22841855818744]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.85595607757568, 18.236529952190757]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.88651180267334, 18.23147566064566]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.86376667022705, 18.210604773033037]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.84771633148193, 18.234858791401987]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.78149795532227, 18.219328456246828]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.75244426727295, 18.221244346818466]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.76656341552734, 18.202532938602246]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.73845386505127, 18.195846893599597]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.73193073272705, 18.19535766072393]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.71969985961914, 18.207914203115205]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.69922924041748, 18.2057943308774]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.69313526153564, 18.208811064372615]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.68596839904785, 18.251488163814663]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.67764282226562, 18.259272445726463]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.65343856811523, 18.305970805550533]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.67978858947754, 18.3027112935402]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.76523303985596, 18.3524529141648]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.74738025665283, 18.368256427294266]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8560848236084, 18.30816857408749]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.85479736328125, 18.301873666237526]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8474588394165, 18.320615113053293]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.85975408554077, 18.31686698600413]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.84535598754883, 18.323222457901387]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.83754539489746, 18.3390286446748]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.84054946899414, 18.335036496762662]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.89580297470093, 18.410688309528478]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.89470863342285, 18.4130907027286]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.98665475845337, 18.266972525326892]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.96689224243164, 18.20538666018186]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.9115743637085, 18.188467485234057]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.928053855896, 18.1869997203668]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.91170310974121, 18.170241862783776]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.97774982452393, 18.073881227798182]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.98223447799683, 18.07596190242456]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.98257780075073, 18.11220655879304]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.01221084594727, 18.132212355852467]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.12593650817871, 18.125877406267733]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.13353252410889, 18.169059374098097]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.12168788909912, 18.181332401208707]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.22464179992676, 18.150668605718078]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.38254880905151, 18.064220901562134]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.38954401016235, 18.05734596238513]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.37930870056152, 18.044567945397198]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.37723803520203, 18.044819417449133]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.37713074684143, 18.049328260375102]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.6844367980957, 18.396194148161932]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.69512271881104, 18.41341879444372]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.70876979827881, 18.43373596001913]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.69173240661621, 18.433613819903]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.68413639068604, 18.449532016754876]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.71512126922607, 18.454132141616984]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.67920112609863, 18.455801183000045]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.65851593017578, 18.48059064260951]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.64825916290283, 18.472572112510075]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.71808242797852, 18.445623849267697]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.74142837524414, 18.432473841300993]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.71507835388184, 18.459424168209026]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.70499324798584, 18.46491956159459]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.69533729553223, 18.447455813849437]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.70567989349365, 18.451608194561164]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.70482158660889, 18.422457990097012]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.68293476104736, 18.386990676043865]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.6806173324585, 18.37750162612531]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.68138980865479, 18.371107422500117]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.64130687713623, 18.411097843274582]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.64405345916748, 18.424534494986165]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.65894508361816, 18.408003193033416]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.58697605133057, 18.400307045341485]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.57315731048584, 18.422457990097012]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.56689167022705, 18.425023080728536]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.52552127838135, 18.438336507857063]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.53273105621338, 18.454579934800172]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.51977062225342, 18.440819938250137]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.50994300842285, 18.45881355808212]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.50088787078857, 18.46137810601761]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.45535469055176, 18.414803206553945]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.46951675415039, 18.41557684376476]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.45780086517334, 18.422335841969918]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.44398212432861, 18.422580138137363]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.43904685974121, 18.42526737307924]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.380295753479, 18.45282946389821]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.37038230895996, 18.45881355808212]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.36797904968262, 18.448107174325482]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.3603401184082, 18.449572726364874]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24798774719238, 18.448432853637193]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24468326568604, 18.453155134254448]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24970436096191, 18.36283940663358]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24378204345703, 18.369071002159995]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.05960273742676, 18.450228809695925]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.06689834594727, 18.465779115203976]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.05659866333008, 18.47505977789266]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.03926086425781, 18.48604938679665]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.04750061035156, 18.45527670725765]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.00776100158691, 18.45291561235453]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.09444999694824, 18.44241241751217]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.11968421936035, 18.47147782723358]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.12268829345703, 18.48515396354674]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.10715293884277, 18.436957016424998]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.06732749938965, 18.435084226869016]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.99840545654297, 18.489875233434798]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.97617530822754, 18.4759552538678]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.99548721313477, 18.468058622732098]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.00029373168945, 18.461301422964628]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.00986385345459, 18.462151533588127]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.01986312866211, 18.450590463478736]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.04132080078125, 18.466832731325688]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.04908847808838, 18.47021125555561]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.02763080596924, 18.478148490412565]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.05419540405273, 18.506149747182807]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93943977355957, 18.44900752186371]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89815521240234, 18.46675605071025]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87807083129883, 18.458451921620135]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89154624938965, 18.478560248296823]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86450958251953, 18.481897839566695]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87180519104004, 18.458777581310905]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87566757202148, 18.440783957709343]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92111492156982, 18.430804573280767]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92240238189697, 18.442855510165806]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89879894256592, 18.43976143132369]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8741226196289, 18.439313599507337]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85657024383545, 18.438540069075668]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86459541320801, 18.45523126825449]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.84627056121826, 18.450590463478736]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.84803009033203, 18.458894972891194]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.84562683105469, 18.465570855812913]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83785915374756, 18.464593913558396]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81292533874512, 18.428076710170608]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.79460048675537, 18.442896221358133]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.78618907928467, 18.443425465980525]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.80099487304688, 18.452381666149837]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.79713249206543, 18.45303300794325]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.76374435424805, 18.464431089308537]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.77653312683105, 18.48177100370055]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.78739070892334, 18.47489223337323]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.58131122589111, 18.48062897982881]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.58946514129639, 18.48066968206159]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.58150434494019, 18.477352418390833]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.5650463104248, 18.481646532749156]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.55860900878906, 18.48199249936614]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.55622720718384, 18.477189606251596]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.55071258544922, 18.475174793234913]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.52547836303711, 18.45930204635741]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.46908760070801, 18.446723030361312]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.02385425567627, 18.376809271571183]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.05432415008545, 18.377804709343]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.0612120628357, 18.37299890534171]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.06526756286621, 18.379128318281225]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.07629680633545, 18.383424886508035]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.05524682998657, 18.361554036493715]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.05552577972412, 18.356849608757276]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.0406985282898, 18.355566560764462]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.01582908630371, 18.36159476691002]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.97664737701416, 18.368926085276986]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.97920083999634, 18.37965775901198]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9602108001709, 18.367643127044758]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.96613311767578, 18.377478896353978]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93714380264282, 18.370392311576104]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9410490989685, 18.361472575632252]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94325923919678, 18.369801749704198]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93643569946289, 18.30643699789156]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94991111755371, 18.306090678585274]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.96385860443115, 18.31988180018211]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.97469472885132, 18.317946627826508]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.97304248809814, 18.32505573366713]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9692873954773, 18.316948477836636]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.99147496372461, 18.314748453451223]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.01409101486206, 18.330046192188462]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.02050685882568, 18.319963280648633]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.02670812606812, 18.329822133872753]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.02306032180786, 18.310572404328997]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.03011989593506, 18.316011433831967]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.02404737472534, 18.31350583472829]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.03664302825928, 18.32422058164736]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.03820943832397, 18.328701837940127]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.04913139343262, 18.312324320128944]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.06224203109741, 18.302118142895537]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.0644736289978, 18.317620701932167]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.06792831420898, 18.321531772151165]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.07179069519043, 18.321796581001983]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.09595203399658, 18.333692191255412]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.08354949951172, 18.344120546213436]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.0864462852478, 18.343672455828454]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.0941710472107, 18.34684972840206]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.06893682479858, 18.360759791454736]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.0839786529541, 18.363040690462775]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.06327199935913, 18.37267308327477]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.09638118743896, 18.377906525775845]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.13504791259766, 18.38861727867205]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15195655822754, 18.398044633975985]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15592622756958, 18.393911321391077]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15659141540527, 18.390714553509707]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.22697257995605, 18.3155045260024]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.23710060119629, 18.32710166402728]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.62731647491455, 18.485271376822855]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.65130615234375, 18.480997704341654]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.67443752288818, 18.483643323680162]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8938958644867, 18.162134032988604]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89134240150452, 18.163754920247875]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89344525337219, 18.160217492795685]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89885258674622, 18.166038408847758]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89697504043579, 18.16794469119288]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90221071243286, 18.161716055954386]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89396023750305, 18.15275500900206]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8955910205841, 18.147239505905187]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89985036849976, 18.14893189689875]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90048336982727, 18.146199594878404]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89536571502686, 18.136401698124153]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89335942268372, 18.133393908988467]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89633131027222, 18.1344644839305]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89221143722534, 18.150930120590402]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89179301261902, 18.153805075819232]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89648151397705, 18.154895915247835]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.88578486442566, 18.153988581993936]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86696648597717, 18.130844894663717]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86563611030579, 18.127684065330214]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86388731002808, 18.122779568745187]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86457395553589, 18.13650365617164]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.869455575943, 18.148309996088543]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.872878074646, 18.149818866357048]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87487363815308, 18.149482430195825]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87727689743042, 18.159372528750932]),
            {
              "class": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89421772956848, 18.17817913462274]),
            {
              "class": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89393877983093, 18.179942578699663]),
            {
              "class": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8973183631897, 18.182715125252695]),
            {
              "class": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89672827720642, 18.18335728967677]),
            {
              "class": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89303755760193, 18.179514460966622]),
            {
              "class": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.88522696495056, 18.165008793889967]),
            {
              "class": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.88749074935913, 18.165865099465588]),
            {
              "class": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.88720107078552, 18.161919942459274]),
            {
              "class": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94214344024658, 18.150238046668296]),
            {
              "class": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93506240844727, 18.15456067360191]),
            {
              "class": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93270206451416, 18.151114814548738]),
            {
              "class": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93347454071045, 18.153733119881345]),
            {
              "class": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93077087402344, 18.152448570733657]),
            {
              "class": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92548155784607, 18.153070456817616]),
            {
              "class": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92740201950073, 18.150746018820474]),
            {
              "class": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94410681724548, 18.147794549710756]),
            {
              "class": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89643859863281, 18.21440259833961]),
            {
              "class": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89868092536926, 18.21291466922935]),
            {
              "class": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89792990684509, 18.218937646295398]),
            {
              "class": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89798355102539, 18.217184787833315]),
            {
              "class": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90121293067932, 18.214606423254953]),
            {
              "class": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89865946769714, 18.204853133651888]),
            {
              "class": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8965995311737, 18.20348742568858]),
            {
              "class": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90037608146667, 18.207513175890426]),
            {
              "class": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90094470977783, 18.207288959338317]),
            {
              "class": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89546227455139, 18.22057838735073]),
            {
              "class": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89905643463135, 18.221475183378065]),
            {
              "class": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8918788433075, 18.23212428290712]),
            {
              "class": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89228653907776, 18.23380566008783]),
            {
              "class": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89063429832458, 18.237912238089947]),
            {
              "class": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.88994765281677, 18.238686666853393]),
            {
              "class": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89548373222351, 18.23988906257173]),
            {
              "class": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9163727760315, 18.246533852545458]),
            {
              "class": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.91218852996826, 18.251302412029798]),
            {
              "class": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9050645828247, 18.256030085393082]),
            {
              "class": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90512895584106, 18.25786406197205]),
            {
              "class": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92049264907837, 18.257741797469276]),
            {
              "class": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90465688705444, 18.268174725282396]),
            {
              "class": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9027042388916, 18.272290668849678]),
            {
              "class": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.88976526260376, 18.27261668000943]),
            {
              "class": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90553665161133, 18.273778089788237]),
            {
              "class": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90493583679199, 18.279320108684267]),
            {
              "class": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85468196868896, 18.231717858087197]),
            {
              "class": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85221433639526, 18.232859160975945]),
            {
              "class": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85257911682129, 18.240216308761863]),
            {
              "class": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86086177825928, 18.234815682692606]),
            {
              "class": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86882257461548, 18.2329814628868]),
            {
              "class": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82957649230957, 18.205892705176787]),
            {
              "class": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82793498039246, 18.203283597714]),
            {
              "class": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83109998703003, 18.204282401280533]),
            {
              "class": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82593941688538, 18.20072541144693]),
            {
              "class": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82814955711365, 18.19714796448493]),
            {
              "class": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82292461395264, 18.19355005915167]),
            {
              "class": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8291687965393, 18.195384694379772]),
            {
              "class": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82350397109985, 18.197270271576336]),
            {
              "class": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81518912315369, 18.19512988508607]),
            {
              "class": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82044625282288, 18.202244020573882]),
            {
              "class": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81763529777527, 18.198799102977123]),
            {
              "class": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81170225143433, 18.1944469943422]),
            {
              "class": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81118726730347, 18.19626123550557]),
            {
              "class": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.80821537971497, 18.189636106137183]),
            {
              "class": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82705521583557, 18.1873936976366]),
            {
              "class": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85656487941742, 18.192570981916806]),
            {
              "class": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85448348522186, 18.192086836126176]),
            {
              "class": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85512721538544, 18.18985465182977]),
            {
              "class": 1,
              "system:index": "460"
            })]),
    NonCropClass = /* color: #98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-67.14491844177246, 18.293344590067928]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.13753700256348, 18.28804746592404]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.12431907653809, 18.311761022963843]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.17221260070801, 18.242811588256345]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1759033203125, 18.255201685196145]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.19040870666504, 18.290573806860806]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.18869209289551, 18.304345792099763]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.14105606079102, 18.19960237110122]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15066909790039, 18.203842240465484]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1469783782959, 18.21378922124799]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1524715423584, 18.234007561584818]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1041488647461, 18.214849111935997]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.14723587036133, 18.166576822629274]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.14097023010254, 18.18720835523196]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.10260391235352, 18.13550260280435]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.14612007141113, 18.08696358140829]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.11135864257812, 18.071542491237867]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.17101097106934, 18.04902037111182]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16611862182617, 18.031065889814712]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15891018509865, 18.013436071617654]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.13908329606056, 18.024454914823533]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.11865425109863, 17.99898809984683]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1275806427002, 17.98617167652393]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.08423614501953, 18.013272824314928]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.07282066345215, 18.003151196206236]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.0341968536377, 17.994580008343593]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.04672813415527, 17.975640288115773]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.04586982727051, 17.954820579690775]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.04638481140137, 17.94028615353974]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.10114479064941, 17.95155452054873]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.10904121398926, 17.94804343969606]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.96853637695312, 17.957025135507426]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93068504333496, 17.93359011730901]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92107200622559, 17.955065531694526]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.88742637634277, 17.957025135507426]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8679428100586, 17.97245625632999]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85154914855957, 17.99547796184432]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83635711669922, 17.96780256816429]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87154769897461, 18.01213008896093]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86614036560059, 18.024781388551123]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85000419616699, 18.036370813635944]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86588287353516, 18.047633044711322]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86004638671875, 18.08166018474862]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81507110595703, 18.024781388551123]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.80211067199707, 18.00813045686519]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.79035186767578, 18.02608727740818]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81610107421875, 17.99245755462563]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.78631782531738, 18.037758228868313]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.73687934875488, 18.044776750010264]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.74752235412598, 18.06224022635618]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.73473358154297, 18.0765198165668]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.75318717956543, 18.113641313313707]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.73104286193848, 18.06272983152643]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.75063371658325, 18.094788856313492]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.73932552337646, 18.09556392012417]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.73222303390503, 18.09813384403502]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.72632217407227, 18.106699984973442]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.72439098358154, 18.097623941492742]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.71314716339111, 18.115408455698823]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.71003580093384, 18.126563651936006]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.72280311584473, 18.163314657154164]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.7046070098877, 18.14047807195285]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.67937278747559, 18.17359014658477]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.50625228881836, 18.116669078997756]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.50487899780273, 18.052702096455874]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.54745101928711, 18.045031021094587]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.56959533691406, 18.13314658652618]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.54230117797852, 18.18273288355167]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.61062240600586, 18.005854358166225]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.62778854370117, 18.005364594735447]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.63276672363281, 18.006670627526987]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.56272888183594, 17.994099660336023]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.67533874511719, 18.013853634892026]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.70469284057617, 18.034747990974036]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.632080078125, 18.035727353070623]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.4314079284668, 18.028218771051478]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.35175704956055, 18.018587729652623]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.34454727172852, 18.040134415048193]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.34162902832031, 18.054497406184485]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.3105583190918, 18.046173542890205]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.2666130065918, 18.05629269757596]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.29510879516602, 17.975813017966185]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.25751495361328, 18.000956662630212]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.22713088989258, 17.97515988855965]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.21271133422852, 17.96405631913422]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.2472152709961, 17.944460083047762]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.2032699584961, 17.93809083882777]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.17013931274414, 17.94592987607811]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.1457633972168, 18.00650737395723]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.17666244506836, 18.017608272208896]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.11040115356445, 17.976302863435862]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.11417770385742, 17.98479330231593]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.10559463500977, 18.000303626279297]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.09855651855469, 17.978262231726116]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.09220504760742, 18.027076132664842]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.0692024230957, 18.050253917277217]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.02148056030273, 18.065921674756964]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.09272003173828, 18.101658514757975]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.0879135131836, 18.124663311023145]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.01787567138672, 18.09594763639277]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.03023529052734, 18.180775796640287]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.05461120605469, 18.214043286678553]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.03435516357422, 18.22985942344442]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.03057861328125, 18.24714139263822]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.01272583007812, 18.26213944466981]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.06491088867188, 18.25904212698955]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.0853385925293, 18.23377247255038]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.09100341796875, 18.270127008952283]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.1435317993164, 18.273713142736064]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.19039535522461, 18.238826697344006]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.20035171508789, 18.27192008510787]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.21133804321289, 18.231979002637495]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.20498657226562, 18.18729933428871]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.2446403503418, 18.17311032820278]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.25614166259766, 18.138529990339645]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.16876602172852, 18.11242709339056]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.14177227020264, 18.117796914607613]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.13391876220703, 18.12232427595801]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.16147041320801, 18.140921937126464]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.18082523345947, 18.147528524962063]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.19258403778076, 18.15670392717748]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.16091251373291, 18.177703589379416]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.1457633972168, 18.177866683665645]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.11589431762695, 18.20159527702422]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.11018657684326, 18.2267473194658]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.08576774597168, 18.241258027419725]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.07297897338867, 18.24415187209761]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.0659408569336, 18.253811258285598]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.07332229614258, 18.264162915587576]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.06812953948975, 18.284008658146117]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.05924606323242, 18.306337496812972]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.0532808303833, 18.2991257594857]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.07186317443848, 18.308904313909487]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.0867977142334, 18.323897024800257]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.07160568237305, 18.331596580654168]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.104736328125, 18.330822566726496]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.12997055053711, 18.327685737973454]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.1338758468628, 18.330007811481067]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.14383220672607, 18.348053740800996]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.15164279937744, 18.3330631238583]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.15868091583252, 18.370333585602236]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.16164207458496, 18.384547193803453]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.17198467254639, 18.393995133146845]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.17666244506836, 18.395216811620358]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.18610382080078, 18.391063069468828]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.18721961975098, 18.372451446757555]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.20254039764404, 18.36662726602696]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.22163772583008, 18.361210194231962]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.23318195343018, 18.391592473545966]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.2272596359253, 18.401691562891457]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.20369911193848, 18.421888004523687]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.18614673614502, 18.441389940574744]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.22305393218994, 18.430234615370598]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.22292518615723, 18.443629060927247]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.20713233947754, 18.460686128673984]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.20593070983887, 18.465408072241907]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24013423919678, 18.465489483922614]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24472618103027, 18.464349716877717]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24197959899902, 18.460808249540797]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.25494003295898, 18.46813534251653]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.25772953033447, 18.464349716877717]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.2657117843628, 18.47517719808227]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.23966217041016, 18.47953242067716]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.28841400146484, 18.458610060643824]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.28905773162842, 18.474281718044228]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.30987167358398, 18.46426830465624]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.30085945129395, 18.473264121416122]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.31995677947998, 18.485067871025755]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.34231567382812, 18.48319560635481]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.36733531951904, 18.48714361881786]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.368408203125, 18.47570634317955]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.38218402862549, 18.476194783358565]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.38729095458984, 18.48103840648689]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.38368606567383, 18.47249074394069]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.37965202331543, 18.483765428202286]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.40510082244873, 18.48726572084619]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.4134693145752, 18.48596329472546]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.41299724578857, 18.474363125513626]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.41668796539307, 18.466547832256538]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.44943237304688, 18.45995340164835]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.44548416137695, 18.46760617406205]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.4707612991333, 18.467077003975366]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.43419742584229, 18.44668235983201]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.4129114151001, 18.4367487618353]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.40952110290527, 18.414233155857314]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.46943092346191, 18.402750304096074]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.48269176483154, 18.40336111336868]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.51419162750244, 18.404460564599628]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.48878574371338, 18.42974604443516]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.4886999130249, 18.45905784214682]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.51217460632324, 18.47074045572482]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.55513286590576, 18.485189974533014]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.56341552734375, 18.476194783358565]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.58358573913574, 18.469275084413148]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.59646034240723, 18.477008847231826]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.62375450134277, 18.47220581451803]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.63808822631836, 18.483154904721793]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.72001361846924, 18.470496228042204]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.68920040130615, 18.47941031313981]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.6901445388794, 18.47407819920164]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.68169021606445, 18.470129885866257]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.66988849639893, 18.47379327241627]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.6494607925415, 18.464105480097423]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.63825988769531, 18.471432432270547]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.64358139038086, 18.449124959879665]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.65130615234375, 18.429827473020797]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.67482376098633, 18.414314631550347]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.70735359191895, 18.405071367805757]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.72340393066406, 18.41553612610353]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.73095703125, 18.399859110810084]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.78932189941406, 18.423842369236624]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.75983905792236, 18.436667336528103]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83228015899658, 18.430356757887537]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82768821716309, 18.445827441609076]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81185245513916, 18.456696799245847]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8353271484375, 18.41272662397641]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8717622756958, 18.41052778030517]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.08104705810547, 18.402601617839153]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.05478286743164, 18.438920672246315]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.99916458129883, 18.40471908254918]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.10713958740234, 18.37083652429753]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.00259780883789, 18.43810642772849]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.91848373413086, 18.436803628475634]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.01873397827148, 18.420029206219734]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.86973190307617, 18.428009475241574]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.84329605102539, 18.375398025795608]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.7945442199707, 18.3801223108924]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.78235626220703, 18.40178720100246]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.77875137329102, 18.316903927381514]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.80673217773438, 18.298162078850496]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.79849243164062, 18.283004144550464]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.7392692565918, 18.293598539173672]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.7147216796875, 18.306962851637692]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.65824508666992, 18.346071983843487]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.62116622924805, 18.38191424724548]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.63361167907715, 18.357223292305893]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.64133644104004, 18.36993103472108]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.63017845153809, 18.324960977614026]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.63103675842285, 18.31648704835407]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.70013046264648, 18.304753230610732]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.67584037780762, 18.277778733572777]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.79111099243164, 18.307849731969927]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.80716133117676, 18.258462090165082]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.78072547912598, 18.2409366940112]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.83977699279785, 18.285276598049435]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8517074584961, 18.259032654741887]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.82261085510254, 18.33025697263568]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8743667602539, 18.40234790844426]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.83479881286621, 18.407799635437534]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8364725112915, 18.426855304661203]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.9075403213501, 18.43951719932635]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.91372013092041, 18.427343883810245]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.928053855896, 18.41578047168966]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.93968391418457, 18.410283506790627]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.97135543823242, 18.407311000788898]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.98023891448975, 18.427466028380614]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.95418930053711, 18.393791519225733]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.98435878753662, 18.36780840947902]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.86252212524414, 18.172448455403675]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.8820915222168, 18.19878699978119]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.91616630554199, 18.1994392971424]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.84436893463135, 18.205631262713666]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.82162380218506, 18.21790171552648]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.80278396606445, 18.221040529674962]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.79402923583984, 18.234858791401987]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.81428527832031, 18.243173676469784]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.7789659500122, 18.223282505125937]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.76235771179199, 18.19723304595702]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.75077056884766, 18.18055771737929]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.74922561645508, 18.185572714902804]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.73587894439697, 18.206935803749555]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.69034576416016, 18.200453769162454]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.66459655761719, 18.21207233910531]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.67815780639648, 18.219654566769556]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.6482458114624, 18.210727070678082]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.63640117645264, 18.21390677930354]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.63824653625488, 18.227154940146423]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.62309741973877, 18.24590445882984]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.61339855194092, 18.25136593462524]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.59224128723145, 18.25201803491366]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.63206672668457, 18.259557766717233]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.61498641967773, 18.248798265948547]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.60730457305908, 18.23754894478977]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.60829162597656, 18.21949151158457]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.6438684463501, 18.26787146985538]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.63245296478271, 18.286046119996396]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.63846111297607, 18.298351640137177]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.65425395965576, 18.28918370313952]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.65850257873535, 18.295662428884444]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.67837238311768, 18.293013922467203]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.67103385925293, 18.31090074068886]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.6522798538208, 18.326463621284198]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.67476749420166, 18.356078114446643]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.62249660491943, 18.376157680989056]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-65.62030792236328, 18.340925252594484]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.69696807861328, 18.256270955123096]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.71138763427734, 18.26768203443789]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.69130325317383, 18.182569953081703]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.75395965576172, 18.11911649097399]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.6317367553711, 18.17278428986412]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.67654037475586, 18.096600317621395]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.79670333862305, 18.142608375555493]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90587997436523, 18.061841664108684]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92888259887695, 18.142771502613545]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93592071533203, 18.202791917356517]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.97334289550781, 18.15370066876414]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.005615234375, 18.15598428880149]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90993547439575, 18.260655744697736]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90817594528198, 18.270212333308475]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.91047191619873, 18.27261668000943]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89371347427368, 18.27683439416376]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89648151397705, 18.253401351860603]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8940782546997, 18.248204901104543]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90446376800537, 18.238178348856096]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90600872039795, 18.228171619187513]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.91345453262329, 18.232716498524404]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90967798233032, 18.234917563323283]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.90502166748047, 18.23450996083252]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89399242401123, 18.228192000077378]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9071888923645, 18.20505815414163]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89186811447144, 18.199371037745927]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.89360618591309, 18.205751195063296]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.88371419906616, 18.208604863925483]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.87734127044678, 18.216757945893182]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85631275177002, 18.227172952659355]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.91532135009766, 17.94709233719955]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86965942382812, 17.963749028387806]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8437385559082, 17.962423541888736]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85747146606445, 17.96226024738776]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8408203125, 17.955238441132174]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8686294555664, 17.95883102801663]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85455322265625, 17.95950335417074]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8239974975586, 17.956890580886416]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94347381591797, 17.944152758243675]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94793701171875, 17.94578586369385]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92939758300781, 17.955910780949225]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9393539428711, 17.944152758243675]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94278717041016, 17.985628962147768]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94450378417969, 17.988241310351903]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.92974090576172, 17.981691233363538]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93145751953125, 17.979242067169785]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.93798065185547, 17.950829257458548]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94656372070312, 17.942500499498458]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94192886352539, 17.955401742119776]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.94313049316406, 17.968647756506645]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.95776262554932, 17.958482744202705]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.9489864376526, 17.968537409048217]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.17212677001953, 17.995559633613382]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.18826293945312, 17.989028961463294]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.17950820922852, 17.998738465591103]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16453075408936, 18.003187267335804]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.17105388641357, 18.005513660246606]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16993808746338, 18.005432032944874]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16757774353027, 18.009513351726316]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1553897857666, 18.009513351726316]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15405941009521, 18.014043504893927]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15551853179932, 18.005840169075565]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16023921966553, 18.013839446445377]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1669340133667, 18.01530866199995]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.1674919128418, 18.018491920335048]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15757846832275, 18.015022982157216]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16414451599121, 18.011268289745505]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.16311454772949, 18.01922411900508]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.15961694717407, 18.019550602429778]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.20155334472656, 18.459266149195056]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.19588851928711, 18.456009533754177]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.18833541870117, 18.465779194707412]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.18430137634277, 18.47465282131202]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.24395370483398, 18.46423236878057]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.961669921875, 18.15441048019783]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.98501586914062, 18.1609350031789]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.73576354980469, 18.325924151031572]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.69731140136719, 18.337656533244505]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.63619995117188, 18.173330925365452]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.74949645996094, 18.116563444861402]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.67877197265625, 18.014074432481916]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.74812316894531, 18.023216006878947]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.02333927154541, 18.27447085683203]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.03818798065186, 18.26868412953156]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.03999042510986, 18.27392071852337]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.03649282455444, 18.298267762078726]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.01147317886353, 18.328457418718127]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-67.00510025024414, 18.34185977480844]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83479070663452, 18.20650540342748]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8388032913208, 18.206790771181886]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83912515640259, 18.212355348946083]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85343742370605, 18.215279053735046]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85408115386963, 18.21101907984455]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82208776473999, 18.205719445345572]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8241798877716, 18.20624941605135]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82335376739502, 18.20351801131016]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81831121444702, 18.204853143604822]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81916952133179, 18.194885267813675]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81654095649719, 18.19171540461606]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.81941628456116, 18.192398306060024]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82622909545898, 18.20546465116312]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83170080184937, 18.208583306320474]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83278441429138, 18.211834393916327]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83619618415833, 18.21193630790691]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82299971580505, 18.184631418440176]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82617545127869, 18.18409118898097]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82084321975708, 18.186496726162773]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.82810664176941, 18.19032920838524]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83085322380066, 18.19087961114902]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.83841705322266, 18.20060310678031]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.84438228607178, 18.205485034711437]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.84862017631531, 18.196740273560412]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.84791207313538, 18.195680272693828]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8526542186737, 18.197046041843212]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85246109962463, 18.195894311849745]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85582458972931, 18.198604854543646]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85648441314697, 18.189676279705527]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85864627361298, 18.18614447407429]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86126947402954, 18.186670005102464]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.85807228088379, 18.184111575028684]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.86439156532288, 18.18385674926111]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8676209449768, 18.182429718083206]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.8659257888794, 18.18696559819048]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-66.84297480854798, 18.181608572613833]),
            {
              "class": 2,
              "system:index": "418"
            })]),
    PR = /* color: #0b4a8b */ee.Geometry.Polygon(
        [[[-67.2418212890625, 17.87973515411471],
          [-66.68701171875, 17.87973515411471],
          [-66.126708984375, 17.890190568312228],
          [-65.76416015625, 17.99993517623579],
          [-65.60760498046875, 18.16703368260342],
          [-65.50048828125, 18.362648842080617],
          [-65.78338623046875, 18.503354763575366],
          [-66.3848876953125, 18.52679453731422],
          [-67.159423828125, 18.581474841450106],
          [-67.39837646484375, 18.393926771390387]]]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
 
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw");

function radians(img) {return img.toFloat().multiply(Math.PI).divide(180).divide(1.5708).toFloat();}
var terrain = ee.Algorithms.Terrain(ee.Image('USGS/SRTMGL1_003'));
var slope = radians(terrain.select('slope'));
var elevation = terrain.select('elevation').divide(4000.00).float();


//input=ee.ImageCollection([input1,input2,input3]).mosaic()


//visual parameters for FCC display 
var vizParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 255,
  gamma: [1.5,1.6, 1.7]
};


//add all max val to map

//Map.addLayer(input1,vizParams,'FCC');Map.addLayer(input2,vizParams,'FCC');
//throw('stop')

//create bounds for training samples inside area of interest
function buffer(geometry) {
  return geometry.buffer(45).bounds();
} 
//buffer function of 1km********************************************************
function buffer1(geometry) {
  return geometry.buffer(500);
}

function buffer2(geometry) {
  return geometry.buffer(500);
}



//DR
//----------------------------------------------------------------------------
var studyArea =PR

//print(CropSamples);
var CropSamplesArea = Cropclass.filterBounds(studyArea).map(buffer);
print('Crop:',CropSamplesArea);

//print(NonCropSamples);
var NonCropSamplesArea = NonCropClass.filterBounds(studyArea).map(buffer);
print('Non-crop:',NonCropSamplesArea);


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
var classifier = ee.Classifier.randomForest(150,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);

var classified2 = classified
.clip(PR)
.updateMask(classified.eq(1))

Map.addLayer(classified2, {palette: '00FF00'}, 'cropland');

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'PuertoRico_v2_asset',
  assetId: 'PuertoRico_2010_v2',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'PuertoRico',
  fileNamePrefix: 'PuertoRico_2010_v2',
  region: studyArea, 
});
 

Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_PuertoRico_v2',
  folder: 'PuertoRico',
  fileNamePrefix: 'RFtable_PuertoRico_2010_v2',
  fileFormat: 'CSV'
});
//-----------------------------------------------------------------------------






