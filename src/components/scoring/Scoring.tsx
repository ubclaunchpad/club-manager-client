import React from 'react';

import ScoringForm from './ScoringForm';
import ScoringModal from './ScoringModal';
import ScoringNavbar from './ScoringNavbar';

import './Scoring.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import InterviewForm from './InterviewForm';

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
    status: string;
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
            status: this.props.applicant.status,
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
        this.handleInterviewFormChange = this.handleInterviewFormChange.bind(this);
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

    handleInterviewFormChange = (
        e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    ): void => {
        switch (e.currentTarget.name) {
            case 'level':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        level: e.currentTarget.value,
                    },
                });
                break;
            case 'interviewer1':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        interviewer1: e.currentTarget.value,
                    },
                });
                break;
            case 'interviewer2':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        interviewer2: e.currentTarget.value,
                    },
                });
                break;
            case 'intro':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        intro: e.currentTarget.value,
                    },
                });
                break;
            case 'experienceTechnical':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        experienceTechnical: Number.parseInt(e.currentTarget.value),
                    },
                });
                break;
            case 'experienceTeamwork':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        experienceTeamwork: Number.parseInt(e.currentTarget.value),
                    },
                });
                break;
            case 'experienceComments':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        experienceComments: e.currentTarget.value,
                    },
                });
                break;
            case 'depthTopic':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        depthTopic: e.currentTarget.value,
                    },
                });
                break;
            case 'depthScore':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        depthScore: Number.parseInt(e.currentTarget.value),
                    },
                });
                break;
            case 'depthComments':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        depthComments: e.currentTarget.value,
                    },
                });
                break;
            case 'whiteboardQuestion':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        whiteboardQuestion: e.currentTarget.value,
                    },
                });
                break;
            case 'whiteboardScore':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        whiteboardScore: Number.parseInt(e.currentTarget.value),
                    },
                });
                break;
            case 'whiteboardComments':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        whiteboardComments: e.currentTarget.value,
                    },
                });
                break;
            case 'conclusionTimeCommitment':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        conclusionTimeCommitment: e.currentTarget.value,
                    },
                });
                break;
            case 'conclusionQuestions':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        conclusionQuestions: e.currentTarget.value,
                    },
                });
                break;
            case 'debrief':
                this.setState({
                    interview: {
                        ...this.state.interview,
                        debrief: Number.parseInt(e.currentTarget.value),
                    },
                });
                break;
        }
    };

    // function to manage what happens when submission is confirmed
    confirmSubmit = (): void => {
        switch (this.state.status) {
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

    changeStatus = (status: string): void => {
        this.setState({ status: status });
    };

    render(): React.ReactNode {
        if (this.state.status === 'Scheduled For Interview') {
            return (
                <React.Fragment>
                    <div className="columns">
                        <div className="column">
                            <div className="container">
                                <ScoringNavbar
                                    count={this.props.count}
                                    type="Interview"
                                    viewApplicant={this.props.viewApplicant}
                                    changeStatus={this.changeStatus}
                                />
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
                                        <InterviewForm
                                            handleInterviewFormChange={this.handleInterviewFormChange}
                                            openScoringModal={this.toggleIsModalActive}
                                        />
                                        <div className="current-score">
                                            <p>
                                                Current score:{' '}
                                                {+this.state.interview.experienceTechnical +
                                                    +this.state.interview.experienceTeamwork +
                                                    +this.state.interview.depthScore +
                                                    +this.state.interview.whiteboardScore +
                                                    +this.state.interview.debrief}
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
                                <ScoringNavbar
                                    count={this.props.count}
                                    type="Review"
                                    viewApplicant={this.props.viewApplicant}
                                    changeStatus={this.changeStatus}
                                />
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
                                                Current score:{' '}
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
