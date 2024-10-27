import React from 'react';
import ReactDOM from 'react-dom/client';
import './login.css'
import Banner from './assets/bannerLogin.svg'
import LoginColumn from './components/pageLogin/LoginColumn'

ReactDOM.createRoot(document.getElementById('root')).render(
    <div className="container">
      <div className="bannerLogin"></div>
      <LoginColumn/>
    </div>

)