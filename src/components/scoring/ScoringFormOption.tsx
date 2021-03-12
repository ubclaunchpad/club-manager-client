import React from 'react';

interface IScoringFormOptionProps {
    name: string;
    text: string;
    handleCriteriaChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class ScoringFormOption extends React.Component<IScoringFormOptionProps> {
    constructor(props: IScoringFormOptionProps) {
        super(props);
        this.state = {
            name: '',
            text: '',
        };
    }
    render(): React.ReactNode {
        return (
            <div className="field scoring-field">
                <label className="is-size-6">{this.props.text}</label>
                <div className="control">
                    <div className="columns">
                        <label className="column mt-4 radio">
                            <input
                                type="radio"
                                value="0"
                                name={this.props.name}
                                className="mr-2"
                                onChange={this.props.handleCriteriaChange}
                                required
                            />
                            0
                        </label>
                        <label className=" column mt-4  radio ">
                            <input
                                type="radio"
                                value="1"
                                name={this.props.name}
                                className="mr-2"
                                onChange={this.props.handleCriteriaChange}
                            />
                            1
                        </label>
                        <label className=" column mt-4  radio ">
                            <input
                                type="radio"
                                value="2"
                                name={this.props.name}
                                className="mr-2"
                                onChange={this.props.handleCriteriaChange}
                            />
                            2
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}

export default ScoringFormOption;
