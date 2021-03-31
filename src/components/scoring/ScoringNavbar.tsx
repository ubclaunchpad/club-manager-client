import React from 'react';
import './ScoringNavbar.scss';

interface ScoringNavbarProps {
    count: number;
    type: string;
    viewApplicant: (newCount: number) => void;
}

class ScoringNavbar extends React.Component<ScoringNavbarProps> {

    dropdown = () => {
        if (this.props.type === 'Interview') {
            return (
                <div className="dropdown is-hoverable ">
                    <div className="dropdown-trigger">
                        <button
                            className="button dropdown-menu-button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu4"
                        >
                            <span className="is-size-6">Applicant Interview</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"/>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item is-size-6">
                                <button
                                    onClick={() => this.props.viewApplicant(this.props.count)}
                                    className=" dropdown-item-button is-size-6"
                                >
                                    Applicant Info
                                </button>
                            </div>
                        </div>
                        <div className="dropdown-content">
                            <div className="dropdown-item is-size-6">
                                <button
                                    onClick={() => this.props.viewApplicant(this.props.count)}
                                    className=" dropdown-item-button is-size-6"
                                >
                                    Applicant Review
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="dropdown is-hoverable ">
                    <div className="dropdown-trigger">
                        <button
                            className="button dropdown-menu-button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu4"
                        >
                            <span className="is-size-6">Applicant Review</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"/>
                            </span>
                        </button>
                    </div>
                    <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                        <div className="dropdown-content">
                            <div className="dropdown-item is-size-6">
                                <button
                                    onClick={() => this.props.viewApplicant(this.props.count)}
                                    className=" dropdown-item-button is-size-6"
                                >
                                    Applicant Info
                                </button>
                            </div>
                            <div className="dropdown-item is-size-6">
                                {/*TODO: change callback function*/}
                                <button
                                    onClick={() => this.props.viewApplicant(this.props.count)}
                                    className=" dropdown-item-button is-size-6"
                                >
                                    Applicant Interview
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }

    render(): React.ReactNode {
        return (
            <div className="applicant-navbar">
                <button onClick={() => this.props.viewApplicant(this.props.count)} className="back-button is-size-6">
                    <i className="fas fa-arrow-left"></i>
                    Back
                </button>
                {this.dropdown()}
            </div>
        );
    }
}

export default ScoringNavbar;
