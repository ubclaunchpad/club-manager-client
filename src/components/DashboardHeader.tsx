import React from 'react';
import DashboardCard from './DashboardCard';

import ScheduledCard from '../images/ScheduledCard.png';
import AcceptedCard from '../images/AcceptedCard.png';
import RejectedCard from '../images/RejectedCard.png';

class DashboardHeader extends React.Component<{
    viewScreeningStage: (newStage: string) => void;
}> {
    render(): React.ReactNode {
        return (
            <div>
                <div className="columns">
                    <div className="column is-one-fourth">
                        <DashboardCard
                            cardImage={AcceptedCard}
                            cardURL="Application Reviewed"
                            viewScreeningStage={this.props.viewScreeningStage}
                        />
                    </div>
                    <div className="column is-one-fourth">
                        <DashboardCard
                            cardImage={ScheduledCard}
                            cardURL="Scheduled For Interview"
                            viewScreeningStage={this.props.viewScreeningStage}
                        />
                    </div>
                    <div className="column is-one-fourth">
                        <DashboardCard
                            cardImage={ScheduledCard}
                            cardURL="Interviewed"
                            viewScreeningStage={this.props.viewScreeningStage}
                        />
                    </div>
                    <div className="column is-one-fourth">
                        <DashboardCard
                            cardImage={RejectedCard}
                            cardURL="Final Decision"
                            viewScreeningStage={this.props.viewScreeningStage}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardHeader;
