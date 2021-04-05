import React from 'react';

import ScoringFormOption from './ScoringFormOption';

import './ScoringForm.scss';

const criteriaList = [
    {
        name: 'C1',
        text: 'Willingness to lern(self-drive/are you taking time out of class to create projects?)',
    },
    {
        name: 'C2',
        text:
            'Passion and interest(eg. comprehensiveness of answer to "tell us about a project", even if not technically competent)',
    },
    {
        name: 'C3',
        text: "Rate the best of the provided items from the OR/AND's from the relevant skill bucket they fall in",
    },
];

interface IScoringFormProps {
    handleCriteriaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    openScoringModal: () => void;
}

class ScoringForm extends React.Component<IScoringFormProps> {
    constructor(props: IScoringFormProps) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        this.props.openScoringModal();
        return;
    };

    render(): React.ReactNode {
        return (
            <form onSubmit={this.handleSubmit}>
                {criteriaList.map((criteria) => (
                    <ScoringFormOption
                        name={criteria.name}
                        key={criteria.name}
                        text={criteria.text}
                        handleCriteriaChange={this.props.handleCriteriaChange}
                    />
                ))}
                <div className="field scoring-field">
                    <label>Experience Level:</label>
                    <div className="control">
                        <div className="columns">
                            <label className=" column radio mt-3 ">
                                <input
                                    type="radio"
                                    value="Beginner"
                                    name="experience"
                                    className="mr-2 "
                                    onChange={this.props.handleCriteriaChange}
                                    required
                                />
                                Beginner
                            </label>
                            <label className=" column radio mt-3 ">
                                <input
                                    type="radio"
                                    value="Independent"
                                    name="experience"
                                    className="mr-2"
                                    onChange={this.props.handleCriteriaChange}
                                />
                                Independent
                            </label>
                            <label className=" column radio mt-3 ">
                                <input
                                    type="radio"
                                    value="Experienced"
                                    name="experience"
                                    className="mr-2"
                                    onChange={this.props.handleCriteriaChange}
                                />
                                Experienced
                            </label>
                        </div>
                    </div>
                </div>
                <input type="submit" className="button submit-button" value="Submit >" />
            </form>
        );
    }
}

export default ScoringForm;
