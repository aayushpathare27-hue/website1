import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Injecting Global Styles directly via JavaScript to safely completely avoid any index.css file
const style = document.createElement('style');
style.innerHTML = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #ffffff;
    overflow-x: hidden;
  }
`;
document.head.appendChild(style);

// Mounts the fully configured React Component system into the single HTML window entry node
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);