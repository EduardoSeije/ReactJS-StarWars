import React from "react";
import './contact.css';

class Contact extends React.Component {
  render () {
    return (
      <div className='wrapper'>
        <a href="https://www.facebook.com/eduardo.seije/" target='_blank' rel="noreferrer">
          <div  className='icon facebook'>
            <div className='tooltip'>Facebook</div>
            <span><i className='fab fa-facebook-f'></i></span>
          </div>
        </a>
        <a href="https://www.instagram.com/duseije/" target='_blank' rel="noreferrer">
          <div  className='icon instagram'>
            <div className='tooltip'>Instagram</div>
            <span><i className='fab fa-instagram'></i></span>
          </div>
        </a>
        <a href="https://github.com/EduardoSeije" target='_blank' rel="noreferrer">
          <div  className='icon github'>
            <div className='tooltip'>Github</div>
            <span><i className='fab fa-github'></i></span>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/eduardo-seije-99370a87/" target='_blank' rel="noreferrer">
          <div  className='icon linkedin'>
            <div className='tooltip'>Linkedin</div>
            <span><i className='fab fa-linkedin'></i></span>
          </div>
        </a>
      </div>
    );
  }
};

export default Contact; 
