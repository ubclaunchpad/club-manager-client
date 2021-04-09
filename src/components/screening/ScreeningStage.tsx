import React from 'react';
import DashboardList from '../../components/dashboard/dashboard-list/DashboardList';
import ScreeningStageHeader from './ScreeningStageHeader';
import './ScreeningStage.scss';

class ScreeningStage extends React.Component<{
    stage: string;
    viewDashboard: () => void;
    viewApplicant: (newCount: number) => void;
    fetchApplicants: () => void;
    applicants: any[];
    reviewed: any[];
    scheduled: any[];
    interviewed: any[];
    accepted: any[];
    rejected: any[];
}> {
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <section className="hero is-small screening-stage-header">
                    <ScreeningStageHeader
                        stage={this.props.stage}
                        viewDashboard={this.props.viewDashboard}
                        applicants={this.props.applicants}
                        reviewed={this.props.reviewed}
                        scheduled={this.props.scheduled}
                        interviewed={this.props.interviewed}
                        accepted={this.props.accepted}
                        rejected={this.props.rejected}
                    />
                </section>
                <div className="columns">
                    <div className="column">
                        <div className="container">
                            <DashboardList
                                mode={this.props.stage}
                                viewApplicant={this.props.viewApplicant}
                                fetchApplicants={this.props.fetchApplicants}
                                applicants={this.props.applicants}
                                reviewed={this.props.reviewed}
                                scheduled={this.props.scheduled}
                                interviewed={this.props.interviewed}
                                accepted={this.props.accepted}
                                rejected={this.props.rejected}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ScreeningStage;
