import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import SideBar from '../components/SideBar';

const Dashboard: React.FunctionComponent = () => {
    return (
        <React.Fragment>
            <h1>Dashboard</h1>
            <DashboardHeader />
            <SideBar />
        </React.Fragment>
    );
};

export default Dashboard;
