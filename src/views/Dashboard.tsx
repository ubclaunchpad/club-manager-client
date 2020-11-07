import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import DashboardList from '../components/dashboard/dashboard-list/DashboardList';

import './Dashboard.scss';

const Dashboard: React.FunctionComponent = () => {
    return (
        <div className="section view">
            <h1>Dashboard</h1>
            <DashboardHeader />
            <DashboardList />
        </div>
    );
};

export default Dashboard;
