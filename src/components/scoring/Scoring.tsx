import React from 'react';

import './Scoring.scss';

class Scoring extends React.Component<{
    applicant: { name: string; role: string };

    viewDashboard: () => void;
}> {
    render(): React.ReactNode {
        return (
            <div className="section view">
                <React.Fragment>
                    <div className="applicant-navbar">
                        <button onClick={() => this.props.viewDashboard()}>
                            <i className="fas fa-arrow-left"></i>
                        </button>
                        <h1>Applicant Review</h1>
                    </div>
                </React.Fragment>
            </div>
        );
    }
}

export default Scoring;
