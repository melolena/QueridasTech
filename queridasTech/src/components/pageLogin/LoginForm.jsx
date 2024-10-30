import React, { useState } from 'react';
import eyeOpen from '../../assets/eyeOpen.svg';
import eyeHide from '../../assets/eyeHide.svg';
import Form from 'react-bootstrap/Form';
import './loginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Senha:', password, 'Lembrar-me:', rememberMe);
  };

  return (
    <form onSubmit={handleSubmit} className='formLogin'>
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='E-mail'
        />
      </div>
      <div>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder='Senha'
        />
        <a
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 
          <img src={eyeHide} alt="" />
          : 
        <img src={eyeOpen}/>
        }
        </a>
      </div>
      <div className="passwordLost">
        <div className="remember">
        <Form.Check aria-label="option 1" />
        </div>
        <a href="#">Esqueceu a senha?</a>
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default LoginForm;
