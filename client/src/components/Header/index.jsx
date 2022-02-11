import Nav from './components/Nav';
import './style.css';
import ChangeLanguage from '../../functions/changeLang';
import texts from './texts.json';
import DetectLanguage from '../../functions/detectLang';
import InnerNav from './components/InnerNav';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { Button, Select } from 'antd';
const { Option } = Select;

const lang = DetectLanguage();

const Header = () => {
  const { authorized, changeModalAuthState, changeModalExitState } =
    useContext(StoreContext) || {};
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
          <Button
            type="primary"
            className="header-btn"
            onClick={() => {
              if (authorized) {
                changeModalExitState();
              } else {
                changeModalAuthState();
              }
            }}
          >
            {!authorized ? texts['sign-in'][lang] : texts['sign-out'][lang]}
          </Button>

          <select
            className="lang-select"
            onChange={ChangeLanguage}
            value={window.sessionStorage.getItem('lang')}
          >
            <option value="ru">RU</option>
            <option value="en">EN</option>
            <option value="de">DE</option>
          </select>

          {authorized ? (
            <Link
              to="/notifications"
              className="header-btn header-btn-notifications"
            >
              <div className="btn-icon-notifications"></div>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
