import React, { Component, Fragment, ReactNode } from 'react';

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
        };
    }

    showModal = (name: string, role: string, type: string): void => {
        this.setState({ showModal: true, name: name, role: role, type: type });
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

    setMode = (): React.ReactNode => {
        switch (this.props.mode) {
            case 'Application Reviewed':
                return (
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p>Application Score </p>
                                <input
                                    className="slider has-output-tooltip is-fullwidth is-large"
                                    step="0.5"
                                    min="0"
                                    max="5"
                                    value="3"
                                    type="range"
                                ></input>
                                <output htmlFor="sliderWithValue">3</output>
                            </div>
                        </div>
                        <div className="level-right">
                            <button className="button is-light is-rounded is-danger">Bulk Reject</button>
                            <button className="button is-light is-rounded is-info">Bulk Schedule</button>
                            <label className="checkbox">
                                <input type="checkbox" />
                                Select All
                            </label>
                        </div>
                    </div>
                );
            case 'Scheduled For Interview':
                return (
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p>Application Score </p>
                                <input
                                    className="slider has-output-tooltip is-large"
                                    step="0.5"
                                    min="0"
                                    max="5"
                                    value="3"
                                    type="range"
                                ></input>
                                <output htmlFor="sliderWithValue">3</output>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <button className="button is-light is-rounded is-info">Bulk Email</button>
                            </div>
                        </div>
                    </div>
                );
            case 'Interviewed':
                return (
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p>Application Score </p>
                                <input
                                    className="slider has-output-tooltip is-large"
                                    step="0.5"
                                    min="0"
                                    max="5"
                                    value="3"
                                    type="range"
                                ></input>
                                <output htmlFor="sliderWithValue">3</output>
                            </div>
                            <div className="level-item">
                                <p>Interview Score </p>
                                <input
                                    className="slider has-output-tooltip is-large"
                                    step="0.5"
                                    min="0"
                                    max="5"
                                    value="3"
                                    type="range"
                                ></input>
                                <output htmlFor="sliderWithValue">3</output>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <button className="button is-light is-rounded is-link">Bulk Accept</button>
                                <button className="button is-light is-rounded is-danger">Bulk Reject</button>
                            </div>
                        </div>
                    </div>
                );
            case 'Final Decision':
                return (
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p>Application Score </p>
                                <input
                                    className="slider has-output-tooltip is-large"
                                    step="0.5"
                                    min="0"
                                    max="5"
                                    value="3"
                                    type="range"
                                ></input>
                                <output htmlFor="sliderWithValue">3</output>
                            </div>
                            <div className="level-item">
                                <p>Interview Score </p>
                                <input
                                    className="slider has-output-tooltip is-large"
                                    step="0.5"
                                    min="0"
                                    max="5"
                                    value="3"
                                    type="range"
                                ></input>
                                <output htmlFor="sliderWithValue">3</output>
                            </div>
                        </div>
                        <div className="level-right">
                            <div className="level-item">
                                <button className="button is-light is-rounded is-info">Bulk Email</button>
                            </div>
                        </div>
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
                        applicationScore={this.props.applicants[index].applicationScore}
                        interviewScore={this.props.applicants[index].interviewScore}
                        viewApplicant={this.props.viewApplicant}
                        setModalAndType={(type: string) => {
                            console.log(element.role);
                            this.showModal(element.name, element.role, type);
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
                        applicationScore={this.props.reviewed[index].applicationScore}
                        interviewScore={this.props.reviewed[index].interviewScore}
                        viewApplicant={this.props.viewApplicant}
                        setModalAndType={(type: string) => {
                            console.log(element.role);
                            this.showModal(element.name, element.role, type);
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
                        applicationScore={this.props.scheduled[index].applicationScore}
                        interviewScore={this.props.scheduled[index].interviewScore}
                        viewApplicant={this.props.viewApplicant}
                        setModalAndType={(type: string) => {
                            console.log(element.role);
                            this.showModal(element.name, element.role, type);
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
                        applicationScore={this.props.interviewed[index].applicationScore}
                        interviewScore={this.props.interviewed[index].interviewScore}
                        viewApplicant={this.props.viewApplicant}
                        setModalAndType={(type: string) => {
                            console.log(element.role);
                            this.showModal(element.name, element.role, type);
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
                        applicationScore={this.props.accepted[index].applicationScore}
                        interviewScore={this.props.accepted[index].interviewScore}
                        viewApplicant={this.props.viewApplicant}
                        setModalAndType={(type: string) => {
                            console.log(element.role);
                            this.showModal(element.name, element.role, type);
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
                {this.setMode()}
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
