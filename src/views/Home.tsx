import React from 'react';

import '../App.scss';
import './Home.scss';
import HomeBanner from '../components/home/HomeBanner';
import DescriptionSection from '../components/home/DescriptionSection';

const Home: React.FunctionComponent = () => {
    return (
        <div className="view home-view">
            <HomeBanner />
            <DescriptionSection />
        </div>
    );
};

export default Home;
