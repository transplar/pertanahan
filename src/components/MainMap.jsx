import React from 'react'
import L from 'leaflet'
import { Map, TileLayer } from 'react-leaflet'
import { Container } from 'reactstrap'
import 'leaflet/dist/leaflet.css'
import './MainMap.css'

export default class MainMap extends React.Component {
  state = {
    lat: -6.933927,
    lng: 107.662110,
    zoom: 8
  }

  componentDidMount () {
    let map = L.map('leaflet-map').setView([this.state.lat, this.state.lng], this.state.zoom)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
      .addTo(map)
  }

  render () {
    const position = [this.state.lat, this.state.lng]

    return (
      <Container className='bg-white my-1 py-1 rounded'>
        <Map center={position} zoom={this.state.zoom} ref='map'>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        </Map>
        <div id='leaflet-map'></div>
      </Container>
    )
  }
}
