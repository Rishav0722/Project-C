// src/components/CTASection.js
import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link
import styles from './CTASection.module.css';

function CTASection() {
  return (
    <section id="about" className={styles.ctaSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Ready to Connect?</h2>
        <p className={styles.subtitle}>
          Join hundreds of Nepali community members who are already connecting,
          sharing, and growing together.
        </p>
        {/* 2. Change the <button> to a <Link> and add to="/signup" */}
        <Link to="/signup" className={styles.ctaButton}>
          Sign Up Now
        </Link>
      </div>
    </section>
  );
}

export default CTASection;