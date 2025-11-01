// src/components/SignUp.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase'; // 1. Import Google Sign-In
import styles from './SignUp.module.css';

// 2. Define icon URL
const googleIconUrl = "/icons8-google.svg"; 

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('User data:', { email, password });
    alert('Sign up successful! (Check the console)');
  };

  // 3. Add Google Sign-In handler
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div className={styles.pageContainer}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2 className={styles.title}>Create Your Account</h2>
        
        {/* --- Email Form --- */}
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.btn}>Sign Up with Email</button>

        {/* --- Divider --- */}
        <div className={styles.divider}>
          <span>OR</span>
        </div>

        {/* --- Google Sign-In Button --- */}
        <button 
          type="button" 
          className={`${styles.btn} ${styles.btnGoogle}`} 
          onClick={handleGoogleSignIn}
        >
          <img src={googleIconUrl} alt="Google" className={styles.googleIcon} />
          Sign Up with Google
        </button>
        
        <p className={styles.switchLink}>
          Already have an account? 
          <Link to="/login"> Login</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;