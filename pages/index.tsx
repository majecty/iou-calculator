import '../styles/styles.sass';

import React from 'react';

import BillInput from '../components/BillInput';
import BillList from '../components/BillList';
import { Bill, User } from '../types/globalTypes';
import * as R from "rambda";
import AdditionalUsers from '../components/AdditionalUsers';
import PrintOutput from '../components/PrintOutput';

interface OwnState {
  bills: Bill[];
  users: User[];
}

export default class Index extends React.Component<any, OwnState> {
  constructor(props: any) {
    super(props);
    this.state = {
      bills: [],
      users: []
    };
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">더치페이 계산기</h1>
          <BillInput onBillAdd={this.handleBillAdd} />
          <BillList bills={this.state.bills} />
          <AdditionalUsers users={this.state.users} onUserAdd={this.handleUserAdd} />
          <PrintOutput users={this.state.users} bills={this.state.bills} />
        </div>
      </div>
    )
  }

  handleBillAdd = (bill: Bill) => {
    const user = R.find(user => user.name === bill.payer, this.state.users);
    if (!user) {
      this.setState(state => ({
        users: state.users.concat({
          name: bill.payer,
          id: Math.random()
        })
      }));
    }

    this.setState(state => {
      return {
        bills: state.bills.concat(bill)
      }
    });
  }

  handleUserAdd = (user: User) => {
    this.setState(state => ({
      users: state.users.concat(user)
    }));
  }
}