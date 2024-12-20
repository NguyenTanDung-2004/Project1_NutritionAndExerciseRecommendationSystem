import React, { useState } from "react";
import Row from "./Row";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const columns = [
  { header: "ID", className: "w-[150px]  hidden md:table-cell" },
  { header: "TÊN", className: "w-[300px] hidden md:table-cell " },
  {
    header: "SỐ LẦN TẬP",
    className: "w-[140px] text-center  hidden md:table-cell",
  },
  {
    header: "MET",
    className: "w-[120px] text-center  hidden md:table-cell",
  },
  {
    header: "THỜI GIAN/SET",
    className: "w-[140px] text-center hidden md:table-cell",
  },
  {
    header: "CALO/SET",
    className: "w-[140px] text-center hidden md:table-cell",
  },
  {
    header: "TỔNG CALORIES",
    className: "flex-1 text-center hidden md:table-cell",
  },
];

const data = [
  {
    id: "00001",
    name: "Bài tập khởi động 1",
    soLanTap: 5,
    met: 1.5,
    time: 10,
    calo: 5,
    totalCalo: 50,
  },
  {
    id: "00002",
    name: "Bài tập khởi động 2",
    soLanTap: 6,
    met: 1.8,
    time: 12,
    calo: 6,
    totalCalo: 72,
  },
  {
    id: "00003",
    name: "Bài tập cardio 1",
    soLanTap: 8,
    met: 3.0,
    time: 15,
    calo: 12,
    totalCalo: 180,
  },
  {
    id: "00004",
    name: "Bài tập bụng 1",
    soLanTap: 10,
    met: 2.5,
    time: 20,
    calo: 10,
    totalCalo: 200,
  },
  {
    id: "00005",
    name: "Bài tập lưng 1",
    soLanTap: 12,
    met: 2.0,
    time: 18,
    calo: 8,
    totalCalo: 144,
  },
  {
    id: "00006",
    name: "Bài tập chân 1",
    soLanTap: 7,
    met: 2.8,
    time: 22,
    calo: 11,
    totalCalo: 242,
  },
  {
    id: "00007",
    name: "Bài tập tĩnh 1",
    soLanTap: 4,
    met: 1.2,
    time: 8,
    calo: 4,
    totalCalo: 32,
  },
  {
    id: "00008",
    name: "Bài tập tay 1",
    soLanTap: 10,
    met: 2.6,
    time: 16,
    calo: 9,
    totalCalo: 144,
  },
  {
    id: "00009",
    name: "Bài tập khởi động 3",
    soLanTap: 5,
    met: 1.5,
    time: 10,
    calo: 5,
    totalCalo: 50,
  },
  {
    id: "00010",
    name: "Bài tập cardio 2",
    soLanTap: 15,
    met: 3.5,
    time: 25,
    calo: 14,
    totalCalo: 350,
  },
  {
    id: "00011",
    name: "Bài tập bụng 2",
    soLanTap: 8,
    met: 2.4,
    time: 15,
    calo: 9,
    totalCalo: 135,
  },
  {
    id: "00012",
    name: "Bài tập lưng 2",
    soLanTap: 6,
    met: 2.1,
    time: 14,
    calo: 7,
    totalCalo: 98,
  },
  {
    id: "00013",
    name: "Bài tập chân 2",
    soLanTap: 9,
    met: 3.0,
    time: 18,
    calo: 12,
    totalCalo: 216,
  },
  {
    id: "00014",
    name: "Bài tập tĩnh 2",
    soLanTap: 3,
    met: 1.1,
    time: 5,
    calo: 3,
    totalCalo: 15,
  },
  {
    id: "00015",
    name: "Bài tập tay 2",
    soLanTap: 8,
    met: 2.5,
    time: 15,
    calo: 10,
    totalCalo: 150,
  },
  {
    id: "00016",
    name: "Bài tập khởi động 4",
    soLanTap: 7,
    met: 1.6,
    time: 12,
    calo: 6,
    totalCalo: 72,
  },
];

const Table = () => {
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/dashboard/workout/${id}`);
  };

  const handleAddClick = () => {
    navigate(`/dashboard/workout/add`);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("Tên");

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const filteredData = data.filter((workout) => {
    const term = searchTerm.toLowerCase();
    if (searchBy === "Id") return workout.id.toLowerCase().includes(term);
    if (searchBy === "Tên") return workout.name.toLowerCase().includes(term);

    if (searchBy === "Tên") return workout.name.toLowerCase().includes(term);
  });

  // Pagination
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) setCurrentPage(newPage);
  };

  return (
    <>
      <SearchBar
        setSearchTerm={handleSearch}
        setSearchBy={setSearchBy}
        handleAddClick={handleAddClick}
      />

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
          <Row
            key={user.id}
            {...user}
            onClick={() => handleRowClick(user.id)}
          />
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
