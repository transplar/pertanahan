import React from 'react'
import { Link } from 'react-router-dom'

export default class AuthenticationLink extends React.Component {
  render () {
    return (
      <div>
        <Link to='/signup'>Buat Akun</Link>
        <span className='border-left border-secondary mx-2'></span>
        <Link to='/signin'>Masuk</Link>
      </div>
    )
  }
}
