import React from "react";
import Table from "../../table/Table";

const WorkoutList = () => {
  const columns = [
    { header: "STT", accessor: "stt", className: "px-4 py-3 " },
    {
      header: "TÊN BÀI TẬP",
      accessor: "name",
      className: "px-4 py-3",
    },
    {
      header: "SỐ LẦN TẬP",
      accessor: "numbers",
      className: "px-4 py-2 text-center",
    },
  ];

  const data = [
    {
      stt: "01",
      name: "Bài tập khởi động cơ mông 03",
      numbers: "300",
    },
    {
      stt: "02",
      name: "Bài tập plank cơ bản",
      numbers: "280",
    },
    {
      stt: "03",
      name: "Bài tập squat cơ bản",
      numbers: "260",
    },
    {
      stt: "04",
      name: "Bài tập hít đất nâng cao",
      numbers: "240",
    },
    {
      stt: "05",
      name: "Bài tập kéo dãn cơ tay",
      numbers: "220",
    },
    {
      stt: "06",
      name: "Bài tập plank nghiêng",
      numbers: "200",
    },
    {
      stt: "07",
      name: "Bài tập cardio tại chỗ",
      numbers: "180",
    },
    {
      stt: "08",
      name: "Bài tập xoay eo cơ bản",
      numbers: "160",
    },
    {
      stt: "09",
      name: "Bài tập kéo giãn cơ chân",
      numbers: "140",
    },
    {
      stt: "10",
      name: "Bài tập leo núi tại chỗ",
      numbers: "120",
    },
  ];

  const renderRow = (item, index) => (
    <tr key={index} className="text-[#202224] text-opacity-80 text-sm border-t">
      <td className="px-4 py-5">{item.stt}</td>
      <td className="px-4 py-5">{item.name}</td>
      <td className="px-4 py-5 text-center">{item.numbers}</td>
    </tr>
  );

  return (
    <div className="w-full">
      <h1 className="text-base font-bold mb-4 text-[#202224]">
        TOP 10 BÀI TẬP ĐƯỢC TẬP NHIỀU
      </h1>
      <Table columns={columns} renderRow={renderRow} data={data} />
    </div>
  );
};

export default WorkoutList;
