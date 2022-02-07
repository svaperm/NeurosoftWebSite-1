import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './style.css';

import DetectLanguage from '../../functions/detectLang';
import texts from './texts.json';

const lang = DetectLanguage();

export const ModalAuth = () => {
  const { changeAuthState, modalAuth, changeModalAuthState } =
    useContext(StoreContext) || {};
  return (
    <div className={`modal-auth-wrapper ${!modalAuth ? 'hidden' : ''}`}>
      <div className="modal-auth">
        <div
          className="close-modal"
          onClick={() => {
            changeModalAuthState();
          }}
        ></div>
        <h2 className="modal-title">{texts['log-in-sys'][lang]}</h2>
        <span className="modal-text">{texts['login'][lang]}</span>
        <input type="text" className="modal-input" />
        <span className="modal-text">{texts['password'][lang]}</span>
        <input type="password" className="modal-input" />
        <NavLink
          className="modal-btn"
          to="/innerMain"
          onClick={() => {
            changeAuthState();
            changeModalAuthState();
          }}
        >
          {texts['sign-in'][lang]}
        </NavLink>
      </div>
    </div>
  );
};
