import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import { Container } from 'reactstrap'
import 'leaflet/dist/leaflet.css'
import './MainMap.css'

export default class MainMap extends React.Component {
  state = {
    lat: -6.934980,
    lng: 107.661670,
    zoom: 8
  }

  render () {
    const position = [this.state.lat, this.state.lng]

    return (
      <Container className='mt-3'>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        </Map>
      </Container>
    )
  }
}
