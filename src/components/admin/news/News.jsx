import React from 'react'
import NewsEditor from './NewsEditor'
import NewsList from './NewsList'

class News extends React.Component {
  state = {
    mode: 'list',
    newsId: null,
  }

  editNews = newsId => {
    this.setState({
      mode: 'edit',
      newsId: newsId
    })
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
    if (this.state.mode === 'list') {
      return (
        <NewsList
          handleCreate={this.handleCreate}
          editNews={this.editNews}
          />
      )
    }

    return (
      <NewsEditor
        mode={this.state.mode}
        backToList={this.backToList}
        newsId={this.state.newsId}
        />
    )
  }
}

export default News
