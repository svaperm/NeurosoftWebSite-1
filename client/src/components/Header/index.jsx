import { NavLink } from 'react-router-dom';
import Nav from './components/Nav';
import './style.css';

const Header = () => (
  <div className="header">
    <div className="logo"></div>
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
);

export default Header;
