import React, { SyntheticEvent } from "react";

interface OwnProps {
    data: HowMuchData;
    onHowMuchChange: (out: HowMuchData) => void;
}

interface OwnState {
    typed: string;
}

export interface HowMuchData {
    value: number;
}

export default class HowMuch extends React.Component<OwnProps, OwnState> {
    constructor(props: OwnProps) {
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
                <input type="number" value={this.state.typed} onChange={this.handleChange} className="input field-body" />
            </div>
        )
    }

    handleChange = (event: SyntheticEvent) => {
        const nextValue = (event.target as HTMLInputElement).value;

        try {
            const parsedInput = parseInt(nextValue, 10);
            this.setState({
                typed: nextValue
            })
            this.props.onHowMuchChange({
                value: parsedInput
            });
        } catch (_err) {
            // do nothing
        }
    }
}