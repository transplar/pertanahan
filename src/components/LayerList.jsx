import React from 'react'

export default class LayerList extends React.Component {
  render () {
    const layer = this.props.layers
      .map(layer => {
        return (
          <li key={layer.name}>
            <input type='checkbox' value={layer.name} onChange={this.props.updateLayer}/>{layer.title}
          </li>
        )
      })
    return (
      <ul>{layer}</ul>
    )
  }
}
