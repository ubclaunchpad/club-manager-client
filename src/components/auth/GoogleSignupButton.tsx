import React from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import Cookies from 'js-cookie';

const clientId = '215320798103-7kvftlie6bbu31nb9tgvqqq7sd7p50e6.apps.googleusercontent.com';

interface ICredentials {
    googleId: string;
    firstName: string;
    lastName: string;
    email: string;
}
interface ISignUpButtonProps {
    setCredentials: (credentials: ICredentials) => void;
}
class GoogleSignupButton extends React.Component<ISignUpButtonProps> {
    onSignupSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        if ('tokenId' in response) {
            const { tokenId, accessToken } = response;
            console.log(response);
            // TODO: remove this at the end of auth development
            console.log(`[Success] ${tokenId}, ${accessToken}`);

            Cookies.set("tokenId", tokenId, { sameSite: "none", secure: false });
            // TODO: check if User exists


            if (true) { // doesn't exist
                // TODO: save the token ID to an httponly cookie
                // TODO: redirect to dashboard

                const userCredentials = {
                    googleId: response.profileObj.googleId,
                    firstName: response.profileObj.givenName,
                    lastName: response.profileObj.familyName,
                    email: response.profileObj.email,
                }
                this.props.setCredentials(userCredentials);
            } else { //exists
                // TODO: invoke callback to render failure message (user already exists)
                // TODO: redirect to dashboard
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
