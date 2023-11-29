import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BasketProvider } from './context/BasketContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BasketProvider>
    <App />
  </BasketProvider>
);

