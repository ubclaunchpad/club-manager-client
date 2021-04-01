import React, { FunctionComponent } from 'react';
import './HomeFooter.scss';

import HireflowIconWhite from '../../images/HireflowIconWhite.svg';
import FooterImg from '../../images/home/Footer.svg';

import { Link } from 'react-router-dom';

const HomeFooter: FunctionComponent = () => {
    return (
        <footer className="home-footer">
            <div className="footer-icon">
                <img src={HireflowIconWhite} alt="" />
            </div>
            <div className="columns">
                <div className="column is-2">
                    <p className="list-header">CONTENT</p>

                    <p>
                        <a href="/" className="link">
                            Landing Page
                        </a>
                    </p>
                    <p>
                        <Link
                            to={{
                                pathname: '/login',
                                state: false, //related to isLogin in Login component
                            }}
                            className="link"
                        >
                            Get Started
                        </Link>
                    </p>
                    <p>
                        <Link
                            to={{
                                pathname: '/team',
                            }}
                            className="link"
                        >
                            About Us
                        </Link>
                    </p>
                    <p>
                        <Link
                            to={{
                                pathname: '/',
                            }}
                            className="link"
                        >
                            Case Study
                        </Link>
                    </p>
                </div>
                <div className="column is-2">
                    <p className="list-header">SOURCES</p>
                    <p>flaticon</p>
                    <p>icons8</p>
                </div>
                <div className="column is-2">
                    <p className="list-header">RELATED LINKS</p>
                    <p>
                        <a className="link" href="https://ubclaunchpad.com/">
                            UBC Launch Pad
                        </a>
                    </p>
                </div>
                <div className="column is-2">
                    <p className="list-header">TOOLS USED</p>
                    <p>Figma</p>
                    <p>React</p>
                    <p>MongoDB</p>
                    <p>Express</p>
                    <p>Bulma</p>
                </div>
                <div className="column is-4 has-text-right">
                    <img src={FooterImg} alt="" />
                </div>
            </div>
            <p className="has-text-centered">Copyright © 2021 Hireflow</p>
        </footer>
    );
};

export default HomeFooter;
