import React from 'react'
import NewsEditor from './NewsEditor'
import NewsList from './NewsList'

class News extends React.Component {
  state = {
    mode: 'list'
  }

  render () {
    return this.state.mode === 'list' ? <NewsList /> : <NewsEditor />
  }
}

export default News
