import React from 'react'
import NewsEditor from './NewsEditor'
import NewsList from './NewsList'

class News extends React.Component {
  state = {
    mode: 'list',
    editorMode: 'create'
  }

  handleCreate = () => {
    this.setState({
      mode: 'create'
    })
  }

  backToList = () => {
    this.setState({
      mode: 'list'
    })
  }

  render () {
    return this.state.mode === 'list' ? <NewsList handleCreate={this.handleCreate} /> : <NewsEditor editorMode={this.state.editorMode} backToList={this.backToList} />
  }
}

export default News
