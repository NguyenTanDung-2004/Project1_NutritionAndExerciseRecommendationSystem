import React, { useState } from "react";
import Row from "./Row";
import Pagination from "./Pagination";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const columns = [
  { header: "ID", className: "w-[150px] flex-[3] hidden md:table-cell" },
  { header: "TÊN", className: "w-[300px] flex-[5] hidden md:table-cell " },
  {
    header: "TRỌNG LƯỢNG",
    className: "w-[150px] flex-[3] text-center  hidden md:table-cell",
  },
  {
    header: "NĂNG LƯỢNG",
    className: "w-[150px] flex-[3]  text-center  hidden md:table-cell",
  },
  {
    header: "CARB",
    className: "w-[140px] flex-[3] text-center hidden md:table-cell",
  },
  {
    header: "PROTEIN",
    className: "w-[140px] flex-[3] text-center hidden md:table-cell",
  },
  {
    header: "FAT",
    className: "w-[140px] flex-[3] text-center hidden md:table-cell",
  },
];

const data = [
  {
    id: "00001",
    name: "BÁNH CHUỐI NGÂM QUA ĐÊM",
    weight: "100",
    calories: "230",
    carb: "23.4",
    protein: "10",
    fat: "10",
  },
  {
    id: "00002",
    name: "YẾN MẠCH CHUỐI HẠT CHIA",
    weight: "120",
    calories: "250",
    carb: "30.5",
    protein: "12",
    fat: "8",
  },
  {
    id: "00003",
    name: "TRỨNG LUỘC",
    weight: "60",
    calories: "90",
    carb: "1.1",
    protein: "7",
    fat: "6",
  },
  {
    id: "00004",
    name: "ỨC GÀ ÁP CHẢO",
    weight: "150",
    calories: "280",
    carb: "0",
    protein: "30",
    fat: "10",
  },
  {
    id: "00005",
    name: "KHOAI LANG LUỘC",
    weight: "150",
    calories: "130",
    carb: "30",
    protein: "2",
    fat: "0.2",
  },
  {
    id: "00006",
    name: "CƠM TRẮNG",
    weight: "100",
    calories: "130",
    carb: "28",
    protein: "2",
    fat: "0.3",
  },
  {
    id: "00007",
    name: "NƯỚC ÉP CAM",
    weight: "200",
    calories: "90",
    carb: "21",
    protein: "1",
    fat: "0.2",
  },
  {
    id: "00008",
    name: "SALAD RAU CỦ",
    weight: "150",
    calories: "70",
    carb: "10",
    protein: "2",
    fat: "3",
  },
  {
    id: "00009",
    name: "BƠ NGHIỀN",
    weight: "50",
    calories: "80",
    carb: "4",
    protein: "1",
    fat: "7",
  },
  {
    id: "00010",
    name: "HẠT ÓC CHÓ",
    weight: "30",
    calories: "200",
    carb: "4",
    protein: "5",
    fat: "20",
  },
  {
    id: "00011",
    name: "SÚP LƠ LUỘC",
    weight: "200",
    calories: "55",
    carb: "11",
    protein: "4",
    fat: "0.5",
  },
  {
    id: "00012",
    name: "CÁ HỒI NƯỚNG",
    weight: "120",
    calories: "280",
    carb: "0",
    protein: "25",
    fat: "20",
  },
  {
    id: "00013",
    name: "ĐẬU HŨ CHIÊN",
    weight: "100",
    calories: "140",
    carb: "5",
    protein: "8",
    fat: "10",
  },
  {
    id: "00014",
    name: "NƯỚC DỪA",
    weight: "250",
    calories: "60",
    carb: "15",
    protein: "1",
    fat: "0",
  },
  {
    id: "00015",
    name: "CHUỐI CHÍN",
    weight: "120",
    calories: "105",
    carb: "27",
    protein: "1",
    fat: "0.3",
  },
  {
    id: "00016",
    name: "SỮA CHUA HY LẠP",
    weight: "100",
    calories: "60",
    carb: "4",
    protein: "10",
    fat: "0",
  },
];

const Table = () => {
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/dashboard/dish/${id}`);
  };

  const handleAddClick = () => {
    navigate(`/dashboard/dish/add`);
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
