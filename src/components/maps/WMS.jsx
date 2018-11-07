import React from 'react'
import LayerList from '../LayerList'
import wmsSource from './wms-source'
import getAvailableLayer from './wms-capabilities';

export default class WMS extends React.Component {
  constructor (props) {
    super(props)

    this.updateLayer = this.updateLayer.bind(this)
    this.state = {
      layers: []
    }
  }

  componentDidMount () {
    let layers = getAvailableLayer()
    layers.then(res => {
      this.setState({
        layers: res
      })
    })
  }

  updateLayer () {
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
