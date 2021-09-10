// Página de Login  para acessar ao projeto 
import React from 'react';
import './login.css';

const swlogo = 'star-wars/src/images/swlogo.png'

class Login extends React.Component {
  render() {
    return (
      <div className='form_group'>
        <img src={ swlogo } alt="a" />
        <input type='name' name='name' id='name' placeholder='Name' required />
        <label htmlFor='name' className='form_label'>Name</label>
        <input type='email' name='email' id='email' placeholder='E-mail' required/> 
        <label htmlFor='email' className='form_label'>E-mail</label>
        <input type='password' name='password' id='password' placeholder='Password' />
        <label htmlFor='password' className='form_label'>Password</label>
      </div>
    ); 
  };
};

export default Login;
