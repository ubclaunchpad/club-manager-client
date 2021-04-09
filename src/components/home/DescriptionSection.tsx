import React, { FunctionComponent } from 'react';
import './DescriptionSection.scss';

import HomeDescription1 from '../../images/home/description/HomeDescription1.svg';
import HomeDescription2 from '../../images/home/description/HomeDescription2.svg';
import HomeDescription3 from '../../images/home/description/HomeDescription3.svg';

const DescriptionList = [
    {
        image: HomeDescription1,
        header: 'Say Goodbye to exhausting recruiting process.',
        text:
            'Recruiting is an intricate process that takes so much time and effort. Hireflow is here to make it less exhaustive, while still retaining the virtue that we hold the most: humanity.',
    },
    {
        image: HomeDescription2,
        header: 'With scoring systems and multiple stages',
        text:
            'Hireflow utilizes a fair, objective process for applicants that evaluates skills. Moreover, our implementation ensures that judging errors are less likely to happen and that you can recruit the most suitable applicants.',
    },
    {
        image: HomeDescription3,
        header: 'Super quick. Super simple. Good riddance, spreadsheets.',
        text:
            'Hireflow eliminates the need for multiple spreadsheets and data points. Evaluate applicants, schedule interviews, and send emails all through hireflow with our simple to use interface.',
    },
];

const DescriptionSection: FunctionComponent = () => {
    return (
        <section className="description-section">
            <p className="warning">
                *Product is currently in limited <b>BETA</b> and is only available <br />
                for use within UBC Launch Pad
            </p>

            <div className="columns is-multiline">
                <div className="column is-half ">
                    <img src={DescriptionList[0].image} alt="" />
                </div>
                <div className="column is-half">
                    <div className="description">
                        <p>
                            <span className="description-header">{DescriptionList[0].header}</span>
                            <br />
                            <br />
                            <span className="description-text">{DescriptionList[0].text}</span>
                        </p>
                    </div>
                </div>
                <div className="column is-half">
                    <div className="description">
                        <p>
                            <span className="description-header">{DescriptionList[1].header}</span>
                            <br />
                            <br />
                            <span className="description-text">{DescriptionList[1].text}</span>
                        </p>
                    </div>
                </div>
                <div className="column is-half ">
                    <img src={DescriptionList[1].image} alt="" />
                </div>
                <div className="column is-half ">
                    <img src={DescriptionList[2].image} alt="" />
                </div>
                <div className="column is-half">
                    <div className="description">
                        <p>
                            <span className="description-header">{DescriptionList[2].header}</span>
                            <br />
                            <br />
                            <span className="description-text">{DescriptionList[2].text}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default DescriptionSection;
