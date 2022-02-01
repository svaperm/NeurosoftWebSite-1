import Nav from './components/Nav';
import './style.css';

import ChangeLanguage from '../../functions/changeLang';
import texts from './texts.json';
import DetectLanguage from '../../functions/detectLang';
import InnerNav from './components/InnerNav';
import React from 'react';

import { NavLink } from 'react-router-dom';

const lang = DetectLanguage();

function Header(){
  let [isInner, setIsInner] = React.useState(false);

  return(
  <div className="header">
    <div className="logo"></div>
    <div
      className="burger"
      onClick={(e) => {
        e.target.classList.toggle('close-burger');
        e.currentTarget.parentElement.children[2].classList.toggle('show');
      }}
    ></div>
    <div className="header-menu-container">
      <nav className="header-nav">
        <ul className="header-nav">
          {isInner ? <InnerNav /> : <Nav/>}
        </ul>
      </nav>
      <div className="header-btns">
        <NavLink className="header-btn" to={isInner ? "/" : "/innerMain"} onClick={() => setIsInner(!isInner)} >
          <div className="btn-icon-sign-in"></div>
          <span className="btn-text">{texts['sign-in'][lang]}</span>
        </NavLink>
        <button className="header-btn">
          <div className="btn-icon-lang"></div>
          <select
            className="lang-select"
            onChange={ChangeLanguage}
            value={window.sessionStorage.getItem('lang')}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Header;
