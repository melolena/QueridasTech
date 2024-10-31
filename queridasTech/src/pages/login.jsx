import React from 'react';
import './login.css'
import Banner from '../assets/bannerLogin.svg'
import LoginColumn from '../components/pageLogin/LoginColumn'

function Login (){
  return(
    <div className="container">
    <div className="bannerLogin">
      <img src={Banner} alt="" />
    </div>
    <LoginColumn/>
  </div>
  )
} export default Login;
   
