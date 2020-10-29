import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home: React.FunctionComponent = () => {
    return (
        <div className="home">
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
