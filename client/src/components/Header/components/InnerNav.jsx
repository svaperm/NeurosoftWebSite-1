import { NavLink } from 'react-router-dom';

import texts from '../texts.json'
import DetectLanguage from '../../../functions/detectLang';

const lang = DetectLanguage();

const InnerNav = () => (
  <>
    <li>
      <NavLink
        to="/innerMain"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
      {texts['home'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/staff"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
        {texts['staff'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/projects"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
      {texts['projects'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/documentation"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
      {texts['documentation'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/news"
        className={({ isActive }) =>
          isActive ? 'nav-link active-link' : 'nav-link'
        }
      >
      {texts['news'][lang]}
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/stockholders-docs"
        className={({ isActive }) =>
          isActive ? 'last-link active-link nav-link' : 'last-link nav-link'
        }
      >
      {texts['stockholders-docs'][lang]}
      </NavLink>
    </li>
  </>
);

export default InnerNav;
