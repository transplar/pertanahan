import React, { Component } from 'react'
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap'
import NavbarApp from '../components/NavbarApp'
import Footer from '../components/Footer'

class Homepage extends Component {
  render () {
    return (
      <Container fluid className='p-0'>
        <NavbarApp />
        <Container className='py-4'>
          <Row>
            <Col>
              <Button color='danger'>Danger!</Button>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Container>
    )
  }
}

export default Homepage
