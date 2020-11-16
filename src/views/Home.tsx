import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import './Home.scss';
import HomeBanner from '../components/home/HomeBanner';

const Home: React.FunctionComponent = () => {
    return (
        <div className="view home-view">
            <HomeBanner />
            <div className="container">
                <Link to="/dashboard">Dashboard</Link>
                <br />
                <Link to="/applicantinfo">ApplicantInfo</Link>
            </div>
        </div>
    );
};

export default Home;
