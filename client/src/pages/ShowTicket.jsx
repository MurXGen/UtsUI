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
  const [RouteVia, setRouteVia] = useState(localStorage.getItem("RouteVia") || "1RT>>MM-DDR-DR-CLA");
  const [bookingDate, setBookingDate] = useState(localStorage.getItem("bookingDate") || "2025-02-17T12:45");
  const [utsNumber, setUtsNumber] = useState(localStorage.getItem("utsNumber") || "XOSDMOMS");
  const [className, setClassName] = useState(localStorage.getItem("className") || "FIRST (FC)");
  const [trainType, setTrainType] = useState(localStorage.getItem("trainType") || "AC EMU TRAIN (U)");
  const [seasonName, setSeasonName] = useState(localStorage.getItem("seasonName") || "SEASON (M-TICKET)");
  const [fare, setFare] = useState(localStorage.getItem("fare") || "1810.66");

  const formatDate = (isoDate) => {
    if (!isoDate) return '';
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };


  // Save input values to localStorage
  const handleSaveClick = () => {
    localStorage.setItem("_fromSource", _fromSource);
    localStorage.setItem("_toDest", _toDest);
    localStorage.setItem("RouteVia", RouteVia);
    localStorage.setItem("bookingDate", bookingDate);
    localStorage.setItem("utsNumber", utsNumber);
    localStorage.setItem("className", className);
    localStorage.setItem("trainType", trainType);
    localStorage.setItem("seasonName", seasonName);
    localStorage.setItem("fare", fare);

    setIsEditing(false);
  };

  return (
    <div>
      <div className="back_navbar">
        <span className="material-symbols-outlined">arrow_back</span>
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
              <span>{seasonName}</span>
              <span className='fare'>FARE: <strong>₹</strong>{fare}</span>
            </div>


            {isEditing ? (
              <div className="editForm">
                <label>From:
                  <input type="text" value={_fromSource} onChange={(e) => set_fromSource(e.target.value)} />
                </label>
                <label>To:
                  <input type="text" value={_toDest} onChange={(e) => set_toDest(e.target.value)} />
                </label>
                <label>Via:
                  <input type="text" value={RouteVia} onChange={(e) => setRouteVia(e.target.value)} />
                </label>
                <label>Booking Date:
                  <input
                    type="datetime-local"
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                  />
                </label>
                <label>UTS No:
                  <input
                    type="text"
                    value={utsNumber}
                    onChange={(e) => setUtsNumber(e.target.value)}
                  />
                </label>

                <label>Season Name:
                  <input
                    type="text"
                    value={seasonName}
                    onChange={(e) => setSeasonName(e.target.value)}
                  />
                </label>

                <label>Fare (₹):
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    value={fare}
                    onChange={(e) => setFare(e.target.value)}
                  />
                </label>

                <label>Class Name:
                  <input
                    type="text"
                    value={className}
                    onChange={(e) => setClassName(e.target.value)}
                  />
                </label>
                <label>Train Type:
                  <input
                    type="text"
                    value={trainType}
                    onChange={(e) => setTrainType(e.target.value)}
                  />
                </label>
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
                  <div className="via">
                    <span>Via: <span className='route'>{RouteVia}</span></span>
                  </div>

                  <div className="trainDetails1">
                    <div className="person">
                      <span>ADULT: <span className='personColor'>1</span></span>
                      <span>CHILD: <span className='personColor'>0</span></span>
                    </div>
                    <div className="class"><span>{className}</span></div>
                    <div className="trainType"><span>{trainType}</span></div>
                  </div>

                  <div className="trainDeatils2">
                    <div className="bookingdetail">
                      <span>BOOKING DATE: <span className='dateColor'>{formatDate(bookingDate)}</span>
                      </span>
                    </div>
                    <div className="utsid">
                      <span>UTS NO: <span className='idColor'>{utsNumber}</span></span>
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
