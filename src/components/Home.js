/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// Main Configurations

import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../component-styles/Home.css";

// Components Dependencies

import NavBar from "./NavBar";
import AccountDisplay from './AccountDisplay';
import AccountTotalDisplay from './AccountTotalDisplay';


class Home extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      accountData: this.props.accountTransactions,
      userData: this.props.userData,
      displayAllTransactions: false,
      showAccountTransactions: {
        allTransactions: true,
        receiptsOnly: false,
        paymentsOnly: false,
        futureTransactions: false,
      }
    }
    this.expandListOfTransactions=this.expandListOfTransactions.bind(this);
    this.reduceListOfTransactions=this.reduceListOfTransactions.bind(this);
  }

  expandListOfTransactions() {
    this.setState({
      displayAllTransactions: true,
    })
  }

  reduceListOfTransactions() {
    this.setState({
      displayAllTransactions: false,
    })
  }

  showAccountTransactions(display) {
    switch (display) {
      case "Lançamentos":
      this.setState({
          displayAllTransactions: false,
          showAccountTransactions: {
            allTransactions: true,
            receiptsOnly: false,
            paymentsOnly: false,
            futureTransactions: false,
          }
      });
      break;
      case "Recebido":
      this.setState({
          displayAllTransactions: false,
          showAccountTransactions: {
            allTransactions: false,
            receiptsOnly: true,
            paymentsOnly: false,
            futureTransactions: false,
          }
      });
      break;
      case "Pago":
      this.setState({
            displayAllTransactions: false,
            showAccountTransactions: {
            allTransactions: false,
            receiptsOnly: false,
            paymentsOnly: true,
            futureTransactions: false,
          }
      });
      break;
      case "Vencimento Futuro":
      this.setState({
            displayAllTransactions: false,
            showAccountTransactions: {
            allTransactions: false,
            receiptsOnly: false,
            paymentsOnly: false,
            futureTransactions: true,
          }
      });
      break;
   }
  } 

  // At this moment, there should be an API Call. For the main purpose of this challenge, there will be only a local call to a .json file - bank-account.json.

  // The goal is to simulate a logout from the user's private area.

  logoutUser() {
    this.props.history.push("/");
    this.props.allowAccess(false, []);
  }

  // To better handle the codes, AccountDisplay and AccountTotalDisplay Components were created, which serve, respectively, to present a summary list of releases in various views, as well as to present the complete list of releases of such views.

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
                  <div className='col-lg-6'>
                  {this.state.showAccountTransactions.allTransactions &&
                    <p className='path-text'><b>Você está em: Sua-Conta-Simples >> Extrato >> Lançamentos Recentes</b></p>
                  }
                  {this.state.showAccountTransactions.receiptsOnly &&
                    <p className='path-text'><b>Você está em: Sua-Conta-Simples >> Extrato >> Recebimentos</b></p>
                  }
                  {this.state.showAccountTransactions.paymentsOnly &&
                    <p className='path-text'><b>Você está em: Sua-Conta-Simples >> Extrato >> Pagamentos</b></p>
                  }
                  {this.state.showAccountTransactions.futureTransactions &&
                    <p className='path-text'><b>Você está em: Sua-Conta-Simples >> Extrato >> Vencimentos Futuros</b></p>
                  }
                    <div id='balance-display'>Saldo: {this.props.userData.balance}</div>
                    <small>
                      <div>Empresa: {this.props.userData.businessName} </div>
                      <div>Aplicação Automática de <b>100%</b> da CDI</div>
                    </small>
                  </div>
                  <Link className='col-lg-1 button-styles deposit-button' to='/meus-depositos'>Depositar</Link>
                </section>
                  <div className="card-header d-flex justify-content-around" id='fixed-menu'>
                    <ul className="nav nav-tabs card-header-tabs">
                      <li className="nav-item">
                      {this.state.showAccountTransactions.allTransactions ?
                        <button className="nav-link active" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Lançamentos")} >Lançamentos</button>
                        :
                        <button className="nav-link" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Lançamentos")} >Lançamentos</button>
                        }
                      </li>
                      <li className="nav-item">
                      {this.state.showAccountTransactions.receiptsOnly ?
                        <button className="nav-link active" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Recebido")} >Entradas</button>
                        :
                        <button className="nav-link" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Recebido")} >Entradas</button>
                      }
                      </li>
                      <li className="nav-item">
                      {this.state.showAccountTransactions.paymentsOnly ?
                        <button className="nav-link active" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Pago")} >Saídas</button>
                        :
                        <button className="nav-link" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Pago")} >Saídas</button>
                      }
                      </li>
                      <li className="nav-item">
                      {this.state.showAccountTransactions.futureTransactions ?
                        <button className="nav-link active" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Vencimento Futuro")} >Futuros</button>
                        :
                        <button className="nav-link" id='card-text-adjustments' onClick={() => this.showAccountTransactions("Vencimento Futuro")} >Futuros</button>
                      }
                      </li>
                    </ul>

                  </div>
                  {this.state.displayAllTransactions ?
                      <AccountTotalDisplay accountData={this.state.accountData} displayTransactions={this.state.showAccountTransactions} reduceListOfTransactions={this.reduceListOfTransactions} />
                  :
                      <AccountDisplay accountData={this.state.accountData} displayTransactions={this.state.showAccountTransactions} expandTransactions={this.expandListOfTransactions} />
                  }
        </div>

      )
  }
}

export default Home;	

