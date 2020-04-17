/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var Baja = ee.Image("users/images/RHseg/Baja_2007-13_RHsegTOA"),
    input = ee.Image("users/images/input/Baja_2007-13_InputTOA"),
    Cropclass = /* color: bf04c2 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-111.81541442871094, 25.352713536927975]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.76546096801758, 25.324321690737968]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65353775024414, 25.29452636575052]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60152435302734, 25.33471729268673]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.71859741210938, 25.36869071618927]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.79636001586914, 25.405445716910712]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.76803588867188, 25.412113146226133]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.9125747680664, 25.459084810787594]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.72821044921875, 25.21161962516947]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65388107299805, 25.225286052416017]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53715133666992, 25.219695426829954]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60152435302734, 25.15460786966824]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.81524276733398, 25.086998114429566]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.70246124267578, 25.019973201315157]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.63414001464844, 24.961160190729043]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.73336029052734, 24.929719486074465]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.80219650268555, 24.95835886951614]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.81884765625, 24.96458394118911]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.82588577270508, 24.962872077864056]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6265869140625, 24.899827816205097]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5987777709961, 24.931276145384565]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.67688369750977, 24.886903654493395]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58658981323242, 25.06149875520132]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51680946350098, 25.08886371269851]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60152435302734, 25.120729955557753]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7745590209961, 25.071450356379245]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.35148620605469, 24.035803618957708]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.37981033325195, 24.08173100816614]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33590793609619, 24.094738167379017]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.39663314819336, 24.02153613721194]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.4096794128418, 24.072797616268492]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.41156768798828, 24.089096670083006]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.41894912719727, 24.083768361255178]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.99494552612305, 24.009776033237035]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.99631881713867, 24.024515192798084]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90945816040039, 23.944056479714874]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94876861572266, 23.95017498883875]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93022918701172, 23.982331609667682]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9595832824707, 23.988134632719902]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94773864746094, 23.92114871587334]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.92284774780273, 23.966332732831717]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.71685409545898, 23.183998500054635]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.72672462463379, 23.182499401935733]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.68475341796875, 23.168967308952006]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.68020439147949, 23.18131589155594]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21990776062012, 23.467970277157765]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23536801338196, 23.452124708839033]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.27745723724365, 23.496428470170724]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.27928113937378, 23.521712926043723]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.26230812072754, 23.643187561349578]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.26857376098633, 23.63622896470974]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.28522491455078, 23.79445518175849]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.29655456542969, 23.771599496307694]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.26016235351562, 23.771678045061286]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33260345458984, 23.91039949451501]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.34732341766357, 23.924875426875797]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7045373916626, 23.10243108128333]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.70518112182617, 23.11652246769386]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.69925880432129, 23.144306188401632]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.3415298461914, 24.063863602060746]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.34680843353271, 24.062609655539624]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33077955245972, 24.05238169667916]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33526420593262, 24.044073329488906]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.35174369812012, 24.0444652456828]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.36672115325928, 24.03353033510018]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.39448738098145, 24.080594777956115]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.37427425384521, 24.09152567853427]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.36333084106445, 24.103591683093317]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.53705215454102, 24.15468330547918]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.24565696716309, 23.451553839213908]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.24911165237427, 23.461474808360258]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2247142791748, 23.467497890205493]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2058744430542, 23.48623460902169]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.19917964935303, 23.496271042015064]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.19597172737122, 23.501712043570308]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.19041419029236, 23.498671800955663]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.0466799736023, 23.356400727151513]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.69256401062012, 23.187548928593113]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.73456192016602, 25.18303940898658]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.76872253417969, 25.186767643632514]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.82519912719727, 25.179621760350997]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.82640075683594, 25.16890214979725]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.74846649169922, 25.182573371634845]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.73559188842773, 25.161910591644858]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.6925048828125, 25.156317056548588]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.71379089355469, 25.10720724725425]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62538528442383, 25.177291490420092]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66057586669922, 25.1763593699729]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.63002010160156, 25.15616167691254]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68220520019531, 25.22435429932953]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.71104431152344, 25.23786402034889]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.69164657592773, 25.22435429932953]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7086410522461, 25.261308362334248]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.71258926391602, 25.28102294746017]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.73816680908203, 25.29871677603037]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.64701461791992, 25.29794078505489]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.83292388916016, 25.22388842010948]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.86159133911133, 25.162687451233257]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.9173812866211, 25.14481842903966]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.9477653503418, 25.124460094555722]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89506530761719, 25.112803032128163]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.83807373046875, 25.10720724725425]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8136978149414, 25.093372124430037]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.67396545410156, 25.008150623640677]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.79738998413086, 24.95135528760142]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33294677734375, 24.03486295465371]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.35753726959229, 24.048325556277344]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.37335157394409, 24.05794643439718]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.37086248397827, 24.0676645525741]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.38470268249512, 24.06938865794715]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.3961181640625, 24.062923143318795]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.32625198364258, 24.05900449103119]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.32590866088867, 24.105707034318236]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.20508050918579, 23.872318875887427]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22907018661499, 23.876596392350287]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93125915527344, 23.960371859104146]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9127197265625, 23.965705285419645]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.92490768432617, 23.95723444643777]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93613004684448, 23.963097424385616]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94379043579102, 23.971352202164848]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.97983932495117, 23.962960167080258]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.95975494384766, 23.94240913921926]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91117477416992, 23.9349566218459]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93778228759766, 23.94107556246208]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93452072143555, 23.949233698630838]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.00284194946289, 23.99189861594905]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90029573440552, 23.964901363959232]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.89288210868835, 23.96223466175275]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.99855041503906, 24.011030495565837]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9951171875, 24.01816501737049]),
            {
              "class": 1,
              "system:index": "129"
            })]),
    NonCropClass = /* color: ff0000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-110.30187606811523, 23.915342678179538]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.28144836425781, 23.958332549554846]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.26278018951416, 23.92518925026166]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.25917530059814, 23.94652745102303]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.23617267608643, 23.95178301038685]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.34805297851562, 23.993780566296852]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.47988891601562, 24.10915419847753]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.36230087280273, 24.075932210619687]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.3785228729248, 24.096775313691197]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.34513473510742, 24.109859288804227]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33921241760254, 24.11894677208491]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.29629707336426, 24.142524214430367]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.3195571899414, 24.146753594703075]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.31286239624023, 24.142602537559043]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.29307842254639, 24.161163765356523]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.29458045959473, 24.174632672202755]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.27719974517822, 24.17858693604804]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.36384582519531, 24.161163765356523]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.53688049316406, 24.18246277873306]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.63987731933594, 24.135474936349553]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.75660705566406, 24.000053535406114]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.72931289672852, 23.91801034952365]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.76278686523438, 23.92522847813127]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.79814910888672, 23.915342678179538]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.72158813476562, 23.85098804952445]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.70545196533203, 23.89007553097553]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.99923706054688, 23.474898424849076]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93881225585938, 23.537235372932244]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.0112533569336, 23.5369206140002]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.12935638427734, 23.517718895165444]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90104675292969, 23.415367484022415]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.97211456298828, 23.43552911291689]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9405288696289, 23.467655352710786]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90036010742188, 23.372198670565286]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9844741821289, 23.391421558783794]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.88182067871094, 23.46041188303517]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90053176879883, 23.463403799127835]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.87220764160156, 23.51016335267617]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.81744766235352, 23.551084020172627]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83701705932617, 23.52857922788348]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.82465744018555, 23.585541933106374]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83890533447266, 23.596868586808306]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.84216690063477, 23.632258074318383]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.81847763061523, 23.66732355381199]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93589401245117, 23.39882635350819]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93018627166748, 23.410562892476534]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.92705345153809, 23.397014580292375]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.92439270019531, 23.40335567808728]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91649627685547, 23.40296182992732]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.10704040527344, 23.214686867826302]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.10721206665039, 23.255225725583074]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1437759399414, 23.24142496796144]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.12377738952637, 23.2549102956434]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1382827758789, 23.270207787981082]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1174259185791, 23.19993524126912]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.12429237365723, 23.19007362044364]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.0335693359375, 23.18928465935961]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.03030776977539, 23.239926514058936]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.0115966796875, 23.125836969841597]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.99992370605469, 22.93689493395223]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94430541992188, 23.019708156973408]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93743896484375, 22.976095304428483]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.69642639160156, 23.21989293541487]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.588623046875, 23.346668888016886]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.45472717285156, 23.427023800584607]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.50794219970703, 23.43237906103968]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.5779800415039, 23.466395647408085]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57440185546875, 24.72687487050697]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.280517578125, 24.472150437226862]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.32720947265625, 24.786734541988878]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.148681640625, 24.649513490158643]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.12396240234375, 24.32207102227599]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.7861328125, 24.53463082955919]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.9287109375, 25.050768779668633]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.29150390625, 25.160201083133346]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.11297607421875, 25.391179281675832]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.236572265625, 25.334096684794456]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.98638916015625, 25.311752681576262]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.43157958984375, 25.366364073894893]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.70074462890625, 25.45319497952487]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87292098999023, 25.394746048600055]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8437385559082, 25.39459097396895]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.82991981506348, 25.403584973186707]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8287181854248, 25.361322861922694]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.80537223815918, 25.337199692429877]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.79970741271973, 25.361245303173106]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7778205871582, 25.315399380282972]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.80588722229004, 25.30065673173559]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77284240722656, 25.25975589680709]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77541732788086, 25.25432211116344]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.71516418457031, 25.298095983647375]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65508270263672, 25.285679468429873]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.566162109375, 24.89702510083755]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.49063110351562, 24.836595553891183]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.73301696777344, 24.840334320878735]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68563842773438, 24.72687487050697]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.70280456542969, 24.62267535449334]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.89231872558594, 24.81665355646995]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.32171630859375, 25.005350372745724]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.2091064453125, 24.96365020050899]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.99693298339844, 24.983568464904028]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.86097717285156, 24.99788272495736]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.93032836914062, 25.164551894056714]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.61927795410156, 24.930030819509195]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.76141357421875, 24.700677200602946]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9453353881836, 23.34982097882942]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.86534118652344, 23.372828973404495]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83718872070312, 23.41347717373907]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.81830596923828, 23.364004460989815]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.78191375732422, 23.26594989945681]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.87220764160156, 23.27698858877768]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.92542266845703, 23.294333252116257]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.98619079589844, 23.269734695975473]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9072265625, 23.183288403039526]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9453353881836, 23.19717406075304]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.85023498535156, 23.20569409138814]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93125915527344, 23.51677447606262]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.96490478515625, 23.528421838156707]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.96833801269531, 23.638234022018082]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.79393005371094, 23.595767427279952]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.76337432861328, 23.55863721291921]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.97245788574219, 23.601115829818806]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.89246368408203, 23.680372430229177]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.02155303955078, 23.69326281153032]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.04180908203125, 23.689804541429606]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94499206542969, 23.506700250833525]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.89006042480469, 23.53377298325594]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.86946105957031, 23.5992281832394]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.76303100585938, 23.49300436535264]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.87598419189453, 23.31262153931799]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94293212890625, 23.311990950585997]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.0002670288086, 23.302531760763713]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94876861572266, 23.225572050431605]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.86328125, 23.15709108001811]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93297576904297, 23.178238715576665]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83169555664062, 23.151093381525733]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7867202758789, 23.235983133902316]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.81624603271484, 23.088575083404056]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94087219238281, 23.13846577037819]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90859985351562, 23.255856583223647]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.82757568359375, 23.345408030733022]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.04249572753906, 23.451278246097985]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.82757568359375, 23.492846933107188]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90997314453125, 23.613699445896223]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.98825073242188, 23.577832956897748]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.03082275390625, 23.600486617311258]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90104675292969, 23.50229253499364]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.98481750488281, 23.677857085551437]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.940185546875, 23.577832956897748]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.96971130371094, 23.503551897424124]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.8907470703125, 23.171926338284234]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.84886169433594, 23.366210644147383]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.85847473144531, 23.426078732106124]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.86190795898438, 23.48843875389896]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.97589111328125, 23.555175386794573]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9017333984375, 23.14099138777485]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93812561035156, 23.61244113864463]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1544189453125, 23.71416767518123]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.17175674438477, 23.730826295614058]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.18952369689941, 23.77427012732016]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.19227027893066, 23.76476557319207]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.16368865966797, 23.761230644529064]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.13987064361572, 23.766690105092003]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1218032836914, 23.777647611541717]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.14918327331543, 23.819112821703303]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.16162872314453, 23.824923176051726]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.15819549560547, 23.83136137292868]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.13072967529297, 23.836935651138138]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.18025398254395, 23.815186759340715]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.10601043701172, 23.80890481258195]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.11802673339844, 23.849732031218455]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1324462890625, 23.87014082008143]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.87255096435547, 23.83842731875501]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.86740112304688, 23.85350004961663]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.90653991699219, 23.817699452932874]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.75788116455078, 23.8032508006453]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.05485534667969, 23.926640673501318]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.05210876464844, 23.90718240039937]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.05657196044922, 23.95801880676136]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.07030487060547, 23.97150905743131]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.06206512451172, 23.926013033021203]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.05176544189453, 23.891488110496233]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.22222518920898, 23.84078254847674]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.24917602539062, 23.89964937898632]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.20059585571289, 23.858366911216557]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.21879196166992, 23.884425058642652]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.25999069213867, 23.871082686548053]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.25535583496094, 23.86370454919642]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.01640319824219, 23.786601447467945]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.97795104980469, 23.813616301146908]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.04112243652344, 23.523070475447266]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.66209411621094, 23.419778102985287]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.60029602050781, 23.31072976415014]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.61540222167969, 23.3208189206571]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.53781127929688, 23.407806080861427]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.58244323730469, 23.43363909079847]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.59342956542969, 23.472064226579505]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.544677734375, 23.572798279092726]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.63119506835938, 23.528736617422027]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.49111938476562, 23.519922513393364]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.64149475097656, 23.18644436092351]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.64149475097656, 23.259010826648776]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.14775085449219, 25.09243936321781]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.11135864257812, 25.23600069980047]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.1044921875, 25.30368300063602]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.15461730957031, 24.865256547422998]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-112.07977294921875, 25.458154856592074]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.99668884277344, 24.7536905807431]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.785888671875, 24.52276194519675]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59912109375, 24.43589758980902]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.55036926269531, 24.41276532583144]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.34283065795898, 24.692411315797003]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.36531829833984, 24.675097969136303]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.41475677490234, 24.643116550962322]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46419525146484, 24.585217163366384]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.48273468017578, 24.545874000679657]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.42059326171875, 24.53088288202481]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.71756744384766, 24.694126921891304]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.71791076660156, 24.72344453698747]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.70692443847656, 24.688512123196887]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7364501953125, 24.710657915365612]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.09718322753906, 24.25823335560538]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.09237670898438, 24.438398121025063]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.09375, 24.48152447542032]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.20498657226562, 24.400259633884094]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.02189636230469, 23.767750549280972]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.85504150390625, 23.723754499761455]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.69917297363281, 23.587901733263042]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.79393005371094, 23.652700976112236]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91065979003906, 23.110680839910465]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.70033168792725, 23.092285946575544]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.68887329101562, 23.05351421553845]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.69707012176514, 23.140912462951427]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.6973705291748, 23.15314525596157]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.69565391540527, 23.13286188690228]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.69453811645508, 23.10239160753579]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.72698211669922, 23.105312633518672]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7120475769043, 23.092838619557295]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.72114562988281, 23.154407932303847]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7343635559082, 23.192913841809734]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.7149658203125, 23.216185605052193]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.34395456314087, 24.172557613451552]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33185243606567, 24.167604742552513]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.32856941223145, 24.16985607132652]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33762454986572, 24.165627455843673]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33642292022705, 24.174319457949103]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2746033668518, 24.104943161517834]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.27797222137451, 24.102749450194825]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2803111076355, 24.10703890419936]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.28640508651733, 24.09507116466401]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.28224229812622, 24.097284595207693]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.28541803359985, 24.098655727688573]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.26514053344727, 24.09364122902463]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.29406547546387, 24.081495926879942]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.29449462890625, 24.058299120911084]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.29097557067871, 24.055399225242358]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.30187606811523, 24.065979609025558]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33397674560547, 24.062609655539624]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.33620834350586, 24.05673161787513]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.32839775085449, 24.086981044564077]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.3386116027832, 24.08980187082815]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.31492233276367, 24.11651828369007]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.32685279846191, 24.134613331263687]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2932071685791, 24.138216368453858]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.28428077697754, 24.096540260000697]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.26179313659668, 24.095364985079073]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.29552459716797, 24.066920045362977]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.30282020568848, 24.088548177931653]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.31556606292725, 24.08937091527835]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.3206729888916, 24.092661811843556]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.31475067138672, 24.0954041610835]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.28162002563477, 24.120866028697794]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.27299404144287, 24.125291959718425]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59671783447266, 24.893288048031643]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61165237426758, 24.8788059001491]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66624069213867, 24.906678630298227]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58590316772461, 24.927228790288993]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60736083984375, 24.924115349792203]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62607192993164, 24.855755540812346]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60040855407715, 24.840334320878735]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57208442687988, 24.854353691157606]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5797233581543, 24.86564591736694]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57543182373047, 24.8301303361993]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62641525268555, 24.83534927313427]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59757614135742, 24.862764550743062]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58083915710449, 24.883010569622225]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.55277252197266, 24.886436490787684]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.69971466064453, 24.83784182210122]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8301773071289, 24.913529064061116]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.79481506347656, 24.904187469174556]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7580795288086, 24.82569017190159]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.74331665039062, 24.87833870581872]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.74044132232666, 24.936841041640996]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.73091411590576, 24.922675356972142]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.75726413726807, 24.95306731107961]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77687644958496, 24.968863495325245]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.75430297851562, 24.962638640111308]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.76640510559082, 24.969797196448777]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.76803588867188, 25.05932173468488]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.76116943359375, 25.08396645658845]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.64589881896973, 25.08350004102487]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66769981384277, 25.114435087802615]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5950870513916, 25.092206171803678]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.55526161193848, 25.080079605922105]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51723861694336, 25.119020270461757]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53011322021484, 25.097025370707776]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5632438659668, 25.152665582786053]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58719062805176, 25.198883618267587]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59688949584961, 25.210765422496365]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57182693481445, 25.233516227973297]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60873413085938, 25.25447736555568]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.61954879760742, 25.28071250637328]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62873268127441, 25.321063183989498]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66658401489258, 25.352170585973443]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7361068725586, 25.355893629275258]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.76631927490234, 25.39296267831268]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.87077522277832, 25.373731620807987]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.81884765625, 25.454124972043175]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.84236526489258, 25.481091628781037]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77773475646973, 25.462494581355102]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.90193176269531, 25.421105839072705]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.92296028137207, 25.414826529374878]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.92476272583008, 25.429051410308254]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.93707942962646, 25.446607326837835]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.93725109100342, 25.46090595027092]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.93737983703613, 25.47245210813211]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.7697525024414, 25.26596563981789]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8107795715332, 25.217831827869052]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.80683135986328, 25.225286052416017]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65388107299805, 25.238019295771977]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68134689331055, 25.262239832123058]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.68838500976562, 25.340302620496118]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.63156509399414, 25.35302379352175]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.67156219482422, 25.37652341594003]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66589736938477, 25.36147797927257]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.72065734863281, 25.4036625047482]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.73842430114746, 25.404670410513546]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.78108215332031, 25.409864868225267]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.85343742370605, 25.415446722664978]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8411636352539, 25.40110393691175]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.84408187866211, 25.354187248658427]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.83464050292969, 25.34441387761042]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.83893203735352, 25.324011360539952]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.91051483154297, 25.37504997654943]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.96956634521484, 25.407306431933964]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.829833984375, 25.4705536549478]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.72271728515625, 25.45195497832395]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.66898727416992, 25.4273073053957]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.64581298828125, 25.455829939665254]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.62092208862305, 25.430252890119498]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59345626831055, 25.431183059810575]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5826416015625, 25.398157640072952]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.55380249023438, 25.394746048600055]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.522216796875, 25.365355848322487]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50805473327637, 25.379547787853305]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.54393196105957, 25.354187248658427]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52530670166016, 25.329597182402733]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51196002960205, 25.326687932342512]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51813983917236, 25.3259897019248]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.52762413024902, 25.320364921135166]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56281471252441, 25.311830272053466]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57182693481445, 25.301975883879937]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.5621280670166, 25.282730359237682]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.56538963317871, 25.269303245445183]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59019470214844, 25.254943127541654]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57139778137207, 25.241823481673112]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.58607482910156, 25.239183855122313]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57955169677734, 25.233205665424848]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59714698791504, 25.19593240215079]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60600900650024, 25.185816177924252]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.59517288208008, 25.178534306594393]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.57156944274902, 25.160201083133346]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60839080810547, 25.13215314657088]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.63216590881348, 25.120885380289486]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.72203063964844, 25.136582259755478]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.77910804748535, 25.168436058391155]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.83103561401367, 25.13526131298419]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.86159133911133, 25.085832101069755]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.8408203125, 25.030472562414918]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.79859161376953, 25.0026278453979]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.67293548583984, 25.03156133364096]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.63774490356445, 25.033272240333073]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.65525436401367, 25.032650095205543]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.60409927368164, 25.044703595391]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.55672073364258, 25.029383781527702]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.53491973876953, 25.041282077030896]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.51603698730469, 25.05582287068327]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.48101806640625, 25.080701510322076]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.46908760070801, 25.10557509508973]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.44668579101562, 25.129511142926408]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.44728660583496, 25.1482370530924]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.45835876464844, 25.17301921317]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.49500846862793, 25.147537796871404]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.48015975952148, 25.184903540569426]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.50479316711426, 25.164474209508118]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-111.49028778076172, 25.218685980936474]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1402997970581, 23.93856526294476]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.13175964355469, 23.944840920177803]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.12283325195312, 23.945468469114292]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.01571655273438, 23.94860616800962]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.02052307128906, 23.920364131434184]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.02738952636719, 23.96303859984408]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.8442268371582, 24.02819971867502]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83528435230255, 23.994711729471536]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83613729476929, 23.993016027286235]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83800947666168, 23.99454019991918]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.84178602695465, 23.993216964260938]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83081579208374, 23.997407163847086]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83019351959229, 23.995348837236275]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.84525680541992, 24.02678863613813]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.04335403442383, 23.947821750440248]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.02155303955078, 23.945939128813528]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.01520156860352, 23.918324189589715]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.1399564743042, 23.9407421661194]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.13270378112793, 23.94709615994202]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.14034271240234, 23.945939128813528]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.13716697692871, 23.94595873959707]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.13605117797852, 23.941820798231156]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.13019323348999, 23.9419188552488]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.13384103775024, 23.94242875053935]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.13384103775024, 23.945723409997832]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.15321731567383, 23.88243850583412]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.15950441360474, 23.86645177711924]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.2023983001709, 23.866608759811765]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.20106792449951, 23.869944597038497]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-110.19480228424072, 23.87783252903805]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9295425415039, 24.002405819995484]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.93520736694336, 24.004914876160438]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.92645263671875, 23.940134205865327]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9676513671875, 23.96084246441946]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.98919486999512, 23.985703668404206]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.94190216064453, 23.990408719078943]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.92868423461914, 24.010560073626262]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91580963134766, 24.006404605107765]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.87898826599121, 24.000523995763942]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.87624168395996, 24.003581946164886]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.85255241394043, 23.994878357960687]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.87272262573242, 24.022633692038916]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.86345291137695, 24.037528152293383]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.84032154083252, 24.04865867408708]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83504295349121, 24.0553208487744]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.82899188995361, 24.059239613543014]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.83654499053955, 24.043407069214407]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9702262878418, 24.014166597859568]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9899673461914, 23.997544384450748]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.98825073242188, 24.041290690121034]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9017333984375, 24.028591683296867]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.91357803344727, 23.97480297392072]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-109.9123764038086, 23.980527914101373]),
            {
              "class": 2,
              "system:index": "448"
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
Map.addLayer(Baja,vizParams,'FCC');

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

var studyArea = zones.filterMetadata('name','equals','Baja');

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
var classifier = ee.Classifier.randomForest(100,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);

classified = classified.updateMask(classified.eq(1));

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'Baja_v1_asset',
  assetId: 'Baja_2010_v1',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'Baja',
  fileNamePrefix: 'Baja_2010_v1',
  region: studyArea, 
});


Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_Baja_v1',
  folder: 'Baja',
  fileNamePrefix: 'RFtable_Baja_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');



