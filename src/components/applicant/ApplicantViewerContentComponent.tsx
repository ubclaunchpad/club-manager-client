import React from 'react';

class ApplicantViewerContentComponent extends React.Component<{
    interest: string;
    mainPlatform: string;
    allPlatforms: string;
    project: string;
    projectLink: string;
}> {
    render(): React.ReactNode {
        return (
            <div className="applicant-content">
                <div className="box">
                    <p>
                        <strong>Why are you interested in joining Launch Pad? (~200 words)</strong>
                    </p>
                    <p>{this.props.interest}</p>
                </div>

                <div className="box">
                    <p>
                        <strong>Which platforms are you most experienced with?</strong>
                    </p>
                    <p>{this.props.mainPlatform}</p>
                </div>

                <div className="box">
                    <p>
                        <strong>Which platforms have you worked with?</strong>
                    </p>
                    <p>{this.props.allPlatforms}</p>
                </div>

                <div className="box">
                    <p>
                        <strong>Tell us about a technical project you&apos;ve contributed to or built!</strong>
                    </p>
                    <p>{this.props.project}</p>
                </div>

                <div className="box">
                    <p>
                        <strong>Link to favourite project that you&apos;ve contributed to or built.</strong>
                    </p>
                    <p>{this.props.projectLink}</p>
                </div>
            </div>
        );
    }
}

export default ApplicantViewerContentComponent;
