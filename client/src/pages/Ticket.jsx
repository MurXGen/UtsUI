import React, { useState, useEffect } from 'react';
import '../index.css';
import cris from '../assets/Icons/cris.svg';
import icon from '../assets/Icons/icon.svg';

const Ticket = () => {
  const [isEditing, setIsEditing] = useState(false);
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


  // Load all fields from localStorage or default values
  const [travelName, setTravelName] = useState(localStorage.getItem("travelName") || "Murthy Thevar");
  const [travelAge, setTravelAge] = useState(localStorage.getItem("travelAge") || "21");
  const [fromSource, setFromSource] = useState(localStorage.getItem("_fromSource") || "GHATKOPAR");
  const [toDest, setToDest] = useState(localStorage.getItem("_toDest") || "GOREGAON");
  const [idDetails, setIdDetails] = useState(localStorage.getItem("idDetails") || "672001088287");
  const [ticketPrice, setTicketPrice] = useState(localStorage.getItem("ticketPrice") || "Rs. 1810.66 /-");
  const [validToDate, setValidToDate] = useState(localStorage.getItem("validToDate") || "16/03/2025");
  const storedDate = localStorage.getItem("bookingDate") || ''; // Ideally ISO string here

  const [bookingDateTime, setBookingDateTime] = useState(formatDate(storedDate));

  const [className, setClassName] = useState(localStorage.getItem("className") || "प्रथम / FIRST");
  const [trainType, setTrainType] = useState(localStorage.getItem("trainType") || "एसी ईएमयू / AC EMU");
  const [routeVia, setRouteVia] = useState(localStorage.getItem("RouteVia") || "1RT>>MM-DDR-DR-CLA");
  const [utsNumber, setUtsNumber] = useState(localStorage.getItem("utsNumber") || "X20SDS7806");
  const [seasonName, setSeasonName] = useState(localStorage.getItem("seasonName") || "MONTHLY");
  const [fareAmount, setFareAmount] = useState(localStorage.getItem("fare") || "1810.66");
  const [distance, setDistance] = useState(localStorage.getItem("distance") || "30Km");

  const stationMap = {
    "GHATKOPAR": "घाटकोपर / GHATKOPAR / घाटकोपर",
    "GOREGAON": "गोरेगांव / GOREGAON / गोरेगाव",
    "DADAR": "दादर / DADAR / दादर",
    "THANE": "ठाणे / THANE / ठाणे",
    "ANDHERI": "अंधेरी / ANDHERI / अंधेरी",
    "BANDRA": "बांद्रा / BANDRA / बांद्रा",
    "VILE PARLE": "विले पार्ले / VILE PARLE / विले पार्ले",
    "CHEMBUR": "चेंबूर / CHEMBUR / चेंबूर",
    "KURLA": "कुर्ला / KURLA / कुर्ला",
    "MUMBAI CENTRAL": "मुंबई सेंट्रल / MUMBAI CENTRAL / मुंबई सेंट्रल",
    "MAROL NAKA": "मरोळ नाका / MAROL NAKA / मरोळ नाका",
    "KANDIVALI": "कांदिवली / KANDIVALI / कांदिवली",
    "BORIVALI": "बोरीवली / BORIVALI / बोरीवली",
    "NAIGAON": "नायगाव / NAIGAON / नायगाव",
    "VASAI ROAD": "वासई रोड / VASAI ROAD / वसई रोड",
    "PANVEL": "पनवेल / PANVEL / पनवेल",
    "CHUNABHATTI": "चुनाभट्टी / CHUNABHATTI / चुनाभट्टी",
    "MAHIM": "माहीम / MAHIM / माहीम",
    "SANTACRUZ": "सांताक्रूज / SANTACRUZ / सांताक्रूज",
    "DIVA": "दीवा / DIVA / दीवा",
    "KHARGHAR": "खारघर / KHARGHAR / खारघर",
  };


  const stationList = Object.keys(stationMap);



  // Save all fields to localStorage
  const handleSaveClick = () => {
    localStorage.setItem("travelName", travelName);
    localStorage.setItem("travelAge", travelAge);
    localStorage.setItem("_fromSource", fromSource);
    localStorage.setItem("_toDest", toDest);
    localStorage.setItem("idDetails", idDetails);
    localStorage.setItem("ticketPrice", `Rs. ${fareAmount} /-`);
    localStorage.setItem("validFromDate", validFromDate);
    localStorage.setItem("validToDate", validToDate);
    localStorage.setItem("bookingDateTime", bookingDateTime);

    localStorage.setItem("className", className);
    localStorage.setItem("trainType", trainType);
    localStorage.setItem("RouteVia", routeVia);
    localStorage.setItem("utsNumber", utsNumber);
    localStorage.setItem("seasonName", seasonName);
    localStorage.setItem("fare", fareAmount);

    localStorage.setItem("distance", distance);
    // save other states...
    setIsEditing(false);
  };

  return (
    <div>
      <div className="tikcetTopBar">
        <img src={cris} alt="CRIS logo" />
        <marquee style={{ fontSize: '24px', color: "#05006B" }}>IR Unreserved Ticketing</marquee>
        <img src={icon} className='icon' alt="" onDoubleClick={() => setIsEditing(true)} />

      </div>

      {isEditing ? (
        <div className="editForm">
          <label>Name: <input type="text" value={travelName} onChange={(e) => setTravelName(e.target.value)} /></label>
          <label>Age: <input type="text" value={travelAge} onChange={(e) => setTravelAge(e.target.value)} /></label>
          <label>ID: <input type="text" value={idDetails} onChange={(e) => setIdDetails(e.target.value)} /></label>
          <label>Fare (₹): <input type="number" value={fareAmount} onChange={(e) => setFareAmount(e.target.value)} /></label>
          {/* <label>Valid From: <input type="text" value={validFromDate} onChange={(e) => setValidFromDate(e.target.value)} /></label> */}

          <label>Valid From: <input type="text" value={bookingDateTime} onChange={(e) => setBookingDateTime(e.target.value)} /></label>
          <label>Valid To: <input type="text" value={validToDate} onChange={(e) => setValidToDate(e.target.value)} /></label>
          <label>Class Name: <input type="text" value={className} onChange={(e) => setClassName(e.target.value)} /></label>
          <label>Train Type: <input type="text" value={trainType} onChange={(e) => setTrainType(e.target.value)} /></label>
          <label>Route Via: <input type="text" value={routeVia} onChange={(e) => setRouteVia(e.target.value)} /></label>
          <label>UTS Number: <input type="text" value={utsNumber} onChange={(e) => setUtsNumber(e.target.value)} /></label>
          <label>Season Name: <input type="text" value={seasonName} onChange={(e) => setSeasonName(e.target.value)} /></label>
          <label>From:
            <select value={fromSource} onChange={e => setFromSource(e.target.value)}>
              {stationList.map(station => (
                <option key={station} value={station}>{station}</option>
              ))}
            </select>
          </label>

          <label>To:
            <select value={toDest} onChange={e => setToDest(e.target.value)}>
              {stationList.map(station => (
                <option key={station} value={station}>{station}</option>
              ))}
            </select>
          </label>
          <label>
            Distance:
            <input
              type="text"
              value={distance}
              onChange={e => setDistance(e.target.value)}
              placeholder="Enter distance (e.g., 30Km)"
            />
          </label>

          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className="ticketUi">
          <div className="welcome">
            <span>Happy Journey</span>
            <span className='quarterly'>{seasonName}</span>
          </div>
          <div className="ticketId">
            <span style={{ fontWeight: 600 }}>ADULT SEASON</span>
            <span style={{ fontWeight: 600 }}>{bookingDateTime.split(' ')[0]}</span>
            <span>Rs. {fareAmount} /-</span>
            <span>7977960242</span>
            <span>UTS NO : {utsNumber}</span>
            <span style={{ fontWeight: 600, color: '#DD2C00' }}>{seasonName}</span>
            <span style={{ fontWeight: 600 }}>ID CARD NUMBER : <span style={{ color: '#DD2C00' }}>{idDetails}</span></span>
          </div>
          <div className='ticketUser'>
            <span style={{ fontWeight: 600 }}>Pass : <span style={{ fontWeight: 600, color: '#DD2C00' }}>Mr. {travelName}</span></span>
            <span style={{ fontWeight: 600 }}>Age: <span style={{ fontWeight: 600, color: '#DD2C00' }}>{travelAge}</span></span>
            <div className="between">
              <div className="betweenSource">
                <span className='sourceImg'>S</span>
                <span>{stationMap[fromSource] || fromSource}</span>
              </div>
              <div className="betweenDest">
                <span className='destImg'>D</span>
                <span>{stationMap[toDest] || toDest}</span>
              </div>
            </div>
            <span>CLASS : <span style={{ fontWeight: 600, color: '#DD2C00' }}>{className}</span></span>
            <span>TRAIN : <span style={{ fontWeight: 600, color: '#DD2C00' }}>{trainType}</span></span>
            <span style={{ padding: '12px 0px' }}>Via : {routeVia}</span>
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
            <span style={{ fontWeight: 600 }}>  FROM <span style={{ color: '#DD2C00' }}>{bookingDateTime.split(' ')[0]} </span>
              TO <span style={{ color: '#DD2C00' }}>{validToDate}</span></span>
            <span></span>
            <span style={{ fontWeight: 600 }}>R65845</span>
            <span style={{ fontWeight: 600 }}>Distance: {distance}</span>
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
