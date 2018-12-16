import React from 'react'
import ReactMarkdown from 'react-markdown'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Cookie from 'js-cookie'
import * as text from '../data/term.md'

class WelcomeModal extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      message: '',
      open: true,
      scroll: 'paper'
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

    fetch(text)
      .then(response => response.text())
      .then(text => {
        this.setState({
          message: text
        })
      })

  }

  toggle () {
    this.setState({
      open: !this.state.open
    })
    Cookie.set('agree', 'yes', {expires: 7})
  }

  render () {
    const { open, scroll } = this.state
    return (
      <Dialog open={open} scroll={scroll}>
        <DialogTitle>PENJELASAN DAN KETENTUAN</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ReactMarkdown source={this.state.message} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={this.toggle} variant='outlined'>Saya memahami dan menyetujui ketentuan di atas</Button>
        </DialogActions>
      </Dialog>
    )
  }
}

export default WelcomeModal
