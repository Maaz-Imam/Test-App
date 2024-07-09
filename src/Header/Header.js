import './Header.css';

import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './home';

function Header() {
  return (
    <div className="Header">
      <Router>
        <nav className='box-shadow'>
          <ul>
            <li className="Header-logo">
              <Link to='/home'><span><p>SHEY PIZZA</p><img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png" alt="logo" /></span></Link>
            </li>
            <span className='Collapsable'>
              <li>
              <Link to='/login'>Login</Link>
              </li>
              <li>
              <Link to='/cart'>Cart</Link>
              </li>
            </span>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<Home />} />
          <Route path="/cart" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Header;