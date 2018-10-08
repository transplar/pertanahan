import React from 'react'
import NamaDinas from './NamaDinas'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='d-flex flex-wrap flex-lg-nowrap align-items-center py-3 rounded-top gradient-background text-white'>
          <NamaDinas />
        </div>
      </header>
    )
  }
}
