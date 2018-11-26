import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default class LayerList extends React.Component {
  render () {
    const layer = this.props.layers
      .map(layer => {
        return (
          <ListItem
            key={layer.name}
            className='p-0 border-bottom'
            dense
            disableRipple
            >
            <Checkbox
              onChange={this.props.onChange}
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
      <List component='nav'>
        {layer}
      </List>
    )
  }
}
