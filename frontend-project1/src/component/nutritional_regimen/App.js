import React from "react";
import "../../css/nutritional_regimen/App.css";
import FirstMain from "./FirstMain";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import MainDish from "./MainDish";

const App = () => {
  return (
    <>
      <div className="nutritional_regiment">
        <Header
          username="Phan Giang"
          text="May this website help you achieve your health goals."
          notifications={10}
        ></Header>
        <FirstMain></FirstMain>
      </div>
      <MainDish></MainDish>
      <Footer></Footer>
    </>
  );
};

export default App;
