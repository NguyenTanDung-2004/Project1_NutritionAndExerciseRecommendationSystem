import React, { useState } from "react";
import "../../css/workout/CategoryList.css";

const categories = [
  { label: "Tất cả" },
  { label: "Tay" },
  { label: "Chân" },
  { label: "Khớp" },
  { label: "Khởi động" },
  { label: "Cardio" },
  { label: "Giãn cơ và phục hồi" },
];

const limitations = [
  "Bệnh tim",
  "Bệnh phổi",
  "Bệnh tay",
  "Bệnh khác",
  "Hạn chế",
];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectLimitation, setSelectLimitation] = useState("Hạn chế");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleLimitationClick = (option) => {
    setSelectLimitation(option);
    closeDropdown();
    handleCategoryClick(option);
  };
  const openDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const closeDropdown = () => {
    setShowDropdown(false);
  };

  return (
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

      <div className="category-item dropdown" onMouseLeave={closeDropdown}>
        <button className="dropdown-button" onClick={openDropdown}>
          {selectLimitation}
          <svg
            style={{ marginLeft: "20px" }}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.85892 2.26811L5 6.29356L1.14108 2.26811C0.836791 1.91808 0.532503 1.91078 0.228216 2.24624C-0.076072 2.58169 -0.076072 2.90985 0.228216 3.23072L4.54357 7.78123C4.65422 7.92708 4.80636 8 5 8C5.19364 8 5.34578 7.92708 5.45643 7.78123L9.77178 3.23072C10.0761 2.90985 10.0761 2.58169 9.77178 2.24624C9.4675 1.91078 9.16321 1.91808 8.85892 2.26811Z"
              fill="#2B3034"
              fillOpacity="0.9"
            />
          </svg>
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            {limitations.map((item, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleLimitationClick(item)}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
