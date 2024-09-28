import React, { useEffect, useState } from "react";
import "../../css/nutritional_regimen/ListDishes.css";
import CardDish from "./CardDish";
import DishesData from "./ListDishesData";

const sortsData = ["All", "New", "Old", "Rating"];

const ListDishes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // pagination
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DishesData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(DishesData.length / itemsPerPage);

  // change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // handle button prev - next
  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // display 3 pages
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

  // pagination

  const handleSortChange = (sort) => {
    setSortOption(sort);
    setIsDropdownOpen(false);
  };

  // sort
  const sortedDishes = () => {
    let sorted = [...currentItems];
    if (sortOption === "All") return sorted;
    if (sortOption === "New") {
      //
    } else if (sortOption === "Old") {
      //
      sorted.reverse();
    } else if (sortOption === "Rating") {
      //
      sorted.sort((a, b) => b.rating - a.rating);
    }
    return sorted;
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // sort

  return (
    <>
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
              className={`dropdown-menu ${
                isDropdownOpen ? "display-block" : ""
              }`}
            >
              {sortsData.map((sort, index) => (
                <li key={index} onClick={() => handleSortChange(sort)}>
                  {sort}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="list-main">
          {sortedDishes()?.map((dish, index) => (
            <CardDish
              key={dish.id}
              type={dish.type}
              img={dish.img}
              name={dish.name}
              time={dish.time}
              calo={dish.calo}
              likes={dish.likes}
              rating={dish.rating}
            ></CardDish>
          ))}
        </div>
        <div className="pagination">
          <button
            className="btn-prev"
            disabled={currentPage === 1}
            onClick={goToPrevPage}
          >
            <i class="fa-solid fa-angle-left"></i>
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
            <i class="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ListDishes;
