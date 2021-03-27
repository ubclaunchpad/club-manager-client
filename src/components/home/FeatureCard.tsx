import React from 'react';
import './FeatureCard.scss';

interface IFeatureCardProps {
    icon: string;
    title: string;
    description: string;
    isDeployed: boolean;
}

class FeatureCard extends React.Component<IFeatureCardProps> {
    render(): React.ReactNode {
        return (
            <div className="column is-one-third">
                <div className="feature-card">
                    <img src={this.props.icon} alt="icon" />
                    <p>{this.props.isDeployed ? '' : 'COMING SOON'}</p>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}
export default FeatureCard;
