import React from 'react';

import ScoringFormOption from './ScoringFormOption';

import './ScoringForm.scss';

const criteriaList = [
    {
        name: 'C1',
        text: 'C1:Willingness to lern(self-drive/are yout aking time out of class to create projects?)',
    },
    {
        name: 'C2',
        text:
            'C2: Passion and interest(eg. comprehensiveness of answer to "tell us about a project", even if not technically competent)',
    },
    {
        name: 'C3',
        text: 'C3: Rate how many useful softwares they know how to use',
    },
    {
        name: 'C4',
        text: ' C4:Rate how comprehensive their portifolio is (do they have personal projects or cases?)',
    },
];

class ScoringForm extends React.Component {
    render(): React.ReactNode {
        return (
            <form className="scoring-form">
                {criteriaList.map((criteria) => (
                    <ScoringFormOption name={criteria.name} key={criteria.name} text={criteria.text} />
                ))}
                <div className="field p-2">
                    <label>Experience Level:</label>
                    <div className="control">
                        <label className="radio mt-3 mr-3">
                            <input type="radio" value="biginner" name="experience" className="radio-icon" />
                            Beginner
                        </label>
                        <label className="radio mt-3 mr-3">
                            <input type="radio" value="intermediate" name="experience" />
                            Intermediate
                        </label>
                        <label className="radio mt-3 mr-3">
                            <input type="radio" value="advanced" name="experience" />
                            Advanced
                        </label>
                    </div>
                </div>
                <input type="submit" className="button submit-button" value="Submit Review" />
            </form>
        );
    }
}

export default ScoringForm;
