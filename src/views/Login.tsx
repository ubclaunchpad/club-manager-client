import React from 'react';
import LoginButton from '../components/LoginButton';
import '../App.scss';

const Login: React.FunctionComponent = () => {
    return (
        <div className="container view">
            <LoginButton />
        </div>
    );
};

export default Login;
