import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import InnerNav from '../Header/components/InnerNav';
import Nav from '../Header/components/Nav';

export const Footer = () => {
  const { authorized } = useContext(StoreContext) || {};
  return (
    <div className="footer">
      <div className="logo"></div>
      <nav className="footer-nav">
        <ul>{authorized ? <InnerNav /> : <Nav />}</ul>
      </nav>
      <ul className="social-nav">
        {['instagram', 'facebook', 'telegram', 'vk'].map((value) => (
          <li>
            <a href="#" className={`social-item ${value}`}></a>
          </li>
        ))}
      </ul>
    </div>
  );
};
