import React from 'react';
import ApplicantManagementModal from '../components/modals/ApplicantManagementModal';

class ModalTest extends React.Component {
    state = { isActive: false };

    toggleIsActive = (): void => {
        this.setState({ isActive: !this.state.isActive });
    };

    render(): React.ReactNode {
        return (
            <div>
                <ApplicantManagementModal
                    type="Reject"
                    name="Lorem ipsum"
                    position="Designer"
                    closeModal={this.toggleIsActive}
                    isActive={this.state.isActive}
                />
                <button className="button " onClick={this.toggleIsActive}>
                    Open Modal
                </button>
            </div>
        );
    }
}

export default ModalTest;
