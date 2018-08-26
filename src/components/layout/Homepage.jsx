import React, { Component } from 'react'
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap'
import NavbarApp from '../navbar/Navbar'

class Homepage extends Component {
  render () {
    return (
      <Container fluid className='p-0'>
        <NavbarApp />
        <Container>
          <Row>
            <Col>
              <Button color='danger'>Danger!</Button>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Homepage
