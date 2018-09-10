import React from 'react'
import { Container } from 'reactstrap'
import Header from '../Header'
import NavbarApp from '../NavbarApp'
import Footer from '../Footer'
import DownloadList from '../DownloadList'

export default class DownloadPage extends React.Component {
  render() {
    return (
      <Container>
        <Header />
        <NavbarApp />
        <DownloadList />
        <Footer />
      </Container>
    )
  }
}
