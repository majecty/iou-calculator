import React, { MouseEvent } from "react";

interface OwnProps {
    onClick: (event: MouseEvent) => void;
}

export default class AddBillButton extends React.Component<OwnProps, any> {
    render() {
        return (
            <div className="control">
                <button className="button is-primary" onClick={this.handleClick}> 추가 </button>
            </div>
        )
    }

    handleClick = (event: MouseEvent) => {
        this.props.onClick(event);
    }
}