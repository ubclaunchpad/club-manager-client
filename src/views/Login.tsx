import React from 'react';
import './Login.scss';
import { NavLink } from 'react-router-dom';
import LoginBackgroudImg from '../images/LoginBackgroudImg.png';
import LaunchPadBanner from '../components/LoginView/LaunchPadBanner';
import LoginForm from '../components/LoginView/LoginForm';

const Login: React.FunctionComponent = () => {
    return (
        <div className="view ">
            <div className="left-background is-hidden-touch" style={{ background: 'white' }}>
                <img className="center" src={LoginBackgroudImg} alt="Background" />
            </div>
            <div className="sign-in">
                <LaunchPadBanner />
                <div className="sign-in-form">
                    <h1 className="is-size-1 has-text-centered py-3">Sign In</h1>
                    <LoginForm />
                    <div className="or-line py-4">
                        <h1 className="is-size-6 ">OR</h1>
                    </div>
                    <button className="button teal is-size-6">Login with Google</button>
                    <p className="mt-4 is-size-6 has-text-centered">
                        Don't have an account?{' '}
                        <NavLink to="/" className="link has-text-weight-medium">
                            Create Your account
                        </NavLink>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
