import './Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Header({ isLoggedIn }) {
  const count = useSelector((state) => state.counter.value)

  function ConditionalLogin() {
    if (!isLoggedIn) {
      return <Link to='/login'>Login</Link>
    }
    return <Link to='/logout'>Logout</Link>
  }

  function ConditionalMain() {
    if (!isLoggedIn) {
      return <Link to='/'><span><p>SHEY PIZZA</p><img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png" alt="logo" /></span></Link>
    }
    return <Link to='/admin'><span><p>SHEY PIZZA</p><img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png" alt="logo" /></span></Link>
  }

  return (
    <div className="Header">
      
        <nav className='box-shadow'>
          <ul>
            <li className="Header-logo">
              <ConditionalMain />
            </li>
            <span className='Collapsable'>
              <li>
                <ConditionalLogin />
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