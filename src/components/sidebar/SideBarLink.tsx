import React, { Component } from 'react';

class SideBarLink extends Component<{ linkName: string; linkURL: string }> {
    render(): React.ReactNode {
        return (
            <li>
                <a href={this.props.linkURL}>{this.props.linkName}</a>
            </li>
        );
    }
}

export default SideBarLink;
