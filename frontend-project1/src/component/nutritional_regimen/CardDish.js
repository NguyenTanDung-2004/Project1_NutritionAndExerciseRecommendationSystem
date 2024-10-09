import React from "react";
import "../../css/nutritional_regimen/CardDish.css";
import IconTime from "../../img/nutritional_regimen/icon-time.png";
import IconHeart from "../../img/nutritional_regimen/icon-heart.png";
import IconCalo from "../../img/nutritional_regimen/icon-calo.png";
import StarVoted from "../../img/nutritional_regimen/star-voted.png";
import Star from "../../img/nutritional_regimen/star.png";

const CardDish = ({ type, name, img, time, calo, likes, rating, onClick }) => {
  const renderRating = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img key={i} src={i <= rating ? StarVoted : Star} alt="Star" />
      );
    }
    return stars;
  };
  return (
    <>
      <div
        style={{ backgroundColor: "#FFF9E4" }}
        className="dish-container"
        onClick={onClick}
      >
        <span className="type">{type}</span>
        <div className="dish-body">
          <div className="dish-left">
            <span className="name">{name}</span>
            <img src={img} alt="" />
          </div>
          <div className="dish-right">
            <div className="dish-info">
              <span>
                <img src={IconTime} alt="" />
                {time}
              </span>
              <span>
                <img src={IconCalo} alt="" />
                {`${calo} calos`}
              </span>
              <span>
                <img src={IconHeart} alt="" />
                {likes}
              </span>
            </div>
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

export default CardDish;
