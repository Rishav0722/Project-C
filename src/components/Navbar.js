// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.navbar}>
      <nav className={styles.navContent}>
        <div className={styles.hamburgerMenu} onClick={toggleMenu}>
          ☰
        </div>
        
        <Link to="/" className={styles.logo}>
          GenzGuff
        </Link>
        
        <div className={styles.authButtons}>
          <Link to="/login" className={`${styles.btn} ${styles.btnSecondary}`}>
            Login
          </Link>
          <Link to="/signup" className={`${styles.btn} ${styles.btnPrimary}`}>
            Sign Up
          </Link>
        </div>
      </nav>

      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <a href="/#services" onClick={toggleMenu}>Services</a>
          <a href="/#community" onClick={toggleMenu}>Community</a>
          {/* THIS IS THE CHANGE: <a> to <Link> */}
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;