import React from 'react';
import { Link } from 'react-router-dom';
import DashboardListCard from '../dashboard/dashboard-list/DashboardListCard';
import ApplicantInfoContent from './ApplicantInfoContent';
import ApplicantInfoHeader from './ApplicantInfoHeader';

interface IApplicantInfoProps {
    name: string;
    role: string;
}

class ApplicantInfo extends React.Component<{
    applicantList: IApplicantInfoProps[];
    applicant: { name: string; role: string };
    count: number;
    setCount: any;
}> {
    render(): React.ReactNode {
        return (
            <React.Fragment>
                <div className="columns">
                    <div className="column">
                        <div className="container">
                            <div className="applicant-navbar">
                                <button>
                                    <Link to="/dashboard">
                                        <i className="fas fa-arrow-left"></i>
                                    </Link>
                                    <b>Applicant Information</b>
                                </button>
                            </div>
                            <DashboardListCard
                                name={this.props.applicant.name}
                                role={this.props.applicant.role}
                                count={this.props.count}
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
                            <div className="applicant-navbar">
                                <div className="columns">
                                    <div className="column is-3">
                                        {this.props.count > 0 && (
                                            <button onClick={() => this.props.setCount(this.props.count - 1)}>
                                                <i className="fas fa-arrow-left"></i>Previous Applicant
                                            </button>
                                        )}
                                    </div>
                                    <div className="column is-3 is-offset-8">
                                        {this.props.count < this.props.applicantList.length - 1 && (
                                            <button onClick={() => this.props.setCount(this.props.count + 1)}>
                                                Next Applicant<i className="fas fa-arrow-right"></i>
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
