import React, { Component, SyntheticEvent } from 'react'
import { Bill } from '../../types/globalTypes';
const Josa = require("josa-js");

interface OwnProps {
    onBillAdd: (bill: Bill) => void;
}

interface OwnState {
    typedPayer: string;
    typedAmount: string;
}

export default class BillCardAdd extends Component<OwnProps, OwnState> {
    private constructor(props: OwnProps) {
        super(props);

        this.state = {
            typedPayer: "",
            typedAmount: ""
        };
    }

    public render() {
        return (
            <div className="card">
                <header className="card-header">
                    <p className="card-header-title">
                        새 영수증
                    </p>
                </header>
                <div className="card-content">
                    <div className="content">
                        <div className="columns is-mobile">
                            <input type="text"
                                placeholder="희우"
                                className="input column"
                                value={this.state.typedPayer}
                                onChange={this.handlePayerInputChange}
                            />
                            <span className="column is-narrow">
                                {Josa.c(this.state.typedPayer, "이/가")}
                            </span>
                        </div>
                        <div className="columns is-mobile">
                            <input type="number"
                                placeholder="3000"
                                className="input column"
                                value={this.state.typedAmount}
                                onChange={this.handleAmountInputChange}
                            />
                            <span className="column is-narrow">
                                원을
                            </span>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item" onClick={this.handleAddBill}>결제한 영수증 추가</a>
                </footer>
            </div>
        );
    }

    handlePayerInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
        this.setState({
            typedPayer: (event.target as HTMLInputElement).value
        });
    }

    handleAmountInputChange = (event: SyntheticEvent<HTMLInputElement>) => {
        this.setState({
            typedAmount: (event.target as HTMLInputElement).value
        });
    }

    handleAddBill = (_event: any) => {
        try {
            const amount = parseInt(this.state.typedAmount);
            this.props.onBillAdd({
                amount,
                payer: this.state.typedPayer,
                id: Math.random()
            });
            this.setState({
                typedAmount: "",
                typedPayer: ""
            });
        } catch (_err) {
            alert("입력한 금액이 숫자 형식이 아닙니다.");
        }
    }
}
