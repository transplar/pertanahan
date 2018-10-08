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
      <Container>
        <Header />
        <NavbarApp />
        <Row className='bg-white rounded m-0 mt-1'>
          <Col md='8'>
            <MainSlide />
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
        <Footer />
      </Container>
    )
  }
}
