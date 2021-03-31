import React from 'react';

import './MemberCard.scss';

interface IMemberCardProps {
    name: string;
    role: string;
    image: string;
    linkedin: string;
}

class MemberCard extends React.Component<IMemberCardProps> {
    render(): React.ReactNode {
        return (
            <div className="column is-3 member-card">
                <img src={this.props.image} alt="profile picture" className="profile-picture" />
                <p className="name">{this.props.name}</p>
                <p className="role">{this.props.role}</p>
                <a className="icon" href={this.props.linkedin} target="blank">
                    <i className="fab fa-linkedin"></i>
                </a>
            </div>
        );
    }
}
export default MemberCard;
