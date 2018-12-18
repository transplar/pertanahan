import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Collapse from '@material-ui/core/Collapse'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import { withStyles } from '@material-ui/core/styles'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  marginLegend: {
    marginLeft: theme.spacing.unit * 4,
  },
  marginZero: {
    margin: 0,
  },
  borderList: {
    borderBottom: '1px solid rgba(0,0,0,0.5)',
  },
  paddingZero: {
    padding: 0,
  }
})

class LayerListItem extends React.Component {
  state = {
    open: false
  }

  size = {
    height: '24px',
    width: '24px'
  }

  toggleCollapse = () => {
    this.setState({
      open: !this.state.open
    })
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.borderList}>
        <ListItem
          className={classes.paddingZero}
          dense
          >
          <FormControlLabel
            control={
              <Checkbox
                onChange={this.props.onChange}
                value={this.props.layer.name}
                color='primary'
                style={this.size}
                />
            }
            label={this.props.layer.title}
            className={classes.marginZero}
            />
          <span className={classes.grow}></span>
          <IconButton onClick={this.toggleCollapse} style={this.size}>
            {this.state.open ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItem>
        <Collapse in={this.state.open} className={classes.marginLegend}>
          <img src={this.props.layer.legendGraphic}
            alt={`Legenda ${this.props.layer.title}`}
            />
        </Collapse>
      </div>
    )
  }
}

export default withStyles(styles)(LayerListItem)
