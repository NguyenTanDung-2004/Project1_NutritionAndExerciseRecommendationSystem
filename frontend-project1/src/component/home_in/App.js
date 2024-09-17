import React from "react";
import Header from "./Header";
import NavigationBar from "./NavigationBar";
import "../../css/home_in/App.css";
import DivLeft from "./DivLeft";
import Services from "./Services";

const App = () => {
  return (
    <div className="home_in">
      <Header
        username="Phan Giang"
        text="May this website help you achieve your health goals."
        notifications={10}
      ></Header>
      <div className="main">
        <div className="navigation-bar">
          <NavigationBar></NavigationBar>
        </div>
        <div className="body">
          <DivLeft></DivLeft>
          <Services></Services>
        </div>
      </div>
    </div>
  );
};

export default App;
