import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

console.log("yo voyons si ça marche index.js")
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename='/all-projects'>
    <App />
  </Router>
);