// src/components/Discover.js
import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
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
    // VVV THIS IS THE FIX VVV
    // It was "id:3:" which is invalid. It is now correct.
    id: '3',
    name: 'Sona',
    bio: 'UNT student. Go Mean Green!',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&q=80&w=1964'
  },
];

function Discover() {
  const [users, setUsers] = useState(mockUsers);

  const onSwipe = (direction, id) => {
    console.log(`You swiped ${direction} on user ${id}`);
  };

  const onCardLeftScreen = (id) => {
    console.log(`User ${id} left the screen`);
    // This line updates the state, removing the swiped card.
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return (
    <div className={styles.discoverPage}>
      <h2 className={styles.title}>Find Your Match</h2>

      <div 
        className={styles.cardContainer} 
        style={{ 
          position: 'relative', 
          width: '300px',
          height: '400px',
          margin: '20px auto' 
        }}
      >
        {users.map((user) => (
          <TinderCard
            style={{ position: 'absolute' }}
            key={user.id}
            onSwipe={(dir) => onSwipe(dir, user.id)}
            onCardLeftScreen={() => onCardLeftScreen(user.id)}
            preventSwipe={['up', 'down']}
          >
            <div style={{ 
              width: '300px', 
              height: '400px', 
              overflow: 'hidden', 
              borderRadius: '10px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}>
              <ProfileCard 
                name={user.name} 
                bio={user.bio}
                imageUrl={user.imageUrl} 
              />
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Discover;