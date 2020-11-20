import React, { FunctionComponent } from 'react';
import './FeatureCard.scss';

interface IFeatureCardProps {
    title: string;
    text: string;
    imgSrc: string;
}

const FeatureCard: FunctionComponent<IFeatureCardProps> = (props: IFeatureCardProps) => {
    return (
        <div className="column is-one-third">
            <div className="feature-card">
                <figure className="card-image">
                    <img src={props.imgSrc} alt={props.imgSrc} />
                </figure>
                <div className="feature-card-content">
                    <p className="title">{props.title}</p>
                    <p className="text">{props.text}</p>
                </div>
            </div>
        </div>
    );
};
export default FeatureCard;
