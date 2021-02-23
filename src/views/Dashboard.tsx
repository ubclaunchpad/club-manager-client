import React, { Component } from 'react';
import axios from 'axios';

import DashboardHeader from '../components/DashboardHeader';
import SideBar from '../components/sidebar/SideBar';
import DashboardList from '../components/dashboard/dashboard-list/DashboardList';
import Scoring from '../components/scoring/Scoring';

import './Dashboard.scss';
import ApplicantInfo from '../components/applicant/ApplicantInfo';
import ScreeningStage from '../components/screening/ScreeningStage';

interface IApplicantInfoProps {
    name: string;
    role: string;
    level: string;
    status: string;
    applicationScore?: number;
    interviewScore?: number;
}

type DashboardState = {
    mode: string;
    count: number;
    stage: string;
    applicantList: IApplicantInfoProps[];
    reviewedList: IApplicantInfoProps[];
    scheduledList: IApplicantInfoProps[];
    interviewedList: IApplicantInfoProps[];
    acceptedList: IApplicantInfoProps[];
    rejectedList: IApplicantInfoProps[];
};

class Dashboard extends Component<unknown, DashboardState> {
    constructor(props: DashboardState) {
        super(props);
        this.state = {
            mode: 'Dashboard',
            count: 0,
            stage: 'Pending Applications',
            applicantList: [
                {
                    name: 'John Doe',
                    role: 'Developer Applicant',
                    level: 'Beginner',
                    status: 'Pending Applications',
                    applicationScore: undefined,
                    interviewScore: undefined,
                },
                {
                    name: 'Dude Dude Bar',
                    role: 'Designer Applicant',
                    level: 'Beginner',
                    status: 'Pending Applications',
                    applicationScore: undefined,
                    interviewScore: undefined,
                },
                {
                    name: 'Paul Doll',
                    role: 'Designer Applicant',
                    level: 'Advanced',
                    status: 'Pending Applications',
                    applicationScore: undefined,
                    interviewScore: undefined,
                },
                {
                    name: 'Loot Toot',
                    role: 'Designer Applicant',
                    level: 'Beginner',
                    status: 'Pending Applications',
                    applicationScore: undefined,
                    interviewScore: undefined,
                },
            ],
            reviewedList: [
                {
                    name: 'Selene Dion',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Application Reviewed',
                    applicationScore: 5,
                    interviewScore: undefined,
                },
                {
                    name: 'Happy Holland',
                    role: 'Designer Applicant',
                    level: 'Beginner',
                    status: 'Application Reviewed',
                    applicationScore: 3,
                    interviewScore: undefined,
                },
            ],
            scheduledList: [
                {
                    name: 'Lionel Ronaldo',
                    role: 'Developer Applicant',
                    level: 'Advanced',
                    status: 'Scheduled For Interview',
                    applicationScore: 4,
                    interviewScore: undefined,
                },
                {
                    name: 'Shiloh Dynasty',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Scheduled For Interview',
                    applicationScore: 3,
                    interviewScore: undefined,
                },
                {
                    name: 'Cringe Fest',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Scheduled For Interview',
                    applicationScore: 3,
                    interviewScore: undefined,
                },
            ],
            interviewedList: [
                {
                    name: 'Tom Downey',
                    role: 'Designer Applicant',
                    level: 'Advanced',
                    status: 'Interviewed',
                    applicationScore: 5,
                    interviewScore: 4,
                },
                {
                    name: 'Donald Biden',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Interviewed',
                    applicationScore: 4,
                    interviewScore: 3,
                },
                {
                    name: 'Lo Fi',
                    role: 'Designer Applicant',
                    level: 'Intermediate',
                    status: 'Interviewed',
                    applicationScore: 3,
                    interviewScore: 3,
                },
            ],
            acceptedList: [
                {
                    name: 'Yeet Feet',
                    role: 'Developer Applicant',
                    level: 'Advanced',
                    status: 'Final Decision: Accepted',
                    applicationScore: 5,
                    interviewScore: 5,
                },
                {
                    name: 'Mozart Beethoven',
                    role: 'Designer Applicant',
                    level: 'Intermediate',
                    status: 'Final Decision: Accepted',
                    applicationScore: 4,
                    interviewScore: 5,
                },
            ],
            rejectedList: [
                {
                    name: 'Fizz Buzz',
                    role: 'Developer Applicant',
                    level: 'Beginner',
                    status: 'Final Decision: Rejected',
                    applicationScore: 1,
                    interviewScore: undefined,
                },
                {
                    name: 'Harin Wu',
                    role: 'Developer Applicant',
                    level: 'Beginner',
                    status: 'Final Decision: Rejected',
                    applicationScore: 4,
                    interviewScore: 2,
                },
                {
                    name: 'Hip Hop',
                    role: 'Developer Applicant',
                    level: 'Beginner',
                    status: 'Archived: Rejected',
                    applicationScore: 3,
                    interviewScore: 2,
                },
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

    setScreeningStage = (newStage: string): void => {
        this.setState(() => ({
            stage: newStage,
        }));
    };

    openScreeningStage = (newStage: string): void => {
        this.setScreeningStage(newStage);
        this.setState({ mode: 'Screening' });
    };

    setList = (): React.ReactNode => {
        switch (this.state.stage) {
            case 'Pending Applications':
                return (
                    <ApplicantInfo
                        totalApplicants={this.state.applicantList.length}
                        applicant={this.state.applicantList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewDashboard={this.openDashboard}
                        viewScoring={this.openApplicantReview}
                        viewApplicant={this.openApplicantInfo}
                    />
                );
            case 'Application Reviewed':
                return (
                    <ApplicantInfo
                        totalApplicants={this.state.reviewedList.length}
                        applicant={this.state.reviewedList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewDashboard={this.openDashboard}
                        viewScoring={this.openApplicantReview}
                        viewApplicant={this.openApplicantInfo}
                    />
                );
            case 'Scheduled For Interview':
                return (
                    <ApplicantInfo
                        totalApplicants={this.state.scheduledList.length}
                        applicant={this.state.scheduledList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewDashboard={this.openDashboard}
                        viewScoring={this.openApplicantReview}
                        viewApplicant={this.openApplicantInfo}
                    />
                );
            case 'Interviewed':
                return (
                    <ApplicantInfo
                        totalApplicants={this.state.interviewedList.length}
                        applicant={this.state.interviewedList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewDashboard={this.openDashboard}
                        viewScoring={this.openApplicantReview}
                        viewApplicant={this.openApplicantInfo}
                    />
                );
            case 'Final Decision':
                return (
                    <ApplicantInfo
                        totalApplicants={this.state.acceptedList.length}
                        applicant={this.state.acceptedList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewDashboard={this.openDashboard}
                        viewScoring={this.openApplicantReview}
                        viewApplicant={this.openApplicantInfo}
                    />
                );
        }
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
                        reviewed={this.state.reviewedList}
                        scheduled={this.state.scheduledList}
                        interviewed={this.state.interviewedList}
                        accepted={this.state.acceptedList}
                        rejected={this.state.rejectedList}
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
                        reviewed={this.state.reviewedList}
                        scheduled={this.state.scheduledList}
                        interviewed={this.state.interviewedList}
                        accepted={this.state.acceptedList}
                        rejected={this.state.rejectedList}
                    />
                </div>
            );
        } else if (this.state.mode === 'ApplicantInfo') {
            return <div className="column">{this.setList()}</div>;
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
