import React, { ReactNode } from 'react';
import axios from 'axios';
import './Options.scss';
import SheetListCard from './SheetListCard';
import SheetModal from '../modals/SheetModal';
import ErrorModal from '../modals/ErrorModal';

class OptionsComponent extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
            showErrorModal: false,
            url: '',
            name: '',
            sheets: [],
            type: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        this.getSheets();
    }

    // Gets all the sheets from the database to display
    getSheets = () => {
        axios
            .get(`http://localhost:4000/sheets`, { withCredentials: true })
            .then((res) => {
                this.setState({ sheets: res.data });
            })
            .catch((err) => {
                console.log(err);
                this.setState({ sheets: [] });
            });
    };

    // Updates state from the text inputs
    handleChange = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {
        event.preventDefault();
        if (type === 'url') this.setState({ url: event.target.value });
        else this.setState({ name: event.target.value });
    };

    // Sends a POST request to import the inputted sheet
    handleSubmit = (event: React.MouseEvent) => {
        event.preventDefault();

        const sheet = {
            url: this.state.url,
            name: this.state.name,
        };

        axios
            .post(`http://localhost:4000/sheets`, sheet, { withCredentials: true })
            .then(() => {
                this.getSheets();
            })
            .catch((err) => {
                if (err.toString().match('.4+.')) {
                    this.setState({ showErrorModal: true, type: 'Added' });
                } else {
                    this.setState({ showErrorModal: true, type: 'Error' });
                }
            });

        this.setState({ url: '', name: '' });
    };

    handleCancel = (event: React.MouseEvent) => {
        event.preventDefault();
        this.setState({ url: '', name: '' });
    };

    // Shows the update or delete sheet modal
    showModal = (name: string, url: string, type: string): void => {
        this.setState({ showModal: true, sheetName: name, sheetURL: url, type: type });
    };

    // Closes the update or delete sheet modal and updates database if needed
    closeModal = (type: string, url: string, name: string): void => {
        this.setState({ showModal: false });
        if (type === 'Close') return;

        if (type === 'Update') {
            const sheet = {
                url: url,
                name: name,
            };

            axios
                .patch(`http://localhost:4000/sheets`, sheet, { withCredentials: true })
                .then(() => {
                    this.getSheets();
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (type === 'Delete') {
            const sheet = {
                url: url,
                name: name,
            };

            axios
                .delete(`http://localhost:4000/sheets`, { data: sheet, withCredentials: true })
                .then(() => {
                    this.getSheets();
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    // Shows an error modal
    showError = (type: string): void => {
        this.setState({ showErrorModal: true, type: type });
    };

    // Closes the error modal
    closeError = () => {
        this.setState({ showErrorModal: false });
    };

    render(): ReactNode {
        return (
            <div className="section options">
                <h1>Import Google Sheet</h1>
                <div className="sheets-import">
                    <div className="columns">
                        <div className="column field is-one-third">
                            <label className="subTitle">Sheet Name</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Sheet Name"
                                    onChange={(e) => this.handleChange(e, 'name')}
                                    value={this.state.name}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-file-signature" />
                                </span>
                            </div>
                        </div>
                        <div className="column field is-two-thirds">
                            <label className="subTitle">Sheet Link</label>
                            <div className="control has-icons-left">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Sheet Link"
                                    onChange={(e) => this.handleChange(e, 'url')}
                                    value={this.state.url}
                                />
                                <span className="icon is-small is-left">
                                    <i className="fas fa-link" />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button import-button" onClick={this.handleSubmit}>
                                Import
                            </button>
                        </div>
                        <div className="control">
                            <button className="button cancel-button" onClick={this.handleCancel}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <h1>Imported Sheets</h1>
                <div className="sheets-table">
                    <table className="table is-fullwidth">
                        <thead>
                            <tr>
                                <th className="has-text-left " />
                                <th className="has-text-centered date-header">Last Updated</th>
                                <th className="has-text-centered date-header">Date Imported</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sheets.map((sheet: any) => (
                                <tr key={sheet.id}>
                                    <td>
                                        <SheetListCard
                                            {...sheet}
                                            setModalAndType={(type: string) => {
                                                this.showModal(sheet.sheetName, sheet.sheetURL, type);
                                            }}
                                        />
                                    </td>
                                    <td className="has-text-centered date-row">{sheet.dateUpdated}</td>
                                    <td className="has-text-centered date-row">{sheet.dateAdded}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div>
                    <SheetModal
                        type={this.state.type}
                        name={this.state.sheetName}
                        url={this.state.sheetURL}
                        closeModal={(type, url, name) => this.closeModal(type, url, name)}
                        isActive={this.state.showModal}
                    />
                </div>
                <div>
                    <ErrorModal
                        type={this.state.type}
                        closeModal={() => this.closeError()}
                        isActive={this.state.showErrorModal}
                    />
                </div>
            </div>
        );
    }
}
export default OptionsComponent;
