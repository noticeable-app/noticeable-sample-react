import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {appTitle: 'My app'};
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="toolbar" role="banner">
                        <img src={logo} className="App-logo" alt="logo"/><span>{this.state.appTitle}</span>
                        <div className="spacer"></div>
                        <ul id="menubar">
                            <li><Link to="/page1">Page 1</Link></li>
                            <li><Link to="/page2">Page 2</Link></li>
                            <li><Link to="/page3">Page 3</Link></li>
                        </ul>
                    </div>

                    <div className="content" role="main">
                        <Switch>
                            <Route exact path="/">
                                <Page1/>
                            </Route>
                            <Route path="/page1">
                                <Page1/>
                            </Route>
                            <Route path="/page2">
                                <Page2/>
                            </Route>
                            <Route path="/page3">
                                <Page3/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }

}
