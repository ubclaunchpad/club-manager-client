import React from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const clientId = '215320798103-7kvftlie6bbu31nb9tgvqqq7sd7p50e6.apps.googleusercontent.com';

class GoogleSignupButton extends React.Component {
    onSignupSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        if ('tokenId' in response) {
            const { tokenId, accessToken } = response;

            // TODO: remove this at the end of auth development
            console.log(`[Success] ${tokenId}, ${accessToken}`);

            // TODO: perform a POST call to create a new user

            if (true) {
                // TODO: save the token ID to an httponly cookie
                // TODO: redirect to dashboard
            } else {
                // TODO: invoke callback to render failure message (user already exists)
            }
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
