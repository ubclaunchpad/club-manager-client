import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '215320798103-7kvftlie6bbu31nb9tgvqqq7sd7p50e6.apps.googleusercontent.com';

class GoogleLogoutButton extends React.Component {
    onSuccess(): void {
        // TODO: remove this at the end of auth development
        console.log('[Success] Logged out');

        // TODO: redirect to home page
    }

    render(): React.ReactNode {
        return <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={this.onSuccess} />;
    }
}

export default GoogleLogoutButton;
