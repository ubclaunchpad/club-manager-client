import React from 'react';
import Modal from '../components/Modal';

class ModalTest extends React.Component {
    state = { isActive: false };

    toggleIsActive = (): void => {
        this.setState({ isActive: !this.state.isActive });
    };

    render(): React.ReactNode {
        return (
            <div>
                <Modal onClick={this.toggleIsActive} isActive={this.state.isActive} />
                <button className="button " onClick={this.toggleIsActive}>
                    Open Modal
                </button>
            </div>
        );
    }
}

export default ModalTest;
