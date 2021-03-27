import React from 'react';
import FeatureCard from './FeatureCard';

import FeaturesList from './FeaturesList';

class FeaturesGrid extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="columns is-multiline">
                {FeaturesList.map((feature) => (
                    <FeatureCard
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        isDeployed={feature.isDeployed}
                        key={feature.title}
                    />
                ))}
            </div>
        );
    }
}

export default FeaturesGrid;
