import React, { FunctionComponent } from 'react';
import './FeatureCard.scss';

interface IFeatureCardProps {}

const FeatureCard: FunctionComponent<IFeatureCardProps> = (props: IFeatureCardProps) => {
    return (
        <div className="column is-one-third">
            <div className="feature-card">test</div>
        </div>
    );
};
export default FeatureCard;
