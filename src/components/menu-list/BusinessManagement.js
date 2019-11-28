/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// Main Configurations

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../../component-styles/Home.css";

// Components Dependencies

import NavBar from "../NavBar";
import AccountDisplay from '../AccountDisplay';
import AccountTotalDisplay from '../AccountTotalDisplay';


class BusinessManagement extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      accountData: this.props.accountTransactions,
      userData: this.props.userData,
      displayAllReceipts: false,
      showAccountTransactions: {
        receiptsOnly: true,
        delayedOnly: false,
        futureReceipts: false,
      }
    }
    this.expandListOfTransactions=this.expandListOfTransactions.bind(this);
    this.reduceListOfTransactions=this.reduceListOfTransactions.bind(this);
  }

  expandListOfTransactions() {
    this.setState({
      displayAllReceipts: true,
    })
  }

  reduceListOfTransactions() {
    this.setState({
      displayAllReceipts: false,
    })
  }

  showAccountTransactions(display) {
    switch (display) {
      case "Recebimentos":
      this.setState({
          displayAllReceipts: false,
          showAccountTransactions: {
            receiptsOnly: true,
            delayedOnly: false,
            futureReceipts: false,
          }
      });
      break;
      case "Em Atraso":
      this.setState({
          displayAllReceipts: false,
          showAccountTransactions: {
            receiptsOnly: false,
            delayedOnly: true,
            futureReceipts: false,
          }
      });
      break;
      case "Vencimento Futuro":
      this.setState({
          displayAllReceipts: false,
          showAccountTransactions: {
            receiptsOnly: false,
            delayedOnly: false,
            futureReceipts: true,
          }
      });
      break;
   }
  }

  logoutUser() {
    this.props.history.push("/");
    this.props.allowAccess(false, []);
  }

  render(){
      return (

        <div className='divider'>
                <div className='container-fluid d-flex row justify-content-around  align-items-center' id='fixed-nav-bar'>
                  <div className='col-lg-11'>
                    <NavBar loggedIn={this.state.loggedIn} userData={this.state.userData} accountTransactions={this.state.bankAccountTransactions} allowAccess={this.checkLoggedIn} />
                  </div>
                  <div className='col-lg-1'>
                  <button className="nav-link" id="logout-button" onClick={() => this.logoutUser()}>Sair</button>
                  </div>
               </div>
                <section className='home-section d-flex row justify-content-center'>
                  <div className='col-lg-5'>
                  {this.state.showAccountTransactions.receiptsOnly &&
                    <p className='path-text'><b>Você está em: Sua-Conta-Simples >> Gestão de Recebíveis >> Recebidos</b></p>
                  }
                  {this.state.showAccountTransactions.delayedOnly &&
                    <p className='path-text'><b>Você está em: Sua-Conta-Simples >> Gestão de Recebíveis >> Em Atraso</b></p>
                  }
                  {this.state.showAccountTransactions.futureReceipts &&
                    <p className='path-text'><b>Você está em: Sua-Conta-Simples >> Gestão de Recebíveis >> Vencimentos Futuros</b></p>
                  }
                    <div id='balance-display'>Saldo: {this.props.userData.balance}</div>
                    <small>
                      <div>Empresa: {this.props.userData.businessName} </div>
                      <div>Aplicação Automática de <b>100%</b> da CDI</div>
                    </small>
                  </div>
                  <Link className='col-lg-1 button-styles deposit-button' to='/meus-depositos'>Depositar</Link>
                  <Link className='col-lg-1 button-styles main-page-button' to='/sua-conta-simples'>Voltar</Link>
                </section>
                  <div className="card-header d-flex justify-content-around" >
                    <ul className="nav nav-tabs card-header-tabs" >
                      <li className="nav-item">
                      {this.state.showAccountTransactions.receiptsOnly ?
                        <button className="nav-link active" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Recebimentos")} >Recebidos</button>
                        :
                        <button className="nav-link" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Recebimentos")} >Recebidos</button>
                        }
                      </li>
                      <li className="nav-item">
                      {this.state.showAccountTransactions.delayedOnly ?
                        <button className="nav-link active" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Em Atraso")} >Em Atraso</button>
                        :
                        <button className="nav-link" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Em Atraso")} >Em Atraso</button>
                      }
                      </li>
                      <li className="nav-item">
                      {this.state.showAccountTransactions.futureReceipts ?
                        <button className="nav-link active" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Vencimento Futuro")} >Futuros</button>
                        :
                        <button className="nav-link" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Vencimento Futuro")} >Futuros</button>
                      }
                      </li>
                    </ul>

                  </div>
                  {this.state.displayAllReceipts ?
                      <AccountTotalDisplay accountData={this.state.accountData} displayTransactions={this.state.showAccountTransactions} reduceListOfTransactions={this.reduceListOfTransactions} />
                  :
                      <AccountDisplay accountData={this.state.accountData} displayTransactions={this.state.showAccountTransactions} expandTransactions={this.expandListOfTransactions} />
                  }
        </div>

      )
  }
}

export default BusinessManagement;	