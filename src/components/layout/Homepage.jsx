import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import { Timeline } from 'react-twitter-widgets'
import Header from '../Header'
import Footer from '../Footer'
import NavbarApp from '../NavbarApp'
import MainSlide from '../MainSlide'
import StatistikWidget from '../StatistikWidget'
import BukuTamuWidget from '../BukuTamuWidget';
import ExternalWebLink from '../ExternalWebLink'
import BeritaList from '../BeritaList';

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <MainSlide />
          <NavbarApp />
          <Row>
            <Col md='8' className='mt-3'>
              <BeritaList />
            </Col>
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
                <StatistikWidget />
            </Col>
          </Row>
          <hr />
          <Row>
            <div className='clearfix'></div>
            <Col md='8'>
              <BukuTamuWidget />
            </Col>
            <Col md='4'>
              <ExternalWebLink />
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    )
  }
}

export default Homepage
