import { NavLink } from 'react-router-dom';

const Nav = () => (
  <>
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
  </>
);

export default Nav;
