import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import ListItem from '@material-ui/core/ListItem'

export default class LayerListItem extends React.Component {
  render () {
    return (
      <ListItem
        key={this.props.layer.name}
        className='p-0 border-bottom'
        dense
        >
        <FormControlLabel
          control={
            <Checkbox
              onChange={this.props.onChange}
              value={this.props.layer.name}
              color='primary'
              />
          }
          label={this.props.layer.title}
          className='m-0'
          />
      </ListItem>
    )
  }
}
