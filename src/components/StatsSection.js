// src/components/StatsSection.js
import React, { useState } from 'react';
import styles from './StatsSection.module.css';

function StatsSection() {
  // We use 'useState' to store our stats data.
  // The backend will send us an object with these keys.
  const [stats] = useState({
    activeMembers: '500+', // Default placeholder
    successfulMatches: '50+', // Default placeholder
    jobPlacements: '100+', // Default placeholder
  });

  // --- THIS IS THE FUTURE PART ---
  // When your backend is ready, you will uncomment this
  // to fetch the *real* stats from your friend's API.
  /*
  useEffect(() => {
    // This function runs once when the component loads
    fetch('https://your-api-url.com/api/stats')
      .then(response => response.json())
      .then(data => {
        // 'data' is the { activeMembers: 500, ... } from the server
        setStats(data); 
      })
      .catch(error => console.error('Error fetching stats:', error));
  }, []); // The empty array [] means "run this only once"
  */

  return (
    <section id="community" className={styles.statsSection}>
      <div className={styles.iconWrapper}>
        {/* Placeholder for an icon, e.g., a community icon */}
        👥
      </div>
      <h2 className={styles.title}>Built by Community, for Community</h2>
      <p className={styles.subtitle}>
        We understand the unique needs of the Nepali diaspora in Dallas. Our platform is
        designed to preserve cultural values while embracing modern opportunities.
      </p>
      
      <div className={styles.statsGrid}>
        <div className={styles.statItem}>
          {/* We display the number from our 'stats' state */}
          <h3 className={styles.statNumber}>{stats.activeMembers}</h3>
          <p className={styles.statLabel}>Active Members</p>
        </div>
        
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>{stats.successfulMatches}</h3>
          <p className={styles.statLabel}>Successful Matches</p>
        </div>
        
        <div className={styles.statItem}>
          <h3 className={styles.statNumber}>{stats.jobPlacements}</h3>
          <p className={styles.statLabel}>Job Placements</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;