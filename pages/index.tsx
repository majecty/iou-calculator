import '../styles/styles.sass';

import React from 'react';

import BillInput from '../components/BillInput';
import BillList from '../components/BillList';
import { Bill } from '../types/globalTypes';

interface OwnState {
  bills: Bill[];
}

export default class Index extends React.Component<any, OwnState> {
  constructor(props: any) {
    super(props);
    this.state = {
      bills: []
    };
  }

  render() {
    return (
      <div className="section">
        <div className="container">
          <h1 className="title">Hello Next.js</h1>
          <BillInput onBillAdd={this.handleBillAdd} />
          <BillList bills={this.state.bills} />
        </div>
      </div>
    )
  }

  handleBillAdd = (bill: Bill) => {
    this.setState(state => {
      return {
        bills: state.bills.concat(bill)
      }
    });
  }
}