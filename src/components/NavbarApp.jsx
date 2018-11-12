import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown
} from 'reactstrap'
import './NavbarApp.css'

const navigationItems = [
  {
    to: '/',
    text: 'Beranda',
    className: 'd-none d-md-block'
  },
  {
    to: '/profile',
    text: 'Profil',
    submenu: [
      {
        to: '/profil#visi-misi',
        text: 'Visi dan Misi'
      },
      {
        to: '/profil#profil',
        text: 'Profil DISPERKIM'
      },
      {
        to: '/profil#tupoksi',
        text: 'Tupoksi'
      },
      {
        to: '/profil#dasar-hukum',
        text: 'Dasar Hukum'
      }
    ]
  },
  {
    to: '/pelayanan',
    text: 'Pelayanan'
  },
  {
    to: '/pengaduan',
    text: 'Pengaduan',
    submenu: [
      {
        to: '/pengaduan#chat',
        text: 'Pertanyaan (live Chat)'
      },
      {
        to: '/pengaduan#email',
        text: 'Kirim Pengaduan'
      },
      {
        to: '/pengaduan#info',
        text: 'Permohonan Rekomendasi'
      }
    ]
  },
  {
    to: '/download',
    text: 'Unduh'
  },
  {
    to: '/statistic',
    text: 'Statistik',
    submenu: [
      {
        to: '/statistic/pengaduan',
        text: 'Statistik Pengaduan'
      },
      {
        to: '/statistik/laporaan',
        text: 'Laporan Pengaduan'
      }
    ]
  },
  {
    to: '/gallery',
    text: 'Galeri',
    submenu: [
      {
        to: '/gallery/photo',
        text: 'Foto'
      },
      {
        to: '/gallery/video',
        text: 'Video'
      }
    ]
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

      if (item.submenu) {
        const dropdownMenu = <UncontrolledDropdown key={index} nav inNavbar>
          <DropdownToggle className={classNames} nav caret>
            {item.text}
          </DropdownToggle>
          <DropdownMenu className='border-0'>
            {item.submenu.map(submenu => (
              <Link to={submenu.to} key={submenu.text} className='dropdown-item'>{submenu.text}</Link>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>

        return dropdownMenu
      }

      return (
        <NavItem className={item.className} key={item.to}>
          <Link to={item.to} className={classNames}>{item.text}</Link>
        </NavItem>
      )
    })

    return (
      <Navbar className='navbar-app bg-main-color font-weight-bold py-0 rounded-bottom' dark expand='lg'>
        <Link to='/' className='navbar-brand text-white text-uppercase d-block d-lg-none'>Beranda</Link>
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
