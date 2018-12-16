import React from 'react'
import L from 'leaflet'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import WMS from './WMS'
import 'leaflet/dist/leaflet.css'
import './Map.css'

const styles = theme => ({
  root: {
    maxWidth: '1200px',
    margin: '0 auto',
  }
})

class Map extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      lat: -6.933927,
      lng: 107.662110,
      zoom: 8,
      map: null
    }
  }

  componentDidMount () {
    const map = L.map('leaflet-map')
      .setView([this.state.lat, this.state.lng], this.state.zoom)
    const osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      })

    osm.addTo(map)

    this.setState({map: map})
    this.props.changeTitle('Informasi Spasial')
  }

  render () {
    const { classes } = this.props
    return (
      <Grid container className={classes.root}>
        <div id='leaflet-map'></div>
        <WMS map={this.state.map}/>
      </Grid>
    )
  }
}

export default withStyles(styles)(Map)
