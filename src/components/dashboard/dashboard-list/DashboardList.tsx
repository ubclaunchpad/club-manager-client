import React, { Component, Fragment, ReactNode } from 'react';

import DashboardListCard from './DashboardListCard';
import DashboardListFilter from './DashboardListFilter';
import ApplicantManagementModal from '../../modals/ApplicantManagementModal';

import './DashboardList.scss';

type DashboardListProps = {
    mode: string;
    viewApplicant: (newCount: number) => void;
    applicants: any[];
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

    render(): ReactNode {
        return (
            <div className="section dashboard-list">
                <h1>{this.props.mode}</h1>
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
                <div className="field">
                    <p className="control has-icons-left">
                        <input className="input" type="text" placeholder="Search applicants" />
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"></i>
                        </span>
                    </p>
                </div>
                <div className="section">
                    <Fragment>
                        {this.props.applicants
                            .filter((applicant) => applicant.status.includes(this.props.mode))
                            .map((element, index) => (
                                <DashboardListCard
                                    {...element}
                                    mode={this.props.mode}
                                    key={index}
                                    count={index}
                                    viewApplicant={this.props.viewApplicant}
                                    setModalAndType={(type: string) => {
                                        console.log(element.role);
                                        this.showModal(element.name, element.role, type);
                                    }}
                                />
                            ))}
                    </Fragment>
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
