import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCode, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IModalApplicantCardProps {
    name: string;
    position: string;
}

class ModalApplicantCard extends React.Component<IModalApplicantCardProps> {
    private icon: IconDefinition;

    constructor(props: IModalApplicantCardProps) {
        super(props);
        this.icon = this.props.position === 'Designer' ? faPaintBrush : faCode;
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className="columns has-text-left my-6">
                    <div className="column is-2 is-offset-3">
                        <FontAwesomeIcon icon={this.icon} size="3x" pull="right" />
                    </div>
                    <div className="column">
                        <p className="is-size-5 has-text-weight-medium">{this.props.name}</p>
                        <p className="is-size-6 has-text-weight-light">{this.props.position}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalApplicantCard;
