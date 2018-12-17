import React from 'react'
import BeritaList from './BeritaList'

class Berita extends React.Component {
  componentDidMount () {
    this.props.changeTitle('Berita Pertanahan')
  }

  render () {
    const { match } = this.props

    return !match.params.id ? <BeritaList /> : ''
  }
}

export default Berita
