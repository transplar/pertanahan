import React from 'react'
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import * as icon from './assets'

const styles = theme =>({
  hexgrid: {
    maxWidth: '1000px',
  }
})

class HomepageMenu extends React.Component {
  state = {
    menu: [
      {
        color: '#009543',
        text: 'BERANDA',
        link: '/',
        icon: icon.beranda,
      },
      {
        color: '#029142',
        text: 'PROFIL',
        link: '/profile',
        icon: icon.profil,
      },
      {
        color: '#058c41',
        text: 'PELAYANAN',
        link: '/layanan',
        icon: icon.layanan,
      },
      {
        color: '#037234',
        text: 'PENGADUAN',
        link: '/aduan',
        icon: icon.aduan,
      },
      {
        color: '#066d33',
        text: 'UNDUH',
        link: '/unduh',
        icon: icon.unduh,
      },
      {
        color: '#086832',
        text: 'GALERI',
        link: '/galeri',
        icon: icon.galeri,
      },
      {
        color: '#0c6834',
        text: 'INFORMASI SPASIAL',
        link: '/maps',
        icon: icon.informasi,
      },
      {
        color: '#024921',
        text: 'KONTAK ',
        link: '/kontak',
        icon: icon.kontak,
      },
      {
        color: '#044420',
        text: 'LOGIN',
        link: '/login',
        icon: icon.login,
      },
    ]
  }
  render () {
    const { classes } = this.props

    return (
      <ul id="hexGrid" className={classes.hexgrid}>
        {this.state.menu.map(list_menu => (
          <li className="hex" key={list_menu.link}>
            <div className="hexIn">
              <Link to={list_menu.link} className="hexLink" style={{ backgroundColor: list_menu.color }}>
                <img src={list_menu.icon} alt=''/>
                <p>{list_menu.text}</p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default withStyles(styles)(HomepageMenu)
