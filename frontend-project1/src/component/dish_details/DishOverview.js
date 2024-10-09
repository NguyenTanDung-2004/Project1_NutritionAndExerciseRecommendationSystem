import React, { useState } from "react";
import "../../css/dish_details/DishOverview.css";
import StarVoted from "../../img/nutritional_regimen/star-voted.png";
import Star from "../../img/nutritional_regimen/star.png";
import FullHeart from "../../img/dish_details/icon-no-heart.png";
import NoHeart from "../../img/nutritional_regimen/icon-heart.png";
import { useNavigate } from "react-router-dom";

const DishOverview = ({
  type,
  name,
  img,
  desc,
  calo,
  protein,
  fat,
  carb,
  rating,
}) => {
  const [heart, setHeart] = useState(FullHeart);
  const navigate = useNavigate();

  const handleClickHeart = () => {
    heart === FullHeart ? setHeart(NoHeart) : setHeart(FullHeart);
  };

  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img key={i} src={i <= rating ? StarVoted : Star} alt="Star" />
      );
    }
    return stars;
  };

  const handleClickBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div id="section-1" className="dish-overview">
        <div className="heart-corner">
          <img
            src={heart}
            alt="Heart Icon"
            onClick={() => handleClickHeart()}
          />
        </div>

        <div className="dish-overview__main">
          <div className="dish-overview__left">
            <span className="type-dish">{type}</span>

            <span className="name-dish">{name}</span>

            <img src={img} alt="bún bò" />

            <div className="info-dish">
              <div className="info-item">
                <span className="info-item__name">Calories</span>
                <span className="info-item__amount">{calo}</span>
              </div>

              <div className="info-item">
                <span className="info-item__name">Protein</span>
                <span className="info-item__amount">{protein}g</span>
              </div>

              <div className="info-item">
                <span className="info-item__name">Fat</span>
                <span className="info-item__amount">{fat}g</span>
              </div>

              <div className="info-item">
                <span className="info-item__name">Carb</span>
                <span className="info-item__amount">{carb}g</span>
              </div>
            </div>
          </div>
          <div className="dish-overview__right">
            <button className="btn-back" onClick={() => handleClickBack()}>
              <i class="fa-solid fa-arrow-left-long"></i>
            </button>

            <p>
              <span>{name} </span>
              {desc}
            </p>

            <div className="dish-rating">
              {renderRating(rating)}

              <span>{rating}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DishOverview;
