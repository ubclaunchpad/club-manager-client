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
                    <div className="level">
                        <div className="level-left">
                            <h1 className="hero-title">
                                You have <span className="total">{this.props.reviewed.length}</span> reviewed <br />{' '}
                                applicants so far.
                            </h1>
                        </div>
                        <div className="level-right">
                            <img src={ReviewedImage} alt="" />
                        </div>
                    </div>
                );
            case 'Scheduled For Interview':
                return (
                    <div className="level">
                        <div className="level-left">
                            <h1 className="hero-title">
                                You have <span className="total">{this.props.scheduled.length}</span> applicants <br />
                                scheduled for interview.
                            </h1>
                        </div>
                        <div className="level-right">
                            <img src={ScheduledImage} alt="" />
                        </div>
                    </div>
                );
            case 'Interviewed':
                return (
                    <div className="level-left">
                        <h1 className="hero-title">
                            You have <span className="total">{this.props.interviewed.length}</span> applicants <br />
                            awaiting decision.
                        </h1>
                    </div>
                );
            case 'Final Decision':
                return (
                    <div className="level">
                        <div className="level-left">
                            <h1 className="hero-title">
                                You have <span className="total">{this.props.accepted.length}</span> applicants <br />
                                waiting to be accepted.
                            </h1>
                        </div>
                        <div className="level-right">
                            <img src={FinalDecisionImage} alt="" />
                        </div>
                    </div>
                );
        }
    };

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="columns">
                    <div className="column">
                        <div className="container">
                            <button onClick={() => this.props.viewDashboard()}>
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <h1>{this.props.stage}</h1>
                            <div className="hero-body">{this.setHeader()}</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ScreeningStageHeader;
