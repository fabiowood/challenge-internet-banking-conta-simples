/* eslint-disable no-useless-constructor */

// Main Configurations

import React, {Component, Fragment} from "react";
import '../component-styles/Home.css';


class AccountTotalDisplay extends Component {
  constructor(props) {
    super(props);
  }

  // This method evaluates each of the possible views requested by the user, first sorting the postings in descending order of date and then treating each posting to present the summarized views on the user statement.

  render() {
    if(this.props.displayTransactions.allTransactions) {

      return (

        <Fragment>
          {this.props.accountData.operations.sort((a, b) => {
                if(a.effectiveTransactionDate.year > b.effectiveTransactionDate.year) {
                    return -1;
                }

                if (a.effectiveTransactionDate.year < b.effectiveTransactionDate.year) {
                    return 1;
                }

                if (a.effectiveTransactionDate.monthNum > b.effectiveTransactionDate.monthNum) {
                    return -1;
                }

                if(a.effectiveTransactionDate.monthNum < b.effectiveTransactionDate.monthNum) {
                    return 1;
                }

                if (a.effectiveTransactionDate.day > b.effectiveTransactionDate.day) {
                    return -1;
                }

                if (a.effectiveTransactionDate.day < b.effectiveTransactionDate.day) {
                    return 1;
                }
          }).map((operation, index) => {
                        return (
                          <Fragment>
                            <div className='card' id='card-adjustments' key={index} >
                              <div className='container d-flex justify-content-around align-items-center' id='container-adjustments'>                   
                              {(operation.status !== "Vencimento Futuro" && operation.status !== "Em Atraso") &&
                                <Fragment>
                                    {operation.nature === "Recebimento" &&
                                      <Fragment>
                                        <h6 className='text-adjustments' id='receipts-style'><small><b>{operation.title}</b></small></h6>
                                        <p className='text-adjustments' id='receipts-style'>+   <small><b>{operation.amount}</b></small></p>
                                      </Fragment>
                                    }
                                    {operation.nature === "Pagamento" &&
                                      <Fragment>
                                        <h6 className='text-adjustments' id='payments-style'><small><b>{operation.title}</b></small></h6>
                                        <p className='text-adjustments' id='payments-style'>-   <small><b>{operation.amount}</b></small></p>
                                      </Fragment>
                                    }
                                    <p className='text-adjustments'><small><b>
                                    {operation.effectiveTransactionDate.day} {operation.effectiveTransactionDate.abrevMonth}
                                    </b></small></p>
                                </Fragment>
                              }
                              </div>
                            </div>
                          </Fragment>
                        )
                      })
           }
           <button className="button-styles" id='resume-transactions' onClick={() => this.props.reduceListOfTransactions()}>Últimos Lançamentos</button>

        </Fragment>

      );
   } 
   else if (this.props.displayTransactions.receiptsOnly) {

    return (

      <Fragment>

        {this.props.accountData.operations.sort((a, b) => {
              if(a.effectiveTransactionDate.year > b.effectiveTransactionDate.year) {
                  return -1;
              }

              if (a.effectiveTransactionDate.year < b.effectiveTransactionDate.year) {
                  return 1;
              }

              if (a.effectiveTransactionDate.monthNum > b.effectiveTransactionDate.monthNum) {
                  return -1;
              }

              if(a.effectiveTransactionDate.monthNum < b.effectiveTransactionDate.monthNum) {
                  return 1;
              }

              if (a.effectiveTransactionDate.day > b.effectiveTransactionDate.day) {
                  return -1;
              }

              if (a.effectiveTransactionDate.day < b.effectiveTransactionDate.day) {
                  return 1;
              }
        }).map((operation, index) => {
                      return (
                       <Fragment>
                        <div className='card' id='card-adjustments' key={index} >
                              <div className='container d-flex justify-content-around align-items-center' id='container-adjustments'>                      
                              {operation.status === "Recebido" &&
                                <Fragment>                                    
                                  <h6 className='text-adjustments' id='receipts-style'><small><b>{operation.title}</b></small></h6>
                                  <p className='text-adjustments' id='receipts-style'>+   <small><b>{operation.amount}</b></small></p>
                                  <p className='text-adjustments'><small><b>
                                    {operation.effectiveTransactionDate.day} {operation.effectiveTransactionDate.abrevMonth}
                                    </b></small></p>
                                </Fragment>
                               }
                              </div>
                          </div>
                        </Fragment>
                      )
                    })
         }
         <button className="button-styles" id='resume-transactions' onClick={() => this.props.reduceListOfTransactions()}>Últimos Lançamentos</button>

      </Fragment>

    );
   } 
   else if (this.props.displayTransactions.paymentsOnly) {

    return (

      <Fragment>

        {this.props.accountData.operations.sort((a, b) => {
              if(a.effectiveTransactionDate.year > b.effectiveTransactionDate.year) {
                  return -1;
              }

              if (a.effectiveTransactionDate.year < b.effectiveTransactionDate.year) {
                  return 1;
              }

              if (a.effectiveTransactionDate.monthNum > b.effectiveTransactionDate.monthNum) {
                  return -1;
              }

              if(a.effectiveTransactionDate.monthNum < b.effectiveTransactionDate.monthNum) {
                  return 1;
              }

              if (a.effectiveTransactionDate.day > b.effectiveTransactionDate.day) {
                  return -1;
              }

              if (a.effectiveTransactionDate.day < b.effectiveTransactionDate.day) {
                  return 1;
              }
        }).map((operation, index) => {
                      return (
                        <Fragment>
                          <div className='card' id='card-adjustments' key={index} >
                              <div className='container d-flex justify-content-around align-items-center' id='container-adjustments'>                      
                              {operation.status === "Pago" &&
                                <Fragment>                                    
                                  <h6 className='text-adjustments' id='payments-style'><small><b>{operation.title}</b></small></h6>
                                  <p className='text-adjustments' id='payments-style'>+   <small><b>{operation.amount}</b></small></p>
                                  <p className='text-adjustments'><small><b>
                                    {operation.effectiveTransactionDate.day} {operation.effectiveTransactionDate.abrevMonth}
                                    </b></small></p>
                                </Fragment>
                               }
                              </div>
                          </div>
                        </Fragment>
                      )
                    })
           }
           <button className="button-styles" id='resume-transactions' onClick={() => this.props.reduceListOfTransactions()}>Últimos Lançamentos</button>

      </Fragment>

    );
   } 
   else if (this.props.displayTransactions.futureTransactions) {

    return (

      <Fragment>

        {this.props.accountData.operations.sort((a, b) => {
              if(a.dueDate.year > b.dueDate.year) {
                  return -1;
              }

              if (a.dueDate.year < b.dueDate.year) {
                  return 1;
              }

              if (a.dueDate.monthNum > b.dueDate.monthNum) {
                  return -1;
              }

              if(a.dueDate.monthNum < b.dueDate.monthNum) {
                  return 1;
              }

              if (a.dueDate.day > b.dueDate.day) {
                  return -1;
              }

              if (a.dueDate.day < b.dueDate.day) {
                  return 1;
              }
        }).map((operation, index) => {
                      return (
                        <Fragment>
                          <div className='card' id='card-adjustments' key={index} >
                              <div className='container d-flex justify-content-around align-items-center' id='container-adjustments'>                      
                              {operation.status === "Vencimento Futuro" &&
                                <Fragment>
                                    {operation.nature === "Recebimento" &&
                                      <Fragment>
                                        <h6 className='text-adjustments' id='receipts-style'><small><b>{operation.title}</b></small></h6>
                                        <p className='text-adjustments' id='receipts-style'>+   <small><b>{operation.amount}</b></small></p>
                                      </Fragment>
                                    }
                                    {operation.nature === "Pagamento" &&
                                      <Fragment>
                                        <h6 className='text-adjustments' id='payments-style'><small><b>{operation.title}</b></small></h6>
                                        <p className='text-adjustments' id='payments-style'>-   <small><b>{operation.amount}</b></small></p>
                                      </Fragment>
                                    }
                                    <p className='text-adjustments'><small><b>
                                    {operation.dueDate.day} {operation.dueDate.abrevMonth}
                                    </b></small></p>
                                </Fragment>
                              }
                              </div>
                          </div>
                        </Fragment>
                      )
                    })
           }

      </Fragment>

    );
   } 
   else if (this.props.displayTransactions.delayedOnly) {

    return (

      <Fragment>

        {this.props.accountData.operations.sort((a, b) => {
              if(a.dueDate.year > b.dueDate.year) {
                  return -1;
              }

              if (a.dueDate.year < b.dueDate.year) {
                  return 1;
              }

              if (a.dueDate.monthNum > b.dueDate.monthNum) {
                  return -1;
              }

              if(a.dueDate.monthNum < b.dueDate.monthNum) {
                  return 1;
              }

              if (a.dueDate.day > b.dueDate.day) {
                  return -1;
              }

              if (a.dueDate.day < b.dueDate.day) {
                  return 1;
              }
        }).map((operation, index) => {
                      return (
                        <Fragment>
                            <div className='card' id='card-adjustments' key={index} >
                              <div className='container d-flex justify-content-around align-items-center' id='container-adjustments'>                      
                              {(operation.status === "Em Atraso" && operation.nature === "Recebimento") &&
                                <Fragment>                                    
                                  <h6 className='text-adjustments' id='payments-style'><small><b>{operation.title}</b></small></h6>
                                  <p className='text-adjustments' id='payments-style'>+   <small><b>{operation.amount}</b></small></p>
                                  <p className='text-adjustments'><small><b>
                                    {operation.dueDate.day} {operation.dueDate.abrevMonth}
                                    </b></small></p>
                                </Fragment>
                               }
                              </div>
                            </div>                          
                        </Fragment>
                      )
                    })
           }
           <button className="button-styles" id='resume-transactions' onClick={() => this.props.reduceListOfTransactions()}>Últimos Lançamentos</button>
      </Fragment>

    );
   }
   else if (this.props.displayTransactions.futureReceipts) {

    return (

      <Fragment>

        {this.props.accountData.operations.sort((a, b) => {
              if(a.dueDate.year > b.dueDate.year) {
                  return -1;
              }

              if (a.dueDate.year < b.dueDate.year) {
                  return 1;
              }

              if (a.dueDate.monthNum > b.dueDate.monthNum) {
                  return -1;
              }

              if(a.dueDate.monthNum < b.dueDate.monthNum) {
                  return 1;
              }

              if (a.dueDate.day > b.dueDate.day) {
                  return -1;
              }

              if (a.dueDate.day < b.dueDate.day) {
                  return 1;
              }
        }).map((operation, index) => {
                      return (
                        <Fragment>
                            <div className='card' id='card-adjustments' key={index} >
                              <div className='container d-flex justify-content-around align-items-center' id='container-adjustments'>                      
                              {(operation.status === "Vencimento Futuro" && operation.nature === "Recebimento") &&
                                <Fragment>                                    
                                  <h6 className='text-adjustments' id='payments-style'><small><b>{operation.title}</b></small></h6>
                                  <p className='text-adjustments' id='payments-style'>+   <small><b>{operation.amount}</b></small></p>
                                  <p className='text-adjustments'><small><b>
                                    {operation.dueDate.day} {operation.dueDate.abrevMonth}
                                    </b></small></p>
                                </Fragment>
                               }
                              </div>
                            </div>
                        </Fragment>
                      )
                    })
        }
      </Fragment>

    );
   }
  }
}

export default AccountTotalDisplay;
