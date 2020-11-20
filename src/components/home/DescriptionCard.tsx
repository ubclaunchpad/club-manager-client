import React, { FunctionComponent } from 'react';
import './DescriptionCard.scss';
import GearIcon from '../../images/GearIcon.svg';

interface IDescriptionCardProps {
    title: string;
    text: string;
}

const DescriptionCard: FunctionComponent<IDescriptionCardProps> = (props: IDescriptionCardProps) => {
    return (
        <div className="column is-half">
            <div className="description-card media">
                <div className="media-left">
                    <figure className=" gear-image">
                        <img src={GearIcon} alt="Gear Icon" />
                    </figure>
                </div>
                <div className="description-card-content">
                    <p className="title">{props.title}</p>
                    <p className="text">{props.text}</p>
                </div>
            </div>
        </div>
    );
};
export default DescriptionCard;
