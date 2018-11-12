import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Container, Row } from 'reactstrap'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
import Footer from '../Footer'
import statistic from '../../data/statistic.md'

export default class Statistic extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      statistic: ''
    }
  }

  componentDidMount = () => {
    fetch(statistic)
      .then(res => res.text())
      .then(text => {
        this.setState({
          statistic: text
        })
      })
  }

  render () {
    return (
      <Container>
        <Header />
        <NavbarApp />
        <Row className='bg-white rounded m-0 mt-1'>
          <Col>
            <ReactMarkdown source={this.state.statistic} />
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}
