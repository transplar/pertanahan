import React from 'react'
import {
  Col,
  Container
} from 'reactstrap'

const Footer = () => (
  <footer className='bg-dark text-light mt-4'>
    <Container>
      <Col className='py-3 text-center'>
        <span className='d-none d-sm-inline'>Copyright</span> © 2018
        <a href='http://disperkim.jabarprov.go.id'>
          <span className='d-none d-sm-inline'> Dinas Perumahan Dan Permukiman Jawa Barat</span>
          <span className='d-inline d-sm-none'> DISPERKIM JABAR</span>
        </a>
      </Col>
    </Container>
  </footer>
)

export default Footer
