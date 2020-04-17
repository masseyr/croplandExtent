/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var CarIS = ee.Image("users/images/RHseg/CarIs_2007-13_RHsegTOA"),
    input = ee.Image("users/images/input/CarIs_2007-13_InputTOA"),
    Barbados = ee.Image("users/images/RHseg/Barbados_2007-13_RHsegTOA"),
    input2 = ee.Image("users/images/input/Barbados_2007-13_InputTOA"),
    PeurtoRico = ee.Image("users/images/RHseg/PeurtoRico_2007-13_RHsegTOA"),
    Cropclass = /* color: #0b4a8b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-63.053412437438965, 18.217896978281956]),
            {
              "class": 1,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05555820465088, 18.218956843962786]),
            {
              "class": 1,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.03384304046631, 18.245695934095448]),
            {
              "class": 1,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.010239601135254, 18.22674258246203]),
            {
              "class": 1,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.15582990646362, 18.17040022550748]),
            {
              "class": 1,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.73689842224121, 17.051286818248865]),
            {
              "class": 1,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.76736831665039, 17.0902602042331]),
            {
              "class": 1,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.789469718933105, 17.08537872094652]),
            {
              "class": 1,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.776123046875, 17.055266579155667]),
            {
              "class": 1,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.757283210754395, 17.05288693849686]),
            {
              "class": 1,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.76206827163696, 17.075287182195428]),
            {
              "class": 1,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.7556095123291, 17.098628163797457]),
            {
              "class": 1,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.71501159667969, 17.08710161199903]),
            {
              "class": 1,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.71393871307373, 17.076517886891068]),
            {
              "class": 1,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.86225414276123, 17.072456530580244]),
            {
              "class": 1,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.82002544403076, 17.057974409230457]),
            {
              "class": 1,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.81174278259277, 17.060477065746248]),
            {
              "class": 1,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.768741607666016, 17.06745150523253]),
            {
              "class": 1,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.76345229148865, 17.067523299577942]),
            {
              "class": 1,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.733036041259766, 17.087552842738365]),
            {
              "class": 1,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.83899402618408, 17.077215282613988]),
            {
              "class": 1,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.83998107910156, 17.090793467769913]),
            {
              "class": 1,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.530277252197266, 13.145015081626028]),
            {
              "class": 1,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.5374870300293, 13.188139453567938]),
            {
              "class": 1,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.56083297729492, 13.173598362847256]),
            {
              "class": 1,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.620914459228516, 13.168918287793474]),
            {
              "class": 1,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.5404052734375, 13.092018556811503]),
            {
              "class": 1,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.50118064880371, 13.11442226703837]),
            {
              "class": 1,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.48324203491211, 13.165073873513027]),
            {
              "class": 1,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.51748847961426, 13.205520772094713]),
            {
              "class": 1,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.61001396179199, 13.270188452901058]),
            {
              "class": 1,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.61190223693848, 13.319220817873154]),
            {
              "class": 1,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.57937240600586, 13.3017640939221]),
            {
              "class": 1,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.62778091430664, 13.23643640496749]),
            {
              "class": 1,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.61636543273926, 13.203682421885398]),
            {
              "class": 1,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.59525108337402, 13.18496388683676]),
            {
              "class": 1,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.58357810974121, 13.117097200598623]),
            {
              "class": 1,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.48444366455078, 13.138244869068107]),
            {
              "class": 1,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.45577621459961, 13.150447833140252]),
            {
              "class": 1,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.43500518798828, 13.15186868676088]),
            {
              "class": 1,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.75296211242676, 17.366613091400534]),
            {
              "class": 1,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.76755332946777, 17.381193923325224]),
            {
              "class": 1,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.81252861022949, 17.412071961818214]),
            {
              "class": 1,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.84677505493164, 17.37849082305723]),
            {
              "class": 1,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.85226821899414, 17.39544597357077]),
            {
              "class": 1,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.81038284301758, 17.335399658414822]),
            {
              "class": 1,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.78660774230957, 17.311228130293077]),
            {
              "class": 1,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.761030197143555, 17.299919679836353]),
            {
              "class": 1,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.747039794921875, 17.305492046679632]),
            {
              "class": 1,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.741546630859375, 17.35645497203806]),
            {
              "class": 1,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80858039855957, 17.403513452300547]),
            {
              "class": 1,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.82510280609131, 17.405970481694986]),
            {
              "class": 1,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.83111095428467, 17.39442215640276]),
            {
              "class": 1,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.55417823791504, 17.11364032535911]),
            {
              "class": 1,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.545037269592285, 17.139929198285042]),
            {
              "class": 1,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.54409313201904, 17.14919708746203]),
            {
              "class": 1,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.55194664001465, 17.178187009373318]),
            {
              "class": 1,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.56168842315674, 17.191675823737068]),
            {
              "class": 1,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.58769512176514, 17.190158893632027]),
            {
              "class": 1,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.62073993682861, 17.168100506656998]),
            {
              "class": 1,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.4655876159668, 16.498969981292923]),
            {
              "class": 1,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.45151138305664, 16.445799081576]),
            {
              "class": 1,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.50738716125488, 16.45534787171703]),
            {
              "class": 1,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.46206855773926, 16.403976435948344]),
            {
              "class": 1,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.493825912475586, 16.420360788505032]),
            {
              "class": 1,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.46902084350586, 16.485308264047706]),
            {
              "class": 1,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.41786575317383, 16.445387485231464]),
            {
              "class": 1,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.43674850463867, 16.400847608720138]),
            {
              "class": 1,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44284248352051, 16.340401983526597]),
            {
              "class": 1,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32868766784668, 16.260163257403818]),
            {
              "class": 1,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.29950523376465, 16.286363907183823]),
            {
              "class": 1,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.250667572021484, 16.273099235448647]),
            {
              "class": 1,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.23873710632324, 16.256455335888237]),
            {
              "class": 1,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.30843162536621, 16.319068610594943]),
            {
              "class": 1,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.33091926574707, 16.28677583915084]),
            {
              "class": 1,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.42825126647949, 16.420031468378145]),
            {
              "class": 1,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.511335372924805, 16.423077658266514]),
            {
              "class": 1,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.477861404418945, 16.38446161347155]),
            {
              "class": 1,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.50949001312256, 16.28207976343716]),
            {
              "class": 1,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.505069732666016, 16.30135767314838]),
            {
              "class": 1,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.601200103759766, 16.225388446091717]),
            {
              "class": 1,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.619224548339844, 16.27136899476706]),
            {
              "class": 1,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.684885025024414, 16.311902052133686]),
            {
              "class": 1,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.646690368652344, 16.316350291721644]),
            {
              "class": 1,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.72865867614746, 16.324999357066012]),
            {
              "class": 1,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.74367904663086, 16.35802702912749]),
            {
              "class": 1,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.665143966674805, 16.24599038003269]),
            {
              "class": 1,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.6347599029541, 16.247226427456035]),
            {
              "class": 1,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.62411689758301, 16.14398975317031]),
            {
              "class": 1,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.63583278656006, 16.15924168228226]),
            {
              "class": 1,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.66471481323242, 16.170329508526905]),
            {
              "class": 1,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.57218933105469, 16.277630745898033]),
            {
              "class": 1,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.61888122558594, 16.065279389389726]),
            {
              "class": 1,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.57854080200195, 16.037069660057824]),
            {
              "class": 1,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.72222137451172, 16.009350949747898]),
            {
              "class": 1,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.613731384277344, 15.991777274017917]),
            {
              "class": 1,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.59257411956787, 16.01013471617375]),
            {
              "class": 1,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.575751304626465, 16.030759042329755]),
            {
              "class": 1,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.579484939575195, 16.122923670115412]),
            {
              "class": 1,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.58793926239014, 16.14320651426422]),
            {
              "class": 1,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.40275955200195, 16.340237255973875]),
            {
              "class": 1,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.401987075805664, 16.297815293465483]),
            {
              "class": 1,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32697105407715, 16.30111053245801]),
            {
              "class": 1,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.470909118652344, 16.345755553395826]),
            {
              "class": 1,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.25410079956055, 15.897694757580307]),
            {
              "class": 1,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.264872550964355, 15.96417606008668]),
            {
              "class": 1,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.24251365661621, 15.976677529986398]),
            {
              "class": 1,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.3141393661499, 15.948950443940062]),
            {
              "class": 1,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.28654479980469, 15.908673323941045]),
            {
              "class": 1,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.28997802734375, 15.892081424472694]),
            {
              "class": 1,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.29770278930664, 15.875694549265548]),
            {
              "class": 1,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.219682693481445, 15.917876697664326]),
            {
              "class": 1,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.26298427581787, 15.949775710235684]),
            {
              "class": 1,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.24120473861694, 15.933331638992549]),
            {
              "class": 1,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32240056991577, 15.900769642040116]),
            {
              "class": 1,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.30317449569702, 15.885683684794767]),
            {
              "class": 1,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.26922845840454, 15.352190057330562]),
            {
              "class": 1,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.250388622283936, 15.341285093394118]),
            {
              "class": 1,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.266374588012695, 15.42912936129007]),
            {
              "class": 1,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.25822067260742, 15.433969441219256]),
            {
              "class": 1,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.27146005630493, 15.378715502570481]),
            {
              "class": 1,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.37919902801514, 15.461642601076628]),
            {
              "class": 1,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.41777992248535, 15.52057534238807]),
            {
              "class": 1,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.31474018096924, 15.520761419155818]),
            {
              "class": 1,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.33872985839844, 15.230630697593723]),
            {
              "class": 1,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32419228553772, 15.235920502305287]),
            {
              "class": 1,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17058753967285, 14.756457341526813]),
            {
              "class": 1,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.10037803649902, 14.848152700006956]),
            {
              "class": 1,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.12089157104492, 14.861177759227944]),
            {
              "class": 1,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.13222122192383, 14.849480130513028]),
            {
              "class": 1,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.14535331726074, 14.87071790922756]),
            {
              "class": 1,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.16981506347656, 14.865242744260629]),
            {
              "class": 1,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.10990524291992, 14.832886663338716]),
            {
              "class": 1,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00313186645508, 14.791314443507805]),
            {
              "class": 1,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.04759216308594, 14.826082973833833]),
            {
              "class": 1,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.0151481628418, 14.77322264576157]),
            {
              "class": 1,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00682258605957, 14.741018839380216]),
            {
              "class": 1,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.97884178161621, 14.721511639948067]),
            {
              "class": 1,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.958242416381836, 14.71760999057139]),
            {
              "class": 1,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.92884540557861, 14.751726304028667]),
            {
              "class": 1,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.92395305633545, 14.757121338556257]),
            {
              "class": 1,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.924339294433594, 14.691541862357226]),
            {
              "class": 1,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.92039108276367, 14.623741881728625]),
            {
              "class": 1,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00029945373535, 14.57128944179022]),
            {
              "class": 1,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.99034309387207, 14.58806893782763]),
            {
              "class": 1,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.98244667053223, 14.627022339021659]),
            {
              "class": 1,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.871124267578125, 14.484214946451635]),
            {
              "class": 1,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.83001136779785, 14.529667458513641]),
            {
              "class": 1,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.886831283569336, 14.42088166450851]),
            {
              "class": 1,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.85357189178467, 14.440498624950727]),
            {
              "class": 1,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.850181579589844, 14.465349832565336]),
            {
              "class": 1,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.83696365356445, 14.502829168886352]),
            {
              "class": 1,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.8512544631958, 14.522355801321401]),
            {
              "class": 1,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.02785110473633, 13.952310254275394]),
            {
              "class": 1,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00682258605957, 13.952560149353216]),
            {
              "class": 1,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.01132869720459, 13.979318179317977]),
            {
              "class": 1,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.999999046325684, 13.983919830670219]),
            {
              "class": 1,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.91927528381348, 14.007946867432896]),
            {
              "class": 1,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.91086387634277, 14.0272249772915]),
            {
              "class": 1,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.91193675994873, 14.0419635190699]),
            {
              "class": 1,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.91378211975098, 14.057783497414176]),
            {
              "class": 1,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.952534675598145, 13.750098495034333]),
            {
              "class": 1,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95189094543457, 13.743178606146403]),
            {
              "class": 1,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.1238956451416, 13.290445785068808]),
            {
              "class": 1,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.12024784088135, 13.319721949258696]),
            {
              "class": 1,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.13612651824951, 13.365758963296864]),
            {
              "class": 1,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.223416328430176, 13.313102755222202]),
            {
              "class": 1,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.26871347427368, 13.229000299959136]),
            {
              "class": 1,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.183719635009766, 13.205499881829148]),
            {
              "class": 1,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.157283782958984, 13.212811365595348]),
            {
              "class": 1,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.12174987792969, 13.277163848808526]),
            {
              "class": 1,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.12011909484863, 13.243872282975067]),
            {
              "class": 1,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.43299341201782, 12.496603282529652]),
            {
              "class": 1,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.437950134277344, 12.467021158782414]),
            {
              "class": 1,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.46035194396973, 12.475066490258351]),
            {
              "class": 1,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44829273223877, 12.460169859278531]),
            {
              "class": 1,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.45983695983887, 12.457425098285421]),
            {
              "class": 1,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.4884614944458, 12.450028765684047]),
            {
              "class": 1,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.38977766036987, 12.515289395728605]),
            {
              "class": 1,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.38331890106201, 12.523448434665346]),
            {
              "class": 1,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.38190269470215, 12.535440391844151]),
            {
              "class": 1,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.62102699279785, 12.203357451121347]),
            {
              "class": 1,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.746307611465454, 12.029226244383983]),
            {
              "class": 1,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.75961136817932, 12.022216664678208]),
            {
              "class": 1,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05403470993042, 18.220224661590507]),
            {
              "class": 1,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05172801017761, 18.219264643288636]),
            {
              "class": 1,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.00485372543335, 18.24288414925038]),
            {
              "class": 1,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.01130175590515, 18.247481142906658]),
            {
              "class": 1,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.997204065322876, 18.253869725294685]),
            {
              "class": 1,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.99458622932434, 18.234693083534562]),
            {
              "class": 1,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05248439311981, 18.208792074593593]),
            {
              "class": 1,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.114309310913086, 18.18427983946428]),
            {
              "class": 1,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.1193733215332, 18.17726690527023]),
            {
              "class": 1,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.12246322631836, 18.181262681397612]),
            {
              "class": 1,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.14460754394531, 18.16544213385631]),
            {
              "class": 1,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.12443733215332, 18.171640044974048]),
            {
              "class": 1,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.14409255981445, 18.179305577993464]),
            {
              "class": 1,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.145036697387695, 18.17840028282745]),
            {
              "class": 1,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.15758943557739, 18.165144274342815]),
            {
              "class": 1,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.15733194351196, 18.16803938356924]),
            {
              "class": 1,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.828680872917175, 17.89222798302033]),
            {
              "class": 1,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80335545539856, 17.89454462893219]),
            {
              "class": 1,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.809427976608276, 17.892288245630315]),
            {
              "class": 1,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80560851097107, 17.894462950399117]),
            {
              "class": 1,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.81628370285034, 17.342654656865125]),
            {
              "class": 1,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.82750606536865, 17.34036063745672]),
            {
              "class": 1,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.819416522979736, 17.3486763213388]),
            {
              "class": 1,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.809717655181885, 17.339254582137578]),
            {
              "class": 1,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.81491041183472, 17.397292989233183]),
            {
              "class": 1,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.81012535095215, 17.40007771480409]),
            {
              "class": 1,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.800233364105225, 17.399197254686406]),
            {
              "class": 1,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.792980670928955, 17.390576711922012]),
            {
              "class": 1,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.76738166809082, 17.37691815580221]),
            {
              "class": 1,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.76094436645508, 17.372597170978313]),
            {
              "class": 1,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.751545906066895, 17.374174035075214]),
            {
              "class": 1,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.76515007019043, 17.364917443982574]),
            {
              "class": 1,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.74744749069214, 17.352629211279783]),
            {
              "class": 1,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.73871421813965, 17.34216308369208]),
            {
              "class": 1,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.5925874710083, 17.185698355303632]),
            {
              "class": 1,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.60026931762695, 17.166072921404837]),
            {
              "class": 1,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.55439281463623, 17.118365342381203]),
            {
              "class": 1,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.562503814697266, 17.108398639591883]),
            {
              "class": 1,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.55134582519531, 17.133868040880284]),
            {
              "class": 1,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.54495143890381, 17.13550846243947]),
            {
              "class": 1,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.54748344421387, 17.17532525062579]),
            {
              "class": 1,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.598702907562256, 17.11304976990275]),
            {
              "class": 1,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.615697383880615, 17.11123275070734]),
            {
              "class": 1,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.70023798942566, 17.04451796887948]),
            {
              "class": 1,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.82832956314087, 17.02094765168886]),
            {
              "class": 1,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.88229560852051, 17.042161832171537]),
            {
              "class": 1,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.875107288360596, 17.049752395193735]),
            {
              "class": 1,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.86283349990845, 17.066327471411064]),
            {
              "class": 1,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.87034368515015, 17.075024694908883]),
            {
              "class": 1,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.67724609375, 16.2508031959066]),
            {
              "class": 1,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.68102264404297, 16.30551010499493]),
            {
              "class": 1,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.60901069641113, 16.218152792764887]),
            {
              "class": 1,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.609954833984375, 16.177435540297065]),
            {
              "class": 1,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.63124084472656, 16.17908417526195]),
            {
              "class": 1,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.66256904602051, 16.20125697758698]),
            {
              "class": 1,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.73895835876465, 16.333829503823896]),
            {
              "class": 1,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.74513816833496, 16.348901994161366]),
            {
              "class": 1,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.71612739562988, 16.331770330201086]),
            {
              "class": 1,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.699562072753906, 16.322297852267184]),
            {
              "class": 1,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.67278289794922, 16.298326316580415]),
            {
              "class": 1,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.64608955383301, 16.28456813115749]),
            {
              "class": 1,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.6688346862793, 16.266194917697128]),
            {
              "class": 1,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.67647361755371, 16.23867307766439]),
            {
              "class": 1,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.5809440612793, 16.26364065770059]),
            {
              "class": 1,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.43932342529297, 16.33201743218121]),
            {
              "class": 1,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.41014099121094, 16.318755851396734]),
            {
              "class": 1,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.42275810241699, 16.37089091804106]),
            {
              "class": 1,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.42996788024902, 16.38859555337289]),
            {
              "class": 1,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.4534854888916, 16.428939638515306]),
            {
              "class": 1,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.42533302307129, 16.45602311184916]),
            {
              "class": 1,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.28873348236084, 16.30787396557717]),
            {
              "class": 1,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.29354000091553, 16.316235096977184]),
            {
              "class": 1,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.377525329589844, 16.314175738151167]),
            {
              "class": 1,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.361775398254395, 16.311169035360372]),
            {
              "class": 1,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.34237766265869, 16.284436182808168]),
            {
              "class": 1,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.35911464691162, 16.251643302168066]),
            {
              "class": 1,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.314353942871094, 16.26478583029031]),
            {
              "class": 1,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.37520790100098, 16.242826191980008]),
            {
              "class": 1,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.36945724487305, 16.279451688449683]),
            {
              "class": 1,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.37911319732666, 16.2953933861969]),
            {
              "class": 1,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.38168811798096, 16.324884167413217]),
            {
              "class": 1,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.426663398742676, 16.3205184939284]),
            {
              "class": 1,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.41460418701172, 16.356594152765076]),
            {
              "class": 1,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.4436149597168, 16.384758184442664]),
            {
              "class": 1,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.505069732666016, 16.40645488941294]),
            {
              "class": 1,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.59562110900879, 16.0799768164342]),
            {
              "class": 1,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.611328125, 16.119147461675656]),
            {
              "class": 1,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.58931255340576, 16.045665235210596]),
            {
              "class": 1,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.73243522644043, 16.00804767343661]),
            {
              "class": 1,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.56343460083008, 16.06257432591349]),
            {
              "class": 1,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.56746864318848, 16.084793031937792]),
            {
              "class": 1,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.568498611450195, 16.050894705313794]),
            {
              "class": 1,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.594719886779785, 16.026477736468998]),
            {
              "class": 1,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.65171146392822, 15.985927418801268]),
            {
              "class": 1,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.27143859863281, 15.947729301486131]),
            {
              "class": 1,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.24302864074707, 15.950782788409724]),
            {
              "class": 1,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.31546974182129, 15.960108014564796]),
            {
              "class": 1,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.31516933441162, 15.89559396794465]),
            {
              "class": 1,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32012605667114, 15.909564854720342]),
            {
              "class": 1,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.27804756164551, 15.86856163703919]),
            {
              "class": 1,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.98313331604004, 14.60760490012921]),
            {
              "class": 1,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.98519325256348, 14.656602633567513]),
            {
              "class": 1,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00635051727295, 14.661576407395916]),
            {
              "class": 1,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.998497009277344, 14.665645125986362]),
            {
              "class": 1,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00665092468262, 14.691301220983101]),
            {
              "class": 1,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.000685691833496, 14.700848837104608]),
            {
              "class": 1,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.98905563354492, 14.71375821073704]),
            {
              "class": 1,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.97579479217529, 14.733183095416809]),
            {
              "class": 1,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00351810455322, 14.77750519033372]),
            {
              "class": 1,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.99343299865723, 14.762773660878318]),
            {
              "class": 1,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.03927731513977, 14.766626681204231]),
            {
              "class": 1,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.037442684173584, 14.739184439365198]),
            {
              "class": 1,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.02705717086792, 14.726650121103168]),
            {
              "class": 1,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.02609157562256, 14.736061303344584]),
            {
              "class": 1,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.038408279418945, 14.7246578451795]),
            {
              "class": 1,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.13217830657959, 14.686647579824534]),
            {
              "class": 1,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.14588975906372, 14.678448575949394]),
            {
              "class": 1,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.166274547576904, 14.690051632875587]),
            {
              "class": 1,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.15638256072998, 14.699786101697429]),
            {
              "class": 1,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17011547088623, 14.708129586809534]),
            {
              "class": 1,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17638111114502, 14.715787878245415]),
            {
              "class": 1,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17084503173828, 14.730522587760465]),
            {
              "class": 1,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.15706920623779, 14.74131357406203]),
            {
              "class": 1,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17056608200073, 14.738761139032388]),
            {
              "class": 1,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.16912841796875, 14.77393230262442]),
            {
              "class": 1,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.14432334899902, 14.767103906954715]),
            {
              "class": 1,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.133058071136475, 14.7576857992808]),
            {
              "class": 1,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.18856906890869, 14.764284142464682]),
            {
              "class": 1,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.129281520843506, 14.784243948497313]),
            {
              "class": 1,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.11846685409546, 14.791194177969956]),
            {
              "class": 1,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.12200736999512, 14.799720871818836]),
            {
              "class": 1,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.123788356781006, 14.822083696972085]),
            {
              "class": 1,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.130826473236084, 14.829240143129187]),
            {
              "class": 1,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.120805740356445, 14.84931841517221]),
            {
              "class": 1,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.10818862915039, 14.85908723050885]),
            {
              "class": 1,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.106815338134766, 14.865309175539155]),
            {
              "class": 1,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.09428405761719, 14.855291756006217]),
            {
              "class": 1,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.08325481414795, 14.845958338388845]),
            {
              "class": 1,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.073899269104004, 14.838470572008866]),
            {
              "class": 1,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.06570243835449, 14.82868008196408]),
            {
              "class": 1,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.039395332336426, 14.827663670962528]),
            {
              "class": 1,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.03782892227173, 14.80476204406877]),
            {
              "class": 1,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.027400493621826, 14.801442766878257]),
            {
              "class": 1,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.05106830596924, 14.75852405803861]),
            {
              "class": 1,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.036423444747925, 14.765516608557741]),
            {
              "class": 1,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.946033000946045, 14.691753639519803]),
            {
              "class": 1,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.956547260284424, 14.696714290573208]),
            {
              "class": 1,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95716953277588, 14.713069111787005]),
            {
              "class": 1,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.97420692443848, 14.48409873249482]),
            {
              "class": 1,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.963778495788574, 14.492491950345887]),
            {
              "class": 1,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.01390361785889, 14.52668479374628]),
            {
              "class": 1,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.99763870239258, 14.523818281924285]),
            {
              "class": 1,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.99467754364014, 14.511520940177734]),
            {
              "class": 1,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.06033802032471, 14.472630258033105]),
            {
              "class": 1,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.07694625854492, 14.536696521699083]),
            {
              "class": 1,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.879385471343994, 14.51658530249212]),
            {
              "class": 1,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.887367725372314, 14.50819299740077]),
            {
              "class": 1,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.8657169342041, 14.490663751741403]),
            {
              "class": 1,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.846405029296875, 14.50765710727409]),
            {
              "class": 1,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.873870849609375, 14.440964221024162]),
            {
              "class": 1,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.96034526824951, 14.595760627006749]),
            {
              "class": 1,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.967726707458496, 14.61419933942612]),
            {
              "class": 1,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.929574966430664, 14.553520187953847]),
            {
              "class": 1,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.940046310424805, 14.524441439828884]),
            {
              "class": 1,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.944252010160156, 14.531296060876425]),
            {
              "class": 1,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90738773345947, 14.516215614131227]),
            {
              "class": 1,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.21689319610596, 14.817208880811274]),
            {
              "class": 1,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.20659351348877, 14.821482129849532]),
            {
              "class": 1,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.22279405593872, 14.818432781142706]),
            {
              "class": 1,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.218910217285156, 14.79440988046434]),
            {
              "class": 1,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.98957061767578, 14.605279312214714]),
            {
              "class": 1,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.975236892700195, 14.630776378144068]),
            {
              "class": 1,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.935325622558594, 14.611591565031775]),
            {
              "class": 1,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90798854827881, 14.59862620404558]),
            {
              "class": 1,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.8931827545166, 14.582553572322752]),
            {
              "class": 1,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.87421417236328, 14.581681380447648]),
            {
              "class": 1,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.87743282318115, 14.59646664220599]),
            {
              "class": 1,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.86494445800781, 14.583674956801056]),
            {
              "class": 1,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.86052417755127, 14.569221119500089]),
            {
              "class": 1,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.84880828857422, 14.55480787255295]),
            {
              "class": 1,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.8428430557251, 14.536073398339365]),
            {
              "class": 1,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.8512544631958, 14.501923553553938]),
            {
              "class": 1,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.84211349487305, 14.483890975548729]),
            {
              "class": 1,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.02107048034668, 13.94777890671748]),
            {
              "class": 1,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.998239517211914, 13.945196590999586]),
            {
              "class": 1,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.98231792449951, 13.982970487338514]),
            {
              "class": 1,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.912537574768066, 13.939323797664647]),
            {
              "class": 1,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.91948986053467, 13.934283905533396]),
            {
              "class": 1,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.92000484466553, 13.944696784619156]),
            {
              "class": 1,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.92700004577637, 13.933534160114432]),
            {
              "class": 1,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.983712673187256, 13.741411148813949]),
            {
              "class": 1,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.985450744628906, 13.737075659884662]),
            {
              "class": 1,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.03922367095947, 13.769323170639778]),
            {
              "class": 1,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.030426025390625, 13.764279589792526]),
            {
              "class": 1,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.067891120910645, 13.792701390451775]),
            {
              "class": 1,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.016950607299805, 13.956275354388497]),
            {
              "class": 1,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90597152709961, 14.028728083922676]),
            {
              "class": 1,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.921571254730225, 14.000372649018482]),
            {
              "class": 1,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93300819396973, 13.988879581602694]),
            {
              "class": 1,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.89953422546387, 13.907666453443394]),
            {
              "class": 1,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.896830558776855, 13.929827049774753]),
            {
              "class": 1,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.253671646118164, 13.198677156072558]),
            {
              "class": 1,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17341995239258, 13.217682846467582]),
            {
              "class": 1,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.14845395088196, 13.231550775080338]),
            {
              "class": 1,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.125032901763916, 13.244649342619605]),
            {
              "class": 1,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.1339807510376, 13.243291689542744]),
            {
              "class": 1,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.131577491760254, 13.228210787950198]),
            {
              "class": 1,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.132564544677734, 13.219353978636528]),
            {
              "class": 1,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.167497634887695, 13.140568559234286]),
            {
              "class": 1,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17013692855835, 13.149449116994305]),
            {
              "class": 1,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.19256019592285, 13.123140836757829]),
            {
              "class": 1,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.18361234664917, 13.128051651072926]),
            {
              "class": 1,
              "system:index": "395"
            })]),
    NonCropClass = /* color: #ffc82d */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-63.000755310058594, 18.22397073643381]),
            {
              "class": 2,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.99768686294556, 18.23108369375366]),
            {
              "class": 2,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.01478862762451, 18.257026198165065]),
            {
              "class": 2,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.04285526275635, 18.23789066421297]),
            {
              "class": 2,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.06150197982788, 18.232082337831798]),
            {
              "class": 2,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.060622215270996, 18.21914028159861]),
            {
              "class": 2,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.055429458618164, 18.21327018138004]),
            {
              "class": 2,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.051674365997314, 18.205769209790837]),
            {
              "class": 2,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.04152488708496, 18.21278099742836]),
            {
              "class": 2,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05332660675049, 18.2010886192926]),
            {
              "class": 2,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.07225227355957, 18.19427252870565]),
            {
              "class": 2,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.09396743774414, 18.192417496698642]),
            {
              "class": 2,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.127849102020264, 18.18758616685542]),
            {
              "class": 2,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.07817459106445, 18.068840258606144]),
            {
              "class": 2,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.0615234375, 18.05251991867159]),
            {
              "class": 2,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.04023742675781, 18.035218703938064]),
            {
              "class": 2,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.13619613647461, 18.067453088668177]),
            {
              "class": 2,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.095855712890625, 18.059905060268754]),
            {
              "class": 2,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.052382469177246, 18.088912196789764]),
            {
              "class": 2,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.03937911987305, 18.0989065128638]),
            {
              "class": 2,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.048391342163086, 18.100415809044698]),
            {
              "class": 2,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.026719093322754, 18.0876067746778]),
            {
              "class": 2,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.02405834197998, 18.11016473341613]),
            {
              "class": 2,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.031654357910156, 18.09193094821366]),
            {
              "class": 2,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.0450439453125, 18.024771863752452]),
            {
              "class": 2,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05070877075195, 18.06835067046735]),
            {
              "class": 2,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05826187133789, 18.06476031574868]),
            {
              "class": 2,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.03330659866333, 18.05443763720108]),
            {
              "class": 2,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.02502393722534, 18.047113471899312]),
            {
              "class": 2,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.04860591888428, 18.058579021791292]),
            {
              "class": 2,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.032941818237305, 18.08001881633871]),
            {
              "class": 2,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.83523082733154, 17.89968822690757]),
            {
              "class": 2,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.815704345703125, 17.909080735038163]),
            {
              "class": 2,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.84505844116211, 17.903608638609793]),
            {
              "class": 2,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.85574436187744, 17.915430605376716]),
            {
              "class": 2,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.851667404174805, 17.8955431140543]),
            {
              "class": 2,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.82885789871216, 17.883903609600004]),
            {
              "class": 2,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.81375169754028, 17.88651745950728]),
            {
              "class": 2,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80755043029785, 17.899708645942994]),
            {
              "class": 2,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.79817342758179, 17.90413952103273]),
            {
              "class": 2,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.79064178466797, 17.907539172719343]),
            {
              "class": 2,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.81011199951172, 17.673955794369114]),
            {
              "class": 2,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.7512321472168, 17.619973267644575]),
            {
              "class": 2,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.788997650146484, 17.63616972425169]),
            {
              "class": 2,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.809940338134766, 17.596575818797067]),
            {
              "class": 2,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.85371398925781, 17.594121365260545]),
            {
              "class": 2,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.82384490966797, 17.640259508422215]),
            {
              "class": 2,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.85028076171875, 17.70568341764357]),
            {
              "class": 2,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.81079864501953, 17.700613915934063]),
            {
              "class": 2,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.754493713378906, 17.564992638980392]),
            {
              "class": 2,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.83809280395508, 17.12438599243063]),
            {
              "class": 2,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.803245544433594, 17.155061043893348]),
            {
              "class": 2,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.85534477233887, 17.044229714165247]),
            {
              "class": 2,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.81105613708496, 17.022892662899803]),
            {
              "class": 2,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.774492263793945, 17.02281059261932]),
            {
              "class": 2,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.78693771362305, 17.06749253057614]),
            {
              "class": 2,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.76736831665039, 17.07631277000573]),
            {
              "class": 2,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.74363613128662, 17.069174561898926]),
            {
              "class": 2,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.731319427490234, 17.078322905755194]),
            {
              "class": 2,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.705055236816406, 17.062200186797824]),
            {
              "class": 2,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.68600082397461, 17.05436396040581]),
            {
              "class": 2,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.66879177093506, 17.070692479589678]),
            {
              "class": 2,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.71089172363281, 17.037254407569534]),
            {
              "class": 2,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.725096702575684, 17.05805646407432]),
            {
              "class": 2,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.83461666107178, 17.106339479955313]),
            {
              "class": 2,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.85345649719238, 17.102935055277257]),
            {
              "class": 2,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.84234142303467, 17.114870776719098]),
            {
              "class": 2,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.794490814208984, 17.136033266123185]),
            {
              "class": 2,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.83002471923828, 17.16596833014328]),
            {
              "class": 2,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.818180084228516, 17.125698397775615]),
            {
              "class": 2,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.80230140686035, 17.080907334168266]),
            {
              "class": 2,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.75234794616699, 17.004015550842194]),
            {
              "class": 2,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.70771598815918, 17.04496826080024]),
            {
              "class": 2,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.7072868347168, 17.087716926372728]),
            {
              "class": 2,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.68780326843262, 17.092639368228866]),
            {
              "class": 2,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.74290657043457, 17.10297607281253]),
            {
              "class": 2,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.7775821685791, 17.10699574743524]),
            {
              "class": 2,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.82873725891113, 17.044804139578016]),
            {
              "class": 2,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.82178497314453, 17.05419984743715]),
            {
              "class": 2,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.444875717163086, 13.12679359077288]),
            {
              "class": 2,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.48967933654785, 13.07755537795539]),
            {
              "class": 2,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.53697204589844, 13.079812692960521]),
            {
              "class": 2,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.58812713623047, 13.093439748240561]),
            {
              "class": 2,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.617652893066406, 13.111496525143124]),
            {
              "class": 2,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.607181549072266, 13.140919543260983]),
            {
              "class": 2,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.604434967041016, 13.17485193918756]),
            {
              "class": 2,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.610443115234375, 13.198083724643936]),
            {
              "class": 2,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.621429443359375, 13.242368415853583]),
            {
              "class": 2,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.619455337524414, 13.264591283806658]),
            {
              "class": 2,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.64554786682129, 13.287480384348594]),
            {
              "class": 2,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.62477684020996, 13.319888992823287]),
            {
              "class": 2,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.57988739013672, 13.252059840966892]),
            {
              "class": 2,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.57456588745117, 13.21345894359914]),
            {
              "class": 2,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.540748596191406, 13.20911387117564]),
            {
              "class": 2,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.50375556945801, 13.192568464605499]),
            {
              "class": 2,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.51216697692871, 13.054563030428639]),
            {
              "class": 2,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.46950912475586, 13.103889433377018]),
            {
              "class": 2,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-59.47577476501465, 13.116512061368711]),
            {
              "class": 2,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.778968811035156, 17.38168539181269]),
            {
              "class": 2,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.79501914978027, 17.364892804340364]),
            {
              "class": 2,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.8223991394043, 17.388401995537407]),
            {
              "class": 2,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.813472747802734, 17.351949174349176]),
            {
              "class": 2,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.77853965759277, 17.330155936073112]),
            {
              "class": 2,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.78592109680176, 17.349491419850164]),
            {
              "class": 2,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.73536682128906, 17.316472392972454]),
            {
              "class": 2,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.7238655090332, 17.2965597888413]),
            {
              "class": 2,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.71665573120117, 17.309998984584183]),
            {
              "class": 2,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.71021842956543, 17.296231991312766]),
            {
              "class": 2,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.6969575881958, 17.297420254575155]),
            {
              "class": 2,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.68425464630127, 17.292892520713572]),
            {
              "class": 2,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.68423318862915, 17.285926558801222]),
            {
              "class": 2,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.669856548309326, 17.273428143041567]),
            {
              "class": 2,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.66249656677246, 17.269801394827578]),
            {
              "class": 2,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.65831232070923, 17.26357223699404]),
            {
              "class": 2,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.661112546920776, 17.263172662120155]),
            {
              "class": 2,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.658162117004395, 17.25843917080551]),
            {
              "class": 2,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.65096843242645, 17.249412414509845]),
            {
              "class": 2,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.64857590198517, 17.25135919839864]),
            {
              "class": 2,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.62739181518555, 17.24844926120208]),
            {
              "class": 2,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.6335072517395, 17.23728041431155]),
            {
              "class": 2,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.64254093170166, 17.226397823840873]),
            {
              "class": 2,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.65320539474487, 17.230332845802195]),
            {
              "class": 2,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.661123275756836, 17.228324355480407]),
            {
              "class": 2,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.65275478363037, 17.256420740373386]),
            {
              "class": 2,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.68251657485962, 17.2783251643623]),
            {
              "class": 2,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.67758131027222, 17.282853256515516]),
            {
              "class": 2,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.72073268890381, 17.33677201014068]),
            {
              "class": 2,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.716344594955444, 17.328496758361]),
            {
              "class": 2,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.710829973220825, 17.333965842965213]),
            {
              "class": 2,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.71402716636658, 17.333126031572522]),
            {
              "class": 2,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.83527374267578, 17.405520028778632]),
            {
              "class": 2,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.850379943847656, 17.361779862889495]),
            {
              "class": 2,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.76060104370117, 17.294920795358912]),
            {
              "class": 2,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.603960037231445, 17.14899205066907]),
            {
              "class": 2,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.568254470825195, 17.17958103568713]),
            {
              "class": 2,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.601985931396484, 17.195980557719075]),
            {
              "class": 2,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.55812644958496, 17.131686129611804]),
            {
              "class": 2,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.61777877807617, 17.139314056532605]),
            {
              "class": 2,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.621941566467285, 17.16338508345441]),
            {
              "class": 2,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.573490142822266, 17.136976499298974]),
            {
              "class": 2,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.583489418029785, 17.148828021071708]),
            {
              "class": 2,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.5980806350708, 17.100145841683844]),
            {
              "class": 2,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.57911205291748, 17.11236885040631]),
            {
              "class": 2,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.210984230041504, 16.78901117563978]),
            {
              "class": 2,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18034267425537, 16.782396202535274]),
            {
              "class": 2,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18918323516846, 16.8042124143983]),
            {
              "class": 2,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19317436218262, 16.814893637422795]),
            {
              "class": 2,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.228922843933105, 16.74779737544217]),
            {
              "class": 2,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.217206954956055, 16.706944586635124]),
            {
              "class": 2,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.19467639923096, 16.706780171416117]),
            {
              "class": 2,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.175750732421875, 16.728728350223268]),
            {
              "class": 2,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.15558052062988, 16.749358978278654]),
            {
              "class": 2,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.18939781188965, 16.67804643842186]),
            {
              "class": 2,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.14961528778076, 16.717261358334852]),
            {
              "class": 2,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.16763973236084, 16.70283416368006]),
            {
              "class": 2,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.74118995666504, 16.015950991936712]),
            {
              "class": 2,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.76393508911133, 16.058763461856223]),
            {
              "class": 2,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.71475410461426, 16.10074208660869]),
            {
              "class": 2,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.76470756530762, 16.140815555276024]),
            {
              "class": 2,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.71303749084473, 16.191596608309375]),
            {
              "class": 2,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.780757904052734, 16.192832997126423]),
            {
              "class": 2,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.70016288757324, 16.307700844166824]),
            {
              "class": 2,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.695356369018555, 16.332659638470165]),
            {
              "class": 2,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.774234771728516, 16.322528234550628]),
            {
              "class": 2,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.738786697387695, 16.277630745898033]),
            {
              "class": 2,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.73192024230957, 16.235936905764135]),
            {
              "class": 2,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.689605712890625, 16.11673946315859]),
            {
              "class": 2,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.650381088256836, 16.091753304075315]),
            {
              "class": 2,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.65544509887695, 16.050927570310954]),
            {
              "class": 2,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.67003631591797, 16.03047031647904]),
            {
              "class": 2,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.699562072753906, 16.157963863087062]),
            {
              "class": 2,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.57536506652832, 16.134549456801913]),
            {
              "class": 2,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.58008575439453, 16.130839173466242]),
            {
              "class": 2,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.589956283569336, 16.250440114388105]),
            {
              "class": 2,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.55665397644043, 16.241952570969033]),
            {
              "class": 2,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.52987480163574, 16.26485985751855]),
            {
              "class": 2,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.483354568481445, 16.277301185030034]),
            {
              "class": 2,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.27255439758301, 16.25225294024895]),
            {
              "class": 2,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.34885787963867, 16.3277999248471]),
            {
              "class": 2,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.39718055725098, 16.274499895305425]),
            {
              "class": 2,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.46018028259277, 16.33208306859209]),
            {
              "class": 2,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.489877700805664, 16.357532890645054]),
            {
              "class": 2,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.470136642456055, 16.351767849269347]),
            {
              "class": 2,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.475114822387695, 16.437402343465887]),
            {
              "class": 2,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.452627182006836, 16.45551250190879]),
            {
              "class": 2,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.46533012390137, 16.384955683732706]),
            {
              "class": 2,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.48816108703613, 16.377626846353618]),
            {
              "class": 2,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.40915393829346, 16.366550721026375]),
            {
              "class": 2,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.42378807067871, 16.354115065230733]),
            {
              "class": 2,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.408424377441406, 16.39113145629001]),
            {
              "class": 2,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.40602111816406, 16.4418477206423]),
            {
              "class": 2,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44756317138672, 16.49419671982869]),
            {
              "class": 2,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.48266792297363, 16.48794192312757]),
            {
              "class": 2,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.47271156311035, 16.470740190276512]),
            {
              "class": 2,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.50343894958496, 16.439954331694366]),
            {
              "class": 2,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.37932777404785, 16.336942675762042]),
            {
              "class": 2,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.35533809661865, 16.328005847366025]),
            {
              "class": 2,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.38336181640625, 16.247885649571124]),
            {
              "class": 2,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.435546875, 16.26057524436342]),
            {
              "class": 2,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.45425796508789, 16.27754835573292]),
            {
              "class": 2,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.446876525878906, 16.27351119526767]),
            {
              "class": 2,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44306242465973, 16.288861231454884]),
            {
              "class": 2,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.43982768058777, 16.285267134102902]),
            {
              "class": 2,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.29718780517578, 15.93079372626239]),
            {
              "class": 2,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.289634704589844, 15.972139132824578]),
            {
              "class": 2,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.2843132019043, 15.878955519877803]),
            {
              "class": 2,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.228179931640625, 15.891668673210832]),
            {
              "class": 2,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.21350288391113, 15.952416539551713]),
            {
              "class": 2,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.27547264099121, 15.994335041230295]),
            {
              "class": 2,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32962107658386, 15.936385345102671]),
            {
              "class": 2,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.319589614868164, 15.940903919555351]),
            {
              "class": 2,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.31813049316406, 15.953819465974732]),
            {
              "class": 2,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.28568649291992, 15.951921386704994]),
            {
              "class": 2,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.24053955078125, 15.87912063090971]),
            {
              "class": 2,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.24320030212402, 15.916597330129573]),
            {
              "class": 2,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.226935386657715, 15.96017377443617]),
            {
              "class": 2,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.226162910461426, 15.935291793525716]),
            {
              "class": 2,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.31328105926514, 15.88636474417311]),
            {
              "class": 2,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.280343532562256, 15.921260791864082]),
            {
              "class": 2,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.25796318054199, 15.971974098261525]),
            {
              "class": 2,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.3945198059082, 15.391542509769382]),
            {
              "class": 2,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.404948234558105, 15.422117250469222]),
            {
              "class": 2,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.36954307556152, 15.432459513867027]),
            {
              "class": 2,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.3505744934082, 15.469232425916495]),
            {
              "class": 2,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.328301429748535, 15.51861118849353]),
            {
              "class": 2,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.31092071533203, 15.564794863592935]),
            {
              "class": 2,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.360230445861816, 15.56136348744594]),
            {
              "class": 2,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.42752170562744, 15.590218336453573]),
            {
              "class": 2,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.430182456970215, 15.617002590485445]),
            {
              "class": 2,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.43696308135986, 15.635476726459993]),
            {
              "class": 2,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.436662673950195, 15.60861222040691]),
            {
              "class": 2,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.395936012268066, 15.49789339556017]),
            {
              "class": 2,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.34345054626465, 15.310843368161153]),
            {
              "class": 2,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.31924629211426, 15.244522620818714]),
            {
              "class": 2,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.3237738609314, 15.36957060545211]),
            {
              "class": 2,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.387224197387695, 15.29792861283405]),
            {
              "class": 2,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.435396671295166, 15.444517942222916]),
            {
              "class": 2,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.45322799682617, 15.576163471880239]),
            {
              "class": 2,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.27274751663208, 15.307511271970318]),
            {
              "class": 2,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.272640228271484, 15.462076903733616]),
            {
              "class": 2,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.104583740234375, 14.710719673361561]),
            {
              "class": 2,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.054372787475586, 14.73562340574571]),
            {
              "class": 2,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.09153747558594, 14.770068875392575]),
            {
              "class": 2,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.13445281982422, 14.772143729470748]),
            {
              "class": 2,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.16758346557617, 14.82691270351793]),
            {
              "class": 2,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.19882583618164, 14.840685751511273]),
            {
              "class": 2,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.9356689453125, 14.562151555141309]),
            {
              "class": 2,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.86854934692383, 14.472081621070844]),
            {
              "class": 2,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.04853630065918, 14.609083037249711]),
            {
              "class": 2,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.038923263549805, 14.671365984882312]),
            {
              "class": 2,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.07428550720215, 14.73305015186866]),
            {
              "class": 2,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00381851196289, 14.710802690526542]),
            {
              "class": 2,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93738555908203, 14.599365304024621]),
            {
              "class": 2,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.88524341583252, 14.592637391049799]),
            {
              "class": 2,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.909318923950195, 14.616391818508786]),
            {
              "class": 2,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95189094543457, 13.728379362719286]),
            {
              "class": 2,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.897560119628906, 13.81966117838426]),
            {
              "class": 2,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.97506523132324, 13.870663396091308]),
            {
              "class": 2,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.014719009399414, 13.858080555667579]),
            {
              "class": 2,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.05832099914551, 13.856038904680037]),
            {
              "class": 2,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00381851196289, 13.979547222964005]),
            {
              "class": 2,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.98811149597168, 14.008196702105268]),
            {
              "class": 2,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95386505126953, 14.068648691144787]),
            {
              "class": 2,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.929574966430664, 14.09616321234493]),
            {
              "class": 2,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93772888183594, 14.051705424525608]),
            {
              "class": 2,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93223571777344, 14.006780968701753]),
            {
              "class": 2,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.9506893157959, 13.996704025955784]),
            {
              "class": 2,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93871593475342, 13.973925176702426]),
            {
              "class": 2,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.98965644836426, 13.826162082933974]),
            {
              "class": 2,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.272640228271484, 13.237773208764791]),
            {
              "class": 2,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.23410224914551, 13.229250958879772]),
            {
              "class": 2,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.20217323303223, 13.243538091084202]),
            {
              "class": 2,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.1993408203125, 13.218388835927037]),
            {
              "class": 2,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17856979370117, 13.279461091026349]),
            {
              "class": 2,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.16861343383789, 13.291489931622403]),
            {
              "class": 2,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.16509437561035, 13.306107511238364]),
            {
              "class": 2,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.16440773010254, 13.338346596101754]),
            {
              "class": 2,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.18268966674805, 13.337761987742233]),
            {
              "class": 2,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.171274185180664, 13.35488207514474]),
            {
              "class": 2,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.169729232788086, 13.372668977145604]),
            {
              "class": 2,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.16063117980957, 13.324232085027298]),
            {
              "class": 2,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.15058898925781, 13.28739685140904]),
            {
              "class": 2,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.15719795227051, 13.26534314983734]),
            {
              "class": 2,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.1649227142334, 13.231590429707039]),
            {
              "class": 2,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17110252380371, 13.196161754215941]),
            {
              "class": 2,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.14089012145996, 13.24571033017398]),
            {
              "class": 2,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.15020275115967, 13.163402370222633]),
            {
              "class": 2,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.14741325378418, 13.162817341376607]),
            {
              "class": 2,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.120076179504395, 13.25891044307505]),
            {
              "class": 2,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.45627498626709, 12.484389543519164]),
            {
              "class": 2,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44258499145508, 12.494131251552295]),
            {
              "class": 2,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44035339355469, 12.507559541982996]),
            {
              "class": 2,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.427199840545654, 12.49926383183115]),
            {
              "class": 2,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.448893547058105, 12.471840007122939]),
            {
              "class": 2,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.475372314453125, 12.41434321566424]),
            {
              "class": 2,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.479127407073975, 12.414762334514384]),
            {
              "class": 2,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.48979187011719, 12.405185300351391]),
            {
              "class": 2,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.488633155822754, 12.409397562271431]),
            {
              "class": 2,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.47132754325867, 12.432459011789787]),
            {
              "class": 2,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.471123695373535, 12.431191261459778]),
            {
              "class": 2,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.47032976150513, 12.465722149547423]),
            {
              "class": 2,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.383469104766846, 12.51671384216643]),
            {
              "class": 2,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.38967037200928, 12.519059972101926]),
            {
              "class": 2,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.389241218566895, 12.522505811770367]),
            {
              "class": 2,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.379027366638184, 12.51796022635043]),
            {
              "class": 2,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.385711431503296, 12.53818432457024]),
            {
              "class": 2,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.69003486633301, 12.112340861822702]),
            {
              "class": 2,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.70419692993164, 12.194737488466808]),
            {
              "class": 2,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.63952350616455, 12.224350395700368]),
            {
              "class": 2,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.64433002471924, 12.192178710805464]),
            {
              "class": 2,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.609740257263184, 12.171917354044632]),
            {
              "class": 2,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.62832260131836, 12.152787201288447]),
            {
              "class": 2,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.69097900390625, 12.092870728233944]),
            {
              "class": 2,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.753549575805664, 12.052331378767645]),
            {
              "class": 2,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.6963005065918, 12.069748103482498]),
            {
              "class": 2,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.72348737716675, 12.088065918917442]),
            {
              "class": 2,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.789212226867676, 12.004104240638728]),
            {
              "class": 2,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.780028343200684, 12.008553755482136]),
            {
              "class": 2,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.772475242614746, 12.004251159754778]),
            {
              "class": 2,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.761510372161865, 12.016969853766142]),
            {
              "class": 2,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.741769313812256, 12.059445093350229]),
            {
              "class": 2,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.42932415008545, 12.600302479949331]),
            {
              "class": 2,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.42325162887573, 12.602312796274866]),
            {
              "class": 2,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.43895864486694, 12.601558929500639]),
            {
              "class": 2,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44360959529877, 12.609443009818083]),
            {
              "class": 2,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.438679695129395, 12.59567450431768]),
            {
              "class": 2,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.43825054168701, 12.611777823687364]),
            {
              "class": 2,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.450438499450684, 12.591716576540186]),
            {
              "class": 2,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.410956382751465, 12.60070035630698]),
            {
              "class": 2,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.385722160339355, 12.640275494035414]),
            {
              "class": 2,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.39357566833496, 12.645384218903324]),
            {
              "class": 2,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.393940448760986, 12.638925014855648]),
            {
              "class": 2,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.39432668685913, 12.633721939203902]),
            {
              "class": 2,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.3596510887146, 12.637621638645989]),
            {
              "class": 2,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.35859966278076, 12.63894595257183]),
            {
              "class": 2,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.35931313037872, 12.6345332909696]),
            {
              "class": 2,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.36120100552521, 12.633763815487093]),
            {
              "class": 2,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.3161563873291, 12.728930835858435]),
            {
              "class": 2,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.33074760437012, 12.734414519292057]),
            {
              "class": 2,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32576942443848, 12.716832824949504]),
            {
              "class": 2,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32498621940613, 12.72595871361354]),
            {
              "class": 2,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32070541381836, 12.720359726786798]),
            {
              "class": 2,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.32413864135742, 12.709925397528593]),
            {
              "class": 2,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.329288482666016, 12.700673336861593]),
            {
              "class": 2,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.34744167327881, 12.70092452847683]),
            {
              "class": 2,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.25219106674194, 12.987747683302166]),
            {
              "class": 2,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.26107454299927, 12.989023113478996]),
            {
              "class": 2,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.22262239456177, 13.01680913771721]),
            {
              "class": 2,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.21760129928589, 13.032446553877763]),
            {
              "class": 2,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.2297248840332, 13.02349906225129]),
            {
              "class": 2,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.2353253364563, 13.010578983106043]),
            {
              "class": 2,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.23122692108154, 12.98845857961836]),
            {
              "class": 2,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.23005747795105, 12.991223737852893]),
            {
              "class": 2,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.473591327667236, 16.265601415691094]),
            {
              "class": 2,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.464900970458984, 16.284942735255726]),
            {
              "class": 2,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.46453619003296, 16.302510992247903]),
            {
              "class": 2,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.46026611328125, 16.3291178252217]),
            {
              "class": 2,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.457154750823975, 16.33949598026829]),
            {
              "class": 2,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.48399829864502, 16.318862678668786]),
            {
              "class": 2,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.491100788116455, 16.293716762651343]),
            {
              "class": 2,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.478387117385864, 16.29465387147573]),
            {
              "class": 2,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.476595401763916, 16.285035420695383]),
            {
              "class": 2,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.454408168792725, 16.228211038547556]),
            {
              "class": 2,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44848585128784, 16.22320451467268]),
            {
              "class": 2,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44012808799744, 16.224595228519085]),
            {
              "class": 2,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.489094495773315, 16.238254606779964]),
            {
              "class": 2,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.509339809417725, 16.231394132577808]),
            {
              "class": 2,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.44797623157501, 16.25906118803996]),
            {
              "class": 2,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05298328399658, 18.20457485918112]),
            {
              "class": 2,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05203914642334, 18.200335007643726]),
            {
              "class": 2,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.05452823638916, 18.193118869293926]),
            {
              "class": 2,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-63.080148696899414, 18.197766585865292]),
            {
              "class": 2,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.96966314315796, 18.270417843852417]),
            {
              "class": 2,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.968246936798096, 18.275511753216993]),
            {
              "class": 2,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.97170162200928, 18.265181149167912]),
            {
              "class": 2,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.980027198791504, 18.263714031277257]),
            {
              "class": 2,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.981507778167725, 18.25542050677174]),
            {
              "class": 2,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.79742240905762, 17.91153294640058]),
            {
              "class": 2,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80258297920227, 17.91347261470141]),
            {
              "class": 2,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80378460884094, 17.91266612361736]),
            {
              "class": 2,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80926704406738, 17.367039320742222]),
            {
              "class": 2,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80729293823242, 17.37277348092956]),
            {
              "class": 2,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.75965690612793, 17.33885741191969]),
            {
              "class": 2,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.76291847229004, 17.33402345183762]),
            {
              "class": 2,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.78806686401367, 17.358683508883693]),
            {
              "class": 2,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.75545120239258, 17.37015217283225]),
            {
              "class": 2,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.735795974731445, 17.353440452036924]),
            {
              "class": 2,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80343055725098, 17.323699653291477]),
            {
              "class": 2,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.84677505493164, 17.357045069727423]),
            {
              "class": 2,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.852783203125, 17.387435731029804]),
            {
              "class": 2,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.81278610229492, 17.415937748033425]),
            {
              "class": 2,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.81476020812988, 17.382603052096684]),
            {
              "class": 2,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.80858039855957, 17.35638968996439]),
            {
              "class": 2,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.779226303100586, 17.337464589020648]),
            {
              "class": 2,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.72420883178711, 17.311490603051467]),
            {
              "class": 2,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.7264404296875, 17.341151450121004]),
            {
              "class": 2,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.63073921203613, 17.244859165423154]),
            {
              "class": 2,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.654170989990234, 17.214936851211544]),
            {
              "class": 2,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.65374183654785, 17.238547190206663]),
            {
              "class": 2,
              "system:index": "398"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.6400089263916, 17.22789011905184]),
            {
              "class": 2,
              "system:index": "399"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.644643783569336, 17.247892115703802]),
            {
              "class": 2,
              "system:index": "400"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.622692584991455, 17.156600846368377]),
            {
              "class": 2,
              "system:index": "401"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.6255464553833, 17.15643682349411]),
            {
              "class": 2,
              "system:index": "402"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.617714405059814, 17.156498332088937]),
            {
              "class": 2,
              "system:index": "403"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.6166307926178, 17.159266197757194]),
            {
              "class": 2,
              "system:index": "404"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.61811137199402, 17.161101167423666]),
            {
              "class": 2,
              "system:index": "405"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.62489199638367, 17.160281071491482]),
            {
              "class": 2,
              "system:index": "406"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.617440819740295, 17.164513736676305]),
            {
              "class": 2,
              "system:index": "407"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.615182399749756, 17.165215928020526]),
            {
              "class": 2,
              "system:index": "408"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.61288642883301, 17.165437364406582]),
            {
              "class": 2,
              "system:index": "409"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.61136293411255, 17.168225598282888]),
            {
              "class": 2,
              "system:index": "410"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.59960412979126, 17.160149887841058]),
            {
              "class": 2,
              "system:index": "411"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.57331848144531, 17.164771532826467]),
            {
              "class": 2,
              "system:index": "412"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.58516311645508, 17.156242526679108]),
            {
              "class": 2,
              "system:index": "413"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.56010055541992, 17.156078503488143]),
            {
              "class": 2,
              "system:index": "414"
            }),
        ee.Feature(
            ee.Geometry.Point([-62.58378982543945, 17.10949005546036]),
            {
              "class": 2,
              "system:index": "415"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.778526306152344, 17.613986141041327]),
            {
              "class": 2,
              "system:index": "416"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.768226623535156, 17.651613285065217]),
            {
              "class": 2,
              "system:index": "417"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.77165985107422, 17.58715155815621]),
            {
              "class": 2,
              "system:index": "418"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.829681396484375, 17.6758213782619]),
            {
              "class": 2,
              "system:index": "419"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.75615668296814, 17.058981661996146]),
            {
              "class": 2,
              "system:index": "420"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.740535497665405, 17.045124207882722]),
            {
              "class": 2,
              "system:index": "421"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.71029090881348, 17.07000339264143]),
            {
              "class": 2,
              "system:index": "422"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.67896270751953, 17.053100415041715]),
            {
              "class": 2,
              "system:index": "423"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.66892051696777, 17.05342864276682]),
            {
              "class": 2,
              "system:index": "424"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.685324907302856, 17.045452449620832]),
            {
              "class": 2,
              "system:index": "425"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.68023943901062, 17.04672438091031]),
            {
              "class": 2,
              "system:index": "426"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.68499231338501, 17.046816698166904]),
            {
              "class": 2,
              "system:index": "427"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.67718172073364, 17.0451960108122]),
            {
              "class": 2,
              "system:index": "428"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.676130294799805, 17.0459755836993]),
            {
              "class": 2,
              "system:index": "429"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.67997121810913, 17.040969848564572]),
            {
              "class": 2,
              "system:index": "430"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.68442368507385, 17.040005613693168]),
            {
              "class": 2,
              "system:index": "431"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.68901562690735, 17.039502978649853]),
            {
              "class": 2,
              "system:index": "432"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.81134581565857, 17.028848833431642]),
            {
              "class": 2,
              "system:index": "433"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.80831491947174, 17.03123390930305]),
            {
              "class": 2,
              "system:index": "434"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.86607360839844, 17.05287924564385]),
            {
              "class": 2,
              "system:index": "435"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.883368492126465, 17.03258503808408]),
            {
              "class": 2,
              "system:index": "436"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.89231634140015, 17.042243893960816]),
            {
              "class": 2,
              "system:index": "437"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.88727378845215, 17.051537158478965]),
            {
              "class": 2,
              "system:index": "438"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.87328338623047, 17.06501464774693]),
            {
              "class": 2,
              "system:index": "439"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.86858415603638, 17.088438956742756]),
            {
              "class": 2,
              "system:index": "440"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.87532186508179, 17.090448961753246]),
            {
              "class": 2,
              "system:index": "441"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.865622997283936, 17.100437134441233]),
            {
              "class": 2,
              "system:index": "442"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.84905767440796, 17.11294723159675]),
            {
              "class": 2,
              "system:index": "443"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.86817646026611, 17.11600284886938]),
            {
              "class": 2,
              "system:index": "444"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.883089542388916, 17.11903790896623]),
            {
              "class": 2,
              "system:index": "445"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.887123584747314, 17.123221289012008]),
            {
              "class": 2,
              "system:index": "446"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.88720941543579, 17.116310458566424]),
            {
              "class": 2,
              "system:index": "447"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.890106201171875, 17.107307537766154]),
            {
              "class": 2,
              "system:index": "448"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.880632638931274, 17.118379601202548]),
            {
              "class": 2,
              "system:index": "449"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.877907514572144, 17.125382633126826]),
            {
              "class": 2,
              "system:index": "450"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.87532186508179, 17.125341620530357]),
            {
              "class": 2,
              "system:index": "451"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.47846221923828, 16.451495742585603]),
            {
              "class": 2,
              "system:index": "452"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.50815963745117, 16.4703453658269]),
            {
              "class": 2,
              "system:index": "453"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.528072357177734, 16.418895566941586]),
            {
              "class": 2,
              "system:index": "454"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.513824462890625, 16.395594616698947]),
            {
              "class": 2,
              "system:index": "455"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.45760536193848, 16.32369816050717]),
            {
              "class": 2,
              "system:index": "456"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.77337646484375, 16.11090165249783]),
            {
              "class": 2,
              "system:index": "457"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.77020072937012, 16.092677198564807]),
            {
              "class": 2,
              "system:index": "458"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.766510009765625, 16.0861621688832]),
            {
              "class": 2,
              "system:index": "459"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.72462463378906, 16.13243924167768]),
            {
              "class": 2,
              "system:index": "460"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.78942680358887, 16.233234174375777]),
            {
              "class": 2,
              "system:index": "461"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.80487632751465, 16.272292049171437]),
            {
              "class": 2,
              "system:index": "462"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.68025016784668, 16.274763805280628]),
            {
              "class": 2,
              "system:index": "463"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.6636848449707, 16.252022475388934]),
            {
              "class": 2,
              "system:index": "464"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.59278869628906, 16.260756775843255]),
            {
              "class": 2,
              "system:index": "465"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.56455039978027, 16.240321200490367]),
            {
              "class": 2,
              "system:index": "466"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.781272888183594, 16.33803015076114]),
            {
              "class": 2,
              "system:index": "467"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.53639793395996, 16.23883789056839]),
            {
              "class": 2,
              "system:index": "468"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.550559997558594, 16.228619229453745]),
            {
              "class": 2,
              "system:index": "469"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.504554748535156, 16.26841956868832]),
            {
              "class": 2,
              "system:index": "470"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.52249336242676, 16.252764082018878]),
            {
              "class": 2,
              "system:index": "471"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.49374008178711, 16.20727370221149]),
            {
              "class": 2,
              "system:index": "472"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.276588439941406, 15.886649808115292]),
            {
              "class": 2,
              "system:index": "473"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.272382736206055, 15.924867936203391]),
            {
              "class": 2,
              "system:index": "474"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.25101089477539, 15.917274415777259]),
            {
              "class": 2,
              "system:index": "475"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.28251075744629, 15.9555692418779]),
            {
              "class": 2,
              "system:index": "476"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.298561096191406, 15.966049525213506]),
            {
              "class": 2,
              "system:index": "477"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.31744384765625, 15.953258554474603]),
            {
              "class": 2,
              "system:index": "478"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.94871520996094, 14.729406170058768]),
            {
              "class": 2,
              "system:index": "479"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.965280532836914, 14.727164886702495]),
            {
              "class": 2,
              "system:index": "480"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.97004413604736, 14.701263941382479]),
            {
              "class": 2,
              "system:index": "481"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.957984924316406, 14.683206176197624]),
            {
              "class": 2,
              "system:index": "482"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.96043109893799, 14.670294997501445]),
            {
              "class": 2,
              "system:index": "483"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.94244956970215, 14.676024167622936]),
            {
              "class": 2,
              "system:index": "484"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.97768306732178, 14.65555622592064]),
            {
              "class": 2,
              "system:index": "485"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.99987030029297, 14.67714507466506]),
            {
              "class": 2,
              "system:index": "486"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.01939678192139, 14.681919244028704]),
            {
              "class": 2,
              "system:index": "487"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.03437423706055, 14.686361203660537]),
            {
              "class": 2,
              "system:index": "488"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.04909420013428, 14.681088961190689]),
            {
              "class": 2,
              "system:index": "489"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.08273983001709, 14.664025951114386]),
            {
              "class": 2,
              "system:index": "490"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.07728958129883, 14.653812418316605]),
            {
              "class": 2,
              "system:index": "491"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.06428623199463, 14.652317715038887]),
            {
              "class": 2,
              "system:index": "492"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.06956481933594, 14.670502578747907]),
            {
              "class": 2,
              "system:index": "493"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.059908866882324, 14.68171167361474]),
            {
              "class": 2,
              "system:index": "494"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.05471611022949, 14.638076003186985]),
            {
              "class": 2,
              "system:index": "495"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.05750560760498, 14.62237998444868]),
            {
              "class": 2,
              "system:index": "496"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.055617332458496, 14.610835635591844]),
            {
              "class": 2,
              "system:index": "497"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.054372787475586, 14.600079743347155]),
            {
              "class": 2,
              "system:index": "498"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.045660972595215, 14.602945264121757]),
            {
              "class": 2,
              "system:index": "499"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.040639877319336, 14.598916912674271]),
            {
              "class": 2,
              "system:index": "500"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.037893295288086, 14.611001745631576]),
            {
              "class": 2,
              "system:index": "501"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.06698989868164, 14.616649412276983]),
            {
              "class": 2,
              "system:index": "502"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.08295440673828, 14.6133272730054]),
            {
              "class": 2,
              "system:index": "503"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.095571517944336, 14.62204778144872]),
            {
              "class": 2,
              "system:index": "504"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.09724521636963, 14.63238736418293]),
            {
              "class": 2,
              "system:index": "505"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.10269546508789, 14.630809467384227]),
            {
              "class": 2,
              "system:index": "506"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.11273765563965, 14.63064337232445]),
            {
              "class": 2,
              "system:index": "507"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.09921932220459, 14.638283614959356]),
            {
              "class": 2,
              "system:index": "508"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.03085517883301, 14.504092479860182]),
            {
              "class": 2,
              "system:index": "509"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.01325988769531, 14.508413390359333]),
            {
              "class": 2,
              "system:index": "510"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.05823516845703, 14.5092443250197]),
            {
              "class": 2,
              "system:index": "511"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.032400131225586, 14.48331769521633]),
            {
              "class": 2,
              "system:index": "512"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.97944259643555, 14.495034913174864]),
            {
              "class": 2,
              "system:index": "513"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.97987174987793, 14.527108665642528]),
            {
              "class": 2,
              "system:index": "514"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.953264236450195, 14.51938147671948]),
            {
              "class": 2,
              "system:index": "515"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.945281982421875, 14.483483901218333]),
            {
              "class": 2,
              "system:index": "516"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.066904067993164, 14.538482798924436]),
            {
              "class": 2,
              "system:index": "517"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.06282711029053, 14.515467796629768]),
            {
              "class": 2,
              "system:index": "518"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.083083152770996, 14.514969250224878]),
            {
              "class": 2,
              "system:index": "519"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.082825660705566, 14.533248550404256]),
            {
              "class": 2,
              "system:index": "520"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.06059551239014, 14.456590021035266]),
            {
              "class": 2,
              "system:index": "521"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.06574535369873, 14.467851552103243]),
            {
              "class": 2,
              "system:index": "522"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.99617958068848, 14.538408154634753]),
            {
              "class": 2,
              "system:index": "523"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.92837333679199, 14.505255810211322]),
            {
              "class": 2,
              "system:index": "524"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.89850425720215, 14.521874147803219]),
            {
              "class": 2,
              "system:index": "525"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.88717460632324, 14.486475587956583]),
            {
              "class": 2,
              "system:index": "526"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.86005210876465, 14.434273050802165]),
            {
              "class": 2,
              "system:index": "527"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.85597515106201, 14.411787583459803]),
            {
              "class": 2,
              "system:index": "528"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.86854934692383, 14.426792001234569]),
            {
              "class": 2,
              "system:index": "529"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.87258338928223, 14.404097947490891]),
            {
              "class": 2,
              "system:index": "530"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.88005065917969, 14.434439293492987]),
            {
              "class": 2,
              "system:index": "531"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.976009368896484, 14.575310511096182]),
            {
              "class": 2,
              "system:index": "532"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.87455749511719, 14.604232659850723]),
            {
              "class": 2,
              "system:index": "533"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.85679054260254, 14.584630205741593]),
            {
              "class": 2,
              "system:index": "534"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90193748474121, 14.590237018145691]),
            {
              "class": 2,
              "system:index": "535"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.935540199279785, 14.590278549556635]),
            {
              "class": 2,
              "system:index": "536"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.945796966552734, 14.598293965142386]),
            {
              "class": 2,
              "system:index": "537"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90721607208252, 14.481896498965565]),
            {
              "class": 2,
              "system:index": "538"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90301036834717, 14.486965758476682]),
            {
              "class": 2,
              "system:index": "539"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.887603759765625, 14.463197409216805]),
            {
              "class": 2,
              "system:index": "540"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17942810058594, 14.811531072641381]),
            {
              "class": 2,
              "system:index": "541"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.1663818359375, 14.80887573788076]),
            {
              "class": 2,
              "system:index": "542"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.08673095703125, 14.729200590340609]),
            {
              "class": 2,
              "system:index": "543"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.104583740234375, 14.694665635769436]),
            {
              "class": 2,
              "system:index": "544"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17942810058594, 14.787631888996705]),
            {
              "class": 2,
              "system:index": "545"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.1773681640625, 14.749004095204947]),
            {
              "class": 2,
              "system:index": "546"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.226677894592285, 14.80339284838534]),
            {
              "class": 2,
              "system:index": "547"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95538854598999, 13.711248658683548]),
            {
              "class": 2,
              "system:index": "548"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.946762561798096, 13.70893472082306]),
            {
              "class": 2,
              "system:index": "549"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.940518379211426, 13.712457734262328]),
            {
              "class": 2,
              "system:index": "550"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.945024490356445, 13.71631422683565]),
            {
              "class": 2,
              "system:index": "551"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.94693422317505, 13.720108119869641]),
            {
              "class": 2,
              "system:index": "552"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.94916582107544, 13.71370849555115]),
            {
              "class": 2,
              "system:index": "553"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.950517654418945, 13.724131247125927]),
            {
              "class": 2,
              "system:index": "554"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95485210418701, 13.728029237263696]),
            {
              "class": 2,
              "system:index": "555"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95156908035278, 13.733782302194745]),
            {
              "class": 2,
              "system:index": "556"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95193386077881, 13.73918088327694]),
            {
              "class": 2,
              "system:index": "557"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.94296455383301, 13.754583872887]),
            {
              "class": 2,
              "system:index": "558"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93238592147827, 13.756605570315854]),
            {
              "class": 2,
              "system:index": "559"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.92642068862915, 13.758689776186333]),
            {
              "class": 2,
              "system:index": "560"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93071222305298, 13.765067330823163]),
            {
              "class": 2,
              "system:index": "561"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.94442367553711, 13.770360985925127]),
            {
              "class": 2,
              "system:index": "562"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.937020778656006, 13.778593006693342]),
            {
              "class": 2,
              "system:index": "563"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.939295291900635, 13.784553225527187]),
            {
              "class": 2,
              "system:index": "564"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.943565368652344, 13.792534678929869]),
            {
              "class": 2,
              "system:index": "565"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.94135522842407, 13.790429935724555]),
            {
              "class": 2,
              "system:index": "566"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95571041107178, 13.786845576887279]),
            {
              "class": 2,
              "system:index": "567"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95616102218628, 13.791826153633309]),
            {
              "class": 2,
              "system:index": "568"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.96944332122803, 13.783261163026737]),
            {
              "class": 2,
              "system:index": "569"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.00034236907959, 13.786595503287007]),
            {
              "class": 2,
              "system:index": "570"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.04531764984131, 13.776075563082369]),
            {
              "class": 2,
              "system:index": "571"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.05604648590088, 13.791163537266828]),
            {
              "class": 2,
              "system:index": "572"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.03128433227539, 13.767947659378624]),
            {
              "class": 2,
              "system:index": "573"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.02252960205078, 13.758694009710613]),
            {
              "class": 2,
              "system:index": "574"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.99617958068848, 13.996471095530335]),
            {
              "class": 2,
              "system:index": "575"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.952491760253906, 14.037026057015286]),
            {
              "class": 2,
              "system:index": "576"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.966482162475586, 14.045852264733254]),
            {
              "class": 2,
              "system:index": "577"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93991756439209, 14.019322527347144]),
            {
              "class": 2,
              "system:index": "578"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.9466552734375, 14.004041213513288]),
            {
              "class": 2,
              "system:index": "579"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.92948913574219, 14.033978308299176]),
            {
              "class": 2,
              "system:index": "580"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.941762924194336, 14.071612723156653]),
            {
              "class": 2,
              "system:index": "581"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.94794273376465, 14.081519869149671]),
            {
              "class": 2,
              "system:index": "582"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93614101409912, 14.093965632608247]),
            {
              "class": 2,
              "system:index": "583"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.943779945373535, 14.094714854239193]),
            {
              "class": 2,
              "system:index": "584"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93798637390137, 14.098793906627899]),
            {
              "class": 2,
              "system:index": "585"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.937052965164185, 14.091493086218566]),
            {
              "class": 2,
              "system:index": "586"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.93991756439209, 14.103039373488816]),
            {
              "class": 2,
              "system:index": "587"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.919597148895264, 14.09583445472201]),
            {
              "class": 2,
              "system:index": "588"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.91948986053467, 14.101120533708503]),
            {
              "class": 2,
              "system:index": "589"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.92313766479492, 14.082727013038285]),
            {
              "class": 2,
              "system:index": "590"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.912837982177734, 14.075192665809492]),
            {
              "class": 2,
              "system:index": "591"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90695858001709, 14.044011981647174]),
            {
              "class": 2,
              "system:index": "592"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.895113945007324, 14.042596469290908]),
            {
              "class": 2,
              "system:index": "593"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.89528560638428, 14.058874333092893]),
            {
              "class": 2,
              "system:index": "594"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.898847579956055, 13.986393700783147]),
            {
              "class": 2,
              "system:index": "595"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.91835260391235, 13.972388525237015]),
            {
              "class": 2,
              "system:index": "596"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90515613555908, 13.974866423530434]),
            {
              "class": 2,
              "system:index": "597"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.900306701660156, 13.956691838872432]),
            {
              "class": 2,
              "system:index": "598"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.9067440032959, 13.948903454527967]),
            {
              "class": 2,
              "system:index": "599"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.88944911956787, 13.945154940509227]),
            {
              "class": 2,
              "system:index": "600"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90670108795166, 13.933325897066087]),
            {
              "class": 2,
              "system:index": "601"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.89202404022217, 13.911498888898732]),
            {
              "class": 2,
              "system:index": "602"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.9266996383667, 13.94128141204717]),
            {
              "class": 2,
              "system:index": "603"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.915842056274414, 13.90187602295587]),
            {
              "class": 2,
              "system:index": "604"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.90391159057617, 13.856097498230193]),
            {
              "class": 2,
              "system:index": "605"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.95656871795654, 13.836875742663375]),
            {
              "class": 2,
              "system:index": "606"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.954251289367676, 13.82695807965713]),
            {
              "class": 2,
              "system:index": "607"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.96165418624878, 13.820332178583866]),
            {
              "class": 2,
              "system:index": "608"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.947062969207764, 13.816810789664045]),
            {
              "class": 2,
              "system:index": "609"
            }),
        ee.Feature(
            ee.Geometry.Point([-60.945260524749756, 13.82345762711069]),
            {
              "class": 2,
              "system:index": "610"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17462158203125, 13.326420566791539]),
            {
              "class": 2,
              "system:index": "611"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17196083068848, 13.34070197929315]),
            {
              "class": 2,
              "system:index": "612"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.171016693115234, 13.279895737250532]),
            {
              "class": 2,
              "system:index": "613"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17608070373535, 13.242719580101282]),
            {
              "class": 2,
              "system:index": "614"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.18861198425293, 13.229852800339746]),
            {
              "class": 2,
              "system:index": "615"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.19513511657715, 13.247565333906785]),
            {
              "class": 2,
              "system:index": "616"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.16569519042969, 13.28783148342075]),
            {
              "class": 2,
              "system:index": "617"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.17067337036133, 13.335440504428536]),
            {
              "class": 2,
              "system:index": "618"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.1704158782959, 13.330011878572016]),
            {
              "class": 2,
              "system:index": "619"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.240153312683105, 13.288950689896758]),
            {
              "class": 2,
              "system:index": "620"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.22114181518555, 13.162433415437194]),
            {
              "class": 2,
              "system:index": "621"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.20208740234375, 13.150732526896556]),
            {
              "class": 2,
              "system:index": "622"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.20500564575195, 13.201878005026208]),
            {
              "class": 2,
              "system:index": "623"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.429667472839355, 12.492987536426796]),
            {
              "class": 2,
              "system:index": "624"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.43747806549072, 12.491562959167691]),
            {
              "class": 2,
              "system:index": "625"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.426706314086914, 12.497177424053758]),
            {
              "class": 2,
              "system:index": "626"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.444129943847656, 12.464871635437676]),
            {
              "class": 2,
              "system:index": "627"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.4635705947876, 12.455526927163364]),
            {
              "class": 2,
              "system:index": "628"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.46992206573486, 12.451629707184125]),
            {
              "class": 2,
              "system:index": "629"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.47850513458252, 12.451252553756875]),
            {
              "class": 2,
              "system:index": "630"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.48803234100342, 12.465164961635315]),
            {
              "class": 2,
              "system:index": "631"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.492624282836914, 12.468894365775725]),
            {
              "class": 2,
              "system:index": "632"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.49571418762207, 12.472833228717333]),
            {
              "class": 2,
              "system:index": "633"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.49670124053955, 12.441697817462597]),
            {
              "class": 2,
              "system:index": "634"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.48507118225098, 12.450330620849233]),
            {
              "class": 2,
              "system:index": "635"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.47120952606201, 12.429753902753825]),
            {
              "class": 2,
              "system:index": "636"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.47700309753418, 12.412905763856454]),
            {
              "class": 2,
              "system:index": "637"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.491379737854004, 12.40766669236813]),
            {
              "class": 2,
              "system:index": "638"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.48725986480713, 12.403978322820189]),
            {
              "class": 2,
              "system:index": "639"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.75419330596924, 12.017335166289042]),
            {
              "class": 2,
              "system:index": "640"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.73226356506348, 12.030808752395709]),
            {
              "class": 2,
              "system:index": "641"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.72136306762695, 12.030682834154856]),
            {
              "class": 2,
              "system:index": "642"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.71977519989014, 12.046715948938097]),
            {
              "class": 2,
              "system:index": "643"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.70853137969971, 12.063293686426146]),
            {
              "class": 2,
              "system:index": "644"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.72767162322998, 12.076723000745986]),
            {
              "class": 2,
              "system:index": "645"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.74063205718994, 12.097746918203775]),
            {
              "class": 2,
              "system:index": "646"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.72745704650879, 12.11788804276456]),
            {
              "class": 2,
              "system:index": "647"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.712350845336914, 12.126741264617122]),
            {
              "class": 2,
              "system:index": "648"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.7067289352417, 12.144656600820033]),
            {
              "class": 2,
              "system:index": "649"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.72891616821289, 12.166933709541004]),
            {
              "class": 2,
              "system:index": "650"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.70642852783203, 12.184049315616528]),
            {
              "class": 2,
              "system:index": "651"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.67694568634033, 12.190089854281277]),
            {
              "class": 2,
              "system:index": "652"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.65428638458252, 12.199989328466213]),
            {
              "class": 2,
              "system:index": "653"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.637678146362305, 12.21714474466886]),
            {
              "class": 2,
              "system:index": "654"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.6193962097168, 12.218151384928419]),
            {
              "class": 2,
              "system:index": "655"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.646132469177246, 12.217815838600735]),
            {
              "class": 2,
              "system:index": "656"
            }),
        ee.Feature(
            ee.Geometry.Point([-61.62785053253174, 12.202422193490838]),
            {
              "class": 2,
              "system:index": "657"
            })]),
    Islands = /* color: #00ffff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-63.2673454284668, 18.273042180958143],
                  [-63.25584411621094, 18.271249116396785],
                  [-63.25000762939453, 18.26815196124511],
                  [-63.245201110839844, 18.273857204179226],
                  [-63.23284149169922, 18.28005125553933],
                  [-63.233184814453125, 18.28673406288119],
                  [-63.23902130126953, 18.287060046895178],
                  [-63.24348449707031, 18.282659210995643],
                  [-63.24880599975586, 18.28559311400567],
                  [-63.257904052734375, 18.28591910016478],
                  [-63.26580047607422, 18.280540250174486]]]),
            {
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-63.19318771362305, 18.26701089015219],
                  [-63.18889617919922, 18.262935575018293],
                  [-63.177738189697266, 18.260164306085816],
                  [-63.16709518432617, 18.258697145804437],
                  [-63.16469192504883, 18.266521857387513],
                  [-63.177223205566406, 18.269456033308636],
                  [-63.19181442260742, 18.27141212303161]]]),
            {
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-63.18717956542969, 18.156291402835436],
                  [-63.17584991455078, 18.15205037789513],
                  [-63.14872741699219, 18.1572700862801],
                  [-63.114051818847656, 18.168361448760983],
                  [-63.110618591308594, 18.161184765231457],
                  [-63.08349609375, 18.16183720319391],
                  [-63.031654357910156, 18.19021589463764],
                  [-62.9791259765625, 18.22282937523598],
                  [-62.973289489746094, 18.229677430126745],
                  [-62.97294616699219, 18.24630729813596],
                  [-62.95989990234375, 18.264891738221916],
                  [-62.93243408203125, 18.279888257021245],
                  [-62.911834716796875, 18.295861383561334],
                  [-62.92488098144531, 18.30140273659428],
                  [-62.94342041015625, 18.306292018544276],
                  [-62.95989990234375, 18.29814313862658],
                  [-62.97294616699219, 18.280540250174486],
                  [-63.00212860107422, 18.267825941698295],
                  [-63.04161071777344, 18.260327323129694],
                  [-63.07697296142578, 18.236525215453405],
                  [-63.07147979736328, 18.221524953272613],
                  [-63.08967590332031, 18.215981050868315],
                  [-63.105812072753906, 18.202283594051302],
                  [-63.13911437988281, 18.194129834636673],
                  [-63.173789978027344, 18.17031867489476]]]),
            {
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-63.15971374511719, 18.05056137602646],
                  [-63.13568115234375, 18.032280592804838],
                  [-63.11370849609375, 18.01856875909305],
                  [-63.08555603027344, 18.010079946089405],
                  [-63.05225372314453, 17.99440721713976],
                  [-63.02684783935547, 17.997019435370387],
                  [-63.010711669921875, 18.029995361346092],
                  [-63.002471923828125, 18.06100668462459],
                  [-62.98633575439453, 18.09658135548131],
                  [-62.96470642089844, 18.11355021624119],
                  [-62.965049743652344, 18.131496260969755],
                  [-62.989768981933594, 18.125623212494208],
                  [-63.022727966308594, 18.130843709761695],
                  [-63.040924072265625, 18.133127628342407],
                  [-63.05980682373047, 18.115834360457217],
                  [-63.0889892578125, 18.095928674182087],
                  [-63.095855712890625, 18.072430529917977],
                  [-63.107872009277344, 18.073409682080907],
                  [-63.127784729003906, 18.084832720435994],
                  [-63.15765380859375, 18.074062447155864]]]),
            {
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-62.87853240966797, 17.913082609087496],
                  [-62.86102294921875, 17.87877790159469],
                  [-62.83699035644531, 17.869628859935222],
                  [-62.80437469482422, 17.881391826951365],
                  [-62.78034210205078, 17.904588727995474],
                  [-62.79338836669922, 17.935295450357764],
                  [-62.81810760498047, 17.957505504636078],
                  [-62.85449981689453, 17.94346123561156],
                  [-62.87818908691406, 17.931702385498127]]]),
            {
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-63.260650634765625, 17.662342738379085],
                  [-63.27919006347656, 17.607375018147255],
                  [-63.20777893066406, 17.598212102629187],
                  [-63.17893981933594, 17.65776273554449]]]),
            {
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-63.006591796875, 17.536022908221472],
                  [-63.03062438964844, 17.480361856782206],
                  [-62.972259521484375, 17.441061444279285],
                  [-62.93930507779072, 17.472173165555414],
                  [-62.9241943359375, 17.50983159713526]]]),
            {
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-62.85621643066406, 17.33490806580805],
                  [-62.81913757324219, 17.308032334356827],
                  [-62.77656555175781, 17.281808322053735],
                  [-62.71888732910156, 17.273284713676883],
                  [-62.67768859863281, 17.25099033566006],
                  [-62.66395568847656, 17.20376982191752],
                  [-62.63511657714844, 17.196554514688234],
                  [-62.648162841796875, 17.15260066514817],
                  [-62.62687683105469, 17.08500952793492],
                  [-62.57537841796875, 17.086322210876354],
                  [-62.5396728515625, 17.09879223767869],
                  [-62.52388000488281, 17.159161602658134],
                  [-62.557525634765625, 17.215576081425848],
                  [-62.60833740234375, 17.22738158718772],
                  [-62.601470947265625, 17.254269089702092],
                  [-62.65434265136719, 17.28770905062194],
                  [-62.67906188964844, 17.32179844407804],
                  [-62.73674011230469, 17.400442119113684],
                  [-62.826690673828125, 17.442371594596832],
                  [-62.89192199707031, 17.384060804231606]]]),
            {
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-62.249908447265625, 16.719069818619673],
                  [-62.2320556640625, 16.691447830122993],
                  [-62.194976806640625, 16.657243645360776],
                  [-62.159271240234375, 16.65461230098613],
                  [-62.1331787109375, 16.679608612204255],
                  [-62.129058837890625, 16.745372756184036],
                  [-62.148284912109375, 16.77561664328635],
                  [-62.17987060546875, 16.8321466495438],
                  [-62.208709716796875, 16.834775542012125],
                  [-62.2430419921875, 16.770357182264625]]]),
            {
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.94091796875, 17.029211966401395],
                  [-61.89697265625, 16.991128777531827],
                  [-61.739044189453125, 16.981935124030556],
                  [-61.678619384765625, 17.02658578826762],
                  [-61.642913818359375, 17.07910234031859],
                  [-61.692352294921875, 17.12241736704664],
                  [-61.725311279296875, 17.186715006191548],
                  [-61.787109375, 17.186715006191548],
                  [-61.881866455078125, 17.184091048975866],
                  [-61.934051513671875, 17.110605177218922]]]),
            {
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.901092529296875, 17.69374533041694],
                  [-61.881866455078125, 17.65318261616436],
                  [-61.892852783203125, 17.6099929086062],
                  [-61.88323974609375, 17.561555794532897],
                  [-61.837921142578125, 17.561555794532897],
                  [-61.80633544921875, 17.558937202588762],
                  [-61.766510009765625, 17.531439701706244],
                  [-61.732177734375, 17.5262016095855],
                  [-61.70745849609375, 17.552390557057297],
                  [-61.710205078125, 17.624390627355332],
                  [-61.788482666015625, 17.72514243272563],
                  [-61.857147216796875, 17.752610387296098]]]),
            {
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.835174560546875, 16.26741410165704],
                  [-61.804962158203125, 16.172472808397515],
                  [-61.76788330078125, 16.015455996341313],
                  [-61.72119140625, 15.93227933760862],
                  [-61.6497802734375, 15.945484288404524],
                  [-61.640167236328125, 15.916432249854266],
                  [-61.675872802734375, 15.862278608693849],
                  [-61.629180908203125, 15.813395760460585],
                  [-61.557769775390625, 15.827929734724849],
                  [-61.54815673828125, 15.907187538001574],
                  [-61.623687744140625, 15.945484288404524],
                  [-61.546783447265625, 16.003575733881327],
                  [-61.527557373046875, 16.084083654214915],
                  [-61.52069091796875, 16.188299533590655],
                  [-61.4080810546875, 16.186980688280087],
                  [-61.327056884765625, 16.208081155346566],
                  [-61.184234619140625, 16.226542211401725],
                  [-61.13067626953125, 16.234453562785532],
                  [-61.110076904296875, 16.212037241560264],
                  [-61.140289306640625, 16.193574826697834],
                  [-61.151275634765625, 16.150049444157847],
                  [-61.099090576171875, 16.159282902118825],
                  [-61.079864501953125, 16.200168744729858],
                  [-61.12518310546875, 16.272687274764973],
                  [-61.07025146484375, 16.28718777025255],
                  [-60.983734130859375, 16.329364930553236],
                  [-61.011199951171875, 16.364944836525137],
                  [-61.14166259765625, 16.324093282434635],
                  [-61.203460693359375, 16.28718777025255],
                  [-61.259765625, 16.354403317877185],
                  [-61.354522705078125, 16.355721038841455],
                  [-61.39434814453125, 16.3833911236084],
                  [-61.395721435546875, 16.470328646858505],
                  [-61.46026611328125, 16.54406325463195],
                  [-61.5509033203125, 16.47427942759168],
                  [-61.557769775390625, 16.3833911236084],
                  [-61.626434326171875, 16.3833911236084],
                  [-61.728057861328125, 16.41896117411341],
                  [-61.820068359375, 16.360991833752678]]]),
            {
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.358642578125, 15.93227933760862],
                  [-61.340789794921875, 15.860957606260476],
                  [-61.255645751953125, 15.839820390892685],
                  [-61.175994873046875, 15.876809064146757],
                  [-61.170501708984375, 15.937561422222693],
                  [-61.2103271484375, 16.024695711685315],
                  [-61.29547119140625, 16.028655458702517],
                  [-61.351776123046875, 15.961329081596647]]]),
            {
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.48773193359375, 15.597906767130883],
                  [-61.491851806640625, 15.567482045911564],
                  [-61.497344970703125, 15.534406591252042],
                  [-61.4849853515625, 15.482798286083169],
                  [-61.4630126953125, 15.41793882997625],
                  [-61.424560546875, 15.358356179450597],
                  [-61.403961181640625, 15.281535661318262],
                  [-61.39434814453125, 15.196735527225156],
                  [-61.365509033203125, 15.172879337054239],
                  [-61.280364990234375, 15.20071129673589],
                  [-61.24603271484375, 15.245764774920596],
                  [-61.22955322265625, 15.330545113171928],
                  [-61.222686767578125, 15.391459757417053],
                  [-61.22406005859375, 15.452356578816282],
                  [-61.2542724609375, 15.531760325424216],
                  [-61.280364990234375, 15.587324766473593],
                  [-61.318817138671875, 15.623036831528264],
                  [-61.38336181640625, 15.61906913139508],
                  [-61.409454345703125, 15.658742673171389],
                  [-61.4739990234375, 15.654775665159686]]]),
            {
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.239166259765625, 14.808077056607448],
                  [-61.225433349609375, 14.773554618927028],
                  [-61.195220947265625, 14.744339039791964],
                  [-61.19659423828125, 14.71644778364871],
                  [-61.182861328125, 14.671282952734936],
                  [-61.165008544921875, 14.627437583285394],
                  [-61.1279296875, 14.606176068057712],
                  [-61.099090576171875, 14.596873508391994],
                  [-61.082611083984375, 14.566305186929066],
                  [-61.11419677734375, 14.541049898060388],
                  [-61.10595703125, 14.490530661410503],
                  [-61.088104248046875, 14.445319477691228],
                  [-61.055145263671875, 14.43866999830895],
                  [-61.030426025390625, 14.454628414847873],
                  [-60.972747802734375, 14.44265970978791],
                  [-60.92742919921875, 14.430690360770953],
                  [-60.919189453125, 14.400099102127717],
                  [-60.897216796875, 14.354869561024975],
                  [-60.835418701171875, 14.377485475623596],
                  [-60.785980224609375, 14.501167248306626],
                  [-60.799713134765625, 14.57029259983341],
                  [-60.840911865234375, 14.634081384671777],
                  [-60.876617431640625, 14.70183665427055],
                  [-60.851898193359375, 14.733714220294916],
                  [-60.8587646484375, 14.776210385988843],
                  [-60.89447021484375, 14.79347208021435],
                  [-60.941162109375, 14.770898819401213],
                  [-60.96588134765625, 14.792144306318725],
                  [-60.986480712890625, 14.83861155338482],
                  [-61.0345458984375, 14.839939042477662],
                  [-61.072998046875, 14.857195658870623],
                  [-61.118316650390625, 14.887723217337792],
                  [-61.181488037109375, 14.889050404470884],
                  [-61.226806640625, 14.859850400601035]]]),
            {
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.090850830078125, 13.799407197552359],
                  [-61.066131591796875, 13.751390740782975],
                  [-60.99334716796875, 13.719374295583568],
                  [-60.95489501953125, 13.682016255861562],
                  [-60.897216796875, 13.718040182171306],
                  [-60.876617431640625, 13.822078202551785],
                  [-60.862884521484375, 13.93140140744916],
                  [-60.862884521484375, 14.036676072136103],
                  [-60.88897705078125, 14.097952998255668],
                  [-60.9246826171875, 14.124590011664882],
                  [-60.96588134765625, 14.124590011664882],
                  [-60.978240966796875, 14.08463332479551],
                  [-60.991973876953125, 14.049998539414284],
                  [-61.0235595703125, 14.028682219962148],
                  [-61.051025390625, 13.960723239632728],
                  [-61.088104248046875, 13.894077328726333],
                  [-61.0894775390625, 13.839413364573726]]]),
            {
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.28448486328125, 13.258659814691377],
                  [-61.28654479980469, 13.203849545203568],
                  [-61.255645751953125, 13.150364253259132],
                  [-61.21650695800781, 13.12161108499178],
                  [-61.17805480957031, 13.106230102044577],
                  [-61.143035888671875, 13.139665793362148],
                  [-61.1114501953125, 13.204518037332544],
                  [-61.104583740234375, 13.252644655996223],
                  [-61.11419677734375, 13.33083009512623],
                  [-61.11968994140625, 13.375591582002034],
                  [-61.154022216796875, 13.392291500938896],
                  [-61.197967529296875, 13.389619591747595],
                  [-61.222686767578125, 13.358890505573564],
                  [-61.25495910644531, 13.310116750415707]]]),
            {
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.29890441894531, 12.97980223312756],
                  [-61.259765625, 12.979133130990256],
                  [-61.261138916015625, 12.966419848296587],
                  [-61.28379821777344, 12.957051750634838],
                  [-61.274871826171875, 12.928276105253067],
                  [-61.24053955078125, 12.936306851970128],
                  [-61.21925354003906, 12.977794921312825],
                  [-61.18904113769531, 13.019945062332502],
                  [-61.20002746582031, 13.057405836652448],
                  [-61.23985290527344, 13.042020847922622],
                  [-61.28997802734375, 12.997867309754252]]]),
            {
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.1967658996582, 12.866949500257778],
                  [-61.19213104248047, 12.860673761983923],
                  [-61.18329048156738, 12.852222186472293],
                  [-61.17711067199707, 12.85858181434641],
                  [-61.17033004760742, 12.864355547470858],
                  [-61.169471740722656, 12.873894467582305],
                  [-61.165781021118164, 12.883098344677816],
                  [-61.16689682006836, 12.891716213952582],
                  [-61.16861343383789, 12.898074839918658],
                  [-61.173248291015625, 12.897991174836472],
                  [-61.17608070373535, 12.892971218715248],
                  [-61.180458068847656, 12.892636551393773],
                  [-61.182518005371094, 12.896736195246726],
                  [-61.186981201171875, 12.8931385522082],
                  [-61.18629455566406, 12.890210199932254],
                  [-61.18852615356445, 12.889540857459705],
                  [-61.19118690490723, 12.882010631364018],
                  [-61.18861198425293, 12.877910746429793],
                  [-61.195478439331055, 12.869961798862425]]]),
            {
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-59.662628173828125, 13.294747639977235],
                  [-59.655418395996094, 13.274365360742161],
                  [-59.65679168701172, 13.235600898868592],
                  [-59.647865295410156, 13.172762641720544],
                  [-59.652671813964844, 13.130972951295444],
                  [-59.637908935546875, 13.092520154722639],
                  [-59.63035583496094, 13.070783309000612],
                  [-59.59465026855469, 13.05774028229298],
                  [-59.54967498779297, 13.053392453653448],
                  [-59.54795837402344, 13.03031423708754],
                  [-59.51911926269531, 13.024962459162767],
                  [-59.42882537841797, 13.10455819812495],
                  [-59.40513610839844, 13.155713308217418],
                  [-59.438438415527344, 13.177108360420759],
                  [-59.47826385498047, 13.205855016100376],
                  [-59.53594207763672, 13.24395583087609],
                  [-59.5623779296875, 13.30343464825758],
                  [-59.5953369140625, 13.342856384476994],
                  [-59.63584899902344, 13.338847687855717],
                  [-59.65473175048828, 13.31479411223821]]]),
            {
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.82109832763672, 11.994995099034087],
                  [-61.79706573486328, 11.97014278912963],
                  [-61.761016845703125, 11.969471073335997],
                  [-61.653900146484375, 11.996002576838041],
                  [-61.60652160644531, 12.053758333689283],
                  [-61.583518981933594, 12.175608979394353],
                  [-61.589012145996094, 12.241042896657472],
                  [-61.62437438964844, 12.248759676234732],
                  [-61.675872802734375, 12.23668113888057],
                  [-61.718101501464844, 12.216549016305313],
                  [-61.758963629732875, 12.140025125098713],
                  [-61.76959991455078, 12.077595751733543],
                  [-61.792259216308594, 12.021859884778037]]]),
            {
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.497344970703125, 12.425847783029148],
                  [-61.50627136230469, 12.407071396201276],
                  [-61.50077819824219, 12.38225766609003],
                  [-61.47743225097656, 12.394329505461839],
                  [-61.46232604980469, 12.424506657477568],
                  [-61.42250061035156, 12.439929183588347],
                  [-61.398468017578125, 12.46876014482322],
                  [-61.403961181640625, 12.51970934358291],
                  [-61.42662048339844, 12.545180173463198],
                  [-61.44996643066406, 12.548531410992778],
                  [-61.45820617675781, 12.518368703890957],
                  [-61.49940490722656, 12.488872869773889],
                  [-61.51451110839844, 12.442611268597089]]]),
            {
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.457862854003906, 12.612531660390706],
                  [-61.472625732421875, 12.59477402876256],
                  [-61.456146240234375, 12.578690584147381],
                  [-61.42250061035156, 12.574669565529259],
                  [-61.389198303222656, 12.57500465281863],
                  [-61.37340545654297, 12.593433780220462],
                  [-61.39915466308594, 12.610856464703025],
                  [-61.42662048339844, 12.61755718169285],
                  [-61.450653076171875, 12.619232333535415]]]),
            {
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.391258239746094, 12.501610120300338],
                  [-61.37443542480469, 12.50529710199464],
                  [-61.367225646972656, 12.525071832687342],
                  [-61.372718811035156, 12.546185549302468],
                  [-61.38782501220703, 12.553558185479396],
                  [-61.39057159423828, 12.540153235388312],
                  [-61.39778137207031, 12.522725757420622]]]),
            {
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.35744094848633, 12.701468776125074],
                  [-61.35246276855469, 12.693430538560271],
                  [-61.343021392822266, 12.683047439111819],
                  [-61.32362365722656, 12.680535335290275],
                  [-61.31572723388672, 12.692425741001248],
                  [-61.31315231323242, 12.707832200618029],
                  [-61.30645751953125, 12.720391123319015],
                  [-61.307315826416016, 12.734958695149318],
                  [-61.312294006347656, 12.744335080265571],
                  [-61.322078704833984, 12.73914462422805],
                  [-61.330833435058594, 12.746679122329777],
                  [-61.3392448425293, 12.731944783414775],
                  [-61.33546829223633, 12.718549186860397],
                  [-61.34164810180664, 12.709674214809937],
                  [-61.35744094848633, 12.706827459975491]]]),
            {
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-61.40584945678711, 12.626937890764978],
                  [-61.39726638793945, 12.622415091827435],
                  [-61.38988494873047, 12.626100341439393],
                  [-61.389198303222656, 12.631628116297696],
                  [-61.38113021850586, 12.6351457289838],
                  [-61.38010025024414, 12.642515808093359],
                  [-61.38439178466797, 12.653570528017351],
                  [-61.39503479003906, 12.656250388023825],
                  [-61.40138626098633, 12.63950080142538]]]),
            {
              "system:index": "25"
            })]),
    input3 = ee.Image("users/images/input/PeurtoRico_2007-13_InputTOA"),
    prev = ee.Image("users/images/CarIS_2010_v2");
/***** End of imports. If edited, may not auto-convert in the playground. *****/
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR");
var zones2=ee.FeatureCollection("ft:13cK2cS_HzpvNGVZlIfH9zInVbJOMQgjXQKwgLHpL");
var countries = ee.FeatureCollection("ft:1tdSwUL7MVpOauSgRzqVTOwdfy17KDbw-1d9omPw"); 

