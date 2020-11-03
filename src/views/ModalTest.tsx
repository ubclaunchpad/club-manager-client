import React from 'react';
import ScheduleModal from '../components/ScheduleModal';

class ModalTest extends React.Component {
    state = { isActive: false };

    toggleIsActive = (): void => {
        this.setState({ isActive: !this.state.isActive });
    };

    render(): React.ReactNode {
        return (
            <div>
                <ScheduleModal
                    name="Lorem ipsum"
                    position="Developer"
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
