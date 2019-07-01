import React from "react";
import "./index.scss";

const TypeEffect = props => {
  return (
    <div>
      <p class="line-1 anim-typewriter">
        {props.text}
      </p>
    </div>
  );
};

export default TypeEffect;
