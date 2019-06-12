import React, { Component } from 'react'
import { Bill } from '../../types/globalTypes';
const Josa = require("josa-js");

interface OwnProps {
    bill: Bill;
}

export default class BillCardExample extends Component<OwnProps> {
    public render() {
        return (
            <div className="card has-background-white-bis">
                <header className="card-header">
                    <p className="card-header-title">
                        영수증 예시
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="columns is-mobile">
                            <input type="text"
                                value={this.props.bill.payer}
                                className="input column"
                                disabled
                            />
                            <span className="column is-narrow">
                                {Josa.c(this.props.bill.payer, "이/가")}
                            </span>
                        </div>
                        <div className="columns is-mobile">
                            <input type="number"
                                value={this.props.bill.amount}
                                className="input column"
                                disabled
                            />
                            <span className="column is-narrow">
                                원을
                                결제함
                            </span>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item">변경사항 저장</a>
                    <a href="#" className="card-footer-item">영수증 삭제</a>
                </footer>
            </div>
        )
    }
}
