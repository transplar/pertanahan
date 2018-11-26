import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

export default class LayerListItem extends React.Component {
  state = {
    open: true
  }

  toggleCollapse = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    return (
      <div className='border-bottom'>
        <ListItem
          className='p-0'
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
          <span className='flex-grow-1'></span>
          <IconButton onClick={this.toggleCollapse}>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItem>
        <Collapse in={this.state.open} className='ml-5'>
          <img src={this.props.layer.legendGraphic} alt={`Legenda ${this.props.layer.title}`} />
        </Collapse>
      </div>
    )
  }
}
