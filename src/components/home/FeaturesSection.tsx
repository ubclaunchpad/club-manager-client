import React, { FunctionComponent } from 'react';
import './FeaturesSection.scss';

import FeaturesGrid from './FeaturesGrid';

const FeaturesSection: FunctionComponent = () => {
    return (
        <section className="features-section">
            <p className="feature-slogan"> FEATURES THAT JUST. MAKE. SENSE.</p>
            <p className="feature-section-header">
                So, what makes us special?
                <br /> We’re glad you asked.
            </p>

            <FeaturesGrid />
        </section>
    );
};
export default FeaturesSection;
