import React, { useState } from "react";
import "../../css/nutritional_regimen/MainDish.css";
import CategoryList from "./CategoryList";
import ListDishes from "./ListDishes";
import Filter from "./Filter";

const MainDish = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => {
    if (!searchValue.trim()) {
      console.log("input empty");
      return;
    }

    setSearchClicked(true);

    console.log(`Searching for: ${searchValue}`);
    fetchSearchResults(searchValue);
  };

  const fetchSearchResults = (query) => {
    // xu ly event search
  };

  return (
    <>
      <div className="main-dish">
        <span className="title">DISCOVER</span>
        <div className="header-list">
          <CategoryList></CategoryList>
          <div className="search-wrapper">
            <input
              type="text"
              className="search-input"
              value={searchValue}
              placeholder="search ..."
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button className="search-button" onClick={handleSearchClick}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="main">
          <ListDishes></ListDishes>
          <Filter></Filter>
        </div>
      </div>
    </>
  );
};

export default MainDish;
