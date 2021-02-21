import React from 'react';
import './Modals.scss';

interface IErrorModalProps {
    isActive: boolean;
    closeModal: () => void;
    type: string;
}

class ErrorModal extends React.Component<IErrorModalProps> {
    private description = '';

    setModal = (): void => {
        switch (this.props.type) {
            case 'Added':
                this.description = 'This Google Sheet has already been imported. Please update from the list below.';
                break;
            default:
                this.description =
                    'There was an error importing this Google Sheet. Please verify your input and access to the sheet, and then try again.';
                break;
        }
    };

    render(): React.ReactNode {
        return (
            <div>
                <div className={`modal ${this.props.isActive ? 'is-active' : ''}`}>
                    {this.setModal()}
                    <div className="modal-background" />
                    <div className="modal-card">
                        <section className="modal-card-body py-5">
                            <button
                                className="delete close-button"
                                aria-label="close"
                                onClick={() => this.props.closeModal()}
                            />
                            <header>
                                <h1 className="is-size-3 has-text-weight-bold has-text-left mt-4">Error</h1>
                                <p className="is-size-5 mt-4">{this.description}</p>
                            </header>
                            <section className="pb-1">
                                <button className="decision-button accept" onClick={() => this.props.closeModal()}>
                                    Ok
                                </button>
                            </section>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default ErrorModal;
