import React, { FunctionComponent } from 'react';

interface IApplicantViewerContentComponentProps {
    heading: string;
    description: string;
}

const ApplicantViewerContentComponent: FunctionComponent<IApplicantViewerContentComponentProps> = (props: IApplicantViewerContentComponentProps) => {
    return (
        <div className="box">
            <p>
                <strong>{props.heading}</strong>
            </p>
            <p>{props.description}</p>
        </div>
    );
}

export default ApplicantViewerContentComponent;
