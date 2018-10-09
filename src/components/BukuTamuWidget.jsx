import React from 'react'
import { Input, Button } from 'reactstrap'

export default class BukuTamuWidget extends React.Component {
  render () {
    return (
      <div>
        <h3 className='text-uppercase main-color'>Buku Tamu</h3>
        <div className='bg-main-color p-3 text-white'>
          <Input className='bg-transparent rounded-0 border-top-0 border-right-0 border-left-0 placeholder-white text-white mt-2' placeholder='Nama Lengkap' />
          <Input className='bg-transparent rounded-0 border-top-0 border-right-0 border-left-0 placeholder-white text-white mt-2' placeholder='Email' />
          <Input type='textarea' className='bg-transparent rounded-0 border-top-0 border-right-0 border-left-0 placeholder-white text-white mt-2' placeholder='Komentar' />
          <Button className='bg-white text-dark rounded-0 float-right mt-2 px-5'>Kirim</Button>
          <div className='clearfix'></div>
        </div>
      </div>
    )
  }
}
