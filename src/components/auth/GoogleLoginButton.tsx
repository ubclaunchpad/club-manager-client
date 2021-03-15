import React from 'react';
import Cookies from 'js-cookie';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const clientId = '215320798103-7kvftlie6bbu31nb9tgvqqq7sd7p50e6.apps.googleusercontent.com';

interface IGoogleLoginButtonProps {
    /* Toggle login vs. signup mode */
    switchMode: () => void;
}

class GoogleLoginButton extends React.Component<IGoogleLoginButtonProps> {
    state = {
        loggedIn: false,
    };

    onLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        if ('tokenId' in response) {
            const { tokenObj } = response;

            /* Store token in cookie */
            const authCookie = {
                id: tokenObj.id_token,
                expiration: tokenObj.expires_at,
            }

            Cookies.set('tokenObj', authCookie);
            const config = {
                headers: { 
                    'Authorization': `Bearer ${authCookie.id}`,
                },
                timeout: 2000
            };

            axios
                .get('http://localhost:4000/user', config)
                .then((result: any) => {
                    const doesExist = result.data.exists;
                    
                    /* If their account doesn't exist yet */
                    if (!doesExist) {
                        /* Switch to signup */
                        Cookies.remove('tokenObj');
                        this.props.switchMode();
                    } 
                    else {
                        /* Redirect to dashboard */
                        this.setState({ loggedIn: true });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });

            
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
