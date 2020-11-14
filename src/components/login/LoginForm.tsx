import React from 'react';
import './LoginForm.scss';

interface ILoginFormProps {
    onClick: () => void;
}

class LoginForm extends React.Component<ILoginFormProps> {
    render(): React.ReactNode {
        return (
            <div className="sign-in-form">
                <h1 className="is-size-1 has-text-centered py-3">Sign In</h1>
                <form>
                    <div className="field py-3">
                        <label className="label is-size-6 has-text-weight-light">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className="field">
                        <label className="label is-size-6 has-text-weight-light">Password</label>
                        <input type="password" name="password" />
                    </div>
                    <input type="submit" value="Login" className="mt-4 is-size-6 button login-button" />
                </form>
                <div className="or-line py-4">
                    <h1 className="is-size-6 ">OR</h1>
                </div>
                <button className="button google-login-button is-size-6">Login with Google</button>
                <p className="mt-4 is-size-6 has-text-centered">
                    Don`t have an account?{' '}
                    <span className="link has-text-weight-medium" onClick={this.props.onClick}>
                        Create Your account
                    </span>
                </p>
            </div>
        );
    }
}

export default LoginForm;
