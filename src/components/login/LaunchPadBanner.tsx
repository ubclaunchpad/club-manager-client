import React from 'react';
import LaunchPadIcon from '../../images/LaunchPadIcon.png';
import './LaunchPadBanner.scss';

class LaunchPadBanner extends React.Component {
    render(): React.ReactNode {
        return (
            <div>
                <div className="media banner">
                    <div className="media-left">
                        <figure className="image is-48x48 icon">
                            <img src={LaunchPadIcon} alt="LaunchPad Icon" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p>
                            <b>UBC Launch Pad</b>
                        </p>
                        <p>Student Club</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default LaunchPadBanner;
