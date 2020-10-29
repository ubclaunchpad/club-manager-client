import React from 'react';
import LoginButton from '../components/LoginButton';
import './Login.scss';

const Login: React.FunctionComponent = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <LoginButton />
            </div>
        </div>
    );
};

export default Login;
