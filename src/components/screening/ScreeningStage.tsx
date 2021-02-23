import React from 'react';
import DashboardList from '../../components/dashboard/dashboard-list/DashboardList';

class ScreeningStage extends React.Component<{
    stage: string;
    viewDashboard: () => void;
    viewApplicant: (newCount: number) => void;
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
                <div className="columns">
                    <div className="column">
                        <div className="container">
                            <button onClick={() => this.props.viewDashboard()}>
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <h1>{this.props.stage}</h1>
                            <DashboardList
                                mode={this.props.stage}
                                viewApplicant={this.props.viewApplicant}
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
