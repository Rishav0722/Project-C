// src/components/ServiceCard.js
import React from 'react';
import styles from './ServiceCard.module.css';

// We'll pass in an "icon" as a string for now.
// Later, this could be an <Icon /> component.
function ServiceCard({ icon, title, description, features, buttonText }) {
  return (
    <div className={styles.card}>
      {/* Placeholder for an icon, styled with the accent color */}
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
      
      <button className={styles.cardButton}>{buttonText}</button>
    </div>
  );
}

export default ServiceCard;