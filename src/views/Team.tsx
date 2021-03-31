import React from 'react';
import { Link } from 'react-router-dom';

import '../App.scss';
import './Team.scss';
import TeamList from '../components/team/TeamList';
import MemberCard from '../components/team/MemberCard';
import HireflowIcon from '../images/HireflowIcon.svg';

const Team: React.FunctionComponent = () => {
    return (
        <div className="team-view">
            <div className="columns is-vcentered">
                <img className="column is-2" src={HireflowIcon} alt="" />
                <div className="column has-text-right">
                    <Link
                        to={{
                            pathname: '/',
                        }}
                        className="link"
                    >
                        <i className="fas fa-long-arrow-alt-left"></i> Go back
                    </Link>
                </div>
            </div>
            <p className="page-title">MEET THE TEAM</p>
            <p className="slogan">
                Created by a bunch of passionate
                <br /> students at UBC Launch Pad.
            </p>
            <div className="columns is-multiline is-centered is-vcentered">
                {TeamList.map((member) => (
                    <MemberCard name={member.name} image={member.photo} role={member.role} linkedin={member.linkedin} />
                ))}
            </div>
        </div>
    );
};

export default Team;
