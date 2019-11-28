/* eslint-disable default-case */
/* eslint-disable no-useless-constructor */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */

// Main Configurations

import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import "../component-styles/Home.css";
import logo from "../logo-conta-simples.svg";

// Components Dependencies

import Login from './Login';

class Navbar extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      accountData: this.props.accountTransactions,
      logged: true,
      }
    }

  render(){
    if (this.state.logged) {
      
      return (

        <Fragment>
                <div className="container">
                    <div className="row justify-content-around align-items-center">
                        <div className='col-lg-1'>
                          <Link to='/sua-conta-simples'><img className='logo' src={logo} alt='logo-conta-simples'/></Link>
                        </div>
                        <div className="col-lg-11">
                              <nav className="navbar navbar-expand-lg navbar-light" id='nav-bar'>
                              <a className="navbar-brand" href="#"></a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                  <span className="navbar-toggler-icon"></span>
                                </button>
                                  <div className="collapse navbar-collapse"
                                      id="navbarSupportedContent">
                                      <ul className="navbar-nav" id='nav-general-items'>           
                                          <li className="nav-item header-options" id='nav-custom-hello'>Olá, {this.props.userData.userFirstName} {this.props.userData.userLastName}!</li>
                                          <DropdownButton className="nav-item active header-options" id="dropdown-item-button" title="Minha Conta">
                                            <Link to='/meus-dados'><Dropdown.Item as="button" className='#dropdown-item'>Meus Dados</Dropdown.Item></Link>
                                            <Link to='/tarifas'><Dropdown.Item as="button" className='#dropdown-item'>Tarifas</Dropdown.Item></Link>
                                            <Link to='/beneficios'><Dropdown.Item as="button" className='#dropdown-item'>Benefícios</Dropdown.Item></Link>
                                          </DropdownButton>
                                          <DropdownButton className="nav-item active header-options" id="dropdown-item-button" title="Cobranças">
                                            <Link to='/emitir-boletos'><Dropdown.Item as="button" className='#dropdown-item'>Emitir Boletos</Dropdown.Item></Link>
                                          </DropdownButton>
                                          <DropdownButton className="nav-item active header-options" id="dropdown-item-button" title="Pagamentos">
                                            <Link to='/meus-pagamentos'><Dropdown.Item as="button" className='#dropdown-item'>Efetuar Pagamentos</Dropdown.Item></Link>
                                            <Link to='/transferencias'><Dropdown.Item as="button" className='#dropdown-item'>Transferências</Dropdown.Item></Link>
                                          </DropdownButton>
                                          <li className="nav-item header-options">
                                          <Link className="nav-link" id='nav-custom' to='/gestao' >Gestão</Link>
                                          </li>
                                          <DropdownButton className="nav-item active header-options" id="dropdown-item-button" title="Outros Serviços">
                                            <Link to='/cartoes'><Dropdown.Item as="button" className='#dropdown-item'>Cartões</Dropdown.Item></Link>
                                            <Link to='/comprovantes'><Dropdown.Item as="button" className='#dropdown-item'>Comprovantes</Dropdown.Item></Link>
                                            <Link to='/faq'><Dropdown.Item as="button" className='#dropdown-item'>Perguntas Frequentes</Dropdown.Item></Link>
                                            <Link to='/fale-conosco'><Dropdown.Item as="button" className='#dropdown-item'>Fale Conosco</Dropdown.Item></Link>
                                          </DropdownButton>                                        
                                      </ul>
                                  </div>
                              </nav>
                          </div>
                    </div>
                </div>
                
        </Fragment>

      )
    } else {
      return (
        <Login />
      )
    }
  }
}

export default Navbar;	