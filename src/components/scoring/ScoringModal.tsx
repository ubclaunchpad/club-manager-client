import React from 'react';

import './ScoringModal.scss';
interface IModalProps {
    applicantName: string;
    isActive: boolean;
    closeModal: () => void;
    confirmSubmit: () => void;
}

class ScoringModal extends React.Component<IModalProps> {
    render(): React.ReactNode {
        return (
            <div>
                <div className={`modal ${this.props.isActive ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <section className="modal-card-body">
                            <p className="header">
                                {this.props.applicantName} will be moved to &quot;Applicant Reviewed&quot; Stage
                            </p>
                            <p className="reconfirmation">
                                This action <b>cannot</b> be undone. Are you sure?
                            </p>
                            <button className=" button reject-button" onClick={this.props.closeModal}>
                                Actualy No...
                            </button>
                            <button className="button confirmation-button" onClick={this.props.confirmSubmit}>
                                Yes, I&apos;m sure;
                            </button>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScoringModal;
