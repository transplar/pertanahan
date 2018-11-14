import React from 'react'
import { Col } from 'reactstrap'
// import StatistikWidget from './StatistikWidget'
import TwitterTimeline from './TwitterTimeline'

export default class SideBar extends React.Component {
  render () {
    return (
      <Col md='4'>
        <TwitterTimeline />
        {/* <StatistikWidget /> */}
      </Col>
    )
  }
}
