import React, { Component } from 'react'
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler
} from 'reactstrap'

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
      <Container fluid className='p-0 bg-dark'>
        <Container>
          <Navbar color='dark' dark expand='md'>
            <NavbarBrand href='/'>Pertanahan</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href='/landasan'>Landasan Hukum</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/peta'>Peta</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/layanan'>Layanan Publik</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href='/tentang'>Tentang</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </Container>
      </Container>
    )
  }
}

export default NavbarApp
