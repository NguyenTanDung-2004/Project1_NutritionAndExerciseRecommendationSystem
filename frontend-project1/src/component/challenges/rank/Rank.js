import React from "react";
import VerticalBarChart from "../../chart/VerticalBarChart";
import Table from "./Table";

const Rank = () => {
  const top3Point = [
    {
      name: "Giang",
      avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
      score: 100,
    },
    { name: "Bob", avatar: "https://via.placeholder.com/42", score: 80 },
    { name: "Charlie", avatar: "https://via.placeholder.com/40", score: 60 },
  ];
  const top3LanTap = [
    {
      name: "Dũng",
      avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
      score: 25,
    },
    { name: "Bob", avatar: "https://via.placeholder.com/42", score: 18 },
    { name: "Charlie", avatar: "https://via.placeholder.com/40", score: 15 },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap justify-between gap-4">
        <div className="mt-10 w-full sm:w-[520px] bg-white p-6 rounded-2xl shadow-md mb-10">
          <h1 className="text-base font-bold mb-4 text-[#202224]">
            TOP 3 ĐIỂM SỐ CAO NHẤT
          </h1>

          <div className="w-full flex flex-wrap gap-10 justify-between items-center sm:px-4 md:px-8 lg:px-10">
            <VerticalBarChart data={top3Point} unit="điểm" />
          </div>

          <div className="flex mt-4 justify-center items-center ">
            <span className="block w-10 h-1 bg-[#1445FE] mr-2 rounded-sm"></span>
            <span className="text-xs font-medium text-[#202224] text-opacity-80">
              Điểm
            </span>
          </div>
        </div>

        <div className="mt-10 w-full sm:w-[520px] bg-white p-6 rounded-2xl shadow-md mb-10">
          <h1 className="text-base font-bold mb-4 text-[#202224]">
            TOP 3 TẬP NHIỀU NHẤT
          </h1>

          <div className="w-full flex flex-wrap gap-10 justify-between items-center sm:px-4 md:px-8 lg:px-10">
            <VerticalBarChart data={top3LanTap} unit="lần" />
          </div>

          <div className="flex mt-4 justify-center items-center">
            <span className="block w-10 h-1 bg-[#1445FE] mr-2 rounded-sm"></span>
            <span className="text-xs font-medium text-[#202224] text-opacity-80">
              Số lần tập
            </span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <Table />
      </div>
    </div>
  );
};

export default Rank;
