import React from 'react'
import ReactMarkdown from 'react-markdown'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Cookie from 'js-cookie'
import { baseAPIURL } from '../utils/config'

class WelcomeModal extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      message: '',
      open: true,
      scroll: 'paper',
      error: ''
    }
  }

  componentWillMount () {
    if (Cookie.get('agree') === 'yes') {
      this.setState({
        open: false
      })
    } else {
      Cookie.set('agree', 'no', {expires: 1})
    }

    const url = `${baseAPIURL}/config/welcome`
    fetch(url)
      .then(response => response.json())
      .then(json => {
        this.setState({
          message: json
        })
      })
      .catch(error => this.setState({error: error.toString()}))
  }

  toggle () {
    this.setState({
      open: !this.state.open
    })
    Cookie.set('agree', 'yes', {expires: 7})
  }

  render () {
    const { open, scroll, message, error } = this.state
    let messageComponent, disabled

    if (!message) {
      messageComponent = <Typography align='center' component='div'><CircularProgress /></Typography>
    } else {
      messageComponent = <ReactMarkdown source={message.config.content} />
    }
    if (error) {
      messageComponent = <Typography color='error' variant='headline'>{error}</Typography>
      disabled = true
    }

    return (
      <Dialog open={open} scroll={scroll}>
        <DialogTitle>PENJELASAN DAN KETENTUAN</DialogTitle>
        <DialogContent>
          {messageComponent}
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={this.toggle} variant='outlined' disabled={disabled}>Saya memahami dan menyetujui ketentuan di atas</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default WelcomeModal
