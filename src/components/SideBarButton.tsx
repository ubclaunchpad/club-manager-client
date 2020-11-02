import React, { Component } from 'react';

class SideBarButton extends Component<{ buttonIcon: string; buttonURL: string }> {
    handleClick = (): void => {
        console.log('Button URL is: ' + this.props.buttonURL);
    };

    render(): React.ReactNode {
        return (
            <li>
                <img src={this.props.buttonIcon} alt="" onClick={this.handleClick} />
            </li>
        );
    }
}

export default SideBarButton;
