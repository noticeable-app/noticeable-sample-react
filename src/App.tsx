import { Link, Route, Routes } from 'react-router'

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

import logo from './logo.svg'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <div className="toolbar" role="banner">
        <img src={logo} className="App-logo" alt="logo" />
        <span>My app</span>
        <div className="spacer" />
        <ul id="menubar">
          <li><Link to="/page1">Page 1</Link></li>
          <li><Link to="/page2">Page 2</Link></li>
          <li><Link to="/page3">Page 3</Link></li>
        </ul>
      </div>

      <div className="content" role="main">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="page3" element={<Page3 />} />
        </Routes>
      </div>
    </div>
  )
}
