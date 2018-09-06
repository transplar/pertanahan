import React, { Component } from 'react'
import { Container } from 'reactstrap'
import NavbarApp from '../NavbarApp'
import MainSlide from '../MainSlide'

class Homepage extends Component {
  render() {
    return (
      <Container>
        <MainSlide />
        <NavbarApp />
      </Container>
    )
  }
}

export default Homepage
