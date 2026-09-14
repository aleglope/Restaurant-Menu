import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Gericht is a small restaurant in the old town of Santiago de Compostela. We cook what the Galician coast and countryside give us each week: line-caught fish from the rías, beef from the mountains of Lugo, vegetables from farms within an hour&apos;s drive. The room seats thirty, the kitchen is open, and every plate is finished at the pass by the chef.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">The house was built in 1580 for a merchant of the pilgrims&apos; road. In 2019 we restored its stone walls and chestnut beams and opened with a single idea: a tasting menu that changes with the market, served without ceremony. Since then the menu has changed more than two hundred times. The idea has not.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;