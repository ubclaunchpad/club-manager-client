import React from 'react';
import './Modals.scss';
import ModalApplicantCard from './ApplicantManagementModalCard';

interface IApplicantManagementModalProps {
    isActive: boolean;
    closeModal: (type: string, email: string) => void;
    name: string;
    role: string;
    type: string;
    email: string;
}

class ApplicantManagementModal extends React.Component<IApplicantManagementModalProps> {
    private description = '';
    private title = '';

    setModal = (): void => {
        switch (this.props.type) {
            case 'Move to Schedule':
                this.description = 'This will move the applicant to the "Schedule for Interview" Stage:';
                this.title = 'Move to Schedule for Interview';
                break;
            case 'Schedule':
                this.description = 'This will send a Calendly email to the applicant:';
                this.title = 'Schedule for Interview';
                break;
            case 'Reject-Screen':
                this.title = 'Reject Applicant:';
                this.description = 'This will move the applicant to Rejected:';
                break;
            case 'Email-Reject-Screen':
                this.title = 'Send Rejection Decision';
                this.description = 'This will move the applicant to Archived - Rejected:';
                break;
            case 'Reject-Final':
                this.title = 'Reject Applicant:';
                this.description = 'This will move the applicant to Final Decision - Rejected:';
                break;
            case 'Email-Reject-Final':
                this.description = 'This will move the applicant to Archived - Rejected:';
                this.title = 'Send Final Decision';
                break;
            case 'Accept':
                this.description = 'This will move the applicant to Final Decision - Accepted:';
                this.title = 'Accept Applicant';
                break;
            case 'Email-Accept':
                this.description = 'This will move the applicant to Archived - Accepted:';
                this.title = 'Send Final Decision';
                break;
        }
    };

    render(): React.ReactNode {
        return (
            <div>
                <div className={`modal ${this.props.isActive ? 'is-active' : ''}`}>
                    {this.setModal()}
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <section className="modal-card-body py-5">
                            <button
                                className="delete close-button"
                                aria-label="close"
                                onClick={() => this.props.closeModal('Close', this.props.email)}
                            />
                            <header>
                                <h1 className="is-size-3 has-text-weight-bold">{this.title}</h1>
                                <p className="is-size-5 mt-4">{this.description}</p>
                            </header>
                            <ModalApplicantCard name={this.props.name} role={this.props.role} />
                            <section className="pb-1">
                                <p className="is-size-5">This action cannot be undone. Are you sure?</p>

                                <button
                                    className="decision-button reject"
                                    onClick={() => this.props.closeModal(this.props.type, this.props.email)}
                                >
                                    Actually, no...
                                </button>
                                <button
                                    className="decision-button accept"
                                    onClick={() => this.props.closeModal(this.props.type, this.props.email)}
                                >
                                    Yes, I´m sure.
                                </button>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplicantManagementModal;
