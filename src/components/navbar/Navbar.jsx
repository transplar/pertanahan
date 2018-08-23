import React, { Component } from 'react'
import {
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap'

class NavbarApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }
  render() {
    return (
      <Navbar color="dark" dark>
        <NavbarBrand>Pertanahan</NavbarBrand>
        <NavbarToggler></NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default NavbarApp
