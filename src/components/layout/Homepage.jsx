import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap'
import Header from '../Header'
import Footer from '../Footer'
import NavbarApp from '../NavbarApp'
import MainSlide from '../MainSlide'
import BukuTamuWidget from '../BukuTamuWidget'
import ExternalWebLink from '../ExternalWebLink'
import BeritaList from '../BeritaList'
import SideBar from '../SideBar';

export default class Homepage extends Component {
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
            <SideBar />
          </Row>
          <hr />
          <Row>
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
