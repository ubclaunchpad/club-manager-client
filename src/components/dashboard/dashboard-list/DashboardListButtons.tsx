import React from 'react';
import './DashboardListButtons.scss';
import DashboardListFilter from './DashboardListFilter';
import { faTimes, faCheck, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IDashboardListButtonsProps {
    mode: string;
}

class DashboardListButtons extends React.Component<IDashboardListButtonsProps> {
    closeDropdown = (): void => {
        console.log('Close dropdown');
    };

    clearCheckboxes = (): void => {
        console.log('Clear checkboxes');
    };

    setSliders = (): React.ReactNode => {
        switch (this.props.mode) {
            case 'Interviewed':
                return (
                    <div className="level-item">
                        <p>Interview Score </p>
                        <input
                            className="slider has-output is-fullwidth is-small is-circle"
                            step="0.5"
                            min="0"
                            max="6"
                            value="3"
                            type="range"
                        ></input>
                        <output htmlFor="sliderWithValue">3</output>
                    </div>
                );
            case 'Final Decision':
                return (
                    <div className="level-item">
                        <p>Interview Score </p>
                        <input
                            className="slider has-output-tooltip is-large"
                            step="0.5"
                            min="0"
                            max="5"
                            value="3"
                            type="range"
                        ></input>
                        <output htmlFor="sliderWithValue">3</output>
                    </div>
                );
        }
    };

    setButtons = (): React.ReactNode => {
        switch (this.props.mode) {
            case 'Application Reviewed':
                return (
                    <div className="level-right">
                        <button className="button">
                            <span className="icon">
                                <FontAwesomeIcon icon={faTimes} />
                            </span>
                            Reject
                        </button>
                        <button className="button">
                            <span className="icon">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                            </span>
                            Schedule For Interview
                        </button>
                        <DashboardListFilter {...{ title: 'Bulk Select' }} />{' '}
                    </div>
                );
            case 'Interviewed':
                return (
                    <div className="level-right">
                        <div className="level-item">
                            <button className="button">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faTimes} />
                                </span>
                                Reject
                            </button>
                            <button className="button">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </span>
                                Accept
                            </button>
                            <DashboardListFilter {...{ title: 'Bulk Select' }} />{' '}
                        </div>
                    </div>
                );
            case 'Final Decision':
                return (
                    <div className="level-right">
                        <div className="level-item">
                            <button className="button">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                Send Acceptance Email
                            </button>
                            <DashboardListFilter {...{ title: 'Bulk Select' }} />{' '}
                        </div>
                    </div>
                );
        }
    };

    render(): React.ReactNode {
        return (
            <div className="dashboard-list-buttons">
                <div className="container">
                    <div className="level dropdown less-padding">
                        <div className="level-left">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                    <span>Most Recent</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="level-left">
                            <button className="dashboard-button" onClick={() => this.closeDropdown()}>
                                <i className="fa fa-chevron-up"></i>
                            </button>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            <div className="level less-padding">
                                <p>Role</p>
                            </div>
                            <div className="level">
                                <div className="level-left">
                                    <DashboardListFilter {...{ title: 'Developer' }} />{' '}
                                    <DashboardListFilter {...{ title: 'Designer' }} />{' '}
                                </div>
                            </div>
                            <div className="level">
                                <div className="level-left">
                                    <p>Review Score </p>
                                    <input
                                        className="slider has-output is-fullwidth is-small is-circle"
                                        step="0.5"
                                        min="0"
                                        max="6"
                                        value="3"
                                        type="range"
                                    ></input>
                                    <output htmlFor="sliderWithValue">3</output>
                                </div>
                            </div>
                        </div>
                        <div className="column is-three-fifths">
                            <div className="level less-padding">
                                <p>Experience Level</p>
                            </div>
                            <div className="level">
                                <div className="level-left">
                                    <DashboardListFilter {...{ title: 'Beginner' }} />{' '}
                                    <DashboardListFilter {...{ title: 'Intermediate' }} />{' '}
                                    <DashboardListFilter {...{ title: 'Advanced' }} />{' '}
                                </div>
                            </div>
                            <div className="level">
                                <div className="level-left">{this.setSliders()}</div>
                                <div className="level-right">
                                    <button className="dashboard-button" onClick={() => this.clearCheckboxes()}>
                                        Clear All
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="level">
                    <div className="level-left">
                        <button className="button">
                            <FontAwesomeIcon icon={faSlidersH} />
                        </button>
                        Filter
                    </div>
                    {this.setButtons()}
                </div>
            </div>
        );
    }
}

export default DashboardListButtons;
