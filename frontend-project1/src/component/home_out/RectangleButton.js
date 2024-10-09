import React from "react";
import "../../css/home_out/RectangleButton.css";

const RectangleButton = (props) => {
  const className = `btn-${props.name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className={`btn-rectangle ${className}`}>
      <span>{props.name}</span>
      <div className="icon">
        <i class="fa-solid fa-angle-right"></i>
      </div>
    </div>
  );
};

export default RectangleButton;
