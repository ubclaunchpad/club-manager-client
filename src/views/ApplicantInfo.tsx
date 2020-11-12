import React from 'react';
import DashboardListCard from '../components/dashboard/dashboard-list/DashboardListCard';
import ApplicantInfoContent from '../components/applicant/ApplicantInfoContent';
import SideBar from '../components/sidebar/SideBar';
import ApplicantInfoHeader from '../components/applicant/ApplicantInfoHeader';

const ApplicantInfo: React.FunctionComponent = () => {
    return (
        <div className="section view">
            <React.Fragment>
                <div className="columns">
                    <div className="column is-2">
                        <SideBar />
                    </div>
                    <div className="column">
                        <div className="container">
                            <DashboardListCard name="John Doe" role="Developer Applicant" />
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
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
};

export default ApplicantInfo;
