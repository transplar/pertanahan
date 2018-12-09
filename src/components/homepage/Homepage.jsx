import React from 'react'
import { Link } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import { withStyles } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArchway,
  faCloudDownloadAlt,
  faHome,
  faImages,
  faInfoCircle,
  faPhoneSquare,
  faSignInAlt,
  faUserCircle,
  faUserTie
} from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import './styles.scss'

const styles = theme => ({
  grow: {
    flexGrow: 1,
  },
  marginToolbar: {
    marginTop: '1rem',
  },
  menuButton: {
    marginRight: 20,
  },
  titleBig: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  titleSmall: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    }
  },
  toolbar: theme.mixins.toolbar,
})

class Homepage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      menu: [
        {
          color: '#009543',
          text: 'BERANDA',
          link: '/',
          faicon: <FontAwesomeIcon icon={faHome} />
        },
        {
          color: '#029142',
          text: 'PROFIL',
          link: '/profile',
          faicon: <FontAwesomeIcon icon={faUserTie} />
        },
        {
          color: '#058c41',
          text: 'PELAYANAN',
          link: '/layanan',
          faicon: <FontAwesomeIcon icon={faUserCircle} />
        },
        {
          color: '#037234',
          text: 'PENGADUAN',
          link: '/aduan',
          faicon: <FontAwesomeIcon icon={faArchway} />
        },
        {
          color: '#066d33',
          text: 'UNDUH',
          link: '/unduh',
          faicon: <FontAwesomeIcon icon={faCloudDownloadAlt} />
        },
        {
          color: '#086832',
          text: 'GALERI',
          link: '/galeri',
          faicon: <FontAwesomeIcon icon={faImages} />
        },
        {
          color: '#0c6834',
          text: 'INFORMASI SPASIAL',
          link: '/maps',
          faicon: <FontAwesomeIcon icon={faInfoCircle} />
        },
        {
          color: '#024921',
          text: 'KONTAK ',
          link: '/kontak',
          faicon: <FontAwesomeIcon icon={faPhoneSquare} />
        },
        {
          color: '#044420',
          text: 'LOGIN',
          link: '/login',
          faicon: <FontAwesomeIcon icon={faSignInAlt} />
        },
      ]
    }
  }

  render () {
    const { classes } = this.props

    return (
      <div>
        <CssBaseline />
        <Header />
        <div className={classes.toolbar}></div>
        <div className={classes.marginToolbar}></div>
        <ul id="hexGrid">
          {this.state.menu.map(list_menu => (
            <li className="hex" key={list_menu.link}>
              <div className="hexIn">
                <Link to={list_menu.link} className="hexLink" style={{ backgroundColor: list_menu.color }}>
                  {list_menu.faicon}
                  <p>{list_menu.text}</p>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default withStyles(styles)(Homepage)
