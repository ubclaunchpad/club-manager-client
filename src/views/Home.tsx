import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';

const Home: React.FunctionComponent = () => {
    return (
        <div className="view">
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/applicantinfo">ApplicantInfo</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
