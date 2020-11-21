import React from 'react';

import './DashboardListCard.scss';

interface IDashboardListCardProps {
    name: string;
    role: string;
    toggleShowModal: () => void;
}

const DashboardListCard: React.FunctionComponent<IDashboardListCardProps> = (props: IDashboardListCardProps) => {
    return (
        <div className="container is-fluid dashboard-list-card">
            <div className="level">
                <div className="level-left">
                    <div className="level-item">
                        <span className="icon">
                            <i className="fas fa-code"></i>
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
                        <button className="button button-schedule" onClick={props.toggleShowModal}>
                            <i className="far fa-calendar-alt"></i>
                        </button>
                        <button className="button button-accept" onClick={props.toggleShowModal}>
                            <i className="fas fa-check"></i>
                        </button>
                        <button className="button button-reject" onClick={props.toggleShowModal}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardListCard;
