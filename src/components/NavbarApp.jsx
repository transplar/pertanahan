import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  Navbar,
  NavbarToggler
} from 'reactstrap'
import { Link } from 'react-router-dom'

class NavbarApp extends Component {
  constructor (props) {
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

  render () {
    return (
      <header className='bg-dark'>
        <Container>
          <Navbar color='dark' dark expand='md'>
            {/* <NavbarBrand href='/'>Pertanahan</NavbarBrand> */}
            <Link to='/' className='navbar-brand'>Pertanahan</Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <Link to='/landasan' className='nav-link'>Landasan Hukum</Link>
                </NavItem>
                <NavItem>
                  <Link to='/peta' className='nav-link'>Peta</Link>
                </NavItem>
                <NavItem>
                  <Link to='/layanan' className='nav-link'>Layanan Publik</Link>
                </NavItem>
                <NavItem>
                  <Link to='/tentang' className='nav-link'>Tentang</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </header>
    )
  }
}

export default NavbarApp
