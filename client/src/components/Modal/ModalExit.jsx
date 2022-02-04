import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './style.css';

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
        <h2 className="modal-title">Вы действительно хотите выйти?</h2>
        <div className="btns-wrapper">
          <NavLink
            className="modal-btn"
            to="/"
            onClick={() => {
              changeAuthState();
              changeModalExitState();
            }}
          >
            Да
          </NavLink>
          <button
            className="modal-btn"
            onClick={() => {
              changeModalExitState();
            }}
          >
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
};
