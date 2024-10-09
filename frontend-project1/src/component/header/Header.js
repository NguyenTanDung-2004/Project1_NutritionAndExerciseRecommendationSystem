import React from "react";
import "../../css/home_in/Header.css";
import LogoImg from "../../img/home_out/logo.png";
import AvatarDefault from "../../img/home_in/avatar-default.png";

const Header = (props) => {
  return (
    <div className="header-in">
      <div className="circle-container">
        <img className="logo" src={LogoImg} alt="" />
      </div>
      <div className="sliding-text-container">
        <div className="sliding-text">
          Welcome, {props.username}. {props.text}
        </div>
      </div>
      <div className="header-in-right">
        <div className="circle-container notify">
          <i className="fa-regular fa-bell"></i>
          {props.notifications > 0 && (
            <span className="notification-count">{props.notifications}</span>
          )}
        </div>
        <div className="circle-container avatar">
          <img className="avatar" src={props.avatar || AvatarDefault} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
