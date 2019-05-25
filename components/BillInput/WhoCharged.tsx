import React, { SyntheticEvent } from "react";

interface OwnProps {
    data: WhoChargedData;
    onWhoChargedChange: (out: WhoChargedData) => void;
}

export interface WhoChargedData {
    value: string;
}

export default class WhoCharged extends React.Component<OwnProps, any> {
    render() {
        return (
            <div className="field is-horizontal">
                <h2 className="subtitle field-label is-normal">
                    누가 냈나요?
                </h2>
                <input type="text" value={this.props.data.value} onChange={this.handleChange} className="input field-body" />
            </div>
        )
    }

    handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
        this.props.onWhoChargedChange({
            value: (event.target as HTMLInputElement).value
        });
    }
}