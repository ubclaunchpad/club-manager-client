import React, { FunctionComponent } from 'react';
import './DescriptionSection.scss';
import './DescriptionCard';
import DescriptionCard from './DescriptionCard';

const DescriptionSection: FunctionComponent = () => {
    return (
        <section className="description-section">
            <p className="slogan">Recruiting. Made Simple.</p>
            <h1 className="title mt-3">What is Club Manager?</h1>
            <div className="columns">
                <DescriptionCard
                    title="OVERVIEW"
                    text="An internal tool that aims to assist club execs on recruiting applicants."
                />
                <DescriptionCard
                    title="WHY DO WE MAKE THIS?"
                    text="Research has shown that recruiting takes time- too much time, in fact."
                />
            </div>
        </section>
    );
};
export default DescriptionSection;
