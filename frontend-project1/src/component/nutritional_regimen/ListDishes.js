import React, { useEffect, useState } from "react";
import "../../css/nutritional_regimen/ListDishes.css";
import CardDish from "./CardDish";

const DishesData = [
  {
    id: "1",
    type: "Main dish",
    img: "https://i.ibb.co/kxVPqYg/bunbo.png",
    name: "BÚN BÒ",
    time: "1h 41m",
    calo: 350,
    likes: 1000,
    rating: 3,
  },
  {
    id: "2",
    type: "Side dish",
    img: "https://i.ibb.co/kxVPqYg/bunbo.png",
    name: "GỎI CUỐN",
    time: "30m",
    calo: 150,
    likes: 1000,
    rating: 4.2,
  },
  {
    id: "3",
    type: "Main dish",
    img: "https://i.ibb.co/kxVPqYg/bunbo.png",
    name: "PHỞ BÒ",
    time: "2h",
    calo: 400,
    likes: 1000,
    rating: 5,
  },
  {
    id: "4",
    type: "Dessert",
    img: "https://i.ibb.co/kxVPqYg/bunbo.png",
    name: "CHÈ BƯỞI",
    time: "1h",
    calo: 250,
    likes: 1000,
    rating: 4.5,
  },
  {
    id: "5",
    type: "Lunch",
    img: "https://i.ibb.co/kxVPqYg/bunbo.png",
    name: "NEM RÁN",
    time: "45m",
    calo: 300,
    likes: 1000,
    rating: 3.8,
  },
  {
    id: "6",
    type: "Main dish",
    img: "https://i.ibb.co/kxVPqYg/bunbo.png",
    name: "CƠM TẤM",
    time: "1h 15m",
    calo: 550,
    likes: 1000,
    rating: 4.9,
  },
];

const sortsData = ["All", "New", "Old", "Rating"];

const ListDishes = () => {
  const [sortOption, setSortOption] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSortChange = (sort) => {
    setSortOption(sort);
    setIsDropdownOpen(false);
  };

  const sortedDishes = () => {
    let sorted = [...DishesData];
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
      </div>
    </>
  );
};

export default ListDishes;
