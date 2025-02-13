import React from 'react'
import Oa1 from '../assets/Icons/Oa1.svg'
import Oa2 from '../assets/Icons/Oa2.svg'
import Oa3 from '../assets/Icons/Oa3.svg'
import Oa4 from '../assets/Icons/Oa4.svg'
import Oa5 from '../assets/Icons/Oa5.svg'
import Oa6 from '../assets/Icons/Oa6.svg'
import '../index.css'


const OptionAction1 = () => {
  return (
    <div className='OptionAction1Component'>
      <div className="optionActionType">
        <img src={Oa1} alt="" />
        <span>CANCEL TICKET</span>
      </div>

      <div className="optionActionType">
        <img src={Oa2} alt="" />
        <span>BOOKING HISTORY</span>
      </div>

      <div className="optionActionType">
        <img src={Oa3} alt="" />
        <span>SHOW TICKET</span>
      </div>

      <div className="optionActionType">
        <img src={Oa4} alt="" />
        <span>R WALLET</span>
      </div>

      <div className="optionActionType">
        <img src={Oa5} alt="" />
        <span>PROFILE</span>
      </div>

      <div className="optionActionType">
        <img src={Oa6} alt="" />
        <span>TRANSACTION</span>
      </div>
    </div>
  )
}

export default OptionAction1
