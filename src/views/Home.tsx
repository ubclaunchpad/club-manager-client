import React from 'react';

import '../App.scss';
import './Home.scss';
import HomeBanner from '../components/home/HomeBanner';
import DescriptionSection from '../components/home/DescriptionSection';
import FeaturesSection from '../components/home/FeaturesSection';

const Home: React.FunctionComponent = () => {
    return (
        <div className="view home-view">
            <HomeBanner />
            <DescriptionSection />
            <FeaturesSection />
        </div>
    );
};

export default Home;
