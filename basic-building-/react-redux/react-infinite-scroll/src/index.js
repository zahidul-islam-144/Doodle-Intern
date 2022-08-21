import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // fro this strictMode it causes two times render
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

