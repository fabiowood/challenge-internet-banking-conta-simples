//Main Configurations

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../component-styles/Home.css";
import logo from "../logo-conta-simples.svg";


class Footer extends Component  {
  
render() {
  return(
    <div className='d-flex row justify-content-evenly'>
        <Link className="col-lg-3" to='/sua-conta-simples'><img className='logo-footer' src={logo} alt='logo-conta-simples'/></Link>
        <div className='footer col-lg-9'>
          <a className='footer-second-text'  href={"https://contasimples.com/termo-de-uso"}>
            Termos de Uso
          </a>
          <a className='footer-second-text' href={"https://contasimples.com/politica-de-privacidade"}>
            Política de Privacidade
          </a>
          <a className='footer-second-text' href={"https://contasimples.freshdesk.com/support/home"}>
            Perguntas Frequentes
          </a>
          <span className='copyright'>© COPYRIGHT 2019</span>
        </div>
    </div>
  )} 
}

export default Footer;