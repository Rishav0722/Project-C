// src/components/ProfileCard.js
import React from 'react';
import styles from './ProfileCard.module.css';

// We pass in 'name' and 'imageUrl' as props
function ProfileCard({ name, bio, imageUrl }) {
  return (
    <div 
      className={styles.card} 
      // The background image is set inline
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.bio}>{bio}</p>
      </div>
    </div>
  );
}

export default ProfileCard;