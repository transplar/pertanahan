import React from 'react'
import LayerList from '../LayerList'
import * as wms from './wms-layer'

export default class WMS extends React.Component {
  constructor (props) {
    super(props)

    this.updateLayer = this.updateLayer.bind(this)
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
        wms.wmsSource.getLayer(layer).addTo(this.props.map)
      })
  }

  render () {
    return (
      <div>
        <LayerList layers={this.props.layers} onChange={this.updateLayer} />
      </div>
    )
  }
}
