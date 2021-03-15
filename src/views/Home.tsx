import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import './Home.scss';
import HomeBanner from '../components/home/HomeBanner';
import DescriptionSection from '../components/home/DescriptionSection';
import FeaturesSection from '../components/home/FeaturesSection';
import HomeFooter from '../components/home/HomeFooter';
import GoogleLogoutButton from '../components/auth/GoogleLogoutButton';

const Home: React.FunctionComponent = () => {
    return (
        <div className="view home-view">
            <HomeBanner />
            <div className="container">
                {/*Links temporary to allow visualization of other views */}
                <Link to="/dashboard">Dashboard</Link>
                <br />
                <Link to="/applicantinfo">ApplicantInfo</Link>
                <DescriptionSection />
                <FeaturesSection />
                <GoogleLogoutButton />
            </div>
            <HomeFooter />
        </div>
    );
};

export default Home;
