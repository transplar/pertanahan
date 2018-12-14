import React from 'react'
import { Col, Row } from 'reactstrap'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import BookIcon from '@material-ui/icons/Book'
import LayananDetail from './LayananDetail'
import bidangData from './bidang.json'

export default class Layanan extends React.Component {
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
    const cards = bidangData.map((bidang, index) => {
      return (
        <Col sm='6' md='6' lg='4' className='p-2 my-2' key={index}>
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
        </Col>
      )
    })

    const layananDetail = <LayananDetail detail={this.state.bidang} back={this.back} />

    return (
      <Row className='bg-white rounded' style={{maxWidth: '1000px', margin: '0 auto'}}>
        {(!this.state.bidang.steps) ? cards : layananDetail}
      </Row>
    )
  }
}
