/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var prev2 = ee.Image("users/images/Guatemala_2010_v4"),
    NonCropClass = /* color: #0ed600 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-87.35692977905273, 14.370678726021293]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.43499279022217, 14.368300796794117]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45048522949219, 14.38650901970773]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.451171875, 14.342191443647518]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.44958400726318, 14.327971375883669]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.44666576385498, 14.324977562509158]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.47597694396973, 14.345351336200151]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.48494625091553, 14.355163350017543]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.49829292297363, 14.337908886574944]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.51030921936035, 14.344270325341776]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.51146793365479, 14.352211475818345]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5165319442749, 14.334665730660554]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50146865844727, 14.330590929811082]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5205659866333, 14.318282918633845]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53206729888916, 14.30298012588885]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53983497619629, 14.293041069103902]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57099151611328, 14.29270837341125]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5716781616211, 14.29574420336088]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58399486541748, 14.321443148080691]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58987426757812, 14.335247839022918]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.60257720947266, 14.315164227537478]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61300563812256, 14.322690594823776]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.60910034179688, 14.323314315595002]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61613845825195, 14.32751399031486]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.615065574646, 14.320653094890423]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6423168182373, 14.336994155041731]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67137050628662, 14.350007938726211]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67360210418701, 14.349633751028803]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67686367034912, 14.32373012847935]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67081260681152, 14.321359984717938]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68407344818115, 14.32027885819803]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67862319946289, 14.320985749204237]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69922256469727, 14.323480640841204]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70664691925049, 14.345808685377753]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72025108337402, 14.31940563682253]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71917819976807, 14.324746795857756]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71991848945618, 14.332532714510691]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.99910426139832, 14.469287812395923]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.98621892929077, 14.482480515800807]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.98246383666992, 14.488580554290655]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.05391788482666, 14.521860029237516]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0667495727539, 14.479605458202391]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.07717800140381, 14.49535318723149]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.02675247192383, 14.589276115383548]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.99053192138672, 14.60904426709879]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.95976161956787, 14.652478117170203]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.94452667236328, 14.6737766603476]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.91826248168945, 14.67801121143039]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.86474704742432, 14.686812172976646]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.8810441493988, 14.72821553167786]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.85899639129639, 14.740926147023657]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.8318202495575, 14.752816385754542]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.82452464103699, 14.753501144118744]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.81279802322388, 14.763969378614608]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.76556968688965, 14.693703244599032]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72146344184875, 14.728288165871943]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72166728973389, 14.738622727264815]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71249413490295, 14.728609831297579]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70755887031555, 14.721418939293542]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70328879356384, 14.72557993169141]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69195914268494, 14.719021922590871]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68364429473877, 14.719416238837297]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68371939659119, 14.724594167603119]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67676711082458, 14.726254399288841]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67473936080933, 14.732936703941322]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66741156578064, 14.734119575033194]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65886068344116, 14.739598052118566]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6539146900177, 14.744298226600598]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65763759613037, 14.751104480415927]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64969825744629, 14.763305402494117]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64082551002502, 14.770225179054844]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63438820838928, 14.784333785847156]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64788508415222, 14.784624247533944]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65248775482178, 14.783877345268454]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66136050224304, 14.788182371655495]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6555347442627, 14.792383580138344]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6525092124939, 14.795547399497051]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65931129455566, 14.80164669805649]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6470160484314, 14.810038139634917]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64210224151611, 14.811230963423725]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.637038230896, 14.817806934932506]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.62752175331116, 14.82326255786899]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61964678764343, 14.829298847373115]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.60881066322327, 14.833457773622051]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.60019540786743, 14.839887876285758]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.60137557983398, 14.84594444328693]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.59026050567627, 14.859788869099626]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58269667625427, 14.870345336044553]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57884502410889, 14.871444502044973]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56837368011475, 14.880227259396865]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56975769996643, 14.898714468325869]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57238626480103, 14.8900257813566]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.54987716674805, 14.915512406870029]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50267028808594, 14.928989530732158]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.49576091766357, 14.898882545731185]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5165319442749, 14.87959693413659]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52155303955078, 14.895440294305006]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.47198581695557, 14.858650391382492]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42117404937744, 14.884366654618663]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3907470703125, 14.897223636249215]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.35602855682373, 14.9203228003379]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34311103820801, 14.926252706252857]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34954833984375, 14.886233038255643]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.32847690582275, 14.89585502630732]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.31122493743896, 14.88059236277571]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.276291847229, 14.866490028610228]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.25316047668457, 14.885776812636701]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.25024223327637, 14.863296136695899]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.26114273071289, 14.84989786757685]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21947193145752, 14.861388074824035]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18453884124756, 14.874246426482523]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.20101833343506, 14.904356856347695]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19312191009521, 14.896974798724806]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18024730682373, 14.918249368071331]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.16372489929199, 14.935872904877717]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18376636505127, 14.961953085417623]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.20350742340088, 14.960419044909829]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19818592071533, 14.975634582702652]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21925735473633, 14.996901356782251]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2427749633789, 15.002746240143125]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.26813793182373, 15.014725678914704]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2455644607544, 15.030310379087169]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.276291847229, 15.049375219485489]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.25092887878418, 15.065578992950444]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.30697631835938, 15.04141792814032]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.32088088989258, 15.029065503601267]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.32909917831421, 15.058118151493922]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33980655670166, 15.072125002652388]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.32508659362793, 15.089735858853626]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.32716798782349, 15.107055230380219]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.81516647338867, 14.64147821633111]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.86271667480469, 14.640730823916538]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.83413505554199, 14.584669142431165]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.85507774353027, 14.585084466691566]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.87911033630371, 14.577525442560972]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.80975914001465, 14.577525442560972]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.87576293945312, 14.56813860107031]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8949031829834, 14.58932072939834]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.90344333648682, 14.584062540472994]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.90837860107422, 14.597497919986761]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.89337968826294, 14.627854286602638]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.90292835235596, 14.635494626342945]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91078186035156, 14.56908953668337]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.90556764602661, 14.55735547338387]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91063165664673, 14.549483955503232]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91917181015015, 14.53583794163324]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.93127393722534, 14.540760573524237]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.9351577758789, 14.555050123868757]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91591024398804, 14.632484198146184]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91636085510254, 14.633335426858809]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91052436828613, 14.671450476546822]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.92058801651001, 14.67576810312792]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91123247146606, 14.681663186434957]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91370010375977, 14.704723058961912]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.90943002700806, 14.713004093161954]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.99020743370056, 14.726378956688398]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.995689868927, 14.72294434037417]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.99380159378052, 14.731224682835352]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.02038764953613, 14.720936384528425]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.02648162841797, 14.705080269360348]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04244613647461, 14.684241424602451]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.05489158630371, 14.67743308457481]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.09866523742676, 14.698604665939351]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.03892707824707, 14.656425529586835]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.12080955505371, 14.703087796453405]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.14655876159668, 14.72002323639436]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.17634201049805, 14.796133438481572]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21324920654297, 14.816131803903275]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21681118011475, 14.848611921883274]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23938465118408, 14.82728899784586]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19423770904541, 14.874536767512819]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19166278839111, 14.90157824638361]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.20724105834961, 14.908835734218911]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.15518474578857, 14.959506907513028]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.15020656585693, 14.988486102345952]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.12934970855713, 14.984174710780641]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.10214138031006, 15.020362829447162]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.07879543304443, 15.049789653603643]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.05828189849854, 15.077431235925351]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.01691150665283, 15.088762120201347]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.00590372085571, 15.100819590682473]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.98545455932617, 15.113497841760921]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.98028326034546, 15.093920812472216]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.94515705108643, 15.091766193181105]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.96045637130737, 15.10260122071409]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.92138195037842, 15.127998504096018]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.9163179397583, 15.14222826255748]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.92603826522827, 15.14461020617429]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.93011522293091, 15.154241270087512]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.92515850067139, 15.165549443523624]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91897869110107, 15.171762468166321]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91730499267578, 15.189120917025011]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91790580749512, 15.210821863709505]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.93292617797852, 15.192434183076914]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.95292472839355, 15.17975629111711]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.96577787399292, 15.16987786999101]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.31913471221924, 15.384261631514923]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.32842588424683, 15.38364096636443]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.31866264343262, 15.402280802893006]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.29181909561157, 15.4110105404902]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.28087568283081, 15.433226275223397]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.29194784164429, 15.432978067853101]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.26716423034668, 15.442906131085946]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.28516721725464, 15.446504209543289]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.29270958900452, 15.457672518792268]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.28040361404419, 15.463752789657219]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.27737808227539, 15.475313084383533]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.28273177146912, 15.470567030757497]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.2909607887268, 15.47175613937757]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.27900886535645, 15.516053237678863]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.30098152160645, 15.507286572168502]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.33222389221191, 15.447398649761213]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.30398559570312, 15.439621875645363]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.35780143737793, 15.425639495394346]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.39663982391357, 15.409128092528704]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.39430093765259, 15.424021720010614]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.37998867034912, 15.409665936542932]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.37007522583008, 15.42489048198724]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.35426092147827, 15.43035118832354]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53208875656128, 15.65316549895443]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5073453783989, 15.656777439195148]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4821138381958, 15.678091790359684]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.46854186058044, 15.693492749058306]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4601411819458, 15.699111588660852]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5709593296051, 15.594837993037515]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57588922977448, 15.593525586949221]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57790625095367, 15.588487729765873]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56075620651245, 15.573064458042458]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57783651351929, 15.553654471326814]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.54951238632202, 15.533291655634388]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53546833992004, 15.543245186179385]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52301216125488, 15.401515381884131]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.51929998397827, 15.415892414002572]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53605842590332, 15.415395957527798]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50076055526733, 15.448582763689089]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.55245208740234, 15.467087172581007]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57485389709473, 15.497444003222359]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.54895448684692, 15.514973663922415]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.49425888061523, 15.547370045953055]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.55807399749756, 15.57792176015693]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57240772247314, 15.57188619256068]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.28363037109375, 15.469916249397867]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.27676391601562, 15.521196970586677]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40894317626953, 15.478519064734098]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.15145111083984, 15.465614707655265]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.1871566772461, 15.424249172460426]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.44627952575684, 15.372634121385673]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45790958404541, 15.379130668279554]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45063543319702, 15.369013346527655]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4638319015503, 15.374454830116466]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45859622955322, 15.387054526034293]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.46381044387817, 15.368847823887902]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.44808197021484, 15.353205341534247]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.44004607200623, 15.366933269304594]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.47142791748047, 15.345941672177833]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50597476959229, 15.370109930696199]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.51923561096191, 15.369220249642519]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5194501876831, 15.377103105325473]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.55485534667969, 15.38728209974002]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56757974624634, 15.384820152804176]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56326675415039, 15.40416323709214]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6054310798645, 15.412603292002878]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.59350061416626, 15.416905933202665]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61789798736572, 15.42580053898396]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6205587387085, 15.43721816561741]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.62890577316284, 15.42220136928597]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67109155654907, 15.400501636129658]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.81028747558594, 15.404059878679007]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6983642578125, 15.307057405578869]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5998306274414, 15.32162720567507]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6873779296875, 15.251649744119227]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7349066734314, 15.23640841838333]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.74303913116455, 15.243219736014346]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.75595664978027, 15.256448381973822]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7677583694458, 15.233427103576693]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62619400024414, 14.96908262823056]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64550590515137, 14.968875332995694]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64018440246582, 14.958531046172357]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6345624923706, 14.98050428567861]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62063646316528, 14.989790411136086]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.611581325531, 14.990329325690249]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62089395523071, 15.001791302195087]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62675189971924, 14.976420750331883]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65011930465698, 14.980898125071889]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68382930755615, 14.99213260682863]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69288444519043, 14.893510246007903]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7052869796753, 14.881627728639938]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71992111206055, 14.867027718266893]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7334394454956, 14.856305206602636]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74979019165039, 14.847158504189913]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.75972509384155, 14.835874964198768]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77146244049072, 14.847552587785215]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78588199615479, 14.850705230678019]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79234075546265, 14.861739118521232]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79435777664185, 14.88110927928659]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78508806228638, 14.905620200168283]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80399227142334, 14.918123427677886]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78781318664551, 14.925338889911721]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7955379486084, 14.934482279335407]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80105257034302, 14.865285605602367]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80995750427246, 14.857632587019653]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81523609161377, 14.856408908491476]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83175849914551, 14.835107496139594]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83452653884888, 14.835791994810132]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81770372390747, 14.827577867829923]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.85325908660889, 14.788286800104663]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.84360313415527, 14.790734920425118]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.84242296218872, 14.782083388545225]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.86349439620972, 14.773970967550659]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8590955734253, 14.767912389055358]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.87521028518677, 14.775278104453667]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.87909412384033, 14.782353105777222]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77330780029297, 14.670640830992289]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65898132324219, 14.53509010934906]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68404388427734, 14.567988764654828]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77193450927734, 14.562339849400114]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90962839126587, 14.517330281288896]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90291213989258, 14.507255356192683]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90033721923828, 14.518846673603065]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.91703128814697, 14.519386756026922]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.92711639404297, 14.532431423180924]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.95651340484619, 14.537811085615655]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.98318529129028, 14.526553109508185]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.98303508758545, 14.545122231526758]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.9941930770874, 14.553222366213484]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00833368301392, 14.550605432122383]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.01966333389282, 14.543564479248786]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.02723789215088, 14.541674391731545]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.0455412864685, 14.529564985862697]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.04944658279419, 14.510579093507138]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.07028198242188, 14.507857787283108]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.0945291519165, 14.499382059461654]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.08674001693726, 14.370876936396595]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.1047215461731, 14.381747880639482]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.10676002502441, 14.360026250922328]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.11042928695679, 14.33709673160076]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.11375522613525, 14.32655626519902]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.33780288696289, 14.82169086345856]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.37041854858398, 14.767169557833656]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3919620513916, 14.756711852346502]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.34475517272949, 14.734300790771139]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41848373413086, 14.680670899615368]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.38423728942871, 14.653435824115622]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.37928056716919, 14.69735487637249]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.34908962249756, 14.687039116730451]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.33649396896362, 14.674169679827049]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.50754928588867, 15.42076302221654]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.49079084396362, 15.517185953770785]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.49905204772949, 15.523491898744059]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.43562316894531, 15.572754328011392]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.44360542297363, 15.561096135493939]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.45145893096924, 15.55667246400721]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.4565658569336, 15.561178820036881]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.45362615585327, 15.53465604980081]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.44633054733276, 15.526593112445664]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.43678188323975, 15.517723517250039]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.45060062408447, 15.50705468790788]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.46261692047119, 15.510590349414397]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.47864580154419, 15.50643439017326]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.49503946304321, 15.507488895213495]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.51042461395264, 15.504366717601853]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.52435064315796, 15.513919191748569]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.52211904525757, 15.52508386093549]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.51439428329468, 15.551029044141172]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.53053045272827, 15.560786068161935]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.53791189193726, 15.562212374020067]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.5564513206482, 15.561178820036881]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.57606363296509, 15.563080555353347]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.5828013420105, 15.580216051095356]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.5825867652893, 15.606278280939858]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.58451795578003, 15.723217781668053]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.59153461456299, 15.716794047079471]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.59556865692139, 15.706176883927336]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.59728527069092, 15.690725242978164]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.57196521759033, 15.68268909799649]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.53647422790527, 15.70301642030499]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.555335521698, 15.682461850220538]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.5561294555664, 15.671305739247611]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.38319396972656, 15.851402172945436]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.27127075195312, 15.823327497842895]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65167236328125, 15.903907839479148]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04914093017578, 15.782364509587996]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91009521484375, 15.764853608901587]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.78375244140625, 15.771792071125228]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.92726135253906, 15.604873028454467]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.02442169189453, 15.548651813805138]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.25753784179688, 15.509287825091246]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.28157043457031, 15.464291219156946]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.10784912109375, 15.337007120783637]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.11402893066406, 15.3552993694945]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.05995559692383, 15.327278182905253]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.03557968139648, 15.345778210092593]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.03836917877197, 15.314198875920507]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.08630561828613, 15.2999182989572]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.09600448608398, 15.289279686071435]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.10184097290039, 15.31593729174175]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.14351177215576, 15.319124407157942]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.14604377746582, 15.307865879668062]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.12458610534668, 15.321980334333235]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.13239669799805, 15.314157484410376]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.16526985168457, 15.284726029118692]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19179153442383, 15.283070129339794]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18964576721191, 15.262411680875331]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.17926025390625, 15.255207655624641]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21676826477051, 15.257733232834667]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.22114562988281, 15.231275270259694]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21565246582031, 15.217610230621496]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23874092102051, 15.221254327912558]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.25328922271729, 15.22183406484943]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.27092742919922, 15.218645491945788]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.27603435516357, 15.213634779852862]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.27556228637695, 15.19698676520399]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.29259967803955, 15.169361414672364]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.31354236602783, 15.163852479415096]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33006477355957, 15.160414499699447]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34135150909424, 15.169775614526877]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3543119430542, 15.152834178281102]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34654426574707, 15.14164960155685]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65630722045898, 15.021981928355506]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70256996154785, 15.015350021387746]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70188331604004, 14.963448246093403]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61210441589355, 15.0125313985684]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58163452148438, 15.033835948802327]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73055076599121, 14.981109528026776]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7397346496582, 14.957229138379303]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.54318237304688, 15.054889717471]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.51751899719238, 15.039555485351642]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52635955810547, 15.034250413126783]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50885009765625, 14.983845652689231]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.59905815124512, 14.888060523240751]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68840789794922, 14.911368021488416]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68892288208008, 14.930858119089976]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70720481872559, 14.841603901922928]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65429019927979, 14.848362866244338]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66029834747314, 14.821065796452324]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6769495010376, 14.801067886333993]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6540756225586, 14.78413875324926]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64205932617188, 14.801026394975818]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63836860656738, 14.77169001893159]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65042781829834, 14.764718416136233]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66463279724121, 14.754426593892934]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67441749572754, 14.7374108200638]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68274307250977, 14.7242538104393]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65965461730957, 14.733343438198059]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69772052764893, 14.71142807467815]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6725721359253, 14.711303549275701]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6567792892456, 14.702711124930454]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6538610458374, 14.68178902604984]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64338970184326, 14.698975182782439]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66986846923828, 14.672365125107248]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66274452209473, 14.659287233424442]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71913528442383, 14.692789982537295]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.74960517883301, 14.696816609301818]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.76411056518555, 14.700345035657431]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.78767108917236, 14.703914914895963]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.80457973480225, 14.699929929632942]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.82307624816895, 14.703831895111426]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.79453754425049, 14.689385972136208]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.8230333328247, 14.733011403672894]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.79603958129883, 14.760153555085509]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7831220626831, 14.781400092923045]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.75140762329102, 14.819074386087607]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7159595489502, 14.841559663561503]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72956371307373, 14.831271487073115]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69437313079834, 14.862134547708749]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71853446960449, 14.879472343216761]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69905090332031, 14.893490881191973]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66913890838623, 14.90311254506718]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65368938446045, 14.93006750216059]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64261722564697, 14.946777878040582]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63309001922607, 14.975344216248097]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61570930480957, 14.99839352068796]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.62828350067139, 14.985210948975574]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57609844207764, 15.005854993633514]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52726078033447, 15.002290100156626]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52155303955078, 14.976463574335105]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.51696109771729, 14.952997288772412]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.46640682220459, 14.917875986152284]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.46275901794434, 14.883205179075041]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4240493774414, 14.884034689378026]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4517297744751, 14.859355393555601]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.43426322937012, 14.838738760639437]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.43464946746826, 14.805797849120104]),
            {
              "class": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4086856842041, 14.782935406754472]),
            {
              "class": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3459005355835, 14.796835726908304]),
            {
              "class": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34920501708984, 14.83147891481924]),
            {
              "class": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.37289428710938, 14.817290398752238]),
            {
              "class": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.67928314208984, 14.612842573877963]),
            {
              "class": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5508804321289, 14.458972365544723]),
            {
              "class": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.6161117553711, 14.447070452554595]),
            {
              "class": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.61834335327148, 14.427703442897425]),
            {
              "class": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.59422492980957, 14.405258878696076]),
            {
              "class": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.65610885620117, 14.419806539154502]),
            {
              "class": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.60280799865723, 14.535156559992979]),
            {
              "class": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.58229446411133, 14.56979969356738]),
            {
              "class": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5886459350586, 14.579435665160153]),
            {
              "class": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54779052734375, 14.573122489988252]),
            {
              "class": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.57293891906738, 14.637159589500232]),
            {
              "class": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.563143491745, 14.57831981584855]),
            {
              "class": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.55896997451782, 14.593634821354355]),
            {
              "class": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.52972316741943, 15.058823955150947]),
            {
              "class": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5351734161377, 15.079087939766552]),
            {
              "class": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.52053928375244, 15.062843753760074]),
            {
              "class": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51736354827881, 15.099847197636674]),
            {
              "class": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51371574401855, 15.106600770303315]),
            {
              "class": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.47466278076172, 15.13295007782611]),
            {
              "class": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42260646820068, 15.16733184387556]),
            {
              "class": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26266098022461, 15.31880158905737]),
            {
              "class": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2568244934082, 15.384188493334875]),
            {
              "class": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.39724349975586, 15.353070192532018]),
            {
              "class": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45629501342773, 15.387995200457075]),
            {
              "class": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50247192382812, 15.26863017772663]),
            {
              "class": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.40788650512695, 15.31102001240489]),
            {
              "class": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42196273803711, 15.486614250971945]),
            {
              "class": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24635314941406, 15.756615328966069]),
            {
              "class": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4355239868164, 15.824549596703271]),
            {
              "class": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.42222023010254, 15.835862440296644]),
            {
              "class": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.41183471679688, 15.814227106727868]),
            {
              "class": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45809745788574, 15.809685044239146]),
            {
              "class": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.48942565917969, 15.805473222463359]),
            {
              "class": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4817008972168, 15.778135543885222]),
            {
              "class": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.59542655944824, 15.72080254607276]),
            {
              "class": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.62963008880615, 15.715060371110605]),
            {
              "class": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.63950061798096, 15.71828261872884]),
            {
              "class": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.69061279296875, 15.712796533348438]),
            {
              "class": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.75807571411133, 15.597085598148023]),
            {
              "class": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.77198028564453, 15.585180761452115]),
            {
              "class": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.81575393676758, 15.547973701781961]),
            {
              "class": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.89720726013184, 15.493639283939201]),
            {
              "class": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.86291790008545, 15.479202857532442]),
            {
              "class": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.87214469909668, 15.468325235461322]),
            {
              "class": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8769941329956, 15.465347231659086]),
            {
              "class": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.89034080505371, 15.456247510282596]),
            {
              "class": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.96848964691162, 15.522624943691563]),
            {
              "class": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.96183776855469, 15.573065770098998]),
            {
              "class": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.02968692779541, 15.579597366379652]),
            {
              "class": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.01329326629639, 15.589022341890834]),
            {
              "class": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.98913192749023, 15.582243017193123]),
            {
              "class": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.99419593811035, 15.572611030984676]),
            {
              "class": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.02024555206299, 15.551319846997295]),
            {
              "class": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.00080490112305, 15.654786722397553]),
            {
              "class": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.07513427734375, 15.61395513114708]),
            {
              "class": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.03582382202148, 15.61428578400825]),
            {
              "class": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.06534957885742, 15.542190863932715]),
            {
              "class": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.14431381225586, 15.501006059364618]),
            {
              "class": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.22859954833984, 15.514900647244012]),
            {
              "class": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.25640869140625, 15.458323984920844]),
            {
              "class": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.33914947509766, 15.52383238844374]),
            {
              "class": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.35683059692383, 15.51754159707371]),
            {
              "class": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.31996631622314, 15.52438092820124]),
            {
              "class": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.68212890625, 15.915199302258582]),
            {
              "class": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.61508178710938, 15.497443659943182]),
            {
              "class": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13168334960938, 15.347849867154615]),
            {
              "class": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.88174438476562, 15.55566334907809]),
            {
              "class": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.82681274414062, 15.646929233851555]),
            {
              "class": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.60708618164062, 15.587412607590869]),
            {
              "class": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54254150390625, 15.61915695892214]),
            {
              "class": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.5068359375, 15.632382321540426]),
            {
              "class": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55490112304688, 15.514646641969673]),
            {
              "class": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.36813354492188, 15.474945291736368]),
            {
              "class": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.37225341796875, 15.428617423159452]),
            {
              "class": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39422607421875, 15.29354590068908]),
            {
              "class": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.495849609375, 15.251152533368963]),
            {
              "class": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.5562744140625, 15.138503671060839]),
            {
              "class": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59335327148438, 15.222002130030194]),
            {
              "class": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59197998046875, 15.2842730836133]),
            {
              "class": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61669921875, 15.285597796882044]),
            {
              "class": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40933227539062, 15.066907344643301]),
            {
              "class": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4189453125, 14.975388103227706]),
            {
              "class": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.34066772460938, 14.820114012191473]),
            {
              "class": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54116821289062, 14.801526721878894]),
            {
              "class": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.68536376953125, 14.785593490409115]),
            {
              "class": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39285278320312, 14.809492898666866]),
            {
              "class": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38323974609375, 14.737786783167673]),
            {
              "class": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.95315551757812, 14.863920595537957]),
            {
              "class": 2,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.03143310546875, 14.644799280811032]),
            {
              "class": 2,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.89273071289062, 14.586329785832607]),
            {
              "class": 2,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.55078125, 15.519940224934151]),
            {
              "class": 2,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25827026367188, 15.660153447664687]),
            {
              "class": 2,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1058349609375, 15.55698697869155]),
            {
              "class": 2,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.80783081054688, 15.351823420798318]),
            {
              "class": 2,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.7158203125, 15.365065897834649]),
            {
              "class": 2,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.5452880859375, 15.797627720712255]),
            {
              "class": 2,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.53955078125, 15.329308634927543]),
            {
              "class": 2,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21221923828125, 14.084721778315373]),
            {
              "class": 2,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.17308044433594, 14.059345921147052]),
            {
              "class": 2,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.9186782836914, 13.974405398516831]),
            {
              "class": 2,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.81877136230469, 14.194519436085077]),
            {
              "class": 2,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.6352653503418, 14.212808358995279]),
            {
              "class": 2,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.60273551940918, 14.263224026250048]),
            {
              "class": 2,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.60694122314453, 14.315790771183197]),
            {
              "class": 2,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.65406227111816, 14.336581168448324]),
            {
              "class": 2,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.66788101196289, 14.337329586813748]),
            {
              "class": 2,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.68195724487305, 14.372835006746795]),
            {
              "class": 2,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.74701690673828, 14.391042860253014]),
            {
              "class": 2,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.7758560180664, 14.40268180620107]),
            {
              "class": 2,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.80160522460938, 14.405092654825934]),
            {
              "class": 2,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.75971984863281, 14.420139086598727]),
            {
              "class": 2,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.77903175354004, 14.36019672058167]),
            {
              "class": 2,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.79259300231934, 14.445408155013075]),
            {
              "class": 2,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.82426452636719, 14.47266893039506]),
            {
              "class": 2,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8524169921875, 14.477738400739753]),
            {
              "class": 2,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.82615280151367, 14.489622114886224]),
            {
              "class": 2,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8410873413086, 14.491616521987181]),
            {
              "class": 2,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.85061454772949, 14.50956537818678]),
            {
              "class": 2,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.82924270629883, 14.512556712802906]),
            {
              "class": 2,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.87790870666504, 14.497433440202714]),
            {
              "class": 2,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.83241844177246, 14.540640048567093]),
            {
              "class": 2,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.82881355285645, 14.55011113813447]),
            {
              "class": 2,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.87576293945312, 14.551024993706514]),
            {
              "class": 2,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91103935241699, 14.52917450210005]),
            {
              "class": 2,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91558837890625, 14.515714188818984]),
            {
              "class": 2,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.9044303894043, 14.555178834983785]),
            {
              "class": 2,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.95112228393555, 14.54105545574898]),
            {
              "class": 2,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.9981575012207, 14.511559605755513]),
            {
              "class": 2,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.00407981872559, 14.540640048567093]),
            {
              "class": 2,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.00802803039551, 14.556674198703833]),
            {
              "class": 2,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04373359680176, 14.589984949892637]),
            {
              "class": 2,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.0241641998291, 14.603772963431704]),
            {
              "class": 2,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.06647872924805, 14.566227672114755]),
            {
              "class": 2,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.05686569213867, 14.549197278779273]),
            {
              "class": 2,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.09763526916504, 14.589984949892637]),
            {
              "class": 2,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.0391845703125, 14.655677884041024]),
            {
              "class": 2,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.03446388244629, 14.660494039783611]),
            {
              "class": 2,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.09420204162598, 14.690883199206036]),
            {
              "class": 2,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.08467483520508, 14.709064856599875]),
            {
              "class": 2,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.08218574523926, 14.72450562290918]),
            {
              "class": 2,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.05926895141602, 14.716619346566192]),
            {
              "class": 2,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.16097831726074, 14.639069638648117]),
            {
              "class": 2,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.15720176696777, 14.64961602029587]),
            {
              "class": 2,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19316482543945, 14.65069554254944]),
            {
              "class": 2,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18295097351074, 14.663566359670833]),
            {
              "class": 2,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21153259277344, 14.651692019910213]),
            {
              "class": 2,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.22475051879883, 14.61805840672479]),
            {
              "class": 2,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19925880432129, 14.621214372260361]),
            {
              "class": 2,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18835830688477, 14.605434091269064]),
            {
              "class": 2,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2358226776123, 14.614819342318969]),
            {
              "class": 2,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18544006347656, 14.591563119527757]),
            {
              "class": 2,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21230506896973, 14.596380702172732]),
            {
              "class": 2,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.22097396850586, 14.581512368536643]),
            {
              "class": 2,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2427749633789, 14.569550522378385]),
            {
              "class": 2,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.20887184143066, 14.533949106485013]),
            {
              "class": 2,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23668098449707, 14.52285711015505]),
            {
              "class": 2,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23668098449707, 14.51384185690495]),
            {
              "class": 2,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2334623336792, 14.497638405068447]),
            {
              "class": 2,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.25371837615967, 14.495519404499197]),
            {
              "class": 2,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21805572509766, 14.491655292479669]),
            {
              "class": 2,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.8529052734375, 15.384839462641903]),
            {
              "class": 2,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.759521484375, 14.36551262917861]),
            {
              "class": 2,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.30633544921875, 15.262988555023206]),
            {
              "class": 2,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15802001953125, 15.15962473375665]),
            {
              "class": 2,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.28436279296875, 14.843921460858647]),
            {
              "class": 2,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.20745849609375, 15.021727730639393]),
            {
              "class": 2,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6002197265625, 14.259059219889897]),
            {
              "class": 2,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7448844909668, 13.489461988133563]),
            {
              "class": 2,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7767276763916, 13.490547002894994]),
            {
              "class": 2,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73836135864258, 13.524597266967268]),
            {
              "class": 2,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69742012023926, 13.537531754049866]),
            {
              "class": 2,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.80599594116211, 13.535862827464362]),
            {
              "class": 2,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.78608322143555, 13.542621907839862]),
            {
              "class": 2,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.8880500793457, 13.541787463862097]),
            {
              "class": 2,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.86298751831055, 13.566652637637311]),
            {
              "class": 2,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.89139747619629, 13.575329803734716]),
            {
              "class": 2,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.9001522064209, 13.561479560804425]),
            {
              "class": 2,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.83698081970215, 13.58375636325601]),
            {
              "class": 2,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.77981758117676, 13.589429521802833]),
            {
              "class": 2,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7646255493164, 13.596520779034378]),
            {
              "class": 2,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73261070251465, 13.613872607163383]),
            {
              "class": 2,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.78445243835449, 13.630389030551216]),
            {
              "class": 2,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.76917457580566, 13.675511347700503]),
            {
              "class": 2,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.91311264038086, 13.648322223291629]),
            {
              "class": 2,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.9828929901123, 13.602527324995425]),
            {
              "class": 2,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.02495002746582, 13.595519673232102]),
            {
              "class": 2,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.06408882141113, 13.580001992523906]),
            {
              "class": 2,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.00091743469238, 13.56081205881212]),
            {
              "class": 2,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0967903137207, 13.646403853787607]),
            {
              "class": 2,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.06666374206543, 13.689688480556802]),
            {
              "class": 2,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0693244934082, 13.713287341517434]),
            {
              "class": 2,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.99559593200684, 13.704531856906764]),
            {
              "class": 2,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.96306610107422, 13.704865405156957]),
            {
              "class": 2,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.02915573120117, 13.731464352511573]),
            {
              "class": 2,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.9810905456543, 13.73813446194652]),
            {
              "class": 2,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.86521911621094, 13.768397697334342]),
            {
              "class": 2,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.82367706298828, 13.732214749297171]),
            {
              "class": 2,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.77355194091797, 13.717539887686653]),
            {
              "class": 2,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.80290603637695, 13.794072523080386]),
            {
              "class": 2,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.86642074584961, 13.822244892949044]),
            {
              "class": 2,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70591735839844, 13.84841380459862]),
            {
              "class": 2,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63261795043945, 13.851080534719433]),
            {
              "class": 2,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6408576965332, 13.826078739152402]),
            {
              "class": 2,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61665344238281, 13.883745493394665]),
            {
              "class": 2,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63055801391602, 13.835413057187958]),
            {
              "class": 2,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63193130493164, 13.830579260657707]),
            {
              "class": 2,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70347118377686, 13.884745368558871]),
            {
              "class": 2,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73462772369385, 13.88316223089047]),
            {
              "class": 2,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72763252258301, 13.879995923119173]),
            {
              "class": 2,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72445678710938, 13.873704841232966]),
            {
              "class": 2,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73685932159424, 13.86487204101051]),
            {
              "class": 2,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.74325370788574, 13.856663901786282]),
            {
              "class": 2,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.74921894073486, 13.883995462590073]),
            {
              "class": 2,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.76320934295654, 13.876162966388046]),
            {
              "class": 2,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.79161930084229, 13.892452594828319]),
            {
              "class": 2,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.75166511535645, 13.907699649063808]),
            {
              "class": 2,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73003578186035, 13.908241192630145]),
            {
              "class": 2,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7226972579956, 13.922862389663704]),
            {
              "class": 2,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69235610961914, 13.920821309420543]),
            {
              "class": 2,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71432876586914, 13.940190018044646]),
            {
              "class": 2,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67600536346436, 13.945646285658805]),
            {
              "class": 2,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66141414642334, 13.959682045221317]),
            {
              "class": 2,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64540672302246, 13.963138792551748]),
            {
              "class": 2,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.59922981262207, 13.971384799655757]),
            {
              "class": 2,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58378028869629, 13.972842396470199]),
            {
              "class": 2,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5751543045044, 13.989250135283068]),
            {
              "class": 2,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5943374633789, 14.014151014692008]),
            {
              "class": 2,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.62733936309814, 14.01040356324048]),
            {
              "class": 2,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63038635253906, 14.018772787229798]),
            {
              "class": 2,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63823986053467, 14.033636775768526]),
            {
              "class": 2,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.54034996032715, 14.134245159841655]),
            {
              "class": 2,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5621509552002, 14.167535630482927]),
            {
              "class": 2,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.59407997131348, 14.170032219102898]),
            {
              "class": 2,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50069618225098, 14.164789351282879]),
            {
              "class": 2,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4800968170166, 14.219459012223716]),
            {
              "class": 2,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50584602355957, 14.240923852427498]),
            {
              "class": 2,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.54369735717773, 14.223119826861737]),
            {
              "class": 2,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56978988647461, 14.22777895974643]),
            {
              "class": 2,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45563507080078, 14.300232731495162]),
            {
              "class": 2,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40422248840332, 14.308716033903973]),
            {
              "class": 2,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4068832397461, 14.276777229686054]),
            {
              "class": 2,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3676586151123, 14.343311281144137]),
            {
              "class": 2,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34851837158203, 13.443219090826627]),
            {
              "class": 2,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.35362529754639, 13.39959735115497]),
            {
              "class": 2,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3801040649414, 13.392541990904704]),
            {
              "class": 2,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36658573150635, 13.387991382539562]),
            {
              "class": 2,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.39190578460693, 13.36774222016452]),
            {
              "class": 2,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40894317626953, 13.371332917406795]),
            {
              "class": 2,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.41156101226807, 13.381353184885123]),
            {
              "class": 2,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40950107574463, 13.39629930910029]),
            {
              "class": 2,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.43937015533447, 13.39533911114284]),
            {
              "class": 2,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45241641998291, 13.381186183842324]),
            {
              "class": 2,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42447853088379, 13.36719943569574]),
            {
              "class": 2,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.41945743560791, 13.345988132428396]),
            {
              "class": 2,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40053176879883, 13.342104758926919]),
            {
              "class": 2,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.43589401245117, 13.343816791498815]),
            {
              "class": 2,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45177268981934, 13.35220975120444]),
            {
              "class": 2,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3004961013794, 13.357846649895006]),
            {
              "class": 2,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.26556301116943, 13.380977432375968]),
            {
              "class": 2,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.29684829711914, 13.386947652895737]),
            {
              "class": 2,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2695541381836, 13.39709251321799]),
            {
              "class": 2,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23303318023682, 13.433660555313168]),
            {
              "class": 2,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.28942394256592, 13.494302785157188]),
            {
              "class": 2,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.22612380981445, 13.5100346975051]),
            {
              "class": 2,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21161842346191, 13.518046307143617]),
            {
              "class": 2,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.25590705871582, 13.523387230626403]),
            {
              "class": 2,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.27813720703125, 13.53114804663451]),
            {
              "class": 2,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.22024440765381, 13.58847010011652]),
            {
              "class": 2,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2039794921875, 13.600817143393646]),
            {
              "class": 2,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21715450286865, 13.619753587148303]),
            {
              "class": 2,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.263503074646, 13.63189046636145]),
            {
              "class": 2,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.29156970977783, 13.639063861294284]),
            {
              "class": 2,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.32645988464355, 13.624800268971333]),
            {
              "class": 2,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36242294311523, 13.645319551082846]),
            {
              "class": 2,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33431339263916, 13.683767546575941]),
            {
              "class": 2,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3271894454956, 13.709660108920314]),
            {
              "class": 2,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2990369796753, 13.714913324148506]),
            {
              "class": 2,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.30161190032959, 13.728045847878505]),
            {
              "class": 2,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.29272842407227, 13.746638576147149]),
            {
              "class": 2,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.35795974731445, 13.765229828539479]),
            {
              "class": 2,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33242511749268, 13.775733649751107]),
            {
              "class": 2,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34838962554932, 13.778442892138214]),
            {
              "class": 2,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36461162567139, 13.781693941534904]),
            {
              "class": 2,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.38220691680908, 13.780693623462367]),
            {
              "class": 2,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40443706512451, 13.792655479673444]),
            {
              "class": 2,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3722505569458, 13.794822719047769]),
            {
              "class": 2,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42499351501465, 13.796114717560359]),
            {
              "class": 2,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.37654209136963, 13.823786773467264]),
            {
              "class": 2,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.39452362060547, 13.837204870043854]),
            {
              "class": 2,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4540901184082, 13.841788514530876]),
            {
              "class": 2,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45507717132568, 13.859205539358857]),
            {
              "class": 2,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.48747825622559, 13.8582055541246]),
            {
              "class": 2,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.49812126159668, 13.875121391112959]),
            {
              "class": 2,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52468585968018, 13.8582055541246]),
            {
              "class": 2,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.54275321960449, 13.873829831276213]),
            {
              "class": 2,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52500772476196, 13.672425623292751]),
            {
              "class": 2,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53453493118286, 13.660999751279759]),
            {
              "class": 2,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52155303955078, 13.70061262950074]),
            {
              "class": 2,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50009536743164, 13.73171448504027]),
            {
              "class": 2,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57240772247314, 13.692398717517213]),
            {
              "class": 2,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.59036779403687, 13.701029571693391]),
            {
              "class": 2,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61352062225342, 13.734132419060101]),
            {
              "class": 2,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64673709869385, 13.742761738841326]),
            {
              "class": 2,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63343334197998, 13.752682979399099]),
            {
              "class": 2,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65463352203369, 13.739009899718793]),
            {
              "class": 2,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61957168579102, 13.761520032905118]),
            {
              "class": 2,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6575517654419, 13.755851018082895]),
            {
              "class": 2,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67128467559814, 13.749264784314812]),
            {
              "class": 2,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66446113586426, 13.778359531302392]),
            {
              "class": 2,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63600826263428, 13.782194098964796]),
            {
              "class": 2,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63124465942383, 13.802199517584041]),
            {
              "class": 2,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6234769821167, 13.819161101286962]),
            {
              "class": 2,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58193492889404, 13.832204427592517]),
            {
              "class": 2,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.55704402923584, 13.8456220387205]),
            {
              "class": 2,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.5341272354126, 13.84966383815288]),
            {
              "class": 2,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53575801849365, 13.828537368165957]),
            {
              "class": 2,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.51035213470459, 13.829454138439337]),
            {
              "class": 2,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.47846603393555, 13.881787392038433]),
            {
              "class": 2,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.33909034729004, 14.217129372047282]),
            {
              "class": 2,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.35376739501953, 14.224534216640208]),
            {
              "class": 2,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.31535816192627, 14.227820558714543]),
            {
              "class": 2,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.32415580749512, 14.240133516575002]),
            {
              "class": 2,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.31110954284668, 14.249035034127356]),
            {
              "class": 2,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.29587459564209, 14.253360878480965]),
            {
              "class": 2,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.28862190246582, 14.271162518247866]),
            {
              "class": 2,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.31145286560059, 14.279023075062167]),
            {
              "class": 2,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.36677074432373, 14.287756705182389]),
            {
              "class": 2,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.37007522583008, 14.309921967556889]),
            {
              "class": 2,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3936357498169, 14.326762777973173]),
            {
              "class": 2,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3928632736206, 14.334413494062117]),
            {
              "class": 2,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3901596069336, 14.353622293347769]),
            {
              "class": 2,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42058658599854, 14.341481858441735]),
            {
              "class": 2,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4217882156372, 14.35578421957213]),
            {
              "class": 2,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40372085571289, 14.386007423564347]),
            {
              "class": 2,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42286109924316, 14.404380468368393]),
            {
              "class": 2,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45457553863525, 14.436217952637215]),
            {
              "class": 2,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.38071823120117, 14.469048186080672]),
            {
              "class": 2,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.37131977081299, 14.480225981178856]),
            {
              "class": 2,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.38183403015137, 14.503244647083001]),
            {
              "class": 2,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40620994567871, 14.50266297738946]),
            {
              "class": 2,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.450026512146, 14.512468062313493]),
            {
              "class": 2,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48968029022217, 14.50665153889666]),
            {
              "class": 2,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.50023746490479, 14.52007085887585]),
            {
              "class": 2,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.494873046875, 14.544206967191094]),
            {
              "class": 2,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.450927734375, 14.566139043159705]),
            {
              "class": 2,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41822624206543, 14.569046541048065]),
            {
              "class": 2,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46272945404053, 14.582794333013288]),
            {
              "class": 2,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.35391235351562, 15.045766694608277]),
            {
              "class": 2,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.36575698852539, 15.07452699566805]),
            {
              "class": 2,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.38197898864746, 15.074444118538823]),
            {
              "class": 2,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.39330863952637, 15.07121188531514]),
            {
              "class": 2,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.33374214172363, 15.106598018939488]),
            {
              "class": 2,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.35262489318848, 15.120187379021448]),
            {
              "class": 2,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.26095771789551, 15.08016256469757]),
            {
              "class": 2,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.3785457611084, 15.086543837546657]),
            {
              "class": 2,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.45648002624512, 15.099554410642643]),
            {
              "class": 2,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.4858341217041, 15.12863885890884]),
            {
              "class": 2,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.41468048095703, 15.161861506352082]),
            {
              "class": 2,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.37219429016113, 15.181825724275733]),
            {
              "class": 2,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.33331298828125, 15.216116695436034]),
            {
              "class": 2,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.40154838562012, 15.209822152453302]),
            {
              "class": 2,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.23400688171387, 15.259427985505852]),
            {
              "class": 2,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.19375228881836, 15.245599154797732]),
            {
              "class": 2,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.36189460754395, 15.321273934950508]),
            {
              "class": 2,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.3473892211914, 15.347016995548977]),
            {
              "class": 2,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.2759780883789, 15.369943029915344]),
            {
              "class": 2,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.17881774902344, 15.396342089903872]),
            {
              "class": 2,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.14216804504395, 15.429108676945637]),
            {
              "class": 2,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.2328052520752, 15.44681372135867]),
            {
              "class": 2,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.73371315002441, 14.914680101985335]),
            {
              "class": 2,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.78709983825684, 14.883575704872396]),
            {
              "class": 2,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.80143356323242, 14.90140944208083]),
            {
              "class": 2,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.68333053588867, 14.939311593745513]),
            {
              "class": 2,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.63972854614258, 14.953906700520374]),
            {
              "class": 2,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.72744750976562, 14.969164159577804]),
            {
              "class": 2,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.68427467346191, 14.985332563724704]),
            {
              "class": 2,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.7095947265625, 15.022805397349945]),
            {
              "class": 2,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.76898956298828, 14.991136308428281]),
            {
              "class": 2,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8073558807373, 15.014515513428965]),
            {
              "class": 2,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.75053596496582, 15.026121260799542]),
            {
              "class": 2,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.73877716064453, 15.008878208584134]),
            {
              "class": 2,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.71427249908447, 14.977289971669075]),
            {
              "class": 2,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.7326831817627, 14.971983353790147]),
            {
              "class": 2,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.68800830841064, 15.02205932097586]),
            {
              "class": 2,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.65350437164307, 15.031841004175122]),
            {
              "class": 2,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.62294864654541, 15.041746573779687]),
            {
              "class": 2,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.67826652526855, 15.049662409464053]),
            {
              "class": 2,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.66886806488037, 15.06221938844066]),
            {
              "class": 2,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.70886516571045, 15.06909847550459]),
            {
              "class": 2,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.75911903381348, 15.086129474995245]),
            {
              "class": 2,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.81503772735596, 15.082483049713343]),
            {
              "class": 2,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.84881210327148, 15.091681866065302]),
            {
              "class": 2,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.84447765350342, 15.055464405942077]),
            {
              "class": 2,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.95339679718018, 14.805131245685857]),
            {
              "class": 2,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.99081897735596, 14.836910696076288]),
            {
              "class": 2,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.00892925262451, 14.845373365979116]),
            {
              "class": 2,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.97983264923096, 14.857568983898313]),
            {
              "class": 2,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.94275379180908, 14.867648515671693]),
            {
              "class": 2,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91962242126465, 14.873165097131709]),
            {
              "class": 2,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.89292907714844, 14.882497338560292]),
            {
              "class": 2,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8630599975586, 14.875570780217855]),
            {
              "class": 2,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.81825637817383, 14.895105592036513]),
            {
              "class": 2,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.78169250488281, 14.92500576791874]),
            {
              "class": 2,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.77062034606934, 14.939726241156064]),
            {
              "class": 2,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.81975841522217, 14.941550680250188]),
            {
              "class": 2,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.76220893859863, 14.951045806099112]),
            {
              "class": 2,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.73315525054932, 14.962240392881935]),
            {
              "class": 2,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2266845703125, 15.677254358963596]),
            {
              "class": 2,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.94241333007812, 15.343788940043282]),
            {
              "class": 2,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.078369140625, 15.22986464831455]),
            {
              "class": 2,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.21157836914062, 15.16492667481092]),
            {
              "class": 2,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.78585815429688, 15.081405684819769]),
            {
              "class": 2,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.85452270507812, 15.013769408093117]),
            {
              "class": 2,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.06051635742188, 14.968666650866512]),
            {
              "class": 2,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43130493164062, 15.18083169996565]),
            {
              "class": 2,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43130493164062, 15.248414679139852]),
            {
              "class": 2,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46151733398438, 15.296107237102772]),
            {
              "class": 2,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.429931640625, 15.39543183321259]),
            {
              "class": 2,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29534912109375, 15.484121737015192]),
            {
              "class": 2,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29534912109375, 15.425881893976563]),
            {
              "class": 2,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.33929443359375, 15.37424655321481]),
            {
              "class": 2,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.26513671875, 15.359680423515913]),
            {
              "class": 2,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.23904418945312, 15.428529514464572]),
            {
              "class": 2,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15802001953125, 15.472210373836129]),
            {
              "class": 2,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39010620117188, 15.521174922483308]),
            {
              "class": 2,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.52468872070312, 15.59658404687789]),
            {
              "class": 2,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.52880859375, 15.698408515946419]),
            {
              "class": 2,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.62493896484375, 15.816038378933133]),
            {
              "class": 2,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.56863403320312, 15.827929734724849]),
            {
              "class": 2,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.62356567382812, 15.817359675222443]),
            {
              "class": 2,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.62081909179688, 15.73806664220694]),
            {
              "class": 2,
              "system:index": "917"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6331787109375, 15.702374676104439]),
            {
              "class": 2,
              "system:index": "918"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.63729858398438, 15.65609800971696]),
            {
              "class": 2,
              "system:index": "919"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.58099365234375, 15.468239767090669]),
            {
              "class": 2,
              "system:index": "920"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61532592773438, 15.408671538149429]),
            {
              "class": 2,
              "system:index": "921"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.72381591796875, 15.364977315698573]),
            {
              "class": 2,
              "system:index": "922"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80209350585938, 15.355707666100928]),
            {
              "class": 2,
              "system:index": "923"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.67575073242188, 15.583356375639625]),
            {
              "class": 2,
              "system:index": "924"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54254150390625, 15.658742673171389]),
            {
              "class": 2,
              "system:index": "925"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35714721679688, 15.31067779941656]),
            {
              "class": 2,
              "system:index": "926"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.364013671875, 15.259013961876649]),
            {
              "class": 2,
              "system:index": "927"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.38873291015625, 15.206012206147157]),
            {
              "class": 2,
              "system:index": "928"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2376708984375, 15.334518349387663]),
            {
              "class": 2,
              "system:index": "929"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.53292846679688, 15.202036536583206]),
            {
              "class": 2,
              "system:index": "930"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.81033325195312, 15.224564339080233]),
            {
              "class": 2,
              "system:index": "931"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.23492431640625, 15.142392507491829]),
            {
              "class": 2,
              "system:index": "932"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.21707153320312, 15.232514752876286]),
            {
              "class": 2,
              "system:index": "933"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15664672851562, 15.327896247062933]),
            {
              "class": 2,
              "system:index": "934"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.11544799804688, 15.292133271452533]),
            {
              "class": 2,
              "system:index": "935"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.21432495117188, 15.60584290961007]),
            {
              "class": 2,
              "system:index": "936"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.21981811523438, 15.537052823106482]),
            {
              "class": 2,
              "system:index": "937"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15802001953125, 15.550283472595705]),
            {
              "class": 2,
              "system:index": "938"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0509033203125, 15.556898478587641]),
            {
              "class": 2,
              "system:index": "939"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.8421630859375, 15.3040549422392]),
            {
              "class": 2,
              "system:index": "940"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.85040283203125, 15.208662610868243]),
            {
              "class": 2,
              "system:index": "941"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.902587890625, 15.212638155454414]),
            {
              "class": 2,
              "system:index": "942"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.96781921386719, 15.132284491291694]),
            {
              "class": 2,
              "system:index": "943"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.93280029296875, 15.13311303535822]),
            {
              "class": 2,
              "system:index": "944"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.90584945678711, 15.127644584646772]),
            {
              "class": 2,
              "system:index": "945"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.89228820800781, 15.117535864925523]),
            {
              "class": 2,
              "system:index": "946"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.89280319213867, 15.16940008414626]),
            {
              "class": 2,
              "system:index": "947"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.88456344604492, 15.187127108223601]),
            {
              "class": 2,
              "system:index": "948"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.91838073730469, 15.187292774326712]),
            {
              "class": 2,
              "system:index": "949"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.91958236694336, 15.17718690413029]),
            {
              "class": 2,
              "system:index": "950"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.95116806030273, 15.168240320447001]),
            {
              "class": 2,
              "system:index": "951"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.97417068481445, 15.152168654253085]),
            {
              "class": 2,
              "system:index": "952"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.99580001831055, 15.147197788599206]),
            {
              "class": 2,
              "system:index": "953"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.00197982788086, 15.155648190727513]),
            {
              "class": 2,
              "system:index": "954"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.99871826171875, 15.160121796378114]),
            {
              "class": 2,
              "system:index": "955"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.01914596557617, 15.148026274316575]),
            {
              "class": 2,
              "system:index": "956"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03287887573242, 15.139741271227788]),
            {
              "class": 2,
              "system:index": "957"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03820037841797, 15.145043710557243]),
            {
              "class": 2,
              "system:index": "958"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.04214859008789, 15.155482499812205]),
            {
              "class": 2,
              "system:index": "959"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.04008865356445, 15.180169014492646]),
            {
              "class": 2,
              "system:index": "960"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.056396484375, 15.180997371008951]),
            {
              "class": 2,
              "system:index": "961"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09673690795898, 15.168074639398984]),
            {
              "class": 2,
              "system:index": "962"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15613174438477, 15.141232595710983]),
            {
              "class": 2,
              "system:index": "963"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15716171264648, 15.154156967817595]),
            {
              "class": 2,
              "system:index": "964"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12248611450195, 15.201373917700662]),
            {
              "class": 2,
              "system:index": "965"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.09656524658203, 15.183648090023508]),
            {
              "class": 2,
              "system:index": "966"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.13021087646484, 15.149683236021742]),
            {
              "class": 2,
              "system:index": "967"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10806655883789, 15.184642101074141]),
            {
              "class": 2,
              "system:index": "968"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1058349609375, 15.20319611461705]),
            {
              "class": 2,
              "system:index": "969"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10017013549805, 15.200379985472699]),
            {
              "class": 2,
              "system:index": "970"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.08729553222656, 15.220920299069878]),
            {
              "class": 2,
              "system:index": "971"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03751373291016, 15.21065039253651]),
            {
              "class": 2,
              "system:index": "972"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03459548950195, 15.234171051278288]),
            {
              "class": 2,
              "system:index": "973"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0260124206543, 15.230195913209906]),
            {
              "class": 2,
              "system:index": "974"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.00421142578125, 15.241789855961722]),
            {
              "class": 2,
              "system:index": "975"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.9901351928711, 15.254211228138276]),
            {
              "class": 2,
              "system:index": "976"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.97193908691406, 15.24742096897244]),
            {
              "class": 2,
              "system:index": "977"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.9655876159668, 15.236986728635852]),
            {
              "class": 2,
              "system:index": "978"
            }),
        ee.Feature(
            ee.Geometry.Point([-83.98395538330078, 15.234667938256278]),
            {
              "class": 2,
              "system:index": "979"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.05588150024414, 15.25686102584876]),
            {
              "class": 2,
              "system:index": "980"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.0538215637207, 15.28302598261399]),
            {
              "class": 2,
              "system:index": "981"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.05261993408203, 15.292464438135466]),
            {
              "class": 2,
              "system:index": "982"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.03287887573242, 15.289318333517802]),
            {
              "class": 2,
              "system:index": "983"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.16471481323242, 15.28865598968557]),
            {
              "class": 2,
              "system:index": "984"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.10909652709961, 15.304220516222163]),
            {
              "class": 2,
              "system:index": "985"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.17964935302734, 15.284185114076433]),
            {
              "class": 2,
              "system:index": "986"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.18462753295898, 15.295776076177509]),
            {
              "class": 2,
              "system:index": "987"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.1578483581543, 15.24824906110487]),
            {
              "class": 2,
              "system:index": "988"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.15904998779297, 15.234999195589639]),
            {
              "class": 2,
              "system:index": "989"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.39422607421875, 14.983259759618893]),
            {
              "class": 2,
              "system:index": "990"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.54666137695312, 14.956726095376125]),
            {
              "class": 2,
              "system:index": "991"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.44503784179688, 15.090687418628141]),
            {
              "class": 2,
              "system:index": "992"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61807250976562, 15.15962473375665]),
            {
              "class": 2,
              "system:index": "993"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4573974609375, 15.26828789551718]),
            {
              "class": 2,
              "system:index": "994"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61395263671875, 15.25636419132397]),
            {
              "class": 2,
              "system:index": "995"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.12918090820312, 15.12913599429062]),
            {
              "class": 2,
              "system:index": "996"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2047119140625, 15.086709582341031]),
            {
              "class": 2,
              "system:index": "997"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29397583007812, 15.690475964152405]),
            {
              "class": 2,
              "system:index": "998"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29946899414062, 15.669320984759295]),
            {
              "class": 2,
              "system:index": "999"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.24179077148438, 15.640229310707545]),
            {
              "class": 2,
              "system:index": "1000"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.18960571289062, 15.63626194364076]),
            {
              "class": 2,
              "system:index": "1001"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.18960571289062, 15.702374676104439]),
            {
              "class": 2,
              "system:index": "1002"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.26513671875, 15.70501873999827]),
            {
              "class": 2,
              "system:index": "1003"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.407958984375, 15.6111335007021]),
            {
              "class": 2,
              "system:index": "1004"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.4354248046875, 15.472210373836129]),
            {
              "class": 2,
              "system:index": "1005"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.46975708007812, 15.42191039994707]),
            {
              "class": 2,
              "system:index": "1006"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.51095581054688, 15.436472173319213]),
            {
              "class": 2,
              "system:index": "1007"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.56588745117188, 15.547637410686281]),
            {
              "class": 2,
              "system:index": "1008"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2376708984375, 15.273587102218679]),
            {
              "class": 2,
              "system:index": "1009"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25277709960938, 15.259013961876649]),
            {
              "class": 2,
              "system:index": "1010"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.27200317382812, 15.237814861862612]),
            {
              "class": 2,
              "system:index": "1011"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.30633544921875, 15.22323924091903]),
            {
              "class": 2,
              "system:index": "1012"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.13742065429688, 15.117204423332618]),
            {
              "class": 2,
              "system:index": "1013"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2706298828125, 15.077427674847987]),
            {
              "class": 2,
              "system:index": "1014"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.287109375, 15.024380438910743]),
            {
              "class": 2,
              "system:index": "1015"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.29122924804688, 14.988566098048448]),
            {
              "class": 2,
              "system:index": "1016"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61669921875, 15.583356375639625]),
            {
              "class": 2,
              "system:index": "1017"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.62356567382812, 15.551606490799015]),
            {
              "class": 2,
              "system:index": "1018"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.61395263671875, 15.515882017308009]),
            {
              "class": 2,
              "system:index": "1019"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.517822265625, 15.061514891072227]),
            {
              "class": 2,
              "system:index": "1020"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35028076171875, 15.06284100182984]),
            {
              "class": 2,
              "system:index": "1021"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35714721679688, 14.967339955323169]),
            {
              "class": 2,
              "system:index": "1022"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.28573608398438, 15.231189704767244]),
            {
              "class": 2,
              "system:index": "1023"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.17861938476562, 15.081405684819769]),
            {
              "class": 2,
              "system:index": "1024"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.2926025390625, 15.64287417935967]),
            {
              "class": 2,
              "system:index": "1025"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40658569335938, 15.78961064138803]),
            {
              "class": 2,
              "system:index": "1026"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.32281494140625, 15.772430762973455]),
            {
              "class": 2,
              "system:index": "1027"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45465087890625, 15.742032029750968]),
            {
              "class": 2,
              "system:index": "1028"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40933227539062, 15.728813770533966]),
            {
              "class": 2,
              "system:index": "1029"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.31869506835938, 15.810753107467148]),
            {
              "class": 2,
              "system:index": "1030"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.35989379882812, 15.772430762973455]),
            {
              "class": 2,
              "system:index": "1031"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.561767578125, 15.703696712339596]),
            {
              "class": 2,
              "system:index": "1032"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.5672607421875, 15.678576558029068]),
            {
              "class": 2,
              "system:index": "1033"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.59335327148438, 15.667998725762747]),
            {
              "class": 2,
              "system:index": "1034"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.40933227539062, 15.60848822221562]),
            {
              "class": 2,
              "system:index": "1035"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.25689697265625, 15.633616989544777]),
            {
              "class": 2,
              "system:index": "1036"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.21157836914062, 15.707662769583518]),
            {
              "class": 2,
              "system:index": "1037"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.407958984375, 15.497355780455425]),
            {
              "class": 2,
              "system:index": "1038"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.45327758789062, 15.47485740268724]),
            {
              "class": 2,
              "system:index": "1039"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.43679809570312, 15.537052823106482]),
            {
              "class": 2,
              "system:index": "1040"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.74990844726562, 15.758884063581148]),
            {
              "class": 2,
              "system:index": "1041"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.72518920898438, 15.755249429439134]),
            {
              "class": 2,
              "system:index": "1042"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.69188690185547, 15.736744829171359]),
            {
              "class": 2,
              "system:index": "1043"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.70458984375, 15.70601025511355]),
            {
              "class": 2,
              "system:index": "1044"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.69806671142578, 15.77936896603807]),
            {
              "class": 2,
              "system:index": "1045"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6987533569336, 15.808440757784046]),
            {
              "class": 2,
              "system:index": "1046"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.69532012939453, 15.841141531704206]),
            {
              "class": 2,
              "system:index": "1047"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6826171875, 15.814056418315259]),
            {
              "class": 2,
              "system:index": "1048"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.66751098632812, 15.79753932486754]),
            {
              "class": 2,
              "system:index": "1049"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.64622497558594, 15.726170015604117]),
            {
              "class": 2,
              "system:index": "1050"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.64107513427734, 15.671965477072874]),
            {
              "class": 2,
              "system:index": "1051"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.64897155761719, 15.659734413145312]),
            {
              "class": 2,
              "system:index": "1052"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.69566345214844, 15.670643235196232]),
            {
              "class": 2,
              "system:index": "1053"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.69703674316406, 15.699069547998578]),
            {
              "class": 2,
              "system:index": "1054"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.71179962158203, 15.706340759079778]),
            {
              "class": 2,
              "system:index": "1055"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.6884536743164, 15.72947470389864]),
            {
              "class": 2,
              "system:index": "1056"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.78286743164062, 15.74335380840927]),
            {
              "class": 2,
              "system:index": "1057"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.83642578125, 15.76582272989382]),
            {
              "class": 2,
              "system:index": "1058"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.83488082885742, 15.778460405334396]),
            {
              "class": 2,
              "system:index": "1059"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.814453125, 15.772430762973455]),
            {
              "class": 2,
              "system:index": "1060"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.80441093444824, 15.791675432595365]),
            {
              "class": 2,
              "system:index": "1061"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.79205131530762, 15.820580298762325]),
            {
              "class": 2,
              "system:index": "1062"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.78479862213135, 15.825122116571762]),
            {
              "class": 2,
              "system:index": "1063"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.78029251098633, 15.830530875560232]),
            {
              "class": 2,
              "system:index": "1064"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.77612972259521, 15.837095510672821]),
            {
              "class": 2,
              "system:index": "1065"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.77213859558105, 15.838705671610011]),
            {
              "class": 2,
              "system:index": "1066"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.79166507720947, 15.843742502415996]),
            {
              "class": 2,
              "system:index": "1067"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.76136684417725, 15.84605444825196]),
            {
              "class": 2,
              "system:index": "1068"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.76076602935791, 15.852412162758272]),
            {
              "class": 2,
              "system:index": "1069"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.7970724105835, 15.843948927227824]),
            {
              "class": 2,
              "system:index": "1070"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.70161247253418, 15.565208278542414]),
            {
              "class": 2,
              "system:index": "1071"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.73199653625488, 15.570003831228563]),
            {
              "class": 2,
              "system:index": "1072"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.7319107055664, 15.5817028568334]),
            {
              "class": 2,
              "system:index": "1073"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.97779941558838, 14.232616007179026]),
            {
              "class": 2,
              "system:index": "1074"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.98051381111145, 14.234113533143478]),
            {
              "class": 2,
              "system:index": "1075"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.97397994995117, 14.237982095927478]),
            {
              "class": 2,
              "system:index": "1076"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.96905541419983, 14.228372963035882]),
            {
              "class": 2,
              "system:index": "1077"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.96396994590759, 14.239573179128415]),
            {
              "class": 2,
              "system:index": "1078"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.96284341812134, 14.243722421783854]),
            {
              "class": 2,
              "system:index": "1079"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.96215677261353, 14.249972139547316]),
            {
              "class": 2,
              "system:index": "1080"
            })]),
    Cropclass = /* color: #d63000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-87.88616180419922, 15.63047606217727]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.92319774627686, 15.659073253697356]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.89641857147217, 15.675353682804241]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.88474559783936, 15.695103323535045]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.89131164550781, 15.724806816045879]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.83878326416016, 15.745171240028743]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.86453247070312, 15.753266874306329]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.81801223754883, 15.755208126404602]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.81256198883057, 15.763055552119605]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.81818389892578, 15.786678601720773]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.82758235931396, 15.806210966994152]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.81239032745361, 15.800553794960289]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.79917240142822, 15.817772578542618]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.83470630645752, 15.82710396872831]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.82934188842773, 15.834783462263538]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.81693935394287, 15.861494264542722]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.78578281402588, 15.883165808908716]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7619218826294, 15.881638557374988]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.79149055480957, 15.88923342353532]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.8168535232544, 15.887871321884942]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.769775390625, 15.846095732758398]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.78436660766602, 15.829746408040723]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.77110576629639, 15.82941610501618]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.78269290924072, 15.784613759597327]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7911901473999, 15.740627630508643]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.8192138671875, 15.737529656697598]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.77054786682129, 15.727367971313038]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.75286674499512, 15.696879871116234]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7642822265625, 15.71026545269277]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7838945388794, 15.692748341255342]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.76333808898926, 15.68320418731106]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72664546966553, 15.685104790366879]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71209716796875, 15.71869296026613]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.82384872436523, 15.453680224345833]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.79003143310547, 15.492393113447982]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7532958984375, 15.503145407996614]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.87981033325195, 15.457154753638664]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.86436080932617, 15.394273318937255]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.82453536987305, 15.536887434610984]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7254867553711, 15.541683647087643]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71158218383789, 15.597576087866772]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.78162002563477, 15.632129187850014]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7174186706543, 15.652130950388306]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.8327751159668, 15.623863426052528]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.86127090454102, 15.592450491150926]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.85697937011719, 15.553260251597386]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.87225723266602, 15.506288280709171]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.85079956054688, 15.511416022975808]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.89457321166992, 15.477669833745207]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.91397094726562, 15.404865209307275]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.97388076782227, 15.414463643970045]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.99860000610352, 15.433824654141132]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.88667678833008, 15.361170188040125]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.86624908447266, 15.312002345705663]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.92512893676758, 15.280210922385965]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0030632019043, 15.282363618901307]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.93130874633789, 15.195741573137505]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.90315628051758, 15.159293358026597]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.94109344482422, 15.105603641347459]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.94950485229492, 15.077427674847987]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.88684844970703, 15.157636471587702]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.14482879638672, 15.561859593560555]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.09607696533203, 15.574096498947696]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.05522155761719, 15.612786782427742]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.9735107421875, 15.68452634783261]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.88665008544922, 15.768465968951032]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.08234405517578, 15.658742673171389]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.1492919921875, 15.606834905835136]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.72872161865234, 15.778047421850541]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.7094955444336, 15.869543967367607]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.79360961914062, 15.916102088896729]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.81729888916016, 15.826608507510926]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.68340301513672, 15.868883491035929]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.76683044433594, 15.83915981724569]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.7486343383789, 15.79324465983888]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.21838569641113, 15.649072956295123]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.23889923095703, 15.659982347386899]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.22405052185059, 15.676758532106223]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.18104934692383, 15.698573774160415]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.17444038391113, 15.679981385152315]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.1397647857666, 15.717660196228112]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.13899230957031, 15.760866563872044]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.07839584350586, 15.770613575331305]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.08131408691406, 15.755084217250575]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.08509063720703, 15.735009936522186]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.08757972717285, 15.719643098553878]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.10706329345703, 15.741123301937408]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.08620643615723, 15.792088388311642]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.09779357910156, 15.798674918184593]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.10961675643921, 15.793575021920164]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.11965894699097, 15.798674918184593]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.11212730407715, 15.753390784569097]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.06200218200684, 15.75871885434974]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.02852821350098, 15.751201692131614]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.94784736633301, 15.761775203368643]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.98072052001953, 15.817029351959357]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.95437049865723, 15.822975088141671]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.91154098510742, 15.831810789711895]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84922790527344, 15.83519632999179]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.81807136535645, 15.871938175925445]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.80794334411621, 15.891173370579185]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.79618453979492, 15.883991345455435]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.76004981994629, 15.883000701193225]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84588050842285, 15.920889369676232]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.80536842346191, 15.94432888991162]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.76434135437012, 15.940780124350967]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.7252025604248, 15.928730358930068]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.73747634887695, 15.913708405730304]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.65851211547852, 15.882175160585117]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.64735412597656, 15.853774504093]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.58263778686523, 15.836269782136041]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.55414199829102, 15.831893364540049]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51131248474121, 15.834783462263538]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.61525344848633, 15.846838852430457]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.63928604125977, 15.889357250501039]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.69533348083496, 15.891338471591837]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.73301315307617, 15.840646104912787]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.71928024291992, 15.672461315569537]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.73721885681152, 15.693698600535917]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.64177513122559, 15.682460468253078]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.62877178192139, 15.734844707878889]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.64104557037354, 15.738314481194438]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.65937042236328, 15.727078810235948]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.68782329559326, 15.730259559480212]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.6644344329834, 15.717040535290637]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.6971788406372, 15.741990724029387]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.70498943328857, 15.73926452784776]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.71773529052734, 15.74760822509987]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.73747634887695, 15.760329638621478]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.79498291015625, 15.698408515946419]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.83437919616699, 15.705679750611214]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84433555603027, 15.712165803481877]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.22463798522949, 15.695681736074903]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.21262168884277, 15.685931133999755]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.18455505371094, 15.682460468253078]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.15133857727051, 15.723195750249202]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1272201538086, 15.744510357683943]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14464378356934, 15.762931647754716]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.07185935974121, 15.784242085781063]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.11709213256836, 15.80761491220788]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.06988525390625, 15.809349184025194]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.12370109558105, 15.82016740117496]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.08730888366699, 15.829746408040723]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.05331993103027, 15.857489933702933]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02079010009766, 15.863929849565615]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.05932807922363, 15.894392815894326]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.03091812133789, 15.905371562497004]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02765655517578, 15.932692005475591]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.02568244934082, 15.955800051265498]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-84.98345375061035, 15.933104672494062]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.14198303222656, 15.921714751383167]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.10747909545898, 15.930628657656285]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.13391494750977, 15.908508237156717]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.1909065246582, 15.861452983187105]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26214599609375, 15.840893818460431]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.29192924499512, 15.872928874594518]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.28952598571777, 15.855425814589934]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3264331817627, 15.841141531704206]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.31819343566895, 15.850306708057724]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.37012100219727, 15.845104902273466]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.36325454711914, 15.823305401692032]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.38162231445312, 15.801999072923605]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.34368515014648, 15.831645639954342]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.26884078979492, 15.595840012989676]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.22317886352539, 15.608322891177302]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19116401672363, 15.613944071703791]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24214744567871, 15.632377155549877]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.19124984741211, 15.649734148081523]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24334907531738, 15.667007025898444]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.24369239807129, 15.562190330305713]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3366470336914, 15.500912285166468]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.2908992767334, 15.557477281497508]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32248497009277, 15.46914970452945]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.77970504760742, 15.120353097551668]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.81523895263672, 15.143221012016276]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84888458251953, 15.17867796457498]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.9295654296875, 15.168406001365126]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.88544845581055, 15.194416293735333]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.75429916381836, 15.183316751966602]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.91995239257812, 15.220423379636822]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.97402572631836, 15.195907232477358]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.99925994873047, 15.188286768214727]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.85214614868164, 15.235827336641007]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8057975769043, 15.22472997576394]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.75258255004883, 15.230361545462046]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.89162826538086, 15.090687418628141]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.80974578857422, 15.091018901624334]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.76322555541992, 15.148523364190302]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.81438064575195, 15.192594020963595]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84150314331055, 15.245102293646266]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.08577728271484, 15.111735562278664]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.06311798095703, 15.131455943985085]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.08474731445312, 15.146700695612132]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.03805541992188, 15.135432941505828]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.07599258422852, 15.105603641347459]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21410751342773, 13.21170421212459]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.17960357666016, 13.172094062764995]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36516952514648, 13.215046546917913]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.35984802246094, 13.254148459616111]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34628677368164, 13.183626793771701]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.30766296386719, 13.266512714595093]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.26509094238281, 13.301931149873882]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.37615585327148, 13.268183511627466]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34560012817383, 13.307610983706317]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3141860961914, 13.331999343961305]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.22440719604492, 13.295582942762282]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3013973236084, 13.208445391629752]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.28856563568115, 13.223569293385058]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33186721801758, 13.200423494323145]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33294010162354, 13.219349735541996]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3094654083252, 13.249302836894511]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19325065612793, 13.155044682729793]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.17518329620361, 13.153373111032465]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21646785736084, 13.162399462774145]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19767093658447, 13.182456831343838]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.08433151245117, 13.310283800607925]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.07403182983398, 13.336175186494929]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.1025276184082, 13.323146319284875]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.15840339660645, 13.360727680598622]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.1369457244873, 13.376343103235804]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.1036434173584, 13.389035107658044]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.09626197814941, 13.40347979840151]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.20784187316895, 13.384275684388783]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23479270935059, 13.405734093841803]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.16690063476562, 13.42368421029323]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.24869728088379, 13.41166195503407]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18428134918213, 13.45344504958267]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21170425415039, 13.441549505103147]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23826885223389, 13.42163879962934]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.35066413879395, 13.382563938982438]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.32972145080566, 13.37154167722918]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36886024475098, 13.353128365896023]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53674507141113, 13.41374919529338]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56163597106934, 13.430362980883443]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52155303955078, 13.446474749538007]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.51116752624512, 13.438544221499843]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.49812126159668, 13.449312980019904]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.55914688110352, 13.452067700981372]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53631591796875, 13.453236360909765]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50447273254395, 13.487291943824324]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.49975204467773, 13.503817169107563]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.55923271179199, 13.5132477191233]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4870491027832, 13.522093736706735]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72625923156738, 13.416921765757245]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70926475524902, 13.437041565572908]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.74608612060547, 13.434787564028653]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70797729492188, 13.45407111451037]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73115158081055, 13.453403311862623]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72411346435547, 13.430112530340715]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.77612686157227, 13.431281297303514]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71801948547363, 13.402477882532352]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70136833190918, 13.466592069292544]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.72368431091309, 13.47902890239266]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65270233154297, 13.55593089349147]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6324462890625, 13.559602206670293]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67398834228516, 13.58254662806576]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69325733184814, 13.583589503596675]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64553546905518, 13.577165317446921]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6862621307373, 13.602402190175072]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66634941101074, 13.60281930598573]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65424728393555, 13.59818927930337]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68656253814697, 13.61633346055125]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66862392425537, 13.631431695320602]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7087926864624, 13.618585744602832]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.78174877166748, 13.643317748386771]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67703533172607, 13.65903978326732]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64012813568115, 13.640064782799685]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66128540039062, 13.623799282794149]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61197566986084, 13.61162027823734]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58163452148438, 13.622297795581419]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56163597106934, 13.65566192781861]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.54532814025879, 13.653576807711143]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53489971160889, 13.65211721266806]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.52949237823486, 13.681474187046986]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58828639984131, 13.704948792145526]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.74535655975342, 13.7464301456661]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.75286674499512, 13.760227843082673]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73205280303955, 13.758685542661967]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71235466003418, 13.747138808544891]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69608974456787, 13.739176649399864]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73784637451172, 13.72533602221712]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73840427398682, 13.710910885110097]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6833438873291, 13.716455912645168]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69291400909424, 13.756517968131371]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71059513092041, 13.778442892138214]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68656253814697, 13.789446261329964]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.75003433227539, 13.783611205866757]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70394325256348, 13.788779405228748]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.7117109298706, 13.818327637072324]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69527435302734, 13.82316168800119]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69162654876709, 13.838413294176947]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70514488220215, 13.880829166198813]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.71153926849365, 13.893410772608332]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69179821014404, 13.888578183395186]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68875122070312, 13.902409118327954]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67823696136475, 13.914739616549468]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66368865966797, 13.948520105733854]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6884937286377, 13.965429379687913]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70548820495605, 13.957349752672602]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66935348510742, 13.96513785168072]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.59725570678711, 14.229609307099093]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6156234741211, 14.215298923643896]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58867263793945, 14.279688506426698]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58369445800781, 14.263052132433168]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57305145263672, 14.256397238905413]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61356353759766, 14.247911964819087]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.59347915649414, 14.256480426286872]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63030052185059, 14.250657235480986]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56918907165527, 14.279605327613703]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63476371765137, 14.282766100900018]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57699966430664, 14.292664024778329]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.55880355834961, 14.298818816626966]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.61399269104004, 14.30197931993547]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58687019348145, 14.297238548309112]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57588386535645, 14.312458565487038]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.57614135742188, 14.333166112507744]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.63407707214355, 14.325016382285014]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58489608764648, 14.342562882752905]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.65785217285156, 14.346304849711647]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67570495605469, 14.339569264193996]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69209861755371, 14.361604686397264]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64145851135254, 14.381476281951622]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.62592315673828, 14.375406902439158]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67613410949707, 14.368090171098844]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67184257507324, 14.385300737801996]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69819259643555, 14.38712980223878]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67141342163086, 14.393531409805947]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70892143249512, 14.416392795063318]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68797874450684, 14.413233906813828]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.64145851135254, 14.406334074207749]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6778507232666, 14.429526639732291]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70016670227051, 14.438171279344072]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68128395080566, 14.454711528602608]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.69596099853516, 14.46019696769202]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.66557693481445, 14.475655203632504]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.67793655395508, 14.485212176561356]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.02226257324219, 14.745833113458614]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.99445343017578, 14.698515806664297]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.05985641479492, 14.71296112573078]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.04766845703125, 14.690545566428119]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.99102020263672, 14.736868517677722]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.96698760986328, 14.743010965702728]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.93729019165039, 14.743675003759977]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.96647262573242, 14.727405488537391]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.93737602233887, 14.726492367496629]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.89471817016602, 14.766749067663381]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.85171699523926, 14.793140137502217]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.83000183105469, 14.803430125370946]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.77910423278809, 14.789073798065768]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.90390205383301, 14.793969993330258]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.90072631835938, 14.80874089579437]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.94295501708984, 14.8051727362585]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.97187995910645, 14.797787289251803]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.94698905944824, 14.769819891571913]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.00140571594238, 14.755378342031054]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.07255935668945, 14.72699043399304]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.09933853149414, 14.689964391705335]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.0914421081543, 14.70839517992112]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.14645957946777, 14.701504571782305]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.13478660583496, 14.664391174697462]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.17040634155273, 14.656917917222763]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.14826202392578, 14.645707553018909]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.18010520935059, 14.671781145146673]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.20001792907715, 14.626357946566051]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.22276306152344, 14.605511612559788]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.1928939819336, 14.582586668821419]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.1478328704834, 14.595793721519824]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.20491027832031, 14.559493189743984]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.20010375976562, 14.526427094814961]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.21529579162598, 14.532824690280307]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.26241683959961, 14.564477598580941]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.27666473388672, 14.570209529466846]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.24593734741211, 14.596790448051507]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.23194694519043, 14.5817560100959]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.27589225769043, 14.521940358995938]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.29520416259766, 14.543376163900358]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.27074241638184, 14.605843840559759]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8651065826416, 14.642593461213727]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84982872009277, 14.659782696061372]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84120273590088, 14.67173962915567]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.82931518554688, 14.686062178545326]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.83240509033203, 14.701712123396645]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.82111835479736, 14.71831561318189]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84060192108154, 14.733423690607475]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.80279350280762, 14.756249842039434]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.77846050262451, 14.767288539869869]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.75202465057373, 14.798077732930428]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.72404384613037, 14.827908374940291]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.76052188873291, 14.849065309355746]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.78867435455322, 14.864910911616885]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.79215049743652, 14.857486022836815]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.81292152404785, 14.869763913203629]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.83051681518555, 14.867026335980922]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.85540771484375, 14.865408660391216]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8130931854248, 14.88876008298394]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.80240726470947, 14.898050176535646]),
            {
              "class": 1,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.80536842346191, 14.88573242131399]),
            {
              "class": 1,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8601713180542, 14.849894950874015]),
            {
              "class": 1,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.88205814361572, 14.83429715756099]),
            {
              "class": 1,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.45814037322998, 15.139658419559648]),
            {
              "class": 1,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.46281814575195, 15.154364082739258]),
            {
              "class": 1,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.4750919342041, 15.160080374537625]),
            {
              "class": 1,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.44608116149902, 15.16389114989686]),
            {
              "class": 1,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50307273864746, 15.588234178574709]),
            {
              "class": 1,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.51187038421631, 15.576659542291196]),
            {
              "class": 1,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50011157989502, 15.594351937122651]),
            {
              "class": 1,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.56572914123535, 15.519024696130417]),
            {
              "class": 1,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.56916236877441, 15.512408474511119]),
            {
              "class": 1,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.21649742126465, 14.821021553891674]),
            {
              "class": 1,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.1946964263916, 14.832969633841639]),
            {
              "class": 1,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.21829986572266, 14.830812390424802]),
            {
              "class": 1,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.17195129394531, 14.862671027929741]),
            {
              "class": 1,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.19443893432617, 14.87528044057928]),
            {
              "class": 1,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.21109008789062, 14.884488164461816]),
            {
              "class": 1,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.2357234954834, 14.890211686507433]),
            {
              "class": 1,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.27057075500488, 14.864744995103715]),
            {
              "class": 1,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.29734992980957, 14.85810823002128]),
            {
              "class": 1,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.32112503051758, 14.874450896601473]),
            {
              "class": 1,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.26396179199219, 14.844253325745902]),
            {
              "class": 1,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.23357772827148, 14.843838494557225]),
            {
              "class": 1,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.29331588745117, 14.91186015523065]),
            {
              "class": 1,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.2690258026123, 14.920900442047646]),
            {
              "class": 1,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.2368392944336, 14.931433140843732]),
            {
              "class": 1,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.36704444885254, 14.922725041001929]),
            {
              "class": 1,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.3774299621582, 14.911030752092042]),
            {
              "class": 1,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.33159637451172, 14.88573242131399]),
            {
              "class": 1,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.33734703063965, 14.831393188845135]),
            {
              "class": 1,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.30378723144531, 14.833633396719563]),
            {
              "class": 1,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.33322715759277, 14.806915333137733]),
            {
              "class": 1,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.36258125305176, 14.831476159920772]),
            {
              "class": 1,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.40146255493164, 14.832803692803964]),
            {
              "class": 1,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.38249397277832, 14.846161538960693]),
            {
              "class": 1,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.40807151794434, 14.848899380669895]),
            {
              "class": 1,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.44506454467773, 14.84765491146512]),
            {
              "class": 1,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.43399238586426, 14.799778895237159]),
            {
              "class": 1,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.46660804748535, 14.806002546043391]),
            {
              "class": 1,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.48566246032715, 14.815794061560965]),
            {
              "class": 1,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.49802207946777, 14.805753603441444]),
            {
              "class": 1,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.51570320129395, 14.810151547314957]),
            {
              "class": 1,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.53518676757812, 14.82292997202888]),
            {
              "class": 1,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.47639274597168, 14.837781868563846]),
            {
              "class": 1,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.5598201751709, 14.806832352651634]),
            {
              "class": 1,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.56702995300293, 14.82691270351793]),
            {
              "class": 1,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.5858268737793, 14.806085526847163]),
            {
              "class": 1,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.5708065032959, 14.835541703649374]),
            {
              "class": 1,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.57320976257324, 14.799032045135936]),
            {
              "class": 1,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.59380912780762, 14.79405297873848]),
            {
              "class": 1,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.10484504699707, 14.484214946451635]),
            {
              "class": 1,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.05334663391113, 14.447979213788862]),
            {
              "class": 1,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.1438980102539, 14.455043983310738]),
            {
              "class": 1,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.16484069824219, 14.487871434931572]),
            {
              "class": 1,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.09574699401855, 14.52999980082312]),
            {
              "class": 1,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.05738067626953, 14.553511750479586]),
            {
              "class": 1,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.05120086669922, 14.3851344584742]),
            {
              "class": 1,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.06647872924805, 14.370251957548387]),
            {
              "class": 1,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.40077590942383, 14.012277296612108]),
            {
              "class": 1,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.3715934753418, 14.011361251096389]),
            {
              "class": 1,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.37056350708008, 14.03817488838229]),
            {
              "class": 1,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.40678405761719, 14.040339827874984]),
            {
              "class": 1,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.4543342590332, 14.027349884168967]),
            {
              "class": 1,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.47055625915527, 14.054744481146816]),
            {
              "class": 1,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.42017364501953, 14.076141627397002]),
            {
              "class": 1,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.37245178222656, 14.070064042363654]),
            {
              "class": 1,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.33992195129395, 14.090127784279321]),
            {
              "class": 1,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.37502670288086, 14.110106521777768]),
            {
              "class": 1,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.27589225769043, 14.085715577271824]),
            {
              "class": 1,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.25546455383301, 14.103197406345462]),
            {
              "class": 1,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.29563331604004, 14.098951942426076]),
            {
              "class": 1,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.30790710449219, 14.027932782030952]),
            {
              "class": 1,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.34678840637207, 13.985127488630589]),
            {
              "class": 1,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.36369705200195, 13.959473805774623]),
            {
              "class": 1,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33238220214844, 15.644196600866074]),
            {
              "class": 1,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.31229782104492, 15.692789656968316]),
            {
              "class": 1,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.28826522827148, 15.735092550793494]),
            {
              "class": 1,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19676971435547, 15.660560859447635]),
            {
              "class": 1,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18990325927734, 15.630310748876026]),
            {
              "class": 1,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.38714218139648, 15.585505930191367]),
            {
              "class": 1,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.41555213928223, 15.540939414538434]),
            {
              "class": 1,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.37778663635254, 15.568060819046403]),
            {
              "class": 1,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.47340202331543, 15.534241200633055]),
            {
              "class": 1,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.48747825622559, 15.544081711457315]),
            {
              "class": 1,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.50455856323242, 15.553260251597386]),
            {
              "class": 1,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.51648902893066, 15.529858300878844]),
            {
              "class": 1,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.53974914550781, 15.51546850337375]),
            {
              "class": 1,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.44361877441406, 15.622830182376136]),
            {
              "class": 1,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42838382720947, 15.631757235737199]),
            {
              "class": 1,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42447853088379, 15.654610371488662]),
            {
              "class": 1,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40735530853271, 15.657874896746955]),
            {
              "class": 1,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42696762084961, 15.674196740826774]),
            {
              "class": 1,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.41589546203613, 15.684898203935749]),
            {
              "class": 1,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40563869476318, 15.701341829328591]),
            {
              "class": 1,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.39143371582031, 15.70559712440186]),
            {
              "class": 1,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40096092224121, 15.72327836931826]),
            {
              "class": 1,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.39864349365234, 15.730218251367198]),
            {
              "class": 1,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.39894390106201, 15.712744167594035]),
            {
              "class": 1,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.35628604888916, 15.735009936522186]),
            {
              "class": 1,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.35302448272705, 15.731416183238844]),
            {
              "class": 1,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33036518096924, 15.749962572748768]),
            {
              "class": 1,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.31783390045166, 15.752399500350355]),
            {
              "class": 1,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.32843399047852, 15.774247934336993]),
            {
              "class": 1,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.27693557739258, 15.78515062057313]),
            {
              "class": 1,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.24449157714844, 15.776725869050106]),
            {
              "class": 1,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2153091430664, 15.733109799019411]),
            {
              "class": 1,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.22766876220703, 15.71361171068266]),
            {
              "class": 1,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18870162963867, 15.737901416047427]),
            {
              "class": 1,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.1626091003418, 15.750458221408886]),
            {
              "class": 1,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.14432716369629, 15.754753792470275]),
            {
              "class": 1,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.22904205322266, 15.759462294832403]),
            {
              "class": 1,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19900131225586, 15.763262059226326]),
            {
              "class": 1,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.15651512145996, 15.708819521737276]),
            {
              "class": 1,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.1475887298584, 15.720056200774048]),
            {
              "class": 1,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.11651802062988, 15.712454985743255]),
            {
              "class": 1,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.15582847595215, 15.685435328221635]),
            {
              "class": 1,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.17273712158203, 15.68055984056923]),
            {
              "class": 1,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18707084655762, 15.673370349686554]),
            {
              "class": 1,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.15806007385254, 15.656263302185227]),
            {
              "class": 1,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.13359832763672, 15.647254667861677]),
            {
              "class": 1,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.08244323730469, 15.672296036204418]),
            {
              "class": 1,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.03901290893555, 15.648494411728674]),
            {
              "class": 1,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.12098121643066, 15.618986470158747]),
            {
              "class": 1,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.20629692077637, 15.624607358273053]),
            {
              "class": 1,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21908569335938, 15.617167914524966]),
            {
              "class": 1,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.20046043395996, 15.59600535408679]),
            {
              "class": 1,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.24861145019531, 15.604685574617594]),
            {
              "class": 1,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.27049827575684, 15.591954458870813]),
            {
              "class": 1,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33572959899902, 15.597906767130883]),
            {
              "class": 1,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.33555793762207, 15.567647409830585]),
            {
              "class": 1,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3425235748291, 15.61096817179637]),
            {
              "class": 1,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.31737518310547, 15.628492293755151]),
            {
              "class": 1,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.35273742675781, 15.59600535408679]),
            {
              "class": 1,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.30913543701172, 15.595095976404567]),
            {
              "class": 1,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.27102661132812, 15.636592560500032]),
            {
              "class": 1,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.2337760925293, 15.641634401435304]),
            {
              "class": 1,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.20390701293945, 15.653122722436237]),
            {
              "class": 1,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.21171760559082, 15.682708374906904]),
            {
              "class": 1,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.1627082824707, 15.674362018653484]),
            {
              "class": 1,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.22931289672852, 15.657007116638615]),
            {
              "class": 1,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.22193145751953, 15.67518840578025]),
            {
              "class": 1,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.13910484313965, 15.675518959694429]),
            {
              "class": 1,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.32561492919922, 15.61386140840071]),
            {
              "class": 1,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.34123611450195, 15.586332675952635]),
            {
              "class": 1,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43127250671387, 15.514641473019669]),
            {
              "class": 1,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41204643249512, 15.52927942036053]),
            {
              "class": 1,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42775344848633, 15.519438202938618]),
            {
              "class": 1,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.39024543762207, 15.538127845091838]),
            {
              "class": 1,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40603828430176, 15.572360225622866]),
            {
              "class": 1,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.36750030517578, 15.578726489448904]),
            {
              "class": 1,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.27325820922852, 15.618077194358797]),
            {
              "class": 1,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.22484970092773, 15.63725379261664]),
            {
              "class": 1,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.12992095947266, 15.675271044308962]),
            {
              "class": 1,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.10932159423828, 15.694855431944264]),
            {
              "class": 1,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49590301513672, 15.238228927253312]),
            {
              "class": 1,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46320152282715, 15.25744066464248]),
            {
              "class": 1,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.450927734375, 15.276236655384137]),
            {
              "class": 1,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53581428527832, 15.25992481278356]),
            {
              "class": 1,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48174095153809, 15.266135054575228]),
            {
              "class": 1,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43427658081055, 15.299336028688423]),
            {
              "class": 1,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52937698364258, 15.28600659342723]),
            {
              "class": 1,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.51590156555176, 15.30397215519861]),
            {
              "class": 1,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53178024291992, 15.320777253087304]),
            {
              "class": 1,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5183048248291, 15.224315883810291]),
            {
              "class": 1,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.50860595703125, 15.204521338846535]),
            {
              "class": 1,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53006362915039, 15.17693839303277]),
            {
              "class": 1,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81137371063232, 15.049745296240465]),
            {
              "class": 1,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80553722381592, 15.06640488355932]),
            {
              "class": 1,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76279354095459, 15.070838932167968]),
            {
              "class": 1,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.75051975250244, 15.078173557385929]),
            {
              "class": 1,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74858856201172, 15.084762072844452]),
            {
              "class": 1,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7189769744873, 15.09246913365217]),
            {
              "class": 1,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72365474700928, 15.075397203575507]),
            {
              "class": 1,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71490001678467, 15.098062793023141]),
            {
              "class": 1,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69760513305664, 15.09814566094352]),
            {
              "class": 1,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.70532989501953, 15.083270351375374]),
            {
              "class": 1,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68138313293457, 15.102537614448684]),
            {
              "class": 1,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68288516998291, 15.112895635495345]),
            {
              "class": 1,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67717742919922, 15.119441644032811]),
            {
              "class": 1,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66374492645264, 15.141481148770373]),
            {
              "class": 1,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67365837097168, 15.153245659753429]),
            {
              "class": 1,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66666316986084, 15.163766886566302]),
            {
              "class": 1,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65147113800049, 15.170601261267931]),
            {
              "class": 1,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65138530731201, 15.17876080095769]),
            {
              "class": 1,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8302993774414, 15.034410694036346]),
            {
              "class": 1,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.84600639343262, 15.040130215172933]),
            {
              "class": 1,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83090019226074, 15.048170441975753]),
            {
              "class": 1,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.84995460510254, 15.047590229576105]),
            {
              "class": 1,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.85132789611816, 15.012608794613437]),
            {
              "class": 1,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.85613441467285, 15.016173515956234]),
            {
              "class": 1,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.86682033538818, 15.038265170786389]),
            {
              "class": 1,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.82635116577148, 15.025831124804009]),
            {
              "class": 1,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81420612335205, 15.060230213399429]),
            {
              "class": 1,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81214618682861, 15.078919437307889]),
            {
              "class": 1,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79631042480469, 15.092261958254243]),
            {
              "class": 1,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79978656768799, 15.106473721995238]),
            {
              "class": 1,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78493785858154, 15.104774989795676]),
            {
              "class": 1,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7845516204834, 15.114801456294806]),
            {
              "class": 1,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78888607025146, 15.129550272884572]),
            {
              "class": 1,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77523899078369, 15.152500041144798]),
            {
              "class": 1,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78270626068115, 15.154239813810593]),
            {
              "class": 1,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77171993255615, 15.17084977981997]),
            {
              "class": 1,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7801742553711, 15.171471074921287]),
            {
              "class": 1,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76669883728027, 15.181908559423677]),
            {
              "class": 1,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90900611877441, 14.626939290074667]),
            {
              "class": 1,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.88360023498535, 14.666550068264359]),
            {
              "class": 1,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90514373779297, 14.619215600704562]),
            {
              "class": 1,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.89098167419434, 14.63034427113808]),
            {
              "class": 1,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.880295753479, 14.651520406039264]),
            {
              "class": 1,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.88621807098389, 14.672320852312845]),
            {
              "class": 1,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90784740447998, 14.66829377444931]),
            {
              "class": 1,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.890380859375, 14.684235586749255]),
            {
              "class": 1,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.88763427734375, 14.691956984320456]),
            {
              "class": 1,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.88531684875488, 14.700176236779368]),
            {
              "class": 1,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.88797760009766, 14.709349885580119]),
            {
              "class": 1,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.89158248901367, 14.713459223130478]),
            {
              "class": 1,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90162467956543, 14.703455549168769]),
            {
              "class": 1,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90480041503906, 14.68925867746426]),
            {
              "class": 1,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.87179851531982, 14.688843550375669]),
            {
              "class": 1,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7651538848877, 14.739856757275822]),
            {
              "class": 1,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79382133483887, 14.733216169164969]),
            {
              "class": 1,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7050724029541, 14.69976113043405]),
            {
              "class": 1,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77425193786621, 14.714870492921202]),
            {
              "class": 1,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80043029785156, 14.712047944211488]),
            {
              "class": 1,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64636421203613, 14.720515480785409]),
            {
              "class": 1,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62499237060547, 14.699179980225109]),
            {
              "class": 1,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6292839050293, 14.682990174502653]),
            {
              "class": 1,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.57452392578125, 14.677012096988694]),
            {
              "class": 1,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59932899475098, 14.657997403502975]),
            {
              "class": 1,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.60928535461426, 14.618634236749116]),
            {
              "class": 1,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.54516983032227, 14.574778353134553]),
            {
              "class": 1,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.51688861846924, 13.924070367439622]),
            {
              "class": 1,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5142707824707, 13.910865578111409]),
            {
              "class": 1,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4879207611084, 13.92981858895628]),
            {
              "class": 1,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.51495742797852, 13.935899884994763]),
            {
              "class": 1,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52251052856445, 13.944563372576752]),
            {
              "class": 1,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48628997802734, 13.96097312559157]),
            {
              "class": 1,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53426933288574, 13.932984215095585]),
            {
              "class": 1,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5263729095459, 13.917780482981094]),
            {
              "class": 1,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46311569213867, 13.919738279932062]),
            {
              "class": 1,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42363357543945, 13.935941537155184]),
            {
              "class": 1,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46787929534912, 13.951602216751107]),
            {
              "class": 1,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46131324768066, 13.960181819125802]),
            {
              "class": 1,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49358558654785, 13.973633659448483]),
            {
              "class": 1,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48251342773438, 13.987834285167521]),
            {
              "class": 1,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.02314758300781, 14.453298590545614]),
            {
              "class": 1,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.99671173095703, 14.49435324359123]),
            {
              "class": 1,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.02520751953125, 14.500003896482287]),
            {
              "class": 1,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.00718307495117, 14.519613867554593]),
            {
              "class": 1,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.01198959350586, 14.539055936412868]),
            {
              "class": 1,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.97079086303711, 14.459116513125675]),
            {
              "class": 1,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.98280715942383, 14.421047917195876]),
            {
              "class": 1,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.01490783691406, 14.425536692859614]),
            {
              "class": 1,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.98812866210938, 14.471084331948642]),
            {
              "class": 1,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.70317077636719, 15.236158592148728]),
            {
              "class": 1,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.6983642578125, 15.269281506966204]),
            {
              "class": 1,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.68360137939453, 15.233508533482118]),
            {
              "class": 1,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.60704040527344, 15.26563824199162]),
            {
              "class": 1,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.58472442626953, 15.291470936516578]),
            {
              "class": 1,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.56412506103516, 15.32392288496476]),
            {
              "class": 1,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.54558563232422, 15.325661240174517]),
            {
              "class": 1,
              "system:index": "657"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.62789726257324, 15.269198706191775]),
            {
              "class": 1,
              "system:index": "658"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.74256706237793, 15.205018295784923]),
            {
              "class": 1,
              "system:index": "659"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.73879051208496, 15.18058319315698]),
            {
              "class": 1,
              "system:index": "660"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.76093482971191, 15.133278743782709]),
            {
              "class": 1,
              "system:index": "661"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.80333518981934, 15.14346956274138]),
            {
              "class": 1,
              "system:index": "662"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.80118942260742, 15.168654522498782]),
            {
              "class": 1,
              "system:index": "663"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.77835845947266, 15.177518251805461]),
            {
              "class": 1,
              "system:index": "664"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.12364196777344, 14.67535149090558]),
            {
              "class": 1,
              "system:index": "665"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.07600593566895, 14.660322432807366]),
            {
              "class": 1,
              "system:index": "666"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04124450683594, 14.661900117207509]),
            {
              "class": 1,
              "system:index": "667"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.16389656066895, 14.673192684154046]),
            {
              "class": 1,
              "system:index": "668"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.13711738586426, 14.685730072081153]),
            {
              "class": 1,
              "system:index": "669"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.1603775024414, 14.711300792853228]),
            {
              "class": 1,
              "system:index": "670"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18475341796875, 14.719104247515759]),
            {
              "class": 1,
              "system:index": "671"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.18209266662598, 14.743176975406913]),
            {
              "class": 1,
              "system:index": "672"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.12132453918457, 14.654343736166062]),
            {
              "class": 1,
              "system:index": "673"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.07883834838867, 14.639396280953365]),
            {
              "class": 1,
              "system:index": "674"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2475814819336, 15.153494198705685]),
            {
              "class": 1,
              "system:index": "675"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19728469848633, 15.15067740681745]),
            {
              "class": 1,
              "system:index": "676"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2256088256836, 15.106763748085251]),
            {
              "class": 1,
              "system:index": "677"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.19213485717773, 15.115547207599068]),
            {
              "class": 1,
              "system:index": "678"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.25187301635742, 15.118198746557454]),
            {
              "class": 1,
              "system:index": "679"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.22921371459961, 15.08571511163605]),
            {
              "class": 1,
              "system:index": "680"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23633766174316, 15.07063173569262]),
            {
              "class": 1,
              "system:index": "681"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.20440864562988, 15.094499441860384]),
            {
              "class": 1,
              "system:index": "682"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.14982032775879, 15.113227083820759]),
            {
              "class": 1,
              "system:index": "683"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.10063934326172, 15.1447123119898]),
            {
              "class": 1,
              "system:index": "684"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.11883544921875, 15.144629462266877]),
            {
              "class": 1,
              "system:index": "685"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.07008361816406, 15.14380096325428]),
            {
              "class": 1,
              "system:index": "686"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23702430725098, 15.173459206968959]),
            {
              "class": 1,
              "system:index": "687"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.21307754516602, 15.198971906797142]),
            {
              "class": 1,
              "system:index": "688"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.28320121765137, 15.186795775627285]),
            {
              "class": 1,
              "system:index": "689"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23487854003906, 15.276733442877354]),
            {
              "class": 1,
              "system:index": "690"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.25135803222656, 15.264147797186595]),
            {
              "class": 1,
              "system:index": "691"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.70856475830078, 15.391459757417053]),
            {
              "class": 1,
              "system:index": "692"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.77104949951172, 15.37656379817986]),
            {
              "class": 1,
              "system:index": "693"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.77997589111328, 15.409664482038764]),
            {
              "class": 1,
              "system:index": "694"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.88674926757812, 15.401058810789921]),
            {
              "class": 1,
              "system:index": "695"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.86614990234375, 15.43216993750303]),
            {
              "class": 1,
              "system:index": "696"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.74186706542969, 15.428198563749978]),
            {
              "class": 1,
              "system:index": "697"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.68830871582031, 15.43316276906903]),
            {
              "class": 1,
              "system:index": "698"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.67285919189453, 15.394107816371394]),
            {
              "class": 1,
              "system:index": "699"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.61312103271484, 15.427205708440832]),
            {
              "class": 1,
              "system:index": "700"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.57552719116211, 15.447392832801793]),
            {
              "class": 1,
              "system:index": "701"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.63578033447266, 15.467743435893045]),
            {
              "class": 1,
              "system:index": "702"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.60900115966797, 15.487099470647943]),
            {
              "class": 1,
              "system:index": "703"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.51407241821289, 15.459471074133335]),
            {
              "class": 1,
              "system:index": "704"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.46944046020508, 15.477008088699824]),
            {
              "class": 1,
              "system:index": "705"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.4444637298584, 15.441767110328934]),
            {
              "class": 1,
              "system:index": "706"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.40789985656738, 15.454011134407379]),
            {
              "class": 1,
              "system:index": "707"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.45072937011719, 15.46137374659454]),
            {
              "class": 1,
              "system:index": "708"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.42240524291992, 15.475188278913231]),
            {
              "class": 1,
              "system:index": "709"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.41819953918457, 15.498100170228016]),
            {
              "class": 1,
              "system:index": "710"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.37356758117676, 15.48337729690792]),
            {
              "class": 1,
              "system:index": "711"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.36850357055664, 15.452687490991151]),
            {
              "class": 1,
              "system:index": "712"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.33176803588867, 15.482467422027025]),
            {
              "class": 1,
              "system:index": "713"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.3045597076416, 15.489498169335432]),
            {
              "class": 1,
              "system:index": "714"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.27872467041016, 15.489415456050848]),
            {
              "class": 1,
              "system:index": "715"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.25391960144043, 15.50719805072601]),
            {
              "class": 1,
              "system:index": "716"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.24542236328125, 15.49636325658734]),
            {
              "class": 1,
              "system:index": "717"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.24336242675781, 15.48850560773635]),
            {
              "class": 1,
              "system:index": "718"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.28052711486816, 15.472127653639042]),
            {
              "class": 1,
              "system:index": "719"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.46188735961914, 15.65287477987521]),
            {
              "class": 1,
              "system:index": "720"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.46377563476562, 15.669734188940364]),
            {
              "class": 1,
              "system:index": "721"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.44137382507324, 15.661552590599067]),
            {
              "class": 1,
              "system:index": "722"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.50806427001953, 15.667750801248008]),
            {
              "class": 1,
              "system:index": "723"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.49081230163574, 15.687831711654036]),
            {
              "class": 1,
              "system:index": "724"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.52325630187988, 15.67403146286629]),
            {
              "class": 1,
              "system:index": "725"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.49905204772949, 15.70072211875075]),
            {
              "class": 1,
              "system:index": "726"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.44969940185547, 15.710472013419993]),
            {
              "class": 1,
              "system:index": "727"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.42704010009766, 15.7118766208099]),
            {
              "class": 1,
              "system:index": "728"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.48119926452637, 15.747814747915047]),
            {
              "class": 1,
              "system:index": "729"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.49270057678223, 15.775156513913762]),
            {
              "class": 1,
              "system:index": "730"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.45853996276855, 15.772678560027073]),
            {
              "class": 1,
              "system:index": "731"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.51467323303223, 15.773008955627688]),
            {
              "class": 1,
              "system:index": "732"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.52437210083008, 15.774991317929812]),
            {
              "class": 1,
              "system:index": "733"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.51415824890137, 15.793657612356295]),
            {
              "class": 1,
              "system:index": "734"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.48832321166992, 15.79679602397548]),
            {
              "class": 1,
              "system:index": "735"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.57938957214355, 15.790353968646778]),
            {
              "class": 1,
              "system:index": "736"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.55715942382812, 15.779699350739106]),
            {
              "class": 1,
              "system:index": "737"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.61200523376465, 15.790849518637565]),
            {
              "class": 1,
              "system:index": "738"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.42463684082031, 15.762518632658871]),
            {
              "class": 1,
              "system:index": "739"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.40266418457031, 15.767226954929951]),
            {
              "class": 1,
              "system:index": "740"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.31983757019043, 15.793327250409712]),
            {
              "class": 1,
              "system:index": "741"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.27812385559082, 15.81199185535575]),
            {
              "class": 1,
              "system:index": "742"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.25537872314453, 15.835856916601797]),
            {
              "class": 1,
              "system:index": "743"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.2661075592041, 15.823222823355039]),
            {
              "class": 1,
              "system:index": "744"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.42128944396973, 15.644775157587434]),
            {
              "class": 1,
              "system:index": "745"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.40077590942383, 15.651883006624734]),
            {
              "class": 1,
              "system:index": "746"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.41897201538086, 15.627417744503816]),
            {
              "class": 1,
              "system:index": "747"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.39287948608398, 15.62006106363044]),
            {
              "class": 1,
              "system:index": "748"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.51535987854004, 15.637997676194665]),
            {
              "class": 1,
              "system:index": "749"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.51681900024414, 15.628161663816698]),
            {
              "class": 1,
              "system:index": "750"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.56282424926758, 15.645188411386734]),
            {
              "class": 1,
              "system:index": "751"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.55261039733887, 15.66031292590783]),
            {
              "class": 1,
              "system:index": "752"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.56333923339844, 15.652957427428948]),
            {
              "class": 1,
              "system:index": "753"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.52531623840332, 15.658494737426048]),
            {
              "class": 1,
              "system:index": "754"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.66539192199707, 15.669982111047766]),
            {
              "class": 1,
              "system:index": "755"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.65183067321777, 15.675684236450843]),
            {
              "class": 1,
              "system:index": "756"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.6385269165039, 15.682460468253078]),
            {
              "class": 1,
              "system:index": "757"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.66007041931152, 15.64816381409883]),
            {
              "class": 1,
              "system:index": "758"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.66942596435547, 15.657998865033145]),
            {
              "class": 1,
              "system:index": "759"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.68933868408203, 15.651221821785535]),
            {
              "class": 1,
              "system:index": "760"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.71483039855957, 15.646841418236296]),
            {
              "class": 1,
              "system:index": "761"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.69963836669922, 15.634939470864143]),
            {
              "class": 1,
              "system:index": "762"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.93464279174805, 15.711463501994846]),
            {
              "class": 1,
              "system:index": "763"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.90099716186523, 15.72947470389864]),
            {
              "class": 1,
              "system:index": "764"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.86769485473633, 15.714768429051942]),
            {
              "class": 1,
              "system:index": "765"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.87250137329102, 15.73806664220694]),
            {
              "class": 1,
              "system:index": "766"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.97223663330078, 15.706671262509913]),
            {
              "class": 1,
              "system:index": "767"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.98408126831055, 15.732944568832346]),
            {
              "class": 1,
              "system:index": "768"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.98562622070312, 15.682708374906904]),
            {
              "class": 1,
              "system:index": "769"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.96047782897949, 15.731374875360721]),
            {
              "class": 1,
              "system:index": "770"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.93704605102539, 15.74244508650503]),
            {
              "class": 1,
              "system:index": "771"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.86966896057129, 15.751449515101191]),
            {
              "class": 1,
              "system:index": "772"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8183422088623, 15.76730955610007]),
            {
              "class": 1,
              "system:index": "773"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.16905975341797, 15.342464595142463]),
            {
              "class": 1,
              "system:index": "774"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.14090728759766, 15.370274073324051]),
            {
              "class": 1,
              "system:index": "775"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.15773010253906, 15.33501499860269]),
            {
              "class": 1,
              "system:index": "776"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.11532974243164, 15.339981425816811]),
            {
              "class": 1,
              "system:index": "777"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.15240859985352, 15.313161316831444]),
            {
              "class": 1,
              "system:index": "778"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.19360733032227, 15.337663774477033]),
            {
              "class": 1,
              "system:index": "779"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.12442779541016, 15.32673735758499]),
            {
              "class": 1,
              "system:index": "780"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.21789741516113, 15.368205043394076]),
            {
              "class": 1,
              "system:index": "781"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.19206237792969, 15.385418746839095]),
            {
              "class": 1,
              "system:index": "782"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.15446853637695, 15.391542509769382]),
            {
              "class": 1,
              "system:index": "783"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.10357093811035, 15.40900251997285]),
            {
              "class": 1,
              "system:index": "784"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0499267578125, 15.41975914230515]),
            {
              "class": 1,
              "system:index": "785"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.15309524536133, 15.401555301503835]),
            {
              "class": 1,
              "system:index": "786"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.92039489746094, 14.093457695363876]),
            {
              "class": 1,
              "system:index": "787"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91232681274414, 14.137907350265587]),
            {
              "class": 1,
              "system:index": "788"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.92245483398438, 14.17452600940114]),
            {
              "class": 1,
              "system:index": "789"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.93172454833984, 14.20265178456351]),
            {
              "class": 1,
              "system:index": "790"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.86683654785156, 14.107775759251727]),
            {
              "class": 1,
              "system:index": "791"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.86700820922852, 14.071479384819927]),
            {
              "class": 1,
              "system:index": "792"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91061019897461, 14.059989881195879]),
            {
              "class": 1,
              "system:index": "793"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8553352355957, 14.102947675361296]),
            {
              "class": 1,
              "system:index": "794"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.93395614624023, 14.116599234560233]),
            {
              "class": 1,
              "system:index": "795"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.64281845092773, 14.076058373899315]),
            {
              "class": 1,
              "system:index": "796"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.66290283203125, 14.092208984400342]),
            {
              "class": 1,
              "system:index": "797"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.67268753051758, 14.101699016338548]),
            {
              "class": 1,
              "system:index": "798"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.66101455688477, 14.078056449471598]),
            {
              "class": 1,
              "system:index": "799"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.64084434509277, 14.088712557358352]),
            {
              "class": 1,
              "system:index": "800"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.57904624938965, 14.019772077162502]),
            {
              "class": 1,
              "system:index": "801"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.57827377319336, 13.99603776623375]),
            {
              "class": 1,
              "system:index": "802"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.59337997436523, 13.979463934391811]),
            {
              "class": 1,
              "system:index": "803"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.58256530761719, 13.965554320109494]),
            {
              "class": 1,
              "system:index": "804"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.55887603759766, 13.966220668133674]),
            {
              "class": 1,
              "system:index": "805"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.62745475769043, 13.981629427472274]),
            {
              "class": 1,
              "system:index": "806"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.65277481079102, 13.974716435959717]),
            {
              "class": 1,
              "system:index": "807"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.65680885314941, 14.00486555079568]),
            {
              "class": 1,
              "system:index": "808"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.65483474731445, 14.026017540635412]),
            {
              "class": 1,
              "system:index": "809"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.6520881652832, 14.03484417230123]),
            {
              "class": 1,
              "system:index": "810"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.68161392211914, 13.961472896696444]),
            {
              "class": 1,
              "system:index": "811"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.55921936035156, 13.932317771092851]),
            {
              "class": 1,
              "system:index": "812"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.53389930725098, 13.935150144822492]),
            {
              "class": 1,
              "system:index": "813"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.55037879943848, 13.911657053603822]),
            {
              "class": 1,
              "system:index": "814"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.50162696838379, 13.969302502488668]),
            {
              "class": 1,
              "system:index": "815"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.49879455566406, 13.974216693587273]),
            {
              "class": 1,
              "system:index": "816"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.54874801635742, 13.9375659655505]),
            {
              "class": 1,
              "system:index": "817"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.54522895812988, 13.915656046259041]),
            {
              "class": 1,
              "system:index": "818"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.56376838684082, 13.873079890006538]),
            {
              "class": 1,
              "system:index": "819"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.57964706420898, 13.879995923119173]),
            {
              "class": 1,
              "system:index": "820"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.56685829162598, 13.862663788430305]),
            {
              "class": 1,
              "system:index": "821"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.58565521240234, 13.846163727258887]),
            {
              "class": 1,
              "system:index": "822"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.54660224914551, 13.888411540590027]),
            {
              "class": 1,
              "system:index": "823"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.56582832336426, 13.899076438463684]),
            {
              "class": 1,
              "system:index": "824"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.04955673217773, 14.00486555079568]),
            {
              "class": 1,
              "system:index": "825"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.06243133544922, 14.035343782799211]),
            {
              "class": 1,
              "system:index": "826"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.05127334594727, 14.05316251150249]),
            {
              "class": 1,
              "system:index": "827"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.0504150390625, 14.04317087172903]),
            {
              "class": 1,
              "system:index": "828"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.02792739868164, 14.072145425296506]),
            {
              "class": 1,
              "system:index": "829"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.01299285888672, 14.06398629575337]),
            {
              "class": 1,
              "system:index": "830"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.06534957885742, 14.056159918401976]),
            {
              "class": 1,
              "system:index": "831"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.0782241821289, 14.009196038076908]),
            {
              "class": 1,
              "system:index": "832"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.01264953613281, 14.040173294794089]),
            {
              "class": 1,
              "system:index": "833"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.05487823486328, 13.985377348106784]),
            {
              "class": 1,
              "system:index": "834"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.74365615844727, 14.461111194375128]),
            {
              "class": 1,
              "system:index": "835"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.83343505859375, 14.448477910765853]),
            {
              "class": 1,
              "system:index": "836"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.73507308959961, 14.48222047278148]),
            {
              "class": 1,
              "system:index": "837"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.71807861328125, 14.50814723094149]),
            {
              "class": 1,
              "system:index": "838"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.83635330200195, 14.470419470044959]),
            {
              "class": 1,
              "system:index": "839"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.79961776733398, 14.493688451425582]),
            {
              "class": 1,
              "system:index": "840"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.85763931274414, 14.402426845420448]),
            {
              "class": 1,
              "system:index": "841"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8827018737793, 14.366676684046178]),
            {
              "class": 1,
              "system:index": "842"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84854125976562, 14.373993461634138]),
            {
              "class": 1,
              "system:index": "843"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.92390060424805, 14.321773039944562]),
            {
              "class": 1,
              "system:index": "844"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.87806701660156, 14.314953551894586]),
            {
              "class": 1,
              "system:index": "845"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.92767715454102, 14.355202164565393]),
            {
              "class": 1,
              "system:index": "846"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.72237014770508, 14.50199821015505]),
            {
              "class": 1,
              "system:index": "847"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.78502655029297, 14.507150104034165]),
            {
              "class": 1,
              "system:index": "848"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.89179992675781, 14.610411924648533]),
            {
              "class": 1,
              "system:index": "849"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.87042808532715, 14.61605960645249]),
            {
              "class": 1,
              "system:index": "850"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.87120056152344, 14.631340840969457]),
            {
              "class": 1,
              "system:index": "851"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.90673446655273, 14.5962090247901]),
            {
              "class": 1,
              "system:index": "852"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.89600563049316, 14.60036201037457]),
            {
              "class": 1,
              "system:index": "853"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.85197448730469, 14.655838425623237]),
            {
              "class": 1,
              "system:index": "854"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8555793762207, 14.683073202206439]),
            {
              "class": 1,
              "system:index": "855"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84253311157227, 14.705489528308618]),
            {
              "class": 1,
              "system:index": "856"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.85875511169434, 14.71653079863426]),
            {
              "class": 1,
              "system:index": "857"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.89360237121582, 14.73114094386949]),
            {
              "class": 1,
              "system:index": "858"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8845043182373, 14.743924017509316]),
            {
              "class": 1,
              "system:index": "859"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.87326049804688, 14.761188276129994]),
            {
              "class": 1,
              "system:index": "860"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.80777168273926, 14.800359776870991]),
            {
              "class": 1,
              "system:index": "861"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8182430267334, 14.787165081849789]),
            {
              "class": 1,
              "system:index": "862"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.8625316619873, 14.818698239544428]),
            {
              "class": 1,
              "system:index": "863"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.81583976745605, 14.842179161842662]),
            {
              "class": 1,
              "system:index": "864"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.7618522644043, 14.87519748632505]),
            {
              "class": 1,
              "system:index": "865"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.06740951538086, 14.990555941040997]),
            {
              "class": 1,
              "system:index": "866"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.06740951538086, 15.007303052705625]),
            {
              "class": 1,
              "system:index": "867"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.04904174804688, 14.995033020113828]),
            {
              "class": 1,
              "system:index": "868"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.03548049926758, 15.028027858958477]),
            {
              "class": 1,
              "system:index": "869"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.09762191772461, 15.018080202951676]),
            {
              "class": 1,
              "system:index": "870"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.0588264465332, 15.012608794613437]),
            {
              "class": 1,
              "system:index": "871"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.3718376159668, 14.86806330113576]),
            {
              "class": 1,
              "system:index": "872"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.32514572143555, 14.885068818553284]),
            {
              "class": 1,
              "system:index": "873"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.27484893798828, 14.890626428575223]),
            {
              "class": 1,
              "system:index": "874"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5494213104248, 14.721262600584017]),
            {
              "class": 1,
              "system:index": "875"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.56572914123535, 14.725413219517119]),
            {
              "class": 1,
              "system:index": "876"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.47698020935059, 14.721262600584017]),
            {
              "class": 1,
              "system:index": "877"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.58795928955078, 14.67061869442178]),
            {
              "class": 1,
              "system:index": "878"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.46549224853516, 14.595378417465666]),
            {
              "class": 1,
              "system:index": "879"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.43013000488281, 14.606342181618436]),
            {
              "class": 1,
              "system:index": "880"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.41656875610352, 14.612322186208402]),
            {
              "class": 1,
              "system:index": "881"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.4847183227539, 14.595046173657954]),
            {
              "class": 1,
              "system:index": "882"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.53484344482422, 14.593717193410573]),
            {
              "class": 1,
              "system:index": "883"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.55166625976562, 14.548028622070289]),
            {
              "class": 1,
              "system:index": "884"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.57999038696289, 14.555505581583732]),
            {
              "class": 1,
              "system:index": "885"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.55252456665039, 14.612986621119843]),
            {
              "class": 1,
              "system:index": "886"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.4433479309082, 14.62544440365672]),
            {
              "class": 1,
              "system:index": "887"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.24140167236328, 14.910781930527019]),
            {
              "class": 1,
              "system:index": "888"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.2713565826416, 14.924632559715446]),
            {
              "class": 1,
              "system:index": "889"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.27667808532715, 14.888552710253803]),
            {
              "class": 1,
              "system:index": "890"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.23075866699219, 14.897096301458197]),
            {
              "class": 1,
              "system:index": "891"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.28302955627441, 14.932511261989914]),
            {
              "class": 1,
              "system:index": "892"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.29461669921875, 14.951833592427018]),
            {
              "class": 1,
              "system:index": "893"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.31993675231934, 14.95398962442742]),
            {
              "class": 1,
              "system:index": "894"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.93231201171875, 15.717247089146019]),
            {
              "class": 1,
              "system:index": "895"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.82313537597656, 15.818020320130085]),
            {
              "class": 1,
              "system:index": "896"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.09264373779297, 15.612456127149061]),
            {
              "class": 1,
              "system:index": "897"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.19255065917969, 15.533414245547576]),
            {
              "class": 1,
              "system:index": "898"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.3741683959961, 15.541518262309044]),
            {
              "class": 1,
              "system:index": "899"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.43854141235352, 15.565084254144818]),
            {
              "class": 1,
              "system:index": "900"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.4517593383789, 15.57260826556706]),
            {
              "class": 1,
              "system:index": "901"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.47733688354492, 15.59112773574096]),
            {
              "class": 1,
              "system:index": "902"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.48849487304688, 15.546810509366807]),
            {
              "class": 1,
              "system:index": "903"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.3774299621582, 15.567895455459803]),
            {
              "class": 1,
              "system:index": "904"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.32567405700684, 15.626839138725861]),
            {
              "class": 1,
              "system:index": "905"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.28619194030762, 15.63394761067546]),
            {
              "class": 1,
              "system:index": "906"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.31022453308105, 15.676014789562274]),
            {
              "class": 1,
              "system:index": "907"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.29949569702148, 15.674940489993402]),
            {
              "class": 1,
              "system:index": "908"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.24842643737793, 15.685931133999755]),
            {
              "class": 1,
              "system:index": "909"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.20107705078125, 15.700887375089085]),
            {
              "class": 1,
              "system:index": "910"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.26387596130371, 15.764418495141259]),
            {
              "class": 1,
              "system:index": "911"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.30430221557617, 15.73864493270782]),
            {
              "class": 1,
              "system:index": "912"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.35228157043457, 15.712868102547235]),
            {
              "class": 1,
              "system:index": "913"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.39699935913086, 15.712785479253482]),
            {
              "class": 1,
              "system:index": "914"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.85649394989014, 14.978886077108713]),
            {
              "class": 1,
              "system:index": "915"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.83716058731079, 14.98487654854354]),
            {
              "class": 1,
              "system:index": "916"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8325686454773, 14.997810420220839]),
            {
              "class": 1,
              "system:index": "917"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8394136428833, 15.005935144761143]),
            {
              "class": 1,
              "system:index": "918"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.81907176971436, 15.005790063102015]),
            {
              "class": 1,
              "system:index": "919"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.8972635269165, 14.99710571017548]),
            {
              "class": 1,
              "system:index": "920"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.88983917236328, 15.002577515419505]),
            {
              "class": 1,
              "system:index": "921"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.88215732574463, 15.008049180621592]),
            {
              "class": 1,
              "system:index": "922"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.72384262084961, 14.893280758904883]),
            {
              "class": 1,
              "system:index": "923"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.7200231552124, 14.890792325178822]),
            {
              "class": 1,
              "system:index": "924"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.7017412185669, 14.891912123912203]),
            {
              "class": 1,
              "system:index": "925"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.74924850463867, 14.904478354915577]),
            {
              "class": 1,
              "system:index": "926"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.72345638275146, 14.908418111309052]),
            {
              "class": 1,
              "system:index": "927"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.70083999633789, 14.914928919041918]),
            {
              "class": 1,
              "system:index": "928"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.71607494354248, 14.930935544643928]),
            {
              "class": 1,
              "system:index": "929"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.74834728240967, 14.921688338950156]),
            {
              "class": 1,
              "system:index": "930"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.76667213439941, 14.911984565425675]),
            {
              "class": 1,
              "system:index": "931"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.92962169647217, 14.808118546616203]),
            {
              "class": 1,
              "system:index": "932"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.91086769104004, 14.809031324799243]),
            {
              "class": 1,
              "system:index": "933"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.86091423034668, 14.812557931656032]),
            {
              "class": 1,
              "system:index": "934"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.86726570129395, 14.834960916365842]),
            {
              "class": 1,
              "system:index": "935"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.96863174438477, 14.823593765698785]),
            {
              "class": 1,
              "system:index": "936"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.96142196655273, 14.833052604312757]),
            {
              "class": 1,
              "system:index": "937"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.01980829238892, 14.811064316935052]),
            {
              "class": 1,
              "system:index": "938"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.00161218643188, 14.816955737427215]),
            {
              "class": 1,
              "system:index": "939"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.00453042984009, 14.825460674483494]),
            {
              "class": 1,
              "system:index": "940"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.015860080719, 14.832762207524667]),
            {
              "class": 1,
              "system:index": "941"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.02264070510864, 14.827057905885646]),
            {
              "class": 1,
              "system:index": "942"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.03309059143066, 14.834359385035471]),
            {
              "class": 1,
              "system:index": "943"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04148054122925, 14.835168340574683]),
            {
              "class": 1,
              "system:index": "944"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04785346984863, 14.867814429952979]),
            {
              "class": 1,
              "system:index": "945"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04980611801147, 14.912108975548769]),
            {
              "class": 1,
              "system:index": "946"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04197406768799, 14.915302144087178]),
            {
              "class": 1,
              "system:index": "947"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04205989837646, 14.921854211614367]),
            {
              "class": 1,
              "system:index": "948"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.04025745391846, 14.899398036290066]),
            {
              "class": 1,
              "system:index": "949"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.07014799118042, 14.873725043004102]),
            {
              "class": 1,
              "system:index": "950"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.07907438278198, 14.87710542610089]),
            {
              "class": 1,
              "system:index": "951"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.08516836166382, 14.872252589633124]),
            {
              "class": 1,
              "system:index": "952"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.9437837600708, 14.723026623284872]),
            {
              "class": 1,
              "system:index": "953"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.95549964904785, 14.723088882648883]),
            {
              "class": 1,
              "system:index": "954"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.95610046386719, 14.715327078251933]),
            {
              "class": 1,
              "system:index": "955"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.96644306182861, 14.711466826709476]),
            {
              "class": 1,
              "system:index": "956"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.96760177612305, 14.724085030055234]),
            {
              "class": 1,
              "system:index": "957"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.90550327301025, 14.730974924992076]),
            {
              "class": 1,
              "system:index": "958"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.9047737121582, 14.722051224261158]),
            {
              "class": 1,
              "system:index": "959"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.82744026184082, 14.566471330573227]),
            {
              "class": 1,
              "system:index": "960"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.81731224060059, 14.569046541048065]),
            {
              "class": 1,
              "system:index": "961"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.79104804992676, 14.57677199195973]),
            {
              "class": 1,
              "system:index": "962"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.87602043151855, 14.547696306880471]),
            {
              "class": 1,
              "system:index": "963"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.83370590209961, 14.530498313350535]),
            {
              "class": 1,
              "system:index": "964"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.84992790222168, 14.569461894759117]),
            {
              "class": 1,
              "system:index": "965"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.82151794433594, 14.557000943089454]),
            {
              "class": 1,
              "system:index": "966"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.88898086547852, 14.497635625678768]),
            {
              "class": 1,
              "system:index": "967"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.94502830505371, 14.516622628323898]),
            {
              "class": 1,
              "system:index": "968"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.56196594238281, 14.713459223130478]),
            {
              "class": 1,
              "system:index": "969"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.53990745544434, 14.727197961364011]),
            {
              "class": 1,
              "system:index": "970"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.5667724609375, 14.72259080723904]),
            {
              "class": 1,
              "system:index": "971"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.56896114349365, 14.703497059136536]),
            {
              "class": 1,
              "system:index": "972"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.55608654022217, 14.702583838022687]),
            {
              "class": 1,
              "system:index": "973"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.44493579864502, 15.080908437643021]),
            {
              "class": 1,
              "system:index": "974"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.45961284637451, 15.07858793544332]),
            {
              "class": 1,
              "system:index": "975"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.41008853912354, 15.08737256022605]),
            {
              "class": 1,
              "system:index": "976"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.41369342803955, 15.0985600000604]),
            {
              "class": 1,
              "system:index": "977"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.4005184173584, 15.09267630884808]),
            {
              "class": 1,
              "system:index": "978"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.38330936431885, 15.115340054721987]),
            {
              "class": 1,
              "system:index": "979"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.11358642578125, 15.821901565375878]),
            {
              "class": 1,
              "system:index": "980"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.04535102844238, 15.833792576273014]),
            {
              "class": 1,
              "system:index": "981"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.9801197052002, 15.837343228575598]),
            {
              "class": 1,
              "system:index": "982"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.91909408569336, 15.852288313089892]),
            {
              "class": 1,
              "system:index": "983"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.01264953613281, 15.853361674356904]),
            {
              "class": 1,
              "system:index": "984"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.03487968444824, 15.811661523327041]),
            {
              "class": 1,
              "system:index": "985"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.04792594909668, 15.746906045958104]),
            {
              "class": 1,
              "system:index": "986"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.95934867858887, 15.766979151217882]),
            {
              "class": 1,
              "system:index": "987"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.89360237121582, 15.79464869496329]),
            {
              "class": 1,
              "system:index": "988"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.84296226501465, 15.782920573359297]),
            {
              "class": 1,
              "system:index": "989"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.85540771484375, 15.74591473009765]),
            {
              "class": 1,
              "system:index": "990"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.90544700622559, 15.728318069101372]),
            {
              "class": 1,
              "system:index": "991"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.79352378845215, 15.764170687999892]),
            {
              "class": 1,
              "system:index": "992"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.80880165100098, 15.778955984404728]),
            {
              "class": 1,
              "system:index": "993"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.78923225402832, 15.818185481019794]),
            {
              "class": 1,
              "system:index": "994"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.74520111083984, 15.82223188068016]),
            {
              "class": 1,
              "system:index": "995"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.72580337524414, 15.829911559350538]),
            {
              "class": 1,
              "system:index": "996"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.65070152282715, 15.875570713898137]),
            {
              "class": 1,
              "system:index": "997"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.71610450744629, 15.846591146177087]),
            {
              "class": 1,
              "system:index": "998"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.74151039123535, 15.925181317511381]),
            {
              "class": 1,
              "system:index": "999"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.70640563964844, 15.941687954075599]),
            {
              "class": 1,
              "system:index": "1000"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.57336807250977, 15.874167241081153]),
            {
              "class": 1,
              "system:index": "1001"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.54684638977051, 15.877552070642022]),
            {
              "class": 1,
              "system:index": "1002"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.57723045349121, 15.676180065917302]),
            {
              "class": 1,
              "system:index": "1003"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.50024032592773, 15.67386618477202]),
            {
              "class": 1,
              "system:index": "1004"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.60718536376953, 15.662131098214914]),
            {
              "class": 1,
              "system:index": "1005"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5508804321289, 15.710141516155883]),
            {
              "class": 1,
              "system:index": "1006"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.53165435791016, 15.782672788821076]),
            {
              "class": 1,
              "system:index": "1007"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.5710506439209, 15.793575021920164]),
            {
              "class": 1,
              "system:index": "1008"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.61439514160156, 15.771687369996398]),
            {
              "class": 1,
              "system:index": "1009"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.63276290893555, 15.777386646526903]),
            {
              "class": 1,
              "system:index": "1010"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.65816879272461, 15.74880605450589]),
            {
              "class": 1,
              "system:index": "1011"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.6864070892334, 15.77366974521446]),
            {
              "class": 1,
              "system:index": "1012"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.68469047546387, 15.805880625528523]),
            {
              "class": 1,
              "system:index": "1013"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.67241668701172, 15.827599428731093]),
            {
              "class": 1,
              "system:index": "1014"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.60735702514648, 15.723195750249202]),
            {
              "class": 1,
              "system:index": "1015"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.62010579772949, 15.694111755363709]),
            {
              "class": 1,
              "system:index": "1016"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.65439224243164, 15.663701324916735]),
            {
              "class": 1,
              "system:index": "1017"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.64211845397949, 15.669568907368259]),
            {
              "class": 1,
              "system:index": "1018"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.66022872924805, 15.619647759115836]),
            {
              "class": 1,
              "system:index": "1019"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.68760871887207, 15.597906767130883]),
            {
              "class": 1,
              "system:index": "1020"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.72751998901367, 15.58567127960982]),
            {
              "class": 1,
              "system:index": "1021"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.70056915283203, 15.56483620512527]),
            {
              "class": 1,
              "system:index": "1022"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.68511962890625, 15.575667400272007]),
            {
              "class": 1,
              "system:index": "1023"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.66546440124512, 15.532421895065891]),
            {
              "class": 1,
              "system:index": "1024"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.68769454956055, 15.545239387713067]),
            {
              "class": 1,
              "system:index": "1025"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.61662673950195, 15.520596017592773]),
            {
              "class": 1,
              "system:index": "1026"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.59688568115234, 15.513897142867608]),
            {
              "class": 1,
              "system:index": "1027"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.56594371795654, 15.529899649425104]),
            {
              "class": 1,
              "system:index": "1028"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.60606956481934, 15.580834754133011]),
            {
              "class": 1,
              "system:index": "1029"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.76554298400879, 15.451446567611304]),
            {
              "class": 1,
              "system:index": "1030"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.73889255523682, 15.47613954511616]),
            {
              "class": 1,
              "system:index": "1031"
            }),
        ee.Feature(
            ee.Geometry.Point([-85.70155620574951, 15.535357584735754]),
            {
              "class": 1,
              "system:index": "1032"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.24181747436523, 15.562686434426515]),
            {
              "class": 1,
              "system:index": "1033"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.1851692199707, 15.537052823106482]),
            {
              "class": 1,
              "system:index": "1034"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.14791870117188, 15.59443460828715]),
            {
              "class": 1,
              "system:index": "1035"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.23477935791016, 15.598733462960139]),
            {
              "class": 1,
              "system:index": "1036"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.18242263793945, 15.562024961999587]),
            {
              "class": 1,
              "system:index": "1037"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.08955383300781, 15.586994070165714]),
            {
              "class": 1,
              "system:index": "1038"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.10877990722656, 15.666511174160966]),
            {
              "class": 1,
              "system:index": "1039"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.1586046218872, 15.647337317686572]),
            {
              "class": 1,
              "system:index": "1040"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.15650177001953, 15.655850070763954]),
            {
              "class": 1,
              "system:index": "1041"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.18001937866211, 15.637791042138621]),
            {
              "class": 1,
              "system:index": "1042"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.19825839996338, 15.629732151270758]),
            {
              "class": 1,
              "system:index": "1043"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.21091842651367, 15.632087859870849]),
            {
              "class": 1,
              "system:index": "1044"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.22847080230713, 15.634774161166407]),
            {
              "class": 1,
              "system:index": "1045"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.25100135803223, 15.635889999035834]),
            {
              "class": 1,
              "system:index": "1046"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.25044345855713, 15.625392617130702]),
            {
              "class": 1,
              "system:index": "1047"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.2531042098999, 15.606545574098389]),
            {
              "class": 1,
              "system:index": "1048"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.25791072845459, 15.604685574617594]),
            {
              "class": 1,
              "system:index": "1049"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.27211570739746, 15.607165570177395]),
            {
              "class": 1,
              "system:index": "1050"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.29631996154785, 15.592161139133166]),
            {
              "class": 1,
              "system:index": "1051"
            }),
        ee.Feature(
            ee.Geometry.Point([-86.78175687789917, 15.538561986996214]),
            {
              "class": 1,
              "system:index": "1052"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.99751901626587, 14.351608298672284]),
            {
              "class": 1,
              "system:index": "1053"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.982412815094, 14.351421206238685]),
            {
              "class": 1,
              "system:index": "1054"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.9793872833252, 14.361004295356203]),
            {
              "class": 1,
              "system:index": "1055"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.99769067764282, 14.384762765271427]),
            {
              "class": 1,
              "system:index": "1056"
            }),
        ee.Feature(
            ee.Geometry.Point([-89.00142431259155, 14.386716542807024]),
            {
              "class": 1,
              "system:index": "1057"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.9854383468628, 14.399457247324142]),
            {
              "class": 1,
              "system:index": "1058"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.89203310012817, 14.430048594047445]),
            {
              "class": 1,
              "system:index": "1059"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8697600364685, 14.447669962660278]),
            {
              "class": 1,
              "system:index": "1060"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.86701345443726, 14.464001729733944]),
            {
              "class": 1,
              "system:index": "1061"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.89254808425903, 14.504888212762701]),
            {
              "class": 1,
              "system:index": "1062"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.95265102386475, 14.509956946382003]),
            {
              "class": 1,
              "system:index": "1063"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.96775722503662, 14.529856835271724]),
            {
              "class": 1,
              "system:index": "1064"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.97282123565674, 14.531144657834615]),
            {
              "class": 1,
              "system:index": "1065"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68730545043945, 14.311215934962771]),
            {
              "class": 1,
              "system:index": "1066"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61434936523438, 14.357992571874862]),
            {
              "class": 1,
              "system:index": "1067"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68176937103271, 14.415982025223348]),
            {
              "class": 1,
              "system:index": "1068"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72921228408813, 14.439565968797812]),
            {
              "class": 1,
              "system:index": "1069"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74803066253662, 14.457290474528008]),
            {
              "class": 1,
              "system:index": "1070"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66827249526978, 14.473808524369778]),
            {
              "class": 1,
              "system:index": "1071"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66548299789429, 14.472291823854198]),
            {
              "class": 1,
              "system:index": "1072"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65348815917969, 14.47081666683672]),
            {
              "class": 1,
              "system:index": "1073"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.63664388656616, 14.45244910266887]),
            {
              "class": 1,
              "system:index": "1074"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.56967449188232, 14.491841922295992]),
            {
              "class": 1,
              "system:index": "1075"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.60106706619263, 14.512844410782758]),
            {
              "class": 1,
              "system:index": "1076"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.58847141265869, 14.540657695274776]),
            {
              "class": 1,
              "system:index": "1077"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.54132890701294, 14.545227130941036]),
            {
              "class": 1,
              "system:index": "1078"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.58782768249512, 14.62380660245869]),
            {
              "class": 1,
              "system:index": "1079"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61711740493774, 14.655778579854612]),
            {
              "class": 1,
              "system:index": "1080"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59750509262085, 14.67371406258527]),
            {
              "class": 1,
              "system:index": "1081"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.56836557388306, 14.68087538988064]),
            {
              "class": 1,
              "system:index": "1082"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59151840209961, 14.693412337318225]),
            {
              "class": 1,
              "system:index": "1083"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61254692077637, 14.71935572139225]),
            {
              "class": 1,
              "system:index": "1084"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62887620925903, 14.704391953749266]),
            {
              "class": 1,
              "system:index": "1085"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.63087177276611, 14.730520804350176]),
            {
              "class": 1,
              "system:index": "1086"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.60872745513916, 14.728653079372402]),
            {
              "class": 1,
              "system:index": "1087"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59527349472046, 14.732948822890286]),
            {
              "class": 1,
              "system:index": "1088"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59334230422974, 14.727055124186917]),
            {
              "class": 1,
              "system:index": "1089"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.56053352355957, 14.690547998796765]),
            {
              "class": 1,
              "system:index": "1090"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.56478214263916, 14.69231226971817]),
            {
              "class": 1,
              "system:index": "1091"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52083683013916, 14.689344135169405]),
            {
              "class": 1,
              "system:index": "1092"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.51770401000977, 14.69019514290331]),
            {
              "class": 1,
              "system:index": "1093"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5158371925354, 14.687372275247663]),
            {
              "class": 1,
              "system:index": "1094"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49959373474121, 14.69457466687813]),
            {
              "class": 1,
              "system:index": "1095"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49463701248169, 14.696089837198729]),
            {
              "class": 1,
              "system:index": "1096"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49787712097168, 14.720932979686305]),
            {
              "class": 1,
              "system:index": "1097"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49364995956421, 14.71877462335587]),
            {
              "class": 1,
              "system:index": "1098"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49854230880737, 14.71402201345315]),
            {
              "class": 1,
              "system:index": "1099"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44590663909912, 14.73587486056485]),
            {
              "class": 1,
              "system:index": "1100"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43968391418457, 14.73477500704147]),
            {
              "class": 1,
              "system:index": "1101"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43322515487671, 14.738946120244181]),
            {
              "class": 1,
              "system:index": "1102"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44506978988647, 14.732222495393842]),
            {
              "class": 1,
              "system:index": "1103"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42041492462158, 14.740626994028775]),
            {
              "class": 1,
              "system:index": "1104"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.39964389801025, 14.76515382365717]),
            {
              "class": 1,
              "system:index": "1105"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3885931968689, 14.781026312384673]),
            {
              "class": 1,
              "system:index": "1106"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40831279754639, 14.779864444053096]),
            {
              "class": 1,
              "system:index": "1107"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40822696685791, 14.809946530172294]),
            {
              "class": 1,
              "system:index": "1108"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42498540878296, 14.80258199132509]),
            {
              "class": 1,
              "system:index": "1109"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45403909683228, 14.800860105312184]),
            {
              "class": 1,
              "system:index": "1110"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44788074493408, 14.809988019823148]),
            {
              "class": 1,
              "system:index": "1111"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45659255981445, 14.80712521528013]),
            {
              "class": 1,
              "system:index": "1112"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45961809158325, 14.80621242906963]),
            {
              "class": 1,
              "system:index": "1113"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47830772399902, 14.811543875995536]),
            {
              "class": 1,
              "system:index": "1114"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47886562347412, 14.820920265944057]),
            {
              "class": 1,
              "system:index": "1115"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47880125045776, 14.826915134361943]),
            {
              "class": 1,
              "system:index": "1116"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48605394363403, 14.809178970198806]),
            {
              "class": 1,
              "system:index": "1117"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48219156265259, 14.83811617359236]),
            {
              "class": 1,
              "system:index": "1118"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42211818695068, 13.838876543466316]),
            {
              "class": 1,
              "system:index": "1119"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.38842964172363, 13.873584733549825]),
            {
              "class": 1,
              "system:index": "1120"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.37997531890869, 13.99549886871292]),
            {
              "class": 1,
              "system:index": "1121"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.39688396453857, 13.995373944507179]),
            {
              "class": 1,
              "system:index": "1122"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.38900899887085, 13.99277134144884]),
            {
              "class": 1,
              "system:index": "1123"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.46187925338745, 13.997726672314043]),
            {
              "class": 1,
              "system:index": "1124"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4735951423645, 13.989023541290447]),
            {
              "class": 1,
              "system:index": "1125"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.47430324554443, 13.96984634176051]),
            {
              "class": 1,
              "system:index": "1126"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.47430324554443, 13.974427359856348]),
            {
              "class": 1,
              "system:index": "1127"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4592399597168, 13.952354343856337]),
            {
              "class": 1,
              "system:index": "1128"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.46363878250122, 13.959143062579226]),
            {
              "class": 1,
              "system:index": "1129"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.46312379837036, 13.965556760392225]),
            {
              "class": 1,
              "system:index": "1130"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.43419885635376, 14.11254374942712]),
            {
              "class": 1,
              "system:index": "1131"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42402791976929, 14.107486850992323]),
            {
              "class": 1,
              "system:index": "1132"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.44031429290771, 14.104094712227838]),
            {
              "class": 1,
              "system:index": "1133"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.44439125061035, 14.116768150575123]),
            {
              "class": 1,
              "system:index": "1134"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42108821868896, 14.11456231541132]),
            {
              "class": 1,
              "system:index": "1135"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.42816925048828, 14.101097934160562]),
            {
              "class": 1,
              "system:index": "1136"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.46179342269897, 14.099641152821613]),
            {
              "class": 1,
              "system:index": "1137"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45205163955688, 14.106550376008403]),
            {
              "class": 1,
              "system:index": "1138"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.43675231933594, 14.089589108062938]),
            {
              "class": 1,
              "system:index": "1139"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4157452583313, 14.088735808514926]),
            {
              "class": 1,
              "system:index": "1140"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.41166830062866, 14.09256522542515]),
            {
              "class": 1,
              "system:index": "1141"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.40952253341675, 14.091462193446125]),
            {
              "class": 1,
              "system:index": "1142"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4146294593811, 14.097851380154694]),
            {
              "class": 1,
              "system:index": "1143"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.39851474761963, 14.08763275803151]),
            {
              "class": 1,
              "system:index": "1144"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.395339012146, 14.085718016236454]),
            {
              "class": 1,
              "system:index": "1145"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3833441734314, 14.098413287039053]),
            {
              "class": 1,
              "system:index": "1146"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.38001823425293, 14.079307676864168]),
            {
              "class": 1,
              "system:index": "1147"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.37877368927002, 14.075811052294696]),
            {
              "class": 1,
              "system:index": "1148"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3806619644165, 14.067631239433759]),
            {
              "class": 1,
              "system:index": "1149"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.39023208618164, 14.072147864406018]),
            {
              "class": 1,
              "system:index": "1150"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.396240234375, 14.073937838550847]),
            {
              "class": 1,
              "system:index": "1151"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.38868713378906, 14.057890011860575]),
            {
              "class": 1,
              "system:index": "1152"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36815214157104, 14.050105057483615]),
            {
              "class": 1,
              "system:index": "1153"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36038446426392, 14.04207004087646]),
            {
              "class": 1,
              "system:index": "1154"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3333477973938, 14.040592066715217]),
            {
              "class": 1,
              "system:index": "1155"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.3254942893982, 14.046420641859848]),
            {
              "class": 1,
              "system:index": "1156"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.34611511230469, 14.02724823469701]),
            {
              "class": 1,
              "system:index": "1157"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.35291719436646, 14.022085358106507]),
            {
              "class": 1,
              "system:index": "1158"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.4431037902832, 14.1280491482343]),
            {
              "class": 1,
              "system:index": "1159"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45855331420898, 14.119059640828356]),
            {
              "class": 1,
              "system:index": "1160"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.46606349945068, 14.11918449752794]),
            {
              "class": 1,
              "system:index": "1161"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.45984077453613, 14.121098958351075]),
            {
              "class": 1,
              "system:index": "1162"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.44709491729736, 14.098831952293017]),
            {
              "class": 1,
              "system:index": "1163"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36426830291748, 14.064782122900036]),
            {
              "class": 1,
              "system:index": "1164"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36079216003418, 14.031809730722102]),
            {
              "class": 1,
              "system:index": "1165"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.36752986907959, 14.03151828690415]),
            {
              "class": 1,
              "system:index": "1166"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08583617210388, 14.097604082155017]),
            {
              "class": 1,
              "system:index": "1167"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.10477256774902, 14.095668612417938]),
            {
              "class": 1,
              "system:index": "1168"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0678653717041, 14.097458402208568]),
            {
              "class": 1,
              "system:index": "1169"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08945178985596, 14.111568113630549]),
            {
              "class": 1,
              "system:index": "1170"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.12206745147705, 14.105574714559705]),
            {
              "class": 1,
              "system:index": "1171"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.1317663192749, 14.111734594688574]),
            {
              "class": 1,
              "system:index": "1172"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.11434268951416, 14.121473524890739]),
            {
              "class": 1,
              "system:index": "1173"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09683322906494, 14.131295272010966]),
            {
              "class": 1,
              "system:index": "1174"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08451652526855, 14.12634283384083]),
            {
              "class": 1,
              "system:index": "1175"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.06975364685059, 14.062659043747049]),
            {
              "class": 1,
              "system:index": "1176"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.05902481079102, 14.069777525510377]),
            {
              "class": 1,
              "system:index": "1177"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.03825378417969, 14.069944037051105]),
            {
              "class": 1,
              "system:index": "1178"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.02254676818848, 14.086885952106563]),
            {
              "class": 1,
              "system:index": "1179"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.02074432373047, 14.091797623693651]),
            {
              "class": 1,
              "system:index": "1180"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.03769588470459, 14.094628030504335]),
            {
              "class": 1,
              "system:index": "1181"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0678653717041, 14.096958927400276]),
            {
              "class": 1,
              "system:index": "1182"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.11352729797363, 14.120890865562851]),
            {
              "class": 1,
              "system:index": "1183"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09837818145752, 14.129089577562965]),
            {
              "class": 1,
              "system:index": "1184"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.12352657318115, 14.108238466933688]),
            {
              "class": 1,
              "system:index": "1185"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.10204744338989, 14.089726825888464]),
            {
              "class": 1,
              "system:index": "1186"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.1084418296814, 14.085456640378565]),
            {
              "class": 1,
              "system:index": "1187"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.10328125953674, 14.09050362115829]),
            {
              "class": 1,
              "system:index": "1188"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0985176563263, 14.092657659392977]),
            {
              "class": 1,
              "system:index": "1189"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09990167617798, 14.094957358934154]),
            {
              "class": 1,
              "system:index": "1190"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.07448506355286, 14.084187073013405]),
            {
              "class": 1,
              "system:index": "1191"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.07621240615845, 14.094874112296212]),
            {
              "class": 1,
              "system:index": "1192"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08358311653137, 14.092855372028762]),
            {
              "class": 1,
              "system:index": "1193"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08712363243103, 14.094634778042977]),
            {
              "class": 1,
              "system:index": "1194"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09449434280396, 14.098911539251464]),
            {
              "class": 1,
              "system:index": "1195"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09019207954407, 14.104155925301718]),
            {
              "class": 1,
              "system:index": "1196"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09250950813293, 14.105258895907552]),
            {
              "class": 1,
              "system:index": "1197"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08788537979126, 14.113832749590252]),
            {
              "class": 1,
              "system:index": "1198"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08458089828491, 14.117849031272543]),
            {
              "class": 1,
              "system:index": "1199"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0853533744812, 14.125756529167951]),
            {
              "class": 1,
              "system:index": "1200"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08906555175781, 14.129897451399867]),
            {
              "class": 1,
              "system:index": "1201"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08672666549683, 14.121178537535078]),
            {
              "class": 1,
              "system:index": "1202"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.08858275413513, 14.123488353908245]),
            {
              "class": 1,
              "system:index": "1203"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09452652931213, 14.125579653927906]),
            {
              "class": 1,
              "system:index": "1204"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09879660606384, 14.130292811894488]),
            {
              "class": 1,
              "system:index": "1205"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.09979438781738, 14.131177168409298]),
            {
              "class": 1,
              "system:index": "1206"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.10338854789734, 14.12459123093931]),
            {
              "class": 1,
              "system:index": "1207"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.10590982437134, 14.12934602640519]),
            {
              "class": 1,
              "system:index": "1208"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.10337781906128, 14.128357619769504]),
            {
              "class": 1,
              "system:index": "1209"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.10474038124084, 14.13694100784788]),
            {
              "class": 1,
              "system:index": "1210"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.029305934906, 14.139916506795725]),
            {
              "class": 1,
              "system:index": "1211"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.01424264907837, 14.14855147560855]),
            {
              "class": 1,
              "system:index": "1212"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0160665512085, 14.148500677852367]),
            {
              "class": 1,
              "system:index": "1213"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.0163025856018, 14.147210654869449]),
            {
              "class": 1,
              "system:index": "1214"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.11321353912354, 14.938031040867813]),
            {
              "class": 1,
              "system:index": "1215"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.10175514221191, 14.95308231852933]),
            {
              "class": 1,
              "system:index": "1216"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.12016582489014, 14.913523811653]),
            {
              "class": 1,
              "system:index": "1217"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.15677261352539, 14.886110557324923]),
            {
              "class": 1,
              "system:index": "1218"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.13381290435791, 14.88208744129672]),
            {
              "class": 1,
              "system:index": "1219"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.07141399383545, 14.882460723263296]),
            {
              "class": 1,
              "system:index": "1220"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.13059425354004, 14.68926354223015]),
            {
              "class": 1,
              "system:index": "1221"
            }),
        ee.Feature(
            ee.Geometry.Point([-87.1345853805542, 14.683700773869694]),
            {
              "class": 1,
              "system:index": "1222"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68558883666992, 14.162214359273625]),
            {
              "class": 1,
              "system:index": "1223"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71288299560547, 14.190716114070735]),
            {
              "class": 1,
              "system:index": "1224"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7279462814331, 14.189842390876551]),
            {
              "class": 1,
              "system:index": "1225"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74077796936035, 14.171493425872274]),
            {
              "class": 1,
              "system:index": "1226"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73313903808594, 14.173324228280899]),
            {
              "class": 1,
              "system:index": "1227"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76154899597168, 14.154599415945235]),
            {
              "class": 1,
              "system:index": "1228"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77163410186768, 14.145819027865851]),
            {
              "class": 1,
              "system:index": "1229"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.76837253570557, 14.142198579521603]),
            {
              "class": 1,
              "system:index": "1230"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77339363098145, 14.153600715917575]),
            {
              "class": 1,
              "system:index": "1231"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53954792022705, 14.096292959288302]),
            {
              "class": 1,
              "system:index": "1232"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5192060470581, 14.099456290506584]),
            {
              "class": 1,
              "system:index": "1233"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.51306915283203, 14.07968475106599]),
            {
              "class": 1,
              "system:index": "1234"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5851240158081, 14.103285527499855]),
            {
              "class": 1,
              "system:index": "1235"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64550590515137, 14.113024818764833]),
            {
              "class": 1,
              "system:index": "1236"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.63065719604492, 14.130213235896196]),
            {
              "class": 1,
              "system:index": "1237"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65580558776855, 14.163587518601409]),
            {
              "class": 1,
              "system:index": "1238"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69816303253174, 14.19762256930016]),
            {
              "class": 1,
              "system:index": "1239"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71253967285156, 14.277655490462758]),
            {
              "class": 1,
              "system:index": "1240"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7162733078003, 14.26684188951156]),
            {
              "class": 1,
              "system:index": "1241"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69400024414062, 14.295663142295385]),
            {
              "class": 1,
              "system:index": "1242"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72665882110596, 14.284309756013515]),
            {
              "class": 1,
              "system:index": "1243"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.73292446136475, 14.276865283362753]),
            {
              "class": 1,
              "system:index": "1244"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.74506950378418, 14.287719990854526]),
            {
              "class": 1,
              "system:index": "1245"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.77953052520752, 14.28751270099719]),
            {
              "class": 1,
              "system:index": "1246"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.71060848236084, 14.348970638222173]),
            {
              "class": 1,
              "system:index": "1247"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66640567779541, 14.353128256495145]),
            {
              "class": 1,
              "system:index": "1248"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62271785736084, 14.35699477220866]),
            {
              "class": 1,
              "system:index": "1249"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67546081542969, 14.411700881694387]),
            {
              "class": 1,
              "system:index": "1250"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6579942703247, 14.43846706917751]),
            {
              "class": 1,
              "system:index": "1251"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66133093833923, 14.44972586582904]),
            {
              "class": 1,
              "system:index": "1252"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66316556930542, 14.45409978142065]),
            {
              "class": 1,
              "system:index": "1253"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6652684211731, 14.458972284380515]),
            {
              "class": 1,
              "system:index": "1254"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66517186164856, 14.460312463688872]),
            {
              "class": 1,
              "system:index": "1255"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66085886955261, 14.457403699421814]),
            {
              "class": 1,
              "system:index": "1256"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65978598594666, 14.451793356845164]),
            {
              "class": 1,
              "system:index": "1257"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65954995155334, 14.447346668960309]),
            {
              "class": 1,
              "system:index": "1258"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65597741678357, 14.43957514115325]),
            {
              "class": 1,
              "system:index": "1259"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65977542474866, 14.437694556866854]),
            {
              "class": 1,
              "system:index": "1260"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.65628838539124, 14.435606154589077]),
            {
              "class": 1,
              "system:index": "1261"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6485743522644, 14.426296421529525]),
            {
              "class": 1,
              "system:index": "1262"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64304900169373, 14.44927911901323]),
            {
              "class": 1,
              "system:index": "1263"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.63148331642151, 14.450047938558049]),
            {
              "class": 1,
              "system:index": "1264"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64547371864319, 14.48823622023644]),
            {
              "class": 1,
              "system:index": "1265"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62395167350769, 14.495985270686823]),
            {
              "class": 1,
              "system:index": "1266"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62123727798462, 14.497127869148196]),
            {
              "class": 1,
              "system:index": "1267"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62163424491882, 14.493970128134713]),
            {
              "class": 1,
              "system:index": "1268"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62471342086792, 14.493357271869495]),
            {
              "class": 1,
              "system:index": "1269"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61990690231323, 14.49231852856695]),
            {
              "class": 1,
              "system:index": "1270"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62470269203186, 14.491300555407912]),
            {
              "class": 1,
              "system:index": "1271"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.62729907035828, 14.493627344330813]),
            {
              "class": 1,
              "system:index": "1272"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61393094062805, 14.497834199795777]),
            {
              "class": 1,
              "system:index": "1273"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.61016511917114, 14.499371499892595]),
            {
              "class": 1,
              "system:index": "1274"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6067533493042, 14.502975803565432]),
            {
              "class": 1,
              "system:index": "1275"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.60842704772949, 14.50381714554785]),
            {
              "class": 1,
              "system:index": "1276"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.60999345779419, 14.505593301459683]),
            {
              "class": 1,
              "system:index": "1277"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.58822464942932, 14.50746292387202]),
            {
              "class": 1,
              "system:index": "1278"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81435632705688, 14.460718850039578]),
            {
              "class": 1,
              "system:index": "1279"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81401300430298, 14.464521168277939]),
            {
              "class": 1,
              "system:index": "1280"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.82165193557739, 14.457809928763165]),
            {
              "class": 1,
              "system:index": "1281"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80656719207764, 14.455212645445688]),
            {
              "class": 1,
              "system:index": "1282"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80120277404785, 14.460074735039663]),
            {
              "class": 1,
              "system:index": "1283"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81748914718628, 14.450371228330706]),
            {
              "class": 1,
              "system:index": "1284"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.82178068161011, 14.44987253559992]),
            {
              "class": 1,
              "system:index": "1285"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8239049911499, 14.453862046125469]),
            {
              "class": 1,
              "system:index": "1286"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.82892608642578, 14.44193485907785]),
            {
              "class": 1,
              "system:index": "1287"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81384134292603, 14.441851740547625]),
            {
              "class": 1,
              "system:index": "1288"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80358457565308, 14.445321912766907]),
            {
              "class": 1,
              "system:index": "1289"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.795645236969, 14.44821021841953]),
            {
              "class": 1,
              "system:index": "1290"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79169702529907, 14.451430946669719]),
            {
              "class": 1,
              "system:index": "1291"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.787362575531, 14.443534884732017]),
            {
              "class": 1,
              "system:index": "1292"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78257751464844, 14.444740091262004]),
            {
              "class": 1,
              "system:index": "1293"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7530517578125, 14.43549308094323]),
            {
              "class": 1,
              "system:index": "1294"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.72324705123901, 14.43511903648504]),
            {
              "class": 1,
              "system:index": "1295"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68788480758667, 14.439171151299137]),
            {
              "class": 1,
              "system:index": "1296"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6842155456543, 14.440085464439274]),
            {
              "class": 1,
              "system:index": "1297"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7439751625061, 14.44852190383743]),
            {
              "class": 1,
              "system:index": "1298"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7850022315979, 14.450371228330706]),
            {
              "class": 1,
              "system:index": "1299"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78680467605591, 14.456293118992873]),
            {
              "class": 1,
              "system:index": "1300"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79167556762695, 14.448688135881675]),
            {
              "class": 1,
              "system:index": "1301"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79101037979126, 14.457373587287233]),
            {
              "class": 1,
              "system:index": "1302"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7880277633667, 14.459679953955451]),
            {
              "class": 1,
              "system:index": "1303"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78968000411987, 14.4438050177979]),
            {
              "class": 1,
              "system:index": "1304"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80154609680176, 14.453134796938564]),
            {
              "class": 1,
              "system:index": "1305"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79815578460693, 14.461217518434452]),
            {
              "class": 1,
              "system:index": "1306"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79656791687012, 14.469029843801684]),
            {
              "class": 1,
              "system:index": "1307"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7963318824768, 14.4726450290095]),
            {
              "class": 1,
              "system:index": "1308"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.80560159683228, 14.47106598983788]),
            {
              "class": 1,
              "system:index": "1309"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78860712051392, 14.472977456877603]),
            {
              "class": 1,
              "system:index": "1310"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81645917892456, 14.464292615468237]),
            {
              "class": 1,
              "system:index": "1311"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8263726234436, 14.472499591660673]),
            {
              "class": 1,
              "system:index": "1312"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.82660865783691, 14.475242108480405]),
            {
              "class": 1,
              "system:index": "1313"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83639335632324, 14.488580229677126]),
            {
              "class": 1,
              "system:index": "1314"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.84456872940063, 14.47954280524983]),
            {
              "class": 1,
              "system:index": "1315"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.82529973983765, 14.486938977664986]),
            {
              "class": 1,
              "system:index": "1316"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81920576095581, 14.484113502707768]),
            {
              "class": 1,
              "system:index": "1317"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.82141590118408, 14.482866958195403]),
            {
              "class": 1,
              "system:index": "1318"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.84961128234863, 14.472395707781741]),
            {
              "class": 1,
              "system:index": "1319"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.84634971618652, 14.471647742418345]),
            {
              "class": 1,
              "system:index": "1320"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.85993242263794, 14.46963237875765]),
            {
              "class": 1,
              "system:index": "1321"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.86958837509155, 14.46794943220005]),
            {
              "class": 1,
              "system:index": "1322"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.86383771896362, 14.462214851866285]),
            {
              "class": 1,
              "system:index": "1323"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.86355876922607, 14.478171577649883]),
            {
              "class": 1,
              "system:index": "1324"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.87615442276001, 14.476301708175926]),
            {
              "class": 1,
              "system:index": "1325"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.89115333557129, 14.46747155616102]),
            {
              "class": 1,
              "system:index": "1326"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8964319229126, 14.470131027139852]),
            {
              "class": 1,
              "system:index": "1327"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.90053033828735, 14.458578718802793]),
            {
              "class": 1,
              "system:index": "1328"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8913893699646, 14.453467254004947]),
            {
              "class": 1,
              "system:index": "1329"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.89078855514526, 14.429695321213984]),
            {
              "class": 1,
              "system:index": "1330"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.87111186981201, 14.396381254741282]),
            {
              "class": 1,
              "system:index": "1331"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8685154914856, 14.390665615429713]),
            {
              "class": 1,
              "system:index": "1332"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.87718439102173, 14.402553980811897]),
            {
              "class": 1,
              "system:index": "1333"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.85905265808105, 14.417579801994483]),
            {
              "class": 1,
              "system:index": "1334"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.85645627975464, 14.426349591886476]),
            {
              "class": 1,
              "system:index": "1335"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.85109186172485, 14.425663815072092]),
            {
              "class": 1,
              "system:index": "1336"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.8439679145813, 14.425081942179869]),
            {
              "class": 1,
              "system:index": "1337"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.83285284042358, 14.442267332888227]),
            {
              "class": 1,
              "system:index": "1338"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.81242513656616, 14.444698532524844]),
            {
              "class": 1,
              "system:index": "1339"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.79238367080688, 14.450973813888064]),
            {
              "class": 1,
              "system:index": "1340"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.78839254379272, 14.451015371452513]),
            {
              "class": 1,
              "system:index": "1341"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.7647032737732, 14.456937244954545]),
            {
              "class": 1,
              "system:index": "1342"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6590027809143, 14.434641089873745]),
            {
              "class": 1,
              "system:index": "1343"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.64964723587036, 14.426723651077088]),
            {
              "class": 1,
              "system:index": "1344"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6338758468628, 14.4549840830607]),
            {
              "class": 1,
              "system:index": "1345"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67910861968994, 14.463191727830438]),
            {
              "class": 1,
              "system:index": "1346"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6709976196289, 14.461072398255311]),
            {
              "class": 1,
              "system:index": "1347"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67679119110107, 14.459514054787233]),
            {
              "class": 1,
              "system:index": "1348"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6677360534668, 14.466328804941394]),
            {
              "class": 1,
              "system:index": "1349"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68327140808105, 14.45675024083542]),
            {
              "class": 1,
              "system:index": "1350"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68621110916138, 14.451410167927301]),
            {
              "class": 1,
              "system:index": "1351"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69073867797852, 14.449747862242466]),
            {
              "class": 1,
              "system:index": "1352"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69342088699341, 14.457996931990577]),
            {
              "class": 1,
              "system:index": "1353"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69009494781494, 14.462858960661409]),
            {
              "class": 1,
              "system:index": "1354"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69142532348633, 14.465331489980889]),
            {
              "class": 1,
              "system:index": "1355"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69091033935547, 14.416727742400193]),
            {
              "class": 1,
              "system:index": "1356"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6941933631897, 14.42117504196982]),
            {
              "class": 1,
              "system:index": "1357"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69369983673096, 14.419325474891783]),
            {
              "class": 1,
              "system:index": "1358"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69930028915405, 14.419948926183928]),
            {
              "class": 1,
              "system:index": "1359"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.67174863815308, 14.409578626283638]),
            {
              "class": 1,
              "system:index": "1360"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66966724395752, 14.407957573888021]),
            {
              "class": 1,
              "system:index": "1361"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69099617004395, 14.420364559409629]),
            {
              "class": 1,
              "system:index": "1362"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66833686828613, 14.414379366170678]),
            {
              "class": 1,
              "system:index": "1363"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.66758584976196, 14.405463624118253]),
            {
              "class": 1,
              "system:index": "1364"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.68784189224243, 14.415272998979402]),
            {
              "class": 1,
              "system:index": "1365"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.6940860748291, 14.416291320370883]),
            {
              "class": 1,
              "system:index": "1366"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.69861364364624, 14.418972185051961]),
            {
              "class": 1,
              "system:index": "1367"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.621666431427, 14.440376381468708]),
            {
              "class": 1,
              "system:index": "1368"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.59375, 14.43204353599909]),
            {
              "class": 1,
              "system:index": "1369"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.58995199203491, 14.431544802186936]),
            {
              "class": 1,
              "system:index": "1370"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5848879814148, 14.428282224275586]),
            {
              "class": 1,
              "system:index": "1371"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.58145475387573, 14.428490033211252]),
            {
              "class": 1,
              "system:index": "1372"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.57544660568237, 14.4268898994046]),
            {
              "class": 1,
              "system:index": "1373"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5702109336853, 14.418431858331239]),
            {
              "class": 1,
              "system:index": "1374"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5683012008667, 14.416353666427385]),
            {
              "class": 1,
              "system:index": "1375"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.56306552886963, 14.414213108508681]),
            {
              "class": 1,
              "system:index": "1376"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.56152057647705, 14.412155659680302]),
            {
              "class": 1,
              "system:index": "1377"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.56321573257446, 14.42377272261492]),
            {
              "class": 1,
              "system:index": "1378"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.57006072998047, 14.425559909309962]),
            {
              "class": 1,
              "system:index": "1379"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.55939626693726, 14.43065123464622]),
            {
              "class": 1,
              "system:index": "1380"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5551905632019, 14.427721139180642]),
            {
              "class": 1,
              "system:index": "1381"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.54662895202637, 14.431856510950453]),
            {
              "class": 1,
              "system:index": "1382"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53763818740845, 14.443701120503693]),
            {
              "class": 1,
              "system:index": "1383"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.53514909744263, 14.446797239045894]),
            {
              "class": 1,
              "system:index": "1384"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52755308151245, 14.442392010439024]),
            {
              "class": 1,
              "system:index": "1385"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52579355239868, 14.447753079016366]),
            {
              "class": 1,
              "system:index": "1386"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.51585865020752, 14.419554073901432]),
            {
              "class": 1,
              "system:index": "1387"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.52566480636597, 14.42743020561194]),
            {
              "class": 1,
              "system:index": "1388"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.5232400894165, 14.429965471078221]),
            {
              "class": 1,
              "system:index": "1389"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47714900970459, 14.430755138032906]),
            {
              "class": 1,
              "system:index": "1390"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.49025964736938, 14.42296224950449]),
            {
              "class": 1,
              "system:index": "1391"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47011089324951, 14.405671454330788]),
            {
              "class": 1,
              "system:index": "1392"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4282898902893, 14.413236342240396]),
            {
              "class": 1,
              "system:index": "1393"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42936277389526, 14.40486091540687]),
            {
              "class": 1,
              "system:index": "1394"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41324806213379, 14.412114094861844]),
            {
              "class": 1,
              "system:index": "1395"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42642307281494, 14.394656186294002]),
            {
              "class": 1,
              "system:index": "1396"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41977119445801, 14.382455622988118]),
            {
              "class": 1,
              "system:index": "1397"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43026399612427, 14.380418666756288]),
            {
              "class": 1,
              "system:index": "1398"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44470500946045, 14.379524894385497]),
            {
              "class": 1,
              "system:index": "1399"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45953226089478, 14.37320602962603]),
            {
              "class": 1,
              "system:index": "1400"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.39582443237305, 14.371023485498094]),
            {
              "class": 1,
              "system:index": "1401"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.39985847473145, 14.411345144322663]),
            {
              "class": 1,
              "system:index": "1402"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4055233001709, 14.41477422762094]),
            {
              "class": 1,
              "system:index": "1403"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4126690402627, 14.418037003360693]),
            {
              "class": 1,
              "system:index": "1404"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44277381896973, 14.418764367237495]),
            {
              "class": 1,
              "system:index": "1405"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44989776611328, 14.421569891379864]),
            {
              "class": 1,
              "system:index": "1406"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43766689300537, 14.426619745809381]),
            {
              "class": 1,
              "system:index": "1407"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4415078163147, 14.428240662465171]),
            {
              "class": 1,
              "system:index": "1408"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44170093536377, 14.433103341640335]),
            {
              "class": 1,
              "system:index": "1409"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42195987701416, 14.460282514275908]),
            {
              "class": 1,
              "system:index": "1410"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4131407737732, 14.458703387207244]),
            {
              "class": 1,
              "system:index": "1411"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40511560440063, 14.461549963409206]),
            {
              "class": 1,
              "system:index": "1412"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40524435043335, 14.462775849954076]),
            {
              "class": 1,
              "system:index": "1413"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.39779853820801, 14.472354154216559]),
            {
              "class": 1,
              "system:index": "1414"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.39522361755371, 14.476821117943583]),
            {
              "class": 1,
              "system:index": "1415"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4048581123352, 14.472748912771758]),
            {
              "class": 1,
              "system:index": "1416"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40245485305786, 14.4953320879966]),
            {
              "class": 1,
              "system:index": "1417"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40985774993896, 14.492839118103987]),
            {
              "class": 1,
              "system:index": "1418"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41457843780518, 14.500442588603404]),
            {
              "class": 1,
              "system:index": "1419"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.42610120773315, 14.501522841932276]),
            {
              "class": 1,
              "system:index": "1420"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.44148635864258, 14.527177309445127]),
            {
              "class": 1,
              "system:index": "1421"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45981121063232, 14.494210255014934]),
            {
              "class": 1,
              "system:index": "1422"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46682786941528, 14.51049705050041]),
            {
              "class": 1,
              "system:index": "1423"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47815752029419, 14.516791243633373]),
            {
              "class": 1,
              "system:index": "1424"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48830699920654, 14.500858071276355]),
            {
              "class": 1,
              "system:index": "1425"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48684787750244, 14.481246439856687]),
            {
              "class": 1,
              "system:index": "1426"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.4825348854065, 14.486315714224823]),
            {
              "class": 1,
              "system:index": "1427"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.48043203353882, 14.49034612017316]),
            {
              "class": 1,
              "system:index": "1428"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.47944498062134, 14.491966572017315]),
            {
              "class": 1,
              "system:index": "1429"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45491886138916, 14.462048629938572]),
            {
              "class": 1,
              "system:index": "1430"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46388816833496, 14.440750417090506]),
            {
              "class": 1,
              "system:index": "1431"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.46030473709106, 14.42684833733436]),
            {
              "class": 1,
              "system:index": "1432"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45770835876465, 14.427263957687748]),
            {
              "class": 1,
              "system:index": "1433"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.45421075820923, 14.418120130781052]),
            {
              "class": 1,
              "system:index": "1434"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43234539031982, 14.395882441138657]),
            {
              "class": 1,
              "system:index": "1435"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.43730211257935, 14.397628283870896]),
            {
              "class": 1,
              "system:index": "1436"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.41850519180298, 14.382996036830797]),
            {
              "class": 1,
              "system:index": "1437"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.40069532394409, 14.389065210203166]),
            {
              "class": 1,
              "system:index": "1438"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.36481809616089, 14.38916912281996]),
            {
              "class": 1,
              "system:index": "1439"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.36428165435791, 14.398501189967734]),
            {
              "class": 1,
              "system:index": "1440"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.32580804824829, 14.397462003574509]),
            {
              "class": 1,
              "system:index": "1441"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3214521408081, 14.400454847287206]),
            {
              "class": 1,
              "system:index": "1442"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.32700967788696, 14.402450054129583]),
            {
              "class": 1,
              "system:index": "1443"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.33093643188477, 14.403406084418718]),
            {
              "class": 1,
              "system:index": "1444"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.32452058792114, 14.390083641071156]),
            {
              "class": 1,
              "system:index": "1445"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.3106803894043, 14.396880057080828]),
            {
              "class": 1,
              "system:index": "1446"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.30441474914551, 14.406315716611173]),
            {
              "class": 1,
              "system:index": "1447"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.30381393432617, 14.40924609352817]),
            {
              "class": 1,
              "system:index": "1448"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.30595970153809, 14.413132420535776]),
            {
              "class": 1,
              "system:index": "1449"
            }),
        ee.Feature(
            ee.Geometry.Point([-88.31110954284668, 14.403385301195128]),
            {
              "class": 1,
              "system:index": "1450"
            })]),
    prev = ee.Image("users/images/Honduras_2010_v6"),
    prev3 = ee.Image("users/images/EL_Salvador_2010_v1"),
    prev4 = ee.Image("users/images/Yucatan_2010_v9_new"),
    prev5 = ee.Image("users/images/Belize_2010_v4"),
    input = ee.Image("users/images/input/Honduras_2010_InputTOA3seasonV3");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw");


print(input);
/*
input=input.select([11,12,13,14,15,16,17,18,19,20,
                      21,22,23,24,25,26,27,28,29,30,
                      31,32,33,34])
*/
//create bounds for training samples inside area of interest
function buffer1(geometry) {
  return geometry.buffer(45).bounds();
} 

