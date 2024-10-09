import React, { useState } from "react";
import "../../css/dish_details/CookingInstructions.css";
import Video from "../../img/dish_details/video.mp4";

const CookingInstructions = ({ first, second, third, video, img1, img2 }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setIsVideoPlaying(true); // Chuyển sang true khi video phát
  };

  const closeVideo = () => {
    setIsVideoPlaying(false); // Trở về false khi đóng video
  };

  return (
    <>
      <div
        id="section-4"
        className={`cooking-instructions ${isVideoPlaying ? "blur-bg" : ""}`}
      >
        <span className="cooking-instructions__title">
          Nutritional Ingredients
        </span>

        <div className="cooking-instructions__main">
          <div className="cooking-instructions__item">
            <div className="video-container" onClick={handleVideoClick}>
              <video
                className="instruction-video"
                src={video}
                muted={!isVideoPlaying}
                autoPlay={isVideoPlaying}
                loop
              ></video>
              {!isVideoPlaying && <div className="video-overlay">▶</div>}
            </div>

            <div className="cooking-instructions__text">
              <span>Sơ chế nguyên liệu</span>

              <ul>
                {first.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cooking-instructions__item reverse">
            <div className="cooking-instructions__img">
              <img src={img1} alt="" />
            </div>

            <div className="cooking-instructions__text">
              <span>Cách làm</span>

              <ul>
                {second.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="cooking-instructions__item">
            <div className="cooking-instructions__img">
              <img src={img2} alt="" />
            </div>

            <div className="cooking-instructions__text">
              <span>Mẹo nhỏ</span>

              <ul>
                {third.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <span className="cooking-instructions__footer1">Thưởng thức nào !</span>
        <span className="cooking-instructions__footer2">
          Cùng nhau thưởng thức món ăn này, đảm bảo sẽ có những giây phút thật
          vui vẻ và đáng nhớ.
        </span>
      </div>

      {isVideoPlaying && (
        <div className="fullscreen-video-overlay">
          <video
            className="fullscreen-video"
            src={Video}
            autoPlay
            loop
            controls
          ></video>
          <button className="close-btn" onClick={closeVideo}>
            ✖
          </button>
        </div>
      )}
    </>
  );
};

export default CookingInstructions;
