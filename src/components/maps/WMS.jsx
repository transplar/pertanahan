import React from 'react'
import L from 'leaflet'
import wms from 'leaflet.wms'
import { Col, Row } from 'reactstrap'
import LayerList from '../LayerList'

export default class WMS extends React.Component {
  sourceURL = `http://${document.location.hostname}:9090/geoserver/ows?`
  capabilitiesConfig = {
    request: 'GetCapabilities',
    service: 'WMS',
    version: '1.3.0'
  }
  wmsConfig = {
    format: 'image/png',
    tiled: true,
    transparent: true,
    version: '1.3.0',
    info_format: 'text/html',
    feature_count: 100
  }

  constructor (props) {
    super(props)

    this.state = {
      layers: [],
      info: ''
    }
  }

  componentDidMount () {
    this.initWMSSource()
    let layers = this.getAvailableLayer()
    layers.then(res => {
      this.setState({
        layers: res
      })
    })
  }

  initWMSSource = () => {
    wms.Source = wms.Source.extend({
      'showFeatureInfo': (latlng, info) => {
        this.setState({
          info: {
            latlng: latlng,
            content: info
          }
        })
        let popup = L.popup()
          .setLatLng(latlng)
          .setContent(this.popupSummary(info))
          .openOn(this.props.map)
        this.props.map.openPopup(popup)
      }
    })

    this.wmsSource = wms.source(this.sourceURL, this.wmsConfig)
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

  popupSummary = (html) => {
    html = new DOMParser().parseFromString(html, 'text/html')
    let layerCount = [...html.querySelectorAll('table')].length
    let objectCount = [...html.querySelectorAll('table tr')].length
    let summary = `${layerCount} Layer, ${objectCount} Objek`
    return summary
  }

  updateLayer = () => {
    // remove unchecked layer list
    const unselectedLayer = [...document.querySelectorAll('input:not(:checked)')]
    unselectedLayer.map(input => input.value)
      .forEach(layer => {
        this.wmsSource.removeSubLayer(layer)
      })

    // add selected layer to map
    const selectedLayer = [...document.querySelectorAll('input:checked')]
    selectedLayer.map(input => input.value)
      .forEach(layer => {
        this.wmsSource.getLayer(layer).addTo(this.props.map)
      })
  }

  render () {
    return (
      <Row className='mt-3'>
        <Col md='6'>
          <LayerList layers={this.state.layers} onChange={this.updateLayer} />
        </Col>
        <Col md='6'>
          <span dangerouslySetInnerHTML={{__html: this.state.info.content}} />
        </Col>
      </Row>
    )
  }
}
