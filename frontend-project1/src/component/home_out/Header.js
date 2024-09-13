import React, { useState } from "react";
import LogoImg from "../../img/home_out/logo.png";
import "../../css/home_out/Header.css";

const Header = () => {
  const [activeItem, setActiveItem] = useState("category-home");

  const handleItemClick = (id, event) => {
    event.preventDefault();
    setActiveItem(id);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-logo">
          <img src={LogoImg} alt="" />
          <span>Health Care</span>
        </div>
        <div className="header-line"></div>
        <div className="category">
          <a
            href="#"
            id="category-home"
            className={`category-item ${
              activeItem === "category-home" ? "active" : ""
            }`}
            onClick={(e) => handleItemClick("category-home", e)}
          >
            Home
          </a>
          <a
            href="#"
            id="category-services"
            className={`category-item ${
              activeItem === "category-services" ? "active" : ""
            }`}
            onClick={(e) => handleItemClick("category-services", e)}
          >
            Services
          </a>
          <a
            href="#"
            id="category-contact"
            className={`category-item ${
              activeItem === "category-contact" ? "active" : ""
            }`}
            onClick={(e) => handleItemClick("category-contact", e)}
          >
            Contact
          </a>
        </div>
        <div>
          <div className="btn-started">
            <span>Get started</span>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
