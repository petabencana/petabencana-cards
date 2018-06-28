export default {
  name: 'riskmap_in',
  supported_card_decks: {
    flood: [
      'location',
      'depth',
      'photo',
      'description',
      'review'
    ],
    prep: [
      'prep',
      'location',
      'photo',
      'description',
      'review'
    ]
  },
  height_units: 'cm',
  map: {
    'instance_regions': {
      'chennai': {
        'region': 'chn',
        'bounds': { //arbit bounding box drawn in QGIS. So the edges aren't orthogonal
          'sw': [ 12.6884, 79.9248],
          'ne': [ 13.3766, 80.5413]
        }
      },
      'mumbai': {
        'region': 'mum',
        'bounds': { //arbit bounding box drawn in QGIS. So the edges aren't orthogonal
          'sw': [18.860, 72.704],
          'ne': [19.297, 73.095]
        }
      },
      'bangalore': {
        'region': 'blr',
        'bounds': { //arbit bounding box drawn in QGIS. So the edges aren't orthogonal
          'sw': [12.763, 77.365],
          'ne': [13.200, 77.866]
        }
      }
    },
    'default_region': {
      'region': 'chn',
      'bounds': {
        'sw': [ 12.6884, 79.9248],
        'ne': [ 13.3766, 80.5413]
      }
    },
    'region_center': [13.017163, 80.185031],
    'start_city_center': [13.017163, 80.185031]
  }
};
