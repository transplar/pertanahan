import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import NewsEditor from './news/NewsEditor'

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

    return(
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <NewsEditor />
      </main>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AdminMainContent)
