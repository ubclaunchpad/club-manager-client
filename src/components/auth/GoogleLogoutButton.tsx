import React from 'react';
import { GoogleLogout } from 'react-google-login';
import Cookies from 'js-cookie';

import AuthUtil from '../auth/AuthUtil';

const clientId = '215320798103-7kvftlie6bbu31nb9tgvqqq7sd7p50e6.apps.googleusercontent.com';

interface GoogleLogoutButtonState {
    isVisible: Boolean;
}

class GoogleLogoutButton extends React.Component<{}, GoogleLogoutButtonState> {
    /* Link logout button's visibility to auth state */
    constructor(props: any) {
        super(props);
        this.state = {
            isVisible: AuthUtil.checkAuth(),
        };
        this.onSuccess = this.onSuccess.bind(this);
    }

    onSuccess(): void {
        /* To log the user out, we clear their auth cookie */
        Cookies.remove('tokenObj');
        this.setState({ isVisible: false });
    }

    render(): React.ReactNode {
        /* Only render logout button if we are logged in */
        return this.state.isVisible ? (
            <GoogleLogout clientId={clientId} buttonText="Logout" onLogoutSuccess={this.onSuccess} />
        ) : null;
    }
}

export default GoogleLogoutButton;
