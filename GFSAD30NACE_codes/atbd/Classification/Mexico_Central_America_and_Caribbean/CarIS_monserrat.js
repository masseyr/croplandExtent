/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var input1 = ee.Image("users/images/input/CarIs_2007-13_InputTOA"),
    input2 = ee.Image("users/images/input/Barbados_2007-13_InputTOA"),
    input3 = ee.Image("users/images/input/PeurtoRico_2007-13_InputTOA"),
    prev = ee.Image("users/images/NA_2010_2010_combined_v4_asset_clean_CV2"),
    studyArea = /* color: #ffc82d */ee.Geometry.Polygon(
        [[[-62.28595733642578, 16.749317883631267],
          [-62.25059509277344, 16.675990927161475],
          [-62.10090637207031, 16.637507681577905],
          [-62.082366943359375, 16.708218799780873],
          [-62.108802795410156, 16.78416295702938],
          [-62.166481018066406, 16.85350534413403],
          [-62.233428955078125, 16.84923379806878],
          [-62.294883728027344, 16.777917611721726]]]),
    Cropclass = /* color: #00ffff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-62.21924006938934, 16.721859540490016]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21866071224213, 16.721846696560178]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21854269504547, 16.721081196779508]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.218971848487854, 16.722632743473046]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.23159700632095, 16.747650974519583]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.233061492443085, 16.749464283272104]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.234053909778595, 16.750078133172007]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21985697746277, 16.77262739715648]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18764364719391, 16.773074246215714]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.187461256980896, 16.77495408247758]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18740224838257, 16.77624324905794]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1871554851532, 16.777121520883668]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.186264991760254, 16.77409634528711]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.187520265579224, 16.775703957329217]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19087302684784, 16.77643328482632]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1905779838562, 16.777023935325673]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19083547592163, 16.776941757974832]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18683362007141, 16.773628953931397]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.188019156455994, 16.774805134380895]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18541741371155, 16.77450210168599]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18739688396454, 16.77877533166667]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18767046928406, 16.778266863424037]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18727886676788, 16.77818982266252]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18954801559448, 16.777812322479658]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19137191772461, 16.781143029503767]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19380736351013, 16.795153444353886]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.194992899894714, 16.778765059594424]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19765365123749, 16.778261727374236]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19711184501648, 16.777804618386487]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19716548919678, 16.7787599235581]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19512701034546, 16.77960736767442]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20640033483505, 16.782444993941056]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.203983664512634, 16.775852904721535]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20507800579071, 16.77824118317367]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.204949259757996, 16.775878585294627]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20516383647919, 16.77725505893443]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19991743564606, 16.778718835262456]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20961630344391, 16.783675046820058]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21287250518799, 16.780665383508758]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.213462591171265, 16.782093181945214]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.213730812072754, 16.78107626185623]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.216482758522034, 16.778218070945364]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.2133606672287, 16.78720337978013]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.213687896728516, 16.788209995507067]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.202948331832886, 16.698394807500485]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20133900642395, 16.698877798013694]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20152139663696, 16.69999792024751]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.204965353012085, 16.699001114544725]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20381736755371, 16.700337038527334]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20463275909424, 16.70068643248882]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20159649848938, 16.697387716970066]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20180034637451, 16.69647310974466]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20084547996521, 16.69781932784759]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19667196273804, 16.698620888318292]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19637155532837, 16.699658801365537]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19678997993469, 16.699761564726696]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.196006774902344, 16.69888807439432]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19827055931091, 16.702155935387253]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19903230667114, 16.70121052223244]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.202969789505005, 16.701405770984877]),
            {
              "class": 1,
              "system:index": "59"
            })]),
    NonCropClass = /* color: #bf04c2 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-62.19566345214844, 16.70871204129566]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.182016372680664, 16.71545288090585]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.179012298583984, 16.723426493440467]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1800422668457, 16.73181075731428]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1800422668457, 16.735427384740248]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17987060546875, 16.738304198448343]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19866752624512, 16.731481969599518]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20501899719238, 16.730495603052226]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20561981201172, 16.732797117055423]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20579147338867, 16.734030059552982]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19926834106445, 16.744222078615252]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20355987548828, 16.75129041669962]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18416213989258, 16.758851604092087]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.189998626708984, 16.737646644858934]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.196950912475586, 16.716932545531993]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.2060489654541, 16.708301006788517]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21428871154785, 16.706656859908925]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.222700119018555, 16.710191758192174]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.229652404785156, 16.71759017057096]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.22956657409668, 16.718329996029983]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.22681999206543, 16.722193482362286]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.22604751586914, 16.724577296587114]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.22664833068848, 16.734687625623362]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.22827911376953, 16.73657811543586]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.22132682800293, 16.731892954154347]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.22536087036133, 16.747920660342306]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21351623535156, 16.721042664830136]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21514701843262, 16.71446643144638]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.191715240478516, 16.708547627599017]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.2020109230957, 16.711424846842352]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.188711166381836, 16.691858900904542]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.168540954589844, 16.690214612472417]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17729568481445, 16.69333874839548]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.188968658447266, 16.695558498140073]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19858169555664, 16.691776686818983]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20287322998047, 16.69259882608273]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21137046813965, 16.701477704685466]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18270301818848, 16.700573393335922]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17763900756836, 16.703286314536903]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16888427734375, 16.71446643144638]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15266227722168, 16.717672373541436]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15343475341797, 16.7257280927884]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15163230895996, 16.734769821222606]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15231895446777, 16.742989202076327]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15309143066406, 16.752934178643017]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15695381164551, 16.756796963330984]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16236114501953, 16.76320736912478]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15798377990723, 16.74644123627216]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1701717376709, 16.745454947172902]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17669486999512, 16.743235778022587]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18605041503906, 16.748249419685727]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19265937805176, 16.752358863577502]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17592239379883, 16.75802975044999]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17437744140625, 16.765015393241892]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16459274291992, 16.71923422324993]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1551513671875, 16.69292768079772]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.164506912231445, 16.701477704685466]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15961456298828, 16.707067897956446]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.180728912353516, 16.68265070347137]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16708183288574, 16.679855270055953]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17257499694824, 16.71101381817754]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.174034118652344, 16.71717915518726]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17506408691406, 16.72096046331212]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17317581176758, 16.72909824170601]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19437599182129, 16.713068952648666]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17944145202637, 16.69909360189076]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.182960510253906, 16.75063290794781]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19437599182129, 16.76780957852472]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.207679748535156, 16.76863138991221]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.214696407318115, 16.765549578896444]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.217164039611816, 16.768097212914352]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20809280872345, 16.782031550579614]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20679461956024, 16.783330940971517]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.207234501838684, 16.78368531862685]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20712184906006, 16.780783511124657]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20835566520691, 16.78017232831897]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.205437421798706, 16.783351484621758]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20386564731598, 16.784388936070126]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20655858516693, 16.784388936070126]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20839858055115, 16.786176215375527]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20901548862457, 16.78642787116841]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.207942605018616, 16.787136614262636]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20880091190338, 16.78782481154786]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20560371875763, 16.787187972355103]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.203710079193115, 16.78927823493291]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.205941677093506, 16.790069139097863]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20990061759949, 16.790978161244592]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21078038215637, 16.790192396593127]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.210721373558044, 16.789879116969264]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.212690114974976, 16.789360406947544]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21281349658966, 16.790675154345866]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21227169036865, 16.790336196903134]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21075356006622, 16.79228262610041]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21074819564819, 16.79344841978535]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.209203243255615, 16.79366411651057]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20861852169037, 16.793427877227312]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.210925221443176, 16.79311460294178]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.210447788238525, 16.788826288216853]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21039950847626, 16.789622330006893]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21076428890228, 16.787490984817953]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.213414311409, 16.78641759950993]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.21457839012146, 16.78670520573765]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.192755937576294, 16.8143801308513]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19217658042908, 16.815294171583066]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.195996046066284, 16.81632117838388]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19828128814697, 16.815735785189226]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19638228416443, 16.816916839779118]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19557762145996, 16.818673002998835]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19058871269226, 16.81874489237463]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19397097826004, 16.82033415411115]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.194204330444336, 16.821599905540758]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19503045082092, 16.821846379480828]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.188260555267334, 16.818518954244595]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.195470333099365, 16.820757783826938]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19935417175293, 16.821815570255843]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19963312149048, 16.822667956965887]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.202197313308716, 16.82034699138918]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1985387802124, 16.818200586422446]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19757318496704, 16.815879566141327]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19554007053375, 16.81359959819906]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20458984375, 16.803298320258243]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20354378223419, 16.803698878906648]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.197734117507935, 16.802908031531008]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18904376029968, 16.80410970741116]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1900200843811, 16.804900549777805]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1888130903244, 16.80490568510707]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18728959560394, 16.80434593339843]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18694627285004, 16.80323669577573]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18688189983368, 16.80264099141297]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.186978459358215, 16.80225070133362]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18939781188965, 16.803015874549065]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.190996408462524, 16.80395564682621]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19039022922516, 16.804289444602144]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19843149185181, 16.81670630449983]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19407021999359, 16.82114803581809]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19462811946869, 16.82119424981646]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19565808773041, 16.821373970814093]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19276666641235, 16.820046598855473]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19230264425278, 16.82064481599531]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.192970514297485, 16.82081940261581]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19167768955231, 16.819848904364115]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19066381454468, 16.81699899982469]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18813180923462, 16.81700926982788]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18890428543091, 16.8151709303931]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19061017036438, 16.812788251641546]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18688726425171, 16.81380500184012]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19790577888489, 16.80958391232173]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19656467437744, 16.807396303419733]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19481587409973, 16.807940640387134]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19566345214844, 16.804962173719876]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.191082239151, 16.800710074760623]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18653321266174, 16.796663302722838]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.187230587005615, 16.794116051711637]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18636155128479, 16.791394152978956]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18331456184387, 16.794187950394434]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18153357505798, 16.795749172219615]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18016028404236, 16.7940338817551]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.180750370025635, 16.797618513039442]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18140482902527, 16.80079224182695]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18113660812378, 16.799066725962987]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17754244804382, 16.7922877617711]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.177242040634155, 16.78981235239245]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17742443084717, 16.789709637613054]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17789649963379, 16.79075732575601]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17861533164978, 16.79320190894216]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17844367027283, 16.79289376993807]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18330383300781, 16.7868027863231]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.183475494384766, 16.788600314455497]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18255281448364, 16.78428621835765]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18453764915466, 16.785220947494075]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18053579330444, 16.78273517414805]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17967748641968, 16.78292006750009]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18107223510742, 16.77962277571428]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17835783958435, 16.778451761124224]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17808961868286, 16.77586317695118]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.177467346191406, 16.77519548086915]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17405557632446, 16.781286836664943]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.174774408340454, 16.78264272740455]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17540740966797, 16.783618551872767]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17754244804382, 16.78317686352388]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17313289642334, 16.777506726544306]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17416286468506, 16.775852904721535]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.171512842178345, 16.778831828054084]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17186689376831, 16.774414787091]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17339038848877, 16.77357245599736]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.176276445388794, 16.77152824672532]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.177263498306274, 16.77002846111946]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.172789573669434, 16.76749112565728]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.170021533966064, 16.769751102211167]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.170021533966064, 16.772267862668116]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1690559387207, 16.7702030942986]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.168487310409546, 16.771168710158243]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1687126159668, 16.77276093836468]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16945290565491, 16.77451751013975]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.169731855392456, 16.77449696553445]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16834783554077, 16.76869302562308]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16744661331177, 16.76770685185156]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16545104980469, 16.76388538018275]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1697211265564, 16.76349501047484]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16841220855713, 16.759961100877753]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.22274303436279, 16.745126183004604]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.2290301322937, 16.744242626489946]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.220661640167236, 16.745434399429005]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.22574710845947, 16.742660433651405]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.210447788238525, 16.753160194800135]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20229387283325, 16.757906472097496]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.199440002441406, 16.75655040494878]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20004081726074, 16.76170751789526]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19928979873657, 16.764029200399502]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19860315322876, 16.76651521838743]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.202465534210205, 16.762981364901723]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20186471939087, 16.76310463996578]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.2020109230957, 16.764357931915118]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19504117965698, 16.759036520672343]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19092130661011, 16.761563695923133]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.194998264312744, 16.77173369588695]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.20008373260498, 16.770418817416065]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.187509536743164, 16.763022456598613]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18703746795654, 16.760351477837645]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19055652618408, 16.75870777996098]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19233751296997, 16.758646141014374]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.183969020843506, 16.752667068293135]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17845439910889, 16.747735732962163]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.180471420288086, 16.746153569145903]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.182981967926025, 16.745475494914572]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18517065048218, 16.744817966081364]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18341112136841, 16.74107822766922]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18787431716919, 16.741139872304196]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1781325340271, 16.734256098145593]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18263864517212, 16.73353688351116]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.185256481170654, 16.72539929458248]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.164742946624756, 16.739824782431306]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16214656829834, 16.74206453943473]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16145992279053, 16.744283722232687]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.160279750823975, 16.751578076064398]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15821981430054, 16.744509748659272]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15688943862915, 16.742537145345736]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15618133544922, 16.739311072983806]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.157511711120605, 16.736865797023896]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.160000801086426, 16.735530128834892]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15656757354736, 16.731235378441237]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.151997089385986, 16.73131757552944]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15287685394287, 16.73300260802561]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.154765129089355, 16.727289876523194]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.157018184661865, 16.72691998153169]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15813398361206, 16.729118791211793]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.1601939201355, 16.72998186845392]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17069208621979, 16.722522286095973]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.17081546783447, 16.7196966105128]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.170997858047485, 16.71858687919882]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16918468475342, 16.717723750379992]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16541886329651, 16.716696210979876]),
            {
              "class": 2,
              "system:index": "251"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var input=ee.ImageCollection([input1,input2,input3]).mosaic()
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw"); 


function radians(img) {return img.toFloat().multiply(Math.PI).divide(180).divide(1.5708).toFloat();}
var terrain = ee.Algorithms.Terrain(ee.Image('USGS/SRTMGL1_003'));
var slope = radians(terrain.select('slope'));
var elevation = terrain.select('elevation').divide(4000.00).float();
print(input)
//var data_input=ee.ImageCollection([input,input2,input3]).mosaic()
//data_input=data_input.select(ee.List.sequence(0,43)).addBands(slope).addBands(elevation);

//visual parameters for FCC display 
var vizParams = {
  bands: ['B4_2', 'B3_2', 'B2_2'],
  min: 0,
  max: 1,
  gamma: [1.5,1.6, 1.7]
};

//var FCC=ee.ImageCollection([CarIS, Barbados,PeurtoRico]).mosaic()
//add all max val to map
input=input.clip(studyArea)
Map.addLayer(input,vizParams,'FCC');

//print(countries)

//throw('stop')
//Map.addLayer(maxNDVI, {min:0, max:1


//throw('stop')

//create bounds for training samples inside area of interest
function buffer(geometry) {
  return geometry.buffer(45).bounds();
} 

//buffer function of 1km********************************************************
function buffer1(geometry) {
  return geometry.buffer(10000);
}

function buffer2(geometry) {
  return geometry.buffer(10000);
}

//var studyArea = zones.filterMetadata('name','equals','CarIS');

//var region= ee.FeatureCollection(countries.filterMetadata('Country','equals','CarIS'))
  //          .merge(ee.FeatureCollection(countries.filterMetadata('Country','equals','Dominican Republic')))
  //          .merge(ee.FeatureCollection(countries.filterMetadata('Country','equals','United States')))
//var region = Islands.map(buffer2)
//var studyArea = region
//region=region.merge(Islands)
//print(region)
//Map.addLayer(region)
//throw('stop')

//studyArea=buffer1(studyArea.geometry());

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

//input=ee.ImageCollection([input,input2]).mosaic();



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

classified = classified.updateMask(classified.eq(1)).clip(studyArea);

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'CarIS_monserrat_v3',
  assetId: 'CarIS_monserrat_v3',
  region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'CarIS_monserrat_v3',
  fileNamePrefix: 'CarIS_monserrat_v3',
  region: studyArea, 
});
 

Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_CarIS_monserrat_v1',
  folder: 'data',
  fileNamePrefix: 'RFtable_CarIS_monserrat_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');


Map.addLayer(prev,{palette: 'ffff00'},'Prev_crop')

