import React from 'react'
import { Col } from 'reactstrap'
// import StatistikWidget from './StatistikWidget'
import SocialIcons from './SocialIcons'
import TwitterTimeline from './TwitterTimeline'

export default class SideBar extends React.Component {
  render () {
    return (
      <Col md='4'>
        <TwitterTimeline />
        {/* <StatistikWidget /> */}
        <SocialIcons />
      </Col>
    )
  }
}
