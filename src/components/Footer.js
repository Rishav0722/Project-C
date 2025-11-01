// src/components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.info}>
        <div className={styles.founder}>
          <strong>Founder:</strong> Rishav Marasini
          <a href="mailto:marasinirishav0@gmail.com" className={styles.email}>
            marasinirishav0@gmail.com
          </a>
        </div>
        <div className={styles.founder}>
          <strong>Co-Founder:</strong> Prabin Lamicchhane
          <a href="mailto:prabinlc80@gmail.com" className={styles.email}>
            prabinlc80@gmail.com
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        © {new Date().getFullYear()} GenzGuff. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;