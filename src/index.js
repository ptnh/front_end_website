import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import HomePage from './pages/users/homePage';
import RouterCustom from './router';
import './style/style.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RouterCustom></RouterCustom>

  </BrowserRouter>

);
