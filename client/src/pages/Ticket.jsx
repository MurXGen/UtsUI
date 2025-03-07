import React, { useState, useEffect } from 'react';
import '../index.css';
import cris from '../assets/Icons/cris.svg';
import icon from '../assets/Icons/icon.svg';

const Ticket = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Load values from localStorage or use defaults
  const [travelName, setTravelName] = useState(localStorage.getItem("travelName") || "Murthy Thevar");
  const [travelAge, setTravelAge] = useState(localStorage.getItem("travelAge") || "21");
  const [fromSource, setFromSource] = useState(localStorage.getItem("fromSource") || "घाटकोपर / GHATKOPAR / घाटकोपर");
  const [toDest, setToDest] = useState(localStorage.getItem("toDest") || "गोरेगांव / GOREGAON / गोरेगाव");
  const [idDetails, setIdDetails] = useState(localStorage.getItem("idDetails") || "672001088287");
  const [ticketPrice, setTicketPrice] = useState(localStorage.getItem("ticketPrice") || "Rs. 1810.66 /-");
  const [validFromDate, setValidFromDate] = useState(localStorage.getItem("validFromDate") || "17/02/2025");
  const [validToDate, setValidToDate] = useState(localStorage.getItem("validToDate") || "16/03/2025");
  const [bookingDateTime, setBookingDateTime] = useState(localStorage.getItem("bookingDateTime") || "17/02/2025 12:15");

  // Save values to localStorage when clicking "Save"
  const handleSaveClick = () => {
    localStorage.setItem("travelName", travelName);
    localStorage.setItem("travelAge", travelAge);
    localStorage.setItem("fromSource", fromSource);
    localStorage.setItem("toDest", toDest);
    localStorage.setItem("idDetails", idDetails);
    localStorage.setItem("ticketPrice", ticketPrice);
    localStorage.setItem("validFromDate", validFromDate);
    localStorage.setItem("validToDate", validToDate);
    localStorage.setItem("bookingDateTime", bookingDateTime);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="tikcetTopBar">
        <img src={cris} alt="" />
        <marquee style={{ fontSize: '24px', color: "#05006B" }}>IR Unreserved Ticketing</marquee>
        <img src={icon} className='icon' alt="" onClick={() => setIsEditing(true)} />
      </div>
      
      {isEditing ? (
        <div className="editForm">
          <label>Name: <input type="text" value={travelName} onChange={(e) => setTravelName(e.target.value)} /></label>
          <label>Age: <input type="text" value={travelAge} onChange={(e) => setTravelAge(e.target.value)} /></label>
          <label>From: <input type="text" value={fromSource} onChange={(e) => setFromSource(e.target.value)} /></label>
          <label>To: <input type="text" value={toDest} onChange={(e) => setToDest(e.target.value)} /></label>
          <label>ID: <input type="text" value={idDetails} onChange={(e) => setIdDetails(e.target.value)} /></label>
          <label>Ticket Price: <input type="text" value={ticketPrice} onChange={(e) => setTicketPrice(e.target.value)} /></label>
          <label>Valid From: <input type="text" value={validFromDate} onChange={(e) => setValidFromDate(e.target.value)} /></label>
          <label>Valid To: <input type="text" value={validToDate} onChange={(e) => setValidToDate(e.target.value)} /></label>
          <label>Booking Date & Time: <input type="text" value={bookingDateTime} onChange={(e) => setBookingDateTime(e.target.value)} /></label>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className="ticketUi">
          <div className="welcome">
            <span>Happy Journey</span>
            <span className='quarterly'>MONTHLY</span>
          </div>
          <div className="ticketId">
            <span style={{ fontWeight: 600 }}>ADULT SEASON</span>
            <span style={{ fontWeight: 600 }}>{validFromDate}</span>
            <span>{ticketPrice}</span>
            <span>7977960242</span>
            <span>UTS NO : X20SDS7806</span>
            <span style={{ fontWeight: 600, color: '#DD2C00' }}>MONTHLY</span>
            <span style={{ fontWeight: 600 }}>ID CARD NUMBER : <span style={{ color: '#DD2C00' }}>{idDetails}</span></span>
          </div>
          <div className='ticketUser'>
            <span style={{ fontWeight: 600 }}>Pass : <span style={{ fontWeight: 600, color: '#DD2C00' }}>Mr. {travelName}</span></span>
            <span style={{ fontWeight: 600 }}>Age: <span style={{ fontWeight: 600, color: '#DD2C00' }}>{travelAge}</span></span>
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
            <span style={{ padding: '12px 0px' }}>Via : 1RT&gt;&gt;MM-DDR-DR-CLA</span>
          </div>
          <div className="ticketNumbers">
            <span>SAC :<span style={{ fontWeight: 600 }}>941266</span> </span>
            <span>IR: <span style={{ fontWeight: 600 }}>61256161616</span></span>
            <span>GST <span style={{ fontWeight: 600 }}>C:43:33</span></span>
            <span>S:<span style={{ fontWeight: 600 }}> 43:44</span></span>
            <span>Total GST: <span style={{ fontWeight: 600 }}>Rs.86.66</span></span>
          </div>
          <div className="ticketNumbers1">
            <span>Validity:</span><span></span>
            <span style={{ fontWeight: 600 }}>FROM <span style={{ fontWeight: 600, color: '#DD2C00' }}>{validFromDate}</span> TO <span style={{ fontWeight: 600, color: '#DD2C00' }}>{validToDate}</span></span>
            <span></span>
            <span style={{ fontWeight: 600 }}>R65845</span>
            <span style={{ fontWeight: 600 }}>Distance: 30Km</span>
            <span style={{ fontWeight: 600 }}>Booking Time : {bookingDateTime}</span>
          </div>
        </div>
      )}
      <div className="warning">
        <span>It is recommended not to perform factory reset or change your handset whenever you are having a valid ticket in the mobile.</span>
        <span>FOR MEDICAL EMERGENCY | FIRST AID. CONTACT TICKET STAFF \ GUARD OR DIAL 138</span>
      </div>
      <div className="proceed">
        <button>QR Code</button>
      </div>
    </div>
  );
};

export default Ticket;
