// Main Configurations

import React, { Component, Fragment } from "react";
import "../component-styles/Login.css";
import logo from "../logo-conta-simples.svg";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validAccount: false,
      validPassword: false,
      displayErrorMessage: false,
      userData: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }
  
  handleFormSubmit(event) {
    event.preventDefault();
    const typedEmail = this.state.email;
    const typedPassword = this.state.password;

    // At this moment, there should be an API Call. For the main purpose of this challenge, there will be only a local call to a .json file - bank-account.json.

    // The goal is to simulate a validation of access to the user's private area.

    const validateUserAccount = this.props.bankAccount.filter(
      (element) => (element.email === typedEmail) && (element.password === typedPassword));    
        if (validateUserAccount.length === 1) {
            this.props.history.push('/sua-conta-simples');
            this.props.allowAccess(true, validateUserAccount);
            this.setState({
              email: "",
              password: "",
              validAccount: true,
              validPassword: true,
              userData: validateUserAccount,
            });
          } else {
            this.setState({
              email: "",
              password: "",
              validAccount: false,
              validPassword: false,
              displayErrorMessage: true,
            });
          }
      }

  render() {

    if(this.props.loggedIn === false) {

    return (

      <Fragment>
        <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="section d-flex justify-content-center my-5">
          <div
            className="container d-flex flex-column align-items-center"
          > 
        <p id='path-text'><b>Você está em: Sua-Conta-Simples >> Login</b></p>
            <form className="form" id="form" onSubmit={this.handleFormSubmit}>
              <label>Email:</label>
              <input
                id='input-adjustments'
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder={"Seu email"}
              />
              <label>Senha:</label>
              <input
                id='input-adjustments'
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder={"Sua senha de 6 dígitos"}
              />

              <input id="form-button" type="submit" value="Entrar" />
              {this.state.displayErrorMessage && <p>Verifique o email e a senha!</p>}
            </form>
            <p><small><b>Não tem uma conta?</b></small>
              <a id="form-link" href={"https://contasimples.com/pedir-convite"}>
                PEDIR CONVITE
              </a>
              <a id="form-link" href={"https://contasimples.com/"}>
                VOLTAR
              </a>
            </p>
          </div>
          <figure className='picture-login'></figure>
        </div>
      </Fragment>
      
    );
   }
  }
}

export default Login;
