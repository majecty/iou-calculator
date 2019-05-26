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

export default class BillInput extends Component<OwnProps, OwnState> {
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
            <div className="box">
                <HowMuch key={this.state.id} onHowMuchChange={this.handleHowMuchOut} data={this.state.howMuch} />
                <WhoCharged key={this.state.id + 1}
                    onWhoChargedChange={this.handleWhoCharged} data={this.state.whoCharged}
                    onEnter={this.handleEnter} />
                <AddBillButton onClick={this.handleClick} />
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
