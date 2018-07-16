import React from 'react';
import logo from '../../../images/logo.svg';

// Styles
import './Navigation.scss';

const Navigation = () => (
  <header className="navigation">
    <div className="navigation__container">
      <div className="navigation__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navigation__menu">
        <ul className="menuList">
          <li className="menuList__item menuList__item--active">
            <a href="#signup">Sign up</a>
          </li>
          <li className="menuList__item">
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Navigation;
