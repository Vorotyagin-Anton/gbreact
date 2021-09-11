import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
      <div className='container'>
        <Routes />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);
