import React from "react";
import "../../css/home_out/Main4.css";
import LogoImg from "../../img/home_out/logo.png";

const Main4 = (props) => {
  console.log(props);
  return (
    <div className="main4">
      <div className="main4-body">
        <div className="main4-logo">
          <img src={LogoImg} alt="logo.png" />
          <span>Health Care</span>
        </div>
        <div className="item">
          <span className="title">Quick Links</span>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="item">
          <span className="title">Contact Us</span>
          <div className="contact-list">
            <span className="contact-info">Address: {props.address}</span>
            <span className="contact-info">Phone: {props.phone}</span>
            <span className="contact-info">
              Email: <a href={`mailto:${props.email}`}>{props.email}</a>
            </span>
          </div>
        </div>
        <div className="item">
          <span className="title">Social</span>
          <div className="social-list">
            <a href="https://www.facebook.com/UIT.Fanpage">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/yyan.g293/">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.tiktok.com/@tuyensinhuit">
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="main4-line"></div>
      <div className="main4-footer">
        <span>&copy; HeathCare 2024</span>
      </div>
    </div>
  );
};

export default Main4;
