import React from 'react'
import '../index.css'
import cris from '../assets/Icons/cris.svg'
import icon from '../assets/Icons/icon.svg'

const Ticket = () => {
  const TravelName = "Mariappan Thevar";
  const TravelAge = "28";
  const fromSource = "माहिम / MAHIM / माहीम";
  const toDest = "मीरा रोड / MIRA ROAD / मीरा रोड";
  const RouteVia = "Via : 1RT>>----";
  const fromDate = "17/02/2025";
  const idDetails = '678306062917';
  return (
    <div>
      <div className="tikcetTopBar">
        <img src={cris} alt="" />
        <marquee>IR Unreserved Ticketing</marquee>
        <img src={icon} className='icon' alt="" />
      </div>

      <div className="ticketUi">
        <div className="welcome">
          <span>Happy Journey</span>
          <span className='quarterly'>MONTHLY</span>
        </div>
        <div className="ticketId">
          <span style={{ fontWeight: 600 }}>ADULT SEASON</span>
          <span style={{ fontWeight: 600 }}>{fromDate}</span>
          <span>Rs. 1810.66 /-</span>
          <span>7977960242</span>
          <span>UTS NO : X20SDS7806</span>
          <span style={{ fontWeight: 600, color: '#DD2C00' }}>MONTHLY</span>
          <span style={{ fontWeight: 600 }}>ID CARD NUMBER : <span style={{ color: '#DD2C00' }}>{idDetails}</span></span>
        </div>
        <div className='ticketUser'>
          <span style={{ fontWeight: 600 }}>Pass : <span style={{ fontWeight: 600, color: '#DD2C00' }}>Mr. {TravelName}</span></span><span></span>
          <span style={{ fontWeight: 600 }}>Age: <span style={{ fontWeight: 600, color: '#DD2C00' }}>{TravelAge}</span></span><span></span>
          <div className="between">
            <div className="betweenSource">
              <span className='sourceImg'>S</span>
              <span>{fromSource}</span>
            </div>

            <div className="betweenDest">
            <span className='destImg'>D</span>
              <span>{toDest}</span>
            </div>
          </div>
          <span></span>

          <span>CLASS : <span style={{ fontWeight: 600, color: '#DD2C00' }}>प्रथम/FIRST</span></span>
          <span>TRAIN : <span style={{ fontWeight: 600, color: '#DD2C00' }}>एसी ईएमयू/AC EMU</span></span>
          <span style={{paddingBottom:'6px'}}>{RouteVia}</span>

        </div>
        <div className="ticketNumbers">
          <span>SAC :<span style={{ fontWeight: 600}}>941266</span> </span>
          <span>IR: <span style={{ fontWeight: 600}}>61256161616</span></span>
          <span>GST <span style={{ fontWeight: 600}}>C:43:33</span></span>
          <span>S:<span style={{ fontWeight: 600}}> 43:44</span></span>
          <span>Total GST: <span style={{ fontWeight: 600}}>Rs.86.66</span></span>
        </div>
        <div className="ticketNumbers1">
          <span>Validity:</span><span></span>
          <span style={{ fontWeight: 600 }}>FROM <span style={{ fontWeight: 600, color: '#DD2C00' }}>17/02/2025</span> TO <span style={{ fontWeight: 600, color: '#DD2C00' }}>16/03/2025</span></span><span></span>
          <span style={{ fontWeight: 600 }}>R65845</span>
          <span style={{ fontWeight: 600 }}>Distance: 30Km</span>
          <span style={{ fontWeight: 600 }}>Booking Time : 17/02/2025 12:15</span>
        </div>
      </div>
      <div className="warning">
        <span>It is recommended not to perform factory reset or chane your handset whenever you are having valid ticket in the mobile. <span style={{}}>Click for Changing Handset with Valid ticket</span></span>
        <span>FOR MEDICAL EMERGENCY | FIRST AID. CONTACT TICKET STAFF \ GUARD OR DIAL 138</span>
      </div>
      <div className="proceed">
        <button>QR Code</button>
      </div>
    </div>
    
  )
}

export default Ticket
