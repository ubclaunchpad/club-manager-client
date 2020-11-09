import React, { FunctionComponent } from 'react';

import './ApplicantInfo.scss';
import ApplicantInfoHeader from "./ApplicantInfoHeader";
import ApplicantViewerContentComponent from "./ApplicantViewerContentComponent";

interface IApplicantInfoContentProps {
    email: string;
    year: number;
    major: string;
    exposure: string;
    resume: string;
    github: string;
    website: string;
    interest: string;
    mainPlatform: string;
    allPlatforms: string;
    project: string;
    projectLink: string;
}

const ApplicantInfoContent: FunctionComponent<IApplicantInfoContentProps> = (props: IApplicantInfoContentProps) => {
        return (
            <React.Fragment>
                <div className="container">
                    <ApplicantInfoHeader email={props.email} year={props.year} major={props.major}
                                         exposure={props.exposure} resume={props.resume} github={props.github}
                                         website={props.website} />
                    <ApplicantViewerContentComponent interest={props.interest} mainPlatform={props.mainPlatform}
                                                     allPlatforms={props.allPlatforms} project={props.project}
                                                     projectLink={props.projectLink} />

                </div>
            </React.Fragment>
        );
}

export default ApplicantInfoContent;
