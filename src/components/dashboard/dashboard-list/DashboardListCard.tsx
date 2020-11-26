import React from 'react';

import './DashboardListCard.scss';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDashboardListCardProps {
    name: string;
    role: string;
    setModalAndType: (type: string) => void;
}

const DashboardListCard: React.FunctionComponent<IDashboardListCardProps> = (props: IDashboardListCardProps) => {
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
                            <p className="dashboard-list-card-name">{props.name}</p>
                            <p className="dashboard-list-card-role">{props.role}</p>
                        </div>
                    </div>
                </div>
                <div className="level-right">
                    <div className="level-item">
                        <button className="button button-schedule" onClick={() => props.setModalAndType('Schedule')}>
                            <i className="far fa-calendar-alt"></i>
                        </button>
                        <button className="button button-accept" onClick={() => props.setModalAndType('Accept')}>
                            <i className="fas fa-check"></i>
                        </button>
                        <button className="button button-reject" onClick={() => props.setModalAndType('Reject')}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardListCard;
