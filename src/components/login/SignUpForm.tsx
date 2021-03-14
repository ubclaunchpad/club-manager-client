import React, { Component, ReactNode } from 'react';
import GoogleSignupButton from '../auth/GoogleSignupButton';

import './LoginForm.scss';

const clubTypeOptions = [
    { name: 'Design Team', value: 'design-team' },
    { name: 'Sport', value: 'sport' },
    { name: 'Greek Life', value: 'greek-life' },
    { name: 'Religious', value: 'religious' },
];

interface ISignUpFormProps {
    onClick: () => void;
}

class SignUpForm extends Component<ISignUpFormProps> {
    render(): ReactNode {
        return (
            <div className="form">
                <div className="container login-container">
                    <p className="mt-4  has-text-centered position-link-registration link-to-registration">
                        Already have an account?&nbsp;
                        <span className="link" onClick={this.props.onClick}>
                            <b>Sign In.</b>
                        </span>
                    </p>
                    <h1 className="is-size-3 py-6 my-6">Create Your Account</h1>
                    <h2>and start simplifying your hiring process.</h2>
                    <form>
                        <div className="field py-3">
                            <label className="label">Email</label>
                            <input className="input" type="email" name="email" placeholder="Email" required />
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <input className="input" type="password" name="password" placeholder="Password" required />
                        </div>
                        <div className="field">
                            <label className="label">Club Name</label>
                            <input className="input" type="text" name="club-name" placeholder="Club Name" required />
                        </div>
                        <div className="field">
                            <label className="label">Club Type</label>
                            <select className=" input" name="club-type" required>
                                <option value="" disabled selected></option>
                                {clubTypeOptions.map((option) => (
                                    <option value={option.value} key={option.value}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <input type="submit" value="Continue" className="mt-4 button login-button" />
                    </form>
                    <div className="or-line py-4">
                        <h1 className="is-size-6 ">OR</h1>
                    </div>
                    <GoogleSignupButton />
                </div>
            </div>
        );
    }
}

export default SignUpForm;
