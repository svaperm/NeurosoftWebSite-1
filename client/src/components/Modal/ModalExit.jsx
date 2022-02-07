import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './style.css';

import DetectLanguage from '../../functions/detectLang';
import texts from './texts.json';

const lang = DetectLanguage();

export const ModalExit = () => {
  const { changeModalExitState, modalExit, changeAuthState } =
    useContext(StoreContext) || {};
  return (
    <div className={`modal-auth-wrapper ${!modalExit ? 'hidden' : ''}`}>
      <div className="modal-auth modal-exit">
        <div
          className="close-modal"
          onClick={() => {
            changeModalExitState();
          }}
        ></div>
        <h2 className="modal-title">{texts['sure'][lang]}</h2>
        <div className="btns-wrapper">
          <NavLink
            className="modal-btn"
            to="/"
            onClick={() => {
              changeAuthState();
              changeModalExitState();
            }}
          >
            {texts['yes'][lang]}
          </NavLink>
          <button
            className="modal-btn"
            onClick={() => {
              changeModalExitState();
            }}
          >
            {texts['сancel'][lang]}
          </button>
        </div>
      </div>
    </div>
  );
};
