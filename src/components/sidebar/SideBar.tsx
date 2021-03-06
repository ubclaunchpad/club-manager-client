import React, { Component } from 'react';
import SideBarLink from './SideBarLink';
import './Sidebar.scss';

import HireflowIcon from '../../images/HireflowIcon.svg';

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
                        <SideBarLink icon="fas fa-sign-out-alt" linkName="Logout" linkURL="logout/" />
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
