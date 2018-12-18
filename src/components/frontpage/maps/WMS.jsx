import React from 'react'
import L from 'leaflet'
import wms from 'leaflet.wms'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import LayerList from './LayerList'

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
  },
  caption: {
    fontWeight: 'bolder',
  },
  table: {
    borderCollapse: 'collapse',
  },
  td: {
    border: '1px solid rgba(0,0,0,0.5)',
    padding: theme.spacing.unit * 0.5,
  }
})

class WMS extends React.Component {
  sourceURL = `http://${document.location.hostname}:9090/geoserver/ows?`
  capabilitiesConfig = {
    request: 'GetCapabilities',
    service: 'WMS',
    version: '1.3.0'
  }
  wmsConfig = {
    format: 'image/png',
    tiled: true,
    transparent: true,
    version: '1.3.0',
    info_format: 'text/html',
    feature_count: 100
  }

  constructor (props) {
    super(props)

    this.state = {
      layers: [],
      info: '',
      detail: [],
      error: '',
    }
  }

  componentDidMount () {
    this.initWMSSource()
    let layers = this.getAvailableLayer()
    layers.then(res => {
      this.setState({
        layers: res
      })
    })
  }

  detailInfo = (html) => {
    if (html === undefined) {
      return
    }
    html = new DOMParser().parseFromString(html, 'text/html')
    let tables = [...html.querySelectorAll('table')]
    let detail = []
    tables.map(table => {
      const caption = table.querySelector('caption').textContent
      const column = [...table.querySelectorAll('th')].map(column => column.textContent)
      const row = table.querySelector('tr:nth-child(2)')
      const value = [...row.querySelectorAll('td')].map(column => column.textContent)
      detail.push({
        caption: caption,
        columns: column,
        value: value
      })
      return table
    })
    this.setState({detail: detail})
  }

  initWMSSource = () => {
    wms.Source = wms.Source.extend({
      'showFeatureInfo': (latlng, info) => {
        this.setState({
          info: {
            latlng: latlng,
            content: info
          }
        })
        let popup = L.popup()
          .setLatLng(latlng)
          .setContent(this.popupSummary(info))
          .openOn(this.props.map)
        this.props.map.openPopup(popup)
        this.detailInfo(info)
      }
    })

    this.wmsSource = wms.source(this.sourceURL, this.wmsConfig)
  }

  getAvailableLayer = () => {
    return new Promise((resolve, reject) => {
      const capabilitiesParams = Object.entries(this.capabilitiesConfig)
        .map(([key, value]) => `${key}=${value}`)
        .join('&')

      fetch([this.sourceURL, capabilitiesParams].join('&'))
        .then(responnse => responnse.text())
        .then(text => {
          let xml = new DOMParser().parseFromString(text, 'text/xml')
          let layer = [...xml.querySelectorAll('Layer[queryable]')]
            .map(item => {
              let legendGraphic
              const name = item.querySelector('Name').textContent
              const title = item.querySelector('Title').textContent
              try {
                legendGraphic = `${item.querySelector('LegendURL OnlineResource')
                  .getAttribute('xlink:href')}&LEGEND_OPTIONS=forceLabels:on`
              } catch(error) {
                legendGraphic = `${this.wmsSource._url}
                  &SERVICE=WMS
                  &REQUEST=GetLegendGraphic
                  &FORMAT=image/png
                  &LEGEND_OPTIONS=forceLabels:on
                  &LAYER=${name}`
              }
              return {
                name: name,
                title: title,
                legendGraphic: legendGraphic
              }
            })
            this.setState({error: ''})
          resolve(layer)
        })
        .catch(error => {
          this.setState({error: 'Gagal terhubung ke Geoserver'})
          reject(error)
        })
    })
  }

  popupSummary = (html) => {
    html = new DOMParser().parseFromString(html, 'text/html')
    let layerCount = [...html.querySelectorAll('table')].length
    let objectCount = [...html.querySelectorAll('table tr')]
      .filter(item => item.querySelector(':not(th)'))
      .length
    let summary = `${layerCount} Layer, ${objectCount} Objek`
    return summary
  }

  render () {
    const { classes } = this.props
    const { detail } = this.state

    const info = detail.map(item => {
      let row = []
      row.push(<tr key={item.caption} className={classes.caption}><td colSpan={2}>{item.caption}</td></tr>)
      for (let index = 1; index < item.columns.length; index++) {
        row.push(<tr key={index}>
          <td className={`${classes.td} ${classes.caption}`}>{item.columns[index]}</td>
          <td className={classes.td}>{item.value[index]}</td>
        </tr>)
      }
      return row
    })

    return (
      <Grid container className={classes.root}>
        <Grid item md={6}>
          <LayerList
            layers={this.state.layers}
            wmsSource={this.wmsSource}
            map={this.props.map}
            error={this.state.error}
            />
        </Grid>
        <Grid item md={6}>
          <table className={classes.table}>
            <tbody>
              {info}
            </tbody>
          </table>
          {/* <span dangerouslySetInnerHTML={{__html: this.state.info.content}} /> */}
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(WMS)
