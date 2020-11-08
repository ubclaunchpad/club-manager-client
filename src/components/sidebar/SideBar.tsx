import React, { Component } from 'react';
import SideBarLink from './SideBarLink';
import SideBarButton from './SideBarButton';
import './Sidebar.scss';

import SettingsIcon from '../../images/SettingsIcon.svg';
import LogoutIcon from '../../images/LogoutIcon.svg';
import { ReactComponent as ClubIcon } from '../../images/ClubIcon.svg';

class SideBar extends Component {
    render(): React.ReactNode {
        return (
            <div id="sidebar">
                <div id="sidebar-links" className="menu">
                    <ClubIcon />
                    <p className="menu-label">
                        <b>Launch Pad</b> <br></br> Student Club
                    </p>
                    <ul className="menu-list">
                        <SideBarLink linkName="Dashboard" linkURL="/dashboard" />
                        <SideBarLink linkName="Calendar" linkURL="/calendar" />
                        <SideBarLink linkName="Inbox" linkURL="/inbox" />
                    </ul>
                </div>
                <div id="sidebar-buttons">
                    <ul className="menu-list">
                        <SideBarButton buttonIcon={SettingsIcon} buttonURL="/settings" />
                        <SideBarButton buttonIcon={LogoutIcon} buttonURL="/logout" />
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
