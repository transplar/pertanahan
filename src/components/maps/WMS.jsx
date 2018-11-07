import React from 'react'
import LayerList from '../LayerList'
import wmsSource from './wms-source'

export default class WMS extends React.Component {
  sourceURL = `http://${document.location.hostname}:9090/geoserver/ows?`
  capabilitiesConfig = {
    request: 'GetCapabilities',
    service: 'WMS',
    version: '1.3.0'
  }

  constructor (props) {
    super(props)

    this.state = {
      layers: []
    }
  }

  componentDidMount () {
    let layers = this.getAvailableLayer()
    layers.then(res => {
      this.setState({
        layers: res
      })
    })
  }

  getAvailableLayer = () => {
    return new Promise((resolve, reject) => {
      const capabilitiesParams = Object.entries(this.capabilitiesConfig)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')

      fetch([this.sourceURL, capabilitiesParams].join('&'))
        .then(responnse => responnse.text())
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

  updateLayer = () => {
    // remove unchecked layer list
    const unselectedLayer = [...document.querySelectorAll('input:not(:checked)')]
    unselectedLayer.map(input => input.value)
      .forEach(layer => {
        wmsSource.removeSubLayer(layer)
      })

    // add selected layer to map
    const selectedLayer = [...document.querySelectorAll('input:checked')]
    selectedLayer.map(input => input.value)
      .forEach(layer => {
        wmsSource.getLayer(layer).addTo(this.props.map)
      })
  }

  render () {
    return (
      <div>
        <LayerList layers={this.state.layers} onChange={this.updateLayer} />
      </div>
    )
  }
}
