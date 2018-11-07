import wms from 'leaflet.wms'

const sourceURL = `http://${document.location.hostname}:9090/geoserver/ows?`

const wmsOptions = {
  format: 'image/png',
  tiled: true,
  transparent: true,
  version: '1.3.0',
  info_format: 'text/html',
  feature_count: 100
}

let wmsSource = wms.source(sourceURL, wmsOptions)

export { wmsSource }
