import React, { FunctionComponent } from 'react';
import './FeaturesSection.scss';
import './FeatureCard';
import FeatureCard from './FeatureCard';
import SheetsIcon from '../../images/SheetsIcon.svg';
import GmailIcon from '../../images/GmailIcon.svg';
import ApplicantDataIcon from '../../images/ApplicantDataIcon.svg';

const FeaturesSection: FunctionComponent = () => {
    return (
        <section className="features-section">
            <p className="slogan">Simple. Integrated. Fast.</p>
            <h1 className="title mt-3">Features You&apos;ll Love</h1>
            <div className="columns">
                <FeatureCard title="Google Sheets Integration" text="No need for manual inputs." imgSrc={SheetsIcon} />
                <FeatureCard title="Email Automation" text="Only one-click away." imgSrc={GmailIcon} />
                <FeatureCard
                    title="View Applicants' Data"
                    text="All in a single streamlined page."
                    imgSrc={ApplicantDataIcon}
                />
            </div>
        </section>
    );
};
export default FeaturesSection;
