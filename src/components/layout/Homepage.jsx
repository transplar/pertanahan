import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Timeline } from 'react-twitter-widgets'
import NavbarApp from '../NavbarApp'
import MainSlide from '../MainSlide'

class Homepage extends Component {
  render() {
    return (
      <Container>
        <MainSlide />
        <NavbarApp />
        <Row>
          <Col md='8'></Col>
          <Col>
            <div className='border border-success p-1 mt-3'>
              <div className='text-center text-white bg-main-color py-2'>TWITTER</div>
              <Timeline
                dataSource={{
                  sourceType: 'profile',
                  screenName: 'jawabarat'
                }}
                options={{
                  height: '400'
                }}/>
              </div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Homepage
