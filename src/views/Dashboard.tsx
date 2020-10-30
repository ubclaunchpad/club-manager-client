import React from 'react';
import DashboardHeader from '../components/DashboardHeader';

const Dashboard: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <h1>
                Dashboard
                <DashboardHeader />
            </h1>
        </React.Fragment>
    );
};

export default Dashboard;
