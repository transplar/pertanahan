import React from 'react'
import { SocialIcon } from 'react-social-icons'

export default class SocialIcons extends React.Component {
  render () {
    return (
      <div className='border border-success p-1 mt-3'>
        <div className='text-center text-white bg-main-color py-2'>Social</div>
        <div className='p-2'>
          <SocialIcon network='facebook' className='mx-1' />
          <SocialIcon network='twitter' className='mx-1' />
          <SocialIcon network='google' className='mx-1' />
          <SocialIcon network='email' className='mx-1' />
        </div>
      </div>
    )
  }
}
