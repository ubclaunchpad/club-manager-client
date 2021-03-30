import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Options from './views/Options';
import Archive from './views/Archive';
import AuthUtil from './components/auth/AuthUtil';
import MobileUIWarning from './views/MobileUIWarning';

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <MobileUIWarning />
            <Router>
                <div>
                    <Switch>
                        <PrivateRoute path="/dashboard" component={Dashboard} />
                        <PrivateRoute path="/archive" component={Archive} />
                        <PrivateRoute path="/options" component={Options} />
                        <LoginRoute path="/login" component={Dashboard} />
                        <LogoutRoute path="/logout" />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

/* Wrapper for route authentication */
const PrivateRoute = ({ component: Component, ...rest }: any) => (
    <Route
        {...rest}
        render={(props) => (AuthUtil.checkAuth() ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />)}
    />
);

const LoginRoute = ({ component: Component, ...rest }: any) => (
    <Route
        {...rest}
        render={(props) => (AuthUtil.checkAuth() ? <Redirect to={{ pathname: '/dashboard' }} /> : <Login {...props} />)}
    />
);

const LogoutRoute = ({ ...rest }: any) => {
    AuthUtil.logout();
    return (
        <Route
            {...rest}
            render={() =>
                AuthUtil.checkAuth() ? (
                    <Redirect to={{ pathname: '/dashboard' }} />
                ) : (
                    <Redirect to={{ pathname: '/' }} />
                )
            }
        />
    );
};

export default App;
