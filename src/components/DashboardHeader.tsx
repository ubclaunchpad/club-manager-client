import React from 'react';
import DashboardCard from './DashboardCard';

import ReviewedCard from '../images/ReviewedCard.png';
import ScheduledCard from '../images/ScheduledCard.png';
import InterviewedCard from '../images/InterviewedCard.png';
import FinalDecisionCard from '../images/FinalDecisionCard.png';

class DashboardHeader extends React.Component<{
    viewScreeningStage: (newStage: string) => void;
}> {
    render(): React.ReactNode {
        return (
            <div>
                <div className="columns">
                    <div className="column is-one-fourth">
                        <DashboardCard
                            cardImage={ReviewedCard}
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
                            cardImage={InterviewedCard}
                            cardURL="Interviewed"
                            viewScreeningStage={this.props.viewScreeningStage}
                        />
                    </div>
                    <div className="column is-one-fourth">
                        <DashboardCard
                            cardImage={FinalDecisionCard}
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
