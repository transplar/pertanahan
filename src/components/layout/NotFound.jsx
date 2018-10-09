import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
} from 'reactstrap'
import imageSource from '../../images/logo.png'

export default class NotFound extends React.Component {
  render () {
    return (
      <Container className='d-flex flex-column align-items-center bg-white rounded my-5 p-5'>
        <img src={imageSource} alt='Logo Jawa Barat' height='72' className='mb-4' />
        <h1>Halaman Tidak Ditemukan</h1>
        <footer>
          &copy; 2018, <Link to='/'>Kembali ke Beranda</Link>
        </footer>
      </Container>
    )
  }
}
