import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Login.scss';

import LoginForm from '../components/login/LoginForm';
import SignUpForm from '../components/login/SignUpForm';

import LoginImage from '../images/LoginImage.svg';

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
                    <div className="column is-6 left-section is-hidden-touch">
                        <div>
                            <img src={LoginImage} alt="" className="login-image" />
                            <p>Created by a bunch of passionate individuals @ UBC Launch Pad</p>
                        </div>
                    </div>
                    <div className="column is-6 right-section flex">{this.renderForm()}</div>
                </div>
            </div>
        );
    }
}

export default Login;
