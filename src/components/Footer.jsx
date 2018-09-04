import React from 'react'
import { Container } from 'reactstrap'

export default class Footer extends React.Component {
  render () {
    return(
      <footer className='mt-4'>
        <Container>
          <hr className='bg-main-color mb-4' style={{height: '1px'}} />
          <span className='main-color p-4'>&copy; 2018 DINAS PERUMAHAN DAN PERMUKIMAN</span>
        </Container>
      </footer>
    )
  }
}
