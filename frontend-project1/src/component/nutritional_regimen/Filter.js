import React, { useState } from "react";
import "../../css/nutritional_regimen/Filter.css";

const cookingMethods = [
  "fry",
  "stir-fry",
  "steam",
  "deep",
  "simmer",
  "braise",
  "grill/roast",
  "boil",
];
const diets = [
  "low-carb",
  "low-fat",
  "high-protein",
  "vegetarian",
  "healthy",
  "basic",
  "vegan",
];
const cookingTimes = ["< 30 minutes", "< 1 hours", "< 2 hours"];
const levels = ["Easy", "Medium", "Hard"];

const Filter = () => {
  const [selectedCookingMethods, setSelectedCookingMethods] = useState([]);
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [selectedCookingTime, setSelectedCookingTime] = useState(null);
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleMultiSelect = (item, selected, setSelected) => {
    return selected.includes(item)
      ? setSelected(selected.filter((i) => i !== item))
      : setSelected([...selected, item]);
  };

  const handleSingleSelect = (item, setSelected) => {
    return setSelected(item);
  };

  return (
    <>
      <div className="dishes-filter">
        <span className="title">Filter</span>

        {/* cooking methods */}
        <div className="filter-item">
          <div className="filter-label">Cooking methods:</div>

          <div className="filter-options">
            {cookingMethods.map((method) => (
              <span
                key={method}
                className={`filter-option ${
                  selectedCookingMethods.includes(method) ? "selected" : ""
                }`}
                onClick={() =>
                  handleMultiSelect(
                    method,
                    selectedCookingMethods,
                    setSelectedCookingMethods
                  )
                }
              >
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* diets */}
        <div className="filter-item">
          <div className="filter-label">Diet:</div>

          <div className="filter-options">
            {diets.map((dietOption) => (
              <span
                key={dietOption}
                className={`filter-option ${
                  selectedDiets.includes(dietOption) ? "selected" : ""
                }`}
                onClick={() =>
                  handleMultiSelect(dietOption, selectedDiets, setSelectedDiets)
                }
              >
                {dietOption}
              </span>
            ))}
          </div>
        </div>

        {/* cooking time */}
        <div className="filter-item">
          <div className="filter-label">Cooking time:</div>

          <div className="filter-options cooking-time">
            {cookingTimes.map((time, index) => (
              <div key={index}>
                <label>
                  <input
                    type="radio"
                    className="cookingTime"
                    value={time}
                    checked={selectedCookingTime === time}
                    onChange={() => {
                      handleSingleSelect(time, setSelectedCookingTime);
                    }}
                  />
                  {time}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* levels */}
        <div className="filter-item">
          <div className="filter-label">Level:</div>

          <div className="filter-options">
            {levels.map((level) => (
              <button
                key={level}
                className={`filter-button ${
                  selectedLevel === level ? "selected" : ""
                }`}
                onClick={() => {
                  handleSingleSelect(level, setSelectedLevel);
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Filter;