function radians(img) {return img.toFloat().multiply(Math.PI).divide(180).divide(1.5708).toFloat();}
var terrain = ee.Algorithms.Terrain(ee.Image('USGS/SRTMGL1_003'));
var slope = radians(terrain.select('slope'));
var elevation = terrain.select('elevation').divide(4000.00).float();

//var data_input=ee.ImageCollection([input,input2,input3]).mosaic()
//data_input=data_input.select(ee.List.sequence(0,43)).addBands(slope).addBands(elevation);

//visual parameters for FCC display 
var vizParams = {
  bands: ['B4', 'B3', 'B2'],
  min: 0,
  max: 255,
  gamma: [1.5,1.6, 1.7]
};

//var FCC=ee.ImageCollection([CarIS, Barbados,PeurtoRico]).mosaic()
//add all max val to map

//Map.addLayer(FCC,vizParams,'FCC');

//print(countries)

//throw('stop')
//Map.addLayer(maxNDVI, {min:0, max:1


Map.addLayer(prev,{palette: '00ff00'},'Prev_crop')
throw('stop')

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

//var studyArea = zones.filterMetadata('name','equals','CarIS');

//var region= ee.FeatureCollection(countries.filterMetadata('Country','equals','CarIS'))
  //          .merge(ee.FeatureCollection(countries.filterMetadata('Country','equals','Dominican Republic')))
  //          .merge(ee.FeatureCollection(countries.filterMetadata('Country','equals','United States')))
var region = Islands.map(buffer2)
var studyArea = region
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

//input=ee.ImageCollection([input,input2]).mosaic();

print(data_input)

var training = data_input.sampleRegions({
    collection: TrainingSamples,
  properties: ['class'],
  scale: 30
});
  

//build classifier
var classifier = ee.Classifier.randomForest(100,5).train(training, 'class');

print ('Classifier properties:',classifier);

//classify 
var classified = data_input.classify(classifier);

classified = classified.updateMask(classified.eq(1)).clipToCollection(region);

////Export the classified image
Export.image.toAsset({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  description: 'CarIS_v1_asset',
  assetId: 'CarIS_2010_v1',
  //region: studyArea, 
});


Export.image.toDrive({
  image: classified,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'CarIS',
  fileNamePrefix: 'CarIS_2010_v1',
  //region: studyArea, 
});
 

Export.table.toDrive({
  collection: training,
  description: 'RandomForestTrainingTable_CarIS_v1',
  folder: 'data',
  fileNamePrefix: 'RFtable_CarIS_2010_v1',
  fileFormat: 'CSV'
});


//print('Classified',classified);

//add layer to map
Map.addLayer(classified, {palette: '00FF00'}, 'cropland');



