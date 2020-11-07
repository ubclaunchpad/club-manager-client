import React from 'react';
import './LoginForm.scss';

class LoginForm extends React.Component {
    render(): React.ReactNode {
        return (
            <div className="sign-in-form">
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
            </div>
        );
    }
}

export default LoginForm;
