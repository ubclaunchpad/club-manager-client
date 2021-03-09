import React, { Component, ReactNode } from 'react';
import './LoginForm.scss';
// import GoogleSignupButton from '../components/auth/GoogleSignupButton';
import GoogleSignupButton from '../../components/auth/GoogleSignupButton';
import axios from 'axios';
import { Redirect } from 'react-router';
import Cookies from 'js-cookie';

interface ISignUpFormProps {
    onClick: () => void;
}
interface ICredentials {
    googleId: string;
    firstName: string;
    lastName: string;
    email: string;
}
class SignUpForm extends Component<ISignUpFormProps> {
    state = {
        isPendingResponse: false,
        isDoneSignup: false,
        userCredentials: {
            googleId: '',
            firstName: '',
            lastName: '',
            email: '',
        },
        userOrg: '',
        userSchool: '',
    };

    setSchool = (event: any): void => {
        this.setState({
            userSchool: event.target.value,
        });
    };
    setOrg = (event: any): void => {
        this.setState({
            userOrg: event.target.value,
        });
    };

    createAccount = (): void => {
        // console.log(`accessToken Cookie: ${Cookies.get('accessToken')}`);
        /* Do nothing if form is incomplete */
        if (this.state.userOrg === '' || this.state.userSchool === '') {
            console.log('Form Incomplete!');
        } else if (this.state.isPendingResponse) {
        /* Prevent spam clicking of the 'create account' button */
            console.log('Please wait for your previous request to finish.');
        } else {
            console.log('Creating Acount!');
            /* Only allow user to make one request at a time */
            this.setState({ isPendingResponse: true });

            /* Send organization and school to POST endpoint */
            const jsonBody = JSON.stringify({
                organization: this.state.userOrg,
                schoolName: this.state.userSchool,
            });

            /* Store Google access token in auth header and set timeout */
            console.log(`Using token: ${Cookies.get('tokenId')}`);
            const config = {
                headers: { Authorization: `Bearer ${Cookies.get('tokenId')}` },
                timeout: 2000
            };

            axios
            .post('http://localhost:4000/user', jsonBody, config)
            .then((result: any) => {
                console.log(result.data.data)
            })
            .catch((err) => {
                console.log(err);
            });

            this.setState({ isPendingResponse: false });

            /* Redirect to Dashboard */
            // this.setState({ isDoneSignup: true });
        }
    };

    renderFormFields(): React.ReactNode {
        if (this.state.userCredentials.email !== '') {
            return (
                <div>
                    {/* <form> */}
                    <div className="field py-3">
                        <label className="label">Email</label>
                        <input
                            className="input"
                            readOnly
                            type="email"
                            name="email"
                            value={this.state.userCredentials.email}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Organization Name</label>
                        <input className="input" type="text" name="organization-name" onChange={this.setOrg} />
                        <h3>{this.state.userOrg}</h3>
                    </div>
                    <div className="field">
                        <label className="label">School</label>
                        <input className="input" type="text" name="school" onChange={this.setSchool} />
                        <h3>{this.state.userSchool}</h3>
                    </div>
                    {/* <div className="field">
                            <label className="label">Password</label>
                            <input className="input" type="password" name="password" />
                        </div> */}
                    <button className="mt-4 button login-button" onClick={this.createAccount}>
                        Create Account
                    </button>
                    {/* </form> */}
                    {/* <div className="or-line py-4">
                        <h1 className="is-size-6 ">OR</h1>
                    </div> */}
                </div>
            );
        } else {
            return (
                <div>
                    <hr></hr>
                    <GoogleSignupButton
                        setCredentials={(credentials: ICredentials) => this.setState({ userCredentials: credentials })}
                    />
                </div>
            );
        }
    }

    render(): ReactNode {
        if (!this.state.isDoneSignup) {
            return (
                <div className="form">
                    <div className="container login-container">
                        <p className="mt-4 is-size-6 has-text-centered position-link-registration">
                            Already have an account?&nbsp;
                            <span className="link" onClick={this.props.onClick}>
                                <b>Sign In.</b>
                            </span>
                        </p>
                        <h1 className="is-size-2 py-3">Create Your Account</h1>
                        {this.renderFormFields()}
                    </div>
                </div>
            );
        } else {
            return <Redirect to="/dashboard" />;
        }
    }
}

export default SignUpForm;
