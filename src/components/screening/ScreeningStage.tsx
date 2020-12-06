import React from 'react';
import DashboardList from '../../components/dashboard/dashboard-list/DashboardList';

class ScreeningStage extends React.Component<{
    stage: string;
    viewDashboard: () => void;
    viewApplicant: (newCount: number) => void;
    applicants: any[];
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
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ScreeningStage;
