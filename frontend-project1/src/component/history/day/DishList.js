import React from "react";
import Table from "../../table/Table";

const DishList = () => {
  const columns = [
    { header: "TÊN", accessor: "name", className: "px-4 py-3 " },
    {
      header: "TRỌNG LƯỢNG",
      accessor: "reps",
      className: "px-4 py-3 text-center",
    },
    {
      header: "NĂNG LƯỢNG",
      accessor: "met",
      className: "px-4 py-3 ",
    },
    {
      header: "CARB",
      accessor: "timePerSet",
      className: "px-4 py-3 hidden lg:table-cell text-center",
    },
    {
      header: "PROTEIN",
      accessor: "caloPerSet",
      className: "px-4 py-3 hidden lg:table-cell text-center",
    },
    {
      header: "FAT",
      accessor: "totalCalories",
      className: "px-4 py-2 text-center hidden md:table-cell",
    },
  ];
  const data = [
    {
      name: "BÁNH CHUỐI YẾN MẠCH NGÂM QUA ĐÊM",
      weight: 100,
      energy: 300,
      carb: 29.3,
      protein: 10,
      fat: 10,
    },
    {
      name: "BÁNH DA LỢN MIX SỮA DỪA",
      weight: 100,
      energy: 300,
      carb: 29.3,
      protein: 10,
      fat: 10,
    },
    {
      name: "BÁNH CHUỐI YẾN MẠCH NGÂM QUA 5 ĐÊM",
      weight: 100,
      energy: 300,
      carb: 29.3,
      protein: 10,
      fat: 10,
    },
  ];

  const renderRow = (item, index) => (
    <tr key={index} className="text-[#202224] text-opacity-80 text-sm border-t">
      <td className="px-4 py-5">{item.name}</td>
      <td className="px-4 py-5 text-center">{item.weight}g</td>
      <td className="px-4 py-5 text-center ">{item.energy} calo</td>
      <td className="px-4 py-5 text-center hidden md:table-cell">
        {item.carb}g
      </td>
      <td className="px-4 py-5 text-center hidden md:table-cell">
        {item.protein}g
      </td>
      <td className="px-4 py-5 text-center hidden md:table-cell">
        {item.fat}g
      </td>
    </tr>
  );
  return (
    <div className="mt-10 w-full bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-base font-bold mb-4 text-[#202224]">
        Danh sách món ăn
      </h1>
      <Table columns={columns} renderRow={renderRow} data={data} />
    </div>
  );
};

export default DishList;
