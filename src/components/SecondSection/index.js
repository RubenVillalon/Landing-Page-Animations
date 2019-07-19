import React from "react";
import "./index.scss";
import molecule from './assets/molecular.svg'

const SecondSection = () => {
  return (
    <div id="second-section">
      <div className="second-section-item">
        <img src={molecule} className='image'></img>
        <p className='description'>
          This is one of the best features of the product, with a few lines we
          can say a log, but after this there is a small clickable button with
          learn more, lets take a look
        </p>
        <a className='button'>Learn More</a>
      </div>
    </div>
  );
};

export default SecondSection;
