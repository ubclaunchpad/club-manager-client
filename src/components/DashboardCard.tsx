import React, { Component } from 'react'

class DashboardCard extends Component<{cardImage: any, cardURL: string}> {

    handleClick = () => {
        console.log("Card URL is: " + this.props.cardURL);
    }

    render(): React.ReactNode {
        return (
            <div>
                <figure className="image" onClick={this.handleClick}>
                    <img src={this.props.cardImage} alt=""/>
                </figure>
            </div>
        );
    }
}

export default DashboardCard