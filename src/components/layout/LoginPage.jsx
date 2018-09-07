import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Form,
  Input,
  Label
} from 'reactstrap'
import imageSource from '../../images/logo.png'

export default class LoginPage extends React.Component {
  render () {
    return (
      <Container className='d-flex flex-column align-items-center'>
        <Form className='mt-md-5 mt-2'>
          <div className='text-center mb-4'>
            <img src={imageSource} alt='Logo Jawa Barat' height='72' className='mb-4' />
            <h1 className='h3 mb-3 font-weight-normal'>Login</h1>
            <h1 className='h4'>Sistem informasi Pertanahan</h1>
            <p>Dinas Perumahan Dan Permukiman Provinsi Jawa Barat</p>
          </div>
          <Input type='text' className='mb-3' placeholder='Username' required='' autoFocus />
          <Input type='password' className='mb-3' placeholder='Password' required='' />
          <Label check className='pl-5 mb-3'>
            <Input type='checkbox' /> {' '}Remember me
          </Label>
          <div className='checbox mb-3'>
            <Button block color='primary'>Login</Button>
          </div>
        </Form>
        <footer>
          &copy; 2018, <Link to='/'>Kembali ke Beranda</Link>
        </footer>
      </Container>
    )
  }
}
