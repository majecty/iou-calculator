import React, { Component, SyntheticEvent, MouseEvent, KeyboardEvent } from 'react'
import { User } from '../types/globalTypes';
import "./AdditionalUsers.sass";

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
                <div className="field">
                    <label className="subtitle is-normal">
                        사람 추가하기
                        </label>
                </div>

                <ul>
                    {this.props.users.map(user => (
                        <li key={user.name}>
                            {user.name}
                        </li>
                    ))}
                </ul>
                <div className="field">
                    <div className="control">
                        <input type="text" value={this.state.typed} onChange={this.handleChange} className="input"
                            onKeyPress={this.handleKeyPress} />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button className="button is-primary user-add-button" onClick={this.handleClick}>추가</button>
                    </div>
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
        this.addUser();
    }

    handleKeyPress = (event: KeyboardEvent) => {
        if (event.key.toLowerCase() === "enter") {
            this.addUser();
        }
    }

    addUser = () => {
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
