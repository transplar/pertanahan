import React from 'react'
import NamaDinas from './NamaDinas'
import Timestamp from './Timestamp'
import Pencarian from './Pencarian'
import AuthenticationLink from './AuthenticationLink'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='d-flex flex-wrap flex-lg-nowrap align-items-center py-3 rounded gradient-background text-white'>
          <NamaDinas />
          <div className='text-right ml-3 flex-grow-1'>
            <Timestamp />
            <Pencarian />
            <AuthenticationLink />
          </div>
        </div>
      </header>
    )
  }
}
