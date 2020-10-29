import React, { Component } from 'react';
import DashboardCard from "./DashboardCard";

import rejectedCard from "../Images/Rejected Box.png";
import scheduledCard from '../Images/Scheduled Box.png'
import acceptedCard from "../Images/Accepted Box.png";

class DashboardHeader extends Component {

    render (): React.ReactNode {
        return (
            <div>
                <div className="columns">
                    <div className="column is-one-third">
                        <DashboardCard cardImage={scheduledCard} cardURL={"scheduleURL"}/>
                    </div>
                    <div className="column is-one-third">
                        <DashboardCard cardImage={acceptedCard} cardURL={"acceptedURL"}/>
                    </div>
                    <div className="column is-one-third">
                        <DashboardCard cardImage={rejectedCard} cardURL={"rejectedURL"}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardHeader