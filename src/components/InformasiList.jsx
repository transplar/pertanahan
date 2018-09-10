import React from 'react'
import { Col, Row } from 'reactstrap'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import BookIcon from '@material-ui/icons/Book'
import bidangData from '../data/bidang.json'

const cards = bidangData.map((bidang) => {
  return (
    <Col sm='6' md='4' className='p-2 my-2'>
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
          <Button variant='raised' color='primary'><BookIcon />Prosedur</Button>
        </CardActions>
      </Card>
    </Col>
  )
})

export default class InformationList extends React.Component {
  render () {
    return (
      <Row>
        {cards}
      </Row>
    )
  }
}
