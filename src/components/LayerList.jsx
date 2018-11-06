import React from 'react'
import { Col, Row } from 'reactstrap'

export default class LayerList extends React.Component {
  render () {
    const layer = this.props.layers
      .map(layer => {
        return (
          <li key={layer.name}>
            <input type='checkbox' value={layer.name} onChange={this.props.onChange}/>{layer.title}
          </li>
        )
      })

    return (
      <Row>
        <Col md='6'>
          <ul>{layer}</ul>
        </Col>
      </Row>
    )
  }
}
