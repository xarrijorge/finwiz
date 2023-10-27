import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignIn from './components/Login';
import Generate from './components/Generate';
import CreditScore from './components/CreditScore';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/creditscore" element={<CreditScore />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
