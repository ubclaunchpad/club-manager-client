import React from 'react';

import ScoringForm from './ScoringForm';
import ScoringModal from './ScoringModal';
import ScoringNavbar from './ScoringNavbar';

import './Scoring.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

interface IApplicantInfoProps {
    id: string;
    name: string;
    role: string;
    level: string;
    status: string;
    email: string;
    screeningGrade?: number;
    interviewGrade?: number;
}
interface ScoringState {
    criteria: {
        C1: string;
        C2: string;
        C3: string;
        experience: string;
    };
    interview: {
        level: string;
        interviewer1: string;
        interviewer2: string;
        intro: string;
        experienceTechnical: number;
        experienceTeamwork: number;
        experienceComments: string;
        depthTopic: string;
        depthScore: number;
        depthComments: string;
        whiteboardQuestion: string;
        whiteboardScore: number;
        whiteboardComments: string;
        conclusionTimeCommitment: string;
        conclusionQuestions: string;
        debrief: number;
    }
    isModalActive: boolean;
}
interface ScoringProps {
    applicant: {
        id: string;
        name: string;
        role: string;
        level: string;
        status: string;
        email: string;
        screeningGrade?: number;
        interviewGrade?: number;
    };
    count: number;
    viewApplicant: (newCount: number) => void;
    viewDashboard: () => void;
    moveApplicant: (applicant: IApplicantInfoProps) => void;
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
            interview: {
                level: this.props.applicant.level,
                interviewer1: '',
                interviewer2: '',
                intro: '',
                experienceTechnical: 0,
                experienceTeamwork: 0,
                experienceComments: '',
                depthTopic: '',
                depthScore: 0,
                depthComments: '',
                whiteboardQuestion: '',
                whiteboardScore: 0,
                whiteboardComments: '',
                conclusionTimeCommitment: '',
                conclusionQuestions: '',
                debrief: 0,
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

    // function to manage what happens when submission is confirmed
    confirmSubmit = (): void => {
        switch (this.props.applicant.status) {
            case 'Pending Applications':
                // update screeningGrade
                this.props.applicant.screeningGrade =
                    parseInt(this.state.criteria.C1) +
                    parseInt(this.state.criteria.C2) +
                    parseInt(this.state.criteria.C3);

                axios
                    .post(`http://localhost:4000/grade/screening/${this.props.applicant.id}`, {
                        level: this.state.criteria.experience,
                        c1: this.state.criteria.C1,
                        c2: this.state.criteria.C2,
                        c3: this.state.criteria.C3,
                    })
                    .then((res) => {
                        console.log(res);
                        console.log(res.data);
                    });
                break;
            case 'Scheduled For Interview':
                axios
                    .post(`http://localhost:4000/grade/interview/${this.props.applicant.id}`, this.state.interview)
                    .then((res) => {
                        console.log(res);
                        console.log(res.data);
                    });
                break;
        }

        // move applicant to correct array and update status
        this.props.moveApplicant(this.props.applicant);

        this.props.viewDashboard();
    };

    toggleIsModalActive = (): void => {
        this.setState({ isModalActive: !this.state.isModalActive });
    };

    render(): React.ReactNode {
        if (this.props.applicant.status === 'Scheduled For Interview') {
            return (
                <React.Fragment>
                    <div className="columns">
                        <div className="column">
                            <div className="container">
                                <ScoringNavbar count={this.props.count} type="Interview" viewApplicant={this.props.viewApplicant} />
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
                                        0 = Unsatisfactory
                                        <span className="mx-6">1 = Satisfactory</span>
                                        <span>2 = Exceptional</span>
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
                                    status={this.props.applicant.status}
                                    applicantName={this.props.applicant.name}
                                    confirmSubmit={this.confirmSubmit}
                                />
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <div className="columns">
                        <div className="column">
                            <div className="container">
                                <ScoringNavbar count={this.props.count} type="Review" viewApplicant={this.props.viewApplicant} />
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
                                        0 = Unsatisfactory
                                        <span className="mx-6">1 = Satisfactory</span>
                                        <span>2 = Exceptional</span>
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
                                    status={this.props.applicant.status}
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
}

export default Scoring;
