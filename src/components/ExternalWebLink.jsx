import React from 'react'

export default class ExternalWebLink extends React.Component {
  render () {
    return (
      <div>
        <h3 className='text-uppercase main-color'>Web Link</h3>
        <div className='class'>
          <ul className='list-group'>
            <li className='list-group-item border-0 py-1 text-uppercase'><a className='text-dark' href='http://jabarprov.go.id'>PEMPROV JABAR</a></li>
            <li className='list-group-item border-0 py-1 text-uppercase'><a className='text-dark' href='http://disperkim.jabarprov.go.id'>DISPERKIM JABAR</a></li>
            <li className='list-group-item border-0 py-1 text-uppercase'><a className='text-dark' href='http://www.bpn.go.id'>BPN</a></li>
            <li className='list-group-item border-0 py-1 text-uppercase'><a className='text-dark' href='http://www.bps.go.id'>BPS</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
