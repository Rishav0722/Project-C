import React from 'react';
// VVV FIX: Import 'Switch' instead of 'Routes'
import { Switch, Route } from 'react-router-dom';
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
      
      {/* VVV FIX: Use <Switch> instead of <Routes> */}
      <Switch>
        {/* VVV FIX: Change 'element' prop to component render */}
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <AboutSection />
        </Route>
        <Route path="/discover">
          <Discover />
        </Route>
        {/* VVV FIX: The generic '/' route must be LAST */}
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;