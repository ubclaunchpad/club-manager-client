import React, { Component } from 'react';
import SideBarLink from './SideBarLink';
import SideBarButton from './SideBarButton';

import SettingsIcon from '../images/settings-icon.png';
import LogoutIcon from '../images/logout-icon.png';

class SideBar extends Component {
    render(): React.ReactNode {
        return (
            <div className="menu">
                <p className="menu-label">
                    Launch Pad <br></br> Student Club
                </p>
                <ul className="menu-list">
                    <SideBarLink linkName="Dashboard" linkURL="/dashboard" />
                    <SideBarLink linkName="Calendar" linkURL="/calendar" />
                    <SideBarLink linkName="Inbox" linkURL="/inbox" />
                </ul>
                <ul>
                    <SideBarButton buttonIcon={SettingsIcon} buttonURL="/settings" />
                    <SideBarButton buttonIcon={LogoutIcon} buttonURL="/logout" />
                </ul>
            </div>
        );
    }
}

export default SideBar;
