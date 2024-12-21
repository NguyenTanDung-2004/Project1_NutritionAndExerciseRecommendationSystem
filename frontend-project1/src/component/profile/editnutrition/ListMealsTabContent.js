import React, { useState } from "react";
import Table from "../../table/Table";
import { addedMeals } from "./data";
import DetailCardModal from "./DetailCardModal";

const ListMealsTabContent = ({ mealLabel }) => {
  const [meals, setMeals] = useState(addedMeals);
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = (id) => {
    alert(`Xóa món ăn id = ${id}`);
    setMeals((prevMeals) => prevMeals.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setSelectedMealId(id);
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMealId(null);
  };

  const columns = [
    { header: "TÊN", accessor: "name", className: "w-[330px]" },
    {
      header: "TRỌNG LƯỢNG",
      accessor: "weight",
      className: "w-[140px] text-center",
    },
    {
      header: "NĂNG LƯỢNG",
      accessor: "calories",
      className: "w-[140px] text-center",
    },
    { header: "CARB", accessor: "carb", className: "w-[120px] text-center" },
    {
      header: "PROTEIN",
      accessor: "protein",
      className: "w-[120px] text-center",
    },
    { header: "FAT", accessor: "fat", className: "w-[120px] text-center" },
    { header: "", accessor: "actions", className: "flex-1" },
  ];

  const renderRow = (item, index) => {
    return (
      <tr
        key={index}
        className="text-[#202224] text-opacity-80 text-sm border-t bg-white"
      >
        <td className="p-3 border-b border-[#E5E7EB] text-[#374151] text-sm font-normal">
          {item.name}
        </td>
        <td className="p-3 border-b border-[#E5E7EB] text-[#374151] text-sm font-normal text-center">
          {item.weight}
        </td>
        <td className="p-3 border-b border-[#E5E7EB] text-[#374151] text-sm font-normal  text-center">
          {item.calories} calo
        </td>
        <td className="p-3 border-b border-[#E5E7EB] text-[#374151] text-sm font-normal text-center">
          {item.carb}g
        </td>
        <td className="p-3 border-b border-[#E5E7EB] text-[#374151] text-sm font-normal text-center">
          {item.protein}g
        </td>
        <td className="p-3 border-b border-[#E5E7EB] text-[#374151] text-sm font-normal text-center">
          {item.fat}g
        </td>
        <td className="p-3 border-[#E5E7EB] flex justify-center gap-2">
          <i
            className="fa-solid fa-trash text-red-500 cursor-pointer"
            onClick={() => handleDelete(item.id)}
          ></i>
          <i
            className="fa-solid fa-pen text-black cursor-pointer"
            onClick={() => handleEdit(item.id)}
          ></i>
        </td>
      </tr>
    );
  };

  return (
    <div className="overflow-y-auto max-h-[500px]">
      <Table columns={columns} renderRow={renderRow} data={meals} />
      {isModalOpen && (
        <DetailCardModal
          onClose={handleCloseModal}
          mealId={selectedMealId}
          mealLabel={mealLabel}
        />
      )}
    </div>
  );
};

export default ListMealsTabContent;
