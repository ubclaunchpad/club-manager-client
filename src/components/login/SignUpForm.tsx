import React, { Component, ReactNode } from 'react';
import './LoginForm.scss';

interface ISignUpFormProps {
    onClick: () => void;
}

class SignUpForm extends Component<ISignUpFormProps> {
    render(): ReactNode {
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
                    <form>
                        <div className="field py-3">
                            <label className="label">Email</label>
                            <input className="input" type="email" name="email" />
                        </div>
                        <div className="field">
                            <label className="label">Organization Name</label>
                            <input className="input" type="text" name="organization-name" />
                        </div>
                        <div className="field">
                            <label className="label">School</label>
                            <input className="input" type="text" name="school" />
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <input className="input" type="password" name="password" />
                        </div>
                        <input type="submit" value="Create an Account" className="mt-4 button login-button" />
                    </form>
                    <div className="or-line py-4">
                        <h1 className="is-size-6 ">OR</h1>
                    </div>
                    <button className="button login-button-google">Register with Google</button>
                </div>
            </div>
        );
    }
}

export default SignUpForm;
