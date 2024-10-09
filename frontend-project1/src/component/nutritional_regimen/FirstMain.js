import React, { useState } from "react";
import "../../css/nutritional_regimen/FirstMain.css";
import NavigationBar from "../navigationBar/NavigationBar";
import BunBoImg from "../../img/nutritional_regimen/bunbo.png";
import Button from "./Button";
import SearchBar from "./SearchBar";

const FirstMain = () => {
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

  const fetchDataByName = async (searchTerm) => {
    console.log(`Fetching data by name dish: ${searchTerm}`);
  };
  return (
    <>
      <div className="first-main">
        <NavigationBar itemClicked="Nutritional regimen"></NavigationBar>
        <div className="main">
          <div className="body">
            <div className="left">
              <span>NUTRITRIONAL REGIMEN</span>

              <SearchBar onSearch={fetchDataByName} />

              <div className="button-filter">
                <Button
                  label="FOR YOU"
                  onClick={() => handleButtonClick("FOR YOU")}
                  isActive={activeButton === "FOR YOU"}
                ></Button>

                <Button
                  label="ALL"
                  onClick={() => handleButtonClick("ALL")}
                  isActive={activeButton === "ALL"}
                ></Button>
              </div>

              <a href="#" className="link-to-discover">
                Discover
              </a>
            </div>
            <div className="right">
              <img src={BunBoImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstMain;
