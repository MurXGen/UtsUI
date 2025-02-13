import React from 'react'
import J1 from '../assets/Icons/j1.svg'
import J2 from '../assets/Icons/j2.svg'
import J3 from '../assets/Icons/j3.svg'
import J4 from '../assets/Icons/j4.svg'
import J5 from '../assets/Icons/j5.svg'

const Options = () => {
  return (
    <div className='optionsComponent'>
      <div className="optionType">
        <img src={J1} alt="" />
        <span>Journey<br/>Ticket</span>
      </div>
      <div className="optionType">
        <img src={J2} alt="" />
        <span>QR<br/>Booking</span>
      </div>
      <div className="optionType">
        <img src={J3} alt="" />
        <span>Quick<br/>Booking</span>
      </div>
      <div className="optionType">
        <img src={J4} alt="" />
        <span>Platform<br/>Ticket</span>
      </div>
      <div className="optionType">
        <img src={J5} alt="" />
        <span>Season<br/>Ticket</span>
      </div>
    </div>
  )
}

export default Options
