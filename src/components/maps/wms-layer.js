import L from 'leaflet'

const source = `http://${document.location.hostname}:9090/geoserver/ows?`
const config = {
  request: 'GetCapabilities',
  service: 'WMS',
  version: '1.3.0'
}
const params = Object.entries(config).map(([key, value]) => `${key}=${value}`).join('&')

let simtanah = L.tileLayer.wms(source, {
  format: 'image/png',
  transparent: true,
  version: '1.3.0',
  layers: ''
})

const getAvailableLayer = () => {
  return new Promise((resolve, reject) => {
    fetch([source, params].join('&'))
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

export { simtanah, getAvailableLayer }
