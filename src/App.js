import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom'
import SignIn from './components/Login';
import Generate from './components/Generate';
import CreditScore from './components/CreditScore';


function App() {
  const [score, setScore] = useState(10)

  const createScore = (e) => {
    e.preventDefault();
    setScore(score + 10)
    redirect('/generate')
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/generate" element={<Generate score={score} />} />
          <Route path="/creditscore" element={<CreditScore createData={createScore} />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
