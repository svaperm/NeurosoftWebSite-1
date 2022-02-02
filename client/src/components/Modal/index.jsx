import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './style.css';

export const ModalAuth = () => {
  const { changeAuthState, modalAuth, changeModalAuthState } = useContext(StoreContext) || {};
  return (
    <div className={`modal-auth-wrapper ${!modalAuth ? 'hidden' : ''}`}>
      <div className="modal-auth">
        <div className="close-modal"></div>
        <h2 className="modal-title">Вход в систему</h2>
        <span className="modal-text">Логин</span>
        <input type="text" className="modal-input" />
        <span className="modal-text">Пароль</span>
        <input type="password" className="modal-input" />
        <Link
          className="modal-btn"
          to="/innerMain"
          onClick={() => {
            changeAuthState();
            changeModalAuthState();
            console.log(modalAuth);
          }}
        >
          Войти
        </Link>
      </div>
    </div>
  );
};
