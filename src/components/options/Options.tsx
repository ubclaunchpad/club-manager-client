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
            .get(`http://localhost:4000/sheets`)
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
            email: 'sheets-test@club-manager-test.iam.gserviceaccount.com',
            key:
                '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDEVphTfXThiQCP\nHb++fo2P03/ZP4XHDxKSim91aZ9fg0UEARVLQCyM/+y9dSpomMy1coEif/z/Fxm6\nAJ8kT4GeXEqUQMQruvb3+DeT5rjWGWvLCP3x135wdgX5XYBsZ3Dw0zWDJyn0lADh\nwOPDcXLUxmNmoR1jdx9banZhHrDgxbih5C6Z9uuLp+W6sTQ5Jeu4ohfyK5GIZxWz\nHtfMc6Bz01ty4n7dm9G/PC4zxbgJx492Ap0y74QTFSAPrl2gmjriQ6c6VUoyyfCF\nrTBCYJ6WxqOr9LyHQwLkhKWT0Ywhwdt0TXU9COAZ0s4TNugtufDk/l+sAiVN203b\nzKzE5ROxAgMBAAECggEAAbckHnRAhhA5jZ5Bz1sU459S6u4cL+x0At2IZrqCs5ZW\nnVyQUgb0eSLAU1r87hbMasZ2E47w7xTiEYxU4RnRUp4Q2L6Z5TWLo7xTJxixjLpc\nbWfF91VUShGfGRLzd7Mll4pkbI6zx+Ewyau1UbpYUU+9+iR2OK27r/Vfy2dbwsgB\nvsz0NmNfUGdUKCJHodZ/64MPy7o2r0x0rSKMYMLjU0BvwIMpYyMIPhRWRfX+9U5S\nLlohAG5a8Qdz2B8vQjt6TCxAr7F6z1hVzO3GFZrjkFym5HF6dIum+kwnlFwps6w2\nzXYwGnUySLrb0qlXUoOsKZVz/JP2IlnQRt21EQ85QQKBgQD3cXaOZ6UrfQ/MsX/0\nBE5NeqEi2vRAjghMn+kcc0E1qJubFIziKjK9AK7KKvvqecIfq817NPLb4v+atpo7\nIeW4x2mbquRcO16T1AuFAQSE2jjYUZXlYSNj89EDD70n2my3mvsRUUEsdcysfON1\nErzgC29AWF/IgIHXgLRzwetR3QKBgQDLILdB1xmdx+57s7gUCn3xug3q99lxJ5iN\nz8w0Z4A0hITD2iaHzXPB6qvEgWpHJt0QTwDlohMgWWeG/tYmf3f/P1VSlsCNKK7w\noO6LvXJ+0MqqvToK1cPVPh8XMQDKnqKnoweSucmOSKNTYQQS3RxCGOLvyfQ1jOz8\ncZayPnUt5QKBgQDqqp9+FEtvf+6g+OFZQVAlaJwy2yXzpv+18533TlLUma/hFk86\nGjz+RAyATN2WlJyGvr9kDmYYJSK1zmFcnRwo7m14pUxnMCLU3a+DFuD7QZ3RgSZA\nYKxYmZ1qYt3IUvzx77gVx1Kg4KMYHmT03a1kaVO72VQVadI516TLd2g9vQKBgQCG\nGBLiZB2FC3dkMkBS+pop+ak2dGgXSwxqkcM81RbNlK4QnPLSs863NTQvhT+juQQ2\nv/DXpyb5NAwkEhdNUtjkp+qrmtmCVlkmgRb5KRdsoGkqTcEDZhrhqyDbLn5XRGIc\nSIO3WO61/z3SzTjjOxRsjgFCSw/sShwoitPw10qEAQKBgQDTO8pURexeVeVRG6+P\ntQzY6AbuEwv7TAcySWvCrfT9fuPhVcBgdu6gi+8v2oRI53QvEE5goPDhh81n3/pN\nKeoX6ZIwIlieqDhizOxma0xUfraPIiP9fLuGhB7Y4AkC4zaCgwwjlqRYwVAU2+F8\nikzK6GyQE9/d4rS7vUvfzr2GSw==\n-----END PRIVATE KEY-----\n',
        };

        axios
            .post(`http://localhost:4000/sheets`, sheet)
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
                email: 'sheets-test@club-manager-test.iam.gserviceaccount.com',
                key:
                    '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDEVphTfXThiQCP\nHb++fo2P03/ZP4XHDxKSim91aZ9fg0UEARVLQCyM/+y9dSpomMy1coEif/z/Fxm6\nAJ8kT4GeXEqUQMQruvb3+DeT5rjWGWvLCP3x135wdgX5XYBsZ3Dw0zWDJyn0lADh\nwOPDcXLUxmNmoR1jdx9banZhHrDgxbih5C6Z9uuLp+W6sTQ5Jeu4ohfyK5GIZxWz\nHtfMc6Bz01ty4n7dm9G/PC4zxbgJx492Ap0y74QTFSAPrl2gmjriQ6c6VUoyyfCF\nrTBCYJ6WxqOr9LyHQwLkhKWT0Ywhwdt0TXU9COAZ0s4TNugtufDk/l+sAiVN203b\nzKzE5ROxAgMBAAECggEAAbckHnRAhhA5jZ5Bz1sU459S6u4cL+x0At2IZrqCs5ZW\nnVyQUgb0eSLAU1r87hbMasZ2E47w7xTiEYxU4RnRUp4Q2L6Z5TWLo7xTJxixjLpc\nbWfF91VUShGfGRLzd7Mll4pkbI6zx+Ewyau1UbpYUU+9+iR2OK27r/Vfy2dbwsgB\nvsz0NmNfUGdUKCJHodZ/64MPy7o2r0x0rSKMYMLjU0BvwIMpYyMIPhRWRfX+9U5S\nLlohAG5a8Qdz2B8vQjt6TCxAr7F6z1hVzO3GFZrjkFym5HF6dIum+kwnlFwps6w2\nzXYwGnUySLrb0qlXUoOsKZVz/JP2IlnQRt21EQ85QQKBgQD3cXaOZ6UrfQ/MsX/0\nBE5NeqEi2vRAjghMn+kcc0E1qJubFIziKjK9AK7KKvvqecIfq817NPLb4v+atpo7\nIeW4x2mbquRcO16T1AuFAQSE2jjYUZXlYSNj89EDD70n2my3mvsRUUEsdcysfON1\nErzgC29AWF/IgIHXgLRzwetR3QKBgQDLILdB1xmdx+57s7gUCn3xug3q99lxJ5iN\nz8w0Z4A0hITD2iaHzXPB6qvEgWpHJt0QTwDlohMgWWeG/tYmf3f/P1VSlsCNKK7w\noO6LvXJ+0MqqvToK1cPVPh8XMQDKnqKnoweSucmOSKNTYQQS3RxCGOLvyfQ1jOz8\ncZayPnUt5QKBgQDqqp9+FEtvf+6g+OFZQVAlaJwy2yXzpv+18533TlLUma/hFk86\nGjz+RAyATN2WlJyGvr9kDmYYJSK1zmFcnRwo7m14pUxnMCLU3a+DFuD7QZ3RgSZA\nYKxYmZ1qYt3IUvzx77gVx1Kg4KMYHmT03a1kaVO72VQVadI516TLd2g9vQKBgQCG\nGBLiZB2FC3dkMkBS+pop+ak2dGgXSwxqkcM81RbNlK4QnPLSs863NTQvhT+juQQ2\nv/DXpyb5NAwkEhdNUtjkp+qrmtmCVlkmgRb5KRdsoGkqTcEDZhrhqyDbLn5XRGIc\nSIO3WO61/z3SzTjjOxRsjgFCSw/sShwoitPw10qEAQKBgQDTO8pURexeVeVRG6+P\ntQzY6AbuEwv7TAcySWvCrfT9fuPhVcBgdu6gi+8v2oRI53QvEE5goPDhh81n3/pN\nKeoX6ZIwIlieqDhizOxma0xUfraPIiP9fLuGhB7Y4AkC4zaCgwwjlqRYwVAU2+F8\nikzK6GyQE9/d4rS7vUvfzr2GSw==\n-----END PRIVATE KEY-----\n',
            };

            axios
                .patch(`http://localhost:4000/sheets`, sheet)
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
                .delete(`http://localhost:4000/sheets`, { data: sheet })
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
