import React, { Component } from 'react';
import DashboardHeader from '../components/DashboardHeader';
import SideBar from '../components/sidebar/SideBar';
import DashboardList from '../components/dashboard/dashboard-list/DashboardList';

import './Dashboard.scss';
import ApplicantInfo from '../components/applicant/ApplicantInfo';

type DashboardState = {
    mode: string;
    count: number;
    applicantList: any[];
};

class Dashboard extends Component<unknown, DashboardState> {
    constructor(props: any) {
        super(props);
        this.state = {
            mode: 'Dashboard',
            count: 0,
            applicantList: [
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
            ],
        };
        this.setCount = this.setCount.bind(this);
        this.openApplicantInfo = this.openApplicantInfo.bind(this);
        this.openDashboard = this.openDashboard.bind(this);
    }

    setCount = (newCount: number): void => {
        this.setState(() => ({
            count: newCount,
        }));
    };

    openApplicantInfo = (newCount: number): void => {
        this.setCount(newCount);
        this.setState({ mode: 'ApplicantInfo' });
    };

    openDashboard = (): void => {
        this.setState({ mode: 'Dashboard' });
    };

    renderState(): React.ReactNode {
        if (this.state.mode === 'Dashboard') {
            return (
                <div className="column">
                    <h1>Dashboard</h1>
                    <DashboardHeader />
                    <DashboardList viewApplicant={this.openApplicantInfo} />
                </div>
            );
        } else {
            return (
                <div className="column">
                    <ApplicantInfo
                        applicantList={this.state.applicantList}
                        applicant={this.state.applicantList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewDashboard={this.openDashboard}
                        viewApplicant={this.openApplicantInfo}
                    />
                </div>
            );
        }
    }

    render(): React.ReactNode {
        return (
            <div className="section view">
                <React.Fragment>
                    <div className="columns">
                        <div className="column is-2">
                            <SideBar />
                        </div>
                        {this.renderState()}
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

export default Dashboard;
