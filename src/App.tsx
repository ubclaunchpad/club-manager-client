import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import ApplicantInfo from './views/ApplicantInfo';
import Home from './views/Home';

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/login" component={Login} />
                        <Route path="/applicantinfo" component={ApplicantInfo} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
