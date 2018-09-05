import React from 'react'
import {
  Button,
  Input
} from 'reactstrap'

export default class Pencarian extends React.Component {
  render () {
    return (
      <form method='GET' className='border border-dark rounded-0 d-flex align-items-center'>
        <Input className='border-0' placeholder='Pencarian' />
        <Button className='bg-transparent text-dark border border-top-0 border-right-0 border-bottom-0 rounded-0 border-secondary m-1'>Cari</Button>
      </form>
    )
  }
}
