import React from 'react';

import ScoringForm from './ScoringForm';

import './Scoring.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';

class Scoring extends React.Component<{
    applicant: { name: string; role: string };
    count: number;
    viewApplicant: (newCount: number) => void;
}> {
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="columns">
                    <div className="column">
                        <div className="container">
                            <div className="applicant-navbar">
                                <button onClick={() => this.props.viewApplicant(this.props.count)}>
                                    <i className="fas fa-arrow-left"></i>
                                </button>
                                <div className="dropdown is-hoverable ">
                                    <div className="dropdown-trigger">
                                        <button className="button" aria-haspopup="true" aria-controls="dropdown-menu4">
                                            <span className="is-size-6">Applicant Review</span>
                                            <span className="icon is-small">
                                                <i className="fas fa-angle-down" aria-hidden="true"></i>
                                            </span>
                                        </button>
                                    </div>
                                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                                        <div className="dropdown-content">
                                            <div className="dropdown-item is-size-6">
                                                <button
                                                    onClick={() => this.props.viewApplicant(this.props.count)}
                                                    className=" is-size-6"
                                                >
                                                    Applicant Info
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                    <ScoringForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Scoring;
