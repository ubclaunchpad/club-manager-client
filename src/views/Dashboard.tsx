import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import SideBar from '../components/sidebar/SideBar';

const Dashboard: React.FunctionComponent = () => {
    return (
        <div className="section view">
            <React.Fragment>
                <div className="columns">
                    <div className="column is-2">
                        <SideBar />
                    </div>
                    <div className="column">
                        <h1>Dashboard</h1>
                        <DashboardHeader />
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
};

export default Dashboard;
