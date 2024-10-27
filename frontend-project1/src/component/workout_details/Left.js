import React, { useState } from "react";
import "../../css/workout_details/Left.css";
import StarVoted from "../../img/nutritional_regimen/star-voted.png";
import Star from "../../img/nutritional_regimen/star.png";
import { useNavigate } from "react-router-dom";

const Left = ({ image }) => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

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

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="workout-details__left">
        <button className="btn-back" onClick={() => handleClickBack()}>
          <i class="fa-solid fa-arrow-left-long"></i>
        </button>

        <div className="workout-details__remove-bg">
          <img src={image} alt="" />
        </div>

        <div className="workout-details__text">
          <span>
            “You will have everything you need to reach your personal fitness
            goals”
          </span>

          <div className="workout-details__rating">{renderRating()}</div>
        </div>
      </div>
    </>
  );
};

export default Left;
