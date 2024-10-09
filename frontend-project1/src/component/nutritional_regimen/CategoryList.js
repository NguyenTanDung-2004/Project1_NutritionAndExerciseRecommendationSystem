import React, { useState } from "react";
import "../../css/nutritional_regimen/CategoryList.css";

const categories = [
  { label: "All" },
  { label: "Main dish" },
  { label: "Breakfast" },
  { label: "Lunch" },
  { label: "Dinner" },
  { label: "Side dish" },
  { label: "Snack" },
  { label: "Drink" },
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Hàm xử lý khi chọn category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    // filter
    console.log(category);
  };
  return (
    <>
      <div className="category-list">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`category-item ${
              selectedCategory === category.label ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(category.label)}
          >
            {category.label}
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
