import React from 'react'
import loremIpsum from 'lorem-ipsum'
import Lorem from 'react-lorem-component'
import { Link } from 'react-router-dom'
import randomDateFrom from '../utils/random-date-from'

const style = {
  boxShadow: '0px 1px 3px #251f1e'
}

let berita = []

for (let i = 0; i < 10; i++) {
  berita.push({
    title: loremIpsum(),
    date: randomDateFrom('2010'),
    content: <Lorem count='1' />
  })
}

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
