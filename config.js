module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    "nodeInfos": [
      {
        "name": "",
        "href": "https://stats.freifunk-kitzingen.de/d/000000002/node?orgId=1&var-node={NODE_ID}&from=now-7d&to=now&refresh=5m",
        "image": "https://stats.freifunk-kitzingen.de/render/d-solo/000000002/node?orgId=1&panelId=1&var-node={NODE_ID}&from=now-7d&to=now&width=500&height=200&theme=light",
        "title": "Knoten {NODE_NAME} ({NODE_ID})"
      },
      {
        "name": "",
        "href": "https://stats.freifunk-kitzingen.de/d/000000002/node?orgId=1&var-node={NODE_ID}&from=now-7d&to=now&refresh=5m",
        "image": "https://stats.freifunk-kitzingen.de/render/d-solo/000000002/node?orgId=1&panelId=2&var-node={NODE_ID}&from=now-7d&to=now&width=500&height=200&theme=light",
        "title": "Knoten {NODE_NAME} ({NODE_ID})"
      },
      {
        "name": "",
        "href": "https://stats.freifunk-kitzingen.de/d/000000002/node?orgId=1&var-node={NODE_ID}&from=now-7d&to=now&refresh=5m",
        "image": "https://stats.freifunk-kitzingen.de/render/d-solo/000000002/node?orgId=1&panelId=14&var-node={NODE_ID}&from=now-7d&to=now&width=500&height=160&theme=light",
        "title": "Knoten {NODE_NAME} ({NODE_ID})"
      },
      {
        "name": "",
        "href": "https://stats.freifunk-kitzingen.de/d/000000002/node?orgId=1&var-node={NODE_ID}&from=now-7d&to=now&refresh=5m",
        "image": "https://stats.freifunk-kitzingen.de/render/d-solo/000000002/node?orgId=1&panelId=4&var-node={NODE_ID}&from=now-7d&to=now&width=500&height=160&theme=light",
        "title": "Knoten {NODE_NAME} ({NODE_ID})"
      },
      {
        "name": "",
        "href": "https://stats.freifunk-kitzingen.de/d/000000002/node?orgId=1&var-node={NODE_ID}&from=now-7d&to=now&refresh=5m",
        "image": "https://stats.freifunk-kitzingen.de/render/d-solo/000000002/node?orgId=1&panelId=12&var-node={NODE_ID}&from=now-7d&to=now&width=500&height=160&theme=light",
        "title": "Knoten {NODE_NAME} ({NODE_ID})"
      },
    ],
//    "globalInfos": [
//      {
//        "name": "Wochenstatistik",
//        "href": "https://freifunk.fail/dashboard/db/deck?from=now-7d&to=now",
//        "image": "https://freifunk.fail/render/dashboard-solo/db/deck?&panelId=22&from=now-7d&to=now&width=500&height=300&theme=light&_t={TIME}",
//        "title": "Bild der Wochenstatistik"
//      }
//    ],
    // Array of data provider are supported
    'dataPath': [
    '/data/',
//  "https://falterturm.freifunk-vec.de/",
    ],
    'siteName': 'Freifunk Groß-Gerau',
    "maxAge": 21,
    "nodeZoom": 19,
    'mapLayers': [
      {
        "name": "OpenStreetMap",
//        "url": "/tiles-cache/{z}/{x}/{y}.png",
          "url": "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
//        "url": "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
        "config": {
          "type": "osm",
          "maxZoom": 19,
          "attribution": "Map data (c) <a href\"http://openstreetmap.org\">OpenStreetMap</a> contributor"
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // SouthWest
      [
        49.727022697,
        8.281692335
      ],
      // NorthEast
      [
        50.086214507,
        8.610630148
      ]
    ],
    'allowedDomains': [
      'global',
      'dom64584',
      'dom65474',
      'dom64572',
      'dom64579',
      'dom65462',
      'dom64521',
      'dom65451',
      'dom64546',
      'dom64569',
      'dom65479',
      'dom64560',
      'dom65428',
      'dom64589',
      'dom65468'
    ],
    'siteNames': [
         {site:"global",name:"FFGG Global"},
         {site:"dom64584",name:"Biebesheim"},
         {site:"dom65474",name:"Bischofsheim"},
         {site:"dom64572",name:"Büttelborn"},
         {site:"dom64579",name:"Gernsheim"},
         {site:"dom65462",name:"Ginsheim-Gustavsburg"},
         {site:"dom64521",name:"Groß-Gerau"},
         {site:"dom65451",name:"Kelsterbach"},
         {site:"dom64546",name:"Mörfelden-Walldorf"},
         {site:"dom64569",name:"Nauheimn"},
         {site:"dom65479",name:"Raunheim"},
         {site:"dom64560",name:"Riedstadt"},
         {site:"dom65428",name:"Rüsselsheim"},
         {site:"dom64589",name:"Stockstadt"},
         {site:"dom65468",name:"Trebur"},
    ],
    'domainNames': [
         {domain:"global",name:"FFGG Global"},
         {domain:"dom64584",name:"Biebesheim"},
         {domain:"dom65474",name:"Bischofsheim"},
         {domain:"dom64572",name:"Büttelborn"},
         {domain:"dom64579",name:"Gernsheim"},
         {domain:"dom65462",name:"Ginsheim-Gustavsburg"},
         {domain:"dom64521",name:"Groß-Gerau"},
         {domain:"dom65451",name:"Kelsterbach"},
         {domain:"dom64546",name:"Mörfelden-Walldorf"},
         {domain:"dom64569",name:"Nauheimn"},
         {domain:"dom65479",name:"Raunheim"},
         {domain:"dom64560",name:"Riedstadt"},
         {domain:"dom65428",name:"Rüsselsheim"},
         {domain:"dom64589",name:"Stockstadt"},
         {domain:"dom65468",name:"Trebur"},
    ],
    'linkList': [
      {
        'title': 'Webseite',
        'href': 'https://www.freifunk-gg.de/',
        'target': '_blank'
      },
      {
        'title': 'Firmware',
        'href': 'https://fw.freifunk-gg.de/selector/',
        'target': '_blank'
      },
    ]
  };
};
