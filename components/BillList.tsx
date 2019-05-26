import React, { Component } from 'react';
import { Bill } from '../types/globalTypes';
const Josa = require("josa-js");

interface OwnProps {
    bills: Bill[];
}

export default class BillList extends Component<OwnProps, any> {
    render() {
        return (
            <div className="box">
                <h2 className="subtitle">
                    계산서
                </h2>
                <ul>
                    {this.props.bills.map(bill => (
                        <li key={bill.id.toString()}>
                            {Josa.r(bill.payer, "이/가")} {bill.amount}원을 결제
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
