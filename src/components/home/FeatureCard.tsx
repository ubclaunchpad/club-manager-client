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
                    <img className="feature-icon" src={this.props.icon} alt="icon" />
                    <span className="is-deployed">{this.props.isDeployed ? '' : 'COMING SOON'}</span>
                    <br />
                    <p className="feature-title">{this.props.title}</p>
                    <p className="feature-description">{this.props.description}</p>
                </div>
            </div>
        );
    }
}
export default FeatureCard;
