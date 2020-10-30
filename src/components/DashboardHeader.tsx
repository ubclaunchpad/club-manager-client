import React, { Component } from 'react';
import DashboardCard from './DashboardCard';

import ScheduledCard from '../images/ScheduledCard.png';
import AcceptedCard from '../images/AcceptedCard.png';
import RejectedCard from '../images/RejectedCard.png';

class DashboardHeader extends Component {
    render(): React.ReactNode {
        return (
            <div>
                <div className="columns">
                    <div className="column is-one-third">
                        <DashboardCard cardImage={ScheduledCard} cardURL="scheduleURL" />
                    </div>
                    <div className="column is-one-third">
                        <DashboardCard cardImage={AcceptedCard} cardURL="acceptedURL" />
                    </div>
                    <div className="column is-one-third">
                        <DashboardCard cardImage={RejectedCard} cardURL="rejectedURL" />
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardHeader;
