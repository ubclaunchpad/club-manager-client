import React from 'react';
import { Link } from 'react-router-dom';
import DashboardListCard from '../components/dashboard/dashboard-list/DashboardListCard';
import ApplicantInfoContent from '../components/applicant/ApplicantInfoContent';
import SideBar from '../components/sidebar/SideBar';
import ApplicantInfoHeader from '../components/applicant/ApplicantInfoHeader';

interface IApplicantInfoProps {
    name: string;
    role: string;
}

const ApplicantInfo: React.FunctionComponent = () => {
    // sample applicantInfo list to test the prev/next applicant feature
    const applicantList: IApplicantInfoProps[] = [
        { name: 'John Doe', role: 'Developer Applicant' },
        { name: 'Selene Dion', role: 'Developer Applicant' },
        { name: 'Happy Holland', role: 'Designer Applicant' },
        { name: 'Lionel Ronaldo', role: 'Developer Applicant' },
        { name: 'Tom Downey', role: 'Designer Applicant' },
        { name: 'Donald Biden', role: 'Developer Applicant' },
        { name: 'Fizz Buzz', role: 'Developer Applicant' },
        { name: 'Dude Dude Bar', role: 'Designer Applicant' },
        { name: 'Yeet Feet', role: 'Developer Applicant' },
        { name: 'Paul Doll', role: 'Designer Applicant' },
        { name: 'Shiloh Dynasty', role: 'Developer Applicant' },
        { name: 'Mozart Beethoven', role: 'Designer Applicant' },
        { name: 'Harin Wu', role: 'Developer Applicant' },
        { name: 'Loot Toot', role: 'Designer Applicant' },
        { name: 'Cringe Fest', role: 'Developer Applicant' },
        { name: 'Lo Fi', role: 'Designer Applicant' },
        { name: 'Hip Hop', role: 'Developer Applicant' },
    ];
    const [count, setCount] = React.useState(0);
    return (
        <div className="section view">
            <React.Fragment>
                <div className="columns">
                    <div className="column is-2">
                        <SideBar />
                    </div>
                    <div className="column">
                        <div className="container">
                            <div className="applicant-navbar">
                                <div className="columns">
                                    <div className="column is-3">
                                        <button>
                                            <Link to="/dashboard">
                                                <i className="fas fa-arrow-left"></i>
                                                Applicant Information
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <DashboardListCard name={applicantList[count].name} role={applicantList[count].role} />
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
                                        {count > 0 && (
                                            <button onClick={() => setCount(count - 1)}>
                                                <i className="fas fa-arrow-left"></i>Previous Applicant
                                            </button>
                                        )}
                                    </div>
                                    <div className="column is-3 is-offset-8">
                                        {count < applicantList.length - 1 && (
                                            <button onClick={() => setCount(count + 1)}>
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
        </div>
    );
};

export default ApplicantInfo;
