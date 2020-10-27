import React from 'react';

interface IModalProps {
    isActive: boolean;
    onClick: () => void;
}

class Modal extends React.Component<IModalProps> {
    constructor(props: IModalProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className={`modal ${this.props.isActive ? 'is-active' : ''}`}>
                    <div className="modal-background"></div>
                    <div className="modal-card">
                        <header className="modal-card-head">
                            <p className="modal-card-title">Modal Card</p>
                            <button className="delete" aria-label="close" onClick={this.props.onClick}></button>
                        </header>
                        <section className="modal-card-body"></section>
                        <footer className="modal-card-foot">
                            <button className="button is-danger is-outlined" onClick={this.props.onClick}>
                                Close
                            </button>
                        </footer>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
