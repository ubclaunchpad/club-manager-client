import React, { ReactNode } from 'react';
import axios from 'axios';
import './Options.scss';

class OptionsComponent extends React.Component<any, any> {
    constructor(props: {}) {
        super(props);
        this.state = {
            value: '',
            message: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event: any) {
        this.setState({value: event.target.value});
        event.preventDefault();
    }

    // TODO: change the API key and the POST URL
    handleSubmit(event: any) {
        event.preventDefault();

        const sheet = {
            "url": this.state.value,
            "name": "Sheet1",
            "email": "sheets-test@club-manager-test.iam.gserviceaccount.com",
            "key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDEVphTfXThiQCP\nHb++fo2P03/ZP4XHDxKSim91aZ9fg0UEARVLQCyM/+y9dSpomMy1coEif/z/Fxm6\nAJ8kT4GeXEqUQMQruvb3+DeT5rjWGWvLCP3x135wdgX5XYBsZ3Dw0zWDJyn0lADh\nwOPDcXLUxmNmoR1jdx9banZhHrDgxbih5C6Z9uuLp+W6sTQ5Jeu4ohfyK5GIZxWz\nHtfMc6Bz01ty4n7dm9G/PC4zxbgJx492Ap0y74QTFSAPrl2gmjriQ6c6VUoyyfCF\nrTBCYJ6WxqOr9LyHQwLkhKWT0Ywhwdt0TXU9COAZ0s4TNugtufDk/l+sAiVN203b\nzKzE5ROxAgMBAAECggEAAbckHnRAhhA5jZ5Bz1sU459S6u4cL+x0At2IZrqCs5ZW\nnVyQUgb0eSLAU1r87hbMasZ2E47w7xTiEYxU4RnRUp4Q2L6Z5TWLo7xTJxixjLpc\nbWfF91VUShGfGRLzd7Mll4pkbI6zx+Ewyau1UbpYUU+9+iR2OK27r/Vfy2dbwsgB\nvsz0NmNfUGdUKCJHodZ/64MPy7o2r0x0rSKMYMLjU0BvwIMpYyMIPhRWRfX+9U5S\nLlohAG5a8Qdz2B8vQjt6TCxAr7F6z1hVzO3GFZrjkFym5HF6dIum+kwnlFwps6w2\nzXYwGnUySLrb0qlXUoOsKZVz/JP2IlnQRt21EQ85QQKBgQD3cXaOZ6UrfQ/MsX/0\nBE5NeqEi2vRAjghMn+kcc0E1qJubFIziKjK9AK7KKvvqecIfq817NPLb4v+atpo7\nIeW4x2mbquRcO16T1AuFAQSE2jjYUZXlYSNj89EDD70n2my3mvsRUUEsdcysfON1\nErzgC29AWF/IgIHXgLRzwetR3QKBgQDLILdB1xmdx+57s7gUCn3xug3q99lxJ5iN\nz8w0Z4A0hITD2iaHzXPB6qvEgWpHJt0QTwDlohMgWWeG/tYmf3f/P1VSlsCNKK7w\noO6LvXJ+0MqqvToK1cPVPh8XMQDKnqKnoweSucmOSKNTYQQS3RxCGOLvyfQ1jOz8\ncZayPnUt5QKBgQDqqp9+FEtvf+6g+OFZQVAlaJwy2yXzpv+18533TlLUma/hFk86\nGjz+RAyATN2WlJyGvr9kDmYYJSK1zmFcnRwo7m14pUxnMCLU3a+DFuD7QZ3RgSZA\nYKxYmZ1qYt3IUvzx77gVx1Kg4KMYHmT03a1kaVO72VQVadI516TLd2g9vQKBgQCG\nGBLiZB2FC3dkMkBS+pop+ak2dGgXSwxqkcM81RbNlK4QnPLSs863NTQvhT+juQQ2\nv/DXpyb5NAwkEhdNUtjkp+qrmtmCVlkmgRb5KRdsoGkqTcEDZhrhqyDbLn5XRGIc\nSIO3WO61/z3SzTjjOxRsjgFCSw/sShwoitPw10qEAQKBgQDTO8pURexeVeVRG6+P\ntQzY6AbuEwv7TAcySWvCrfT9fuPhVcBgdu6gi+8v2oRI53QvEE5goPDhh81n3/pN\nKeoX6ZIwIlieqDhizOxma0xUfraPIiP9fLuGhB7Y4AkC4zaCgwwjlqRYwVAU2+F8\nikzK6GyQE9/d4rS7vUvfzr2GSw==\n-----END PRIVATE KEY-----\n"
        };

        axios.post(`http://localhost:4000/sheets`, sheet)
            .then(res => {
                console.log("Here are the imported applicants");
                console.log(res.data);
                this.setState({message: 'Check the console for the imported applicants'});
            }).catch(() => {
                this.setState({message: 'Unable to import applicants from Google Sheet'});
        });

        this.setState({value: ''});
    }

    handleCancel(event: any) {
        this.setState({value: ''});
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
                            <input className="input" type="text" placeholder="Your Google Sheets Link" onChange={this.handleChange} value={this.state.value}/>
                            <span className="icon is-small is-left">
                            <i className="fas fa-file-import"/>
                        </span>
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link" onClick={this.handleSubmit}>Import</button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>
                </div>

                <p>{this.state.message}</p>
            </div>
        );
    }
}
export default OptionsComponent;