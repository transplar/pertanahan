import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Nav,
  NavItem,
  Navbar,
  NavbarToggler,
} from 'reactstrap'

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
    return (
      <Navbar className='bg-main-color font-weight-bold py-0 rounded-bottom' dark expand='md'>
        <Link to='/' className='navbar-brand text-white text-uppercase d-block d-md-none'>Beranda</Link>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem className='d-none d-md-block'>
              <Link to="/" className='nav-link text-white text-uppercase'>Beranda</Link>
            </NavItem>
            <NavItem>
              <Link to="/download" className='nav-link text-white text-uppercase'>Unduh</Link>
            </NavItem>
            <NavItem>
              <Link to="/information" className='nav-link text-white text-uppercase'>Informasi</Link>
            </NavItem>
            <NavItem>
              <Link to="/maps" className='nav-link text-white text-uppercase'>Peta</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}
