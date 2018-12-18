import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Dashboard from './dashboard/Dashboard'
import Gallery from './gallery/Gallery'
import News from './news/News'
import Setting from './setting/Setting'

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
})

class AdminMainContent extends React.Component {
  render () {
    const { classes } = this.props
    let component
    switch(this.props.component) {
      case 'gallery':
        component = <Gallery />
        break
      case 'news':
        component = <News />
        break
      case 'setting':
        component = <Setting />
        break
      default:
        component = <Dashboard />
    }

    return(
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {component}
      </main>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AdminMainContent)
