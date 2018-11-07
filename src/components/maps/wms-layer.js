import wms from 'leaflet.wms'

const source = `http://${document.location.hostname}:9090/geoserver/ows?`
const config = {
  request: 'GetCapabilities',
  service: 'WMS',
  version: '1.3.0'
}
const capabilitiesParams = Object.entries(config)
  .map(([key, value]) => `${key}=${value}`)
  .join('&')

const wmsOptions = {
  format: 'image/png',
  tiled: true,
  transparent: true,
  version: '1.3.0',
  info_format: 'text/html',
  feature_count: 100
}

let wmsSource = wms.source(source, wmsOptions)

const getAvailableLayer = () => {
  return new Promise((resolve, reject) => {
    fetch([source, capabilitiesParams].join('&'))
      .then(response => response.text())
      .then(text => {
        let xml = new DOMParser().parseFromString(text, 'text/xml')
        let layer = [...xml.querySelectorAll('Layer[queryable]')]
          .map(item => {
            return {
              name: item.querySelector('Name').textContent,
              title: item.querySelector('Title').textContent
            }
          })
        resolve(layer)
      })
      .catch(error => reject(error))
  })
}

export { getAvailableLayer, wmsSource }
