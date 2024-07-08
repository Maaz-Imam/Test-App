import './Header.css';

function Header() {
  return (
    <div className="Header">
      <nav>
        <ul>
          <li className="Header-title">
            SHEY PIZZA
          </li>
          <li className="Header-logo">
            <img src="https://emojipedia-us.s3.amazonaws.com/source/skype/289/pizza_1f355.png" className="Header-logo" alt="logo" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;