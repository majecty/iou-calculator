import '../styles/styles.sass';

import React from 'react';

import { Bill, User } from '../types/globalTypes';
import * as R from "rambda";
import PrintOutput from '../components/PrintOutput';
import BillCardInput from '../components/BillCardInput';

interface OwnState {
  bills: Bill[];
  users: User[];
}

const exampleBills: Bill[] = [{
  amount: 0,
  payer: "하나",
  id: 0
}, {
  amount: 3000,
  payer: "희우",
  id: 1
}, {
  amount: 4000,
  payer: "희우",
  id: 2
}];

const exampleUsers: User[] = [{
  id: 0,
  name: "하나"
}, {
  id: 1,
  name: "희우"
}];

export default class Index extends React.Component<any, OwnState> {
  constructor(props: any) {
    super(props);
    this.state = {
      bills: [],
      users: [],
    };
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">더치페이 계산기</h1>
          <BillCardInput onBillAdd={this.handleBillAdd} bills={this.state.bills} exampleBills={exampleBills} showExample={this.needExample()} />
          {this.needExample() && <PrintOutput bills={exampleBills} users={exampleUsers} />}
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

  needExample = () => {
    return this.state.bills.length === 0 && this.state.users.length === 0;
  }
}