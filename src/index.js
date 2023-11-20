import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './AppSwich';
import './style/gameStyle.css';
import './style/index_App2.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);


reportWebVitals();
