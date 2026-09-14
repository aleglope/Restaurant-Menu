import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Good cooking starts at the market, not at the stove.</p>
        </div>
        <p className="p__opensans">Every morning we choose what the sea and the land are giving that day, and the menu is written afterwards, never before. We cook over oak embers because fire adds what no sauce can, and we keep the plates simple so the produce stays the protagonist. If you leave knowing where your dinner came from, we have done our job.</p>
      </div>

      <div className="app__chef-sign">
        <p>Xoán Rivas</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;