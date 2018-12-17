import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import { withStyles } from '@material-ui/core/styles'
import SettingForm from './SettingForm'

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
            <Tab label='Ketentuan'></Tab>
          </Tabs>
        </AppBar>
        {value === 0 && <SettingForm name='profile' />}
        {value === 1 && <SettingForm name='aduan' />}
        {value === 2 && <SettingForm name='contact' />}
        {value === 3 && <SettingForm name='welcome' />}
      </div>
    )
  }
}

export default withStyles(styles)(Setting)
