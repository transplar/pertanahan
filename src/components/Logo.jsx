import React from 'react'
import imageSource from '../images/logo.png'

export default class Logo extends React.Component {
  render () {
    return (
      <div>
        <img className='header-logo rounded-0' style={{maxWidth: '128px'}} src={imageSource} alt='Logo Provinsi Jawa Barat' />
      </div>
    )
  }
}
