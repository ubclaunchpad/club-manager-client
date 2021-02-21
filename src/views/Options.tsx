import React from 'react';
import SideBar from '../components/sidebar/SideBar';
import OptionsComponent from '../components/options/Options';

const Dashboard: React.FunctionComponent = () => {
    return (
        <div style={{ overflow: 'auto' }} className="section view">
            <div className="columns">
                <div className="column column-sidebar is-2">
                    <SideBar />
                </div>
                <div className="column">
                    <OptionsComponent />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
