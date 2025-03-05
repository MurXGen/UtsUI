import React, { useState } from 'react';
import '../index.css';
import cris from '../assets/Icons/cris.svg';
import icon from '../assets/Icons/icon.svg';

const Ticket = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [travelName, setTravelName] = useState("Murthy Thevar");
  const [travelAge, setTravelAge] = useState("21");
  const [fromSource, setFromSource] = useState("घाटकोपर / GHATKOPAR / घाटकोपर");
  const [toDest, setToDest] = useState("गोरेगांव / GOREGAON / गोरेगाव");
  const [idDetails, setIdDetails] = useState("672001088287");

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <div className="tikcetTopBar">
        <img src={cris} alt="" />
        <marquee style={{ fontSize: '24px', color: "#05006B" }}>IR Unreserved Ticketing</marquee>
        <img src={icon} className='icon' alt="" onClick={handleEditClick} />
      </div>
      
      {isEditing ? (
        <div className="editForm">
          <label>Name: <input type="text" value={travelName} onChange={(e) => setTravelName(e.target.value)} /></label>
          <label>Age: <input type="text" value={travelAge} onChange={(e) => setTravelAge(e.target.value)} /></label>
          <label>From: <input type="text" value={fromSource} onChange={(e) => setFromSource(e.target.value)} /></label>
          <label>To: <input type="text" value={toDest} onChange={(e) => setToDest(e.target.value)} /></label>
          <label>ID: <input type="text" value={idDetails} onChange={(e) => setIdDetails(e.target.value)} /></label>
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
            <span style={{ fontWeight: 600 }}>17/02/2025</span>
            <span>Rs. 1810.66 /-</span>
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
            <span>CLASS : <span style={{ fontWeight: 600, color: '#DD2C00' }}>प्रथम/FIRST</span></span>
            <span>TRAIN : <span style={{ fontWeight: 600, color: '#DD2C00' }}>एसी ईएमयू/AC EMU</span></span>
            <span style={{ paddingBottom: '6px' }}>Via : 1RT&gt;&gt;MM-DDR-DR-CLA</span>
          </div>
          <div className="ticketNumbers">
            <span>SAC :<span style={{ fontWeight: 600 }}>941266</span> </span>
            <span>IR: <span style={{ fontWeight: 600 }}>61256161616</span></span>
            <span>GST <span style={{ fontWeight: 600 }}>C:43:33</span></span>
            <span>S:<span style={{ fontWeight: 600 }}> 43:44</span></span>
            <span>Total GST: <span style={{ fontWeight: 600 }}>Rs.86.66</span></span>
          </div>
          <div className="ticketNumbers1">
            <span>Validity:</span>
            <span style={{ fontWeight: 600 }}>FROM <span style={{ fontWeight: 600, color: '#DD2C00' }}>17/02/2025</span> TO <span style={{ fontWeight: 600, color: '#DD2C00' }}>16/03/2025</span></span>
            <span style={{ fontWeight: 600 }}>R65845</span>
            <span style={{ fontWeight: 600 }}>Distance: 30Km</span>
            <span style={{ fontWeight: 600 }}>Booking Time : 17/02/2025 12:15</span>
          </div>
        </div>
      )}
      <div className="warning">
        <span>It is recommended not to perform factory reset or change your handset whenever you are having a valid ticket in the mobile. Click for Changing Handset with Valid ticket</span>
        <span>FOR MEDICAL EMERGENCY | FIRST AID. CONTACT TICKET STAFF \ GUARD OR DIAL 138</span>
      </div>
      <div className="proceed">
        <button>QR Code</button>
      </div>
    </div>
  );
};

export default Ticket;
