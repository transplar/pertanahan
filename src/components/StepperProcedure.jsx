import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Step from '@material-ui/core/Step'
import StepContent from '@material-ui/core/StepContent'
import StepLabel from '@material-ui/core/StepLabel'
import Stepper from '@material-ui/core/Stepper'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export default class StepperProcedure extends React.Component {
  constructor (props) {
    super(props)

    this.handleBack = this.handleBack.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  state = {
    activeStep: 0
  }

  handleNext () {
    this.setState({
      activeStep: this.state.activeStep + 1,
    })
  }

  handleBack () {
    this.setState({
      activeStep: this.state.activeStep - 1,
    })
  }

  handleReset () {
    this.setState({
      activeStep: 0,
    })
  }

  render() {
    const { bidang } = this.props
    const { activeStep } = this.state

    return (
      <div>
        <AppBar position='static'>
          <Toolbar>
            <IconButton color='inherit' aria-label='Menu' onClick={this.props.back}>
              <ArrowBackIcon />
            </IconButton>
            <Typography variant='title' color='inherit'>
              Prosedur/ Tahapan {bidang.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Stepper activeStep={activeStep} orientation='vertical'>
          {bidang.steps.map((step, index) => {
            return (
              <Step key={step.title}>
                <StepLabel>{step.title}</StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}>
                      Back
                    </Button>
                    <Button
                      variant='contained'
                      color='primary'
                      onClick={this.handleNext}>
                      {activeStep === bidang.steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </StepContent>
              </Step>
            )
          })}
        </Stepper>
        {activeStep === bidang.steps.length && (
          <Paper square elevation={0}>
            <Typography>Semua tahapan telah selesai dilalui.</Typography>
            <Button onClick={this.handleReset}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
    )
  }
}
