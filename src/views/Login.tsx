import React from 'react';
import './Login.scss';
import { NavLink } from 'react-router-dom';
import LoginBackgroudImg from '../images/LoginBackgroudImg.png';
import LaunchPadBanner from '../components/login/LaunchPadBanner';
import LoginForm from '../components/login/LoginForm';

const Login: React.FunctionComponent = () => {
    return (
        <div className="view ">
            <div className="columns">
                <div className="column is-5 left-section  is-hidden-touch" style={{ background: 'white' }}>
                    <img src={LoginBackgroudImg} alt="Background" />
                </div>
                <div className="column right-section">
                    <LaunchPadBanner />
                    <div className="sign-in">
                        <h1 className="is-size-1 has-text-centered py-3">Sign In</h1>
                        <LoginForm />
                        <p className="mt-4 is-size-6 has-text-centered">
                            Don`t have an account?{' '}
                            <NavLink to="/" className="link has-text-weight-medium">
                                Create Your account
                            </NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
