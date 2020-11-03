import React from 'react';
import './Modals.css';
import ModalApplicantCard from './ModalApplicantCard';

interface IScheduleModalProps {
    isActive: boolean;
    closeModal: () => void;
    name: string;
    position: string;
}

class ScheduleModal extends React.Component<IScheduleModalProps> {
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
                                <h1 className="is-size-3 has-text-weight-bold">Schedule for Interview</h1>
                                <p className="is-size-5 mt-4">This will send a Calendly email to the applicant:</p>
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

export default ScheduleModal;
