import React, { useState } from "react";
import "../../css/nutritional_regimen/SearchBar.css";

const SearchBar = ({ onSearch }) => {
  const [searchTern, setSearchTern] = useState("");
  const handleInputChange = (e) => {
    setSearchTern(e.target.value);
  };
  const handleSearchClick = () => {
    if (searchTern.trim()) onSearch(searchTern);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTern}
        onChange={handleInputChange}
        placeholder="Enter name dish ..."
        className="search-input"
      />
      <button className="search-button" onClick={handleSearchClick}>
        <i className="fa fa-search"></i> Search
      </button>
    </div>
  );
};

export default SearchBar;
