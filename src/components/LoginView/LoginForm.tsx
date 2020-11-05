import React from 'react';

class LoginForm extends React.Component {
    render(): React.ReactNode {
        return (
            <form>
                <div className="field py-3">
                    <label className="label is-size-6 has-text-weight-light">Email</label>
                    <input type="email" name="email" />
                </div>
                <div className="field">
                    <label className="label is-size-6 has-text-weight-light">Password</label>
                    <input type="password" name="password" />
                </div>
                <input type="submit" value="Login" className="mt-4 is-size-6 button pink" />
            </form>
        );
    }
}

export default LoginForm;
