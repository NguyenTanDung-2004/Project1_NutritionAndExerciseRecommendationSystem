import React, { useState } from "react";
import "../../css/home_in/Services.css";
import WorkOutImg from "../../img/home_out/workout.png";
import NutritionalImg from "../../img/home_in/diet-recom.png";
import StatisticImg from "../../img/home_in/statistic.png";
import AccountImg from "../../img/home_in/avatar-default.png";

const Services = () => {
  // slider - bottom service
  const items = [
    { id: 1, label: "Practices", img: WorkOutImg },
    { id: 2, label: "Nutritional regimen", img: NutritionalImg },
    { id: 3, label: "Statistics", img: StatisticImg },
    { id: 4, label: "My profile", img: AccountImg },
    { id: 5, label: "My profile", img: AccountImg },
    { id: 6, label: "My profile", img: AccountImg },
    { id: 7, label: "Statistics", img: StatisticImg },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlider = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 >= items.length ? 0 : prevIndex + 3
    );
  };

  const displayedItems = items.slice(currentIndex, currentIndex + 3);

  // // Tính toán khoảng cách của button
  // const itemWidth = 240;
  // const rightPosition = (3 - displayedItems.length) * itemWidth - 10;

  // end slider
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
          <div className="main-container">
            <div className="item">
              <div className="div-icon">
                <i class="fa-solid fa-user-nurse"></i>
              </div>
              <div className="item-content">
                <div className="item-label">BMI</div>
                <div className="item-details">23</div>
              </div>
            </div>
            <div className="item">
              <div className="div-icon">
                <i class="fa-solid fa-heart"></i>
              </div>
              <div className="item-content">
                <div className="item-label">Heart rate</div>
                <div className="item-details">100 bpm</div>
              </div>
            </div>
            <div className="item">
              <div className="div-icon">
                <i class="fa-solid fa-droplet"></i>
              </div>
              <div className="item-content">
                <div className="item-label">Blood pressure</div>
                <div className="item-details">80-90 mmHg</div>
              </div>
            </div>
            <div className="item">
              <div className="div-icon">
                <i class="fa-solid fa-eye-dropper"></i>
              </div>
              <div className="item-content">
                <div className="item-label">Glucose level</div>
                <div className="item-details">230/ml</div>
              </div>
            </div>
          </div>
        </div>
        <div className="challenges">
          <div className="label">
            <div className="blue-point"></div>
            <span>Challenges</span>
          </div>
          <div className="main-container">
            <div className="day-container">
              <i class="fa-regular fa-calendar"></i>
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
              <div className="item">
                <span>4. Nguyen Tan Dung</span>
              </div>
            </div>
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
            <div className="main-container">
              <img src={item.img} alt={item.label} />
            </div>
          </div>
        ))}

        <div
          className="arrow-container"
          // style={{ right: `${rightPosition}px` }}
        >
          <button onClick={handleSlider}>
            <i class="fa-solid fa-arrow-right-arrow-left"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
