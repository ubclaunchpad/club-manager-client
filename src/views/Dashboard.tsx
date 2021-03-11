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
    screeningGrade?: number;
    interviewGrade?: number;
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
                },
                {
                    name: 'Dude Dude Bar',
                    role: 'Designer Applicant',
                    level: 'Beginner',
                    status: 'Pending Applications',
                },
                {
                    name: 'Paul Doll',
                    role: 'Designer Applicant',
                    level: 'Advanced',
                    status: 'Pending Applications',
                },
                {
                    name: 'Loot Toot',
                    role: 'Designer Applicant',
                    level: 'Beginner',
                    status: 'Pending Applications',
                },
            ],
            reviewedList: [
                {
                    name: 'Selene Dion',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Application Reviewed',
                    screeningGrade: 5,
                },
                {
                    name: 'Happy Holland',
                    role: 'Designer Applicant',
                    level: 'Beginner',
                    status: 'Application Reviewed',
                    screeningGrade: 3,
                },
            ],
            scheduledList: [
                {
                    name: 'Lionel Ronaldo',
                    role: 'Developer Applicant',
                    level: 'Advanced',
                    status: 'Scheduled For Interview',
                    screeningGrade: 4,
                },
                {
                    name: 'Shiloh Dynasty',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Scheduled For Interview',
                    screeningGrade: 3,
                },
                {
                    name: 'Cringe Fest',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Scheduled For Interview',
                    screeningGrade: 3,
                },
            ],
            interviewedList: [
                {
                    name: 'Tom Downey',
                    role: 'Designer Applicant',
                    level: 'Advanced',
                    status: 'Interviewed',
                    screeningGrade: 5,
                    interviewGrade: 4,
                },
                {
                    name: 'Donald Biden',
                    role: 'Developer Applicant',
                    level: 'Intermediate',
                    status: 'Interviewed',
                    screeningGrade: 4,
                    interviewGrade: 3,
                },
                {
                    name: 'Lo Fi',
                    role: 'Designer Applicant',
                    level: 'Intermediate',
                    status: 'Interviewed',
                    screeningGrade: 3,
                    interviewGrade: 3,
                },
            ],
            acceptedList: [
                {
                    name: 'Yeet Feet',
                    role: 'Developer Applicant',
                    level: 'Advanced',
                    status: 'Final Decision: Accepted',
                    screeningGrade: 5,
                    interviewGrade: 5,
                },
                {
                    name: 'Mozart Beethoven',
                    role: 'Designer Applicant',
                    level: 'Intermediate',
                    status: 'Final Decision: Accepted',
                    screeningGrade: 4,
                    interviewGrade: 5,
                },
            ],
            rejectedList: [
                {
                    name: 'Fizz Buzz',
                    role: 'Developer Applicant',
                    level: 'Beginner',
                    status: 'Final Decision: Rejected',
                    screeningGrade: 1,
                },
                {
                    name: 'Harin Wu',
                    role: 'Developer Applicant',
                    level: 'Beginner',
                    status: 'Final Decision: Rejected',
                    screeningGrade: 4,
                    interviewGrade: 2,
                },
                {
                    name: 'Hip Hop',
                    role: 'Developer Applicant',
                    level: 'Beginner',
                    status: 'Archived: Rejected',
                    screeningGrade: 3,
                    interviewGrade: 2,
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
                    <div className="section screening-stages">
                        <h1>Stages</h1>
                        <DashboardHeader viewScreeningStage={this.openScreeningStage} />
                    </div>
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
                <div className="column screening-stage">
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
                        viewDashboard={this.openDashboard}
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
