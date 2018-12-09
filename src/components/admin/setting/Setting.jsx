import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
})

class Setting extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({value})
  }

  render () {
    const { classes } = this.props
    const { value } = this.state
    return(
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label='Profil'></Tab>
            <Tab label='Aduan'></Tab>
            <Tab label='Kontak'></Tab>
          </Tabs>
        </AppBar>
        <div>Content</div>
      </div>
    )
  }
}

export default withStyles(styles)(Setting)
