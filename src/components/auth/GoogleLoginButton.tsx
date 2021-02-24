import React from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const clientId = '215320798103-7kvftlie6bbu31nb9tgvqqq7sd7p50e6.apps.googleusercontent.com';

class GoogleLoginButton extends React.Component {
    onLoginSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        if ('tokenId' in response) {
            const { tokenId, accessToken } = response;

            // TODO: remove this at the end of auth development
            console.log(`[Success] ${tokenId}, ${accessToken}`);

            // TODO: perform an API call to log into the server

            // TODO: save the token ID to an httponly cookie

            // TODO: redirect to dashboard
        } else {
            console.log("[Failure] Authentication servers must be can't be reached right now");
        }
    };

    onLoginFailure = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        // TODO: remove this at the end of auth development
        console.log(`[Failure] ${response}`);

        // TODO: invoke callback to render failure message
    };

    render(): React.ReactNode {
        return (
            <GoogleLogin
                clientId={clientId}
                buttonText="Log in with Google"
                onSuccess={this.onLoginSuccess}
                onFailure={this.onLoginFailure}
                cookiePolicy={'single_host_origin'}
            />
        );
    }
}
export default GoogleLoginButton;
