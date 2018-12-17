import React from 'react'
import { Link } from 'react-router-dom'

class Berita extends React.Component {
  render () {
    const beritaComponent = berita.map((berita, index) => {
      return (
        <div key={index} className='border border-secondary rounded p-2 mb-1' style={style}>
          <h5>
            <Link to={'/berita/' + index} className='text-success'>{berita.title}</Link>
          </h5>
          <small>{berita.date.toLocaleString()}</small>
          {berita.content}
          <Link to={'/berita/' + index} className='float-right mr-5'>Selengkapnya ...</Link>
          <div className='clearfix'></div>
        </div>
      )
    })

    return (
      <div>
        {beritaComponent}
      </div>
    )
  }
}

export default Berita
