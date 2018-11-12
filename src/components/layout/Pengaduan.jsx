import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Container, Row } from 'reactstrap'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
import Footer from '../Footer'
import pengaduan from '../../data/pengaduan.md'

export default class Pengaduan extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      pengaduan: ''
    }
  }

  componentDidMount = () => {
    fetch(pengaduan)
      .then(res => res.text())
      .then(text => {
        this.setState({
          pengaduan: text
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
            <ReactMarkdown source={this.state.pengaduan} />
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}
