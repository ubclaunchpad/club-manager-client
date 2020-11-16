import React, { FunctionComponent } from 'react';
import './HomeBanner.scss';
import { Link } from 'react-router-dom';

const HomeBanner: FunctionComponent = () => {
    return (
        <section className="hero is-medium home-banner-section">
            <div className="hero-body">
                <div className="container home-banner-container">
                    <h1 className="title">
                        Recruiting,
                        <br />
                        Made Simple.
                    </h1>
                    <h2 className="subtitle">Just like it should&apos;ve been.</h2>
                    <br />
                    <div className="level">
                        <div className="level-left">
                            <Link to="/login" className="button level-item login-button mr-3">
                                Login
                            </Link>
                            <Link to="/login" className="button level-item register-button ml-3">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
