import React from 'react';
import logo from '../../../images/logo.svg';

// Styles
import './Main.scss';

export default () => (
  <div className="Main">
    <div className="Main__header">
      <img src={logo} className="Main__logo" alt="logo" />
      <h2 className="Main__title">
        <span>
My Website
        </span>
      </h2>
    </div>
    <div className="Main__subtitle">
      <p>
allow custom config for create-react-app without ejecting
      </p>
    </div>
  </div>
);
