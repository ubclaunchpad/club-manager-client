import React from 'react';

type Props = { isActive: boolean; onClick: () => void };

class Modal extends React.Component<Props> {
    render() {
        const isActive = this.props.isActive;
        return (
            <div>
                <div className={`modal ${isActive ? 'is-active' : null}`}>
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
