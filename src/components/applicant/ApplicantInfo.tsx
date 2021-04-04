import React from 'react';
import DashboardListCard from '../dashboard/dashboard-list/DashboardListCard';
import ApplicantInfoContent from './ApplicantInfoContent';
import ApplicantInfoHeader from './ApplicantInfoHeader';

class ApplicantInfo extends React.Component<{
    totalApplicants: number;
    applicant: {
        name: string;
        role: string;
        level: string;
        status: string;
        email: string;
        screeningGrade?: number;
        interviewGrade?: number;
    };
    count: number;
    setCount: (newCount: number) => void;
    viewDashboard: () => void;
    viewScoring: () => void;
    viewApplicant: (newCount: number) => void;
}> {
    showModal = (name: string, role: string, type: string): void => {
        return;
    };

    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="columns">
                    <div className="column">
                        <div className="container">
                            <div className="applicant-navbar">
                                <button className="back-button" onClick={() => this.props.viewDashboard()}>
                                    <i className="fas fa-arrow-left" />
                                </button>
                                <h1>Applicant Information</h1>
                                <button className="review-button" onClick={this.props.viewScoring}>
                                    Review {'>'}
                                </button>
                            </div>
                            <DashboardListCard
                                mode="ApplicantInfo"
                                name={this.props.applicant.name}
                                role={this.props.applicant.role}
                                level={this.props.applicant.level}
                                status={this.props.applicant.status}
                                email={this.props.applicant.email}
                                count={this.props.count}
                                viewApplicant={this.props.viewApplicant}
                                setModalAndType={(type: string) => {
                                    this.showModal(this.props.applicant.name, this.props.applicant.role, type);
                                }}
                                screeningGrade={this.props.applicant.screeningGrade}
                                interviewGrade={this.props.applicant.interviewGrade}
                            />
                            <ApplicantInfoHeader
                                email={'johndoe@gmail.com'}
                                year={2}
                                major={'Major'}
                                exposure={'Exposure to Launchpad'}
                                resume={'Link to Resume'}
                                github={'Link to Github'}
                                website={'Website/Portf.'}
                            />
                            <ApplicantInfoContent
                                headings={[
                                    'How did you hear about Launch Pad?',
                                    'Why are you interested in joining Launch Pad? (~200 words)',
                                    'Which platforms have you worked with? *',
                                    "Tell us about a technical project you've contributed to or built! *",
                                    "Link to favourite project that you've contributed to or built.",
                                ]}
                                descriptions={[
                                    'Facebook, Instagram',
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus (THIS IS PRECISELY 200 WORDS)',
                                    'iOS',
                                    'Android, iOS, Frontend Web',
                                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus (THIS IS PRECISELY 200 WORDS)',
                                    'www.devpost.com/exampleproject',
                                ]}
                            />
                            <div className="applicant-footer">
                                <div className="columns">
                                    <div className="column is-3 left-column">
                                        {this.props.count > 0 && (
                                            <button
                                                className="footer-button"
                                                onClick={() => this.props.setCount(this.props.count - 1)}
                                            >
                                                <i className="fas fa-arrow-left" />
                                                Previous Applicant
                                            </button>
                                        )}
                                    </div>
                                    <div className="column is-half" />
                                    <div className="column is-3 right-column">
                                        {this.props.count < this.props.totalApplicants - 1 && (
                                            <button
                                                className="footer-button"
                                                onClick={() => this.props.setCount(this.props.count + 1)}
                                            >
                                                Next Applicant
                                                <i className="fas fa-arrow-right" />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ApplicantInfo;
