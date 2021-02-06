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
            <div className="section view">
                <React.Fragment>
                    <div className="applicant-navbar">
                        <button onClick={() => this.props.viewApplicant(this.props.count)}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <h1>Applicant Review</h1>
                    </div>
                    <div className="form-background">
                        <p className="is-size-5">{this.props.applicant.name}</p>
                        <p>{this.props.applicant.role}</p>
                        <br />
                        <p className="is-size-4">CRITERIA :</p>
                        <p className="is-size-6">(0-Unsatisfactory, 1-Satisfactory, 2-Exceptional)</p>

                        <ScoringForm />
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

export default Scoring;
