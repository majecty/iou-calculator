import React, { Component, SyntheticEvent } from 'react'
import { Bill } from '../../types/globalTypes';
const Josa = require("josa-js");

interface OwnProps {
    bill: Bill;
    onBillRemove: (id: number) => void;
    onBillEdit: (bill: Bill) => void;
}

interface OwnState {
    typedPayer: string;
    typedAmount: string;
}

export default class BillCardEdit extends Component<OwnProps, OwnState> {
    private constructor(props: OwnProps) {
        super(props);

        this.state = {
            typedPayer: props.bill.payer,
            typedAmount: props.bill.amount.toString()
        };
    }

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
                                value={this.state.typedPayer}
                                className="input column"
                                onChange={this.handlePayerInputChange}
                            />
                            <span className="column is-narrow">
                                {Josa.c(this.state.typedPayer, "이/가")}
                            </span>
                        </div>
                        <div className="columns is-mobile">
                            <input type="number"
                                value={this.state.typedAmount}
                                className="input column"
                                onChange={this.handleAmountInputChange}
                            />
                            <span className="column is-narrow">
                                원을
                                결제함
                            </span>
                        </div>
                    </div>
                </div>
                <footer className="card-footer">
                    <a href="#" className="card-footer-item" onClick={this.handleSaveClick}>변경사항 저장</a>
                    <a href="#" className="card-footer-item" onClick={this.handleRemoveClick}>영수증 삭제</a>
                </footer>
            </div>
        )
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

    handleSaveClick = (_event: any) => {
        try {
            const amount = parseInt(this.state.typedAmount, 10);

            this.props.onBillEdit({
                payer: this.state.typedPayer,
                amount,
                id: this.props.bill.id
            });
        } catch (_err) {
            alert("금액을 잘못 입력하셨습니다.");
        }
    }

    handleRemoveClick = () => {
        this.props.onBillRemove(this.props.bill.id);
    }
}
