import Cookies from 'js-cookie';
import axios from 'axios';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:4000';

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
    logout() {
        Cookies.remove('tokenObj');

        axios
            .delete(`${apiEndpoint}/user/token`, { withCredentials: true })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};

export default AuthUtil;
