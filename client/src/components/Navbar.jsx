import React from 'react'
import irctc from '../assets/Icons/icon.svg'
import '../index.css'
import Lang from '../assets/Icons/lang.png'
import Bell from '../assets/Icons/bell.png'
import dots from '../assets/Icons/dots.png'

const Navbar = () => {
  return (
    <div className='NavbarComponent'>
      <div className="icon_Text">
        <img src={irctc} alt="" />
        <div className="icontext">
            <span>UTS</span>
            <span>IR Unreserved Ticketing</span>
        </div>
      </div>
      <div className="menus">
        <img src={Lang} alt="" />
        <img src={Bell} alt="" />
        <img src={dots} alt="" />
      </div>
    </div>
  )
}

export default Navbar
