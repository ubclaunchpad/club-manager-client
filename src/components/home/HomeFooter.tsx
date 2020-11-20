import React, { FunctionComponent } from 'react';
import './HomeFooter.scss';
import FigmaIcon from '../../images/FigmaIcon.svg';

const HomeFooter: FunctionComponent = () => {
    return (
        <footer className="home-footer">
            <p>
                Made with{' '}
                <span role="img" aria-label="blue heart">
                    💙
                </span>{' '}
                using
            </p>
            <figure className="footer-icon">
                <img src={FigmaIcon} alt="Figma Icon" />
            </figure>
        </footer>
    );
};

export default HomeFooter;
