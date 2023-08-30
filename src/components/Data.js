import React from 'react'
import './Data.css'

  const redirect = () => {
    window.location.href="https://economictimes.indiatimes.com/markets/expert-view/etmarkets-smart-talk-new-age-businesses-are-key-for-growing-indian-markets-and-economy-prashant-bisht/articleshow/102902026.cms"
  }


const Data = () => {
  return (
    <div className='fulldiv'>
      <div className='title-div'>Smart Talk-New-age businesses are key for growing Indian markets and economy: Prashant Bisht</div>
      <div className='date'>22 August, 2023</div>
      <div className='sep'>
        <div className='press'>ECONOMIC TIMES</div>
        <button className='linkk' onClick={redirect}>Visit</button>
      </div>

    </div>
  )
}

export default Data