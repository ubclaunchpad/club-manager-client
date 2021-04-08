import React, { Component, ReactNode } from 'react';
import axios from 'axios';
import DashboardListButtons from './DashboardListButtons';
import DashboardListCard from './DashboardListCard';
import ApplicantManagementModal from '../../modals/ApplicantManagementModal';

import './DashboardList.scss';

type DashboardListProps = {
    mode: string;
    viewApplicant: (newCount: number) => void;
    fetchApplicants: () => void;
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
                this.props.fetchApplicants();
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
                return this.props.applicants.map((element, index) => (
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
                return this.props.reviewed.map((element, index) => (
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
                return this.props.scheduled.map((element, index) => (
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
                return this.props.interviewed.map((element, index) => (
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
                return this.props.accepted.map((element, index) => (
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
                <DashboardListButtons mode={this.props.mode} />
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
