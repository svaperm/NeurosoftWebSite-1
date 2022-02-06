import Nav from './components/Nav';
import { useNavigate } from 'react-router-dom';
import './style.css';

import ChangeLanguage from '../../functions/changeLang';
import texts from './texts.json';
import DetectLanguage from '../../functions/detectLang';
import InnerNav from './components/InnerNav';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const lang = DetectLanguage();

const Header = () => {
  const { authorized, changeModalAuthState, changeModalExitState } =
    useContext(StoreContext) || {};
  // const navigate = useNavigate();
  return (
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
          <ul className="header-nav">{authorized ? <InnerNav /> : <Nav />}</ul>
        </nav>
        <div className="header-btns">
          <button
            className="header-btn"
            onClick={() => {
              if (authorized) {
                changeModalExitState();
                // navigate.push('/');
              } else {
                changeModalAuthState();
              }
            }}
          >
            <div className="btn-icon-sign-in"></div>
            <span className="btn-text">{texts['sign-in'][lang]}</span>
          </button>
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

          {authorized ? 
            <Link 
              to='/notifications'
              className="header-btn header-btn-notifications">
                <div className="btn-icon-notifications"></div>
            </Link> : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;
