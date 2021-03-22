import React, { FunctionComponent } from 'react';
import './FeaturesSection.scss';
import './FeatureCard';
import FeatureCard from './FeatureCard';

const FeaturesSection: FunctionComponent = () => {
    return (
        <section className="features-section">
            <p className="feature-slogan">Features that just make sense</p>
            <p className="feature-header">
                So, what makes us special?
                <br /> We’re glad you asked.
            </p>
            <div className="columns is-multiline">
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
                <FeatureCard />
            </div>
        </section>
    );
};
export default FeaturesSection;
