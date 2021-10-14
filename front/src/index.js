import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // 라우터 적용
import './index.css';
import App from './App';
// import * as serviceWorker from "./serviceWorker";


ReactDOM.render(
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// serviceWorker.unregister();