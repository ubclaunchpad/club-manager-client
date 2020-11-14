import React from 'react';
import './ApplicantInfo.scss';

class ApplicantInfoHeader extends React.Component<{
    email: string;
    year: number;
    major: string;
    exposure: string;
    resume: string;
    github: string;
    website: string;
}> {
    render(): React.ReactNode {
        return (
            <div className="applicant-header mb-5">
                <div className="columns is-variable is-5">
                    <div className="column start">
                        <div className="box applicant-header">
                            <p>Email: {this.props.email}</p>
                        </div>
                    </div>
                    <div className="column is-narrow">
                        <div className="box applicant-header">
                            <p>Year {this.props.year}</p>
                        </div>
                    </div>
                    <div className="column is-narrow">
                        <div className="box applicant-header">
                            <p>{this.props.major}</p>
                        </div>
                    </div>
                    <div className="column end">
                        <div className="box applicant-header">
                            <p>{this.props.exposure}</p>
                        </div>
                    </div>
                </div>

                <div className="columns is-variable is-5">
                    <div className="column start">
                        <div className="box applicant-header">
                            <p>{this.props.resume}</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box applicant-header">
                            <p>{this.props.github}</p>
                        </div>
                    </div>
                    <div className="column end">
                        <div className="box applicant-header">
                            <p>{this.props.website}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplicantInfoHeader;
