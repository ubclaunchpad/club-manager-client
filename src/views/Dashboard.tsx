import React, { Component } from 'react';
import axios from 'axios';

import DashboardHeader from '../components/DashboardHeader';
import SideBar from '../components/sidebar/SideBar';
import DashboardList from '../components/dashboard/dashboard-list/DashboardList';
import Scoring from '../components/scoring/Scoring';

import './Dashboard.scss';
import ApplicantInfo from '../components/applicant/ApplicantInfo';

interface IApplicantInfoProps {
    name: string;
    role: string;
    status: string;
    screeningGrade?: number;
    interviewGrade?: number;
}

type DashboardState = {
    mode: string;
    count: number;
    applicantList: IApplicantInfoProps[];
};

class Dashboard extends Component<unknown, DashboardState> {
    constructor(props: DashboardState) {
        super(props);
        this.state = {
            mode: 'Dashboard',
            count: 0,
            applicantList: [
                { name: 'John Doe', role: 'Developer Applicant', status: 'Screened: Accepted', screeningGrade: 2 },
                {
                    name: 'Selene Dion',
                    role: 'Developer Applicant',
                    status: 'Scheduled for Interview',
                    screeningGrade: 5,
                },
                { name: 'Happy Holland', role: 'Designer Applicant', status: 'Screened: Rejected', screeningGrade: 5 },
                {
                    name: 'Lionel Ronaldo',
                    role: 'Developer Applicant',
                    status: 'Interviewed',
                    screeningGrade: 8,
                    interviewGrade: 12,
                },
                {
                    name: 'Tom Downey',
                    role: 'Designer Applicant',
                    status: 'Interviewed',
                    screeningGrade: 2,
                    interviewGrade: 10,
                },
                {
                    name: 'Donald Biden',
                    role: 'Developer Applicant',
                    status: 'Final Decision: Rejected',
                    screeningGrade: 4,
                    interviewGrade: 15,
                },
                {
                    name: 'Fizz Buzz',
                    role: 'Developer Applicant',
                    status: 'Interviewed',
                    screeningGrade: 2,
                    interviewGrade: 9,
                },
                {
                    name: 'Dude Dude Bar',
                    role: 'Designer Applicant',
                    status: 'Interviewed',
                    screeningGrade: 5,
                    interviewGrade: 13,
                },
                {
                    name: 'Yeet Feet',
                    role: 'Developer Applicant',
                    status: 'Final Decision: Accepted',
                    screeningGrade: 6,
                    interviewGrade: 16,
                },
                {
                    name: 'Paul Doll',
                    role: 'Designer Applicant',
                    status: 'Final Decision: Rejected',
                    screeningGrade: 2,
                    interviewGrade: 5,
                },
                {
                    name: 'Shiloh Dynasty',
                    role: 'Developer Applicant',
                    status: 'Final Decision: Rejected',
                    screeningGrade: 3,
                    interviewGrade: 7,
                },
                {
                    name: 'Mozart Beethoven',
                    role: 'Designer Applicant',
                    status: 'Final Decision: Accepted',
                    screeningGrade: 6,
                    interviewGrade: 15,
                },
                { name: 'Harin Wu', role: 'Developer Applicant', status: 'Screened', screeningGrade: 4 },
                {
                    name: 'Loot Toot',
                    role: 'Designer Applicant',
                    status: 'Final Decision: Accepted',
                    screeningGrade: 8,
                    interviewGrade: 15,
                },
                { name: 'Cringe Fest', role: 'Developer Applicant', status: 'Screened: Rejected', screeningGrade: 4 },
                { name: 'Lo Fi', role: 'Designer Applicant', status: 'Archived: Rejected', screeningGrade: 5 },
                { name: 'Hip Hop', role: 'Developer Applicant', status: 'Archived: Rejected', screeningGrade: 5 },
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

    openApplicantReview = (): void => {
        this.setState({ mode: 'ApplicantReview' });
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
                    <DashboardList viewApplicant={this.openApplicantInfo} applicants={this.state.applicantList} />
                </div>
            );
        } else if (this.state.mode === 'ApplicantInfo') {
            return (
                <div className="column">
                    <ApplicantInfo
                        totalApplicants={this.state.applicantList.length}
                        applicant={this.state.applicantList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewScoring={this.openApplicantReview}
                        viewDashboard={this.openDashboard}
                        viewApplicant={this.openApplicantInfo}
                    />
                </div>
            );
        } else {
            return (
                <div className="column">
                    <Scoring
                        count={this.state.count}
                        viewApplicant={this.openApplicantInfo}
                        applicant={this.state.applicantList[this.state.count]}
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
