import React, { FunctionComponent } from 'react';
import './SheetListCard.scss';

interface ISheetListCardProps {
    sheetName: string;
    sheetURL: string;
    setModalAndType: (type: string) => void;
}

const SheetListCard: FunctionComponent<ISheetListCardProps> = (props: ISheetListCardProps) => {
    return (
        <div className="container is-fluid sheet-list-card">
            <div className="columns">
                <div className="column is-10">
                    <div className="container">
                        <p className="sheet-list-card-name">{props.sheetName}</p>
                        <p className="sheet-list-card-url">{props.sheetURL}</p>
                    </div>
                </div>
                <div className="column is-2 buttons-div">
                    <div className="buttons">
                        <button className="button button-update" onClick={() => props.setModalAndType('Update')}>
                            <i className="fas fa-sync-alt"/>
                        </button>
                        <button className="button button-delete" onClick={() => props.setModalAndType('Delete')}>
                            <i className="fas fa-trash-alt"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SheetListCard;
