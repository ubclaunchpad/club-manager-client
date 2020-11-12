import React, { Component } from 'react';

import './ApplicantInfo.scss';
import ApplicantViewerContentComponent from './ApplicantViewerContentComponent';

interface IApplicantInfoContentProps {
    headings: string[];
    descriptions: string[];
}

class ApplicantInfoContent extends Component<IApplicantInfoContentProps> {
    private contents: any[];

    constructor(props: IApplicantInfoContentProps) {
        super(props);
        this.contents = this.props.headings.map((val, idx) => ({
            heading: val,
            description: this.props.descriptions[idx],
        }));
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="applicant-content">
                        {this.contents.map((elem, index) => (
                            <ApplicantViewerContentComponent {...elem} key={index} />
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ApplicantInfoContent;
