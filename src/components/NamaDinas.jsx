import React from 'react'
import Logo from './Logo'

export default class NamaDinas extends React.Component {
  render () {
    return (
      <div className='d-flex flex-column flex-md-row align-items-center flex-grow-1'>
        <Logo />
        <div className='d-block d-md-none text-center mb-2'>
          <h5>Sistem Informasi Pertahanan</h5>
          <h6>Dinas Perumahan Dan Permukiman Provinsi Jawa Barat</h6>
        </div>
        <div className='d-none d-md-block'>
          <h2>Sistem Informasi Pertahanan</h2>
          <h5>Dinas Perumahan Dan Permukiman Provinsi Jawa Barat</h5>
        </div>
      </div>
    )
  }
}
