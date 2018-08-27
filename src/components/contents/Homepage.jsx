import React, { Component } from 'react'
import {
  Button,
  Col,
  Container,
  Row
} from 'reactstrap'

class Homepage extends Component {
  render () {
    return (
      <main className='p-0'>
        <Container className='py-4'>
          <Row>
            <Col>
              <Button color='danger'>Danger!</Button>
            </Col>
          </Row>
        </Container>
      </main>
    )
  }
}

export default Homepage
