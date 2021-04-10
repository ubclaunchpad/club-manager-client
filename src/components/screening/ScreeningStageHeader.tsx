import React from 'react';
import './ScreeningStageHeader.scss';

import ReviewedImage from '../../images/ReviewedImage.png';
import ScheduledImage from '../../images/ScheduledImage.png';
import FinalDecisionImage from '../../images/FinalDecisionImage.png';

class ScreeningStageHeader extends React.Component<{
    stage: string;
    viewDashboard: () => void;
    applicants: any[];
    reviewed: any[];
    scheduled: any[];
    interviewed: any[];
    accepted: any[];
    rejected: any[];
}> {
    setHeader = (): React.ReactNode => {
        switch (this.props.stage) {
            case 'Application Reviewed':
                return (
                    <div className="columns">
                        <div className="column is-two-thirds applicant-count">
                            <h1 className="hero-title">
                                You have <span className="total">{this.props.reviewed.length}</span> reviewed <br />{' '}
                                applicants so far.
                            </h1>
                            <h3 className="hero-subtitle">
                                {' '}
                                <span className="total">
                                    {
                                        this.props.reviewed.filter((applicant) => applicant.role.includes('Developer'))
                                            .length
                                    }
                                </span>{' '}
                                Developers ·{' '}
                                <span className="total">
                                    {
                                        this.props.reviewed.filter((applicant) => applicant.role.includes('Designer'))
                                            .length
                                    }
                                </span>{' '}
                                Designers
                            </h3>
                        </div>
                        <div className="column is-one-third">
                            <img src={ReviewedImage} alt="" />
                        </div>
                    </div>
                );
            case 'Scheduled For Interview':
                return (
                    <div className="columns">
                        <div className="column is-two-thirds applicant-count">
                            <h1 className="hero-title">
                                You have <span className="total">{this.props.scheduled.length}</span> applicants <br />
                                scheduled for interview.
                            </h1>
                            <h3 className="hero-subtitle">
                                {' '}
                                <span className="total">
                                    {
                                        this.props.scheduled.filter((applicant) => applicant.role.includes('Developer'))
                                            .length
                                    }
                                </span>{' '}
                                Developers ·{' '}
                                <span className="total">
                                    {
                                        this.props.scheduled.filter((applicant) => applicant.role.includes('Designer'))
                                            .length
                                    }
                                </span>{' '}
                                Designers
                            </h3>
                        </div>
                        <div className="column is-one-third">
                            <img src={ScheduledImage} alt="" />
                        </div>
                    </div>
                );
            case 'Interviewed':
                return (
                    <div className="columns">
                        <div className="column is-two-thirds applicant-count">
                            <h1 className="hero-title">
                                You have <span className="total">{this.props.interviewed.length}</span> applicants{' '}
                                <br />
                                awaiting decision.
                            </h1>
                            <h3 className="hero-subtitle">
                                {' '}
                                <span className="total">
                                    {
                                        this.props.interviewed.filter((applicant) =>
                                            applicant.role.includes('Developer'),
                                        ).length
                                    }
                                </span>{' '}
                                Developers ·{' '}
                                <span className="total">
                                    {
                                        this.props.interviewed.filter((applicant) =>
                                            applicant.role.includes('Designer'),
                                        ).length
                                    }
                                </span>{' '}
                                Designers
                            </h3>
                        </div>
                        <div className="column is-one-third">
                            <img src={ReviewedImage} alt="" />
                        </div>
                    </div>
                );
            case 'Final Decision: Accepted':
                return (
                    <div className="columns">
                        <div className="column is-two-thirds applicant-count">
                            <h1 className="hero-title">
                                You have <span className="total">{this.props.accepted.length}</span> applicants <br />
                                waiting to be accepted.
                            </h1>
                            <h3 className="hero-subtitle">
                                {' '}
                                <span className="total">
                                    {
                                        this.props.accepted.filter((applicant) => applicant.role.includes('Developer'))
                                            .length
                                    }
                                </span>{' '}
                                Developers ·{' '}
                                <span className="total">
                                    {
                                        this.props.accepted.filter((applicant) => applicant.role.includes('Designer'))
                                            .length
                                    }
                                </span>{' '}
                                Designers
                            </h3>
                        </div>
                        <div className="column is-one-third">
                            <img src={FinalDecisionImage} alt="" />
                        </div>
                    </div>
                );
            case 'Final Decision: Rejected':
                return (
                    <div className="columns">
                        <div className="column is-two-thirds applicant-count">
                            <h1 className="hero-title">
                                You have <span className="total">{this.props.rejected.length}</span> applicants <br />
                                waiting to be rejected.
                            </h1>
                            <h3 className="hero-subtitle">
                                {' '}
                                <span className="total">
                                    {
                                        this.props.rejected.filter((applicant) => applicant.role.includes('Developer'))
                                            .length
                                    }
                                </span>{' '}
                                Developers ·{' '}
                                <span className="total">
                                    {
                                        this.props.rejected.filter((applicant) => applicant.role.includes('Designer'))
                                            .length
                                    }
                                </span>{' '}
                                Designers
                            </h3>
                        </div>
                        <div className="column is-one-third">
                            <img src={FinalDecisionImage} alt="" />
                        </div>
                    </div>
                );
        }
    };

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="level less-padding">
                    <div className="level-left">
                        <button className="back-button" onClick={() => this.props.viewDashboard()}>
                            <i className="fas fa-arrow-left" />
                        </button>
                        <h1>{this.props.stage}</h1>
                    </div>
                    <div className="level-right">
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input is-rounded" type="search" placeholder="Search applicants" />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-search" />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero-body">{this.setHeader()}</div>
            </React.Fragment>
        );
    }
}

export default ScreeningStageHeader;
