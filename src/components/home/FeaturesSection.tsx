import React, { FunctionComponent } from 'react';
import './FeaturesSection.scss';

import FeaturesGrid from './FeaturesGrid';

const FeaturesSection: FunctionComponent = () => {
    return (
        <section className="features-section">
            <p className="feature-slogan">Features that just make sense</p>
            <p className="feature-header">
                So, what makes us special?
                <br /> We’re glad you asked.
            </p>

            <FeaturesGrid />
        </section>
    );
};
export default FeaturesSection;
