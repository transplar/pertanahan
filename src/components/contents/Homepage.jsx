import React, { Component } from 'react'
import {
  Col,
  Container,
  Row
} from 'reactstrap'
import { Bidang } from '../cards/Bidang.jsx'
import BidangData from '../cards/bidang.json'

class Homepage extends Component {
  render () {
    return (
      <main className='p-0'>
        <Container className='py-4'>
          <Row>
            {
              BidangData.map((card, i) => (
                <Col sm='6' className='d-flex p-2'>
                  <Bidang
                    title={card.title}
                    subtitle={card.subtitle}
                    text={card.text}
                    button={card.button}
                    className='flex-grow-1'
                    key={i} />
                </Col>
              ))
            }
          </Row>
        </Container>
      </main>
    )
  }
}

export default Homepage
