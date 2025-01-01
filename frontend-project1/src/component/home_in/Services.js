import React, { useState } from "react";
import "../../css/home_in/Services.css";
import WorkOutImg from "../../img/home_out/workout.png";
import NutritionalImg from "../../img/home_in/diet-recom.png";
import StatisticImg from "../../img/home_in/statistic.png";
import AccountImg from "../../img/home_in/avatar-default.png";
import GoalImg from "../../img/home_in/goals.png";
import { Link } from "react-router-dom";

const Services = () => {
  const items = [
    { id: 1, label: "Workout", img: WorkOutImg, link: "/workout" },
    {
      id: 2,
      label: "Nutritional regimen",
      img: NutritionalImg,
      link: "/nutritional_regimen",
    },
    { id: 3, label: "Goals", img: GoalImg, link: "/goals" },
    { id: 4, label: "Statistics", img: StatisticImg, link: "/history" },
    { id: 5, label: "My profile", img: AccountImg, link: "/profile" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlider = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= items.length ? 0 : prevIndex + 3
    );
  };

  const displayedItems = items.slice(currentIndex, currentIndex + 3);

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div>
      <div className="top">
        <div className="health-data">
          <div className="label">
            <div className="blue-point"></div>
            <span>Your health data</span>
          </div>
          <Link to="/profile" className="main-container">
            <div className="item">
              <div className="div-icon">
                <i className="fa-solid fa-user-nurse"></i>
              </div>
              <div className="item-content">
                <div className="item-label">BMI</div>
                <div className="item-details">23</div>
              </div>
            </div>
            <div className="item">
              <div className="div-icon">
                <i className="fa-solid fa-heart"></i>
              </div>
              <div className="item-content">
                <div className="item-label">Nhịp tim</div>
                <div className="item-details">100 bpm</div>
              </div>
            </div>
            <div className="item">
              <div className="div-icon">
                <i className="fa-solid fa-droplet"></i>
              </div>
              <div className="item-content">
                <div className="item-label">Huyết áp</div>
                <div className="item-details">80-90 mmHg</div>
              </div>
            </div>
            <div className="item">
              <div className="div-icon">
                <i className="fa-solid fa-eye-dropper"></i>
              </div>
              <div className="item-content">
                <div className="item-label">Glucozo level</div>
                <div className="item-details">230/ml</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="challenges">
          <div className="label">
            <div className="blue-point"></div>
            <span>Challenges</span>
          </div>
          <div className="main-container">
            <Link to="/challenges">
              {" "}
              {/* Link only wraps content inside main-container*/}
              <div className="day-container">
                <i className="fa-regular fa-calendar"></i>
                <span>{formattedDate}</span>
              </div>
              <div className="ranking">
                <div className="item">
                  <span>1. Phan Giang</span>
                </div>
                <div className="item">
                  <span>2. Phan Giang</span>
                </div>
                <div className="item">
                  <span>3. Phan Giang</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom">
        {displayedItems.map((item) => (
          <div className="item" key={item.id}>
            <div className="label">
              <div className="blue-point"></div>
              <span>{item.label}</span>
            </div>
            <Link to={item.link} className="main-container">
              <img src={item.img} alt={item.label} />
            </Link>
          </div>
        ))}

        <div className="arrow-container">
          <button onClick={handleSlider}>
            <i className="fa-solid fa-arrow-right-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
