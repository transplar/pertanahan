import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Aduan from './profil/Aduan'
import Berita from './berita/Berita'
import Kontak from './profil/Kontak'
import Layanan from './layanan/Layanan'
import Map from './maps/Map'
import NotFound from '../NotFound'
import Profil from './profil/Profil'
import Unduh from './unduh/Unduh'

const styles = theme => ({
  main: {
    padding: '1em'
  },
  toolbar: theme.mixins.toolbar,
})

class FrontpageMainContent extends React.Component {
  render () {
    const { changeTitle, classes, page, match } = this.props
    let component

    switch(page) {
      case 'aduan':
        component = <Aduan changeTitle={changeTitle} />
        break
      case 'berita':
        component = <Berita changeTitle={changeTitle} match={match} />
        break
      case 'kontak':
        component = <Kontak changeTitle={changeTitle} />
        break
      case 'layanan':
        component = <Layanan changeTitle={this.props.changeTitle} />
        break
      case 'maps':
        component = <Map changeTitle={this.props.changeTitle} />
        break
      case 'profile':
        component = <Profil changeTitle={changeTitle} />
        break
      case 'unduh':
        component = <Unduh changeTitle={changeTitle} />
        break
      default:
        component = <NotFound />
        break
    }

    return(
      <div className={classes.main}>
        <div className={classes.toolbar}></div>
        {component}
      </div>
    )
  }
}

export default withStyles(styles)(FrontpageMainContent)
