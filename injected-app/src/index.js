import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Specify root from wrapper-app where we should render our content
const root = ReactDOM.createRoot(document.getElementById('injectAppHere'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);