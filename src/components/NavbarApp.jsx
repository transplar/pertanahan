import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarToggler,
} from 'reactstrap'

const navigationItems = [
  {
    to: '/',
    text: 'Beranda',
    className: 'd-none d-md-block'
  },
  {
    to: '/profile',
    text: 'Profil'
  },
  {
    to: '/pelayanan',
    text: 'Pelayanan'
  },
  {
    to: '/pengaduan',
    text: 'Pengaduan'
  },
  {
    to: '/download',
    text: 'Unduh'
  },
  {
    to: '/maps',
    text: 'Informasi Spasial'
  },
  {
    to: '/contact',
    text: 'Kontak'
  },
  {
    to: '/signin',
    text: 'Login'
  }
]

export default class NavbarApp extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {
    const navItems = navigationItems.map((item, index, arr) => {
      let classNames = 'nav-link text-white text-uppercase px-2 border-success border-left'
        + ((arr.length - 1 === index) ? ' border-right' : '')

      return (
        <NavItem className={item.className} key={item.to}>
          <Link to={item.to} className={classNames}>{item.text}</Link>
        </NavItem>
      )
    })

    return (
      <Navbar className='bg-main-color font-weight-bold py-0 rounded-bottom' dark expand='md'>
        <Link to='/' className='navbar-brand text-white text-uppercase d-block d-md-none'>Beranda</Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            {navItems}
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
