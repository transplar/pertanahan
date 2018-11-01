import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import * as text from '../data/term.md'

export default class WelcomeModal extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      message: '',
      modal: true
    }
  }

  componentWillMount () {
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
      modal: !this.state.modal
    })
  }

  render () {
    return (
      <Modal isOpen={this.state.modal} backdrop='static' className='modal-lg'>
        <ModalHeader className='text-primary'>PENJELASAN DAN KETENTUAN</ModalHeader>
        <ModalBody>
          <ReactMarkdown source={this.state.message} />
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={this.toggle}>Saya memahami dan menyetujui ketentuan di atas</Button>
        </ModalFooter>
      </Modal>
    )
  }
}
