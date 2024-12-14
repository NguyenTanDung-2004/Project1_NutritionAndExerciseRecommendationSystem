import React, { useState } from "react";
import Header from "../header/Header";
import NavigationBar from "../navigationBar/NavigationBar";
import Footer from "../footer/Footer";
import LineProgress from "./LineProgress";
import ListChallenges from "./list/ListChallenges";
import Rank from "./rank/Rank";
import FilterList from "./list/Filter";
import SortList from "./list/Sort";
import SortRank from "./rank/Sort";

const App = () => {
  const [activeView, setActiveView] = useState("list");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("Lọc");
  const [sortType, setSortType] = useState("Sắp xếp");

  const percentage = 10;

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleFilterChange = (filter) => {
    setFilterType(filter);
  };
  const handleSortChange = (sort) => {
    setSortType(sort);
  };

  return (
    <div className="bg-[#F3F2F7]">
      <div className="px-6 md:px-[100px] pt-[30px]">
        <Header
          username="Phan Giang"
          text="May this website help you achieve your health goals."
          notifications={10}
        />
        <NavigationBar itemClicked="Challenges" />
      </div>

      <div className="mx-6 md:mx-[200px] mt-10 flex flex-col  gap-5">
        <div className="w-full text-2xl text-black font-bold text-center">
          THỬ THÁCH
        </div>

        <div className="w-full flex flex-col gap-3 items-center rounded-2xl p-4 cursor-pointer bg-white shadow-md">
          <div className="w-full text-base text-black font-medium ">
            RANK CỦA BẠN
          </div>

          <LineProgress percentage={percentage} />

          <div className="w-full flex justify-between">
            <div className="text-sm text-[#595858] font-medium ">
              Vị trí 90/100
            </div>
            <div className="text-sm text-[#1445FE] font-semibold ">
              100 điểm
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap justify-between gap-4">
          <div className="flex rounded-md bg-white border-[#202224] border-[1px] ">
            <button
              className={`px-4 py-2 text-sm font-semibold border-r-[1px] border-[#202224]  hover:text-[#1445FE] ${
                activeView === "list"
                  ? "text-[#1445FE] "
                  : "text-[#202224] opacity-60"
              }`}
              onClick={() => setActiveView("list")}
            >
              Thử thách
            </button>
            <button
              className={`px-4 py-1 text-sm  font-semibold hover:text-[#1445FE] ${
                activeView === "rank"
                  ? "text-[#1445FE] "
                  : "text-[#202224] opacity-60"
              }`}
              onClick={() => setActiveView("rank")}
            >
              Bảng xếp hạng
            </button>
          </div>

          <div className=" w-[400px] bg-white flex items-center rounded-xl px-3 py-2 shadow-md">
            <span className="mr-4 text-gray-500">
              <i className="fas fa-search"></i>
            </span>

            <input
              type="text"
              placeholder="Tìm kiếm theo tên bài tập"
              value={searchTerm}
              onChange={handleSearchChange}
              className="outline-none text-sm flex-1"
            />
          </div>

          {activeView === "list" && (
            <div className="flex items-center gap-4">
              <SortList onSortChange={handleSortChange} />
              <FilterList onFilterChange={handleFilterChange} />
            </div>
          )}
          {activeView === "rank" && (
            <div className="flex items-center gap-4">
              <SortRank onSortChange={handleSortChange} />
            </div>
          )}
        </div>

        <div>
          {activeView === "list" && (
            <ListChallenges
              searchTerm={searchTerm}
              filterType={filterType}
              sortType={sortType}
            />
          )}
          {activeView === "rank" && <Rank />}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
