import { Link } from "react-router-dom";
import './style.css';

const Header = () => (
  <div className="header">
    <div className="logo"></div>
    <nav className="header-nav">
      <ul className="header-nav">
        <li>
          <Link to="/" className="nav-link">
            Главная
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            О компании
          </Link>
        </li>
        <li>
          <Link to="/services" className="nav-link">
            Услуги
          </Link>
        </li>
        <li>
          <Link to="/support" className="nav-link">
            Поддержка для клиентов
          </Link>
        </li>
        <li>
          <Link to="/vacancies" className="nav-link">
            Вакансии
          </Link>
        </li>
        <li>
          <Link to="/vacancies" className="last-link">
            Готовые решения
          </Link>
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