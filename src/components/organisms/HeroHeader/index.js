import React from 'react';

// Styles
import './HeroHeader.scss';

const HeroHeader = () => (
  <div className="heroheader">
    <div className="heroheader__container">
      <div className="heroheader__title">
        <h1>Welcome to Blogonline!</h1>
      </div>
      <div className="heroheader__description">
        <p>Where you can create or read stories of any kind.</p>
      </div>
    </div>
  </div>
);

export default HeroHeader;
