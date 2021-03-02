import React from 'react';

import './DashboardListCard.scss';
import { faCode, faPaintBrush, faTimes, faCheck, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDashboardListCardProps {
    mode: string;
    name: string;
    role: string;
    level: string;
    status: string;
    count: number;
    viewApplicant: (newCount: number) => void;
    setModalAndType: (type: string) => void;
    screeningGrade?: number;
    interviewGrade?: number;
}

const DashboardListCard: React.FunctionComponent<IDashboardListCardProps> = (props: IDashboardListCardProps) => {
    const applicantStatus = props.status;
    let decisionComponent, emailComponent, gradeComponent;
    switch (applicantStatus) {
        case 'Pending Applications':
            decisionComponent = (
                <div className="level-item">
                    <button className="button button-reject" onClick={() => props.setModalAndType('Reject')}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <button className="button button-schedule" onClick={() => props.setModalAndType('Schedule')}>
                        <FontAwesomeIcon icon={faCalendarAlt} />
                    </button>
                </div>
            );
            gradeComponent = (
                <div className="container grade">
                    <p className="title is-4">{props.screeningGrade}</p>
                    <p className="subtitle is-7">Review</p>
                </div>
            );
            break;
        case 'Screened: Accepted':
            break;
        case 'Scheduled for Interview':
            gradeComponent = (
                <div className="container grade">
                    <p className="title is-4">{props.screeningGrade}</p>
                    <p className="subtitle is-7">Review</p>
                </div>
            );
            break;
        case 'Interviewed':
            decisionComponent = (
                <div className="level-item">
                    <button className="button button-reject" onClick={() => props.setModalAndType('Reject')}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <button className="button button-accept" onClick={() => props.setModalAndType('Accept')}>
                        <FontAwesomeIcon icon={faCheck} />
                    </button>
                </div>
            );
            gradeComponent = (
                <div className="columns">
                    <div className="container grade">
                        <p className="title is-4">{props.screeningGrade}</p>
                        <p className="subtitle is-7">Review</p>
                    </div>

                    <div className="container grade">
                        <p className="title is-4">{props.interviewGrade}</p>
                        <p className="subtitle is-7">Interview</p>
                    </div>
                </div>
            );
            break;
        case 'Final Decision: Accepted':
        case 'Final Decision: Rejected':
            emailComponent = (
                <div className="level-right">
                    <button className="button button-email" onClick={() => props.setModalAndType('Email')}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </button>
                </div>
            );
            gradeComponent = (
                <div className="columns">
                    <div className="container grade">
                        <p className="title is-4">{props.screeningGrade}</p>
                        <p className="subtitle is-7">Review</p>
                    </div>

                    <div className="container grade">
                        <p className="title is-4">{props.interviewGrade}</p>
                        <p className="subtitle is-7">Interview</p>
                    </div>
                </div>
            );
            break;
        case 'Screened: Rejected':
        case 'Archived: Rejected':
            return <div />;
        default:
            break;
    }
    const applicantCardComponent = (
        <div className="level-right">
            {decisionComponent}
            {emailComponent}
            {gradeComponent}
            <div>
                <FontAwesomeIcon icon={faEllipsisV} />
            </div>
        </div>
    );
    return (
        <div className="container is-fluid dashboard-list-card">
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <span className="icon">
                            <FontAwesomeIcon
                                icon={props.role === 'Designer' ? faPaintBrush : faCode}
                                color={'#444444'}
                            />
                        </span>
                    </div>
                    <div className="level-item">
                        <div className="container">
                            <p className="dashboard-list-card-name" onClick={() => props.viewApplicant(props.count)}>
                                {props.name}
                            </p>
                            <p className="dashboard-list-card-role">
                                {props.role} ({props.level})
                            </p>
                        </div>
                    </div>
                </div>
                {applicantCardComponent}
            </div>
        </div>
    );
};

export default DashboardListCard;
