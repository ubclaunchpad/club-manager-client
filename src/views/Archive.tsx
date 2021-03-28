import React, { Component } from 'react';
import axios from 'axios';

import SideBar from '../components/sidebar/SideBar';

import './Dashboard.scss';
import ApplicantInfo from '../components/applicant/ApplicantInfo';
import ArchiveHeader from '../components/archive/ArchiveHeader';
import ArchiveList from '../components/archive/ArchiveList';
import Scoring from '../components/scoring/Scoring';

interface IApplicantInfoProps {
    name: string;
    role: string;
    level: string;
    status: string;
    email: string;
    screeningGrade?: number;
    interviewGrade?: number;
}

type ArchiveState = {
    mode: string;
    count: number;
    stage: string;
    acceptedList: IApplicantInfoProps[];
    rejectedList: IApplicantInfoProps[];
};

class Archive extends Component<unknown, ArchiveState> {
    constructor(props: ArchiveState) {
        super(props);
        this.state = {
            mode: 'Archive',
            count: 0,
            stage: 'Accepted',
            acceptedList: [],
            rejectedList: [],
        };
        this.setCount = this.setCount.bind(this);
        this.openApplicantInfo = this.openApplicantInfo.bind(this);
        this.openArchive = this.openArchive.bind(this);
        this.viewAccepted = this.viewAccepted.bind(this);
        this.viewRejected = this.viewRejected.bind(this);
    }

    componentDidMount(): void {
        axios
            .get('http://localhost:4000/applicant', { withCredentials: true, timeout: 2000 })
            .then((result: any) => {
                const allApplicants: any[] = [];
                const accepted: any[] = [];
                const rejected: any[] = [];

                result.data.forEach((applicant: any) => {
                    allApplicants.push({
                        name: `${applicant.firstName} ${applicant.lastName}`,
                        role: applicant.role,
                        level: applicant.level,
                        status: applicant.status,
                        email: applicant.email,
                        screeningGrade: applicant.screeningGrade,
                        interviewGrade: applicant.interviewGrade,
                    });
                });

                // Puts the applicants in the correct list according to their status
                allApplicants.forEach((applicant: any) => {
                    const status = applicant.status;

                    if (status === 'Archived: Rejected') {
                        rejected.push(applicant);
                    } else if (status === 'Archived: Accepted') {
                        accepted.push(applicant);
                    }
                });

                console.log(accepted.length);

                this.setState({
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

    openArchive = (): void => {
        this.setState({ mode: 'Archive' });
    };

    viewAccepted = (): void => {
        this.setState({ stage: 'Accepted' });
    };

    viewRejected = (): void => {
        this.setState({ stage: 'Rejected' });
    };

    getApplicant = () => {
        if (this.state.mode === 'Accepted') return this.state.acceptedList[this.state.count];
        else return this.state.rejectedList[this.state.count];
    };

    setList = (): React.ReactNode => {
        switch (this.state.stage) {
            case 'Accepted':
                return (
                    <ApplicantInfo
                        totalApplicants={this.state.acceptedList.length}
                        applicant={this.state.acceptedList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewDashboard={this.openArchive}
                        viewScoring={this.openArchive}
                        viewApplicant={this.openApplicantInfo}
                    />
                );
            case 'Rejected':
                return (
                    <ApplicantInfo
                        totalApplicants={this.state.rejectedList.length}
                        applicant={this.state.rejectedList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewDashboard={this.openArchive}
                        viewScoring={this.openArchive}
                        viewApplicant={this.openApplicantInfo}
                    />
                );
        }
    };

    renderState(): React.ReactNode {
        if (this.state.mode === 'ApplicantInfo') {
            return <div className="column">{this.setList()}</div>;
        } else if (this.state.mode === 'Screening') {
            return (
                <div className="column">
                    <Scoring
                        count={this.state.count}
                        viewApplicant={this.openApplicantInfo}
                        viewDashboard={this.openArchive}
                        applicant={this.getApplicant()}
                    />
                </div>
            );
        } else {
            return (
                <div className="column">
                    <div className="section screening-stages">
                        <div className="level less-padding">
                            <div className="level-left">
                                <h1>Archive</h1>
                            </div>
                            <div className="level-right">
                                <div className="field">
                                    <p className="control has-icons-left">
                                        <input
                                            className="input is-rounded"
                                            type="search"
                                            placeholder="Search applicants"
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-search"/>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ArchiveHeader
                            stage={this.state.stage}
                            viewAccepted={this.viewAccepted}
                            viewRejected={this.viewRejected}
                            acceptedCount={this.state.acceptedList.length}
                            rejectedCount={this.state.rejectedList.length}
                        />
                    </div>
                    <ArchiveList
                        mode={this.state.stage}
                        viewApplicant={this.openApplicantInfo}
                        accepted={this.state.acceptedList}
                        rejected={this.state.rejectedList}
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

export default Archive;
