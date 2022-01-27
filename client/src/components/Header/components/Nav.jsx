import { NavLink } from 'react-router-dom';

import texts from '../texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

const Nav = () => (
  <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
      {texts['home'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        {texts['about'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
      {texts['services'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/support"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
      {texts['support'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/vacancies"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
      {texts['vacancies'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/solutions"
        className={({ isActive }) =>
          isActive ? 'last-link active-link nav-link' : 'last-link nav-link'
        }
      >
      {texts['products'][lang]}
      </NavLink>
    </li>
  </>
);

export default Nav;
