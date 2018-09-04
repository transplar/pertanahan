import React from 'react'
import { Container } from 'reactstrap'

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
