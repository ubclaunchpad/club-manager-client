import React from 'react';
import LaunchPadIcon from '../../images/LaunchPadIcon.png';

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
                        <p className="is-size-6">UBC Launch Pad</p>
                        <p className="is-size-6 has-text-weight-light">Student Club</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default LaunchPadBanner;
