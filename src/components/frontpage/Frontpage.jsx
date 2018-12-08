import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ArrowBack from '@material-ui/icons/ArrowBack'
import FrontpageMainContent from './FrontpageMainContent'

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
  },
  toolbar: theme.mixins.toolbar,
})

class Frontpage extends React.Component {
  state = {
    title: ''
  }

  changeTitle = title => {
    this.setState({title: title})
  }
  render () {
    const { classes } = this.props

    return(
      <div>
        <CssBaseline />
        <AppBar>
          <Toolbar>
            <IconButton color='inherit' className={classes.menuButton} component={Link} to='/'>
              <ArrowBack />
            </IconButton>
            <Typography color='inherit' variant='title'>
              {this.state.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <FrontpageMainContent page={this.props.match.params.frontpage} changeTitle={this.changeTitle} />
      </div>
    )
  }
}

export default withStyles(styles)(Frontpage)
