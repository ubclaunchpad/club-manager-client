import React, { Component } from 'react';

class SideBarLink extends Component<{ icon: string; linkName: string; linkURL: string }> {
    render(): React.ReactNode {
        return (
            <li>
                <a href={this.props.linkURL}>
                    <span className="icon is-medium">
                        <i className={this.props.icon}></i>
                    </span>
                    <span className="sidebar-link-name">{this.props.linkName}</span>
                </a>
            </li>
        );
    }
}

export default SideBarLink;
