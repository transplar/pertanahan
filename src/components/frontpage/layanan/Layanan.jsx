import React from 'react'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import BookIcon from '@material-ui/icons/Book'
import LayananDetail from './LayananDetail'
import bidangData from './bidang.json'

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1200,
    margin: '0 auto',
  },
  gridItem: {
    flexGrow: 1,
  }
})

class Layanan extends React.Component {
  constructor (props) {
    super(props)

    this.back = this.back.bind(this)
    this.state = {
      procedure: false,
      bidang: false
    }
  }

  componentDidMount = () => {
    this.props.changeTitle('Informasi Pelayanan Publik')
  }

  back () {
    this.setState({bidang: false})
  }

  render () {
    const { classes } = this.props
    const cards = bidangData.map((bidang, index) => {
      return (
        <Grid item sm={6} md={6} lg={4} className={classes.gridItem} key={index}>
          <Card className='d-flex flex-column' style={{ height: '100%' }}>
            <CardContent className='flex-grow-1'>
              <Typography variant='title' style={{fontWeight: '400'}}>
                {bidang.title}
              </Typography>
              <Typography variant='subheading'>
                {bidang.subtitle}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant='raised'
                color='primary'
                disabled={!bidang.steps ? true : false}
                onClick={() => {this.setState({bidang: bidang})}}>
                <BookIcon />
                Prosedur
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )
    })

    const layananDetail = <LayananDetail detail={this.state.bidang} back={this.back} />

    return (
      <Grid container spacing={8} className={classes.root}>
        {(!this.state.bidang.steps) ? cards : layananDetail}
      </Grid>
    )
  }
}

export default withStyles(styles)(Layanan)
