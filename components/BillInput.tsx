import React, { Component, MouseEvent } from 'react';

import AddBillButton from './BillInput/AddBillButton';
import HowMuch, { HowMuchData } from './BillInput/HowMuch';
import WhoCharged, { WhoChargedData } from './BillInput/WhoCharged';
import { Bill } from '../types/globalTypes';

interface OwnProps {
    onBillAdd: (bill: Bill) => void;
}

interface OwnState {
    howMuch: HowMuchData;
    whoCharged: WhoChargedData;
}

export default class BillInput extends Component<OwnProps, OwnState> {
    constructor(props: OwnProps) {
        super(props);
        this.state = {
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
                <HowMuch onHowMuchChange={this.handleHowMuchOut} data={this.state.howMuch} />
                <WhoCharged onWhoChargedChange={this.handleWhoCharged} data={this.state.whoCharged} />
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
        this.props.onBillAdd({
            amount: this.state.howMuch.value,
            payer: this.state.whoCharged.value,
            id: Math.random(),
        });
        this.setState({
            howMuch: {
                value: 0
            },
            whoCharged: {
                value: ""
            }
        });
    }

    handleWhoCharged = (out: WhoChargedData) => {
        this.setState({
            whoCharged: out
        });
    }
}
