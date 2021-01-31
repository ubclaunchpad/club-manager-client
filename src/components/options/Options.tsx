import React, { ReactNode } from 'react';
import axios from 'axios';
import './Options.scss';

class OptionsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            value: '',
            message: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value });
        event.preventDefault();
    }

    handleSubmit(event: any) {
        event.preventDefault();

        const sheet = {
            url: this.state.value,
            name: 'Sheet1',
            email: 'placeholder',
            key: 'placeholder',
        };

        axios
            .post(`http://localhost:4000/sheets`, sheet)
            .then((res) => {
                console.log('Here are the imported applicants');
                console.log(res.data);
                this.setState({ message: 'Check the console for the imported applicants' });
            })
            .catch(() => {
                this.setState({ message: 'Unable to import applicants from Google Sheet' });
            });

        this.setState({ value: '' });
    }

    handleCancel(event: any) {
        this.setState({ value: '' });
        event.preventDefault();
    }

    render(): ReactNode {
        return (
            <div className="section options">
                <h1>Options</h1>

                <div className="sheets-import">
                    <div className="field">
                        <label className="subTitle">Google Sheets Import</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="Your Google Sheets Link"
                                onChange={this.handleChange}
                                value={this.state.value}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-file-import" />
                            </span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" onClick={this.handleSubmit}>
                                Import
                            </button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={this.handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <p>{this.state.message}</p>
            </div>
        );
    }
}
export default OptionsComponent;
