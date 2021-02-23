import React from 'react';

import './DashboardListCard.scss';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDashboardListCardProps {
    mode: string;
    name: string;
    role: string;
    level: string;
    count: number;
    applicationScore?: number;
    interviewScore?: number;
    viewApplicant: (newCount: number) => void;
    setModalAndType: (type: string) => void;
}

class DashboardListCard extends React.Component<IDashboardListCardProps> {
    setMode = (): React.ReactNode => {
        switch (this.props.mode) {
            case 'Application Reviewed':
                return (
                    <div className="level-item">
                        <p>Application Score: {this.props.applicationScore}</p>
                        <button className="button button-reject" onClick={() => this.props.setModalAndType('Reject')}>
                            <i className="fas fa-times"></i>
                        </button>
                        <button
                            className="button button-schedule"
                            onClick={() => this.props.setModalAndType('Schedule')}
                        >
                            <i className="far fa-calendar-alt"></i>
                        </button>
                    </div>
                );
            case 'Scheduled For Interview':
                return (
                    <div className="level-item">
                        <p>Application Score: {this.props.applicationScore}</p>
                        <button className="button button-email" onClick={() => this.props.setModalAndType('Email')}>
                            <i className="far fa-envelope"></i>
                        </button>
                    </div>
                );
            case 'Interviewed':
                return (
                    <div className="level-item">
                        <p>
                            Application Score: {this.props.applicationScore} Interview Score:{' '}
                            {this.props.interviewScore}
                        </p>
                        <button className="button button-accept" onClick={() => this.props.setModalAndType('Accept')}>
                            <i className="fas fa-check"></i>
                        </button>
                        <button className="button button-reject" onClick={() => this.props.setModalAndType('Reject')}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                );
            case 'Final Decision':
                return (
                    <div className="level-item">
                        <p>
                            Application Score: {this.props.applicationScore} Interview Score:{' '}
                            {this.props.interviewScore}
                        </p>
                        <button className="button button-email" onClick={() => this.props.setModalAndType('Email')}>
                            <i className="far fa-envelope"></i>
                        </button>
                    </div>
                );
        }
    };
    render(): React.ReactNode {
        return (
            <div className="container is-fluid dashboard-list-card">
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <span className="icon">
                                <FontAwesomeIcon
                                    icon={this.props.role === 'Designer' ? faPaintBrush : faCode}
                                    color={'#444444'}
                                />
                            </span>
                        </div>
                        <div className="level-item">
                            <div className="container">
                                <p
                                    className="dashboard-list-card-name"
                                    onClick={() => this.props.viewApplicant(this.props.count)}
                                >
                                    {this.props.name}
                                </p>
                                <p className="dashboard-list-card-role">
                                    {this.props.role} ({this.props.level})
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="level-right">{this.setMode()}</div>
                </div>
            </div>
        );
    }
}

export default DashboardListCard;
