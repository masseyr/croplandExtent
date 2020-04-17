/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var SMexBasinRange = ee.Image("users/images/RHseg/SMexBasinRange_2007-13_RHsegTOA"),
    input1 = ee.Image("users/images/input/SMexBasinRange_0_2007-13_InputTOA"),
    input2 = ee.Image("users/images/input/SMexBasinRange_1_2007-13_InputTOA"),
    input3 = ee.Image("users/images/input/SMexBasinRange_2_v2_2007-13_InputTOA"),
    Cropclass = /* color: d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-108.05156707763672, 25.11202585510076]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.06221008300781, 25.223577832971426]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.96333312988281, 25.214570460997475]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.85381317138672, 25.239106218179423]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.88436889648438, 25.115445397061944]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.73090362548828, 25.18412682254242]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.62619018554688, 25.160201083133346]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.73124694824219, 25.041748653337596]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.87647247314453, 24.91944504163488]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.70343780517578, 24.895156588574302]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.60627746582031, 24.86338755462191]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.49847412109375, 24.98325726682686]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.40285873413086, 24.966918261895117]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.35050201016016, 24.970497467641643]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.37007141113281, 24.930030819509195]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.40903854370117, 24.915085927775518]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39822387695312, 24.88923944651591]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.48353958129883, 24.808395383279993]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.303466796875, 24.82054873015952]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.25746154785156, 24.75322291442856]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.22810745239258, 24.70629145107988]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.26364135742188, 24.640932155215054]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.07807540893555, 24.610814807343612]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.10451126098633, 24.685236707139193]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.93662643432617, 24.713776724678425]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.89783096313477, 24.729525517995356]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.85270547866821, 24.629229384710833]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.16064453125, 24.469963061194584]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.20321655273438, 24.46418195588623]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.26123809814453, 24.424488286964067]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.33333587646484, 24.4391795268603]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39238739013672, 24.43746042763022]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.38826751708984, 24.50245730590211]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.3360824584961, 24.539627918861232]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4488639831543, 24.5280718479438]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.41659164428711, 24.612063338963782]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.78892517089844, 24.66917032508507]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.61486053466797, 24.808395383279993]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.66923427581787, 24.809135525024058]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.29042053222656, 24.31925533168269]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.1994400024414, 24.290782059417218]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.14347839355469, 24.34959892303675]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.08271026611328, 24.454962887603724]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.00958251953125, 24.471837957263443]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.05781936645508, 24.36586259735842]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.09712982177734, 24.30110827025886]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.14021682739258, 24.29187730342332]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.11755752563477, 24.196086018644667]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.06674575805664, 24.19577285705674]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.95241928100586, 24.12231524420835]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.08202362060547, 24.106020416713033]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.04940795898438, 24.027180605063535]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.25883483886719, 24.175572310352198]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.2294807434082, 24.19702549879381]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.04597473144531, 24.161477011884255]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.97628021240234, 24.167741781090804]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.0258903503418, 24.050383034815184]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.94709777832031, 24.007580694723107]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.87568664550781, 23.983272658196807]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.84272766113281, 24.045523413431905]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.79208755493164, 24.081104123778353]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7490005493164, 24.10319994755046]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.72784328460693, 24.17320362592421]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.666259765625, 24.09215251195067]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70419692993164, 24.059396361644904]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.8416976928711, 23.87955917639489]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.80805206298828, 23.914558058477866]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.80015563964844, 23.780003943935828]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7457389831543, 23.753924821039778]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6830825805664, 23.804350211133062]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.63484573364258, 23.828848943868373]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.62282943725586, 23.7624089647524]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55004501342773, 23.75046815951719]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.49614334106445, 23.65144304359811]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.52652740478516, 23.568550119541033]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.45803451538086, 23.6133848702159]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5534782409668, 23.583182090516253]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.57510757446289, 23.50984852899843]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.52463912963867, 23.467182964631288]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46352767944336, 23.418517941144092]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.36001586914062, 23.412216951880225]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.33460998535156, 23.370780478220937]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.24637603759766, 23.315143864338296]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.2213134765625, 23.291810532441925]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.24534606933594, 23.234878966575863]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.24895095825195, 23.12978359774539]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.35538101196289, 23.158472090980887]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.38293266296387, 23.19015251629607]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.28808975219727, 23.109733524965883]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.30508422851562, 23.19606957257915]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.30765914916992, 23.24008424684119]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.23066902160645, 23.200093021290385]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16354942321777, 23.159221776683893]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.19504928588867, 23.139886436018088]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.21281623840332, 23.11044401180094]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.15127563476562, 22.97672747535371]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16363525390625, 23.02065610594082]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.11213684082031, 22.951754475745332]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08844757080078, 22.90859406303395]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.98090171813965, 22.858381059404785]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.99102973937988, 22.881078055773916]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.9353256225586, 22.894678618911197]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88863372802734, 22.90377125827519]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88803291320801, 22.940293802828858]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.95317840576172, 22.981626699746062]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.89017868041992, 22.961870676892566]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.84837913513184, 22.98059945773763]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.82589149475098, 22.99498013499291]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.9203052520752, 22.99877258588229]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.95858573913574, 23.00082678562889]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.94742774963379, 23.05722604612308]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.92185020446777, 23.20971725040107]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.89498519897461, 23.214765749152132]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.9148120880127, 23.22604529911364]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.92494010925293, 23.250257617355427]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.95635414123535, 23.272573222809815]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88408470153809, 23.17610832152395]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8708667755127, 23.14351695759196]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.81705093383789, 23.08517994862328]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.84958076477051, 23.07562573713481]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8038330078125, 23.0364542741537]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77482223510742, 23.04364182768825]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.74186325073242, 23.03637528791887]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.26206970214844, 21.993351885864566]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.26172637939453, 22.104726454669244]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.14328002929688, 22.049686555730403]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.13504028320312, 22.10886153422255]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.3372573852539, 21.957693524969464]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.38772583007812, 21.918204186806985]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.33485412597656, 21.846840851640515]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.21812438964844, 21.819273587744753]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2079963684082, 21.854966602844698]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.16851425170898, 21.886190677524734]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.10517120361328, 21.94814065819028]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.06139755249023, 21.965494556537454]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.09160995483398, 21.828197676761782]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.14928817749023, 21.804451996160665]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2244758605957, 21.79281676891807]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.25777816772461, 21.774485384980682]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.39236068725586, 21.6650860721849]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.39648056030273, 21.70017946130734]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.36163330078125, 21.750411922955056]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.44265747070312, 21.7464258609042]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.4222297668457, 21.765717372981463]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.26172637939453, 21.65838545395234]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.25932312011719, 21.684228980260183]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.16319274902344, 21.70560222241984]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.98620986938477, 21.553368522497916]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.81712341308594, 21.469843333079318]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.8751449584961, 21.421750696493568]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.87377166748047, 21.456104198057837]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.81111526489258, 21.432776655030885]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.78948593139648, 21.49731771555568]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.78382110595703, 21.531972761190364]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.84596252441406, 21.584179259729915]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.79918479919434, 21.576277648552878]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7846794128418, 21.58425907178531]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.78579521179199, 21.599502367748602]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.73893165588379, 21.586733223686654]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.73215103149414, 21.603572295660882]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.76176261901855, 21.59519290755085]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.6890640258789, 21.585256718766747]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.75652694702148, 21.39090555190323]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.69404220581055, 21.380196130286645]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.6583366394043, 21.407367760345988]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.61164474487305, 21.43501370441153]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.59121704101562, 21.4600982661928]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.64082717895508, 21.47527472680377]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.57799911499023, 21.505622903154965]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.57731246948242, 21.52638379666873]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.65417385101318, 21.572725773838883]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.65250015258789, 21.585775492481048]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.61001396179199, 21.62583516876253]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7055435180664, 21.631579869826517]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.46677589416504, 22.37087257137372]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.50445556640625, 22.38047613588091]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.46463012695312, 22.35198098250669]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.39253234863281, 22.321495035755294]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.37982940673828, 22.327926219749628]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.40334701538086, 22.27996309825888]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.51484107971191, 22.47822011548917]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.45621871948242, 22.50074223691431]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.45501708984375, 22.524449944731867]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.41501998901367, 22.503755482142843]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.50505638122559, 22.540741679962135]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.50531387329102, 22.556476640235424]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.45089721679688, 22.601729412655992]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.45510292053223, 22.62454828680705]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.457763671875, 22.652987344626705]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.34390926361084, 22.495746448881665]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.55835723876953, 22.31383280620859]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.5604600906372, 22.340192285661832]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.53235054016113, 22.34277238871466]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.79369163513184, 22.48373202967557]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.78394985198975, 22.496103296867005]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.76995944976807, 22.490195361712114]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.76884365081787, 22.497887522987174]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.75824356079102, 22.497847873767835]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7771692276001, 22.507363360457866]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.77832794189453, 22.518860366587358]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.8353624343872, 22.386864917036455]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.83094215393066, 22.400554174243414]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.85433101654053, 22.394880239860974]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.79171752929688, 22.377539579054773]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74047660827637, 22.384603083964407]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74923133850098, 22.391983666602783]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.45072555541992, 25.121196229159867]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.47630310058594, 25.119020270461757]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.49398422241211, 25.135882936774156]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.51175117492676, 25.143575269281108]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.54994583129883, 25.18948607614038]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.56221961975098, 25.1995049178098]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.49321174621582, 25.160900666782585]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.44188499450684, 25.14714931946197]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.43441772460938, 25.109305696595968]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.41356086730957, 25.036771747888704]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85809707641602, 18.52698019110323]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8515739440918, 18.517051245340745]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.83887100219727, 18.49312174643837]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.84470748901367, 18.46756069857182]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69501876831055, 18.47081709480877]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62532424926758, 18.44443850847538]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.60545444488525, 18.461495495819246]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.63798427581787, 18.506063625471977]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.59129238128662, 18.45884953484578]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.56747436523438, 18.446677589094808]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.55159568786621, 18.4402859544449]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.53683280944824, 18.445985512746955]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.61502456665039, 18.400220870527022]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.50756454467773, 18.409423635812352]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.60893058776855, 18.359983541476623]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.65896987915039, 18.338965174095087]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62721252441406, 18.293253626696984]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90616226196289, 18.66356658869711]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93766212463379, 18.60029002679255]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95345497131348, 18.57978922890954]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.94332695007324, 18.541628402365998]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.0057258605957, 18.514528224663845]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00358009338379, 18.450056510044234]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95671653747559, 18.458361045282683]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89491844177246, 18.43336480806281]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.05224609375, 18.497517211261624]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.05439186096191, 18.521527480771958]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.98770141601562, 18.485551514876395]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95620155334473, 18.522178559802995]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86530685424805, 18.534548590357446]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.07542037963867, 18.610376815014273]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.0817289352417, 18.620463005305634]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.05151653289795, 18.606431650480907]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.30664825439453, 18.538780237402786]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.29883766174316, 18.547894198124677]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.31411552429199, 18.52242271380059]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.25386238098145, 18.520713628497617]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.33505821228027, 18.519981158139565]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.35196685791016, 18.49010997394469]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.40286445617676, 18.48734235254349]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4296007156372, 18.48872616883183]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.42754077911377, 18.507162419204096]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.10865020751953, 18.941523628362617]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.16083526611328, 18.974155998035574]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.13628768920898, 18.998179729008083]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.14675903320312, 19.01473460649288]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.16409683227539, 18.922038574758123]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.19259262084961, 18.93356750603815]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06144332885742, 19.05108462980015]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.02539443969727, 19.149870969289765]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0274543762207, 19.164789224260193]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09491729736328, 19.20961693820998]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.08307266235352, 19.226231704261515]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90986633300781, 19.182462366178843]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90214157104492, 19.190730799823374]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.89098358154297, 19.210022196386095]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.87347412109375, 19.240170602078106]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.87862396240234, 19.257349475670605]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86386108398438, 19.27663304839792]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.89149856567383, 19.293970121413523]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97578430175781, 19.347913928614524]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.91656112670898, 19.41317342829991]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.93758964538574, 19.40362094234505]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92025184631348, 19.4516205529101]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.89776420593262, 19.476707449043385]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86695098876953, 19.469343633696866]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8458366394043, 19.536172141060792]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88566207885742, 19.558738723932745]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.83021545410156, 19.5735387466682]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.78695678710938, 19.535201064574232]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.75631523132324, 19.52031702794755]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.72867774963379, 19.49183863428937]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69417381286621, 19.516191207710026]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.67752265930176, 19.489734917759993]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63005828857422, 19.505431220375755]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.66833877563477, 19.550731588019225]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.66610717773438, 19.564723596208413]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.67649269104004, 19.570546501939848]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.66971206665039, 19.571678709181786]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.55804634094238, 19.56706895853795]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.5682601928711, 19.57305352156766]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.61486625671387, 19.572730037355573]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.61160469055176, 19.577420494870424]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63434982299805, 19.574670932887383]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.59667015075684, 19.57159783749971]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.46629333496094, 19.545959469539863]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.41247749328613, 19.551055116366932]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4049243927002, 19.56512797145819]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4656925201016, 19.522096761025097]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.46946907043457, 19.52735494879001]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.48706436157227, 19.486822034357928]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.480712890625, 19.46578298758729]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.43462181091309, 19.471690380410763]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.40569686889648, 19.455667089018384]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.43754005432129, 19.42928185774553]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.37222290039062, 19.3836236685727]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.61186218261719, 19.307579247291233]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.65924072265625, 19.345160472028386]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63177490234375, 19.420620739866035]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.71485900878906, 19.368158505739157]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.51607513427734, 19.41900178811697]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.53976440429688, 19.379008564242294]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4876651763916, 19.352934818067496]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.49101257324219, 19.302232939993832]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4506721496582, 19.339653419491878]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.40741348266602, 19.366862928085794]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.61615371704102, 19.273554310840474]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.6616439819336, 19.22655587811151]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.68413162231445, 19.201030509227116]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.61186218261719, 19.224286647729034]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.47504806518555, 19.16187054143172]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.62130355834961, 19.17970612937036]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.65271759033203, 19.197215555236117]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.70696258544922, 18.878513755347242]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.60568237304688, 18.82051723547109]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.56208038330078, 18.793217826555324]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.50710582733154, 18.807924308556128]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93345642089844, 19.7805959584391]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95508575439453, 19.811122688033553]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99113464355469, 19.84115914715634]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00847244262695, 19.939464540583714]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.07318878173828, 19.848263715502036]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.10374450683594, 19.809346160543765]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.05928421020508, 19.8284831619236]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99997520446777, 19.853672662281294]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.95671653747559, 19.84107841159823]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90847969055176, 19.85859706542407]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.88959693908691, 19.844388535818183]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89466094970703, 19.827029799624025]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.87337493896484, 19.84204723558622]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.83749771118164, 19.845034405668155]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85028648376465, 19.8309861436115]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.80831527709961, 19.794083357114186]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8380126953125, 19.78746094481174]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.85758209228516, 19.785038042230262]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90933799743652, 19.768722872089942]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97328186035156, 19.802482117921222]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99250793457031, 19.816694395530863]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.01207733154297, 19.80999217283585]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.98040580749512, 19.79149903386446]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.02795600891113, 19.781484385106857]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.68248748779297, 19.571112606555072]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.62712669372559, 19.703445504078864]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.58069229125977, 19.736814621043546]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.51837921142578, 19.740369273622193]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.42267799377441, 19.756525787797052]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.42070388793945, 19.817259630311668]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.43709754943848, 19.850201269867053]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.41315078735352, 19.878696731769814]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.39512634277344, 19.883781785527745]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.38946151733398, 19.90646075151349]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.33452987670898, 19.89532344464185]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.31135559082031, 19.91824284596918]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.25187492370605, 19.886526032443555]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.2147102355957, 19.87159352637695]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.16355514526367, 19.874660858667834]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.14836311340332, 19.88329750172524]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.08905410766602, 19.86949479113797]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.13471603393555, 19.76961136495106]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.10819435119629, 19.78592644412328]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.06776809692383, 19.745054831108853]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.04467964172363, 19.81166775498988]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.02783536911011, 19.943922347965678]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.03375768661499, 19.948601901761865]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.02553939819336, 19.95549995654188]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.05146026611328, 19.983915954384848]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.08327394723892, 20.01134392584024]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.12913703918457, 20.045530196348945]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.14904975891113, 20.04762659125303]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.13291358947754, 20.085840573954027]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.18612861633301, 20.09140259235385]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.22054672241211, 20.091321984801766]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.25702476501465, 20.098173478629004]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.26474952697754, 20.11751725448646]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.22870063781738, 20.175614787361276]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.25187492370605, 20.220724157378683]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.21196365356445, 20.22893909968421]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.19514083862305, 20.226039757833387]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.3165054321289, 20.220724157378683]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.32122611999512, 20.240455395848674]),
            {
              "class": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.33804893493652, 20.219435499607414]),
            {
              "class": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.35624504089355, 20.239327963974926]),
            {
              "class": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.30208587646484, 20.28208411238081]),
            {
              "class": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.34955024719238, 20.14548090077337]),
            {
              "class": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.40225028991699, 20.097609249287125]),
            {
              "class": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.50947952270508, 20.378906100284155]),
            {
              "class": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.58621215820312, 20.3867908383422]),
            {
              "class": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.47514724731445, 20.406742251405618]),
            {
              "class": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.46587753295898, 20.33722293444428]),
            {
              "class": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.41540908813477, 20.401432853433953]),
            {
              "class": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4061393737793, 20.44615478264195]),
            {
              "class": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.43592262268066, 20.45998699024324]),
            {
              "class": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.42914199829102, 20.49681318700736]),
            {
              "class": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63650894165039, 20.51916189251877]),
            {
              "class": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.53265380859375, 20.610612841567356]),
            {
              "class": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.48184204101562, 20.60595322203422]),
            {
              "class": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.43875503540039, 20.68273840528223]),
            {
              "class": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.42347717285156, 20.763337106997977]),
            {
              "class": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4833869934082, 20.82351727395072]),
            {
              "class": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.6397705078125, 20.782757863446164]),
            {
              "class": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.5269889831543, 20.870681721988593]),
            {
              "class": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.57883071899414, 20.90500300215911]),
            {
              "class": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63067245483398, 20.936109901637117]),
            {
              "class": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.48870849609375, 20.976988009156646]),
            {
              "class": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.44424819946289, 21.10532056842585]),
            {
              "class": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.54432678222656, 21.104359687221287]),
            {
              "class": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.66929626464844, 21.00199028243772]),
            {
              "class": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.72045135498047, 20.944607055141127]),
            {
              "class": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.75066375732422, 20.902437196559212]),
            {
              "class": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.80302047729492, 20.83234167903537]),
            {
              "class": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.81417846679688, 20.85239522168972]),
            {
              "class": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.84679412841797, 20.725130321098153]),
            {
              "class": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.8294563293457, 20.771242137706814]),
            {
              "class": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.77761459350586, 20.766547321626916]),
            {
              "class": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.7961540222168, 20.690286318094216]),
            {
              "class": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.9557991027832, 20.730308066211155]),
            {
              "class": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.96833038330078, 20.62780399771221]),
            {
              "class": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.15750122070312, 20.66491099351189]),
            {
              "class": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.0459213256836, 20.782757863446164]),
            {
              "class": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.13055038452148, 20.874290636822927]),
            {
              "class": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.07596206665039, 20.851753549715532]),
            {
              "class": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.08746337890625, 20.915907186288138]),
            {
              "class": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.12703132629395, 20.99814405133323]),
            {
              "class": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.05682182312012, 21.04685565094066]),
            {
              "class": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.02699565887451, 21.059551699677264]),
            {
              "class": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.74518394470215, 20.60836338785986]),
            {
              "class": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.7947940826416, 20.630695777172434]),
            {
              "class": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.75479698181152, 20.660172725774668]),
            {
              "class": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.75814437866211, 20.684585269706634]),
            {
              "class": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.7918758392334, 20.694622183297774]),
            {
              "class": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.69797706604004, 20.717343301322554]),
            {
              "class": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.69274139404297, 20.737251585928604]),
            {
              "class": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.69205474853516, 20.746241565901848]),
            {
              "class": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.97237777709961, 20.46400774714988]),
            {
              "class": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.96705627441406, 20.494079668351894]),
            {
              "class": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93418312072754, 20.48788887238121]),
            {
              "class": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91547203063965, 20.529531227121044]),
            {
              "class": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.92508506774902, 20.550508894195637]),
            {
              "class": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.85478973388672, 20.520849971606296]),
            {
              "class": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.88551712036133, 20.57702825977333]),
            {
              "class": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87324333190918, 20.599284897965415]),
            {
              "class": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.83916854858398, 20.602578925836664]),
            {
              "class": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.6128921508789, 21.76810870212305]),
            {
              "class": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.48929595947266, 21.819751678052057]),
            {
              "class": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.45256042480469, 21.854488630272456]),
            {
              "class": 1,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.56105041503906, 21.94814065819028]),
            {
              "class": 1,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.55487060546875, 21.685186058930103]),
            {
              "class": 1,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.78627014160156, 22.00863129805097]),
            {
              "class": 1,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63143157958984, 21.979344312132547]),
            {
              "class": 1,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.5799331665039, 21.72569655543622]),
            {
              "class": 1,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.85836791992188, 21.44348222355954]),
            {
              "class": 1,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.82060241699219, 21.5176007036622]),
            {
              "class": 1,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92153930664062, 21.27145920527429]),
            {
              "class": 1,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.03105926513672, 21.330315073431787]),
            {
              "class": 1,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86935424804688, 21.19593569581079]),
            {
              "class": 1,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.95381164550781, 21.10820317472010]),
            {
              "class": 1,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88119888305664, 20.941400638772983]),
            {
              "class": 1,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.82489395141602, 21.00503514510042]),
            {
              "class": 1,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8927001953125, 20.92552786664723]),
            {
              "class": 1,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.94831848144531, 20.871002517928193]),
            {
              "class": 1,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.9780158996582, 20.8361921664787]),
            {
              "class": 1,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.9886589050293, 20.77184402665276]),
            {
              "class": 1,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06470489501953, 20.822554580301986]),
            {
              "class": 1,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.12718963623047, 20.84116556700238]),
            {
              "class": 1,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.1127700805664, 20.90211646777361]),
            {
              "class": 1,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.21799850463867, 20.84645965149166]),
            {
              "class": 1,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.20795631408691, 20.865548893825384]),
            {
              "class": 1,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.21885681152344, 20.65961054861007]),
            {
              "class": 1,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.23138809204102, 20.69124985440532]),
            {
              "class": 1,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18366622924805, 20.681774814921326]),
            {
              "class": 1,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.13508605957031, 20.701848349856753]),
            {
              "class": 1,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97265148162842, 20.600490038371223]),
            {
              "class": 1,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.93767547607422, 20.665633767125154]),
            {
              "class": 1,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.9140853881836, 20.028032270605134]),
            {
              "class": 1,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.85863876342773, 20.01319379339384]),
            {
              "class": 1,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.03321838378906, 20.03158039462291]),
            {
              "class": 1,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.04815292358398, 19.936398464284192]),
            {
              "class": 1,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.96884536743164, 19.948339689053768]),
            {
              "class": 1,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.08694839477539, 19.951889608748274]),
            {
              "class": 1,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.17398071289062, 19.982222028533606]),
            {
              "class": 1,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.18273544311523, 19.932686818611995]),
            {
              "class": 1,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40778350830078, 20.120096243923676]),
            {
              "class": 1,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.32984924316406, 20.11268153468498]),
            {
              "class": 1,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.29345703125, 20.116872500482906]),
            {
              "class": 1,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.27320098876953, 20.111230789598117]),
            {
              "class": 1,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.25414657592773, 20.085276300185722]),
            {
              "class": 1,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.447265625, 20.082051839671998]),
            {
              "class": 1,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5519790649414, 20.064799849214925]),
            {
              "class": 1,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.54150772094727, 20.082535512978673]),
            {
              "class": 1,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53446960449219, 20.151040798802896]),
            {
              "class": 1,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.73239517211914, 20.090112866542945]),
            {
              "class": 1,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.86749267578125, 20.083825301165113]),
            {
              "class": 1,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.74166488647461, 20.161515431092944]),
            {
              "class": 1,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9552116394043, 20.207273266197298]),
            {
              "class": 1,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93564224243164, 20.247864030355483]),
            {
              "class": 1,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.82148742675781, 20.30100256336019]),
            {
              "class": 1,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.79814147949219, 20.36249167934004]),
            {
              "class": 1,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91727447509766, 20.40867289619887]),
            {
              "class": 1,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.82234573364258, 20.435538523061876]),
            {
              "class": 1,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.77342224121094, 20.393870667691452]),
            {
              "class": 1,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.76981735229492, 20.3251504195635]),
            {
              "class": 1,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.70819091796875, 20.356536997112478]),
            {
              "class": 1,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.68158340454102, 20.442133558453687]),
            {
              "class": 1,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3841667175293, 21.342307262055478]),
            {
              "class": 1,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30897903442383, 21.353818840530277]),
            {
              "class": 1,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.23516464233398, 21.389147342439845]),
            {
              "class": 1,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.12770462036133, 21.29225337295981]),
            {
              "class": 1,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06401824951172, 21.304248670611088]),
            {
              "class": 1,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.38468170166016, 21.42015266240872]),
            {
              "class": 1,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.33112335205078, 21.412481855424055]),
            {
              "class": 1,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.28683471679688, 21.48310196732966]),
            {
              "class": 1,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.48424530029297, 21.54187268460692]),
            {
              "class": 1,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.41437911987305, 21.570610571132676]),
            {
              "class": 1,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.37283706665039, 21.62009023933985]),
            {
              "class": 1,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.37815856933594, 21.658544996098517]),
            {
              "class": 1,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.44544982910156, 21.655194573983117]),
            {
              "class": 1,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.40304946899414, 21.74196134008178]),
            {
              "class": 1,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.36991882324219, 21.742758586118825]),
            {
              "class": 1,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.16024780273438, 20.407064027218624]),
            {
              "class": 1,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.21294784545898, 20.494401261312063]),
            {
              "class": 1,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1283187866211, 20.4348950898293]),
            {
              "class": 1,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.04935455322266, 20.43360821528739]),
            {
              "class": 1,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.98669815063477, 20.42717368106172]),
            {
              "class": 1,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.95373916625977, 20.45451859191148]),
            {
              "class": 1,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.89434432983398, 20.458539491985142]),
            {
              "class": 1,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.82516479492188, 20.464329403154114]),
            {
              "class": 1,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.77212142944336, 20.458861159443735]),
            {
              "class": 1,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.75890350341797, 20.495687626405886]),
            {
              "class": 1,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.5790023803711, 19.088886696697124]),
            {
              "class": 1,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.61985778808594, 19.065687308445185]),
            {
              "class": 1,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.71821975708008, 19.16673498410605]),
            {
              "class": 1,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.71255493164062, 19.241953399005318]),
            {
              "class": 1,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.65985488891602, 19.279711728098317]),
            {
              "class": 1,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.68835067749023, 19.320701260518756]),
            {
              "class": 1,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63153076171875, 19.31989129020589]),
            {
              "class": 1,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.6998519897461, 19.3997350248192]),
            {
              "class": 1,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.6009750366211, 19.493780502204146]),
            {
              "class": 1,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88566207885742, 20.31742351549089]),
            {
              "class": 1,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.85819625854492, 20.340924983474487]),
            {
              "class": 1,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.00994491577148, 20.22595921978806]),
            {
              "class": 1,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.96359634399414, 20.23224106205413]),
            {
              "class": 1,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.05826759338379, 20.231999457429477]),
            {
              "class": 1,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06865310668945, 20.267350272759373]),
            {
              "class": 1,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.02702522277832, 20.285706973261618]),
            {
              "class": 1,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.03835487365723, 20.308166820380823]),
            {
              "class": 1,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.008056640625, 20.332635489822106]),
            {
              "class": 1,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.91862106323242, 20.372952051371545]),
            {
              "class": 1,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.98196411132812, 20.432321329977007]),
            {
              "class": 1,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.96565628051758, 20.477195090661418]),
            {
              "class": 1,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.53564453125, 20.308086324952182]),
            {
              "class": 1,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4997673034668, 20.262036085598314]),
            {
              "class": 1,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.61357879638672, 20.277656056337133]),
            {
              "class": 1,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.47590637207031, 20.342534542351583]),
            {
              "class": 1,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4199447631836, 20.365710330862175]),
            {
              "class": 1,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4757776260376, 20.409356660425615]),
            {
              "class": 1,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.43625259399414, 20.406259586425524]),
            {
              "class": 1,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.58611297607422, 20.404650692234053]),
            {
              "class": 1,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.62113189697266, 20.396123272467616]),
            {
              "class": 1,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.6099739074707, 20.325955283210057]),
            {
              "class": 1,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.7169189453125, 20.249635607997867]),
            {
              "class": 1,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.72601699829102, 20.180367997317568]),
            {
              "class": 1,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.75039291381836, 20.169572362153737]),
            {
              "class": 1,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.7912483215332, 20.177145497911788]),
            {
              "class": 1,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.84051513671875, 20.141532447198898]),
            {
              "class": 1,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.91072463989258, 20.151846564701863]),
            {
              "class": 1,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.89888000488281, 20.214039129250445]),
            {
              "class": 1,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90866470336914, 20.27475762391284]),
            {
              "class": 1,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.99089050292969, 20.292952440997535]),
            {
              "class": 1,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.03792572021484, 20.417360498207817]),
            {
              "class": 1,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0791244506836, 20.446959014854446]),
            {
              "class": 1,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.11894989013672, 20.464168575236233]),
            {
              "class": 1,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18692779541016, 20.357180757613914]),
            {
              "class": 1,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.183837890625, 20.458539491985142]),
            {
              "class": 1,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.38639831542969, 20.352030598461596]),
            {
              "class": 1,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4009895324707, 20.248186136884346]),
            {
              "class": 1,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.36356735229492, 20.198573867298034]),
            {
              "class": 1,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.43034362792969, 20.182623707267485]),
            {
              "class": 1,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4533462524414, 20.072861763261027]),
            {
              "class": 1,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.41146087646484, 20.032225499474404]),
            {
              "class": 1,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.37850189208984, 20.055770013572676]),
            {
              "class": 1,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.31344223022461, 20.02674202383044]),
            {
              "class": 1,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.26984024047852, 20.047868481171644]),
            {
              "class": 1,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.02713775634766, 20.813248224574533]),
            {
              "class": 1,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.00413513183594, 20.852716056650312]),
            {
              "class": 1,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.98130416870117, 20.79463378941528]),
            {
              "class": 1,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.963623046875, 20.749853460979594]),
            {
              "class": 1,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.00259017944336, 20.701527194210907]),
            {
              "class": 1,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.89530181884766, 20.654791801886358]),
            {
              "class": 1,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.94010543823242, 20.64370810467477]),
            {
              "class": 1,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.85393142700195, 20.702490659107575]),
            {
              "class": 1,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87813568115234, 20.743592788027648]),
            {
              "class": 1,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.81256103515625, 20.655594936950735]),
            {
              "class": 1,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.77925872802734, 20.65286426041719]),
            {
              "class": 1,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.75059127807617, 20.676956771356085]),
            {
              "class": 1,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.75505447387695, 20.621859611844727]),
            {
              "class": 1,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.77531051635742, 20.62491216331064]),
            {
              "class": 1,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.89307022094727, 20.53282675996382]),
            {
              "class": 1,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.85101318359375, 20.48989889847769]),
            {
              "class": 1,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.71265411376953, 20.49375807471704]),
            {
              "class": 1,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.82646560668945, 20.38099800885549]),
            {
              "class": 1,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.90405654907227, 20.463846918895072]),
            {
              "class": 1,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9885139465332, 20.4506584288216]),
            {
              "class": 1,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.04069900512695, 20.48218025460505]),
            {
              "class": 1,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.00636672973633, 20.551473315428435]),
            {
              "class": 1,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.08721923828125, 20.56979616223821]),
            {
              "class": 1,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.18214797973633, 20.595830109333082]),
            {
              "class": 1,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.24943923950195, 20.615432987667255]),
            {
              "class": 1,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.30557250976562, 20.648527202745758]),
            {
              "class": 1,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.2576789855957, 20.685789734395968]),
            {
              "class": 1,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.19622421264648, 20.746482361590495]),
            {
              "class": 1,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.14369583129883, 20.76237402931109]),
            {
              "class": 1,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.09425735473633, 20.794954747416558]),
            {
              "class": 1,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82948303222656, 20.55790263477048]),
            {
              "class": 1,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.84699249267578, 20.57734967837741]),
            {
              "class": 1,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.88698959350586, 20.573331897175237]),
            {
              "class": 1,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.86776351928711, 20.494401261312063]),
            {
              "class": 1,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.87085342407227, 20.459665325142687]),
            {
              "class": 1,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.85583305358887, 20.450578007725895]),
            {
              "class": 1,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.77798461914062, 20.541507335917256]),
            {
              "class": 1,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.70073699951172, 20.592294895742214]),
            {
              "class": 1,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.68631744384766, 20.37584864441243]),
            {
              "class": 1,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.07794952392578, 20.523181097837274]),
            {
              "class": 1,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.90457153320312, 20.702169504822308]),
            {
              "class": 1,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.79934310913086, 20.876937119275823]),
            {
              "class": 1,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.84431838989258, 20.900031713954647]),
            {
              "class": 1,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.73411178588867, 20.869719330060914]),
            {
              "class": 1,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.72467041015625, 21.026187212230976]),
            {
              "class": 1,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0794677734375, 21.70974890189897]),
            {
              "class": 1,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.12100982666016, 21.778948894317033]),
            {
              "class": 1,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18555450439453, 21.748339184494796]),
            {
              "class": 1,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.98883056640625, 21.823257624833815]),
            {
              "class": 1,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.01011657714844, 21.89399562866819]),
            {
              "class": 1,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.01904296875, 21.80636454580889]),
            {
              "class": 1,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06745147705078, 21.758224283630504]),
            {
              "class": 1,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.93389892578125, 21.910241299304595]),
            {
              "class": 1,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97784423828125, 21.925848139907963]),
            {
              "class": 1,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86866760253906, 22.011496004527803]),
            {
              "class": 1,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92394256591797, 22.03854870911103]),
            {
              "class": 1,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.73442840576172, 22.031229075480418]),
            {
              "class": 1,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.70181274414062, 21.928714516503177]),
            {
              "class": 1,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.55864715576172, 21.84588485053112]),
            {
              "class": 1,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.52946472167969, 21.896225536239324]),
            {
              "class": 1,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.69546127319336, 21.891128553399447]),
            {
              "class": 1,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63606643676758, 21.657428197370656]),
            {
              "class": 1,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.60107421875, 22.004334129783672]),
            {
              "class": 1,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.61085891723633, 22.03902606337494]),
            {
              "class": 1,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.59197616577148, 22.06098261868621]),
            {
              "class": 1,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.58064651489258, 21.991760185759656]),
            {
              "class": 1,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50820541381836, 21.92154846678814]),
            {
              "class": 1,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.48623275756836, 21.87663301277917]),
            {
              "class": 1,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4585952758789, 21.85018680516034]),
            {
              "class": 1,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4446907043457, 21.80779894128278]),
            {
              "class": 1,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40349197387695, 21.817679941852134]),
            {
              "class": 1,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39370727539062, 21.86356983564528]),
            {
              "class": 1,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.6274242401123, 22.001230538366407]),
            {
              "class": 1,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46795082092285, 21.944000883234946]),
            {
              "class": 1,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50837707519531, 21.848115509838376]),
            {
              "class": 1,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.54013442993164, 21.784767188967592]),
            {
              "class": 1,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46177101135254, 21.735423755716127]),
            {
              "class": 1,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4373950958252, 21.73877231169483]),
            {
              "class": 1,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.49953651428223, 21.732792692712692]),
            {
              "class": 1,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46580505371094, 21.688535784209975]),
            {
              "class": 1,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.43619346618652, 21.59551213122506]),
            {
              "class": 1,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5476016998291, 21.52350938831674]),
            {
              "class": 1,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.58150482177734, 21.549377015339626]),
            {
              "class": 1,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.65137100219727, 21.532052601982436]),
            {
              "class": 1,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.46991157531738, 18.546429487235958]),
            {
              "class": 1,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4984073638916, 18.54488338989145]),
            {
              "class": 1,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.47969627380371, 18.49417992420422]),
            {
              "class": 1,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.80336380004883, 18.818892394667557]),
            {
              "class": 1,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.79031753540039, 18.876889475915988]),
            {
              "class": 1,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.86739349365234, 18.821492132415013]),
            {
              "class": 1,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.74843215942383, 18.845700258975054]),
            {
              "class": 1,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.64114379882812, 18.841963661794143]),
            {
              "class": 1,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.73212432861328, 18.731777978586166]),
            {
              "class": 1,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.78018951416016, 18.721860986523723]),
            {
              "class": 1,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.64921188354492, 18.95970762692407]),
            {
              "class": 1,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.58604049682617, 18.95256414953349]),
            {
              "class": 1,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.48750686645508, 18.998017418132864]),
            {
              "class": 1,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.53299713134766, 19.0346956488072]),
            {
              "class": 1,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.56674194335938, 19.36913018222096]),
            {
              "class": 1,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.77376556396484, 19.63935406078918]),
            {
              "class": 1,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46580505371094, 19.597959855171077]),
            {
              "class": 1,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.67900848388672, 19.499282334770818]),
            {
              "class": 1,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42666625976562, 19.579846540004134]),
            {
              "class": 1,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53893280029297, 19.686556300019273]),
            {
              "class": 1,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53996276855469, 19.859404330045162]),
            {
              "class": 1,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.68553161621094, 19.912997501346766]),
            {
              "class": 1,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.8973617553711, 19.815806165386956]),
            {
              "class": 1,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.205322265625, 19.775749907587908]),
            {
              "class": 1,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.42617797851562, 19.924294950473808]),
            {
              "class": 1,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.73990249633789, 23.764755754078788]),
            {
              "class": 1,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.71501159667969, 23.758157142409807]),
            {
              "class": 1,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68145179748535, 23.76648390660713]),
            {
              "class": 1,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.65990829467773, 23.768526239093816]),
            {
              "class": 1,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.64445877075195, 23.774260308924205]),
            {
              "class": 1,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69278144836426, 23.769311743052057]),
            {
              "class": 1,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.37838363647461, 23.372267610084283]),
            {
              "class": 1,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.41863822937012, 23.32861187569524]),
            {
              "class": 1,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4450740814209, 23.291958349366713]),
            {
              "class": 1,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.12655639648438, 23.36769782726357]),
            {
              "class": 1,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.09951972961426, 23.354145131618314]),
            {
              "class": 1,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.13101959228516, 23.33665065247883]),
            {
              "class": 1,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16269111633301, 23.396418855966377]),
            {
              "class": 1,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.21556282043457, 23.402676289278663]),
            {
              "class": 1,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.23847961425781, 23.450795956761375]),
            {
              "class": 1,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.2912654876709, 23.46945631675212]),
            {
              "class": 1,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.34482383728027, 23.51282948552422]),
            {
              "class": 1,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.3872241973877, 23.510783159592552]),
            {
              "class": 1,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.33491039276123, 23.884223952214953]),
            {
              "class": 1,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.33113384246826, 23.90615742524025]),
            {
              "class": 1,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.31667137145996, 23.8535687364352]),
            {
              "class": 1,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46198272705078, 23.8460767524398]),
            {
              "class": 1,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.05888962745667, 24.46059670720746]),
            {
              "class": 1,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.96977055072784, 24.41720003027605]),
            {
              "class": 1,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.97486138343811, 24.412359276677503]),
            {
              "class": 1,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.98311185836792, 24.407877994836408]),
            {
              "class": 1,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.79660177230835, 24.434880513853674]),
            {
              "class": 1,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.20655059814453, 23.24337687609401]),
            {
              "class": 1,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.67601776123047, 21.548926716545065]),
            {
              "class": 1,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.66026782989502, 21.54035081489202]),
            {
              "class": 1,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7213363647461, 21.214890210786645]),
            {
              "class": 1,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74605560302734, 21.19200445492157]),
            {
              "class": 1,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.75584030151367, 21.198966581117276]),
            {
              "class": 1,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.77498054504395, 21.192564638130197]),
            {
              "class": 1,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.69249725341797, 21.265290370133936]),
            {
              "class": 1,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7063159942627, 21.263610642530264]),
            {
              "class": 1,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.69181060791016, 21.2728888983938]),
            {
              "class": 1,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72193717956543, 21.292643235524547]),
            {
              "class": 1,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.71438407897949, 21.31783216270377]),
            {
              "class": 1,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74545478820801, 21.328386238246015]),
            {
              "class": 1,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72064971923828, 21.089285049383577]),
            {
              "class": 1,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.70640182495117, 21.104820110241246]),
            {
              "class": 1,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.8069953918457, 21.139247696532095]),
            {
              "class": 1,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7604751586914, 21.17510793156664]),
            {
              "class": 1,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.65662002563477, 21.1746277179622]),
            {
              "class": 1,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.58108901977539, 21.221201174161113]),
            {
              "class": 1,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.5352554321289, 21.193835045752294]),
            {
              "class": 1,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.6037483215332, 21.169825496173225]),
            {
              "class": 1,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.58194732666016, 21.10738243835069]),
            {
              "class": 1,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.47998046875, 21.03257630905082]),
            {
              "class": 1,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.45474624633789, 21.068141944738848]),
            {
              "class": 1,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.42453384399414, 21.08480039971449]),
            {
              "class": 1,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.43586349487305, 21.080085365388726]),
            {
              "class": 1,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.47079658508301, 21.091857655615726]),
            {
              "class": 1,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.49723243713379, 21.05437528690355]),
            {
              "class": 1,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.45817947387695, 21.021680631266474]),
            {
              "class": 1,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.45182800292969, 20.84786335477492]),
            {
              "class": 1,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.42882537841797, 20.826044315508007]),
            {
              "class": 1,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.49371337890625, 20.94280345438433]),
            {
              "class": 1,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.27192687988281, 21.048117294143626]),
            {
              "class": 1,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.32685852050781, 21.026006951608196]),
            {
              "class": 1,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.06455993652344, 20.95484708743359]),
            {
              "class": 1,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.98113250732422, 20.977609109901742]),
            {
              "class": 1,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.09889221191406, 20.91268011146017]),
            {
              "class": 1,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.02284622192383, 20.876756678771354]),
            {
              "class": 1,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.01477813720703, 20.841466372247755]),
            {
              "class": 1,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9500617980957, 20.89888909620735]),
            {
              "class": 1,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.86268615722656, 20.929686615390413]),
            {
              "class": 1,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.85976791381836, 20.93802380729506]),
            {
              "class": 1,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87478828430176, 20.942112068332882]),
            {
              "class": 1,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.80020101601562, 20.889106328532332]),
            {
              "class": 1,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.69205474853516, 20.853818921607928]),
            {
              "class": 1,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.64725112915039, 20.75497016467299]),
            {
              "class": 1,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53103637695312, 20.744054320842366]),
            {
              "class": 1,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.49945068359375, 20.765243180159022]),
            {
              "class": 1,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4501838684082, 20.789638792531072]),
            {
              "class": 1,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41756820678711, 20.827668819836354]),
            {
              "class": 1,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5245132446289, 20.792527485589428]),
            {
              "class": 1,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44400405883789, 20.81082125716374]),
            {
              "class": 1,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.18805694580078, 20.48746676355337]),
            {
              "class": 1,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.10943603515625, 20.54293395750568]),
            {
              "class": 1,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.07870864868164, 20.556757432065183]),
            {
              "class": 1,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.05587768554688, 20.564633038574815]),
            {
              "class": 1,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.08162689208984, 20.595649333353883]),
            {
              "class": 1,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.11029434204102, 20.616537582998866]),
            {
              "class": 1,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.09192657470703, 20.67308215039391]),
            {
              "class": 1,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1011962890625, 20.741485772508643]),
            {
              "class": 1,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.05381774902344, 20.73185332792297]),
            {
              "class": 1,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.17604064941406, 20.70905410077049]),
            {
              "class": 1,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.16179275512695, 20.81451183676506]),
            {
              "class": 1,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.24230194091797, 20.80552591991653]),
            {
              "class": 1,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.27629089355469, 20.77824396410068]),
            {
              "class": 1,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.15938949584961, 20.882851438044437]),
            {
              "class": 1,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.14325332641602, 20.949396511670955]),
            {
              "class": 1,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.0795669555664, 20.97151820403937]),
            {
              "class": 1,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.90704727172852, 21.132522935746277]),
            {
              "class": 1,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.93743133544922, 21.165983606507616]),
            {
              "class": 1,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.9485034942627, 21.131332060891815]),
            {
              "class": 1,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.85863876342773, 21.150464959091323]),
            {
              "class": 1,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.8375244140625, 21.167434331775375]),
            {
              "class": 1,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.84833908081055, 21.29975054872394]),
            {
              "class": 1,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.90172576904297, 21.318941575652275]),
            {
              "class": 1,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.81503677368164, 21.357475975695362]),
            {
              "class": 1,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.73178100585938, 21.38337307407177]),
            {
              "class": 1,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.65247344970703, 21.36578912367177]),
            {
              "class": 1,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63994216918945, 21.337010832968257]),
            {
              "class": 1,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.52613067626953, 21.464391767369143]),
            {
              "class": 1,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.55874633789062, 21.492346354770277]),
            {
              "class": 1,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.49282836914062, 21.501290688985925]),
            {
              "class": 1,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4365234375, 21.493783874141624]),
            {
              "class": 1,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.42622375488281, 21.53450768490933]),
            {
              "class": 1,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.35309600830078, 21.591022983649246]),
            {
              "class": 1,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27087020874023, 21.60171690154563]),
            {
              "class": 1,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.26160049438477, 21.715789283678088]),
            {
              "class": 1,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.29473114013672, 21.73556328043968]),
            {
              "class": 1,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.117919921875, 21.760436379958886]),
            {
              "class": 1,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.96943283081055, 21.76458147767872]),
            {
              "class": 1,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92806243896484, 21.781320077146972]),
            {
              "class": 1,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92256927490234, 21.711483294896144]),
            {
              "class": 1,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.98780059814453, 21.643527318555687]),
            {
              "class": 1,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.85201644897461, 21.14741306721832]),
            {
              "class": 1,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.02796936035156, 20.95773260598202]),
            {
              "class": 1,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0219612121582, 21.039155390481593]),
            {
              "class": 1,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.17061996459961, 20.966549123324125]),
            {
              "class": 1,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.23705291748047, 20.932402266118835]),
            {
              "class": 1,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.31653213500977, 21.02232157553574]),
            {
              "class": 1,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.4281120300293, 21.02280228192941]),
            {
              "class": 1,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30271339416504, 21.11051522472549]),
            {
              "class": 1,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.31078147888184, 21.138617263170772]),
            {
              "class": 1,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27155685424805, 21.163592380025293]),
            {
              "class": 1,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.32640266418457, 21.175998323499364]),
            {
              "class": 1,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.36262321472168, 21.175358042201066]),
            {
              "class": 1,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.39566802978516, 21.21625044123811]),
            {
              "class": 1,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.48432913098145, 21.27264895086813]),
            {
              "class": 1,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.54086685180664, 19.81183934975619]),
            {
              "class": 1,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.55399894714355, 19.791408177986906]),
            {
              "class": 1,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.5073070526123, 19.84914167275431]),
            {
              "class": 1,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.4615592956543, 19.851321407694115]),
            {
              "class": 1,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.39993286132812, 19.87578082375673]),
            {
              "class": 1,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.32242774963379, 19.921218492969718]),
            {
              "class": 1,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.32105445861816, 19.955255403468257]),
            {
              "class": 1,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.32328605651855, 19.96777250434235]),
            {
              "class": 1,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.30440330505371, 19.9798726845627]),
            {
              "class": 1,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.27646541595459, 20.006194929282792]),
            {
              "class": 1,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.29796600341797, 20.00632850792536]),
            {
              "class": 1,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.2886962890625, 20.03503772249902]),
            {
              "class": 1,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.31221389770508, 20.043101165329887]),
            {
              "class": 1,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.27728080749512, 20.05898493650302]),
            {
              "class": 1,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.29616355895996, 20.069465732486993]),
            {
              "class": 1,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.34225463867188, 20.123309847029574]),
            {
              "class": 1,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.36808967590332, 19.807075002754004]),
            {
              "class": 1,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.39589881896973, 19.814746338836784]),
            {
              "class": 1,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.36276817321777, 19.773235960652812]),
            {
              "class": 1,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.36396980285645, 19.72727119936912]),
            {
              "class": 1,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.31229972839355, 19.785557959848624]),
            {
              "class": 1,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.30290126800537, 19.77925826121286]),
            {
              "class": 1,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.31877994537354, 19.796622211954507]),
            {
              "class": 1,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.35049438476562, 19.8195912025417]),
            {
              "class": 1,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.25968551635742, 19.86447991222649]),
            {
              "class": 1,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.21634101867676, 19.779778197695535]),
            {
              "class": 1,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.22449493408203, 19.756434911979554]),
            {
              "class": 1,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.25650978088379, 19.73001814742908]),
            {
              "class": 1,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.22552490234375, 19.662704336616695]),
            {
              "class": 1,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.20174980163574, 19.62899640354785]),
            {
              "class": 1,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.16183853149414, 19.640394842090558]),
            {
              "class": 1,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.11626243591309, 19.614444030142057]),
            {
              "class": 1,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.15531539916992, 19.57820896354635]),
            {
              "class": 1,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.11600494384766, 19.59923337095412]),
            {
              "class": 1,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.10364532470703, 19.570445411620742]),
            {
              "class": 1,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.14724731445312, 19.53582836047245]),
            {
              "class": 1,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.16441345214844, 19.560578691422307]),
            {
              "class": 1,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.1675033569336, 19.45394732350635]),
            {
              "class": 1,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.1487922668457, 19.462363884477224]),
            {
              "class": 1,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.10553359985352, 19.440188543135275]),
            {
              "class": 1,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.07377624511719, 19.455565926845942]),
            {
              "class": 1,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.05111694335938, 19.41752448057416]),
            {
              "class": 1,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.17316818237305, 19.361336364016044]),
            {
              "class": 1,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.15033721923828, 19.33785143916564]),
            {
              "class": 1,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.15274047851562, 19.312257122812436]),
            {
              "class": 1,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.24372100830078, 19.30302274639052]),
            {
              "class": 1,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.21402359008789, 19.305938921589945]),
            {
              "class": 1,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.17419815063477, 19.29621813543119]),
            {
              "class": 1,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.28766632080078, 19.321814963144085]),
            {
              "class": 1,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.32800674438477, 19.359069001486528]),
            {
              "class": 1,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.35547256469727, 19.37753089355229]),
            {
              "class": 1,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.31599044799805, 19.421571866497867]),
            {
              "class": 1,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.30345916748047, 19.47239844386638]),
            {
              "class": 1,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.43220520019531, 19.409915122206524]),
            {
              "class": 1,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.43340682983398, 19.469970784852777]),
            {
              "class": 1,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.47443389892578, 19.26932095224355]),
            {
              "class": 1,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.4531478881836, 19.31889907110189]),
            {
              "class": 1,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.67622184753418, 19.242312994902523]),
            {
              "class": 1,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.69077014923096, 19.229792516316635]),
            {
              "class": 1,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.66240310668945, 19.14498575834222]),
            {
              "class": 1,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.43796920776367, 19.177902390609507]),
            {
              "class": 1,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.43247604370117, 19.16103951812119]),
            {
              "class": 1,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.38956069946289, 19.039868088591906]),
            {
              "class": 1,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4613131550293, 19.085946394602647]),
            {
              "class": 1,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.44466200146485, 19.115630908047347]),
            {
              "class": 1,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.06053924560547, 20.925347484571763]),
            {
              "class": 1,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.1552963256836, 20.824459905520698]),
            {
              "class": 1,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.18293380737305, 20.780169910993568]),
            {
              "class": 1,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.18722534179688, 20.763638067516485]),
            {
              "class": 1,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.25674819946289, 20.7825773100634]),
            {
              "class": 1,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.25400161743164, 20.714031689637082]),
            {
              "class": 1,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.26636123657227, 20.707930106463884]),
            {
              "class": 1,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.27666091918945, 20.678060919846846]),
            {
              "class": 1,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.3305492401123, 21.10651165211884]),
            {
              "class": 1,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.02070045471191, 20.208149220398738]),
            {
              "class": 1,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0778636932373, 20.188897228907912]),
            {
              "class": 1,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.26094055175781, 20.187759353683887]),
            {
              "class": 1,
              "system:index": "917"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.31771755218506, 20.115013780708694]),
            {
              "class": 1,
              "system:index": "918"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.28518772125244, 20.08438454196226]),
            {
              "class": 1,
              "system:index": "919"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.26415920257568, 20.088052306006375]),
            {
              "class": 1,
              "system:index": "920"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.22952651977539, 20.07551706546204]),
            {
              "class": 1,
              "system:index": "921"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.27106857299805, 20.001050805115646]),
            {
              "class": 1,
              "system:index": "922"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.29673194885254, 19.92364436035424]),
            {
              "class": 1,
              "system:index": "923"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.50092315673828, 19.56751376478551]),
            {
              "class": 1,
              "system:index": "924"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.61524963378906, 19.507008857293943]),
            {
              "class": 1,
              "system:index": "925"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.71309661865234, 19.51056859687858]),
            {
              "class": 1,
              "system:index": "926"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.56546783447266, 19.40115177633514]),
            {
              "class": 1,
              "system:index": "927"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.57439422607422, 19.174315121120845]),
            {
              "class": 1,
              "system:index": "928"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.24909591674805, 19.22654574768837]),
            {
              "class": 1,
              "system:index": "929"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.26600456237793, 19.252801706011862]),
            {
              "class": 1,
              "system:index": "930"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.12009239196777, 18.998737671434274]),
            {
              "class": 1,
              "system:index": "931"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.10884857177734, 19.041338654798345]),
            {
              "class": 1,
              "system:index": "932"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9870548248291, 19.005067650851153]),
            {
              "class": 1,
              "system:index": "933"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9702320098877, 18.998494205878334]),
            {
              "class": 1,
              "system:index": "934"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93735885620117, 18.986239312814757]),
            {
              "class": 1,
              "system:index": "935"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9075756072998, 18.988106010393587]),
            {
              "class": 1,
              "system:index": "936"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87453079223633, 18.839668862525013]),
            {
              "class": 1,
              "system:index": "937"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.79213333129883, 18.841618428510074]),
            {
              "class": 1,
              "system:index": "938"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.80020101601562, 18.861275286971196]),
            {
              "class": 1,
              "system:index": "939"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.67729187011719, 18.75543009296105]),
            {
              "class": 1,
              "system:index": "940"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.72879028320312, 18.715113847906792]),
            {
              "class": 1,
              "system:index": "941"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.60965728759766, 19.219079455977752]),
            {
              "class": 1,
              "system:index": "942"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.62939834594727, 19.247443481541847]),
            {
              "class": 1,
              "system:index": "943"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.55266571044922, 19.14952637408851]),
            {
              "class": 1,
              "system:index": "944"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.54820251464844, 19.21454075739377]),
            {
              "class": 1,
              "system:index": "945"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.48228454589844, 19.20367979144762]),
            {
              "class": 1,
              "system:index": "946"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.52039337158203, 19.34918941113984]),
            {
              "class": 1,
              "system:index": "947"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.43713760375977, 19.28406634070446]),
            {
              "class": 1,
              "system:index": "948"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.38066101074219, 19.49165658297798]),
            {
              "class": 1,
              "system:index": "949"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.31680297851562, 19.494893020199797]),
            {
              "class": 1,
              "system:index": "950"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.24607849121094, 19.62057842041858]),
            {
              "class": 1,
              "system:index": "951"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.19955825805664, 19.721282284929025]),
            {
              "class": 1,
              "system:index": "952"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.15389633178711, 19.759252038248537]),
            {
              "class": 1,
              "system:index": "953"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.11681747436523, 19.768783451305968]),
            {
              "class": 1,
              "system:index": "954"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.11046600341797, 19.86794090195523]),
            {
              "class": 1,
              "system:index": "955"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.34013557434082, 19.37130631165954]),
            {
              "class": 1,
              "system:index": "956"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.37712860107422, 19.437416412390068]),
            {
              "class": 1,
              "system:index": "957"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.38893032073975, 19.520514215248316]),
            {
              "class": 1,
              "system:index": "958"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.39523887634277, 19.501542684193403]),
            {
              "class": 1,
              "system:index": "959"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.41648197174072, 19.487585659901576]),
            {
              "class": 1,
              "system:index": "960"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.42785453796387, 19.522010808457576]),
            {
              "class": 1,
              "system:index": "961"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.34708786010742, 19.523856250595635]),
            {
              "class": 1,
              "system:index": "962"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3295783996582, 19.568504465198224]),
            {
              "class": 1,
              "system:index": "963"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30623245239258, 19.62445903405738]),
            {
              "class": 1,
              "system:index": "964"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.31962203979492, 19.642567325007636]),
            {
              "class": 1,
              "system:index": "965"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.2856330871582, 19.70916237867075]),
            {
              "class": 1,
              "system:index": "966"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.22967147827148, 19.742449516549325]),
            {
              "class": 1,
              "system:index": "967"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.21920013427734, 19.630118094289994]),
            {
              "class": 1,
              "system:index": "968"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.13508605957031, 19.67409027832679]),
            {
              "class": 1,
              "system:index": "969"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.14967727661133, 19.636100312625025]),
            {
              "class": 1,
              "system:index": "970"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.05543518066406, 19.669240996524938]),
            {
              "class": 1,
              "system:index": "971"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06779479980469, 19.72936171192999]),
            {
              "class": 1,
              "system:index": "972"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.03020095825195, 19.75230505631065]),
            {
              "class": 1,
              "system:index": "973"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.99260711669922, 19.862613166291993]),
            {
              "class": 1,
              "system:index": "974"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.876220703125, 19.938153396818414]),
            {
              "class": 1,
              "system:index": "975"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92068099975586, 20.010592883486122]),
            {
              "class": 1,
              "system:index": "976"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90866470336914, 20.111049445516514]),
            {
              "class": 1,
              "system:index": "977"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0329475402832, 20.01446398958056]),
            {
              "class": 1,
              "system:index": "978"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.14057922363281, 19.953967081534543]),
            {
              "class": 1,
              "system:index": "979"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.21576690673828, 20.038011165215718]),
            {
              "class": 1,
              "system:index": "980"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.1841812133789, 20.113628541582525]),
            {
              "class": 1,
              "system:index": "981"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.21405029296875, 20.1903371829881]),
            {
              "class": 1,
              "system:index": "982"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.12272644042969, 20.209830635915274]),
            {
              "class": 1,
              "system:index": "983"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.24082946777344, 20.314827672065885]),
            {
              "class": 1,
              "system:index": "984"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.2907829284668, 20.199037041988934]),
            {
              "class": 1,
              "system:index": "985"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.33524322509766, 20.34879154321828]),
            {
              "class": 1,
              "system:index": "986"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.5050163269043, 20.51447938524681]),
            {
              "class": 1,
              "system:index": "987"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.47840881347656, 20.44999495352313]),
            {
              "class": 1,
              "system:index": "988"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.77445220947266, 19.685566327277343]),
            {
              "class": 1,
              "system:index": "989"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.74715805053711, 19.725645226245106]),
            {
              "class": 1,
              "system:index": "990"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.875732421875, 19.609744544821364]),
            {
              "class": 1,
              "system:index": "991"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87985229492188, 19.652752341198166]),
            {
              "class": 1,
              "system:index": "992"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.85976791381836, 19.715626443005966]),
            {
              "class": 1,
              "system:index": "993"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.86405944824219, 19.529296390245214]),
            {
              "class": 1,
              "system:index": "994"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.88809204101562, 19.57588398072285]),
            {
              "class": 1,
              "system:index": "995"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.28992462158203, 18.13522799143425]),
            {
              "class": 1,
              "system:index": "996"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.25370407104492, 18.100966494956072]),
            {
              "class": 1,
              "system:index": "997"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.25078582763672, 18.17470196631703]),
            {
              "class": 1,
              "system:index": "998"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.32236862182617, 18.16410032848636]),
            {
              "class": 1,
              "system:index": "999"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3318099975586, 18.122013637004763]),
            {
              "class": 1,
              "system:index": "1000"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18400955200195, 18.17763769064386]),
            {
              "class": 1,
              "system:index": "1001"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.26984024047852, 18.22460255816366]),
            {
              "class": 1,
              "system:index": "1002"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.21319198608398, 18.095581936253673]),
            {
              "class": 1,
              "system:index": "1003"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0956039428711, 19.404066197800894]),
            {
              "class": 1,
              "system:index": "1004"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30606079101562, 19.318878821669685]),
            {
              "class": 1,
              "system:index": "1005"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.25456237792969, 19.290041085836002]),
            {
              "class": 1,
              "system:index": "1006"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.33970642089844, 19.295873846998543]),
            {
              "class": 1,
              "system:index": "1007"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.11071014404297, 19.191176634936685]),
            {
              "class": 1,
              "system:index": "1008"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.00736999511719, 19.46137253340518]),
            {
              "class": 1,
              "system:index": "1009"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.13165283203125, 19.183070353382963]),
            {
              "class": 1,
              "system:index": "1010"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.14539909362793, 18.411088021474622]),
            {
              "class": 1,
              "system:index": "1011"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.12960624694824, 18.411535926794514]),
            {
              "class": 1,
              "system:index": "1012"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.16514015197754, 18.389668643479556]),
            {
              "class": 1,
              "system:index": "1013"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.36126327514648, 18.517371706997388]),
            {
              "class": 1,
              "system:index": "1014"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.34246635437012, 18.52070854190873]),
            {
              "class": 1,
              "system:index": "1015"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.37006092071533, 18.556270272135624]),
            {
              "class": 1,
              "system:index": "1016"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41057300567627, 18.575512833923007]),
            {
              "class": 1,
              "system:index": "1017"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.40877056121826, 18.5949565993283]),
            {
              "class": 1,
              "system:index": "1018"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44224452972412, 18.54325081796408]),
            {
              "class": 1,
              "system:index": "1019"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.54185104370117, 18.437904297290498]),
            {
              "class": 1,
              "system:index": "1020"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.59832763671875, 18.54649051710713]),
            {
              "class": 1,
              "system:index": "1021"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.79452323913574, 18.54332710671946]),
            {
              "class": 1,
              "system:index": "1022"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.75692939758301, 18.328200417625506]),
            {
              "class": 1,
              "system:index": "1023"
            })]),
    NonCropClass = /* color: 98ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-108.01654815673828, 25.056328268322584]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.0179214477539, 25.015578757666333]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.9458236694336, 25.10763471207818]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.92488098144531, 25.155520733822062]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.99689292907715, 25.15537506446826]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.98144340515137, 25.14698421618853]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.04916381835938, 25.190612266122415]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.1318187713623, 25.12740332697863]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.11233520507812, 25.1144302305264]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.13323497772217, 25.101861381982552]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.20631980895996, 25.19545670601773]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.18915367126465, 25.211299299869673]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.23309898376465, 25.20283949477611]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.17885398864746, 25.21782212154975]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.15301895141602, 25.223102244879236]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.11439514160156, 24.972287031471293]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.0791187286377, 24.962551100839875]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.13387870788574, 24.904255587530287]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.15851211547852, 24.914531297330445]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.1069278717041, 24.877394578550586]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.10787200927734, 24.83245746398647]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.07903289794922, 24.83876677867631]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.04624557495117, 24.848424859652162]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-108.0040168762207, 24.84515365857652]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.94479370117188, 24.80196765072332]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.95440673828125, 24.676306861954888]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.9520034790039, 24.628254104360245]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.92011737823486, 24.774534044422296]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.90853023529053, 24.76907874338431]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.92629718780518, 24.74996625176162]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.93144702911377, 24.75242154462067]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.92204856872559, 24.73364755243022]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.93887138366699, 24.733491638719833]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.95959949493408, 24.719268563015884]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.95393466949463, 24.721531987537713]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.94084548950195, 24.701447225625074]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.91483879089355, 24.72047215448496]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.90848731994629, 24.70701027129783]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.90181398391724, 24.713910734265404]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.69502639770508, 24.76738852559044]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.73399353027344, 24.597616675947318]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.75643825531006, 24.61514072110448]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.73970127105713, 24.65520317516753]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.42912292480469, 24.754236189218847]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.38792419433594, 24.768577038486143]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.36045837402344, 24.786656618465162]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39324569702148, 24.82302210187767]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.40740776062012, 24.808385644543364]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.42680549621582, 24.79451690737429]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44620323181152, 24.77589296158407]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.4708366394043, 24.767086524599662]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.46843338012695, 24.80585841652935]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.45221138000488, 24.8078451434614]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.48087882995605, 24.78980761193143]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.48735904693604, 24.775001630500682]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.49564170837402, 24.76666274777748]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.38655090332031, 24.80785001285105]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.2950553894043, 24.670554767165306]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.29951858520508, 24.754450534750323]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.33814239501953, 24.742758420422767]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.26518630981445, 24.71250971781782]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.35668182373047, 24.707207641546873]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.1771240234375, 24.78513709997134]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.22484588623047, 24.808200608402263]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.1390151977539, 24.724029259614422]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.1053695678711, 24.834326924083534]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.13781356811523, 24.852085386883896]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.15875625610352, 24.86789450480224]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.08880424499512, 24.86392294607224]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.1181583404541, 24.812826429059868]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.1108627319336, 24.860418523595307]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.1425322559814, 24.87023065621698]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.27222442626953, 24.298565909947094]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.36114501953125, 24.32265761661132]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.13489532470703, 24.409912573904837]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.21900939941406, 24.424292913202596]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39376068115234, 24.397719263878482]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44800567626953, 24.36863815987612]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.53074645996094, 24.337360694335676]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.48577117919922, 24.456798942297198]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.44903564453125, 24.43523337786954]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.50568389892578, 24.54645955490858]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.39032745361328, 24.592670676149307]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.1441650390625, 24.630750806860473]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.09266662597656, 24.642297407033944]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.05764770507812, 24.536153401280618]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.76487922668457, 24.633588794829837]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.75732612609863, 24.641936591932588]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.77105903625488, 24.62882952068758]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.79251670837402, 24.62992182913963]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.73870086669922, 24.59753863407559]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7177152633667, 24.62337271184271]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.71089172363281, 24.61264370684094]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.75114631652832, 24.57420681095702]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.78324699401855, 24.58520740716885]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.78779602050781, 24.606435093990427]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.72179222106934, 24.529701864955804]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69878959655762, 24.55000209970635]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.74949407577515, 24.55539623711987]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.74679040908813, 24.561426856878185]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.73887252807617, 24.557055174387187]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7386794090271, 24.560997501955264]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.76376342773438, 24.559907031422075]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.71346664428711, 24.533830495992458]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.75277709960938, 24.514777146783295]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.72458171844482, 24.48858261650252]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.72216773033142, 24.485399606221268]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6908073425293, 24.412364772088306]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70771598815918, 24.409941883327733]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.76565170288086, 24.313892636884546]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.73063278198242, 24.313066458636953]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.79174423217773, 24.283261780687884]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.76226139068604, 24.286591685969107]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.75396800041199, 24.27243409534196]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.78702354431152, 24.259006092718913]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.13678359985352, 24.142191340598156]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.15978622436523, 24.168348664278085]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.0533561706543, 24.150023436297527]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.08459854125977, 24.230666067210663]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.02451705932617, 24.243971111130474]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.9984245300293, 24.243345022606963]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.97250366210938, 24.27683643033766]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.98280334472656, 24.139528318736694]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.98554992675781, 24.101456709854595]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.00374603271484, 23.972273724121163]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.00614929199219, 23.98262568807165]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-107.05558776855469, 24.00928600556688]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.92289352416992, 24.06243331832726]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.9031933811645, 24.01003084688772]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.86710357666016, 23.95752858211823]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.89504146575928, 23.91624008112186]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.89143657684326, 23.92769490650483]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.91085040569305, 23.93414699268841]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.93681955337524, 23.88340235563537]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.93501710891724, 23.886129545691546]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.92950248718262, 23.89219194210349]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.93456649780273, 23.891093276454335]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.88169479370117, 23.819024486606054]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.8435001373291, 23.794916573887015]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.82195663452148, 23.772610807884245]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.80530548095703, 23.843284933179426]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.75466537475586, 23.860476481924586]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.75354957580566, 23.819495606430007]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.74694061279297, 23.915646717033038]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.73638343811035, 23.944831114701454]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.75440788269043, 23.9729109428964]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.63604736328125, 24.009423213502703]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56429290771484, 24.074012280672108]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.63227081298828, 24.130422714661236]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5107774734497, 24.08333248795645]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5150260925293, 24.08983615132101]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.48524284362793, 24.153092507899785]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5003490447998, 24.152661765455264]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.49107933044434, 24.163077493870798]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.51124954223633, 24.16879403639477]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.51236534118652, 24.1851934153868]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.52695655822754, 24.187229120814493]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46361351013184, 24.197642028879816]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4219856262207, 24.202182730056453]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.73355102539062, 23.752815164132]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.77492141723633, 23.73584507349592]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.72986030578613, 23.75061546230631]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7951774597168, 23.71761547705895]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.77818298339844, 23.720051475856142]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.74153327941895, 23.71227183645378]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.72445297241211, 23.733723656721825]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69818878173828, 23.77590978904528]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68900489807129, 23.79742965969411]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69097900390625, 23.7929531917802]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.71072006225586, 23.76114227008223]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.61184310913086, 23.68947049912608]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.64857864379883, 23.70911859288445]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.68119430541992, 23.636799033147238]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.6329574584961, 23.64293202620824]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.70076370239258, 23.673749895237346]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.69200897216797, 23.67705137896965]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.7490005493164, 23.61588179388887]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.72565460205078, 23.60062425780526]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.72393798828125, 23.591972288792007]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.58248901367188, 23.536428801661053]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56171798706055, 23.51234742122057]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.51700019836426, 23.512659779414495]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.53217077255249, 23.4879049409428]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5384578704834, 23.494017830931508]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.56030178070068, 23.499454006000185]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55154705047607, 23.508269480137287]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.49360933575434, 23.522234305369206]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.48069381713867, 23.533888561654273]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.48429870605469, 23.532727854830945]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4630126953125, 23.51232774508906]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.55982971191406, 23.482416628033615]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.59690856933594, 23.459742629365923]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.5176010131836, 23.60894140808003]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.38542175292969, 23.589750213745095]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42885208129883, 23.609722957138153]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.412672996521, 23.587267541140697]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42850875854492, 23.58439643148189]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42284393310547, 23.569135233009508]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46837711334229, 23.557530815337486]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46893501281738, 23.558828987552758]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.45927906036377, 23.551629870918006]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46193981170654, 23.532627030237908]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.45400047302246, 23.523146714219557]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.3916015625, 23.550906987011665]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.34302139282227, 23.59826468649136]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.38936996459961, 23.49897681227999]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.41829490661621, 23.461819273064645]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42129898071289, 23.479297216160557]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42799377441406, 23.253875285912244]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.40267372131348, 23.23715630167648]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4161491394043, 23.265624638489715]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.40722274780273, 23.25734500113929]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.3904857635498, 23.242046032737747]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.37795448303223, 23.220356344474634]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42078399658203, 23.202844280474462]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.36945724487305, 23.26026264632022]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.37572288513184, 23.273982607760374]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.39722347259521, 23.28183251051468]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.33169174194336, 23.188475969418597]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.27950668334961, 23.255048296333836]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.21358871459961, 23.18705581915336]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16329193115234, 23.255363725947014]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.0675048828125, 23.287533624995397]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.0481071472168, 23.247320037718193]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08552932739258, 23.162279661744808]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.01085662841797, 23.166856494728457]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.92914581298828, 23.18484666654977]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.87215423583984, 23.221450772253768]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.90348243713379, 23.2146770076573]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.9272575378418, 23.23841818491167]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.86949348449707, 23.182331738601743]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.90185165405273, 23.183594139716394]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.75825691223145, 23.135930239433858]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.74572563171387, 23.14595369274154]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.72649955749512, 23.14792672518226]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7393741607666, 23.173336785913353]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7602310180664, 23.19921536755907]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.79078674316406, 23.195428570794185]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.75868606567383, 23.213493782093003]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.80022811889648, 23.1738102195482]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.76057434082031, 23.229742496695344]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.75173377990723, 23.28115742720774]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7485580444336, 23.249538014904598]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7670545578003, 23.31328661013077]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77074527740479, 23.306271177151466]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77842712402344, 23.32101350379523]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77877044677734, 23.33192201917109]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77859878540039, 23.350283935862766]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7752513885498, 23.34445252934616]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77370643615723, 23.349101914703297]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.79825401306152, 23.343034040377674]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.80344676971436, 23.349934255699566]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.80951929092407, 23.34516915603106]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.80600023269653, 23.35239923495211]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8013653755188, 23.344341710441277]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.79902648925781, 23.359582135140936]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.79602241516113, 23.378491716063856]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.80803871154785, 23.37990982591193]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8119010925293, 23.368249361133287]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8481216430664, 23.378334147366328]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.85378646850586, 23.37549787877934]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.85867881774902, 23.3780190094093]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.85352897644043, 23.36202477432765]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.84760665893555, 23.391569264852937]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.83868026733398, 23.38542455329011]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.86297035217285, 23.352490347193886]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.85601806640625, 23.33822682616926]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.86005210876465, 23.34271881854869]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.87644577026367, 23.345555788065454]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.87764739990234, 23.322543065124012]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.89678764343262, 23.314897545643966]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88889122009277, 23.329084758384337]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.88923454284668, 23.33207964299354]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.91961860656738, 23.37675845008836]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.92365264892578, 23.346737840804234]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.92056274414062, 23.356666668202678]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.90888977050781, 23.35721824794276]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.897216796875, 23.337202315398425]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.92554092407227, 23.33207964299354]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.81542015075684, 23.364152197615603]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.78907012939453, 23.378806852896954]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.79645156860352, 23.40047071317301]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.78434944152832, 23.390387611687853]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77293395996094, 23.358085011472703]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.76289176940918, 23.305679972071058]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.753493309021, 23.331729914884587]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7307481765747, 23.33121763542904]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.73267936706543, 23.285419757093287]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.76005935668945, 23.295865583884716]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77877044677734, 23.284276579115726]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.87846279144287, 23.127726432438052]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.89906215667725, 23.146747841791615]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.89378356933594, 23.104286334331743]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.0455322265625, 23.04048251073121]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08673095703125, 23.21034832317748]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.99266052246094, 22.95135929628484]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.89515686035156, 22.990555474313016]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6829833984375, 22.831804149264567]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.82254409790039, 22.668184774345153]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.80387592315674, 22.669615325185376]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.78447818756104, 22.693491935782212]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.73808670043945, 22.698742846245835]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.77533721923828, 22.739595077667403]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.71165084838867, 22.718220431237363]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.68572998046875, 22.70856116225991]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.66667556762695, 22.72867067571324]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.64315795898438, 22.67086766367414]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.61878204345703, 22.665323627911704]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6390380859375, 22.61969563138363]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.68435668945312, 22.629202713725267]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.69345474243164, 22.59560808133853]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.63732147216797, 22.55883474792096]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6002426147461, 22.52569864937358]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.63491821289062, 22.49858138248605]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.56110382080078, 22.514281501140108]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.58101654052734, 22.466541270307687]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.58736801147461, 22.44020572928371]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.64727783203125, 22.41100868452592]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.62925338745117, 22.362915397250116]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.62616348266602, 22.290506073724718]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.45673370361328, 22.396883998381558]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.41913986206055, 22.384345153295648]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.43510437011719, 22.431161649075683]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.49312591552734, 22.5104755754654]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.38995742797852, 22.558517693771286]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.3420639038086, 22.545527755095772]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.32120704650879, 22.5295140658443]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.27983665466309, 22.52364720007379]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.24722099304199, 22.530351461329662]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.23408889770508, 22.510089030277832]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.26533126831055, 22.47202390684578]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.17096042633057, 22.475600392300997]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.14748573303223, 22.452437108142853]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.14104843139648, 22.459933066520925]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.14821529388428, 22.461202183368616]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.1346755027771, 22.434035092611794]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.13986825942993, 22.438250938966593]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.09727478027344, 22.48351393652126]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.09796142578125, 22.51459865688314]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.11478424072266, 22.549322806424655]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.10139465332031, 22.38847198660686]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.02140045166016, 22.35989909270447]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.96784210205078, 22.396407860358703]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.99513626098633, 22.437032434936004]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.06242752075195, 22.422910395151273]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.3145980834961, 21.899052690334422]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2157211303711, 21.91911989032531]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.45845031738281, 22.01081962071995]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2047348022461, 22.05823823566831]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.10242462158203, 22.17369484424021]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.09727478027344, 22.14158005017685]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2629280090332, 22.161950741962208]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.28472900390625, 22.18388816815529]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.21469116210938, 22.20852394757004]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.23649215698242, 22.22155532100128]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.21451950073242, 22.184682938169026]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.23735046386719, 22.179526787689074]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.20688056945801, 22.12117659372309]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.24606227874756, 22.132193634623892]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.27837753295898, 22.07018983335676]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.36540985107422, 22.116634360420377]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.39339065551758, 22.097549418284494]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.44351577758789, 21.873745675634723]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.47613143920898, 21.824671931321028]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.43785095214844, 21.798216110030538]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.4302978515625, 21.752783577378782]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.43905258178711, 21.629006750713156]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.35614013671875, 21.628049299346017]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.38583755493164, 21.625336486022693]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2874755859375, 21.59453450649937]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.25108337402344, 21.57282554678897]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.22378921508789, 21.64719712106383]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.17572402954102, 21.691317193335642]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15915870666504, 21.660210206718755]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15538215637207, 21.66068882657451]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.19563674926758, 21.66188536926685]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.0735855102539, 21.528280076594857]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.11916160583496, 21.53651363648544]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.04740715026855, 21.573873158617367]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.02071380615234, 21.564055242147177]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.0258207321167, 21.56480108790172]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.99153137207031, 21.55870699163226]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.95445251464844, 21.565332407118937]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9674129486084, 21.533160388442386]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.92372512817383, 21.52357925308301]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.94020462036133, 21.53707250362993]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.94818687438965, 21.550245177491934]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.93166446685791, 21.56334182087848]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.91869330406189, 21.564822290818586]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9018383026123, 21.522860642454013]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.89625930786133, 21.527331939726334]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.88930702209473, 21.50673089112273]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.87154006958008, 21.53076516385731]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.8853588104248, 21.489800712709336]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.87428665161133, 21.475504358472907]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.84699249267578, 21.474226403714784]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.8286247253418, 21.485647726555886]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.89883422851562, 21.48788396459431]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9165153503418, 21.510004896321963]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.88518714904785, 21.519347383769734]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82441902160645, 21.489481256443245]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.81120109558105, 21.516792233190557]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.84012603759766, 21.506251762226796]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.85360145568848, 21.5002625178276]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82999801635742, 21.534996700534695]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82141494750977, 21.582094154199083]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.83549118041992, 21.58353078514937]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7462272644043, 21.556232361212675]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.75481033325195, 21.55052957430873]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7557544708252, 21.554321478591326]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7691011428833, 21.55811328374862]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74167823791504, 21.561944901934204]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7297477722168, 21.570725311694027]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72584247589111, 21.581420728535956]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.71678733825684, 21.576831373984994]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.75343704223633, 21.54154835305481]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.75219249725342, 21.625989760062488]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.75601196289062, 21.629420646996422]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.75764274597168, 21.626012200721306]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.76167678833008, 21.62511457165026]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.76914405822754, 21.622361807736493]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.70640182495117, 21.563975418962862]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.71189498901367, 21.551442634004985]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72262382507324, 21.551008557161055]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.70657348632812, 21.547136733833703]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.68683242797852, 21.523170044688346]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.69249725341797, 21.52332973590633]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.65704917907715, 21.562463759113193]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.67286348342896, 21.56767467848096]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.90484237670898, 21.452259804125077]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.86973762512207, 21.46552003854995]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.90557193756104, 21.458455718921282]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9150562286377, 21.45977375224166]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.6121597290039, 21.423338725542582]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.60237503051758, 21.3943320016625]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72906112670898, 21.402962702961425]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.71670150756836, 21.372513235920668]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7037410736084, 21.349572052663337]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.68914985656738, 21.317992078600827]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72125053405762, 21.30871666868582]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72597122192383, 21.281526748728144]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.69266891479492, 21.299680576851433]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.66554641723633, 21.27872750092276]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.6392822265625, 21.270489405532174]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.65842247009277, 21.269209660010073]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.66065406799316, 21.257771440345138]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.68442916870117, 21.27392866648405]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.69215393066406, 21.252411968825715]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.68400001525879, 21.250412116065743]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.67979431152344, 21.23945244101673]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.68309879302979, 21.23017957959847]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.69155311584473, 21.236092377423404]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.71541404724121, 21.23673239544043]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7520637512207, 21.2192108994747]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7535228729248, 21.215050238549207]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.33068084716797, 19.196070609182524]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.34364128112793, 19.200771929783635]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.32089614868164, 19.19063960612871]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.34235382080078, 19.205311008412398]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.31059646606445, 19.192017638794983]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.30724906921387, 19.18999111617647]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.20569229125977, 24.62764942672086]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16024494171143, 24.707885033355748]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17427825927734, 24.696812382867492]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17547988891602, 24.714546668702436]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16642475128174, 24.728857988929892]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.16972923278809, 24.729620530965324]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17925643920898, 24.72843164549909]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18844032287598, 24.75368083771282]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.2132453918457, 24.7359082792673]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.14020347595215, 24.76786588049737]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.10698699951172, 24.715248385690447]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08750343322754, 24.74830256841646]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.07050895690918, 24.718678945133604]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.09359741210938, 24.687176621685005]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.0814094543457, 24.673138367981256]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.09703063964844, 24.655042287894478]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.07677459716797, 24.63811383819355]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.06544494628906, 24.619700569664214]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.04029655456543, 24.601128509807882]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.11162185668945, 24.596592372508784]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.12677097320557, 24.61726948393301]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.12762928009033, 24.609212669410564]),
            {
              "class": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.12569808959961, 24.605037747834093]),
            {
              "class": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.13091230392456, 24.596648465533082]),
            {
              "class": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.14561080932617, 24.597304508168417]),
            {
              "class": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.15385055541992, 24.595587571467284]),
            {
              "class": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.15144729614258, 24.620636903014173]),
            {
              "class": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18595123291016, 24.612131617677335]),
            {
              "class": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.18758201599121, 24.606903311201133]),
            {
              "class": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.20100075683594, 24.578651070566554]),
            {
              "class": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17556571960449, 24.586456194274973]),
            {
              "class": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.14964485168457, 24.565927676513432]),
            {
              "class": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.13410949707031, 24.555935394139027]),
            {
              "class": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.17453575134277, 24.543756223402408]),
            {
              "class": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.19539260864258, 24.54922138217456]),
            {
              "class": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.20929718017578, 24.54961174154785]),
            {
              "class": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.02218627929688, 24.513683834148058]),
            {
              "class": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.03866577148438, 24.514777146783295]),
            {
              "class": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.08707427978516, 24.50275018459504]),
            {
              "class": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.97137451171875, 24.53055102711117]),
            {
              "class": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.94974517822266, 24.552256394305985]),
            {
              "class": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.94493865966797, 24.508060933182037]),
            {
              "class": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.96965789794922, 24.455568397959834]),
            {
              "class": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.95026016235352, 24.452130623104345]),
            {
              "class": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.00725173950195, 24.430251676810265]),
            {
              "class": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.07076644897461, 24.411964217074168]),
            {
              "class": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.09376907348633, 24.414465222695902]),
            {
              "class": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.04759216308594, 24.339413514922857]),
            {
              "class": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.0814094543457, 24.32048720401226]),
            {
              "class": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42215728759766, 23.941977689423613]),
            {
              "class": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.38507843017578, 23.963313114141627]),
            {
              "class": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.33220672607422, 23.94354659085649]),
            {
              "class": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.30027770996094, 23.94103633940764]),
            {
              "class": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.23435974121094, 23.946056793470053]),
            {
              "class": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.26079559326172, 23.872299253926602]),
            {
              "class": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.40911102294922, 23.858798640110788]),
            {
              "class": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.25083923339844, 23.81797427584359]),
            {
              "class": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.19041442871094, 23.74351527833106]),
            {
              "class": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.27555847167969, 23.77807960901035]),
            {
              "class": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.1447525024414, 23.817346108335517]),
            {
              "class": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.05171203613281, 23.840900308839824]),
            {
              "class": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.072998046875, 23.980567125143136]),
            {
              "class": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.00227355957031, 23.78122136560975]),
            {
              "class": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.91712951660156, 23.855658760790078]),
            {
              "class": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.90476989746094, 23.91436190280796]),
            {
              "class": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.82305908203125, 23.88077566410973]),
            {
              "class": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.8810806274414, 23.71522854700491]),
            {
              "class": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7020378112793, 23.731592383798166]),
            {
              "class": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.66650390625, 23.78626765324725]),
            {
              "class": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.67036628723145, 23.802421328537903]),
            {
              "class": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.66658973693848, 23.809920741761555]),
            {
              "class": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6778335571289, 23.809994359509187]),
            {
              "class": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.66959381103516, 23.744958915551912]),
            {
              "class": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.69173812866211, 23.73042360642964]),
            {
              "class": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.66804885864258, 23.7184012880944]),
            {
              "class": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6694221496582, 23.714084180273282]),
            {
              "class": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.61457633972168, 23.663618929039078]),
            {
              "class": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6126880645752, 23.64647998873269]),
            {
              "class": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.64290046691895, 23.627923375803373]),
            {
              "class": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6361198425293, 23.646165491784917]),
            {
              "class": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7217788696289, 23.561115509697224]),
            {
              "class": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.6496810913086, 23.52586422871363]),
            {
              "class": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.7822036743164, 23.454073521038023]),
            {
              "class": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.74443817138672, 23.430449617196533]),
            {
              "class": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.68916320800781, 23.443994505337518]),
            {
              "class": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.62762260437012, 23.38739404315983]),
            {
              "class": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.62504768371582, 23.416224021978188]),
            {
              "class": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.63234329223633, 23.412522162963068]),
            {
              "class": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7791862487793, 22.462099481626616]),
            {
              "class": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.79412078857422, 22.47145879882411]),
            {
              "class": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.76339340209961, 22.531565428018112]),
            {
              "class": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.81557846069336, 22.532199659432067]),
            {
              "class": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.69970703125, 22.46495493355217]),
            {
              "class": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.70314025878906, 22.445917476197394]),
            {
              "class": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7077751159668, 22.420212763464036]),
            {
              "class": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.80510711669922, 22.42529061488205]),
            {
              "class": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.73292350769043, 22.372177226727636]),
            {
              "class": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72854614257812, 22.36951829641907]),
            {
              "class": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72438335418701, 22.367375241002243]),
            {
              "class": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74326610565186, 22.372018486045164]),
            {
              "class": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.73060607910156, 22.370942021016255]),
            {
              "class": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.73541259765625, 22.37118013381338]),
            {
              "class": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.71455574035645, 22.356972024200086]),
            {
              "class": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74103450775146, 22.350966380097592]),
            {
              "class": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74588394165039, 22.349676410377658]),
            {
              "class": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.74277257919312, 22.34288898839797]),
            {
              "class": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.73762273788452, 22.34368285598976]),
            {
              "class": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.18980026245117, 20.81322816715276]),
            {
              "class": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.30292510986328, 20.792848448071297]),
            {
              "class": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.25829315185547, 20.837776453028805]),
            {
              "class": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2461051940918, 20.80536545224822]),
            {
              "class": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.20833969116211, 20.714673947258216]),
            {
              "class": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.27082443237305, 20.718848555431062]),
            {
              "class": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.29228210449219, 20.725913014858566]),
            {
              "class": 2,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15941619873047, 20.708732960390616]),
            {
              "class": 2,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.21177291870117, 20.65493235082897]),
            {
              "class": 2,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.2189826965332, 20.628587193407927]),
            {
              "class": 2,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.15151977539062, 20.66906689482264]),
            {
              "class": 2,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.18636703491211, 20.62183952906664]),
            {
              "class": 2,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.08783340454102, 20.789317823222344]),
            {
              "class": 2,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.06311416625977, 20.830235902065308]),
            {
              "class": 2,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.09315490722656, 20.864887227440676]),
            {
              "class": 2,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.17023086547852, 20.914443987053893]),
            {
              "class": 2,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.20885467529297, 20.8950402145189]),
            {
              "class": 2,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.05624771118164, 20.892634613337545]),
            {
              "class": 2,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.03049850463867, 20.96414467014078]),
            {
              "class": 2,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.03255844116211, 20.998124018620118]),
            {
              "class": 2,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.98981475830078, 20.98145586991012]),
            {
              "class": 2,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.1701021194458, 20.747641185480568]),
            {
              "class": 2,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.16430854797363, 20.753821429602674]),
            {
              "class": 2,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.22687911987305, 20.762835504801895]),
            {
              "class": 2,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.18224716186523, 20.804242173788555]),
            {
              "class": 2,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.1058578491211, 20.910755859874715]),
            {
              "class": 2,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.88407135009766, 20.595649333353883]),
            {
              "class": 2,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.91325378417969, 20.583918522795663]),
            {
              "class": 2,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.87239837646484, 20.538754521428956]),
            {
              "class": 2,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9165153503418, 20.526537053423006]),
            {
              "class": 2,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9139404296875, 20.506761979269836]),
            {
              "class": 2,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.92406845092773, 20.47363703185139]),
            {
              "class": 2,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82879638671875, 20.59645278050968]),
            {
              "class": 2,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.78862762451172, 20.52589400176492]),
            {
              "class": 2,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72597122192383, 20.479587185512205]),
            {
              "class": 2,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.82381820678711, 20.486019524465597]),
            {
              "class": 2,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.80081558227539, 20.43793126677269]),
            {
              "class": 2,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.85300064086914, 20.37309285923527]),
            {
              "class": 2,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.87720489501953, 20.380656064202068]),
            {
              "class": 2,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.76940155029297, 20.404630580950315]),
            {
              "class": 2,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.84991073608398, 20.30194842527188]),
            {
              "class": 2,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.89986419677734, 20.32738390586798]),
            {
              "class": 2,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.71481323242188, 20.274737495720505]),
            {
              "class": 2,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.70983505249023, 20.32722293496054]),
            {
              "class": 2,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.67361450195312, 20.361023147288186]),
            {
              "class": 2,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.72820281982422, 20.40060827142223]),
            {
              "class": 2,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.66760635375977, 20.402378100554195]),
            {
              "class": 2,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.65387344360352, 20.35490746634912]),
            {
              "class": 2,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.75996017456055, 20.351527644027275]),
            {
              "class": 2,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.7989273071289, 20.208864075921724]),
            {
              "class": 2,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.81463432312012, 20.184350713134343]),
            {
              "class": 2,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.92269515991211, 20.058259317020003]),
            {
              "class": 2,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.89703178405762, 20.072609834720364]),
            {
              "class": 2,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.93050575256348, 20.080107054850856]),
            {
              "class": 2,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.95865821838379, 20.067450249182432]),
            {
              "class": 2,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.96320724487305, 20.040117739724266]),
            {
              "class": 2,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9769401550293, 20.024877195324056]),
            {
              "class": 2,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.98234748840332, 19.991084688930144]),
            {
              "class": 2,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.99470710754395, 19.976807393418394]),
            {
              "class": 2,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.00775337219238, 19.97729139072041]),
            {
              "class": 2,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9538516998291, 19.937114559799475]),
            {
              "class": 2,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.9278450012207, 19.94227842007075]),
            {
              "class": 2,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.93110656738281, 19.92718979187233]),
            {
              "class": 2,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.03890991210938, 19.860029957300892]),
            {
              "class": 2,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.01178741455078, 19.905552848230908]),
            {
              "class": 2,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.97367858886719, 19.801896641755956]),
            {
              "class": 2,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.95325088500977, 19.82789778148505]),
            {
              "class": 2,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.90102291107178, 19.819555875944843]),
            {
              "class": 2,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.90866184234619, 19.815357001663877]),
            {
              "class": 2,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.89720344543457, 19.82944701639519]),
            {
              "class": 2,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.88690376281738, 19.82371426713057]),
            {
              "class": 2,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.98096084594727, 20.90610548327268]),
            {
              "class": 2,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.95830154418945, 20.88621948837666]),
            {
              "class": 2,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.95109176635742, 20.935288217357723]),
            {
              "class": 2,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0621566772461, 20.868576481641945]),
            {
              "class": 2,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.13069248199463, 20.870115314985732]),
            {
              "class": 2,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.11721706390381, 20.84200280677659]),
            {
              "class": 2,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.14099216461182, 20.845732728573207]),
            {
              "class": 2,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.50881958007812, 21.14563193405008]),
            {
              "class": 2,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.54418182373047, 21.12156452466178]),
            {
              "class": 2,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.51208114624023, 21.12484712910752]),
            {
              "class": 2,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.54177856445312, 21.15574808552532]),
            {
              "class": 2,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.56109046936035, 21.158709755762363]),
            {
              "class": 2,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.56915855407715, 21.175678183196887]),
            {
              "class": 2,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.56890106201172, 21.12156452466178]),
            {
              "class": 2,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.60168838500977, 21.11379807367164]),
            {
              "class": 2,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.45989608764648, 21.09762333499036]),
            {
              "class": 2,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.43577766418457, 21.103148567676485]),
            {
              "class": 2,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.44873809814453, 21.123966437485546]),
            {
              "class": 2,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.43337440490723, 21.068312142717843]),
            {
              "class": 2,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.37500953674316, 21.077522566366877]),
            {
              "class": 2,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.31844711303711, 21.132052591358605]),
            {
              "class": 2,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.33303833007812, 21.11860211194207]),
            {
              "class": 2,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.3429946899414, 21.091937736028594]),
            {
              "class": 2,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.33574199676514, 21.057366514505205]),
            {
              "class": 2,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.36548233032227, 21.034509006944788]),
            {
              "class": 2,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.22892570495605, 21.11203655399846]),
            {
              "class": 2,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.11314010620117, 20.97119762317093]),
            {
              "class": 2,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.04979705810547, 20.972319653202554]),
            {
              "class": 2,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.06546115875244, 21.013323066706985]),
            {
              "class": 2,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.99447917938232, 21.006432355690887]),
            {
              "class": 2,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.95456790924072, 20.996416219943963]),
            {
              "class": 2,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93053531646729, 21.00915662832018]),
            {
              "class": 2,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.92148017883301, 21.0519372042061]),
            {
              "class": 2,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91740322113037, 21.04488806699069]),
            {
              "class": 2,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93778800964355, 21.072722204791805]),
            {
              "class": 2,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.07588958740234, 20.76634668521063]),
            {
              "class": 2,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.974609375, 20.70084473620476]),
            {
              "class": 2,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0621566772461, 20.80325929827261]),
            {
              "class": 2,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0020751953125, 20.79780321975697]),
            {
              "class": 2,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.99211883544922, 20.775976932638063]),
            {
              "class": 2,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.10816192626953, 20.775976932638063]),
            {
              "class": 2,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.10026550292969, 20.716209333349617]),
            {
              "class": 2,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.09597396850586, 20.732104180608772]),
            {
              "class": 2,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0650749206543, 20.744706484375595]),
            {
              "class": 2,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.08344268798828, 20.689794510743074]),
            {
              "class": 2,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.07031059265137, 20.695334778914518]),
            {
              "class": 2,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.07769203186035, 20.70922470632053]),
            {
              "class": 2,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.13691520690918, 20.69075805017785]),
            {
              "class": 2,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.16069030761719, 20.666908651087823]),
            {
              "class": 2,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.17871475219727, 20.63317583592498]),
            {
              "class": 2,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.14472579956055, 20.629882469752754]),
            {
              "class": 2,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.11253929138184, 20.635424923082766]),
            {
              "class": 2,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.12970542907715, 20.652934535795936]),
            {
              "class": 2,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.20206069946289, 20.641368779095043]),
            {
              "class": 2,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.17253494262695, 20.586499780279578]),
            {
              "class": 2,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.15605545043945, 20.537398189498834]),
            {
              "class": 2,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.1665267944336, 20.523171049955575]),
            {
              "class": 2,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.11674499511719, 20.59549868654082]),
            {
              "class": 2,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.11408424377441, 20.619037955565464]),
            {
              "class": 2,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0485954284668, 20.626187388724542]),
            {
              "class": 2,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.04782295227051, 20.550900691055453]),
            {
              "class": 2,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0434455871582, 20.53731781389581]),
            {
              "class": 2,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.02894020080566, 20.537237438250546]),
            {
              "class": 2,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.0668773651123, 20.503556327856117]),
            {
              "class": 2,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.06627655029297, 20.415017709369053]),
            {
              "class": 2,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.06318664550781, 20.392251587671062]),
            {
              "class": 2,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9387321472168, 20.536674807551027]),
            {
              "class": 2,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.95564079284668, 20.56279476369097]),
            {
              "class": 2,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93667221069336, 20.588990602121896]),
            {
              "class": 2,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.97701263427734, 20.588990602121896]),
            {
              "class": 2,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.96242141723633, 20.597667986287835]),
            {
              "class": 2,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.95263671875, 20.596141445239258]),
            {
              "class": 2,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.92379760742188, 20.6175919619784]),
            {
              "class": 2,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91461372375488, 20.616306622819224]),
            {
              "class": 2,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91057968139648, 20.613093227464027]),
            {
              "class": 2,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91238212585449, 20.620323271671563]),
            {
              "class": 2,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.89847755432129, 20.591159994455175]),
            {
              "class": 2,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9046573638916, 20.534826149251796]),
            {
              "class": 2,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.90259742736816, 20.49173804927054]),
            {
              "class": 2,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.85951042175293, 20.47790870269273]),
            {
              "class": 2,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.86448860168457, 20.43496546547024]),
            {
              "class": 2,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91366958618164, 20.43504589473474]),
            {
              "class": 2,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9248275756836, 20.432793859427974]),
            {
              "class": 2,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.93263816833496, 20.438021747947086]),
            {
              "class": 2,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.90182495117188, 20.41743088187014]),
            {
              "class": 2,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.85856628417969, 20.383079832003222]),
            {
              "class": 2,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87229919433594, 20.33930534793418]),
            {
              "class": 2,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.92354011535645, 20.33182060055379]),
            {
              "class": 2,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.96147727966309, 20.320311088604736]),
            {
              "class": 2,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.94619941711426, 20.346145929075345]),
            {
              "class": 2,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9405345916748, 20.350974392257978]),
            {
              "class": 2,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.85693550109863, 20.321357443260542]),
            {
              "class": 2,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.82251739501953, 20.360711333890208]),
            {
              "class": 2,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.78964424133301, 20.34381211777624]),
            {
              "class": 2,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.76192092895508, 20.356526938333346]),
            {
              "class": 2,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.765869140625, 20.280705390306068]),
            {
              "class": 2,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.79908561706543, 20.280946919146523]),
            {
              "class": 2,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.74415397644043, 20.28304015333628]),
            {
              "class": 2,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.76432418823242, 20.25647008463928]),
            {
              "class": 2,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.8112735748291, 20.20742429313541]),
            {
              "class": 2,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.82981300354004, 20.245196559993772]),
            {
              "class": 2,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.87221336364746, 20.219828138652904]),
            {
              "class": 2,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.91787528991699, 20.187286075701536]),
            {
              "class": 2,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.96079063415527, 20.171898723574195]),
            {
              "class": 2,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9936637878418, 20.16778980200232]),
            {
              "class": 2,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.98619651794434, 20.195905551492555]),
            {
              "class": 2,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-104.04232978820801, 20.19566389044513]),
            {
              "class": 2,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63496398925781, 20.41792356660524]),
            {
              "class": 2,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.29644775390625, 20.242790764421652]),
            {
              "class": 2,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.69607543945312, 20.327806453702866]),
            {
              "class": 2,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.34657287597656, 20.70722760578936]),
            {
              "class": 2,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.53334045410156, 20.745117847619728]),
            {
              "class": 2,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.50999450683594, 20.549142620364883]),
            {
              "class": 2,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.75581359863281, 20.691811914427255]),
            {
              "class": 2,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.59376525878906, 20.781072690143137]),
            {
              "class": 2,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.59857177734375, 20.742549317343126]),
            {
              "class": 2,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.58552551269531, 20.75860191594762]),
            {
              "class": 2,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.26554870605469, 20.38638856554861]),
            {
              "class": 2,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.22366333007812, 20.43079313968527]),
            {
              "class": 2,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.14057922363281, 20.293676969139632]),
            {
              "class": 2,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.54364013671875, 20.29110085368736]),
            {
              "class": 2,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.72834777832031, 20.197687790138055]),
            {
              "class": 2,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.69813537597656, 20.19059899139112]),
            {
              "class": 2,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.36236572265625, 20.472611813155105]),
            {
              "class": 2,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.13577270507812, 20.79262778643835]),
            {
              "class": 2,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.183837890625, 20.525351424826596]),
            {
              "class": 2,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.28340148925781, 20.33488898840095]),
            {
              "class": 2,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86111450195312, 21.866347852200235]),
            {
              "class": 2,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88729286193848, 21.93778104288612]),
            {
              "class": 2,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8978500366211, 21.886419655387847]),
            {
              "class": 2,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.82120323181152, 21.91015171428791]),
            {
              "class": 2,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.766357421875, 21.87526900216692]),
            {
              "class": 2,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.84935569763184, 21.810578041624314]),
            {
              "class": 2,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86806678771973, 21.72560685483014]),
            {
              "class": 2,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88961029052734, 21.763714604161834]),
            {
              "class": 2,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.9637680053711, 21.845845017012774]),
            {
              "class": 2,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.81577444076538, 21.657186389364806]),
            {
              "class": 2,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.77348136901855, 21.666599152344673]),
            {
              "class": 2,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.75251722335815, 21.667217341977413]),
            {
              "class": 2,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.7549204826355, 21.68023859157541]),
            {
              "class": 2,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.76090717315674, 21.686479600467308]),
            {
              "class": 2,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.92497253417969, 21.603632146687847]),
            {
              "class": 2,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97423934936523, 21.582243803921248]),
            {
              "class": 2,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.01904296875, 21.598524769975096]),
            {
              "class": 2,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.03998565673828, 21.608420108623214]),
            {
              "class": 2,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.1450424194336, 21.627730147480552]),
            {
              "class": 2,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.23155975341797, 21.71100484374349]),
            {
              "class": 2,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.24203109741211, 21.527801018740114]),
            {
              "class": 2,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.1893310546875, 21.412941316140866]),
            {
              "class": 2,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18950271606445, 21.32613756418221]),
            {
              "class": 2,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18229293823242, 21.203597813802475]),
            {
              "class": 2,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.08616256713867, 21.13396398160065]),
            {
              "class": 2,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.00754165649414, 21.12835983569901]),
            {
              "class": 2,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97320938110352, 21.041067976080768]),
            {
              "class": 2,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.85991287231445, 21.019277065716793]),
            {
              "class": 2,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.76824569702148, 21.119392761665402]),
            {
              "class": 2,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.85098648071289, 21.01190588978631]),
            {
              "class": 2,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.91398620605469, 20.963824073461833]),
            {
              "class": 2,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.04633712768555, 20.85285642173039]),
            {
              "class": 2,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09388732910156, 20.783861240537725]),
            {
              "class": 2,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.08444595336914, 20.719651351506283]),
            {
              "class": 2,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0216178894043, 20.69620795489414]),
            {
              "class": 2,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.01114654541016, 20.580061620897048]),
            {
              "class": 2,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.93647384643555, 20.53296742137132]),
            {
              "class": 2,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.86660766601562, 20.470259814973605]),
            {
              "class": 2,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88051223754883, 20.55434645094313]),
            {
              "class": 2,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.77116394042969, 20.564472315970413]),
            {
              "class": 2,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.6758918762207, 20.55756108398477]),
            {
              "class": 2,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.67091369628906, 20.625052739864426]),
            {
              "class": 2,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.71503067016602, 20.652683552151263]),
            {
              "class": 2,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.2549057006836, 20.366796610602478]),
            {
              "class": 2,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3211669921875, 20.48152696613467]),
            {
              "class": 2,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30391502380371, 20.513203226459595]),
            {
              "class": 2,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27799415588379, 20.54350661172322]),
            {
              "class": 2,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3021125793457, 20.578143177657797]),
            {
              "class": 2,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.24469184875488, 20.60015862570941]),
            {
              "class": 2,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.25584983825684, 20.645786359447616]),
            {
              "class": 2,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.16195106506348, 20.780741671748384]),
            {
              "class": 2,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.23113059997559, 20.783470044128006]),
            {
              "class": 2,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.14401245117188, 20.79855544819346]),
            {
              "class": 2,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.10830688476562, 20.86353380985512]),
            {
              "class": 2,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.04204559326172, 20.87508258153578]),
            {
              "class": 2,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.00325012207031, 20.944406656130123]),
            {
              "class": 2,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.33112335205078, 21.243582414261272]),
            {
              "class": 2,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.51256942749023, 21.37866757615589]),
            {
              "class": 2,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.57179260253906, 21.43116875460978]),
            {
              "class": 2,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.35129356384277, 21.4403565184149]),
            {
              "class": 2,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.3336124420166, 21.493634133203088]),
            {
              "class": 2,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27765083312988, 21.563656125786128]),
            {
              "class": 2,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.31850624084473, 21.58943678489034]),
            {
              "class": 2,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.22010427185059, 21.577863991434953]),
            {
              "class": 2,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.19799995422363, 21.664039121102654]),
            {
              "class": 2,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.11628913879395, 21.67656215193407]),
            {
              "class": 2,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09671974182129, 21.61593100733317]),
            {
              "class": 2,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0853042602539, 21.634043239374893]),
            {
              "class": 2,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09225654602051, 21.57993918105658]),
            {
              "class": 2,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.08513259887695, 21.56110175505831]),
            {
              "class": 2,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06968307495117, 21.54345940390797]),
            {
              "class": 2,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.04384803771973, 21.56581134108256]),
            {
              "class": 2,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0944881439209, 21.468715095377092]),
            {
              "class": 2,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.10186958312988, 21.420542184828545]),
            {
              "class": 2,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.11723327636719, 21.38506142178906]),
            {
              "class": 2,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09088325500488, 21.371394237171607]),
            {
              "class": 2,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.86344528198242, 20.855743902884807]),
            {
              "class": 2,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.79048919677734, 20.95789291093613]),
            {
              "class": 2,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.75924682617188, 20.816437320683928]),
            {
              "class": 2,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.77503967285156, 20.806649188813207]),
            {
              "class": 2,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.7389907836914, 20.705039797115397]),
            {
              "class": 2,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.66895294189453, 20.731532235878547]),
            {
              "class": 2,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.59239196777344, 20.82702704244228]),
            {
              "class": 2,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.62861251831055, 20.904982956972944]),
            {
              "class": 2,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.56423950195312, 20.95917534438451]),
            {
              "class": 2,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.61882781982422, 21.010463660581145]),
            {
              "class": 2,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.70380020101602, 21.039946462896086]),
            {
              "class": 2,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63307571411133, 21.049078538932072]),
            {
              "class": 2,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.52887725830078, 21.042670123123912]),
            {
              "class": 2,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.58071899414062, 21.15301649255105]),
            {
              "class": 2,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.59960174560547, 21.165503363285584]),
            {
              "class": 2,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.61951446533203, 21.214160081918354]),
            {
              "class": 2,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.70465850830078, 21.213199906950187]),
            {
              "class": 2,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.7522087097168, 21.17302699468756]),
            {
              "class": 2,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.83735275268555, 21.199596757382405]),
            {
              "class": 2,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.88644790649414, 21.17718883916913]),
            {
              "class": 2,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.94017791748047, 21.227601875564666]),
            {
              "class": 2,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.85846710205078, 21.270319439970788]),
            {
              "class": 2,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.9085922241211, 21.27207907392669]),
            {
              "class": 2,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.01347732543945, 21.18455181557226]),
            {
              "class": 2,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.02892684936523, 21.113307652681343]),
            {
              "class": 2,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.19852828979492, 21.179589850020548]),
            {
              "class": 2,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.28453063964844, 21.0696837310863]),
            {
              "class": 2,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39096069335938, 21.030813826941642]),
            {
              "class": 2,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.33396911621094, 21.082397853144304]),
            {
              "class": 2,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.31954956054688, 21.068302131077406]),
            {
              "class": 2,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41310501098633, 21.098574250190186]),
            {
              "class": 2,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.33070755004883, 20.999245846414183]),
            {
              "class": 2,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.43233108520508, 20.987065550717816]),
            {
              "class": 2,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.30066680908203, 21.011745642785428]),
            {
              "class": 2,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50151062011719, 21.021840867592115]),
            {
              "class": 2,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50468635559082, 21.00486988276749]),
            {
              "class": 2,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5062313079834, 21.01172060417599]),
            {
              "class": 2,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.52365493774414, 21.02417929687328]),
            {
              "class": 2,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50193977355957, 21.047371323859064]),
            {
              "class": 2,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.49550247192383, 21.07039955502876]),
            {
              "class": 2,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.47726345062256, 21.08077110685245]),
            {
              "class": 2,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.49593162536621, 21.08653721648295]),
            {
              "class": 2,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.51670265197754, 21.100190792054907]),
            {
              "class": 2,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.51078033447266, 21.07432401107693]),
            {
              "class": 2,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.49352836608887, 21.112602044127073]),
            {
              "class": 2,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.49588871002197, 21.124051504518132]),
            {
              "class": 2,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.49842071533203, 21.134139107746275]),
            {
              "class": 2,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.49799156188965, 21.14510659573922]),
            {
              "class": 2,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50949287414551, 21.130216232494014]),
            {
              "class": 2,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50502967834473, 21.123250871691656]),
            {
              "class": 2,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.52575778961182, 21.123491061993434]),
            {
              "class": 2,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.54133605957031, 21.119567905021317]),
            {
              "class": 2,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53039264678955, 21.127093869837548]),
            {
              "class": 2,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53635787963867, 21.124371756438475]),
            {
              "class": 2,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.53082180023193, 21.111961488775126]),
            {
              "class": 2,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.52880477905273, 21.099149801168743]),
            {
              "class": 2,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.49189758300781, 21.904149389843212]),
            {
              "class": 2,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.58150482177734, 21.926445306458884]),
            {
              "class": 2,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.68587493896484, 21.978667774994783]),
            {
              "class": 2,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41259002685547, 22.06873819570939]),
            {
              "class": 2,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46271514892578, 22.08973577531601]),
            {
              "class": 2,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.55335235595703, 22.144124063516013]),
            {
              "class": 2,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.44795227050781, 22.142852062592162]),
            {
              "class": 2,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42323303222656, 21.856042035284922]),
            {
              "class": 2,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.3864974975586, 21.780184305389973]),
            {
              "class": 2,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.31851959228516, 21.774445531593077]),
            {
              "class": 2,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.20419311523438, 21.757546697755007]),
            {
              "class": 2,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.61961364746094, 21.828954605130466]),
            {
              "class": 2,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.5296630859375, 21.594514554905608]),
            {
              "class": 2,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.61549377441406, 21.566739271134335]),
            {
              "class": 2,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.59695434570312, 21.44823556371194]),
            {
              "class": 2,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.7545394897461, 21.506062106602663]),
            {
              "class": 2,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.78406524658203, 21.26417055386084]),
            {
              "class": 2,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.76938819885254, 21.292003460515545]),
            {
              "class": 2,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.71265411376953, 21.29652930905848]),
            {
              "class": 2,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.72033596038818, 21.29223088085721]),
            {
              "class": 2,
              "system:index": "917"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.69808435440063, 21.30148733988252]),
            {
              "class": 2,
              "system:index": "918"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.83625030517578, 20.879804089321425]),
            {
              "class": 2,
              "system:index": "919"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.80329132080078, 20.91460433835164]),
            {
              "class": 2,
              "system:index": "920"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.89495849609375, 20.940258336351647]),
            {
              "class": 2,
              "system:index": "921"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.7442398071289, 20.945388608720563]),
            {
              "class": 2,
              "system:index": "922"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.73085021972656, 20.832000745714286]),
            {
              "class": 2,
              "system:index": "923"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.81599426269531, 20.80295841673197]),
            {
              "class": 2,
              "system:index": "924"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.82715225219727, 20.767490309214725]),
            {
              "class": 2,
              "system:index": "925"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.69256973266602, 20.774712997666303]),
            {
              "class": 2,
              "system:index": "926"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.7603759765625, 20.709856948743077]),
            {
              "class": 2,
              "system:index": "927"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.85015487670898, 20.684163704806792]),
            {
              "class": 2,
              "system:index": "928"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.84140014648438, 20.667460762869368]),
            {
              "class": 2,
              "system:index": "929"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.63763809204102, 20.814351378661414]),
            {
              "class": 2,
              "system:index": "930"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.57240676879883, 20.854139753531705]),
            {
              "class": 2,
              "system:index": "931"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.42666625976562, 20.851573078979595]),
            {
              "class": 2,
              "system:index": "932"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.4201031274414, 20.73538529545753]),
            {
              "class": 2,
              "system:index": "933"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.36727142333984, 20.737632868247264]),
            {
              "class": 2,
              "system:index": "934"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.35577011108398, 20.69781378265166]),
            {
              "class": 2,
              "system:index": "935"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.41121673583984, 20.66199978719482]),
            {
              "class": 2,
              "system:index": "936"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45430374145508, 20.64577631963776]),
            {
              "class": 2,
              "system:index": "937"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.34426879882812, 20.682075937566296]),
            {
              "class": 2,
              "system:index": "938"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.27217102050781, 20.651237878290182]),
            {
              "class": 2,
              "system:index": "939"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.28916549682617, 20.645294407985126]),
            {
              "class": 2,
              "system:index": "940"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.3784294128418, 20.614448886896767]),
            {
              "class": 2,
              "system:index": "941"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.31663131713867, 20.563347253003567]),
            {
              "class": 2,
              "system:index": "942"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.22685241699219, 20.663766594924564]),
            {
              "class": 2,
              "system:index": "943"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1971549987793, 20.68127294251877]),
            {
              "class": 2,
              "system:index": "944"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.24041366577148, 20.702791740632158]),
            {
              "class": 2,
              "system:index": "945"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.23028564453125, 20.546631055728067]),
            {
              "class": 2,
              "system:index": "946"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.35834503173828, 20.49936576702812]),
            {
              "class": 2,
              "system:index": "947"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.32263946533203, 20.414444575340735]),
            {
              "class": 2,
              "system:index": "948"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.3765869140625, 20.071330031482976]),
            {
              "class": 2,
              "system:index": "949"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.23513793945312, 20.259539965185]),
            {
              "class": 2,
              "system:index": "950"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.12184143066406, 19.96165147618414]),
            {
              "class": 2,
              "system:index": "951"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.26741027832031, 19.827998709300715]),
            {
              "class": 2,
              "system:index": "952"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.24818420410156, 20.036499252222754]),
            {
              "class": 2,
              "system:index": "953"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.60935974121094, 20.05907563870247]),
            {
              "class": 2,
              "system:index": "954"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.29899597167969, 19.696172859558985]),
            {
              "class": 2,
              "system:index": "955"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.26350498199463, 20.159737814657323]),
            {
              "class": 2,
              "system:index": "956"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.27839660644531, 20.160180961725775]),
            {
              "class": 2,
              "system:index": "957"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.25509357452393, 20.169688177504028]),
            {
              "class": 2,
              "system:index": "958"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.2958631515503, 20.201065932281505]),
            {
              "class": 2,
              "system:index": "959"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.29431819915771, 20.217819628488996]),
            {
              "class": 2,
              "system:index": "960"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.29736518859863, 20.2193499242993]),
            {
              "class": 2,
              "system:index": "961"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.28363227844238, 20.232316563422323]),
            {
              "class": 2,
              "system:index": "962"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.2956485748291, 20.204449035465615]),
            {
              "class": 2,
              "system:index": "963"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.2328634262085, 20.2048920554391]),
            {
              "class": 2,
              "system:index": "964"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.2088737487793, 20.207429327364164]),
            {
              "class": 2,
              "system:index": "965"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.20930290222168, 20.182215869269815]),
            {
              "class": 2,
              "system:index": "966"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.194411277771, 20.157199766297566]),
            {
              "class": 2,
              "system:index": "967"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.21453857421875, 20.13947256381958]),
            {
              "class": 2,
              "system:index": "968"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.18389701843262, 20.13604775872418]),
            {
              "class": 2,
              "system:index": "969"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.22835731506348, 20.120776243819577]),
            {
              "class": 2,
              "system:index": "970"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.22908687591553, 20.13197818684851]),
            {
              "class": 2,
              "system:index": "971"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.24801254272461, 20.12363724802791]),
            {
              "class": 2,
              "system:index": "972"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.35993576049805, 20.096057608114045]),
            {
              "class": 2,
              "system:index": "973"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.41847229003906, 20.174708438505142]),
            {
              "class": 2,
              "system:index": "974"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.50619125366211, 20.15601633678343]),
            {
              "class": 2,
              "system:index": "975"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.59099197387695, 20.138127833122795]),
            {
              "class": 2,
              "system:index": "976"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.54344177246094, 20.072357905774933]),
            {
              "class": 2,
              "system:index": "977"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.51889419555664, 20.0012373172095]),
            {
              "class": 2,
              "system:index": "978"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.42259216308594, 19.99252646251754]),
            {
              "class": 2,
              "system:index": "979"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.37229537963867, 19.98833217543124]),
            {
              "class": 2,
              "system:index": "980"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.38843154907227, 20.01672209080834]),
            {
              "class": 2,
              "system:index": "981"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.44164657592773, 19.891671367259338]),
            {
              "class": 2,
              "system:index": "982"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.36834716796875, 19.86051431219131]),
            {
              "class": 2,
              "system:index": "983"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.35564422607422, 19.785583198524773]),
            {
              "class": 2,
              "system:index": "984"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.31993865966797, 19.86794090195523]),
            {
              "class": 2,
              "system:index": "985"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.34191131591797, 19.869610827706108]),
            {
              "class": 2,
              "system:index": "986"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.27813911437988, 19.83267664320768]),
            {
              "class": 2,
              "system:index": "987"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.2553939819336, 19.83279775293597]),
            {
              "class": 2,
              "system:index": "988"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.22355079650879, 19.845877060037505]),
            {
              "class": 2,
              "system:index": "989"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.31384468078613, 20.025890253554554]),
            {
              "class": 2,
              "system:index": "990"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.30247211456299, 19.99467901600084]),
            {
              "class": 2,
              "system:index": "991"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.29929637908936, 19.9656800873379]),
            {
              "class": 2,
              "system:index": "992"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.26363372802734, 19.979353404237614]),
            {
              "class": 2,
              "system:index": "993"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.27328968048096, 19.971085020999187]),
            {
              "class": 2,
              "system:index": "994"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.30380249023438, 19.95801605790781]),
            {
              "class": 2,
              "system:index": "995"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.33590316772461, 19.91265453044663]),
            {
              "class": 2,
              "system:index": "996"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.36542892456055, 19.944446787619626]),
            {
              "class": 2,
              "system:index": "997"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.28822422027588, 19.80849321842048]),
            {
              "class": 2,
              "system:index": "998"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.28461933135986, 19.821211170906018]),
            {
              "class": 2,
              "system:index": "999"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.29311656951904, 19.824683197021667]),
            {
              "class": 2,
              "system:index": "1000"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.24058818817139, 19.845271560344134]),
            {
              "class": 2,
              "system:index": "1001"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.56266784667969, 19.68856653195987]),
            {
              "class": 2,
              "system:index": "1002"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.546875, 19.69333441835506]),
            {
              "class": 2,
              "system:index": "1003"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.51855087280273, 19.71878767931808]),
            {
              "class": 2,
              "system:index": "1004"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.54618835449219, 19.74415610337094]),
            {
              "class": 2,
              "system:index": "1005"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.56283950805664, 19.71280854708569]),
            {
              "class": 2,
              "system:index": "1006"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.55760383605957, 19.649125013711217]),
            {
              "class": 2,
              "system:index": "1007"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.58627128601074, 19.66876616312876]),
            {
              "class": 2,
              "system:index": "1008"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.645751953125, 19.64928667907766]),
            {
              "class": 2,
              "system:index": "1009"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.64841270446777, 19.69357684946289]),
            {
              "class": 2,
              "system:index": "1010"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.68085670471191, 19.71814129742462]),
            {
              "class": 2,
              "system:index": "1011"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.77621459960938, 19.668442871500982]),
            {
              "class": 2,
              "system:index": "1012"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89208602905273, 19.80900296544643]),
            {
              "class": 2,
              "system:index": "1013"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9152603149414, 19.908458120396876]),
            {
              "class": 2,
              "system:index": "1014"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97637176513672, 19.87100830492122]),
            {
              "class": 2,
              "system:index": "1015"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.83063125610352, 19.858738337029305]),
            {
              "class": 2,
              "system:index": "1016"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.96933364868164, 19.78832914259938]),
            {
              "class": 2,
              "system:index": "1017"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.041259765625, 19.821922740576642]),
            {
              "class": 2,
              "system:index": "1018"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97208023071289, 19.924113390709795]),
            {
              "class": 2,
              "system:index": "1019"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99336624145508, 19.945253614455115]),
            {
              "class": 2,
              "system:index": "1020"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9255599975586, 19.960582540808826]),
            {
              "class": 2,
              "system:index": "1021"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.86719512939453, 19.95638740368776]),
            {
              "class": 2,
              "system:index": "1022"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9427261352539, 19.991074606550885]),
            {
              "class": 2,
              "system:index": "1023"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.92367172241211, 20.011238074450333]),
            {
              "class": 2,
              "system:index": "1024"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.92641830444336, 20.0602648404674]),
            {
              "class": 2,
              "system:index": "1025"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90805053710938, 20.0609098274853]),
            {
              "class": 2,
              "system:index": "1026"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.96916198730469, 20.150053729909718]),
            {
              "class": 2,
              "system:index": "1027"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.0416030883789, 20.14006182418565]),
            {
              "class": 2,
              "system:index": "1028"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.07198715209961, 20.0991205733108]),
            {
              "class": 2,
              "system:index": "1029"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.09790802001953, 20.131681023364596]),
            {
              "class": 2,
              "system:index": "1030"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.18476867675781, 20.14135113826051]),
            {
              "class": 2,
              "system:index": "1031"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.1921501159668, 20.128296341786694]),
            {
              "class": 2,
              "system:index": "1032"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.11215591430664, 20.000430776836893]),
            {
              "class": 2,
              "system:index": "1033"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.19094848632812, 20.00962509207881]),
            {
              "class": 2,
              "system:index": "1034"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2005615234375, 19.945253614455115]),
            {
              "class": 2,
              "system:index": "1035"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.22150421142578, 19.92266090509046]),
            {
              "class": 2,
              "system:index": "1036"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.37033462524414, 19.92508170704131]),
            {
              "class": 2,
              "system:index": "1037"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.45256042480469, 19.914591297535985]),
            {
              "class": 2,
              "system:index": "1038"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.50337219238281, 19.9438013231828]),
            {
              "class": 2,
              "system:index": "1039"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.99844360351562, 19.631512617804237]),
            {
              "class": 2,
              "system:index": "1040"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.08667755126953, 19.644992387489857]),
            {
              "class": 2,
              "system:index": "1041"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06865310668945, 19.636100312625025]),
            {
              "class": 2,
              "system:index": "1042"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.04547882080078, 19.646770743357397]),
            {
              "class": 2,
              "system:index": "1043"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.14195251464844, 19.603437922917625]),
            {
              "class": 2,
              "system:index": "1044"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.12701797485352, 19.5879128773374]),
            {
              "class": 2,
              "system:index": "1045"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.16255187988281, 19.676353226285453]),
            {
              "class": 2,
              "system:index": "1046"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.22829818725586, 19.50379288882765]),
            {
              "class": 2,
              "system:index": "1047"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.2610855102539, 19.500556629603555]),
            {
              "class": 2,
              "system:index": "1048"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.25833892822266, 19.51770806562734]),
            {
              "class": 2,
              "system:index": "1049"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.22452163696289, 19.548284883886033]),
            {
              "class": 2,
              "system:index": "1050"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.19379425048828, 19.579341116947553]),
            {
              "class": 2,
              "system:index": "1051"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.1841812133789, 19.56316674202743]),
            {
              "class": 2,
              "system:index": "1052"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27619171142578, 19.480166708292355]),
            {
              "class": 2,
              "system:index": "1053"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.32477188110352, 19.420600503068723]),
            {
              "class": 2,
              "system:index": "1054"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30091094970703, 19.418172069095156]),
            {
              "class": 2,
              "system:index": "1055"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27426052093506, 19.429641041330854]),
            {
              "class": 2,
              "system:index": "1056"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.24147319793701, 19.45610714373428]),
            {
              "class": 2,
              "system:index": "1057"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.28374481201172, 19.44315790804694]),
            {
              "class": 2,
              "system:index": "1058"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.55300903320312, 20.309776720164397]),
            {
              "class": 2,
              "system:index": "1059"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.51249694824219, 20.073909781645735]),
            {
              "class": 2,
              "system:index": "1060"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.56742858886719, 19.984883903837574]),
            {
              "class": 2,
              "system:index": "1061"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.64707946777344, 20.362572146446016]),
            {
              "class": 2,
              "system:index": "1062"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.47953796386719, 20.25503074269368]),
            {
              "class": 2,
              "system:index": "1063"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.60862731933594, 20.098415290581723]),
            {
              "class": 2,
              "system:index": "1064"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.46443176269531, 19.698758726588515]),
            {
              "class": 2,
              "system:index": "1065"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.9248275756836, 19.665523114454125]),
            {
              "class": 2,
              "system:index": "1066"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.83556365966797, 19.744065220509]),
            {
              "class": 2,
              "system:index": "1067"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.90645980834961, 19.725160460869795]),
            {
              "class": 2,
              "system:index": "1068"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.8841438293457, 19.733239691776078]),
            {
              "class": 2,
              "system:index": "1069"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.80105972290039, 19.71853518670201]),
            {
              "class": 2,
              "system:index": "1070"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.80998611450195, 19.795274554487133]),
            {
              "class": 2,
              "system:index": "1071"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.78389358520508, 19.804642304445096]),
            {
              "class": 2,
              "system:index": "1072"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06642150878906, 19.77603259793549]),
            {
              "class": 2,
              "system:index": "1073"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09148406982422, 19.753738905845754]),
            {
              "class": 2,
              "system:index": "1074"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.94351196289062, 19.788632001179185]),
            {
              "class": 2,
              "system:index": "1075"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.94419860839844, 19.837404900280685]),
            {
              "class": 2,
              "system:index": "1076"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.96342468261719, 19.506685240719115]),
            {
              "class": 2,
              "system:index": "1077"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.01011657714844, 19.504419906565385]),
            {
              "class": 2,
              "system:index": "1078"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.02316284179688, 19.40309472978047]),
            {
              "class": 2,
              "system:index": "1079"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.05543518066406, 19.422522987562864]),
            {
              "class": 2,
              "system:index": "1080"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06230163574219, 19.40957107365266]),
            {
              "class": 2,
              "system:index": "1081"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.9417953491211, 19.048772421128177]),
            {
              "class": 2,
              "system:index": "1082"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88034057617188, 19.084466084823177]),
            {
              "class": 2,
              "system:index": "1083"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.85115814208984, 18.917938305351097]),
            {
              "class": 2,
              "system:index": "1084"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.02350616455078, 18.855894247806592]),
            {
              "class": 2,
              "system:index": "1085"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.94145202636719, 18.791552094273072]),
            {
              "class": 2,
              "system:index": "1086"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.95415496826172, 18.831525118229283]),
            {
              "class": 2,
              "system:index": "1087"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8648910522461, 18.72295838722674]),
            {
              "class": 2,
              "system:index": "1088"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8487548828125, 18.68783803326422]),
            {
              "class": 2,
              "system:index": "1089"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.83948516845703, 18.638071734013984]),
            {
              "class": 2,
              "system:index": "1090"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.83184623718262, 18.61370166357727]),
            {
              "class": 2,
              "system:index": "1091"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.78335189819336, 18.563425463369207]),
            {
              "class": 2,
              "system:index": "1092"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.9143295288086, 18.60683837270254]),
            {
              "class": 2,
              "system:index": "1093"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97612762451172, 18.55932664852244]),
            {
              "class": 2,
              "system:index": "1094"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.98265075683594, 18.568876836242797]),
            {
              "class": 2,
              "system:index": "1095"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.93595886230469, 18.646204479919607]),
            {
              "class": 2,
              "system:index": "1096"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.1124267578125, 18.620178322653484]),
            {
              "class": 2,
              "system:index": "1097"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.04513549804688, 18.522870328557577]),
            {
              "class": 2,
              "system:index": "1098"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.05886840820312, 18.42974127322777]),
            {
              "class": 2,
              "system:index": "1099"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.82472229003906, 18.380225557730824]),
            {
              "class": 2,
              "system:index": "1100"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.71039581298828, 18.390976890030423]),
            {
              "class": 2,
              "system:index": "1101"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.20272064208984, 18.14417974159149]),
            {
              "class": 2,
              "system:index": "1102"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.37678527832031, 18.193436747497344]),
            {
              "class": 2,
              "system:index": "1103"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.39910125732422, 18.245614418727563]),
            {
              "class": 2,
              "system:index": "1104"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.45368957519531, 18.247570777004515]),
            {
              "class": 2,
              "system:index": "1105"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.36373901367188, 17.99697861975806]),
            {
              "class": 2,
              "system:index": "1106"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.20890045166016, 17.963996519471944]),
            {
              "class": 2,
              "system:index": "1107"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.21199035644531, 18.019833883700034]),
            {
              "class": 2,
              "system:index": "1108"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.15465545654297, 17.965629441648257]),
            {
              "class": 2,
              "system:index": "1109"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.14675903320312, 17.997305144392225]),
            {
              "class": 2,
              "system:index": "1110"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.04376220703125, 18.16147020713991]),
            {
              "class": 2,
              "system:index": "1111"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.09251403808594, 18.15494570414766]),
            {
              "class": 2,
              "system:index": "1112"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.95449829101562, 18.25833035379734]),
            {
              "class": 2,
              "system:index": "1113"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.920166015625, 18.20322125192525]),
            {
              "class": 2,
              "system:index": "1114"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.8985366821289, 18.30038411881738]),
            {
              "class": 2,
              "system:index": "1115"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.97750091552734, 18.405310956362364]),
            {
              "class": 2,
              "system:index": "1116"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.9747543334961, 18.47533524219159]),
            {
              "class": 2,
              "system:index": "1117"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0743179321289, 18.559001180096935]),
            {
              "class": 2,
              "system:index": "1118"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0516586303711, 18.591870354806133]),
            {
              "class": 2,
              "system:index": "1119"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.90437316894531, 18.657589669774072]),
            {
              "class": 2,
              "system:index": "1120"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.854248046875, 18.763597836755633]),
            {
              "class": 2,
              "system:index": "1121"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.854248046875, 18.837374031895425]),
            {
              "class": 2,
              "system:index": "1122"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.14366912841797, 18.79870243833184]),
            {
              "class": 2,
              "system:index": "1123"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.18443870544434, 18.777524756150918]),
            {
              "class": 2,
              "system:index": "1124"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.16280937194824, 18.80840163830093]),
            {
              "class": 2,
              "system:index": "1125"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.20357894897461, 18.82611266081532]),
            {
              "class": 2,
              "system:index": "1126"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.46742248535156, 18.915949029506088]),
            {
              "class": 2,
              "system:index": "1127"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.30056762695312, 19.128869618262566]),
            {
              "class": 2,
              "system:index": "1128"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.47772216796875, 19.198917761191613]),
            {
              "class": 2,
              "system:index": "1129"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.76473999023438, 19.371316433123933]),
            {
              "class": 2,
              "system:index": "1130"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.80525207519531, 19.377146292133226]),
            {
              "class": 2,
              "system:index": "1131"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.87185668945312, 19.24819303575655]),
            {
              "class": 2,
              "system:index": "1132"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.19595336914062, 19.070473462165545]),
            {
              "class": 2,
              "system:index": "1133"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.35250854492188, 18.90425648092509]),
            {
              "class": 2,
              "system:index": "1134"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.436279296875, 18.959464104322546]),
            {
              "class": 2,
              "system:index": "1135"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.45808029174805, 18.398653093786205]),
            {
              "class": 2,
              "system:index": "1136"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.50357055664062, 18.41754690698607]),
            {
              "class": 2,
              "system:index": "1137"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.39714050292969, 18.320612745832396]),
            {
              "class": 2,
              "system:index": "1138"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.3344841003418, 18.318168324322027]),
            {
              "class": 2,
              "system:index": "1139"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.27234268188477, 18.329086473031982]),
            {
              "class": 2,
              "system:index": "1140"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.23097229003906, 18.365583934481435]),
            {
              "class": 2,
              "system:index": "1141"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1020975112915, 18.381401517358892]),
            {
              "class": 2,
              "system:index": "1142"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.1193494796753, 18.36197424744116]),
            {
              "class": 2,
              "system:index": "1143"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.12943458557129, 18.41984232327347]),
            {
              "class": 2,
              "system:index": "1144"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.0982780456543, 18.425990427100043]),
            {
              "class": 2,
              "system:index": "1145"
            }),
        ee.Feature(
            ee.Geometry.Point([-103.07188510894775, 18.45025496869576]),
            {
              "class": 2,
              "system:index": "1146"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.64423370361328, 18.38250619940069]),
            {
              "class": 2,
              "system:index": "1147"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.79563903808594, 18.413129035134332]),
            {
              "class": 2,
              "system:index": "1148"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.60003089904785, 18.485134328414194]),
            {
              "class": 2,
              "system:index": "1149"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.59822845458984, 18.463398527145053]),
            {
              "class": 2,
              "system:index": "1150"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.58028984069824, 18.4894485978953]),
            {
              "class": 2,
              "system:index": "1151"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.6152229309082, 18.51923851137968]),
            {
              "class": 2,
              "system:index": "1152"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.63504981994629, 18.527946604831083]),
            {
              "class": 2,
              "system:index": "1153"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.67397403717041, 18.530517747383854]),
            {
              "class": 2,
              "system:index": "1154"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.67905950546265, 18.528645979779554]),
            {
              "class": 2,
              "system:index": "1155"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.71942138671875, 18.55965211632721]),
            {
              "class": 2,
              "system:index": "1156"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.67478942871094, 18.57429752492939]),
            {
              "class": 2,
              "system:index": "1157"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.60578155517578, 18.6803577575567]),
            {
              "class": 2,
              "system:index": "1158"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.6401138305664, 18.826650867951347]),
            {
              "class": 2,
              "system:index": "1159"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.64732360839844, 18.87928528256117]),
            {
              "class": 2,
              "system:index": "1160"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.55325317382812, 18.902348244379375]),
            {
              "class": 2,
              "system:index": "1161"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.89672088623047, 18.62849492655112]),
            {
              "class": 2,
              "system:index": "1162"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.90496063232422, 18.620686684197988]),
            {
              "class": 2,
              "system:index": "1163"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.97156524658203, 18.63093492873445]),
            {
              "class": 2,
              "system:index": "1164"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.83852767944336, 18.631910919799157]),
            {
              "class": 2,
              "system:index": "1165"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.83887100219727, 18.640857243335525]),
            {
              "class": 2,
              "system:index": "1166"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.8464241027832, 18.657122078801272]),
            {
              "class": 2,
              "system:index": "1167"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9837532043457, 18.64850191008286]),
            {
              "class": 2,
              "system:index": "1168"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.99336624145508, 18.645899508976726]),
            {
              "class": 2,
              "system:index": "1169"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.98941802978516, 18.66541654473463]),
            {
              "class": 2,
              "system:index": "1170"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.00555419921875, 18.6621638613296]),
            {
              "class": 2,
              "system:index": "1171"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.03971481323242, 18.666717600631635]),
            {
              "class": 2,
              "system:index": "1172"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.04949951171875, 18.61775850086878]),
            {
              "class": 2,
              "system:index": "1173"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.93929290771484, 18.477634974198622]),
            {
              "class": 2,
              "system:index": "1174"
            }),
        ee.Feature(
            ee.Geometry.Point([-100.9562873840332, 18.43285588924097]),
            {
              "class": 2,
              "system:index": "1175"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.0577392578125, 18.450443249768533]),
            {
              "class": 2,
              "system:index": "1176"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.06803894042969, 18.454188473618398]),
            {
              "class": 2,
              "system:index": "1177"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.07799530029297, 18.456142471023643]),
            {
              "class": 2,
              "system:index": "1178"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.17532730102539, 18.494403768663197]),
            {
              "class": 2,
              "system:index": "1179"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.17103576660156, 18.486914995254825]),
            {
              "class": 2,
              "system:index": "1180"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.17515563964844, 18.467051881076102]),
            {
              "class": 2,
              "system:index": "1181"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.1375617980957, 18.54404930524891]),
            {
              "class": 2,
              "system:index": "1182"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.35557174682617, 18.55072186832844]),
            {
              "class": 2,
              "system:index": "1183"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.37411117553711, 18.543235560208917]),
            {
              "class": 2,
              "system:index": "1184"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.3902473449707, 18.544700298489577]),
            {
              "class": 2,
              "system:index": "1185"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.392822265625, 18.58391806019851]),
            {
              "class": 2,
              "system:index": "1186"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.40621185302734, 18.591890692679602]),
            {
              "class": 2,
              "system:index": "1187"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.34681701660156, 18.619873304997327]),
            {
              "class": 2,
              "system:index": "1188"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.3650131225586, 18.6419958325337]),
            {
              "class": 2,
              "system:index": "1189"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.29995346069336, 18.654682452828407]),
            {
              "class": 2,
              "system:index": "1190"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2884521484375, 18.638905358381447]),
            {
              "class": 2,
              "system:index": "1191"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.27557754516602, 18.661838589558737]),
            {
              "class": 2,
              "system:index": "1192"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.2554931640625, 18.65500773831778]),
            {
              "class": 2,
              "system:index": "1193"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.35690212249756, 18.61883115721092]),
            {
              "class": 2,
              "system:index": "1194"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.53873443603516, 19.469465017980955]),
            {
              "class": 2,
              "system:index": "1195"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.64413452148438, 19.46655177007254]),
            {
              "class": 2,
              "system:index": "1196"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.43745422363281, 19.407952011861823]),
            {
              "class": 2,
              "system:index": "1197"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.4858627319336, 19.586275382894478]),
            {
              "class": 2,
              "system:index": "1198"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.47727966308594, 19.55716159223329]),
            {
              "class": 2,
              "system:index": "1199"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.80309295654297, 19.46881763408196]),
            {
              "class": 2,
              "system:index": "1200"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.89922332763672, 19.53127825432991]),
            {
              "class": 2,
              "system:index": "1201"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.85218811035156, 19.50215454068655]),
            {
              "class": 2,
              "system:index": "1202"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.88789367675781, 19.376215148095312]),
            {
              "class": 2,
              "system:index": "1203"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.79313659667969, 19.27318971966707]),
            {
              "class": 2,
              "system:index": "1204"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.5407943725586, 19.333133800977713]),
            {
              "class": 2,
              "system:index": "1205"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63932800292969, 19.406656750823505]),
            {
              "class": 2,
              "system:index": "1206"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.5407943725586, 19.50733247322126]),
            {
              "class": 2,
              "system:index": "1207"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.60980224609375, 19.51542266093245]),
            {
              "class": 2,
              "system:index": "1208"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.36947631835938, 19.62605571766578]),
            {
              "class": 2,
              "system:index": "1209"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.42578125, 19.734996870398586]),
            {
              "class": 2,
              "system:index": "1210"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.40552520751953, 19.810274802388598]),
            {
              "class": 2,
              "system:index": "1211"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.66267395019531, 19.777971032523585]),
            {
              "class": 2,
              "system:index": "1212"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.62078857421875, 19.81899569600275]),
            {
              "class": 2,
              "system:index": "1213"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.64224624633789, 19.8312182729797]),
            {
              "class": 2,
              "system:index": "1214"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.67683601379395, 19.781070459662182]),
            {
              "class": 2,
              "system:index": "1215"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.6484260559082, 19.769924355574904]),
            {
              "class": 2,
              "system:index": "1216"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.87793731689453, 20.23832132146121]),
            {
              "class": 2,
              "system:index": "1217"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.95072174072266, 20.2557151866814]),
            {
              "class": 2,
              "system:index": "1218"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0135498046875, 20.13585133380292]),
            {
              "class": 2,
              "system:index": "1219"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.85356140136719, 20.174527168101758]),
            {
              "class": 2,
              "system:index": "1220"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.68670654296875, 20.27568351793645]),
            {
              "class": 2,
              "system:index": "1221"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.63314819335938, 20.09297443132833]),
            {
              "class": 2,
              "system:index": "1222"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.72996520996094, 19.944587982613452]),
            {
              "class": 2,
              "system:index": "1223"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.7605209350586, 19.98202036948116]),
            {
              "class": 2,
              "system:index": "1224"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.0029067993164, 19.910374763798057]),
            {
              "class": 2,
              "system:index": "1225"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.06916809082031, 19.882288572381945]),
            {
              "class": 2,
              "system:index": "1226"
            }),
        ee.Feature(
            ee.Geometry.Point([-101.99432373046875, 19.980407087770878]),
            {
              "class": 2,
              "system:index": "1227"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.20340728759766, 19.94942887744983]),
            {
              "class": 2,
              "system:index": "1228"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27653503417969, 19.890682668838483]),
            {
              "class": 2,
              "system:index": "1229"
            }),
        ee.Feature(
            ee.Geometry.Point([-102.27164268493652, 19.88522453891413]),
            {
              "class": 2,
              "system:index": "1230"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.4903793334961, 25.184398674415093]),
            {
              "class": 2,
              "system:index": "1231"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.50539970397949, 25.197398311201075]),
            {
              "class": 2,
              "system:index": "1232"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.50076484680176, 25.21774447096732]),
            {
              "class": 2,
              "system:index": "1233"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.51544189453125, 25.215885695358637]),
            {
              "class": 2,
              "system:index": "1234"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.51338195800781, 25.093041772313974]),
            {
              "class": 2,
              "system:index": "1235"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.38532257080078, 25.1337655177719]),
            {
              "class": 2,
              "system:index": "1236"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.54410934448242, 25.131278960514795]),
            {
              "class": 2,
              "system:index": "1237"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.46733379364014, 25.152388804388554]),
            {
              "class": 2,
              "system:index": "1238"
            }),
        ee.Feature(
            ee.Geometry.Point([-105.44647693634033, 25.165479249534183]),
            {
              "class": 2,
              "system:index": "1239"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.46970748901367, 24.686713579498868]),
            {
              "class": 2,
              "system:index": "1240"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.45026683807373, 24.67251928360447]),
            {
              "class": 2,
              "system:index": "1241"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.45884990692139, 24.66039045974598]),
            {
              "class": 2,
              "system:index": "1242"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.44125461578369, 24.648299462106085]),
            {
              "class": 2,
              "system:index": "1243"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.43859386444092, 24.654618129544332]),
            {
              "class": 2,
              "system:index": "1244"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.4450740814209, 24.630628898717006]),
            {
              "class": 2,
              "system:index": "1245"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.45657539367676, 24.63714350325916]),
            {
              "class": 2,
              "system:index": "1246"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.42606258392334, 24.61346304514161]),
            {
              "class": 2,
              "system:index": "1247"
            }),
        ee.Feature(
            ee.Geometry.Point([-106.39992713928223, 24.62372382735739]),
            {
              "class": 2,
              "system:index": "1248"
            })]);
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
Map.addLayer(SMexBasinRange,vizParams,'FCC');

//throw('stop')


var input=ee.ImageCollection([input1,input2,input3]).mosaic()

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

var studyArea = zones.filterMetadata('name','equals','SMexBasinRange');

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
var classifier = ee.Classifier.randomForest(250,5)
                   .train(training, 'class')
                   

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);

classified = classified.updateMask(classified.eq(1)).clip(studyArea);

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'SMexBasinRange_v1_asset',
  assetId: 'SMexBasinRange_2010_v1',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'SMexBasinRange',
  fileNamePrefix: 'SMexBasinRange_2010_v1',
  region: studyArea, 
});


Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_SMexBasinRange_v1',
  folder: 'SMexBasinRange',
  fileNamePrefix: 'RFtable_SMexBasinRange_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');



