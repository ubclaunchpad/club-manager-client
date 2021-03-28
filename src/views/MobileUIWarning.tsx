import React, { useEffect, useState } from 'react';
import './MobileUIWarning.scss';

const MobileUIWarning: React.FunctionComponent = () => {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth);
        });
    });

    return (
        <div className={windowWidth < 1024 ? 'mobile-ui-warning modal is-active' : 'mobile-ui-warning modal'}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="notification">
                    <h1>Sorry!</h1>
                    <p>Hireflow currently does not support mobile UI, but it&apos;s coming soon!</p>
                </div>
            </div>
        </div>
    );
};

export default MobileUIWarning;
