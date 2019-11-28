/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// Main Configurations

import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import "../../component-styles/Home.css";

// Components Dependencies

import NavBar from "../NavBar";


class TalkToUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountData: this.props.accountTransactions,
      userData: this.props.userData,
    }
  }

  logoutUser() {
    this.props.history.push("/");
    this.props.allowAccess(false, []);
  }

  render() {
    return (
      <Fragment>
               <div className='container-fluid d-flex row justify-content-around  align-items-center' id='fixed-nav-bar'>
                  <div className='col-lg-11'>
                    <NavBar loggedIn={this.state.loggedIn} userData={this.state.userData} accountTransactions={this.state.bankAccountTransactions} allowAccess={this.checkLoggedIn} />
                  </div>
                  <div className='col-lg-1'>
                  <button className="nav-link" id="logout-button" onClick={() => this.logoutUser()}>Sair</button>
                  </div>
               </div>
               <p className='path-text custom-text-menu'><b>Você está em: Sua-Conta-Simples >> Outros Serviços >> Fale Conosco</b></p>
               <button className='col-lg-1 hide-button'><Link className='return-button'to='/sua-conta-simples'>Voltar</Link></button>
               <figure className='picture-adjustments'></figure>
      </Fragment>
    )
  }

}

export default TalkToUs;