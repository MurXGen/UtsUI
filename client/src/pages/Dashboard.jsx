import React from 'react'
import Navbar from '../components/Navbar'
import Options from '../components/Options'
import OptionAction1 from '../components/OptionAction1'
import NormalBooking from '../components/NormalBooking'
import Help from '../assets/Icons/help.svg'
import Cris from '../assets/Icons/cris.svg'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="selectOption">
        <Options />
      </div>
      <div className="optionValues">
        <OptionAction1 />
      </div>
      <div className="selectOptionComponents">
        <NormalBooking />
      </div>
      <div className="bottommsg">
        <img src={Help} alt="" />

        <div className="cris">
          <div className="version"><span>G.16.65(15.1.43))</span></div>
          <div className="fullform">
            <img src={Cris} alt="" />
            <span>Center for Railway Information Systems (CRIS)</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
