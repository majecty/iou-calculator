import React, { Component, SyntheticEvent, MouseEvent } from 'react'
import { User } from '../types/globalTypes';

interface OwnProps {
    users: User[]
    onUserAdd: (user: User) => void;
}

interface OwnState {
    typed: string;
}

export default class AdditionalUsers extends Component<OwnProps, OwnState> {
    constructor(props: OwnProps) {
        super(props);
        this.state = {
            typed: ""
        };
    }

    render() {
        return (
            <div className="box">
                <ul>
                    {this.props.users.map(user => (
                        <li>
                            {user.name}
                        </li>
                    ))}
                </ul>

                <div className="field is-horizontal">
                    <label className="subtitle field-label is-normal">
                        사람 추가하기
                    </label>
                    <input type="text" value={this.state.typed} onChange={this.handleChange} className="input field-body" />
                    <button className="button is-primary" onClick={this.handleClick}>추가</button>
                </div>
            </div>
        )
    }

    handleChange = (event: SyntheticEvent) => {
        const value = (event.target as HTMLInputElement).value;
        this.setState({
            typed: value
        });
    }

    handleClick = (_event: MouseEvent) => {
        if (this.state.typed === "") {
            return;
        }
        this.props.onUserAdd({
            name: this.state.typed,
            id: Math.random()
        });
        this.setState({
            typed: ""
        });
    }
}
