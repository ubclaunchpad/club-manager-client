import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './views/loginPage';

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <h1>Club Manager</h1>
            {/* TODO: implement React Router and link it to new views*/}
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/dashboard" />
                        <Route path="/login" component={LoginPage} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
};

export default App;
