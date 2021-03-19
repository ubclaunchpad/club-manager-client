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
            applicantList: [],
            reviewedList: [],
            scheduledList: [],
            interviewedList: [],
            acceptedList: [],
            rejectedList: [],
        };
        this.setCount = this.setCount.bind(this);
        this.openApplicantInfo = this.openApplicantInfo.bind(this);
        this.openDashboard = this.openDashboard.bind(this);
    }

    componentDidMount(): void {
        axios
            .get('http://localhost:4000/applicant', { withCredentials: true, timeout: 2000 })
            .then((result: any) => {
                const allApplicants: any[] = [];
                const pending: any[] = [];
                const reviewed: any[] = [];
                const scheduled: any[] = [];
                const interviewed: any[] = [];
                const accepted: any[] = [];
                const rejected: any[] = [];

                result.data.forEach((applicant: any) => {
                    allApplicants.push({
                        name: `${applicant.firstName} ${applicant.lastName}`,
                        role: applicant.role,
                        level: applicant.level,
                        status: applicant.status,
                        screeningGrade: applicant.screeningGrade,
                        interviewGrade: applicant.interviewGrade,
                    });
                });

                // Puts the applicants in the correct list according to their status
                allApplicants.forEach((applicant: any) => {
                    const status = applicant.status;

                    if (status === 'Application Reviewed' || status === 'Screened: Accepted') {
                        reviewed.push(applicant);
                    } else if (status === 'Scheduled For Interview') {
                        scheduled.push(applicant);
                    } else if (status === 'Interviewed') {
                        interviewed.push(applicant);
                    } else if (status === 'Final Decision: Accepted') {
                        accepted.push(applicant);
                    } else if (
                        status === 'Final Decision: Rejected' ||
                        status === 'Screened: Rejected' ||
                        status === 'Archived: Rejected'
                    ) {
                        rejected.push(applicant);
                    } else {
                        pending.push(applicant);
                    }
                });

                this.setState({
                    applicantList: pending,
                    reviewedList: reviewed,
                    scheduledList: scheduled,
                    interviewedList: interviewed,
                    acceptedList: accepted,
                    rejectedList: rejected,
                });
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
