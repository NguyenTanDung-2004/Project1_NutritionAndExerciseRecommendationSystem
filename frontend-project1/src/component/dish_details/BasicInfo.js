import React, { useState } from "react";
import "../../css/dish_details/BasicInfo.css";
import StarVoted from "../../img/nutritional_regimen/star-voted.png";
import Star from "../../img/nutritional_regimen/star.png";

const BasicInfo = ({ img, method, time, type, level, diet, favourites }) => {
  const [rating, setRating] = useState(0);

  const renderRating = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? StarVoted : Star}
          alt="Star"
          onClick={() => handleStarClick(i)}
        />
      );
    }
    return stars;
  };

  const handleStarClick = (index) => {
    if (index === rating) {
      setRating(0);
    } else {
      setRating(index);
    }
  };

  return (
    <>
      <div id="section-2" className="basic-info">
        <span className="basic-info__title">The basic characteristics </span>
        <div className="basic-info__main">
          <div className="basic-info__left">
            <div className="img-container">
              <img src={img} alt="" />
            </div>

            <div className="basic-info__rating">{renderRating()}</div>
          </div>
          <div className="basic-info__right">
            <div className="basic-info__item">
              <span>Phương pháp chế biến: {method}</span>
            </div>

            <div className="basic-info__item">
              <span>Thời gian nấu: {time}</span>
            </div>

            <div className="basic-info__item">
              <span>Loại món ăn: {type}</span>
            </div>

            <div className="basic-info__item">
              <span>Mức độ: {level}</span>
            </div>

            <div className="basic-info__item">
              <span>Chế độ ăn: {diet}</span>
            </div>

            <div className="basic-info__item">
              <span>{favourites} lượt yêu thích</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicInfo;
