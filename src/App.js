import React from 'react';
import {BrowserRouter, Link, Routes, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import {config} from './config';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {appTitle: 'My app'};
    }

    componentDidMount() {
        window.noticeable.render('widget', config.noticeable.iconWidgetId, {selector: '#noticeable-icon'});
    }

    componentWillUnmount() {
        window.noticeable.destroy('widget', config.noticeable.iconWidgetId);
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <div className="toolbar" role="banner">
                        <img src={logo} className="App-logo" alt="logo"/><span>{this.state.appTitle}</span>
                        <div className="spacer"></div>
                        <ul id="menubar">
                            <li><Link to="/page1">Page 1</Link></li>
                            <li><Link to="/page2">Page 2</Link></li>
                            <li><Link to="/page3">Page 3</Link></li>
                            <li>
                                <div id="noticeable-icon"></div>
                            </li>
                        </ul>
                    </div>

                    <div className="content" role="main">
                        <Routes>
                            <Route path="/" element={<Page1/>} />
                            <Route path="page1" element={<Page1/>} />
                            <Route path="page2" element={<Page2/>} />
                            <Route path="page3" element={<Page3/>} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

}
