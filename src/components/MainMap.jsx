import React from 'react'
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

  render () {
    const position = [this.state.lat, this.state.lng]

    return (
      <Container className='bg-white my-1 py-1 rounded'>
        <Map center={position} zoom={this.state.zoom} ref='map'>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        </Map>
      </Container>
    )
  }
}
