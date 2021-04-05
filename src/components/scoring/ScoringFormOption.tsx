import React from 'react';

interface IScoringFormOptionProps {
    name: string;
    text: string;
    numOptions: number;
    options?: string[];
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

    getFourthOption = () => {
        if (this.props.numOptions >= 4) {
            return (
                <label className="column mt-4 radio">
                    <input
                        type="radio"
                        value={this.props.options ? this.props.options[3] : '3'}
                        name={this.props.name}
                        className="mr-2"
                        onChange={this.props.handleCriteriaChange}
                        required
                    />
                    {this.props.options ? this.props.options[3] : '3'}
                </label>
            );
        }
    };
    getFifthOption = () => {
        if (this.props.numOptions >= 5) {
            return (
                <label className="column mt-4 radio">
                    <input
                        type="radio"
                        value={this.props.options ? this.props.options[4] : '4'}
                        name={this.props.name}
                        className="mr-2"
                        onChange={this.props.handleCriteriaChange}
                        required
                    />
                    {this.props.options ? this.props.options[4] : '4'}
                </label>
            );
        }
    };

    render(): React.ReactNode {
        return (
            <div className="field scoring-field">
                <label className="is-size-6">{this.props.text}</label>
                <div className="control">
                    <div className="columns">
                        <label className="column mt-4 radio">
                            <input
                                type="radio"
                                value={this.props.options ? this.props.options[0] : '0'}
                                name={this.props.name}
                                className="mr-2"
                                onChange={this.props.handleCriteriaChange}
                                required
                            />
                            {this.props.options ? this.props.options[0] : '0'}
                        </label>
                        <label className=" column mt-4  radio ">
                            <input
                                type="radio"
                                value={this.props.options ? this.props.options[1] : '1'}
                                name={this.props.name}
                                className="mr-2"
                                onChange={this.props.handleCriteriaChange}
                            />
                            {this.props.options ? this.props.options[1] : '1'}
                        </label>
                        <label className=" column mt-4  radio ">
                            <input
                                type="radio"
                                value={this.props.options ? this.props.options[2] : '2'}
                                name={this.props.name}
                                className="mr-2"
                                onChange={this.props.handleCriteriaChange}
                            />
                            {this.props.options ? this.props.options[2] : '2'}
                        </label>
                        {this.getFourthOption()}
                        {this.getFifthOption()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ScoringFormOption;
