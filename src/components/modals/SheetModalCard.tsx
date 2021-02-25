import React from 'react';
import './Modals.scss';

interface ISheetCardProps {
    name: string;
    url: string;
}

class SheetModalCard extends React.Component<ISheetCardProps> {
    render(): React.ReactNode {
        return (
            <div>
                <div className="columns sheet">
                    <div className="column has-text-left">
                        <p className="is-size-5 has-text-weight-medium">{this.props.name}</p>
                        <p className="is-size-6 has-text-weight-light">{this.props.url}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default SheetModalCard;
