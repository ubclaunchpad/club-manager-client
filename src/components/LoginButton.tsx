import React, { Component } from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

const CLIENT_ID = '860397558084-p6a2bj8603u5i31ulbune44icik0di4o.apps.googleusercontent.com';

class LoginButton extends Component {
    onSuccess(response: GoogleLoginResponse | GoogleLoginResponseOffline): void {
        console.log(response);
    }

    onFailure(): void {
        alert('Login failed');
    }

    render(): React.ReactNode {
        return (
            <div>
                <GoogleLogin
                    clientId={CLIENT_ID}
                    buttonText="Login"
                    onSuccess={this.onSuccess}
                    onFailure={this.onFailure}
                    cookiePolicy={'single_host_origin'}
                    responseType="code,token"
                />
            </div>
        );
    }
}

export default LoginButton;
