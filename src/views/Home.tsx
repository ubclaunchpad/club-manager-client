import React from 'react';

import '../App.scss';
import './Home.scss';
import HomeBanner from '../components/home/HomeBanner';
import DescriptionSection from '../components/home/DescriptionSection';
import FeaturesSection from '../components/home/FeaturesSection';
import LinksSection from '../components/home/LinksSection';

const Home: React.FunctionComponent = () => {
    return (
        <div className="view home-view">
            <HomeBanner />
            <DescriptionSection />
            <FeaturesSection />
            <LinksSection />
        </div>
    );
};

export default Home;
