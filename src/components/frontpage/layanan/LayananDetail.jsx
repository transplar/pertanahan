import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const styles = theme => ({
  root: {
    width: '100%',
  },
  subheading: {
    padding: '1.5rem',
  },
  subheadingContainer: {
    margin: '0.2rem 0',
  }
})

class LayananDetail extends React.Component {
  render() {
    const { classes, detail } = this.props

    const steps = detail.steps.map((step, index) => (
      <ExpansionPanel key={index}>
        <ExpansionPanelSummary>
          <Typography variant='subheading'>
            {index+1} — {step.title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {step.subtitle}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    ))

    return (
      <div className={classes.root}>
        <AppBar color='default' position='static'>
          <Toolbar>
            <IconButton color='inherit' aria-label='Menu' onClick={this.props.back}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant='title' color='inherit'>
              Prosedur / Tahapan {detail.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Paper className={classes.subheadingContainer}>
          <Typography variant='subheading' className={classes.subheading}>{detail.subtitle}</Typography>
        </Paper>
        {steps}
      </div>
    )
  }
}

export default withStyles(styles)(LayananDetail)
