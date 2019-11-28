// Main Configurations

import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Components Dependencies

import Login from "./components/Login";
import Home from "./components/Home";
import MyData from "./components/menu-list/MyData";
import Tariffs from "./components/menu-list/Tariffs";
import Benefits from "./components/menu-list/MyData";
import ChargeCounterparts from "./components/menu-list/ChargeCounterparts";
import MyPayments from "./components/menu-list/MyPayments";
import Transfers from "./components/menu-list/Transfers";
import BusinessManagement from "./components/menu-list/BusinessManagement";
import CreditCards from "./components/menu-list/CreditCards";
import Receipts from "./components/menu-list/Receipts";
import FAQ from "./components/menu-list/FAQ";
import TalkToUs from "./components/menu-list/TalkToUs";
import MyBankDeposits from "./components/menu-list/MyBankDeposits";
import Footer from "./components/footer";

// Entry Data Dependencies

import bankAccount from "./app-data/bank-account.json";
import bankAccountTransactions from "./app-data/bank-account-transactions.json";

// App Render
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bankAccount: bankAccount,
      bankAccountTransactions: bankAccountTransactions,
      loggedIn: false,
      loggedInAccount: [],
    };
    this.checkLoggedIn = this.checkLoggedIn.bind(this);
  }

  // At this moment, there should be an API Call. For the main purpose of this challenge, there will be only a local call to a .json file - bank-account.json.

  // The goal is to simulate a validation of access to the user's private area.

  checkLoggedIn(accessState, account) {
    if(account.length === 0) {
      this.setState({
      loggedIn: accessState,
      loggedInAccount: account,
      bankAccountTransactions: bankAccountTransactions,
      });
    } else {
      let choosenAccount = account[0].accountNumber;
      const validAccount = this.state.bankAccountTransactions.filter(
          (element) => element.accountNumber === choosenAccount);
      console.log(validAccount);
      this.setState({
        loggedIn: accessState,
        loggedInAccount: account,
        bankAccountTransactions: validAccount,
      });
    }
  }

//  Since we are not using a backend authentication layer, we are simulating data passing and the "logged in" status to the user's private area for each Component.

// In a real scenario, code modifications would be required to incorporate an effective authentication layer using best practices and industry tools (eg Passport).

  render() {
    return (
      <Fragment>

        <Switch>

          <Route exact path='/' render={(props) => <Login bankAccount={this.state.bankAccount} accountTransactions={this.state.bankAccountTransactions} allowAccess={this.checkLoggedIn} loggedIn={this.state.loggedIn} {...props} />} />

          <Route exact path='/sua-conta-simples' render={(props) => <Home loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/meus-dados' render={(props) => <MyData loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/tarifas' render={(props) => <Tariffs loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/beneficios' render={(props) => <Benefits loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/emitir-boletos' render={(props) => <ChargeCounterparts loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/meus-pagamentos' render={(props) => <MyPayments loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/transferencias' render={(props) => <Transfers loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/gestao' render={(props) => <BusinessManagement loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props}/>} />

          <Route exact path='/cartoes' render={(props) => <CreditCards loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/comprovantes' render={(props) => <Receipts loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/faq' render={(props) => <FAQ loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/fale-conosco' render={(props) => <TalkToUs loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

          <Route exact path='/meus-depositos' render={(props) => <MyBankDeposits loggedIn={this.state.loggedIn} userData={this.state.bankAccount[0]} accountTransactions={this.state.bankAccountTransactions[0]} allowAccess={this.checkLoggedIn} {...props} />} />

        </Switch>

        <Footer/>

      </Fragment>
    );
  }
}

export default App;
