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
    to: '/download',
    text: 'Unduh'
  },
  {
    to: '/information',
    text: 'Informasi'
  },
  {
    to: '/maps',
    text: 'Peta'
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
    const navItems = navigationItems.map(item => (
      <NavItem className={item.className}>
        <Link to={item.to} className='nav-link text-white text-uppercase'>{item.text}</Link>
      </NavItem>
    ))

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
