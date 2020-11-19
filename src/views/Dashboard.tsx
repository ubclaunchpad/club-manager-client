import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import SideBar from '../components/sidebar/SideBar';
import DashboardList from '../components/dashboard/dashboard-list/DashboardList';

import './Dashboard.scss';
import ApplicantInfo from '../components/applicant/ApplicantInfo';

interface IApplicantInfoProps {
    name: string;
    role: string;
}

const Dashboard: React.FunctionComponent = () => {
    // sample applicantInfo list to test the prev/next applicant feature
    const applicantList: IApplicantInfoProps[] = [
        { name: 'John Doe', role: 'Developer Applicant' },
        { name: 'Selene Dion', role: 'Developer Applicant' },
        { name: 'Happy Holland', role: 'Designer Applicant' },
        { name: 'Lionel Ronaldo', role: 'Developer Applicant' },
        { name: 'Tom Downey', role: 'Designer Applicant' },
        { name: 'Donald Biden', role: 'Developer Applicant' },
        { name: 'Fizz Buzz', role: 'Developer Applicant' },
        { name: 'Dude Dude Bar', role: 'Designer Applicant' },
        { name: 'Yeet Feet', role: 'Developer Applicant' },
        { name: 'Paul Doll', role: 'Designer Applicant' },
        { name: 'Shiloh Dynasty', role: 'Developer Applicant' },
        { name: 'Mozart Beethoven', role: 'Designer Applicant' },
        { name: 'Harin Wu', role: 'Developer Applicant' },
        { name: 'Loot Toot', role: 'Designer Applicant' },
        { name: 'Cringe Fest', role: 'Developer Applicant' },
        { name: 'Lo Fi', role: 'Designer Applicant' },
        { name: 'Hip Hop', role: 'Developer Applicant' },
    ];
    const [count, setCount] = React.useState(0);
    return (
        <div className="section view">
            <h1>Dashboard</h1>

            <React.Fragment>
                <div className="columns">
                    <div className="column is-2">
                        <SideBar />
                    </div>
                    <div className="column">
                        {/*TODO: switch between Dashboard and ApplicantInfo components */}
                        <h1>Dashboard</h1>
                        <DashboardHeader />
                        <DashboardList />
                        <ApplicantInfo
                            applicantList={applicantList}
                            applicant={applicantList[count]}
                            count={count}
                            setCount={setCount}
                        />
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
};

export default Dashboard;
