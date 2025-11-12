import React from 'react';
// 1. CHANGED: Import from 'react-dom', NOT 'react-dom/client'
import ReactDOM from 'react-dom'; 
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// 2. REMOVED: We are not using the new createRoot method
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( ... );

// 3. ADDED: This is the legacy React 17 method, which will work.
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);