import React, { Component } from 'react'
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap'
import NavbarApp from '../NavbarApp'

class Homepage extends Component {
  render() {
    return (
      <Container fluid>
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
