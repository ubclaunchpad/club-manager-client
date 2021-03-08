import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Login.scss';
import LaunchPadBanner from '../components/login/LaunchPadBanner';
import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/login/SignUpForm';

class Login extends React.Component<RouteComponentProps> {
    state = {
        isLogin: true,
    };
    componentDidMount(): void {
        console.log();
        this.setState({
            isLogin: this.props.location.state,
        });
    }

    changeMode = (): void => {
        const currState = this.state.isLogin;

        this.setState({
            isLogin: !currState,
        });
    };

    renderForm(): React.ReactNode {
        if (this.state.isLogin) {
            return <LoginForm onClick={this.changeMode} />;
        } else {
            return <SignUpForm onClick={this.changeMode} />;
        }
    }

    render(): React.ReactNode {
        return (
            <div className="view login-view">
                <div className="columns is-desktop">
                    <div className="column is-5 left-section is-hidden-touch login-image"></div>
                    <div className="column is-7 right-section flex">
                        <LaunchPadBanner />
                        {this.renderForm()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
