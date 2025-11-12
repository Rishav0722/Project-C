// src/components/Discover.js
import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import styles from './Discover.module.css';

// Mock data (replace with your backend data later)
const mockUsers = [
  {
    id: '1',
    name: 'Anjila',
    bio: 'Loves momos and hiking.',
    imageUrl: 'https://images.unsplash.com/photo-1520686251261-b7d533b6615b?ixlib=rb-4.0.3&q=80&w=1887'
  },
  {
    id: '2',
    name: 'Bikesh',
    bio: 'Just here to find a study partner.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7e8fde5?ixlib=rb-4.0.3&q=80&w=1887'
  },
  {
    id: '3',
    name: 'Sona',
    bio: 'UNT student. Go Mean Green!',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&q=80&w=1964'
  },
];

function Discover() {
  const [users, setUsers] = useState(mockUsers);
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentUser = users[currentIndex];

  const handleSwipe = (direction) => {
    console.log(`You swiped ${direction} on user ${currentUser.id}`);
    if (currentIndex < users.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // All cards swiped
      setCurrentIndex(0);
    }
  };

  return (
    <div className={styles.discoverPage}>
      <h2 className={styles.title}>Find Your Match</h2>

      {currentUser ? (
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <ProfileCard 
              name={currentUser.name} 
              bio={currentUser.bio}
              imageUrl={currentUser.imageUrl} 
            />
          </div>

          <div className={styles.buttonGroup}>
            <button 
              className={styles.passBtn}
              onClick={() => handleSwipe('left')}
            >
              ✗ Pass
            </button>
            <button 
              className={styles.likeBtn}
              onClick={() => handleSwipe('right')}
            >
              ♥ Like
            </button>
          </div>

          <p className={styles.progress}>
            {currentIndex + 1} / {users.length}
          </p>
        </div>
      ) : (
        <p className={styles.noMore}>No more profiles!</p>
      )}
    </div>
  );
}

export default Discover;