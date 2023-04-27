import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="wrapper">
      <div className="main">
      <App/> 
      </div>
    </div>
  </React.StrictMode>
);


