// src/components/AboutSection.js
import React from 'react';
import styles from './AboutSection.module.css';

// The URL for your image in the public folder
const rishavImageUrl = "/rishav.png"; 

function AboutSection() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.contentWrapper}>
        
        <div className={styles.imageContainer}>
          <img src={rishavImageUrl} alt="Rishav Marasini" className={styles.profileImage} />
        </div>

        <h1 className={styles.title}>Our Mission</h1>
        
        {/* This text block is updated */}
        <p className={styles.text}>
          Hello! We're Rishav Marasini and Prabin Lamichhane, fellow students and tech 
          enthusiasts here in Dallas. Like many of us, we've seen how tough it can be 
          to navigate everyday challenges, like finding a ride to class, looking for 
          housing, or even just connecting with new friends.
        </p>
        <p className={styles.text}>
          That's why we're so passionate about this project. Our goal is to build a platform 
          that brings our Nepali community closer together, making it simpler, safer, 
          and more connected for all of us. This is our way of using technology to help us 
          share, support each other, and strengthen our wonderful sense of belonging.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
