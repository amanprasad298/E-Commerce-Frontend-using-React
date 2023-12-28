import React from 'react'
import './Offers.css'
import exc_img from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">

        <h1>Exclusive</h1>
        <h1>Offers for You</h1>
        <p>Only on Bestseller Products.</p>
        <button>Check Now</button>

      </div>

      <div className='offers-right'>
        
        <img src={exc_img} alt="" />

      </div>

    </div>
  )
}

export default Offers
