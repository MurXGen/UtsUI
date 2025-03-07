import React, { useState } from 'react';
import showticket from '../assets/Icons/showticket.svg';
import source from '../assets/Icons/source.svg';
import destination from '../assets/Icons/destination.svg';
import viewticket from '../assets/Icons/viewticket.svg';
import nexttrain from '../assets/Icons/nexttrain.svg';
import { useNavigate } from 'react-router-dom';

const ShowTicket = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  // Load from localStorage or set default values
  const [_fromSource, set_fromSource] = useState(localStorage.getItem("_fromSource") || "GHATKOPAR");
  const [_toDest, set_toDest] = useState(localStorage.getItem("_toDest") || "GOREGAON");
  const [RouteVia, setRouteVia] = useState(localStorage.getItem("RouteVia") || "Via : 1RT>>MM-DDR-DR-CLA");
  const [bookingDate, setBookingDate] = useState(localStorage.getItem("bookingDate") || "17/02/2025 12:45");

  // Save input values to localStorage
  const handleSaveClick = () => {
    localStorage.setItem("_fromSource", _fromSource);
    localStorage.setItem("_toDest", _toDest);
    localStorage.setItem("RouteVia", RouteVia);
    localStorage.setItem("bookingDate", bookingDate);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="back_navbar">
        <span className="material-symbols-outlined">
          arrow_back
        </span>
        <span>SHOW TICKET</span>
      </div>

      <div className="showTicketSection">
        <div className="showTicketTitle">
          <img src={showticket} alt="" onClick={() => setIsEditing(true)} />
          <span>SHOW TICKET</span>
        </div>
        <div className="ticketboxes">
          <div className="ticketbox">
            <div className="journeyTitle">
              <span>SEASON (M-TICKET)</span>
              <span className='fare'>FARE: <strong>₹</strong>1810.66</span>
            </div>

            {isEditing ? (
              <div className="editForm">
                <label>From: <input type="text" value={_fromSource} onChange={(e) => set_fromSource(e.target.value)} /></label>
                <label>To: <input type="text" value={_toDest} onChange={(e) => set_toDest(e.target.value)} /></label>
                <label>Via: <input type="text" value={RouteVia} onChange={(e) => setRouteVia(e.target.value)} /></label>
                <label>Booking Date: <input type="text" value={bookingDate} onChange={(e) => setBookingDate(e.target.value)} /></label>
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <>
                <div className="journeyName">
                  <div className="journeySource">
                    <img src={source} alt="" />
                    <span>{_fromSource}</span>
                  </div>
                  <div className="journeySource">
                    <img src={destination} alt="" />
                    <span>{_toDest}</span>
                  </div>
                </div>

                <div className="journeyDetails">
                  <div className="via"><span>Via : <span className='route'>{RouteVia}</span></span></div>
                  <div className="trainDetails1">
                    <div className="person">
                      <span>ADULT: <span className='personColor'>1</span></span>
                      <span>CHILD: <span className='personColor'>0</span></span>
                    </div>
                    <div className="class">
                      <span>FIRST (FC)</span>
                    </div>
                    <div className="trainType">
                      <span>AC EMU TRAIN (U)</span>
                    </div>
                  </div>
                  <div className="trainDeatils2">
                    <div className="bookingdetail">
                      <span>BOOKING DATE: <span className='dateColor'>{bookingDate}</span></span>
                    </div>
                    <div className="utsid">
                      <span>UTS NO: <span className='idColor'>XOSDMOMS</span></span>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="viewTicket">
              <div className='view' onClick={() => navigate('/ticket')}>
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
  );
};

export default ShowTicket;
