import React from 'react';
import { Link } from 'react-router-dom';

import './LinksSection.scss';

import SeeTeamImg from '../../images/home/SeeTeam.svg';
import ReadCaseImg from '../../images/home/ReadCase.svg';

class LinksSection extends React.Component {
    render(): React.ReactNode {
        return (
            <section className="links-section">
                <div className="columns is-8 is-variable">
                    <div className="column is-offset-1 is-5">
                        <div className="link-card columns">
                            <img src={SeeTeamImg} className="column  link-card-img is-4" alt="" />
                            <div className="link-card-text column">
                                <p>
                                    <Link
                                        to={{
                                            pathname: '/team',
                                        }}
                                        className="link"
                                    >
                                        SEE THE TEAM BEHIND THIS PROJECT
                                    </Link>

                                    <br />
                                    <br />
                                    <span className="link-card-description">
                                        8 students. One goal. Unlimited passion. That is the fundamental recipe of
                                        Hireflow.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="column  is-5">
                        <div className="link-card columns">
                            <img src={ReadCaseImg} className="column  link-card-img is-4" alt="" />
                            <div className="link-card-text column">
                                <p>
                                    <Link
                                        to={{
                                            pathname: '/login',
                                            state: true, //related to isLogin in Login component
                                        }}
                                        className="link"
                                    >
                                        READ THE CASE STUDY
                                    </Link>
                                    <br />
                                    <br />
                                    <span className="link-card-description">
                                        Discover the effort and process of making this project a reality. Spoiler alert:
                                        It’s not easy!
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns is-8 is-variable login-section">
                    <div className="column is-offset-1 is-5">
                        <p className="login-section-title">What Are you waiting for?</p>
                        <p className="login-section-subtitle">Register your account now!</p>
                    </div>
                    <div className="column is-5 login-links">
                        <Link
                            to={{
                                pathname: '/login',
                                state: false, //related to isLogin in Login component
                            }}
                            className="login-link"
                        >
                            CREATE AN ACCOUNT
                        </Link>
                        <Link
                            to={{
                                pathname: '/login',
                                state: true, //related to isLogin in Login component
                            }}
                            className="login-link sign-in"
                        >
                            SIGN IN
                        </Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default LinksSection;
