import React from "react";
import "./index.scss";
import smartphone from "./assets/smartphone.svg";
import laptop from "./assets/laptop.svg";
import analytics from "./assets/analytics.svg";

const SecondSection = () => {
  return (
    <div id="second-section">
      <div className="second-section-item">
        <img src={smartphone} className="image" />
        <p className="description">
          This is one of the best features of the product, with a few lines we
          can say a log, but after 
        </p>
        <a className="button">Learn More</a>
      </div>
      <div className="second-section-item">
        <img src={laptop} className="image" />
        <p className="description">
          This is one of the best features of the product, with a few lines we
          can say a log, but after this there is a small clickable button with
          learn more
        </p>
        <a className="button">Learn More</a>
      </div>
      <div className="second-section-item">
        <img src={analytics} className="image" />
        <p className="description">
          This is one of the best features of the product, with a few lines we
          can say a log, but after this there is a small clickable button with
          learn more, lets take a look
        </p>
        <a className="button">Learn More</a>

        
       
      </div>
    </div>
  );
};

export default SecondSection;
