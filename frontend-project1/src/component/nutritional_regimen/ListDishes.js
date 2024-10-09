import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../css/nutritional_regimen/ListDishes.css";
import CardDish from "./CardDish";
import DishesData from "./ListDishesData";

const ListDishes = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DishesData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(DishesData.length / itemsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };
  const getDisplayedPages = () => {
    if (currentPage === 1) {
      return [1, 2, 3].filter((page) => page <= totalPages);
    } else if (currentPage === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages].filter(
        (page) => page > 0
      );
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  };

  const handleSortChange = (sort) => {
    setSortOption(sort);
    setIsDropdownOpen(false);
  };

  const sortedDishes = () => {
    let sorted = [...currentItems];
    if (sortOption === "All") return sorted;
    if (sortOption === "New") {
      // code sắp xếp mới
    } else if (sortOption === "Old") {
      sorted.reverse();
    } else if (sortOption === "Rating") {
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  };

  const handleClick = (id) => {
    navigate(`/nutritional_regimen/${id}`);
  };

  return (
    <div className="list-dishes">
      <div className="list-info">
        <span className="count-dish">{DishesData.length} dishes</span>
        <div className="dropdown">
          <button
            className="dropdown-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Sort by: {sortOption}
            <span className="arrow">▼</span>
          </button>
          <ul
            className={`dropdown-menu ${isDropdownOpen ? "display-block" : ""}`}
          >
            {["All", "New", "Old", "Rating"].map((sort, index) => (
              <li key={index} onClick={() => handleSortChange(sort)}>
                {sort}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="list-main">
        {sortedDishes()?.map((dish) => (
          <CardDish
            key={dish.id}
            type={dish.type}
            img={dish.img}
            name={dish.name}
            time={dish.time}
            calo={dish.calo}
            likes={dish.likes}
            rating={dish.rating}
            onClick={() => handleClick(dish.id)}
          />
        ))}
      </div>

      <div className="pagination">
        <button
          className="btn-prev"
          disabled={currentPage === 1}
          onClick={goToPrevPage}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        {getDisplayedPages().map((page) => (
          <button
            key={page}
            className={`btn-page ${currentPage === page ? "active" : ""}`}
            onClick={() => paginate(page)}
          >
            {page}
          </button>
        ))}
        <button
          className="btn-next"
          disabled={currentPage === totalPages}
          onClick={goToNextPage}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default ListDishes;
