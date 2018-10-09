import React from 'react'
import Lorem from 'react-lorem-component'
import loremIpsum from 'lorem-ipsum'
import { Col } from 'reactstrap'
import Disqus from 'disqus-react'
import randomDateFrom from '../utils/random-date-from';

export default class Berita extends React.Component {
  render () {
    const title = loremIpsum()
    const date = randomDateFrom('2010')
    const content = <Lorem seed={this.props.match.params.id} count='7' />

    const disqusShortname = 'pertanahan'
    const disqusConfig = {
      url: window.location.href,
      identifier: this.props.match.url,
      title: title
    }

    return (
      <Col md='8' className='mt-3'>
        <h5 className='main-color'>{title}</h5>
        <small className='text-secondary'>{date.toLocaleString()}</small>
        {content}
        <hr/>
        <Disqus.DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
      </Col>
    )
  }
}
