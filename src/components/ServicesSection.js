// src/components/ServicesSection.js
import React from 'react';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.module.css';

// Store all your data in an array of objects
const servicesData = [
  {
    icon: '❤️',
    title: 'Koi Chaiyo',
    description: 'Connect with compatible Nepali singles who share your values and cultural background.',
    features: [
      'Cultural compatibility matching',
      'Verified community profiles',
      'Safe and respectful environment',
    ],
    buttonText: 'Start Dating',
  },
  {
    icon: '🚗',
    title: 'Kaa Chaiyo',
    description: 'Travel together safely and affordably with trusted community members.',
    features: [
      'Community-verified drivers',
      'Split costs fairly',
      'Regular routes to temples & events',
    ],
    buttonText: 'Find Rides',
  },
  {
    icon: '💼',
    title: 'Career Growth',
    description: 'Discover professional opportunities and build networks within the community.',
    features: [
      'Community job referrals',
      'Professional mentorship',
      'Skill development resources',
    ],
    buttonText: 'Explore Jobs',
  },
  {
    icon: '🕒',
    title: 'GHANTA chaiyo',
    description: 'Find flexible part-time work opportunities that fit your schedule and lifestyle.',
    features: [
      'Flexible scheduling',
      'Quick application process',
      'Community-trusted employers',
    ],
    buttonText: 'Find Part-Time Work',
  },
];


function ServicesSection() {
  return (
    <section className={styles.services}>
      <h2 className={styles.sectionTitle}>Four Services, One Community</h2>
      <p className={styles.sectionSubtitle}>
        Everything you need to thrive in Dallas, designed specifically for the Nepali community.
      </p>
      
      <div className={styles.cardGrid}>
        {/* We map over the data array to create a card for each item */}
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            features={service.features}
            buttonText={service.buttonText}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;