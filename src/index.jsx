import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx'

//ponto de entrada da aplicação

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);

