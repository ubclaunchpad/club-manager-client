import React from 'react';
import './Login.scss';
import LoginBackgroudImg from '../images/LoginBackgroudImg.png';
import LaunchPadBanner from '../components/login/LaunchPadBanner';
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/login/SignUpForm';

class Login extends React.Component {
    state = { mode: 'Login' };

    changeMode = (): void => {
        if (this.state.mode === 'Login') {
            this.setState({ mode: 'Register' });
        } else {
            this.setState({ mode: 'Login' });
        }
    };

    renderForm() {
        if (this.state.mode === 'Login') {
            return <LoginForm onClick={this.changeMode} />;
        } else {
            return <SignUpForm onClick={this.changeMode} />;
        }
    }

    render() {
        return (
            <div className="view ">
                <div className="columns is-vcentered is-desktop">
                    <div className="column is-5 left-section  is-hidden-touch" style={{ background: 'white' }}>
                        <img src={LoginBackgroudImg} alt="Background" />
                    </div>
                    <div className="column right-section ">
                        <LaunchPadBanner />
                        <div className="form">{this.renderForm()}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
