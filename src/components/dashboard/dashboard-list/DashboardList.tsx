import React, { Component, Fragment, ReactNode } from 'react';

import DashboardListButtons from './DashboardListButtons';
import DashboardListCard from './DashboardListCard';
import DashboardListFilter from './DashboardListFilter';
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
        };
    }

    showModal = (
        name: string,
        role: string,
        type: string,
        status: string,
        screeningGrade: number,
        interviewGrade: number,
    ): void => {
        this.setState({
            showModal: true,
            name: name,
            role: role,
            type: type,
            status: status,
            screeningGrade: screeningGrade,
            interviewGrade: interviewGrade,
        });
    };

    closeModal = (): void => {
        this.setState({ showModal: false });
    };

    setTabs = (): React.ReactNode => {
        if (this.props.mode === 'Final Decision') {
            return (
                <div className="tabs is-fullwidth">
                    <ul>
                        <li className="is-active">
                            <button>Accepted</button>
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
                <div className="level">
                    <div className="buttons">
                        <span>
                            <DashboardListFilter {...{ title: 'All', count: 150, isActive: true }} />{' '}
                        </span>
                        <span>
                            <DashboardListFilter {...{ title: 'Developers', count: 127, isActive: false }} />
                        </span>
                        <span>
                            <DashboardListFilter {...{ title: 'Designers', count: 23, isActive: false }} />
                        </span>
                    </div>
                </div>
                <div className="buttons">
                    <span>
                        <DashboardListFilter {...{ title: 'All Levels', count: 150, isActive: true }} />{' '}
                    </span>
                    <span>
                        <DashboardListFilter {...{ title: 'Beginner', count: 7, isActive: false }} />{' '}
                    </span>
                    <span>
                        <DashboardListFilter {...{ title: 'Intermediate', count: 6, isActive: false }} />
                    </span>
                    <span>
                        <DashboardListFilter {...{ title: 'Advanced', count: 4, isActive: false }} />
                    </span>
                </div>
                <DashboardListButtons mode={this.props.mode} />
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Search applicants" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                    </p>
                </div>
                <div className="section">
                    <Fragment>{this.setList()}</Fragment>
                </div>
                <div>
                    <ApplicantManagementModal
                        type={this.state.type}
                        name={this.state.name}
                        role={this.state.role}
                        closeModal={() => this.closeModal()}
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
