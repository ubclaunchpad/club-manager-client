import React, { Component } from 'react';
import SideBarLink from './SideBarLink';
import './Sidebar.scss';

import ClubIcon from '../../images/ClubIcon.svg';

class SideBar extends Component {
    render(): React.ReactNode {
        return (
            <div id="sidebar">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={ClubIcon} alt="UBC Launch Pad Logo"></img>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">Launch Pad</p>
                        <p className="subtitle is-6">Student Club</p>
                    </div>
                </div>

                <div id="sidebar-links" className="menu">
                    <ul className="menu-list">
                        <SideBarLink icon="fas fa-list-ul" linkName="Dashboard" linkURL="/dashboard" />
                        <SideBarLink icon="far fa-calendar-alt" linkName="Calendar" linkURL="/calendar" />
                        <SideBarLink icon="far fa-envelope" linkName="Inbox" linkURL="/inbox" />
                    </ul>
                </div>
                <hr />
                <div id="sidebar-buttons">
                    <ul className="menu-list">
                        <SideBarLink icon="fas fa-cog" linkName="Settings" linkURL="/settings" />
                        <SideBarLink icon="fas fa-sign-out-alt" linkName="Log Out" linkURL="/logout" />
                    </ul>
                </div>
            </div>
        );
    }
}

export default SideBar;
