import React from 'react';
import './LoginForm.scss';

interface ISignUpFormProps {
    onClick: () => void;
}

class SignUpForm extends React.Component<ISignUpFormProps> {
    render(): React.ReactNode {
        return (
            <div className="sign-in-form">
                <h1 className="is-size-2 py-3">Create your Account</h1>
                <form>
                    <div className="field py-3">
                        <label className="label is-size-6 has-text-weight-light">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="field">
                        <label className="label is-size-6 has-text-weight-light">Organization Name</label>
                        <input type="text" name="organization-name" />
                    </div>
                    <div className="field">
                        <label className="label is-size-6 has-text-weight-light">School</label>
                        <input type="text" name="school" />
                    </div>
                    <div className="field">
                        <label className="label is-size-6 has-text-weight-light">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <input type="submit" value="Create an Account" className="mt-4 is-size-6 button login-button" />
                </form>
                <div className="or-line py-4">
                    <h1 className="is-size-6 ">OR</h1>
                </div>
                <button className="button google-login-button is-size-6">Register with Google</button>
                <p className="mt-4 is-size-6 has-text-centered top-right">
                    Already have an account?{' '}
                    <span className="link has-text-weight-medium" onClick={this.props.onClick}>
                        Sign In
                    </span>
                </p>
            </div>
        );
    }
}

export default SignUpForm;