//buffer function of 1km********************************************************
function buffer2(geometry) {
  return geometry.buffer(10000);
}

var region = countries.filterMetadata('Country','equals','Honduras').geometry()

//visual parameters for FCC display 
var vizParams = {
  bands: ['B4_2', 'B3_2', 'B2_2'],
  min: 0,
  max: 255,
  gamma: [1.5,1.6, 1.7]
};

//add all max val to map
//Map.addLayer(input,vizParams,'FCC');



//throw('stop')

var studyArea = region
studyArea=buffer2(studyArea);

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
print(input);

var training = input.sampleRegions({
    collection: TrainingSamples,
  properties: ['class'],
  scale: 30
});

//build classifier
var classifier = ee.Classifier.randomForest(400,5)
                  .train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = input.classify(classifier);
classified = classified.updateMask(classified.eq(1))
                .clip(studyArea);

Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_Honduras_v1',
  folder: 'data',
  fileNamePrefix: 'RFtable_Honduras_2010_v1',
  fileFormat: 'CSV'
});


Map.addLayer(classified, {palette: '00ff00'}, 'cropland_final');

Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'Honduras_v1_asset',
  assetId: 'Honduras_2010_v1',
  region: studyArea, 
});

Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'Honduras_v1_drive',
  fileNamePrefix: 'Honduras_2010_v1',
  region: studyArea, 
});
/*
var area_map=classified.multiply(ee.Image.pixelArea().divide(10000))
//Map.addLayer(area_map,{},'area_map')
var area=area_map.reduceRegion({
  reducer:ee.Reducer.sum(),
  geometry:region,
  scale: 30,
  maxPixels:9999999999900})
//print(area)
*/
Map.addLayer(prev, {palette: 'ffff00'}, 'prev');
