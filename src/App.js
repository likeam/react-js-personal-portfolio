import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import HeroSection from './pages/Home/HeroSection';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element= {<HeroSection />} />
      </Routes>
    </Router>
  );
}

export default App;
