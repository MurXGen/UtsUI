import React from 'react'
import Navbar from '../components/Navbar'
import Options from '../components/Options'
import OptionAction1 from '../components/OptionAction1'
import NormalBooking from '../components/NormalBooking'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="selectOption">
        <Options/>
      </div>
      <div className="optionValues">
        <OptionAction1/>
      </div>
      <div className="selectOptionComponents">
        <NormalBooking/>
      </div>
    </div>
  )
}

export default Dashboard
