import React, { Component } from 'react';

class DashboardCard extends Component<{ cardImage: string; cardURL: string }> {
    handleClick = (): void => {
        console.log('Card URL is: ' + this.props.cardURL);
    };

    render(): React.ReactNode {
        return (
            <div>
                <img src={this.props.cardImage} alt="" onClick={this.handleClick} />
            </div>
        );
    }
}

export default DashboardCard;
