import React, { Component } from 'react';

import { Bill } from '../types/globalTypes';
import BillCardExample from './BillCard/BillCardExample';
import BillCardAdd from './BillCard/BillCardAdd';
import * as R from "rambda";
import BillCardEdit from './BillCard/BillCardEdit';

interface OwnProps {
    onBillAdd: (bill: Bill) => void;
    onBillEdit: (bill: Bill) => void;
    onBillRemove: (id: number) => void;
    bills: Bill[];
    exampleBills: Bill[];
    showExample: boolean;
}

export default class BillCardInput extends Component<OwnProps> {
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
        const exampleCards: [string, JSX.Element][] = R.map(bill =>
            [String(bill.id), <BillCardExample bill={bill} />], this.props.exampleBills);

        const billCards: [string, JSX.Element][] = R.map(bill => [String(bill.id), <BillCardEdit bill={bill} onBillEdit={this.props.onBillEdit} onBillRemove={this.props.onBillRemove} />], this.props.bills);

        const cards: [string, JSX.Element][] = R.concat([
            ["add-bill", <BillCardAdd onBillAdd={this.props.onBillAdd} />],
        ], this.props.showExample ? exampleCards : billCards);

        return (
            <div className="mb3">
                <h2 className="subtitle"> 영수증 입력 </h2>
                {
                    R.map(((cards3: [string, JSX.Element][], index: number) => (
                        <div className="columns" key={`row-${index}`}>
                            {
                                R.map(([key, card]) => <div className="column is-one-third" key={key}>{card}</div>, cards3)
                            }
                        </div>
                    )) as any,
                        R.splitEvery(3, cards))
                }
            </div>
        );
    }
}
