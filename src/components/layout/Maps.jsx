import React from 'react'
import { Container } from 'reactstrap'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
import Footer from '../Footer'
import MainMap from '../MainMap'

export default class Maps extends React.Component {
  render () {
    return (
      <Container>
        <Header />
        <NavbarApp />
        <MainMap />
        <Footer />
      </Container>
    )
  }
}
