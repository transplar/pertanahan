import React from 'react'
import banner from '../images/main_banner.png'

export default class Header extends React.Component {
  render () {
    return (
      <header>
        <div className='d-flex flex-wrap flex-lg-nowrap align-items-center py-1 rounded-top gradient-background text-white'>
          <img src={banner} alt='Logo Dinas Perumahan Dan Permukiman Provinsi Jawa Barat'/>
        </div>
      </header>
    )
  }
}
