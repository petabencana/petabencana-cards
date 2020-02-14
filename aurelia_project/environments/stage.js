export default {
  debug: true,
  testing: false,
  enable_test_cardid: true,

  //deployment specific env params
  riskmap_us: {
    title: 'RiskMap.us',
    supported_languages: ['en', 'es'],
    default_language: 'en',
    tile_layer: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidXJiYW5yaXNrbWFwIiwiYSI6ImNqMnFraWVzYzAyd24ycXRqMmpvbmhyZ2QifQ.xc_v7umok760t2q6NZK1RA',
    data_server: 'https://data.riskmap.us/',
    app: 'https://riskmap.us/'
  },
  petabencana: {
    title: 'PetaBencana.id',
    supported_languages: ['en', 'id'],
    default_language: 'en',
    tile_layer: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicGV0YWJlbmNhbmEiLCJhIjoiY2s2MjF1cnZmMDlxdzNscWc5MGVoMTRkeCJ9.PGcoQqU6lBrcLfBmvTrWrQ',
    data_server: 'https://data-dev.petabencana.id/',
    app: 'https://dev.petabencana.id/'
  },
  riskmap_in: {
    title: 'RiskMap.in',
    supported_languages: ['en', 'hi'],
    default_language: 'en',
    tile_layer: 'https://api.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoidXJiYW5yaXNrbWFwIiwiYSI6ImNqMnFraWVzYzAyd24ycXRqMmpvbmhyZ2QifQ.xc_v7umok760t2q6NZK1RA',
    data_server: 'https://data-dev.riskmap.in/',
    app: 'https://dev.riskmap.in/'
  }
};
