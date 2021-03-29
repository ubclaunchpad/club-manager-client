import React, { Component } from 'react';
import SideBarLink from './SideBarLink';
import './Sidebar.scss';

import HireflowIcon from '../../images/HireflowIcon.svg';
import ClubIcon from '../../images/ClubIcon.svg';

class SideBar extends Component {
    render(): React.ReactNode {
        return (
            <div id="sidebar">
                <a href="/">
                    <img src={HireflowIcon} className="hireflow-icon" alt="Hireflow Logo" />
                </a>

                <div id="sidebar-links" className="menu">
                    <ul className="menu-list">
                        <SideBarLink
                            icon="fas fa-space-shuttle fa-rotate-270"
                            linkName="Dashboard"
                            linkURL="/dashboard"
                        />
                        <SideBarLink icon="fas fa-archive" linkName="Archive" linkURL="/archive" />
                        <SideBarLink icon="fas fa-exchange-alt fa-rotate-90" linkName="Import" linkURL="/options" />
                    </ul>
                </div>
                <div className="logo-box">
                    <div className="launchpad-logo">
                        <img src={ClubIcon} alt="UBC Launch Pad Logo" />
                        <span className="icon is-medium">
                            <i className="fas fa-ellipsis-v"></i>
                        </span>
                        <p className="club-name">UBC Launch Pad</p>
                        <p className="description">Student Club</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;
