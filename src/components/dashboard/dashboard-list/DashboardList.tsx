import React, { Component, Fragment, ReactNode } from 'react';

import DashboardListCard from './DashboardListCard';
import DashboardListFilter from './DashboardListFilter';

import axios from 'axios';

import './DashboardList.scss';

type DashboardListState = {
    applicantList: any[];
};

class DashboardList extends Component<unknown, DashboardListState> {
    // To test the UI - delete when values are fetched from the server
    constructor(props: any) {
        super(props);
        this.state = {
            applicantList: [
                { name: 'John Doe', role: 'Developer Applicant' },
                { name: 'Selene Dion', role: 'Developer Applicant' },
                { name: 'Happy Holland', role: 'Designer Applicant' },
                { name: 'Lionel Ronaldo', role: 'Developer Applicant' },
                { name: 'Tom Downey', role: 'Designer Applicant' },
                { name: 'Donald Biden', role: 'Developer Applicant' },
                { name: 'Fizz Buzz', role: 'Developer Applicant' },
                { name: 'Dude Dude Bar', role: 'Designer Applicant' },
                { name: 'Yeet Feet', role: 'Developer Applicant' },
                { name: 'Paul Doll', role: 'Designer Applicant' },
                { name: 'Shiloh Dynasty', role: 'Developer Applicant' },
                { name: 'Mozart Beethoven', role: 'Designer Applicant' },
                { name: 'Harin Wu', role: 'Developer Applicant' },
                { name: 'Loot Toot', role: 'Designer Applicant' },
                { name: 'Cringe Fest', role: 'Developer Applicant' },
                { name: 'Lo Fi', role: 'Designer Applicant' },
                { name: 'Hip Hop', role: 'Developer Applicant' },
            ],
        };
    }

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
                <div className="section">
                    <Fragment>
                        {this.state.applicantList.map((element, index) => (
                            <DashboardListCard {...element} key={index} count={index} />
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

    componentDidMount() {
        this.getApplicants();
        setInterval(() => this.getApplicants(), 60000);
    }
}

export default DashboardList;
