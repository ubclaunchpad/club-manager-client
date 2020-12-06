import React, { Component } from 'react';
import axios from 'axios';

import DashboardHeader from '../components/DashboardHeader';
import SideBar from '../components/sidebar/SideBar';
import DashboardList from '../components/dashboard/dashboard-list/DashboardList';

import './Dashboard.scss';
import ApplicantInfo from '../components/applicant/ApplicantInfo';
import ScreeningStage from '../components/screening/ScreeningStage';

interface IApplicantInfoProps {
    name: string;
    role: string;
    level: string;
    status: string;
}

type DashboardState = {
    mode: string;
    count: number;
    stage: string;
    applicantList: IApplicantInfoProps[];
};

class Dashboard extends Component<unknown, DashboardState> {
    constructor(props: DashboardState) {
        super(props);
        this.state = {
            mode: 'Dashboard',
            count: 0,
            stage: 'Pending Applications',
            applicantList: [
                { name: 'John Doe', role: 'Developer Applicant', level: 'Beginner', status: 'Pending Applications' },
                {
                    name: 'Selene Dion',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Application Reviewed',
                },
                {
                    name: 'Happy Holland',
                    role: 'Designer Applicant',
                    level: 'Beginner',
                    status: 'Application Reviewed: Accepted',
                },
                {
                    name: 'Lionel Ronaldo',
                    role: 'Developer Applicant',
                    level: 'Advanced',
                    status: 'Scheduled For Interview',
                },
                { name: 'Tom Downey', role: 'Designer Applicant', level: 'Advanced', status: 'Interviewed' },
                { name: 'Donald Biden', role: 'Developer Applicant', level: 'Intermediate', status: 'Interviewed' },
                {
                    name: 'Fizz Buzz',
                    role: 'Developer Applicant',
                    level: 'Beginner',
                    status: 'Application Reviewed: Rejected',
                },
                {
                    name: 'Dude Dude Bar',
                    role: 'Designer Applicant',
                    level: 'Beginner',
                    status: 'Pending Applications',
                },
                {
                    name: 'Yeet Feet',
                    role: 'Developer Applicant',
                    level: 'Advanced',
                    status: 'Final Decision: Accepted',
                },
                { name: 'Paul Doll', role: 'Designer Applicant', level: 'Advanced', status: 'Pending Applications' },
                {
                    name: 'Shiloh Dynasty',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Scheduled For Interview',
                },
                {
                    name: 'Mozart Beethoven',
                    role: 'Designer Applicant',
                    level: 'Intermediate',
                    status: 'Final Decision: Accepted',
                },
                {
                    name: 'Harin Wu',
                    role: 'Developer Applicant',
                    level: 'Beginner',
                    status: 'Final Decision: Rejected',
                },
                { name: 'Loot Toot', role: 'Designer Applicant', level: 'Beginner', status: 'Pending Applications' },
                {
                    name: 'Cringe Fest',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Scheduled For Interview',
                },
                { name: 'Lo Fi', role: 'Designer Applicant', level: 'Intermediate', status: 'Interviewed' },
                { name: 'Hip Hop', role: 'Developer Applicant', level: 'Beginner', status: 'Archived: Rejected' },
            ],
        };
        this.setCount = this.setCount.bind(this);
        this.openApplicantInfo = this.openApplicantInfo.bind(this);
        this.openDashboard = this.openDashboard.bind(this);
    }

    componentDidMount(): void {
        const applicants: any[] = [];
        axios
            .get('http://localhost:4000/applicant', { timeout: 2000 })
            .then((result: any) => {
                result.data.forEach((applicant: any) => {
                    applicants.push({
                        name: `${applicant.firstName} ${applicant.lastName}`,
                        role: applicant.role,
                    });
                });
                this.setState({ applicantList: applicants });
            })
            .catch((err) => {
                console.log(err);
            });
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

    setScreeningStage = (newStage: string): void => {
        this.setState(() => ({
            stage: newStage,
        }));
    };

    openScreeningStage = (newStage: string): void => {
        this.setScreeningStage(newStage);
        this.setState({ mode: 'Screening' });
    };

    renderState(): React.ReactNode {
        if (this.state.mode === 'Dashboard') {
            return (
                <div className="column">
                    <h1>Dashboard</h1>
                    <DashboardHeader viewScreeningStage={this.openScreeningStage} />
                    <DashboardList
                        mode="Pending Applications"
                        viewApplicant={this.openApplicantInfo}
                        applicants={this.state.applicantList}
                    />
                </div>
            );
        } else if (this.state.mode === 'Screening') {
            return (
                <div className="column">
                    <ScreeningStage
                        stage={this.state.stage}
                        viewDashboard={this.openDashboard}
                        viewApplicant={this.openApplicantInfo}
                        applicants={this.state.applicantList}
                    />
                </div>
            );
        } else {
            return (
                <div className="column">
                    <ApplicantInfo
                        totalApplicants={this.state.applicantList.length}
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
                        <div className="column column-sidebar is-2">
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
