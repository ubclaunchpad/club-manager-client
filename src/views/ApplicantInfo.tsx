import React from 'react';
import DashboardListCard from '../components/dashboard/dashboard-list/DashboardListCard';
import ApplicantInfoContent from '../components/applicant/ApplicantInfoContent';
import SideBar from '../components/sidebar/SideBar';

const ApplicantInfo: React.FunctionComponent = () => {
    return (
        <div className="section view">
            <React.Fragment>
                <div className="columns">
                    <div className="column is-2">
                        <SideBar />
                    </div>
                    <div className="column">
                        <div className="container">
                            <DashboardListCard name="John Doe" role="Developer Applicant"/>
                            <ApplicantInfoContent />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
};

export default ApplicantInfo;