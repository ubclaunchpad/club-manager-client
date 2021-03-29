import React from 'react';

import ScoringForm from './ScoringForm';
import ScoringModal from './ScoringModal';
import ScoringNavbar from './ScoringNavbar';

import './Scoring.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

interface ScoringState {
    criteria: {
        C1: string;
        C2: string;
        C3: string;
        experience: string;
    };
    isModalActive: boolean;
}
interface ScoringProps {
    applicant: {
        id: string;
        name: string;
        role: string;
        level: string;
        status: string;
        screeningGrade?: number;
        interviewGrade?: number;
    };
    count: number;
    viewApplicant: (newCount: number) => void;
    viewDashboard: () => void;
    applicants: any[];
    reviewed: any[];
    scheduled: any[];
    interviewed: any[];
}

class Scoring extends React.Component<ScoringProps, ScoringState> {
    constructor(props: ScoringProps) {
        super(props);
        this.state = {
            criteria: {
                C1: '0',
                C2: '0',
                C3: '0',
                experience: '',
            },
            isModalActive: false,
        };
        this.handleCriteriaChange = this.handleCriteriaChange.bind(this);
        this.confirmSubmit = this.confirmSubmit.bind(this);
    }

    handleCriteriaChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        switch (e.currentTarget.name) {
            case 'C1':
                this.setState({
                    criteria: {
                        ...this.state.criteria,
                        C1: e.currentTarget.value,
                    },
                });
                break;
            case 'C2':
                this.setState({
                    criteria: {
                        ...this.state.criteria,
                        C2: e.currentTarget.value,
                    },
                });
                break;
            case 'C3':
                this.setState({
                    criteria: {
                        ...this.state.criteria,
                        C3: e.currentTarget.value,
                    },
                });
                break;
            case 'experience':
                this.setState({
                    criteria: {
                        ...this.state.criteria,
                        experience: e.currentTarget.value,
                    },
                });
                break;
        }
    };

    //function to manage what happens when submition is confirmed
    confirmSubmit = (): void => {
        alert('Submited');

        const applicantGrade = {
            applicant: this.props.applicant,
            c1: this.state.criteria.C1,
            c2: this.state.criteria.C2,
            c3: this.state.criteria.C3,
        };

        switch (this.props.applicant.status) {
            case 'Pending Applications':
                // update screeningGrade
                axios
                    .post(`http://localhost:4000/grade/screening/${this.props.applicant.id}`, { applicantGrade })
                    .then((res) => {
                        console.log(res);
                        console.log(res.data);
                    });
                break;
            case 'Scheduled For Interview':
                // update interviewGrade
                axios
                    .post(`http://localhost:4000/grade/interview/${this.props.applicant.id}`, { applicantGrade })
                    .then((res) => {
                        console.log(res);
                        console.log(res.data);
                    });
                break;
        }

        // move applicant to correct array and update status
        this.moveApplicant();

        this.props.viewDashboard();
    };

    moveApplicant = (): void => {
        const currentArray = this.props.applicant.status;
        const index: number = currentArray.indexOf(this.props.applicant.id, 0);
        switch (this.props.applicant.status) {
            case 'Pending Applications':
                // Pending Applications -> Application Reviewed stage
                this.props.applicants.splice(index, 1);
                this.props.reviewed.push(this.props.applicant);
                console.log(
                    'moving ' + this.props.applicant.name + ' out of ' + currentArray + ' and into ApplicationReviewed',
                );
                axios
                    .patch(`http://localhost:4000/applicant/${this.props.applicant.id}`, {
                        status: 'Application Reviewed',
                    })
                    .then((res) => {
                        console.log(res);
                        console.log(res.data);
                    });
                break;
            case 'Scheduled For Interview':
                // Scheduled For Interview -> Interviewed stage
                this.props.scheduled.splice(index, 1);
                this.props.interviewed.push(this.props.applicant);
                console.log('moving ' + this.props.applicant.name + ' out of ' + currentArray);
                axios
                    .patch(`http://localhost:4000/applicant/${this.props.applicant.id}`, {
                        status: 'Interviewed',
                    })
                    .then((res) => {
                        console.log(res);
                        console.log(res.data);
                    });
                break;
        }
    };

    toggleIsModalActive = (): void => {
        this.setState({ isModalActive: !this.state.isModalActive });
    };

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="columns">
                    <div className="column">
                        <div className="container">
                            <ScoringNavbar count={this.props.count} viewApplicant={this.props.viewApplicant} />
                            <div className="container form-header">
                                <p className="px-4">
                                    <span className="applicant-card">
                                        <span className="icon">
                                            <FontAwesomeIcon
                                                icon={
                                                    this.props.applicant.role === 'Designer Applicant'
                                                        ? faPaintBrush
                                                        : faCode
                                                }
                                                color={'#444444'}
                                            />
                                        </span>
                                        <span className="px-5">{this.props.applicant.name}</span>
                                    </span>
                                </p>
                                <p className="score-values">
                                    0=Unsatisfactory
                                    <span className="mx-6">1=Satisfactory</span>
                                    <span>2=Exceptional</span>
                                </p>
                                <div className="scoring-form">
                                    <ScoringForm
                                        handleCriteriaChange={this.handleCriteriaChange}
                                        openScoringModal={this.toggleIsModalActive}
                                    />
                                    <div className="current-score">
                                        <p>
                                            Current score{' '}
                                            {+this.state.criteria.C1 +
                                                +this.state.criteria.C2 +
                                                +this.state.criteria.C3}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <ScoringModal
                                closeModal={this.toggleIsModalActive}
                                isActive={this.state.isModalActive}
                                applicantName={this.props.applicant.name}
                                confirmSubmit={this.confirmSubmit}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Scoring;
