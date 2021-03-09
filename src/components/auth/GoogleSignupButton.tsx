import React from 'react';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import Cookies from 'js-cookie';
import axios from 'axios';

const clientId = '215320798103-7kvftlie6bbu31nb9tgvqqq7sd7p50e6.apps.googleusercontent.com';

interface ICredentials {
    googleId: string;
    firstName: string;
    lastName: string;
    email: string;
}
interface ISignUpButtonProps {
    setCredentials: (credentials: ICredentials) => void;
    skipSignup: () => void;
}
class GoogleSignupButton extends React.Component<ISignUpButtonProps> {
    onSignupSuccess = (response: GoogleLoginResponse | GoogleLoginResponseOffline): void => {
        if ('tokenId' in response) {
            const { tokenId, accessToken } = response;
            // TODO: remove this at the end of auth development
            console.log(`[Success] ${tokenId}, ${accessToken}`);
            
            // Store token in cookie
            Cookies.set('tokenId', tokenId);
            
            // Check if User exists
            const config = {
                headers: { 
                    'Authorization': `Bearer ${tokenId}`,
                },
                timeout: 2000
            };
            axios
                .get('http://localhost:4000/user', config)
                .then((result: any) => {
                    const doesExist = result.data.data;
                    console.log(doesExist);

                    if (doesExist) {
                        const userCredentials = {
                            googleId: response.profileObj.googleId,
                            firstName: response.profileObj.givenName,
                            lastName: response.profileObj.familyName,
                            email: response.profileObj.email,
                        };
                        this.props.setCredentials(userCredentials);
                    } else {
                        console.log('User already exists');
                        
                        // Redirect to dashboard
                        this.props.skipSignup();
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
