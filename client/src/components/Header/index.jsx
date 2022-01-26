import Nav from './components/Nav';
import './style.css';

const Header = () => (
  <div className="header">
    <div className="logo"></div>
    <div
      className="burger"
      onClick={(e) => {
        e.target.classList.toggle('close-burger');
        e.currentTarget.nextElementSibling.classList.toggle('show');
      }}
    ></div>
    <div className="header-menu-container">
      <nav className="header-nav">
        <ul className="header-nav">
          <Nav />
        </ul>
      </nav>
      <div className="header-btns">
        <button className="header-btn">
          <div className="btn-icon-sign-in"></div>
          <span className="btn-text">Вход</span>
        </button>
        <button className="header-btn">
          <div className="btn-icon-lang"></div>
          <span className="btn-text">Язык</span>
        </button>
      </div>
    </div>
  </div>
);

export default Header;
