export default {
  name: 'petabencana',
  supported_card_decks: {
    flood: [
      'location',
      'depth',
      'photo',
      'description',
      'review'
    ]
  },
  height_units: 'cm',
  // map: {
  //   'instance_regions': {
  //     'jakarta': {
  //       'region': 'jbd',
  //       'bounds': {
  //         'sw': [-6.733, 106.480],
  //         'ne': [-5.880, 107.175]
  //       },
  //       'center': [-6.1751, 106.8650]
  //     },
  //     'surabaya': {
  //       'region': 'sby',
  //       'bounds': {
  //         'sw': [-7.5499, 112.3975],
  //         'ne': [-7.0143, 113.0318]
  //       },
  //       'center': [-7.2575, 112.7521]
  //     },
  //     'bandung': {
  //       'region': 'bdg',
  //       'bounds': {
  //         'sw': [-7.165, 107.369],
  //         'ne': [-6.668, 107.931]
  //       },
  //       'center': [-6.9175, 107.6191]
  //     },
  //     'semarang': {
  //       'region': 'srg',
  //       'bounds': {
  //         'sw': [-7.33525, 110.057],
  //         'ne': [-6.72701, 110.715]
  //       },
  //       'center': [-7.0051, 110.4381]
  //     }
  //   },
  //   'default_region': {
  //     'region': 'java',
  //     'bounds': {
  //       'sw': [-10.293, 104.677],
  //       'ne': [-3.974, 115.290]
  //     }
  //   },
  //   'region_center': [-7, 110],
  //   'start_city_center': [-6.1754, 106.8271]
  // }
  map: {
    'instance_regions': {
      'Bali': {
        'region': 'ID-BA',
        'bounds': { 'sw': [-8.85, 114.432], 'ne': [-8.062, 115.712] },
        'center': [-8.36973255954, 115.132168072]
      },
      'West Nusa Tenggara': {
        'region': 'ID-NB',
        'bounds': { 'sw': [-9.109, 115.821], 'ne': [-8.08, 119.346] },
        'center': [-8.60664308169, 117.508502604]
      },
      'Banten': {
        'region': 'ID-BT',
        'bounds': { 'sw': [-7.016, 105.1], 'ne': [-5.808, 106.78] },
        'center': [-6.4560436924, 106.109003345]
      },
      'Central Java': {
        'region': 'ID-JT',
        'bounds': { 'sw': [-8.212, 108.556], 'ne': [-5.726, 111.691] },
        'center': [-7.25948735657, 110.20004621]
      },
      'West Java': {
        'region': 'ID-JB',
        'bounds': { 'sw': [-7.821, 106.371], 'ne': [-5.915, 108.838] },
        'center': [-6.91984099888, 107.603019928]
      },
      'Central Kalimantan': {
        'region': 'ID-KT',
        'bounds': { 'sw': [-3.544, 110.733], 'ne': [0.795, 115.849] },
        'center': [-1.59986833375, 113.416768894]
      },
      'South Kalimantan': {
        'region': 'ID-KS',
        'bounds': { 'sw': [-4.943, 114.351], 'ne': [-1.302, 117.458] },
        'center': [-3.00041784628, 115.435540688]
      },
      'West Kalimantan': {
        'region': 'ID-KB',
        'bounds': { 'sw': [-3.068, 108.599], 'ne': [2.082, 114.207] },
        'center': [-0.0848925686634, 111.121996064]
      },
      'Central Sulawesi': {
        'region': 'ID-ST',
        'bounds': { 'sw': [-3.322, 119.422], 'ne': [1.374, 124.033] },
        'center': [-1.00566716709, 121.204195805]
      },
      'Gorontalo': {
        'region': 'ID-GO',
        'bounds': { 'sw': [0.306, 121.156], 'ne': [1.041, 123.552] },
        'center': [0.686199890399, 122.378574556]
      },
      'North Sulawesi': {
        'region': 'ID-SA',
        'bounds': { 'sw': [0.292, 123.112], 'ne': [5.566, 127.164] },
        'center': [1.26232917435, 124.523721467]
      },
      'South Sulawesi': {
        'region': 'ID-SN',
        'bounds': { 'sw': [-7.76, 117.038], 'ne': [-1.891, 122.222] },
        'center': [-3.70844057841, 120.173198612]
      },
      'Southeast Sulawesi': {
        'region': 'ID-SG',
        'bounds': { 'sw': [-6.213, 120.866], 'ne': [-2.77, 124.612] },
        'center': [-4.14210580132, 122.078902867]
      },
      'West Sulawesi': {
        'region': 'ID-SR',
        'bounds': { 'sw': [-3.571, 118.757], 'ne': [-0.861, 119.876] },
        'center': [-2.46403742395, 119.3428688]
      },
      'Aceh': {
        'region': 'ID-AC',
        'bounds': { 'sw': [1.976, 95.011], 'ne': [6.077, 98.286] },
        'center': [4.22568208825, 96.9100985353]
      },
      'Bengkulu': {
        'region': 'ID-BE',
        'bounds': { 'sw': [-5.514, 100.635], 'ne': [-2.277, 103.781] },
        'center': [-3.55942250949, 102.342881214]
      },
      'Jambi': {
        'region': 'ID-JA',
        'bounds': { 'sw': [-2.782, 101.123], 'ne': [-0.746, 104.491] },
        'center': [-1.697925239, 102.718958759]
      },
      'Lampung': {
        'region': 'ID-LA',
        'bounds': { 'sw': [-6.168, 103.593], 'ne': [-3.724, 105.916] },
        'center': [-4.91741365604, 105.020973741]
      },
      'Riau': {
        'region': 'ID-RI',
        'bounds': { 'sw': [-1.12, 100.025], 'ne': [2.883, 103.815] },
        'center': [0.509489372568, 101.817168906]
      },
      'West Sumatra': {
        'region': 'ID-SB',
        'bounds': { 'sw': [-3.349, 98.596], 'ne': [0.907, 101.886] },
        'center': [-0.841344968749, 100.464249647]
      },
      'South Sumatra': {
        'region': 'ID-SS',
        'bounds': { 'sw': [-4.924, 102.041], 'ne': [-1.627, 106.221] },
        'center': [-3.21342238304, 104.168798179]
      },
      'North Sumatra': {
        'region': 'ID-SU',
        'bounds': { 'sw': [-0.639, 97.058], 'ne': [4.302, 100.571] },
        'center': [2.19265505812, 99.0510137796]
      },
      'East Nusa Tenggara': {
        'region': 'ID-NT',
        'bounds': { 'sw': [-11.008, 118.927], 'ne': [-7.778, 125.193] },
        'center': [-9.26053073914, 122.179813719]
      },
      'Maluku': {
        'region': 'ID-MA',
        'bounds': { 'sw': [-8.345, 125.723], 'ne': [-2.725, 134.909] },
        'center': [-4.74070528384, 129.850905684]
      },
      'North Maluku': {
        'region': 'ID-MU',
        'bounds': { 'sw': [-2.477, 124.144], 'ne': [2.645, 129.657] },
        'center': [0.212859801992, 127.539815607]
      },
      'East Java': {
        'region': 'ID-JI',
        'bounds': { 'sw': [-8.781, 110.899], 'ne': [-5.043, 116.27] },
        'center': [-7.72095096893, 112.726913253]
      },
      'Bangka-Belitung Islands': {
        'region': 'ID-BB',
        'bounds': { 'sw': [-3.341, 105.108], 'ne': [-0.909, 109.389] },
        'center': [-2.42164574375, 106.574940677]
      },
      'Riau Islands': {
        'region': 'ID-KR',
        'bounds': { 'sw': [-0.87, 103.284], 'ne': [4.796, 109.168] },
        'center': [1.48126244893, 105.404211405]
      },
      'Papua': {
        'region': 'ID-PA',
        'bounds': { 'sw': [-9.127, 134.299], 'ne': [0.938, 141.02] },
        'center': [-4.65867452699, 138.695140787]
      },
      'West Papua': {
        'region': 'ID-PB',
        'bounds': { 'sw': [-4.315, 129.3], 'ne': [1.081, 135.258] },
        'center': [-2.04271934888, 132.972376543]
      },
      'East Kalimantan': {
        'region': 'ID-KI',
        'bounds': { 'sw': [-2.541, 113.836], 'ne': [2.569, 119.038] },
        'center': [0.453493733739, 116.459483436]
      },
      'North Kalimantan': {
        'region': 'ID-KU',
        'bounds': { 'sw': [1.114, 114.565], 'ne': [4.408, 117.991] },
        'center': [2.9182033782, 116.249394237]
      },
      'Special Region of Yogyakarta': {
        'region': 'ID-YO',
        'bounds': { 'sw': [-8.204, 110.003], 'ne': [-7.541, 110.839] },
        'center': [-7.89510163766, 110.445807952]
      },
      'Jakarta Special Capital Region': {
        'region': 'ID-JK',
        'bounds': { 'sw': [-6.374, 106.39], 'ne': [-5.202, 106.974] },
        'center': [-6.19875625864, 106.834075859]
      }
    },
    'sub_regions': {
      'simeulue': 'Aceh',
      'aceh': 'Aceh',
      'aceh singkil': 'Aceh',
      'aceh selatan': 'Aceh',
      'aceh tenggara': 'Aceh',
      'aceh timur': 'Aceh',
      'aceh tengah': 'Aceh',
      'aceh barat': 'Aceh',
      'aceh besar': 'Aceh',
      'pidie': 'Aceh',
      'bireuen': 'Aceh',
      'aceh utara': 'Aceh',
      'aceh barat daya': 'Aceh',
      'gayo lues': 'Aceh',
      'aceh tamiang': 'Aceh',
      'nagan raya': 'Aceh',
      'aceh jaya': 'Aceh',
      'bener meriah': 'Aceh',
      'pidie jaya': 'Aceh',
      'banda aceh': 'Aceh',
      'sabang': 'Aceh',
      'langsa': 'Aceh',
      'lhokseumawe': 'Aceh',
      'subulussalam': 'Aceh',
      'nias': 'North Sumatra',
      'sumatera utara': 'North Sumatra',
      'mandailing natal': 'North Sumatra',
      'tapanuli selatan': 'North Sumatra',
      'tapanuli tengah': 'North Sumatra',
      'tapanuli utara': 'North Sumatra',
      'toba samosir': 'North Sumatra',
      'labuhan batu': 'North Sumatra',
      'asahan': 'North Sumatra',
      'simalungun': 'North Sumatra',
      'dairi': 'North Sumatra',
      'karo': 'North Sumatra',
      'deli serdang': 'North Sumatra',
      'langkat': 'North Sumatra',
      'nias selatan': 'North Sumatra',
      'humbang hasundutan': 'North Sumatra',
      'pakpak bharat': 'North Sumatra',
      'samosir': 'North Sumatra',
      'serdang bedagai': 'North Sumatra',
      'batu bara': 'North Sumatra',
      'padang lawas utara': 'North Sumatra',
      'padang lawas': 'North Sumatra',
      'labuhan batu selatan': 'North Sumatra',
      'labuhan batu utara': 'North Sumatra',
      'nias utara': 'North Sumatra',
      'nias barat': 'North Sumatra',
      'sibolga': 'North Sumatra',
      'tanjung balai': 'North Sumatra',
      'pematang siantar': 'North Sumatra',
      'tebing tinggi': 'North Sumatra',
      'medan': 'North Sumatra',
      'binjai': 'North Sumatra',
      'padangsidimpuan': 'North Sumatra',
      'gunungsitoli': 'North Sumatra',
      'danau toba': 'North Sumatra',
      'kepulauan mentawai': 'West Sumatra',
      'sumatera barat': 'West Sumatra',
      'pesisir selatan': 'West Sumatra',
      'solok': 'West Sumatra',
      'sijunjung': 'West Sumatra',
      'tanah datar': 'West Sumatra',
      'padang pariaman': 'West Sumatra',
      'agam': 'West Sumatra',
      'lima puluh kota': 'West Sumatra',
      'pasaman': 'West Sumatra',
      'solok selatan': 'West Sumatra',
      'dharmasraya': 'West Sumatra',
      'pasaman barat': 'West Sumatra',
      'padang': 'West Sumatra',
      'sawah lunto': 'West Sumatra',
      'padang panjang': 'West Sumatra',
      'bukittinggi': 'West Sumatra',
      'payakumbuh': 'West Sumatra',
      'pariaman': 'West Sumatra',
      'danau': 'North Sulawesi',
      'kuantan singingi': 'Riau',
      'riau': 'Riau',
      'indragiri hulu': 'Riau',
      'indragiri hilir': 'Riau',
      'pelalawan': 'Riau',
      's i a k': 'Riau',
      'kampar': 'Riau',
      'rokan hulu': 'Riau',
      'bengkalis': 'Riau',
      'rokan hilir': 'Riau',
      'kepulauan meranti': 'Riau',
      'pekanbaru': 'Riau',
      'd u m a i': 'Riau',
      'kerinci': 'Jambi',
      'jambi': 'Jambi',
      'merangin': 'Jambi',
      'sarolangun': 'Jambi',
      'batang hari': 'Jambi',
      'muaro jambi': 'Jambi',
      'tanjung jabung timur': 'Jambi',
      'tanjung jabung barat': 'Jambi',
      'tebo': 'Jambi',
      'bungo': 'Jambi',
      'sungai penuh': 'Jambi',
      'ogan komering ulu': 'South Sumatra',
      'sumatera selatan': 'South Sumatra',
      'ogan komering ilir': 'South Sumatra',
      'muara enim': 'South Sumatra',
      'lahat': 'South Sumatra',
      'musi rawas': 'South Sumatra',
      'musi banyuasin': 'South Sumatra',
      'banyuasin': 'South Sumatra',
      'ogan komering ulu selatan': 'South Sumatra',
      'ogan komering ulu timur': 'South Sumatra',
      'ogan ilir': 'South Sumatra',
      'empat lawang': 'South Sumatra',
      'penukal abab lematang ilir': 'South Sumatra',
      'musi rawas utara': 'South Sumatra',
      'palembang': 'South Sumatra',
      'prabumulih': 'South Sumatra',
      'pagar alam': 'South Sumatra',
      'lubuklinggau': 'South Sumatra',
      'bengkulu selatan': 'Bengkulu',
      'bengkulu': 'Bengkulu',
      'rejang lebong': 'Bengkulu',
      'bengkulu utara': 'Bengkulu',
      'kaur': 'Bengkulu',
      'seluma': 'Bengkulu',
      'mukomuko': 'Bengkulu',
      'lebong': 'Bengkulu',
      'kepahiang': 'Bengkulu',
      'bengkulu tengah': 'Bengkulu',
      'lampung barat': 'Lampung',
      'lampung': 'Lampung',
      'tanggamus': 'Lampung',
      'lampung selatan': 'Lampung',
      'lampung timur': 'Lampung',
      'lampung tengah': 'Lampung',
      'lampung utara': 'Lampung',
      'way kanan': 'Lampung',
      'tulangbawang': 'Lampung',
      'pesawaran': 'Lampung',
      'pringsewu': 'Lampung',
      'mesuji': 'Lampung',
      'tulang bawang barat': 'Lampung',
      'pesisir barat': 'Lampung',
      'bandar lampung': 'Lampung',
      'metro': 'Lampung',
      'bangka': 'Bangka-Belitung Islands',
      'kepulauan bangka belitung': 'Bangka-Belitung Islands',
      'belitung': 'Bangka-Belitung Islands',
      'bangka barat': 'Bangka-Belitung Islands',
      'bangka tengah': 'Bangka-Belitung Islands',
      'bangka selatan': 'Bangka-Belitung Islands',
      'belitung timur': 'Bangka-Belitung Islands',
      'pangkal pinang': 'Bangka-Belitung Islands',
      'karimun': 'Riau Islands',
      'kepulauan riau': 'Riau Islands',
      'bintan': 'Riau Islands',
      'natuna': 'Riau Islands',
      'lingga': 'Riau Islands',
      'kepulauan anambas': 'Riau Islands',
      'batam': 'Riau Islands',
      'tanjungpinang': 'Riau Islands',
      'kepulauan seribu': 'Jakarta Special Capital Region',
      'daerah khusus ibukota jakarta': 'Jakarta Special Capital Region',
      'jakarta selatan': 'Jakarta Special Capital Region',
      'jakarta timur': 'Jakarta Special Capital Region',
      'jakarta pusat': 'Jakarta Special Capital Region',
      'jakarta barat': 'Jakarta Special Capital Region',
      'jakarta utara': 'Jakarta Special Capital Region',
      'bogor': 'West Java',
      'jawa barat': 'West Java',
      'sukabumi': 'West Java',
      'cianjur': 'West Java',
      'bandung': 'West Java',
      'garut': 'West Java',
      'tasikmalaya': 'West Java',
      'ciamis': 'West Java',
      'kuningan': 'West Java',
      'cirebon': 'West Java',
      'majalengka': 'West Java',
      'sumedang': 'West Java',
      'indramayu': 'West Java',
      'subang': 'West Java',
      'purwakarta': 'West Java',
      'karawang': 'West Java',
      'bekasi': 'West Java',
      'bandung barat': 'West Java',
      'pangandaran': 'West Java',
      'depok': 'West Java',
      'cimahi': 'West Java',
      'banjar': 'South Kalimantan',
      'waduk cira': 'West Java',
      'cilacap': 'Central Java',
      'jawa tengah': 'Central Java',
      'banyumas': 'Central Java',
      'purbalingga': 'Central Java',
      'banjarnegara': 'Central Java',
      'kebumen': 'Central Java',
      'purworejo': 'Central Java',
      'wonosobo': 'Central Java',
      'magelang': 'Central Java',
      'boyolali': 'Central Java',
      'klaten': 'Central Java',
      'sukoharjo': 'Central Java',
      'wonogiri': 'Central Java',
      'karanganyar': 'Central Java',
      'sragen': 'Central Java',
      'grobogan': 'Central Java',
      'blora': 'Central Java',
      'rembang': 'Central Java',
      'pati': 'Central Java',
      'kudus': 'Central Java',
      'jepara': 'Central Java',
      'demak': 'Central Java',
      'semarang': 'Central Java',
      'temanggung': 'Central Java',
      'kendal': 'Central Java',
      'batang': 'Central Java',
      'pekalongan': 'Central Java',
      'pemalang': 'Central Java',
      'tegal': 'Central Java',
      'brebes': 'Central Java',
      'surakarta': 'Central Java',
      'salatiga': 'Central Java',
      'waduk kedu': 'Central Java',
      'hutan': 'Central Java',
      'kulonprogo': 'Special Region of Yogyakarta',
      'daerah istimewa yogyakarta': 'Special Region of Yogyakarta',
      'bantul': 'Special Region of Yogyakarta',
      'gunungkidul': 'Special Region of Yogyakarta',
      'sleman': 'Special Region of Yogyakarta',
      'kota yogyakarta': 'Special Region of Yogyakarta',
      'pacitan': 'East Java',
      'jawa timur': 'East Java',
      'ponorogo': 'East Java',
      'trenggalek': 'East Java',
      'tulungagung': 'East Java',
      'blitar': 'East Java',
      'kediri': 'East Java',
      'malang': 'East Java',
      'lumajang': 'East Java',
      'jember': 'East Java',
      'banyuwangi': 'East Java',
      'bondowoso': 'East Java',
      'situbondo': 'East Java',
      'probolinggo': 'East Java',
      'pasuruan': 'East Java',
      'sidoarjo': 'East Java',
      'mojokerto': 'East Java',
      'jombang': 'East Java',
      'nganjuk': 'East Java',
      'madiun': 'East Java',
      'magetan': 'East Java',
      'ngawi': 'East Java',
      'bojonegoro': 'East Java',
      'tuban': 'East Java',
      'lamongan': 'East Java',
      'gresik': 'East Java',
      'bangkalan': 'East Java',
      'sampang': 'East Java',
      'pamekasan': 'East Java',
      'sumenep': 'East Java',
      'surabaya': 'East Java',
      'batu': 'East Java',
      'pandeglang': 'Banten',
      'banten': 'Banten',
      'lebak': 'Banten',
      'tangerang': 'Banten',
      'serang': 'Banten',
      'cilegon': 'Banten',
      'tangerang selatan': 'Banten',
      'jembrana': 'Bali',
      'bali': 'Bali',
      'tabanan': 'Bali',
      'badung': 'Bali',
      'gianyar': 'Bali',
      'klungkung': 'Bali',
      'bangli': 'Bali',
      'karang asem': 'Bali',
      'buleleng': 'Bali',
      'denpasar': 'Bali',
      'lombok barat': 'West Nusa Tenggara',
      'nusa tenggara barat': 'West Nusa Tenggara',
      'lombok tengah': 'West Nusa Tenggara',
      'lombok timur': 'West Nusa Tenggara',
      'sumbawa': 'West Nusa Tenggara',
      'dompu': 'West Nusa Tenggara',
      'bima': 'West Nusa Tenggara',
      'sumbawa barat': 'West Nusa Tenggara',
      'lombok utara': 'West Nusa Tenggara',
      'mataram': 'West Nusa Tenggara',
      'sumba barat': 'East Nusa Tenggara',
      'nusa tenggara timur': 'East Nusa Tenggara',
      'sumba timur': 'East Nusa Tenggara',
      'kupang': 'East Nusa Tenggara',
      'timor tengah selatan': 'East Nusa Tenggara',
      'timor tengah utara': 'East Nusa Tenggara',
      'belu': 'East Nusa Tenggara',
      'alor': 'East Nusa Tenggara',
      'lembata': 'East Nusa Tenggara',
      'flores timur': 'East Nusa Tenggara',
      'sikka': 'East Nusa Tenggara',
      'ende': 'East Nusa Tenggara',
      'ngada': 'East Nusa Tenggara',
      'manggarai': 'East Nusa Tenggara',
      'rote ndao': 'East Nusa Tenggara',
      'manggarai barat': 'East Nusa Tenggara',
      'sumba tengah': 'East Nusa Tenggara',
      'sumba barat daya': 'East Nusa Tenggara',
      'nagekeo': 'East Nusa Tenggara',
      'manggarai timur': 'East Nusa Tenggara',
      'sabu raijua': 'East Nusa Tenggara',
      'malaka': 'East Nusa Tenggara',
      'kota kupang': 'East Nusa Tenggara',
      'sambas': 'West Kalimantan',
      'kalimantan barat': 'West Kalimantan',
      'bengkayang': 'West Kalimantan',
      'landak': 'West Kalimantan',
      'pontianak': 'West Kalimantan',
      'sanggau': 'West Kalimantan',
      'ketapang': 'West Kalimantan',
      'sintang': 'West Kalimantan',
      'kapuas hulu': 'West Kalimantan',
      'sekadau': 'West Kalimantan',
      'melawi': 'West Kalimantan',
      'kayong utara': 'West Kalimantan',
      'kubu raya': 'West Kalimantan',
      'singkawang': 'West Kalimantan',
      'kotawaringin barat': 'Central Kalimantan',
      'kalimantan tengah': 'Central Kalimantan',
      'kotawaringin timur': 'Central Kalimantan',
      'kapuas': 'Central Kalimantan',
      'barito selatan': 'Central Kalimantan',
      'barito utara': 'Central Kalimantan',
      'sukamara': 'Central Kalimantan',
      'lamandau': 'Central Kalimantan',
      'seruyan': 'Central Kalimantan',
      'katingan': 'Central Kalimantan',
      'pulang pisau': 'Central Kalimantan',
      'gunung mas': 'Central Kalimantan',
      'barito timur': 'Central Kalimantan',
      'murung raya': 'Central Kalimantan',
      'palangka raya': 'Central Kalimantan',
      'tanah laut': 'South Kalimantan',
      'kalimantan selatan': 'South Kalimantan',
      'kota baru': 'South Kalimantan',
      'barito kuala': 'South Kalimantan',
      'tapin': 'South Kalimantan',
      'hulu sungai selatan': 'South Kalimantan',
      'hulu sungai tengah': 'South Kalimantan',
      'hulu sungai utara': 'South Kalimantan',
      'tabalong': 'South Kalimantan',
      'tanah bumbu': 'South Kalimantan',
      'balangan': 'South Kalimantan',
      'banjarmasin': 'South Kalimantan',
      'banjar baru': 'South Kalimantan',
      'paser': 'East Kalimantan',
      'kalimantan timur': 'East Kalimantan',
      'kutai barat': 'East Kalimantan',
      'kutai kartanegara': 'East Kalimantan',
      'kutai timur': 'East Kalimantan',
      'berau': 'East Kalimantan',
      'penajam paser utara': 'East Kalimantan',
      'mahakam ulu': 'East Kalimantan',
      'balikpapan': 'East Kalimantan',
      'samarinda': 'East Kalimantan',
      'bontang': 'East Kalimantan',
      'malinau': 'North Kalimantan',
      'kalimantan utara': 'North Kalimantan',
      'bulungan': 'North Kalimantan',
      'tana tidung': 'North Kalimantan',
      'nunukan': 'North Kalimantan',
      'tarakan': 'North Kalimantan',
      'bolaang mongondow': 'North Sulawesi',
      'sulawesi utara': 'North Sulawesi',
      'minahasa': 'North Sulawesi',
      'kepulauan sangihe': 'North Sulawesi',
      'kepulauan talaud': 'North Sulawesi',
      'minahasa selatan': 'North Sulawesi',
      'minahasa utara': 'North Sulawesi',
      'bolaang mongondow utara': 'North Sulawesi',
      'siau tagulandang biaro': 'North Sulawesi',
      'minahasa tenggara': 'North Sulawesi',
      'bolaang mongondow selatan': 'North Sulawesi',
      'bolaang mongondow timur': 'North Sulawesi',
      'manado': 'North Sulawesi',
      'bitung': 'North Sulawesi',
      'tomohon': 'North Sulawesi',
      'kotamobagu': 'North Sulawesi',
      'banggai kepulauan': 'Central Sulawesi',
      'sulawesi tengah': 'Central Sulawesi',
      'banggai': 'Central Sulawesi',
      'morowali': 'Central Sulawesi',
      'poso': 'Central Sulawesi',
      'donggala': 'Central Sulawesi',
      'toli-toli': 'Central Sulawesi',
      'buol': 'Central Sulawesi',
      'parigi moutong': 'Central Sulawesi',
      'tojo una-una': 'Central Sulawesi',
      'sigi': 'Central Sulawesi',
      'banggai laut': 'Central Sulawesi',
      'morowali utara': 'Central Sulawesi',
      'palu': 'Central Sulawesi',
      'kepulauan selayar': 'South Sulawesi',
      'sulawesi selatan': 'South Sulawesi',
      'bulukumba': 'South Sulawesi',
      'bantaeng': 'South Sulawesi',
      'jeneponto': 'South Sulawesi',
      'takalar': 'South Sulawesi',
      'gowa': 'South Sulawesi',
      'sinjai': 'South Sulawesi',
      'maros': 'South Sulawesi',
      'pangkajene dan kepulauan': 'South Sulawesi',
      'barru': 'South Sulawesi',
      'bone': 'South Sulawesi',
      'soppeng': 'South Sulawesi',
      'wajo': 'South Sulawesi',
      'sidenreng rappang': 'South Sulawesi',
      'pinrang': 'South Sulawesi',
      'enrekang': 'South Sulawesi',
      'luwu': 'South Sulawesi',
      'tana toraja': 'South Sulawesi',
      'luwu utara': 'South Sulawesi',
      'luwu timur': 'South Sulawesi',
      'toraja utara': 'South Sulawesi',
      'makassar': 'South Sulawesi',
      'parepare': 'South Sulawesi',
      'palopo': 'South Sulawesi',
      'buton': 'Southeast Sulawesi',
      'sulawesi tenggara': 'Southeast Sulawesi',
      'muna': 'Southeast Sulawesi',
      'konawe': 'Southeast Sulawesi',
      'kolaka': 'Southeast Sulawesi',
      'konawe selatan': 'Southeast Sulawesi',
      'bombana': 'Southeast Sulawesi',
      'wakatobi': 'Southeast Sulawesi',
      'kolaka utara': 'Southeast Sulawesi',
      'buton utara': 'Southeast Sulawesi',
      'konawe utara': 'Southeast Sulawesi',
      'kolaka timur': 'Southeast Sulawesi',
      'kendari': 'Southeast Sulawesi',
      'baubau': 'Southeast Sulawesi',
      'boalemo': 'Gorontalo',
      'gorontalo': 'Gorontalo',
      'pohuwato': 'Gorontalo',
      'bone bolango': 'Gorontalo',
      'gorontalo utara': 'Gorontalo',
      'majene': 'West Sulawesi',
      'sulawesi barat': 'West Sulawesi',
      'polewali mandar': 'West Sulawesi',
      'mamasa': 'West Sulawesi',
      'mamuju': 'West Sulawesi',
      'mamuju utara': 'West Sulawesi',
      'mamuju tengah': 'West Sulawesi',
      'maluku tenggara barat': 'Maluku',
      'maluku': 'Maluku',
      'maluku tenggara': 'Maluku',
      'maluku tengah': 'Maluku',
      'buru': 'Maluku',
      'kepulauan aru': 'Maluku',
      'seram bagian barat': 'Maluku',
      'seram bagian timur': 'Maluku',
      'maluku barat daya': 'Maluku',
      'buru selatan': 'Maluku',
      'ambon': 'Maluku',
      'tual': 'Maluku',
      'halmahera barat': 'North Maluku',
      'maluku utara': 'North Maluku',
      'halmahera tengah': 'North Maluku',
      'kepulauan sula': 'North Maluku',
      'halmahera selatan': 'North Maluku',
      'halmahera utara': 'North Maluku',
      'halmahera timur': 'North Maluku',
      'pulau morotai': 'North Maluku',
      'pulau taliabu': 'North Maluku',
      'ternate': 'North Maluku',
      'tidore kepulauan': 'North Maluku',
      'fakfak': 'West Papua',
      'papua barat': 'West Papua',
      'kaimana': 'West Papua',
      'teluk wondama': 'West Papua',
      'teluk bintuni': 'West Papua',
      'manokwari': 'West Papua',
      'sorong selatan': 'West Papua',
      'sorong': 'West Papua',
      'raja ampat': 'West Papua',
      'tambrauw': 'West Papua',
      'maybrat': 'West Papua',
      'manokwari selatan': 'West Papua',
      'pegunungan arfak': 'West Papua',
      'merauke': 'Papua',
      'papua': 'Papua',
      'jayawijaya': 'Papua',
      'jayapura': 'Papua',
      'nabire': 'Papua',
      'kepulauan yapen': 'Papua',
      'biak numfor': 'Papua',
      'paniai': 'Papua',
      'puncak jaya': 'Papua',
      'mimika': 'Papua',
      'boven digoel': 'Papua',
      'mappi': 'Papua',
      'asmat': 'Papua',
      'yahukimo': 'Papua',
      'pegunungan bintang': 'Papua',
      'tolikara': 'Papua',
      'sarmi': 'Papua',
      'keerom': 'Papua',
      'waropen': 'Papua',
      'supiori': 'Papua',
      'mamberamo raya': 'Papua',
      'nduga': 'Papua',
      'lanny jaya': 'Papua',
      'mamberamo tengah': 'Papua',
      'yalimo': 'Papua',
      'puncak': 'Papua',
      'dogiyai': 'Papua',
      'intan jaya': 'Papua',
      'deiyai': 'Papua'
    },
    'default_region': {
      'region': 'java',
      'bounds': {
        'sw': [-11.0076711, 95.0107985], // [ymin , xmin]
        'ne': [6.076744, 141.0200345] // [ymax, xmax]
      }
    },
    'region_center': [-2.465463549999999, 118.01541650000001],
    'start_city_center': [-6.1754, 106.8271],
    'starting_zoom': 6,
    'minimum_zoom': 5
  }
};
