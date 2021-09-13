// Página de Login  para acessar ao projeto 
import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import Contact from './Contact';
import Spaceship from './Spaceships';
import swlogo from '../images/swlogo.png';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      name: '',
      isDisabled: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.validEmail = this.validEmail.bind(this);
    this.validPassword = this.validPassword.bind(this);
  }

  handleChange({ target }) {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
    if (this.validEmail() && this.validPassword() === true) {
      this.setState({
        isDisabled: false,
      });
    }
  }

  validEmail() {
    const { email } = this.state;
    const emailRegex = /^\w+@\w+\.com$/;
    return emailRegex.test(email);
    // utilizando o regex com test() podemos fazer a validação da string passada, que retorna true se for compatível ou false se não. Src = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
  }

  validPassword() {
    const { password } = this.state;
    const passwordLength = 5;
    if (password.length >= passwordLength) {
      return true;
    } return false;
  }

  render() {
    const { isDisabled } = this.state;
    return (
      <div className='form_group'>
        <img id='swlogo' src={swlogo} alt="star wars logo" />
        <div className="name_div">
          <label htmlFor='name' className='form_label'>Name</label>
          <input 
            type='name'
            name='name'
            id='name'
            placeholder=' Digite seu nome'
            onChange={ this.handleChange }
          />
        </div>
        <div className='email_div'>
          <label htmlFor='email' className='form_label'>E-mail</label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder=' E-mail'
            onChange={ this.handleChange }
          /> 
        </div>
        <div className='password_div'>
          <label htmlFor='password' className='form_label'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            placeholder=' Password'
            onChange={ this.handleChange }
          />
        </div>
        <Link to='/planettable'> 
          <button className='enter_button' disabled={ isDisabled }>Enter</button>
        </Link>
        <div className='error'>
        </div>
        <Contact />
        <Spaceship />
      </div>
    ); 
  };
};

export default Login;
