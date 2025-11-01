// src/components/ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Gets the current URL path

  useEffect(() => {
    // This effect runs every time the 'pathname' (URL) changes
    window.scrollTo(0, 0);
  }, [pathname]); // The effect runs when 'pathname' is its dependency

  return null; // This component doesn't render any HTML
}

export default ScrollToTop;