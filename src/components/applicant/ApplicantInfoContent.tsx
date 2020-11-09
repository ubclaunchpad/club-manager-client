import React, { FunctionComponent } from 'react';

import './ApplicantInfo.scss';

interface IApplicantInfoContentProps {
    applicantTextDescription: string;
    applicantTextContent: string;
}

const ApplicantInfoContent: FunctionComponent<IApplicantInfoContentProps> = (props: IApplicantInfoContentProps) => {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="applicant-header">
                        <div className="columns is-variable is-5">
                            <div className="column">
                                <div className="box applicant-header">
                                    <p>Email: johndoe@gmail.com</p>
                                </div>
                            </div>
                            <div className="column is-narrow">
                                <div className="box applicant-header">
                                    <p>Year 2</p>
                                </div>
                            </div>
                            <div className="column is-narrow">
                                <div className="box applicant-header">
                                    <p>Major</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="box applicant-header">
                                    <p>Exposure to Launchpad</p>
                                </div>
                            </div>
                        </div>

                        <div className="columns is-variable is-5">
                            <div className="column">
                                <div className="box applicant-header">
                                    <p>Resume Link</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="box applicant-header">
                                    <p>Github Link</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="box applicant-header">
                                    <p>Website/Port.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="applicant-content">
                        <div className="box">
                            <p><strong>{props.applicantTextDescription}</strong></p>
                            <p>{props.applicantTextContent}</p>
                        </div>

                        <div className="box">
                            <p><strong>Which platforms have you worked with?</strong></p>
                            <p>iOS</p>
                        </div>

                        <div className="box">
                            <p><strong>Tell us about a technical project you've contributed to or built!</strong></p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus (THIS IS PRECISELY 200 WORDS)</p>
                        </div>

                        <div className="box">
                            <p><strong>Link to favourite project that you've contributed to or built.</strong></p>
                            <p>www.devpost.com/exampleproject</p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
}

export default ApplicantInfoContent;
