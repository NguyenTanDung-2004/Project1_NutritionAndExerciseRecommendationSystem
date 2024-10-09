import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import { useLocation, useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "../../css/dish_details/RecommendDish.css";
import CardDish from "../nutritional_regimen/CardDish";

const RecommendDish = ({ dishes }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/nutritional_regimen/${id}`);
  };

  return (
    <div id="section-5" className="recommend-dish">
      <span className="recommend-dish__title">Món ăn có thể bạn sẽ thích</span>
      <div className="recommend-dish__main">
        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
        >
          {dishes?.map((dish, index) => (
            <SwiperSlide key={index}>
              <CardDish
                type={dish.type}
                name={dish.name}
                img={dish.img}
                time={dish.time}
                calo={dish.calo}
                likes={dish.likes}
                rating={dish.rating}
                onClick={() => handleClick(dish.id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecommendDish;
