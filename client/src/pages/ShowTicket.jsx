import React from 'react'
import showticket from '../assets/Icons/showticket.svg'
import source from '../assets/Icons/source.svg'
import destination from '../assets/Icons/destination.svg'
import viewticket from '../assets/Icons/viewticket.svg'
import nexttrain from '../assets/Icons/nexttrain.svg'

const ShowTicket = () => {
  return (
    <div>
      <div className="back_navbar">
        <span class="material-symbols-outlined">
          arrow_back
        </span>
        <span>SHOW TICKET</span>
      </div>

      <div className="showTicketSection">
        <div className="showTicketTitle">
          <img src={showticket} alt="" />
          <span>SHOW TICKET</span>
        </div>
        <div className="ticketboxes">
          <div className="ticketbox">
            <div className="journeyTitle">
              <span>SEASON (M-TICKET)</span>
              <span className='fare'>FARE: <strong>₹</strong>1380.00</span>
            </div>
            <div className="journeyName">
              <div className="journeySource">
                <img src={source} alt="" />
                <span>VIDYAVIHAR</span>
              </div>
              <div className="journeySource">
                <img src={destination} alt="" />
                <span>GOREGOAN</span>
              </div>
            </div>
            <div className="journeyDetails">
              <div className="via"></div>
              <div className="trainDetails1">
                <div className="person"></div>
                <div className="class"></div>
                <div className="trainType"></div>
              </div>
              <div className="trainDeatils2">
                <div className="bookingdetail"></div>
                <div className="utsid"></div>
              </div>
            </div>
            <div className="viewTicket">
            <div className='view'>
                <img src={viewticket} alt="" />
                <span>VIEW TICKET</span>
              </div>
              <div>
                <img src={nexttrain} alt="" />
                <span>NEXT TRAIN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowTicket
