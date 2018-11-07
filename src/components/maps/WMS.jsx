import React from 'react'
import LayerList from '../LayerList'

export default class WMS extends React.Component {
  render () {
    return (
      <div>
        <LayerList layers={this.props.layers} onChange={this.props.onChange} />
      </div>
    )
  }
}
