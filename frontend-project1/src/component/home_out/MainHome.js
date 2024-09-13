import React from "react";
import "../../css/home_out/MainHome.css";
import Main3 from "./Main3";
import Main1 from "./Main1";
import Main2 from "./Main2";
import Main4 from "./Main4";

const MainHome = () => {
  return (
    <div>
      <Main1></Main1>
      <Main2></Main2>
      <Main3></Main3>
      <Main4
        address="Khu Pho 6, Linh Trung, Thu Duc, Tp HCM"
        email="phongdaotaodh@uit.edu.vn"
        phone="(028) 372 51993"
      ></Main4>
    </div>
  );
};

export default MainHome;
