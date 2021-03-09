import React from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const clientId = '215320798103-7kvftlie6bbu31nb9tgvqqq7sd7p50e6.apps.googleusercontent.com';

class GoogleLoginButton extends React.Component {
    state = {
        loggedIn: false,
    };

    onLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        if ('tokenId' in response) {
            const { tokenId, accessToken } = response;

            // TODO: remove this at the end of auth development
            console.log(`[Success] ${tokenId}, ${accessToken}`);
            console.log(response.profileObj);
            console.log(response.tokenObj);

            // TODO: perform an API call to log into the server

            // TODO: save the token ID to an httponly cookie
            axios.defaults.headers.common.Authorization = accessToken;
            axios
                .get(`http://localhost:4000/user/token`, { withCredentials: true })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });

            // TODO: redirect to dashboard
            this.setState({ loggedIn: true });
        } else {
            console.log("[Failure] Authentication servers must be can't be reached right now");
        }
    };

    onLoginFailure = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        // TODO: remove this at the end of auth development
        console.log(`[Failure] ${response}`);

        // TODO: invoke callback to render failure message
    };

    renderLogin(): React.ReactNode {
        if (this.state.loggedIn) {
            return <Redirect to="/dashboard" />;
        } else {
            return (
                <GoogleLogin
                    clientId={clientId}
                    scope={'email https://www.googleapis.com/auth/spreadsheets'}
                    buttonText="Log in with Google"
                    onSuccess={this.onLoginSuccess}
                    onFailure={this.onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                />
            );
        }
    }

    render(): React.ReactNode {
        return <div>{this.renderLogin()}</div>;
    }
}
export default GoogleLoginButton;
