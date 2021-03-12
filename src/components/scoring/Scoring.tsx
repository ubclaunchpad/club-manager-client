import React from 'react';

import ScoringForm from './ScoringForm';
import ScoringModal from './ScoringModal';
import ScoringNavbar from './ScoringNavbar';

import './Scoring.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

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
    applicant: { name: string; role: string };
    count: number;
    viewApplicant: (newCount: number) => void;
    viewDashboard: () => void;
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
        this.props.viewDashboard();
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
