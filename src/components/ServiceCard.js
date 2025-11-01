// src/components/ServiceCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ServiceCard.module.css';

function ServiceCard({ icon, title, description, features, buttonText }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconPlaceholder}>{icon}</div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      
      <ul className={styles.featureList}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <span className={styles.star}>★</span> {feature}
          </li>
        ))}
      </ul>
      
      {/* The button now links to the signup page */}
      <Link to="/signup" className={styles.cardButton}>{buttonText}</Link>
      
      {/* The "Already have an account?" line has been removed. */}
    </div>
  );
}

export default ServiceCard;