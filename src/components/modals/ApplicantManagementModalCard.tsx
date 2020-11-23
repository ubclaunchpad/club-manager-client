import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCode, faPaintBrush, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IModalApplicantCardProps {
    name: string;
    role: string;
}

class ModalApplicantCard extends React.Component<IModalApplicantCardProps> {
    setIcon = (): IconDefinition => {
        let icon = faUserTie;

        switch (this.props.role) {
            case 'Designer':
                icon = faPaintBrush;
                break;
            case 'Developer':
                icon = faCode;
                break;
            default:
                icon = faUserTie;
        }

        return icon;
    };

    render(): React.ReactNode {
        return (
            <div>
                <div className="columns has-text-left my-6">
                    <div className="column is-2 is-offset-3">
                        <FontAwesomeIcon icon={this.setIcon()} size="3x" pull="right" />
                    </div>
                    <div className="column">
                        <p className="is-size-5 has-text-weight-medium">{this.props.name}</p>
                        <p className="is-size-6 has-text-weight-light">{this.props.role}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ModalApplicantCard;
