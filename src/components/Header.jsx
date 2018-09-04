import React from 'react'
import { Container } from 'reactstrap'
import Logo from './Logo'
import NamaDinas from './NamaDinas'
import Timestamp from './Timestamp'
import Pencarian from './Pencarian'
import AuthenticationLink from './AuthenticationLink'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <Container>
          <Logo />
          <NamaDinas />
          <Timestamp />
          <Pencarian />
          <AuthenticationLink />
          <hr className='bg-main-color' style={{height: '1px'}}/>
        </Container>
      </header>
    )
  }
}
