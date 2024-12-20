import React, { useState } from "react";
import Row from "./Row";
import Pagination from "./Pagination";
import SortRank from "./Sort";

const columns = [
  { header: "STT", className: "w-[150px] hidden md:table-cell" },
  { header: "TÊN", className: "w-[450px] hidden md:table-cell" },
  { header: "BMI", className: "w-[300px] hidden md:table-cell" },
  { header: "TỔNG ĐIỂM", className: "flex-1 hidden md:table-cell " },
];

const data = [
  {
    stt: "001",
    name: "Phan Nguyễn Trà Giang",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 22.5,
    totalPoints: 100,
  },
  {
    stt: "002",
    name: "Nguyễn Thị Mai Lan",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 24.1,
    totalPoints: 98,
  },
  {
    stt: "003",
    name: "Lê Văn Hải",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 19.3,
    totalPoints: 95,
  },
  {
    stt: "004",
    name: "Trần Thị Lan Anh",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 21.4,
    totalPoints: 92,
  },
  {
    stt: "005",
    name: "Vũ Minh Tuấn",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 25.0,
    totalPoints: 89,
  },
  {
    stt: "006",
    name: "Phạm Quang Hieu",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 20.5,
    totalPoints: 85,
  },
  {
    stt: "007",
    name: "Hoàng Thị Thảo",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 22.2,
    totalPoints: 80,
  },
  {
    stt: "008",
    name: "Nguyễn Hoàng Hải",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 23.3,
    totalPoints: 75,
  },
  {
    stt: "009",
    name: "Lê Quang Đoàn",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 18.7,
    totalPoints: 70,
  },
  {
    stt: "010",
    name: "Nguyễn Thanh Bình",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 26.1,
    totalPoints: 65,
  },
  {
    stt: "011",
    name: "Trần Thị Cẩm Tú",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 21.9,
    totalPoints: 60,
  },
  {
    stt: "012",
    name: "Lý Minh Anh",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 19.0,
    totalPoints: 55,
  },
  {
    stt: "013",
    name: "Đặng Minh Tuấn",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 24.3,
    totalPoints: 50,
  },
  {
    stt: "014",
    name: "Vũ Thị Bảo Ngọc",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 22.1,
    totalPoints: 45,
  },
  {
    stt: "015",
    name: "Phan Quang Hưng",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 20.8,
    totalPoints: 40,
  },
  {
    stt: "016",
    name: "Trần Minh Trí",
    avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
    bmi: 22.8,
    totalPoints: 35,
  },
];

const Table = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortType, setSortType] = useState("Cao xuống thấp");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (sort) => {
    setSortType(sort);
  };

  // Lọc dữ liệu theo searchTerm (tên)
  const filteredData = data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sắp xếp dữ liệu
  const sortedData = [...filteredData].sort((a, b) => {
    if (sortType === "Thấp đến cao") {
      return a.totalPoints - b.totalPoints;
    } else if (sortType === "Cao xuống thấp") {
      return b.totalPoints - a.totalPoints;
    }
    return b.totalPoints - a.totalPoints;
  });

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const currentData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <>
      <div className="flex flex-wrap justify-between">
        <div className="w-full sm:w-[700px] flex items-center rounded-xl px-3 py-2 border border-solid border-[#d5d5d5] bg-[#fcfdfd]">
          <span className="mr-4 text-gray-500">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            placeholder="Tìm kiếm theo tên "
            value={searchTerm}
            onChange={handleSearchChange}
            className="outline-none text-sm flex-1"
          />
        </div>

        <div className="flex items-center gap-4">
          <SortRank onSortChange={handleSortChange} />
        </div>
      </div>
      {/* title column */}
      <div className="mt-4 flex flex-wrap w-full bg-[#f5f5f5] h-[30px] items-center gap-3 p-2.5">
        {columns.map((col, index) => (
          <div
            key={index}
            className={`${col.className} text-left text-[#202224] text-sm font-bold`}
          >
            {col.header}
          </div>
        ))}
      </div>

      {/* table */}
      <div className="mt-4 flex overflow-hidden flex-col justify-center w-full max-md:max-w-full">
        {currentData.map((user, index) => (
          <Row key={user.id} {...user} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalItems={filteredData.length}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default Table;
