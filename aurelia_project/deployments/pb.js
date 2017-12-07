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
  map: {
    "instance_regions": {
      "jakarta": {
        "region": "jbd",
        "bounds": {
          "sw":[-6.733, 106.480],
          "ne":[-5.880, 107.175]
        }
      },
      "surabaya": {
        "region": "sby",
        "bounds": {
          "sw":[-7.5499, 112.3975],
          "ne":[-7.0143, 113.0318]
        }
      },
      "bandung": {
        "region": "bdg",
        "bounds": {
          "sw":[-7.165, 107.369],
          "ne":[-6.668, 107.931]
        }
      },
      'Semarang': {
        'region': 'srg',
        'bounds': {
          'sw': [-7.33525, 110.057],
          'ne': [-6.72701, 110.715]
        }
      }
    },
    "default_region": {
      "region": "java",
      "bounds": {
        "sw":[-10.293, 104.677],
        "ne":[-3.974, 115.290]
      }
    },
    "region_center": [-7, 110],
    "start_city_center": [-6.1754, 106.8271]
  }
};
