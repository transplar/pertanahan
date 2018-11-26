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

  enableUpdateButton = () => {
    this.setState({
      disableUpdateButton: !([...document.querySelectorAll('input:checked')].length > 0) ? true : false
    })
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
        <Button size='small' variant='contained' color='primary' onClick={this.props.onChange} disabled={this.state.disableUpdateButton}>Perbarui Peta</Button>
        <List component='nav'>
          {layer}
        </List>
      </div>
    )
  }
}
