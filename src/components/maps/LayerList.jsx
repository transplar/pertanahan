import React from 'react'
import Button from '@material-ui/core/Button'
import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

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
      .map(layer => {
        return (
          <ListItem
            key={layer.name}
            className='p-0 border-bottom'
            dense
            >
            <Checkbox
              onChange={this.enableUpdateButton}
              value={layer.name}
              className='p-0'
              />
            <ListItemText
              primary={layer.title}
              className='p-0'
              />
          </ListItem>
        )
      })

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
