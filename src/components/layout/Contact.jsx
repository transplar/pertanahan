import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Container, Row } from 'reactstrap'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
import Footer from '../Footer'
import contact from '../../data/contact.md'

export default class Contact extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      contact: ''
    }
  }

  componentDidMount = () => {
    fetch(contact)
      .then(res => res.text())
      .then(text => {
        this.setState({
          contact: text
        })
      })
  }

  render () {
    return (
      <Container>
        <Header />
        <NavbarApp />
        <Row className='bg-white rounded m-0 mt-1'>
          <Col>
            <ReactMarkdown source={this.state.contact} />
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}
