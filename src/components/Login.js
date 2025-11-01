// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../firebase'; 
import styles from './Login.module.css';

// We just use the public URL for the icon.
const googleIconUrl = "/icons8-google.svg"; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    console.log('Email Login attempt:', { email, password });
    alert('Email Login successful! (Check the console)');
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  return (
    <div className={styles.pageContainer}>
      <form className={styles.formContainer} onSubmit={handleEmailSubmit}>
        <h2 className={styles.title}>Welcome Back!</h2>
        
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
        
        {/* THIS IS THE FIX: 'inputGroup' was spelled wrong */}
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
        
        <button type="submit" className={styles.btn}>Login with Email</button>
        
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
          Sign In with Google
        </button>
        
        <p className={styles.switchLink}>
          Don't have an account? 
          <Link to="/signup"> Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;