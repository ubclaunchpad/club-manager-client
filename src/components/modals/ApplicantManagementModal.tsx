import React from 'react';
import './Modals.scss';
import ModalApplicantCard from './ApplicantManagementModalCard';

interface IApplicantManagementModalProps {
    isActive: boolean;
    closeModal: () => void;
    name: string;
    position: string;
    type: string;
}

class ApplicantManagementModal extends React.Component<IApplicantManagementModalProps> {
    private description: string;
    private title: string;

    constructor(props: IApplicantManagementModalProps) {
        super(props);
        switch (this.props.type) {
            case 'Schedule':
                this.description = 'This will send a Calendly email to the applicant:';
                this.title = 'Schedule for Interview';
                break;
            case 'Reject':
                this.title = 'Reject Applicant:';
                this.description = 'This will send a rejection email to the applicant:';
                break;
            default:
                this.description = 'This will send an offer to the applicant:';
                this.title = 'Accept Applicant';
                break;
        }
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className={`modal ${this.props.isActive ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <section className="modal-card-body py-5">
                            <button
                                className="delete close-button"
                                aria-label="close"
                                onClick={this.props.closeModal}
                            />
                            <header>
                                <h1 className="is-size-3 has-text-weight-bold">{this.title}</h1>
                                <p className="is-size-5 mt-4">{this.description}</p>
                            </header>
                            <ModalApplicantCard name={this.props.name} position={this.props.position} />
                            <section className="pb-1">
                                <p className="is-size-5">This action cannot be undone. Are you sure?</p>

                                <button className="decision-button reject" onClick={this.props.closeModal}>
                                    Actually, no...
                                </button>
                                <button className="decision-button accept">Yes, I´m sure.</button>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default ApplicantManagementModal;
