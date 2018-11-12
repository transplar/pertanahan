import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Col, Container, Row } from 'reactstrap'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
import Footer from '../Footer'
import profile from '../../data/profile.md'

export default class Profile extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      profile: ''
    }
  }

  componentDidMount = () => {
    fetch(profile)
      .then(res => res.text())
      .then(text => {
        this.setState({
          profile: text
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
            <ReactMarkdown source={this.state.profile} />
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}
