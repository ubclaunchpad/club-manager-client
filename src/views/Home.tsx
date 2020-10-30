import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

const Home: React.FunctionComponent = () => {
    return (
        <div className="container view">
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
