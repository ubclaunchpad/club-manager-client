import React, { Component, Fragment, ReactNode } from 'react';

import DashboardListCard from './DashboardListCard';
import DashboardListFilter from './DashboardListFilter';
import ApplicantManagementModal from '../../modals/ApplicantManagementModal';

import axios from 'axios';

import './DashboardList.scss';

type DashboardListState = {
    applicantList: any[];
    showModal: boolean;
};

class DashboardList extends Component<unknown, DashboardListState> {
    // To test the UI - delete when values are fetched from the server
    constructor(props: any) {
        super(props);
        this.state = {
            applicantList: [],
            showModal: false,
        };
    }

    toggleShowModal = (): void => {
        this.setState({ showModal: !this.state.showModal });
    };

    render(): ReactNode {
        return (
            <div className="section dashboard-list">
                <h1>Unsorted Applicants</h1>
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
                <div>
                    <ApplicantManagementModal
                        type="Reject"
                        name="Lorem ipsum"
                        position="Designer"
                        closeModal={this.toggleShowModal}
                        isActive={this.state.showModal}
                    />
                </div>
                <div className="section">
                    <Fragment>
                        {this.state.applicantList.map((element, index) => (
                            <DashboardListCard {...element} key={index} toggleShowModal={this.toggleShowModal} />
                        ))}
                    </Fragment>
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

    getApplicants() {
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
                this.setState({
                    applicantList: applicants,
                });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    getApplicantName() {
        console.log('hi');
    }

    getApplicantPosition() {
        console.log('ur position');
    }

    componentDidMount() {
        this.getApplicants();
        setInterval(() => this.getApplicants(), 60000);
    }
}

export default DashboardList;
