import React from 'react'
import BeritaDetail from './BeritaDetail'
import BeritaList from './BeritaList'

class Berita extends React.Component {
  componentDidMount () {
    this.props.changeTitle('Berita Pertanahan')
  }

  render () {
    const { match } = this.props

    return !match.params.id ? <BeritaList /> : <BeritaDetail match={match} />
  }
}

export default Berita
