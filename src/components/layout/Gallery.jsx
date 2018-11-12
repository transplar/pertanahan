import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Container, Row } from 'reactstrap'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
import Footer from '../Footer'
import gallery from '../../data/gallery.md'

export default class Gallery extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      gallery: ''
    }
  }

  componentDidMount = () => {
    fetch(gallery)
      .then(res => res.text())
      .then(text => {
        this.setState({
          gallery: text
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
            <ReactMarkdown source={this.state.gallery} />
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}
