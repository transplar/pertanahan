import React from 'react'

export default class Timestamp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      date: new Date()
    }
  }

  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    const HARI = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jum\'at', 'Sabtu']
    const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
    let date = HARI[this.state.date.getDay()]
      + ', ' + this.state.date.getDate()
      + ' ' + BULAN[this.state.date.getMonth()]
      + ' ' + this.state.date.getFullYear()
    let time = ('0' + this.state.date.getHours()).slice(-2)
      + ':' + ('0' + this.state.date.getMinutes()).slice(-2)
      + ':' + ('0' + this.state.date.getSeconds()).slice(-2)

    return (
      <div className='d-flex align-items-center'>
        <span>{date}</span>
        <span className='bg-success px-2 py-0 ml-2 rounded text-white h4'>{time}</span>
      </div>
    )
  }
}
