import React from 'react';

interface IScoringFormOptionProps {
    name: string;
    text: string;
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
            <div className="field columns">
                <div className="column is-10">
                    <label className="is-size-6 mt-6">{this.props.text}</label>
                </div>
                <div className="column is-2 px-5">
                    <input className="input" type="number" placeholder="#" name={this.props.name} />
                </div>
            </div>
        );
    }
}

export default ScoringFormOption;
