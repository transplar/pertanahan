import React from 'react'
import { Timeline } from 'react-twitter-widgets'

export default class TwitterTimeline extends React.Component {
  render () {
    return (
      <div className='border border-success p-1 mt-3'>
        <div className='text-center text-white bg-main-color py-2'>TWITTER</div>
        <Timeline
          dataSource={{
            sourceType: 'profile',
            screenName: 'jawabarat'
          }}
          options={{
            height: '400'
          }} />
      </div>
    )
  }
}
