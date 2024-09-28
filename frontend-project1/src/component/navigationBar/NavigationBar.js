import React, { useState } from "react";
import listNavigation from "./DataNavigation";
import "../../css/home_in/NavigationBar.css";

const NavigationBar = ({ itemClicked }) => {
  return (
    <div className="navigation-list">
      {listNavigation.map((item, index) => (
        <a
          href={item.link}
          key={index}
          className={`navigation-item ${
            itemClicked === item.label ? "active" : ""
          }`}
        >
          <i className={item.icon}></i>
          <span className="tooltip">{item.label}</span>
        </a>
      ))}
    </div>
  );
};

export default NavigationBar;
