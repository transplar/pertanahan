import React from 'react'

export default class StatistikWidget extends React.Component {
  render () {
    return (
      <div className='border border-success p-1 mt-3'>
        <div className='text-uppercase text-center text-white bg-main-color py-2'>Statistik Pengunjung</div>
        <div id='widgetIframe'>
          <iframe
            src='https://demo.matomo.org/index.php?module=Widgetize&action=iframe&widget=1&moduleToWidgetize=UserCountry&actionToWidgetize=getCountry&idSite=7&period=day&date=yesterday&disableLink=1&widget=1'
            width='100%'
            height='350'
            title='visitor-stats'
            scrolling='no'
            frameBorder='0'
            marginHeight='0'
            marginWidth='0'></iframe>
        </div>
      </div>
    )
  }
}
