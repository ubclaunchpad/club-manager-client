import React, { Component, ReactNode } from 'react';
import './LoginForm.scss';
import GoogleLoginButton from '../auth/GoogleLoginButton';

interface ILoginFormProps {
    onClick: () => void;
}

class LoginForm extends Component<ILoginFormProps> {
    render(): ReactNode {
        return (
            <div className="form">
                <div className="container login-container">
                    <h1 className="has-text-centered">Log In</h1>
                    <h2>It&apos;s good to see you back- no cap.</h2>
                    <form>
                        <div className="field py-3">
                            <label className="label">Email</label>
                            <input className="input" type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="field">
                            <label className="label">Password</label>
                            <input className="input" type="password" name="password" placeholder="Password" />
                        </div>
                        <input type="submit" value="Login" className="mt-4 button login-button" />
                    </form>
                    <div className="or-line py-4">
                        <h1 className="is-size-6 ">OR</h1>
                    </div>

                    <GoogleLoginButton />
                    <p className="mt-4 is-size-6 has-text-centered">
                        Don&apos;t have an account?{' '}
                        <span className="link has-text-weight-medium" onClick={this.props.onClick}>
                            <b>Register</b>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default LoginForm;
