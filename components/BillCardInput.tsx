import React, { Component, MouseEvent } from 'react';

import AddBillButton from './BillInput/AddBillButton';
import HowMuch, { HowMuchData } from './BillInput/HowMuch';
import WhoCharged, { WhoChargedData } from './BillInput/WhoCharged';
import { Bill } from '../types/globalTypes';

interface OwnProps {
    onBillAdd: (bill: Bill) => void;
}

interface OwnState {
    id: number;
    howMuch: HowMuchData;
    whoCharged: WhoChargedData;
}

export default class BillCardInput extends Component<OwnProps, OwnState> {
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            id: Math.random(),
            howMuch: {
                value: 0
            },
            whoCharged: {
                value: ""
            }
        };
    }

    render() {
        return (
            <div className="mb3">
                <h2 className="subtitle"> 영수증 입력 </h2>
                <div className="columns" >
                    <div className="column is-one-third">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    새 영수증
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <input type="text"
                                        placeholder="회우"
                                        className="input"
                                    />
                                    가
                                    <input type="number"
                                        placeholder="3000"
                                        className="input"
                                    />
                                    원을
                                </div>
                            </div>
                            <footer className="card-footer">
                                <a href="#" className="card-footer-item">결제한 영수증 추가</a>
                            </footer>
                        </div>
                    </div>

                    <div className="column is-one-third">
                        <div className="card has-background-white-bis">
                            <header className="card-header">
                                <p className="card-header-title">
                                    영수증 예시
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <input type="text"
                                        value="하나"
                                        className="input"
                                        disabled
                                    />
                                    가
                                    <input type="number"
                                        value="0"
                                        className="input"
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
                    </div>
                    <div className="column is-one-third">
                        <div className="card has-background-white-ter">
                            <header className="card-header">
                                <p className="card-header-title">
                                    영수증 예시
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <input type="text"
                                        value="회우"
                                        className="input"
                                    />
                                    가
                                    <input type="number"
                                        value="3000"
                                        className="input"
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
                    </div>
                </div>
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="card has-background-white-ter">
                            <header className="card-header">
                                <p className="card-header-title">
                                    영수증 예시
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    <input type="text"
                                        value="회우"
                                        className="input"
                                    />
                                    가
                                    <input type="number"
                                        value="4000"
                                        className="input"
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
                    </div>
                </div>

            </div>
        );
    }

    handleHowMuchOut = (out: HowMuchData) => {
        this.setState({
            howMuch: out
        });
    }

    handleClick = (_event: MouseEvent) => {
        this.addBill();
    }

    handleEnter = () => {
        this.addBill();
    }

    handleWhoCharged = (out: WhoChargedData) => {
        this.setState({
            whoCharged: out
        });
    }

    addBill = () => {
        this.props.onBillAdd({
            amount: this.state.howMuch.value,
            payer: this.state.whoCharged.value,
            id: this.state.id,
        });
        this.setState({
            id: Math.random(),
            howMuch: {
                value: 0
            },
            whoCharged: {
                value: ""
            }
        });
    }
}
