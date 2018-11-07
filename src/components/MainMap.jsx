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
    this.state = {
      lat: -6.933927,
      lng: 107.662110,
      zoom: 8,
      layers: [],
      map: null
    }
  }

  componentDidMount () {
    const map = L.map('leaflet-map')
      .setView([this.state.lat, this.state.lng], this.state.zoom)
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      })

    osm.addTo(map)

    let layers = wms.getAvailableLayer()
    layers.then(res => {
      this.setState({
        layers: res,
        map: map
      })
    })
  }

  updateLayer () {
    // remove unchecked layer list
    const unselectedLayer = [...document.querySelectorAll('input:not(:checked)')]
    unselectedLayer.map(input => input.value)
      .forEach(layer => {
        wms.wmsSource.removeSubLayer(layer)
      })

    // add selected layer to map
    const selectedLayer = [...document.querySelectorAll('input:checked')]
    selectedLayer.map(input => input.value)
      .forEach(layer => {
        wms.wmsSource.getLayer(layer).addTo(this.state.map)
      })
  }

  render () {
    return (
      <Container className='bg-white my-1 py-1 rounded'>
        <div id='leaflet-map'></div>
        <LayerList layers={this.state.layers} onChange={this.updateLayer} />
      </Container>
    )
  }
}
