import React from 'react'
import L from 'leaflet'
import { Container } from 'reactstrap'
import LayerList from './LayerList'
import 'leaflet/dist/leaflet.css'
import './MainMap.css'
import * as wms from './maps/wms-layer'

export default class MainMap extends React.Component {
  constructor (props) {
    super(props)

    this.updateLayer = this.updateLayer.bind(this)
  }

  state = {
    lat: -6.933927,
    lng: 107.662110,
    zoom: 8,
    layers: []
  }

  componentDidMount () {
    const map = L.map('leaflet-map')
      .setView([this.state.lat, this.state.lng], this.state.zoom)
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      })

    osm.addTo(map)
    wms.simtanah.addTo(map)

    let layers = wms.getAvailableLayer()
    layers.then(res => {
      this.setState({layers: res})
    })
  }

  updateLayer () {
    const layerList = [...document.querySelectorAll('input:checked')]
      .map(input => input.value)
      .join(',')
    wms.simtanah.setParams({layers: layerList}, false)
  }

  render () {
    return (
      <Container className='bg-white my-1 py-1 rounded'>
        <div id='leaflet-map'></div>
        <LayerList layers={this.state.layers} updateLayer={this.updateLayer} />
      </Container>
    )
  }
}
