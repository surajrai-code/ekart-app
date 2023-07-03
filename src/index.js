import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './Components/Store/Context';
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  
    <Context>
      <App />
    </Context>
  
);