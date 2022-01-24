import { NavLink } from 'react-router-dom';
import './style.css';

const Header = () => (
  <div className="header">
    <div className="logo"></div>
    <nav className="header-nav">
      <ul className="header-nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            О компании
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            Услуги
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/support"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            Поддержка для клиентов
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/vacancies"
            className={({ isActive }) =>
              isActive ? 'nav-link active-link' : 'nav-link'
            }
          >
            Вакансии
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/solutions"
            className={({ isActive }) =>
              isActive ? 'last-link active-link' : 'last-link'
            }
          >
            Готовые решения
          </NavLink>
        </li>
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
