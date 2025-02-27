// index.js or App.js

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DataProvider } from '../src/components/Contexts/DataContext'; // Import DataProvider
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
       <HelmetProvider>
       <App />
       </HelmetProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
