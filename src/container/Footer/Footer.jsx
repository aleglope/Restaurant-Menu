import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Rúa da Raíña 12, 15702 Santiago de Compostela, Galicia</p>
        <p className="p__opensans">+34 981 00 00 00</p>
        <p className="p__opensans">reservas@gericht.example</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p className="p__opensans">&quot;The fire does half the work. The other half is knowing when to stop.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Tuesday - Saturday:</p>
        <p className="p__opensans">1:30 pm - 3:30 pm and 8:30 pm - 11:30 pm</p>
        <p className="p__opensans">Sunday - Monday:</p>
        <p className="p__opensans">Closed</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2026 Gericht. All rights reserved.</p>
    </div>

  </div>
);

export default Footer;