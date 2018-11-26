import React from 'react'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import LayerListItem from './LayerListItem'

export default class LayerList extends React.Component {
  state = {
    disableUpdateButton: true
  }

  disableUpdateButton = () => {
    this.setState({
      disableUpdateButton: true
    })
  }

  enableUpdateButton = () => {
    const disable = (
        [...document.querySelectorAll('input:checked')].length === 0
        && Object.keys(this.props.wmsSource._subLayers).length === 0
      ) ? true : false
    this.setState({
      disableUpdateButton: disable
    })
  }

  updateLayer = () => {
    // remove unchecked layer list
    const unselectedLayer = [...document.querySelectorAll('input:not(:checked)')]
    unselectedLayer.map(input => input.value)
      .forEach(layer => {
        this.props.wmsSource.removeSubLayer(layer)
      })

    // add selected layer to map
    const selectedLayer = [...document.querySelectorAll('input:checked')]
    selectedLayer.map(input => input.value)
      .forEach(layer => {
        this.props.wmsSource.getLayer(layer).addTo(this.props.map)
      })

    // disable update button
    this.disableUpdateButton()
  }

  render () {
    const layer = this.props.layers
      .map(layer => <LayerListItem key={layer.name} layer={layer} onChange={this.enableUpdateButton} />)

    return (
      <div>
        <Button
          disabled={this.state.disableUpdateButton}
          onClick={this.updateLayer}
          color='primary'
          size='small'
          variant='contained'
          >
          Perbarui Peta
        </Button>
        <List component='nav'>
          {layer}
        </List>
      </div>
    )
  }
}
