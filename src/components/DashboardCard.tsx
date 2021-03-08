import React, { Component } from 'react';

class DashboardCard extends Component<{
    cardImage: string;
    cardURL: string;
    viewScreeningStage: (newStage: string) => void;
}> {
    render(): React.ReactNode {
        return (
            <div>
                <img
                    src={this.props.cardImage}
                    alt=""
                    onClick={() => this.props.viewScreeningStage(this.props.cardURL)}
                />
            </div>
        );
    }
}

export default DashboardCard;
