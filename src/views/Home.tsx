import React from 'react';

import '../App.scss';
import './Home.scss';
import HomeBanner from '../components/home/HomeBanner';
import DescriptionSection from '../components/home/DescriptionSection';
import FeaturesSection from '../components/home/FeaturesSection';
import LinksSection from '../components/home/LinksSection';
import HomeFooter from '../components/home/HomeFooter';

const Home: React.FunctionComponent = () => {
    return (
        <div className="home-view">
            <HomeBanner />
            <DescriptionSection />
            <FeaturesSection />
            <LinksSection />
            <HomeFooter />
        </div>
    );
};

export default Home;
