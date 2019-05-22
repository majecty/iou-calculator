import React, { Component, MouseEvent } from 'react';

import AddBillButton from './BillInput/AddBillButton';
import HowMuch from './BillInput/HowMuch';
import WhoCharged from './BillInput/WhoCharged';

export default class BillInput extends Component {
    render() {
        return (
            <div className="box">
                <HowMuch />
                <WhoCharged />
                <AddBillButton onClick={this.handleClick} />
            </div>
        )
    }

    handleClick = (event: MouseEvent) => {
        alert("Button clicked");
    }
}
