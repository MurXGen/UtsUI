import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../src/pages/Dashboard';
import ShowTicket from '../src/pages/ShowTicket'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/show-history" element={<ShowTicket />} />
      </Routes>
    </Router>
  );
}

export default App
