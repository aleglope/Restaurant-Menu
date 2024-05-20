import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app_navbar">
      <div className="app_navbar-logo">
        <img src={images.gericht} alt="app_logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#home">About</a></li>
        <li className="p__opensans"><a href="#home">Menu</a></li>
        <li className="p__opensans"><a href="#home">Awards</a></li>
        <li className="p__opensans"><a href="#home">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p_opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#home">About</a></li>
              <li className="p__opensans"><a href="#home">Menu</a></li>
              <li className="p__opensans"><a href="#home">Awards</a></li>
              <li className="p__opensans"><a href="#home">Contact</a></li>
            </ul>

          </div>
        )}
      </div>
    </nav>
  )
}


export default Navbar;
