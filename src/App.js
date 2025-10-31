// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection'; // 1. Import it
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServicesSection />
      <StatsSection /> {/* 2. Add it here */}
    </div>
  );
}

export default App;