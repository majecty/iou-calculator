import React, { SyntheticEvent } from "react";

interface OwnState {
    typed: string;
}

export default class HowMuch extends React.Component<any, OwnState> {
    constructor(props: any) {
        super(props);
        this.state = {
            typed: ""
        };

    }

    render() {
        return (
            <div className="field is-horizontal">
                <h2 className="subtitle field-label is-normal">
                    얼마나?
                </h2>
                <input type="text" value={this.state.typed} onChange={this.handleChange} className="input field-body" />
            </div>
        )
    }

    handleChange = (event: SyntheticEvent) => {
        this.setState({
            typed: (event.target as HTMLInputElement).value
        })
    }
}