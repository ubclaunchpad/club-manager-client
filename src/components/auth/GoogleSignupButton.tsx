import React from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import Cookies from 'js-cookie';
import axios from 'axios';

const clientId = '215320798103-7kvftlie6bbu31nb9tgvqqq7sd7p50e6.apps.googleusercontent.com';

interface ICredentials {
    email: string;
}
interface IGoogleSignUpButtonProps {
    /* Autofill email attached to google account */
    setCredentials: (credentials: ICredentials) => void;
    /* Toggle login vs. signup mode */
    switchMode: () => void;
}
class GoogleSignupButton extends React.Component<IGoogleSignUpButtonProps> {
    onSignupSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        if ('tokenId' in response) {
            const { tokenObj } = response;

            /* Store token in cookie */
            const authCookie = {
                id: tokenObj.id_token,
                expiration: tokenObj.expires_at,
            };

            Cookies.set('tokenObj', authCookie);

            /* Check if User exists */
            const config = {
                headers: {
                    Authorization: `Bearer ${authCookie.id}`,
                },
                timeout: 2000,
            };
            axios
                .get('http://localhost:4000/user', config)
                .then((result: any) => {
                    const doesExist = result.data.exists;

                    /* Set their credentials if they are new */
                    if (!doesExist) {
                        const userCredentials = {
                            email: response.profileObj.email,
                        };
                        this.props.setCredentials(userCredentials);
                    } else {
                        /* Switch to login */
                        Cookies.remove('tokenObj');
                        this.props.switchMode();
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            console.log("[Failure] Authentication servers must be can't be reached right now");
        }
    };

    onSignupFailure = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        // TODO: remove this at the end of auth development
        console.log(`[Failure] ${response}`);

        // TODO: invoke callback to render failure message
    };

    render(): React.ReactNode {
        return (
            <GoogleLogin
                className="button login-button-google"
                clientId={clientId}
                buttonText="Sign up with Google"
                onSuccess={this.onSignupSuccess}
                onFailure={this.onSignupFailure}
                cookiePolicy={'single_host_origin'}
            />
        );
    }
}
export default GoogleSignupButton;
