const sourceURL = `http://${document.location.hostname}:9090/geoserver/ows?`
const capabilitiesConfig = {
  request: 'GetCapabilities',
  service: 'WMS',
  version: '1.3.0'
}
const capabilitiesParams = Object.entries(capabilitiesConfig)
  .map(([key, value]) => `${key}=${value}`)
  .join('&')

const getAvailableLayer = () => {
  return new Promise((resolve, reject) => {
    fetch([sourceURL, capabilitiesParams].join('&'))
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

export default getAvailableLayer
