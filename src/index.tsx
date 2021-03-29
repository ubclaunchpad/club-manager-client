import React from 'react';
import ReactDOM from 'react-dom';
import WebFont from 'webfontloader';
import 'bulma/css/bulma.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import App from './App';

WebFont.load({
    google: {
        families: ['Montserrat', 'Poppins'],
    },
});

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
);
