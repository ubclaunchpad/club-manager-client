import Cookies from 'js-cookie';

/* Check if the token is still valid */
const AuthUtil = {
    checkAuth() {
        /* Get token expiration from cookie, or set expiration date to 0 epochs */
        const authCookieString = Cookies.get('tokenObj');
        const authCookie = JSON.parse(authCookieString || '{ "expiration": 0 }');
        const tokenExpiration = authCookie.expiration;

        /* Auth status linked to token expiration */
        return tokenExpiration > Date.now();
    },
};

export default AuthUtil;
