import React from 'react';
import './ScoringNavbar.scss';

interface ScoringNavbarProps {
    count: number;
    viewApplicant: (newCount: number) => void;
}

class ScoringNavbar extends React.Component<ScoringNavbarProps> {
    render(): React.ReactNode {
        return (
            <div className="applicant-navbar">
                <button onClick={() => this.props.viewApplicant(this.props.count)} className="back-button is-size-6">
                    <i className="fas fa-arrow-left"></i>
                    Back
                </button>
                <div className="dropdown is-hoverable ">
                    <div className="dropdown-trigger">
                        <button
                            className="button dropdown-menu-button"
                            aria-haspopup="true"
                            aria-controls="dropdown-menu4"
                        >
                            <span className="is-size-6">Applicant Review</span>
                            <span className="icon is-small">
                                <i className="fas fa-angle-down" aria-hidden="true"></i>
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
                    </div>
                </div>
            </div>
        );
    }
}

export default ScoringNavbar;
