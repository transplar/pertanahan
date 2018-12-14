import React from 'react'
import { Container } from 'reactstrap'
import Footer from '../Footer'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
// import InformationList from '../InformasiList'

export default class InformationPage extends React.Component {
  render () {
    return (
      <Container>
        <Header />
        <NavbarApp />
        {/* <InformationList /> */}
        <Footer />
      </Container>
    );
  }
}
