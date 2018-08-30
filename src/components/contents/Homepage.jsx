import React, { Component } from 'react'
import {
  Col,
  Container,
  Row
} from 'reactstrap'
import { Bidang } from '../cards/Bidang'
import BidangData from '../cards/bidang.json'

class Homepage extends Component {
  render () {
    return (
      <main className='p-0'>
        <Container className='py-4'>
          <Row>
            {
              BidangData.map((card, i) => (
                <Col sm='6'>
                  <Bidang
                    title={card.title}
                    subtitle={card.subtitle}
                    text={card.text}
                    button={card.button}
                    className='mb-4'
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
