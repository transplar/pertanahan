import React from 'react'
import L from 'leaflet'
import { Container } from 'reactstrap'
import 'leaflet/dist/leaflet.css'
import './MainMap.css'
import * as wms from './maps/wms-layer'

export default class MainMap extends React.Component {
  state = {
    lat: -6.933927,
    lng: 107.662110,
    zoom: 8,
    layers: []
  }

  componentDidMount () {
    let map = L.map('leaflet-map').setView([this.state.lat, this.state.lng], this.state.zoom)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
    wms.simtanah.addTo(map)

    let layers = wms.getAvailableLayer()

    this.setState({
      layers: layers
    })
  }

  render () {
    const layer = this.state.layers
      .map(layer => <span key={layer.name}>{layer.title}</span>)

    return (
      <Container className='bg-white my-1 py-1 rounded'>
        <div id='leaflet-map'></div>
        {layer}
      </Container>
    )
  }
}
