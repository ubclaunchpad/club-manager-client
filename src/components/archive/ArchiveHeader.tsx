import React from 'react';
import './ArchiveHeader.scss';

class ArchiveHeader extends React.Component<{
    stage: string;
    viewAccepted: () => void;
    viewRejected: () => void;
    acceptedCount: number;
    rejectedCount: number;
}> {
    render(): React.ReactNode {
        return (
            <div>
                <div className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <button
                                className={`button is-rounded ${
                                    this.props.stage === 'Accepted' ? 'dark-button' : 'button'
                                }`}
                                onClick={this.props.viewAccepted}
                            >
                                Accepted Applicants ({this.props.acceptedCount})
                            </button>
                        </div>
                        <div className="level-item">
                            <button
                                className={`button is-rounded ${
                                    this.props.stage === 'Rejected' ? 'dark-button' : 'button'
                                }`}
                                onClick={this.props.viewRejected}
                            >
                                Rejected Applicants ({this.props.rejectedCount})
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArchiveHeader;
