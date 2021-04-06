import React, { Component, ReactNode } from 'react';
import axios from 'axios';
import DashboardListButtons from './DashboardListButtons';
import DashboardListCard from './DashboardListCard';
import ApplicantManagementModal from '../../modals/ApplicantManagementModal';

import './DashboardList.scss';

type DashboardListProps = {
    mode: string;
    viewApplicant: (newCount: number) => void;
    applicants: any[];
    reviewed: any[];
    scheduled: any[];
    interviewed: any[];
    accepted: any[];
    rejected: any[];
};

type DashboardListState = {
    showModal: boolean;
    id: string;
    name: string;
    role: string;
    type: string;
    status: string;
    email: string;
    screeningGrade?: number;
    interviewGrade?: number;
    filter: DashboardListFilter;
};

type DashboardListFilter = {
    beginner: boolean;
    intermediate: boolean;
    advanced: boolean;
    developer: boolean;
    designer: boolean;
    minScreen: number;
    minInterview: number;
};

class DashboardList extends Component<DashboardListProps, DashboardListState> {
    // To test the UI - delete when values are fetched from the server
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            id: '',
            name: '',
            role: '',
            type: '',
            status: 'Pending',
            email: '',
            filter: {
                beginner: false,
                intermediate: false,
                advanced: false,
                developer: false,
                designer: false,
                minScreen: 0,
                minInterview: 0,
            }
        };
        this.moveApplicant = this.moveApplicant.bind(this);
    }

    moveApplicant = (id: string, newStatus: string) => {
        axios
            .patch(`http://localhost:4000/applicant/${id}`, {
                status: newStatus,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
    };

    showModal = (
        id: string,
        name: string,
        role: string,
        type: string,
        status: string,
        email: string,
        screeningGrade: number,
        interviewGrade: number,
    ): void => {
        this.setState({
            showModal: true,
            id: id,
            name: name,
            role: role,
            type: type,
            status: status,
            email: email,
            screeningGrade: screeningGrade,
            interviewGrade: interviewGrade,
        });
    };

    updateFilter = (filter: DashboardListFilter) => {
        console.log(filter);
        this.setState({ filter: filter})
    };

    applyFilter = (applicant: any): Boolean => {
        const beginner = this.state.filter.beginner;
        const intermediate = this.state.filter.intermediate;
        const advanced = this.state.filter.advanced;
        const developer = this.state.filter.developer;
        const designer = this.state.filter.designer;
        const minScreen = this.state.filter.minScreen;
        const minInterview = this.state.filter.minInterview;
        
        // Filter by the applicant's experience
        if (beginner || intermediate || advanced) {
            let applicantMatchesLevel = false;
            if (beginner && applicant.level.toLowerCase() === "beginner") applicantMatchesLevel = true;
            if (intermediate && applicant.level.toLowerCase() === "independent") applicantMatchesLevel = true;
            if (advanced && applicant.level.toLowerCase() === "experienced") applicantMatchesLevel = true;

            if (!applicantMatchesLevel) return false;
        }

        // Filter by the applicant's role
        if (developer || designer) {
            let applicantMatchesRole = false;
            if (developer && applicant.role.toLowerCase() === "developer") applicantMatchesRole = true;
            if (designer && applicant.role.toLowerCase() === "designer") applicantMatchesRole = true;

            if (!applicantMatchesRole) return false;
        }

        // Filter by the applicant's screening grade
        if (applicant.screeningGradeActual < minScreen) return false;
        // Filter by the applicant's interview grade
        // if (applicant.interviewGradeActual < minInterview) return false;

        // At this point, the applicant matched all filters, so return true
        return true;
    };

    closeModal = (type: string): void => {
        if (type !== 'Close') {
            if (type.includes('Email')) {
                axios({
                    method: 'post',
                    url: `http://localhost:4000/email`,
                    data: {
                        recipient: this.state.email,
                        action: type,
                    },
                })
                    .then((resp) => {
                        console.log(resp);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
            let applicant;
            switch (type) {
                case 'Reject-Screen':
                    this.setState({ status: 'Final Decision: Rejected' });
                    this.moveApplicant(this.state.id, 'Final Decision: Rejected');
                    applicant = this.props.applicants.find((applicant) => applicant.id === this.state.id);
                    this.props.applicants.splice(this.props.applicants.indexOf(applicant), 1);
                    this.props.rejected.push(applicant);
                    break;
                case 'Reject-Final':
                    this.setState({ status: 'Final Decision: Rejected' });
                    this.moveApplicant(this.state.id, 'Final Decision: Rejected');
                    applicant = this.props.interviewed.find((applicant) => applicant.id === this.state.id);
                    this.props.applicants.splice(this.props.interviewed.indexOf(applicant), 1);
                    this.props.rejected.push(applicant);
                    break;
                case 'Accept':
                    this.setState({ status: 'Final Decision: Accepted' });
                    this.moveApplicant(this.state.id, 'Final Decision: Accepted');
                    applicant = this.props.interviewed.find((applicant) => applicant.id === this.state.id);
                    this.props.applicants.splice(this.props.interviewed.indexOf(applicant), 1);
                    this.props.accepted.push(applicant);
                    break;
                case 'Email-Schedule':
                    this.setState({ status: 'Scheduled For Interview' });
                    this.moveApplicant(this.state.id, 'Scheduled For Interview');
                    applicant = this.props.reviewed.find((applicant) => applicant.id === this.state.id);
                    this.props.applicants.splice(this.props.reviewed.indexOf(applicant), 1);
                    this.props.scheduled.push(applicant);
                    break;
                case 'Email-Accept':
                    this.setState({ status: 'Archived: Accepted' });
                    this.moveApplicant(this.state.id, 'Archived: Accepted');
                    break;
                case 'Email-Reject-Screen':
                case 'Email-Reject-Final':
                    this.setState({ status: 'Archived: Rejected' });
                    this.moveApplicant(this.state.id, 'Archived: Rejected');
                    break;
            }
        }
        this.setState({ showModal: false });
    };

    setTabs = (): React.ReactNode => {
        if (this.props.mode === 'Final Decision') {
            return (
                <div className="tabs is-fullwidth">
                    <ul>
                        <li className="is-active">
                            <button className="is-primary">Accepted</button>
                        </li>
                        <li>
                            <button>Rejected</button>
                        </li>
                    </ul>
                </div>
            );
        }
    };

    setList = (): React.ReactNode => {
        switch (this.props.mode) {
            case 'Pending Applications':
                return this.props.applicants.filter((a) => this.applyFilter(a)).map((element, index) => (
                    <div className="column is-half" key={index}>
                        <DashboardListCard
                            {...element}
                            mode={this.props.mode}
                            key={index}
                            count={index}
                            screeningGrade={this.props.applicants[index].screeningGrade}
                            interviewGrade={this.props.applicants[index].interviewGrade}
                            viewApplicant={this.props.viewApplicant}
                            setModalAndType={(type: string) => {
                                console.log(element.role);
                                this.showModal(
                                    element.id,
                                    element.name,
                                    element.role,
                                    type,
                                    element.status,
                                    element.email,
                                    element.screeningGrade,
                                    element.interviewGrade,
                                );
                            }}
                        />
                    </div>
                ));
            case 'Application Reviewed':
                return this.props.reviewed.filter((a) => this.applyFilter(a)).map((element, index) => (
                    <div className="column is-half" key={index}>
                        <DashboardListCard
                            {...element}
                            mode={this.props.mode}
                            key={index}
                            count={index}
                            screeningGrade={this.props.reviewed[index].screeningGrade}
                            interviewGrade={this.props.reviewed[index].interviewGrade}
                            viewApplicant={this.props.viewApplicant}
                            setModalAndType={(type: string) => {
                                console.log(element.role);
                                this.showModal(
                                    element.id,
                                    element.name,
                                    element.role,
                                    type,
                                    element.status,
                                    element.email,
                                    element.screeningGrade,
                                    element.interviewGrade,
                                );
                            }}
                        />
                    </div>
                ));
            case 'Scheduled For Interview':
                return this.props.scheduled.filter((a) => this.applyFilter(a)).map((element, index) => (
                    <div className="column is-half" key={index}>
                        <DashboardListCard
                            {...element}
                            mode={this.props.mode}
                            key={index}
                            count={index}
                            screeningGrade={this.props.scheduled[index].screeningGrade}
                            interviewGrade={this.props.scheduled[index].interviewGrade}
                            viewApplicant={this.props.viewApplicant}
                            setModalAndType={(type: string) => {
                                console.log(element.role);
                                this.showModal(
                                    element.id,
                                    element.name,
                                    element.role,
                                    type,
                                    element.status,
                                    element.email,
                                    element.screeningGrade,
                                    element.interviewGrade,
                                );
                            }}
                        />
                    </div>
                ));
            case 'Interviewed':
                return this.props.interviewed.filter((a) => this.applyFilter(a)).map((element, index) => (
                    <div className="column is-half" key={index}>
                        <DashboardListCard
                            {...element}
                            mode={this.props.mode}
                            key={index}
                            count={index}
                            screeningGrade={this.props.interviewed[index].screeningGrade}
                            interviewGrade={this.props.interviewed[index].interviewGrade}
                            viewApplicant={this.props.viewApplicant}
                            setModalAndType={(type: string) => {
                                console.log(element.role);
                                this.showModal(
                                    element.id,
                                    element.name,
                                    element.role,
                                    type,
                                    element.status,
                                    element.email,
                                    element.screeningGrade,
                                    element.interviewGrade,
                                );
                            }}
                        />
                    </div>
                ));
            case 'Final Decision':
                return this.props.accepted.filter((a) => this.applyFilter(a)).map((element, index) => (
                    <div className="column is-half" key={index}>
                        <DashboardListCard
                            {...element}
                            mode={this.props.mode}
                            key={index}
                            count={index}
                            screeningGrade={this.props.accepted[index].screeningGrade}
                            interviewGrade={this.props.accepted[index].interviewGrade}
                            viewApplicant={this.props.viewApplicant}
                            setModalAndType={(type: string) => {
                                console.log(element.role);
                                this.showModal(
                                    element.id,
                                    element.name,
                                    element.role,
                                    type,
                                    element.status,
                                    element.email,
                                    element.screeningGrade,
                                    element.interviewGrade,
                                );
                            }}
                        />
                    </div>
                ));
        }
    };

    render(): ReactNode {
        return (
            <div className="section dashboard-list">
                {this.setTabs()}
                <DashboardListButtons mode={this.props.mode} onChange={this.updateFilter} />
                <div className="section">
                    <div className="columns is-multiline">{this.setList()}</div>
                </div>
                <div>
                    <ApplicantManagementModal
                        type={this.state.type}
                        name={this.state.name}
                        role={this.state.role}
                        closeModal={(type: string) => this.closeModal(type)}
                        isActive={this.state.showModal}
                    />
                </div>
            </div>
        );
    }
}

export default DashboardList;
