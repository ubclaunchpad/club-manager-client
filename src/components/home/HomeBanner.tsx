import React, { FunctionComponent } from 'react';
import './HomeBanner.scss';
import { Link } from 'react-router-dom';
import HireflowIcon from '../../images/HireflowIcon.svg';
import HomeMainBannerImg from '../../images/home/HomeMainBannerImg.svg';

const HomeBanner: FunctionComponent = () => {
    return (
        <div className="home-main-banner">
            <div className="columns">
                <div className="column is-2">
                    <img src={HireflowIcon} alt="Hireflow Icon" />
                </div>
                <div className="column is-8"></div>
                <div className="column has-text-right">
                    <Link
                        to={{
                            pathname: '/login',
                            state: true, //related to isLogin in Login component
                        }}
                        className="link"
                    >
                        Get Started
                    </Link>
                </div>
            </div>
            <h1 className="title">
                Recruiting.
                <br /> Made kinder.
            </h1>
            <img src={HomeMainBannerImg} className="main-banner-img" alt="" />
        </div>
    );
};

export default HomeBanner;
