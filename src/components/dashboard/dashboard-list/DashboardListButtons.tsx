import React from 'react';
import './DashboardListButtons.scss';
import DashboardListFilter from './DashboardListFilter';
import { faTimes, faCheck, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type IDashboardListButtonsProps = {
    mode: string;
    onChange: (data: any) => void;
};

type IDashboardListButtonsState = {
    beginner: boolean;
    intermediate: boolean;
    advanced: boolean;
    developer: boolean;
    designer: boolean;
    minScreen: number;
    minInterview: number;
};

class DashboardListButtons extends React.Component<IDashboardListButtonsProps, IDashboardListButtonsState> {
    constructor(props: any) {
        super(props);
        this.state = {
            beginner: false,
            intermediate: false,
            advanced: false,
            developer: false,
            designer: false,
            minScreen: 0,
            minInterview: 0,
        };
    }

    closeDropdown = (): void => {
        console.log('Close dropdown');
    };

    clearCheckboxes = (): void => {
        document.querySelectorAll('input[type=checkbox]').forEach((el: any) => {
            if (el.checked) el.checked = false;
        });
        document.querySelectorAll('input[type=range]').forEach((el: any) => {
            el.value = 0;
        });
        const defaultState = {
            beginner: false,
            intermediate: false,
            advanced: false,
            developer: false,
            designer: false,
            minScreen: 0,
            minInterview: 0,
        };
        this.setState(defaultState);
        this.props.onChange(defaultState);
    };

    setSliders = (): React.ReactNode => {
        switch (this.props.mode) {
            case 'Interviewed':
                return (
                    <div className="level-item">
                        <p>Minimum Interview Score </p>
                        <input
                            className="slider has-output is-fullwidth is-small is-circle"
                            step="1"
                            min="0"
                            max="18"
                            type="range"
                            defaultValue="0"
                            onChange={(event) => {
                                this.setState({ minInterview: parseInt(event.target.value) });
                            }}
                        ></input>
                        <output htmlFor="sliderWithValue">{this.state.minInterview}</output>
                    </div>
                );
            case 'Final Decision':
                return (
                    <div className="level-item">
                        <p>Minimum Interview Score </p>
                        <input
                            className="slider has-output is-fullwidth is-small is-circle"
                            step="1"
                            min="0"
                            max="18"
                            type="range"
                            defaultValue="0"
                            onChange={(event) => {
                                this.setState({ minInterview: parseInt(event.target.value) });
                            }}
                        ></input>
                        <output htmlFor="sliderWithValue">{this.state.minInterview}</output>
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
                    {/* TODO Reintroduce dropdown */}
                    {/* <div className="level dropdown less-padding">
                        <div className="level-left">
                            <div className="dropdown-trigger">
                                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                                    <span>Most Recent</span>
                                    <span className="icon is-small">
                                        <i className="fas fa-angle-down" aria-hidden="true" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="level-left">
                            <button className="dashboard-button" onClick={() => this.closeDropdown()}>
                                <i className="fa fa-chevron-up" />
                            </button>
                        </div>
                    </div> */}
                    <div className="columns">
                        <div className="column is-two-fifths">
                            <div className="level less-padding">
                                <p>Role</p>
                            </div>
                            <div className="level">
                                <div className="level-left">
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            onClick={() => {
                                                this.setState({ developer: !this.state.developer });
                                            }}
                                        />
                                        <span className="checkmark"></span>
                                        Developer
                                    </label>
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            onClick={() => {
                                                this.setState({ designer: !this.state.designer });
                                            }}
                                        />
                                        <span className="checkmark"></span>
                                        Designer
                                    </label>
                                </div>
                            </div>
                            <div className="level">
                                <div className="level-left">
                                    <p>Minimum Review Score </p>
                                    <input
                                        className="slider has-output is-fullwidth is-small is-circle"
                                        step="1"
                                        min="0"
                                        max="6"
                                        type="range"
                                        defaultValue="0"
                                        onChange={(event) => {
                                            this.setState({ minScreen: parseInt(event.target.value) });
                                        }}
                                    ></input>
                                    <output htmlFor="sliderWithValue">{this.state.minScreen}</output>
                                </div>
                            </div>
                        </div>
                        <div className="column is-three-fifths">
                            <div className="level less-padding">
                                <p>Experience Level</p>
                            </div>
                            <div className="level">
                                <div className="level-left">
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            onClick={() => {
                                                this.setState({ beginner: !this.state.beginner });
                                            }}
                                        />
                                        <span className="checkmark"></span>
                                        Beginner
                                    </label>
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            onClick={() => {
                                                this.setState({ intermediate: !this.state.intermediate });
                                            }}
                                        />
                                        <span className="checkmark"></span>
                                        Intermediate
                                    </label>
                                    <label className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            onClick={() => {
                                                this.setState({ advanced: !this.state.advanced });
                                            }}
                                        />
                                        <span className="checkmark"></span>
                                        Advanced
                                    </label>
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
                        <button
                            className="button"
                            onClick={() => {
                                this.props.onChange(this.state);
                            }}
                        >
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
