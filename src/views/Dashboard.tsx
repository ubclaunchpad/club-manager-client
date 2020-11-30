import React, { Component } from 'react';
import axios from 'axios';

import DashboardHeader from '../components/DashboardHeader';
import SideBar from '../components/sidebar/SideBar';
import DashboardList from '../components/dashboard/dashboard-list/DashboardList';

import './Dashboard.scss';
import ApplicantInfo from '../components/applicant/ApplicantInfo';

interface IApplicantInfoProps {
    name: string;
    role: string;
}

type DashboardState = {
    mode: string;
    count: number;
    applicantList: IApplicantInfoProps[];
};

class Dashboard extends Component<unknown, DashboardState> {
    constructor(props: DashboardState) {
        super(props);
        this.state = {
            mode: 'Dashboard',
            count: 0,
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
        this.setCount = this.setCount.bind(this);
        this.openApplicantInfo = this.openApplicantInfo.bind(this);
        this.openDashboard = this.openDashboard.bind(this);
    }

    componentDidMount() {
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
                this.setState({ applicantList: applicants });
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

    openDashboard = (): void => {
        this.setState({ mode: 'Dashboard' });
    };

    renderState(): React.ReactNode {
        if (this.state.mode === 'Dashboard') {
            return (
                <div className="column">
                    <h1>Dashboard</h1>
                    <DashboardHeader />
                    <DashboardList viewApplicant={this.openApplicantInfo} applicants={this.state.applicantList} />
                </div>
            );
        } else {
            return (
                <div className="column">
                    <ApplicantInfo
                        totalApplicants={this.state.applicantList.length}
                        applicant={this.state.applicantList[this.state.count]}
                        count={this.state.count}
                        setCount={this.setCount}
                        viewDashboard={this.openDashboard}
                        viewApplicant={this.openApplicantInfo}
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
