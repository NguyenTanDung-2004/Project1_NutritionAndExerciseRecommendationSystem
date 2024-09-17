import React from "react";
import listNavigation from "./DataNavigation";
import "../../css/home_in/NavigationBar.css";

const NavigationBar = () => {
  return (
    <div className="navigation-list">
      {listNavigation.map((item, index) => (
        <a href={item.link} key={index} className="navigation-item">
          <i className={item.icon}></i>
          <span className="tooltip">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default NavigationBar;
