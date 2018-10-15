import React from 'react'
import { Container, Row } from 'reactstrap'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
import Footer from '../Footer'
import Berita from '../Berita'
import SideBar from '../SideBar'

export default class BeritaDetail extends React.Component {
  render () {
    return (
      <Container>
        <Header />
        <NavbarApp />
        <Row className='bg-white rounded m-0 mt-1'>
          <Berita match={this.props.match}/>
          <SideBar />
        </Row>
        <Footer />
      </Container>
    )
  }
}
