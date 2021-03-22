import React from 'react';

import '../App.scss';
import './Home.scss';
import HomeBanner from '../components/home/HomeBanner';

const Home: React.FunctionComponent = () => {
    return (
        <div className="view home-view">
            <HomeBanner />
        </div>
    );
};

export default Home;
