import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container } from 'reactstrap'
import 'leaflet/dist/leaflet.css'
import './Peta.css'

export default class Peta extends Component {
  state = {
    lat: -6.9338801,
    lng: 107.6616703,
    zoom: 17
  }

  render () {
    const position = [this.state.lat, this.state.lng]
    return (
      <Container className='mt-3'>
        <Map center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution="<a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </Map>
      </Container>
    )
  }
}