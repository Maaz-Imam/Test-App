import './Header.css';

import * as React from "react";
import { Link } from 'react-router-dom';

function Header({ count }) {
  return (
    <div className="Header">
      
        <nav className='box-shadow'>
          <ul>
            <li className="Header-logo">
              <Link to='/'><span><p>SHEY PIZZA</p><img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png" alt="logo" /></span></Link>
            </li>
            <span className='Collapsable'>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/cart'>Cart {count}</Link>
              </li>
            </span>
          </ul>
        </nav>
    </div>
  );
}

export default Header;