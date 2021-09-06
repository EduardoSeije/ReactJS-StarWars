// Introdução do aplicativo - projeto. 
import React from "react";
import { Link } from "react-router-dom";
import './intro.css';

class Intro extends React.Component{
  
  render() {
    return(
      <div className="container">       
        <div className="credits">
          <div className="title">
            <h1 className="h1title">Star Wars - Project</h1>
            <h2 className="h2subtitle">Context API</h2>
          </div>
          <p className="paragraph1"> 
            Há muito tempo, numa galáxia muito, muito distante... um aprendiz de desenvolvedor realiza um misterioso projeto de front end desenvolvido durante o curso da escola Trybe utilizando as tecnologias apresentadas no módulo de front end.</p>
          <p className="paragraph2">
            O projeto tinha por objetivo utilizar JavaScript, HTML, CSS ReactJS para desenvolver uma aplicação que pegava dados de uma API externa e apreentava para o usuário final em forma de tabela, com a possibilidade de aplicar filtros. 
          </p>
          <p className="paragraph3">
            Após uma longa batalha contra o temível Redux, o Context API veio para ajudar o jovem desenvolvedor a concluir sua missão.
          </p>
        </div>
        <Link to="/login">
          <button 
            type="button"
            className="introBtn"
          >
            May the force be with you!
          </button>
        </Link>  
      </div>
    );
  };
};


export default Intro;
