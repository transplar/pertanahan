import React from 'react'
import { Col, Row } from 'reactstrap'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import BookIcon from '@material-ui/icons/Book'
import StepperProcedure from './StepperProcedure'
import bidangData from '../data/bidang.json'

export default class InformationList extends React.Component {
  constructor (props) {
    super(props)

    this.back = this.back.bind(this)
    this.state = {
      procedure: false,
      bidang: false
    }
  }

  back () {
    this.setState({bidang: false})
  }

  render () {
    const cards = bidangData.map((bidang, index) => {
      return (
        <Col sm='6' md='4' className='p-2 my-2' key={index}>
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

    const stepperProcedure = <StepperProcedure back={this.back} bidang={this.state.bidang} />

    return (
      <Row className='mx-0'>
        {(!this.state.bidang.steps) ? cards : stepperProcedure}
      </Row>
    )
  }
}
