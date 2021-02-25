import React from 'react';
import './Modals.scss';
import SheetModalCard from './SheetModalCard';

interface ISheetModalProps {
    isActive: boolean;
    closeModal: (type: string, url: string, name: string) => void;
    name: string;
    url: string;
    type: string;
}

class SheetModal extends React.Component<ISheetModalProps> {
    private description = '';
    private title = '';

    setModal = (): void => {
        switch (this.props.type) {
            case 'Update':
                this.title = 'Update Sheet:';
                this.description = 'This will update applicants the linked to the selected Google Sheet:';
                break;
            case 'Delete':
                this.title = 'Delete Sheet:';
                this.description = 'This will delete the selected Google Sheet and all linked applicants:';
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
                                onClick={() => this.props.closeModal('Close', this.props.url, this.props.name)}
                            />
                            <header>
                                <h1 className="is-size-3 has-text-weight-bold">{this.title}</h1>
                                <p className="is-size-5 mt-4">{this.description}</p>
                            </header>
                            <div className="container py-5">
                                <SheetModalCard name={this.props.name} url={this.props.url} />
                            </div>
                            <section className="pb-1">
                                <p className="is-size-5">Are you sure?</p>

                                <button
                                    className="decision-button reject"
                                    onClick={() => this.props.closeModal('Close', this.props.url, this.props.name)}
                                >
                                    Actually, no...
                                </button>
                                <button
                                    className="decision-button accept"
                                    onClick={() =>
                                        this.props.closeModal(this.props.type, this.props.url, this.props.name)
                                    }
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

export default SheetModal;
