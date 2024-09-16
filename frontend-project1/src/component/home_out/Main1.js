import React from "react";
import Header from "./Header";
import HomeLeft from "./HomeLeft";
import RectangleButton from "./RectangleButton";
import DivStatistic from "./DivStatistic";
import "../../css/home_out/Main1.css";

const Main1 = () => {
  return (
    <div id="main1">
      <Header></Header>
      <div className="main1-content">
        <HomeLeft></HomeLeft>
        <div className="main1-btn">
          <RectangleButton name="Learn More"></RectangleButton>
          <RectangleButton name="Get Started"></RectangleButton>
        </div>
      </div>
      <DivStatistic feedback="100%" service="5"></DivStatistic>
    </div>
  );
};

export default Main1;
