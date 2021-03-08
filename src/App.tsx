import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import Home from './views/Home';
import Options from './views/Options';

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/options" component={Options} />
                        <Route path="/login" render={(props) => <Login {...props} />} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
