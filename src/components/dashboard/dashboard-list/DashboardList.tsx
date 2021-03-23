import React, { Component, Fragment, ReactNode } from 'react';
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
    name: string;
    role: string;
    type: string;
    status: string;
    email: string;
    screeningGrade?: number;
    interviewGrade?: number;
};

class DashboardList extends Component<DashboardListProps, DashboardListState> {
    // To test the UI - delete when values are fetched from the server
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            name: '',
            role: '',
            type: '',
            status: 'Pending',
            email: '',
        };
    }

    showModal = (
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
            name: name,
            role: role,
            type: type,
            status: status,
            email: email,
            screeningGrade: screeningGrade,
            interviewGrade: interviewGrade,
        });
    };

    closeModal = (type: string, email: string): void => {
        switch (type) {
            case 'Accept':
                axios({
                    method: 'post',
                    url: `http://localhost:4000/api/email/send-grid`,
                    data: {
                        recipient: email,
                        from: 'ubc.launchpad.clubmanager@gmail.com',
                        subject: 'UBC LaunchPad Interview Invitation',
                        text: "Congratulations! You're invited for an interview with us.",
                        html: "<h5>Congratulations! You're invited for an interview with us.</h5>",
                    },
                })
                    .then(() => {
                        console.log('Mail sent successfully!');
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                break;
            case 'Reject':
                axios({
                    method: 'post',
                    url: `http://localhost:4000/api/email/send-grid`,
                    data: {
                        recipient: email,
                        from: 'ubc.launchpad.clubmanager@gmail.com',
                        subject: 'UBC LaunchPad',
                        text:
                            "Thank you for your interest in joining us and taking time to complete the application! \n We're sorry to inform you that we are not able to move forward with you this time.",
                        html:
                            "<h5>Thank you for your interest in joining us and taking time to complete the application! /n We're sorry to inform you that we are not able to move forward with you this time.</h5>",
                    },
                })
                    .then(() => {
                        console.log('Mail sent successfully!');
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                break;
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
                return this.props.applicants.map((element, index) => (
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
                ));
            case 'Application Reviewed':
                return this.props.reviewed.map((element, index) => (
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
                ));
            case 'Scheduled For Interview':
                return this.props.scheduled.map((element, index) => (
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
                ));
            case 'Interviewed':
                return this.props.interviewed.map((element, index) => (
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
                ));
            case 'Final Decision':
                return this.props.accepted.map((element, index) => (
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
                ));
        }
    };

    render(): ReactNode {
        return (
            <div className="section dashboard-list">
                {this.setTabs()}
                <DashboardListButtons mode={this.props.mode} />
                <div className="section">
                    <Fragment>{this.setList()}</Fragment>
                </div>
                <div>
                    <ApplicantManagementModal
                        type={this.state.type}
                        name={this.state.name}
                        role={this.state.role}
                        email={this.state.email}
                        closeModal={(type: string, email: string) => this.closeModal(type, email)}
                        isActive={this.state.showModal}
                    />
                </div>
            </div>
        );
    }

    renderDashboardListCards(list: any[]): ReactNode {
        return (
            <Fragment>
                {list.map((element, index) => (
                    <DashboardListCard {...element} key={index} />
                ))}
            </Fragment>
        );
    }
}

export default DashboardList;
