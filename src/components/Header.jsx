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
        <Container className='d-flex align-items-center my-3'>
          <Logo />
          <NamaDinas />
          <div className='text-right ml-3 flex-grow-1'>
            <Timestamp />
            <Pencarian />
            <AuthenticationLink />
          </div>
          <hr className='bg-main-color' style={{height: '1px'}}/>
        </Container>
      </header>
    )
  }
}
