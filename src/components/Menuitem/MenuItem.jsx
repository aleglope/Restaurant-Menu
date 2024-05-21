import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p classNAme="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
      </div>
      <div className="app_menuitem"/>

      <div className="app__menuitem-price">
        <p classNAme="p__cormorant">{price}</p>

      </div>
    </div>
    <div className="app__menuitem-sub"></div>
    <p className="app_opensans" style={{color: '#AAA'}}>{tags}</p>
  </div>
);

export default MenuItem;
