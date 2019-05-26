import React, { Component } from 'react'
import { User, Bill } from '../types/globalTypes';
import * as R from "rambda";

interface OwnProps {
    users: User[];
    bills: Bill[];
}

interface Transaction {
    from: string;
    to: string;
    amount: number;
}

export default class PrintOutput extends Component<OwnProps, any> {
    render() {
        return (
            <div className="box">
                <p>
                    총 금액은 {this.totalPrice()}원 입니다.
                    총 인원은 {this.userCount()}명 입니다.
                    각자 낼 금액은 {this.eachPrice()}원 입니다.
                </p>
                <ul>
                    {this.calculateTransactions().map(transaction => (
                        <li key={`${transaction.from}-${transaction.to}-${transaction.amount}`}>
                            {transaction.from}은 {transaction.to}에게 {transaction.amount}원을 송금해 주세요.
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    totalPrice = () => {
        return R.reduce((acc, bill) => acc + bill.amount, 0, this.props.bills);
    }

    userCount = () => {
        return this.props.users.length;
    }

    eachPrice = () => {
        return this.totalPrice() / this.userCount();
    }

    calculateTransactions = (): Transaction[] => {
        return resolveDept(this.props.users, this.props.bills);
    }
}

interface Dept {
    name: string;
    amount: number;
}

interface TransactionState {
    // sorted by amount
    depts: Dept[];
    transactions: Transaction[];
}

function assert(expression: boolean, log: string) {
    if (!expression) {
        console.error(log);
        throw new Error(log);
    }
}

function resolveDeptOnce(state: TransactionState): TransactionState {
    if (state.depts.length === 0) {
        return state;
    }

    assert(state.depts.length !== 1,
        `Invalid depts ${JSON.stringify(state)}`);

    const firstDept = R.head(state.depts)!;
    const lastDept = R.takeLast(1, state.depts)[0];
    const remainDepts: Dept[] = (R.compose as any)(R.drop<Dept>(1), R.dropLast<Dept>(1))(state.depts);

    assert(firstDept.amount < 0, `First dept should be less than 0, but it was ${firstDept.amount}`);
    assert(lastDept.amount > 0, `Last dept should be grater than 0, but it was ${lastDept.amount}`);

    const transferredAmount = R.min(-firstDept.amount, lastDept.amount);
    const newTransaction = {
        from: lastDept.name,
        to: firstDept.name,
        amount: transferredAmount
    };

    let newDepts = [
        ...remainDepts,
        {
            ...firstDept,
            amount: firstDept.amount + transferredAmount
        },
        {
            ...lastDept,
            amount: lastDept.amount - transferredAmount
        }
    ];
    newDepts = R.filter(dept => dept.amount !== 0, newDepts);
    newDepts = R.sortBy(dept => dept.amount, newDepts);

    assert(newDepts.length < state.depts.length, `resolveDeptOnce should reduce depts \n From: ${JSON.stringify(state.depts)}\n To: ${JSON.stringify(newDepts)}`);
    return {
        depts: newDepts,
        transactions: [...state.transactions, newTransaction]
    };
}

function resolveDept(users: User[], bills: Bill[]): Transaction[] {
    const totalAmount = R.reduce((acc, bill) => acc + bill.amount, 0, bills);
    const userCount = users.length;
    const average = totalAmount / userCount;
    const defaultDepts = R.map(user => ({
        name: user.name,
        amount: average
    }), users);
    const deptMap: { [index: string]: Dept } = R.indexBy(user => user.name, defaultDepts);
    R.forEach(bill => {
        deptMap[bill.payer].amount -= bill.amount;
    }, bills);
    const initialDepts = R.sortBy(dept => dept.amount, R.values(deptMap));

    const firstState: TransactionState = {
        depts: initialDepts,
        transactions: []
    }

    if (R.all(dept => dept.amount === 0, firstState.depts)) {
        return [];
    }

    let state = firstState;
    while (state.depts.length > 0) {
        state = resolveDeptOnce(state);
    }

    return state.transactions;
}