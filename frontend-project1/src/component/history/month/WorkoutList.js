import React from "react";
import Table from "../../table/Table";

const WorkoutList = ({ date }) => {
  const columns = [
    { header: "TÊN", accessor: "name", className: "px-4 py-3 " },
    {
      header: "SỐ LẦN TẬP",
      accessor: "reps",
      className: "px-4 py-3 text-center",
    },
    {
      header: "MET",
      accessor: "met",
      className: "px-4 py-3 hidden lg:table-cell text-center",
    },
    {
      header: "THỜI GIAN/SET",
      accessor: "timePerSet",
      className: "px-4 py-3 hidden lg:table-cell text-center",
    },
    {
      header: "CALO/SET",
      accessor: "caloPerSet",
      className: "px-4 py-3 hidden lg:table-cell text-center",
    },
    {
      header: "TỔNG CALORIES",
      accessor: "totalCalories",
      className: "px-4 py-2 text-center",
    },
  ];
  const data = [
    {
      name: "Bài tập khởi động tay chân bụng thứ nhất",
      reps: 7,
      met: 3,
      timePerSet: 30,
      caloPerSet: 10,
      totalCalories: 300,
    },
    {
      name: "Bài tập khởi động tay chân bụng thứ 2",
      reps: 8,
      met: 3,
      timePerSet: 30,
      caloPerSet: 10,
      totalCalories: 300,
    },
    {
      name: "Bài tập khởi động tay chân bụng thứ nhất 3",
      reps: 5,
      met: 3,
      timePerSet: 30,
      caloPerSet: 10,
      totalCalories: 300,
    },
  ];

  const renderRow = (item, index) => (
    <tr key={index} className="text-[#202224] text-opacity-80 text-sm border-t">
      <td className="px-4 py-5">{item.name}</td>
      <td className="px-4 py-5 text-center">{item.reps}</td>
      <td className="px-4 py-5 text-center hidden md:table-cell">{item.met}</td>
      <td className="px-4 py-5 text-center hidden md:table-cell">
        {item.timePerSet}s
      </td>
      <td className="px-4 py-5 text-center hidden md:table-cell">
        {item.caloPerSet} calo
      </td>
      <td className="px-4 py-5 text-center">{item.totalCalories} calo</td>
    </tr>
  );

  return (
    <div className="w-full mt-8">
      <h1 className="text-base font-bold mb-2 text-[#202224]">{date}</h1>
      <Table columns={columns} renderRow={renderRow} data={data} />
    </div>
  );
};

export default WorkoutList;
