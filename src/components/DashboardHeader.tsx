import React from 'react';
import DashboardCard from './DashboardCard';

import ReviewedCard from '../images/ReviewedCard.svg';
import ScheduledCard from '../images/ScheduledCard.svg';
import InterviewedCard from '../images/InterviewedCard.svg';
import FinalDecisionCard from '../images/FinalDecisionCard.svg';

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
