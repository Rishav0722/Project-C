// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import all your components
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import SignUp from './components/SignUp';
import Login from './components/Login';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Discover from './components/Discover'; // Import Discover

// This component is a "layout" for your main page
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <CTASection />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar /> 
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/discover" element={<Discover />} /> {/* Add the route */}
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;