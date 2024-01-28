import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Function to dynamically load a script
const loadScript = () => {
    const script = document.createElement('script');
    script.src = 'https://labudzdeli.wm.store/static/js/embed.js';
    script.async = true;
    document.body.appendChild(script);
};

// Call the function to load the script
loadScript();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
