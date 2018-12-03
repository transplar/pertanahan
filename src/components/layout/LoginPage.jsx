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
  state = {
    message: ''
  }

  handleSubmit = event => {
    const payload = {
      username: event.target.username.value,
      password: event.target.password.value
    }
    const url = `${document.location.protocol}//${document.location.hostname}:8081/users/login`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(payload)
    }).then(res => res.json())
      .then(body => this.setState({message: JSON.stringify(body)}))
    event.preventDefault()
  }

  render () {
    const login = (this.props.match.params.auth === 'signin') ? true : false
    const title = login ? 'Login' : 'Daftar User Baru'
    const placeholder = {
      username: (login) ? 'Username' : 'Masukkan Username Baru',
      password: (login) ? 'Kata Sandi' : 'Kata Sandi Baru',
      passwordAgain: 'Ketik Ulang Kata Sandi'
    }

    let passwordCheck = (!login) ?
      <Input type='password' className='mb-3' placeholder={placeholder.passwordAgain} required /> :
      <Label check className='pl-5 mb-3'>
        <Input type='checkbox' /> {' '}Remember me
      </Label>

    let toggleLogin = <div className='my-3'>
      {(!login) ? <Link to='/signin'>Masuk</Link> : <Link to='signup'>Daftar User Baru</Link>} | <Link to='/'>Lupa Password</Link>
    </div>

    return (
      <Container className='d-flex flex-column align-items-center bg-white my-3 py-2 rounded'>
        <Form className='mt-md-5' onSubmit={this.handleSubmit}>
          <div className='text-center mb-4'>
            <img src={imageSource} alt='Logo Jawa Barat' height='72' className='mb-4' />
            <h1 className='h3 mb-3 font-weight-normal'>{title}</h1>
            <h1 className='h4'>Sistem informasi Pertanahan</h1>
            <p>Dinas Perumahan Dan Permukiman Provinsi Jawa Barat</p>
          </div>
          <div>{this.state.message}</div>
          <Input name='username' type='text' className='mb-3' placeholder={placeholder.username} required='' autoFocus />
          <Input name='password' type='password' className='mb-3' placeholder={placeholder.password} required='' />
          {passwordCheck}
          <div className='checbox mb-3'>
            <Button block color='primary'>{title}</Button>
          </div>
          {toggleLogin}
        </Form>
        <footer>
          &copy; 2018, <Link to='/'>Kembali ke Beranda</Link>
        </footer>
      </Container>
    )
  }
}
