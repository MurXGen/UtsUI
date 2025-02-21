import React from 'react'
import Exchange from '../assets/Icons/exchange.svg'

const NormalBooking = () => {
  return (
    <div className='normalbookingComponent'>
      <span className='title'>NORMAL BOOKING</span>
      <div className="bookingProcess">
        <div className="paperless">
          <div className="paperless_title">
            <span
              style={{
                background: "white",
                color: "white",
                border: "1px solid grey",
                borderRadius: "72px",
                width: "12px",
                height: "12px",
                display: "inline-block",
                textAlign: "center",
                lineHeight: "12px"
              }}
            >
              O
            </span>

            <span>Book & Travel (Paperless)</span>
          </div>
          <div className="setStart">
            <span>Depart from</span>
            <span className='start_name'>STN</span>
            <span>Station name</span>
          </div>
          <div className="next_trains">
            <button>Next Trains</button>
          </div>
        </div>
        <div className="exchange">
          <img src={Exchange} alt="" />
        </div>
        <div className="paperless">
          <div className="paperless_title">
            <span
              style={{
                background: "white",
                color: "white",
                border: "1px solid grey",
                borderRadius: "72px",
                width: "12px",
                height: "12px",
                display: "inline-block",
                textAlign: "center",
                lineHeight: "12px"
              }}
            >
              O
            </span>

            <span>Book & Travel (Paper)</span>
          </div>
          <div className="setStart">
            <span>Going to</span>
            <span className='start_name'>STN</span>
            <span>Station Name</span>
          </div>
          <div className="next_trains">
            <button>Get fare</button>
          </div>
        </div>
      </div>
      <div className="note">
        BOOK SUPERFAST SURCHARGE
      </div>
    </div>
  )
}

export default NormalBooking
