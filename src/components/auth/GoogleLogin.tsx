import React from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';

const responseGoogle = (response: any) => {
    console.log(response);
};

ReactDOM.render(
    <GoogleLogin
        clientId="215320798103-tlgl4cmi7p0ju1rehma8cofd9cciapbd.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
    />,
    document.getElementById('googleButton'),
);

export default GoogleLogin;
