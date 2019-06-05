import React, { Component } from 'react'
import { Bill } from '../../types/globalTypes';

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
                        <input type="text"
                            value={this.props.bill.payer}
                            className="input"
                            disabled
                        />
                        가
                        <input type="number"
                            value={this.props.bill.amount}
                            className="input"
                            disabled
                        />
                        원을
                        결제함
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
