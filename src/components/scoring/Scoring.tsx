import React from 'react';

import ScoringForm from './ScoringForm';

import './Scoring.scss';

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
                                <h1>Applicant Review</h1>
                            </div>
                            <div className="container form-header">
                                <p className="p-4 is-size-5">{this.props.applicant.name}</p>
                                <p className=" p-4">
                                    0=Unsatisfactory<span className="mx-6">1=Satisfactory</span>
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
