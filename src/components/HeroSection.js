// src/components/HeroSection.js
import React from 'react';
import styles from './HeroSection.module.css';

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.nepaliMotif}></div> {/* This creates the subtle background motif */}

      <div className={styles.container}>
        <span className={styles.locationTag}>Dallas, Texas</span>
        <h1 className={styles.title}>
          Connect with the 
          <span className={styles.highlight}> Nepali Community</span> in Dallas
        </h1>
        <p className={styles.subtitle}>
          Find meaningful connections, share rides, and discover career
          opportunities within our vibrant Nepali diaspora community.
        </p>
        <div className={styles.buttonGroup}>
          <button className={`${styles.btn} ${styles.btnPrimary}`}>Get Started Today</button>
          <button className={`${styles.btn} ${styles.btnSecondary}`}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;