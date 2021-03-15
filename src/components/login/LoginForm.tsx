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
                    <h1 className="has-text-centered">Sign In</h1>
                    <hr></hr>
                    <GoogleLoginButton switchMode={this.props.onClick}/>
                    <p className="mt-4 is-size-6 has-text-centered">
                        Don&apos;t have an account?{' '}
                        <span className="link has-text-weight-medium" onClick={this.props.onClick}>
                            <b>Create Your Account.</b>
                        </span>
                    </p>
                </div>
            </div>
        );
    }
}

export default LoginForm;
