import React, { useState } from "react";
import "../../css/workout/Main.css";
import Button from "./Button";
import CategoryList from "./CategoryList";
import ListWorkout from "./ListWorkout";

const Main = () => {
  const [activeButton, setActiveButton] = useState("FOR YOU");

  const fetchForYouData = async () => {
    console.log("Fetching 'for you' data...");
    // api dishes for you
  };

  const fetchAllData = async () => {
    console.log("Fetching 'All' data...");
    // api all dishes
  };

  const handleButtonClick = (label) => {
    setActiveButton(label);

    if (label === "FOR YOU") {
      fetchForYouData();
    } else if (label === "ALL") {
      fetchAllData();
    }
  };

  return (
    <>
      <div className="main-workout">
        <div className="header">
          <span className="title">BÀI TẬP</span>
        </div>

        <div className="button-filter">
          <Button
            label="DÀNH CHO BẠN"
            onClick={() => handleButtonClick("FOR YOU")}
            isActive={activeButton === "FOR YOU"}
          ></Button>

          <Button
            label="TẤT CẢ"
            onClick={() => handleButtonClick("ALL")}
            isActive={activeButton === "ALL"}
          ></Button>
        </div>

        <CategoryList />

        <ListWorkout />
      </div>
    </>
  );
};

export default Main;
