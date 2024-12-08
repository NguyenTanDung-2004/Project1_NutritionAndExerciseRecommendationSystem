import React from "react";
import HorizontalBarChart from "../../chart/HorizontalBarChart";

const ChartList = () => {
  const caloLabels = [
    "Calories cần nạp",
    "Calories thực sự nạp",
    "Độ chênh lệch",
  ];
  const proteinLabels = [
    "Protein cần nạp",
    "Protein thực sự nạp",
    "Độ chênh lệch",
  ];
  const carbLabels = ["Carb cần nạp", "Carb thực sự nạp", "Độ chênh lệch"];
  const fatLabels = ["Fat cần nạp", "Fat thực sự nạp", "Độ chênh lệch"];

  const caloData = {
    required: 350,
    consumed: 250,
    burned: 30,
    difference: 130,
  };
  const proteinData = {
    required: 250,
    consumed: 100,
    burned: 0,
    difference: 150,
  };
  const carbData = {
    required: 220,
    consumed: 220,
    burned: 50,
    difference: 50,
  };
  const fatData = {
    required: 150,
    consumed: 170,
    burned: 10,
    difference: -20,
  };

  return (
    <div className="mt-10 w-full bg-white p-6 rounded-2xl shadow-md mb-10">
      <h1 className="text-base font-bold mb-4 text-[#202224]">
        Biểu đồ dinh dưỡng
      </h1>

      <div className="w-full flex flex-wrap gap-10 justify-between items-center sm:px-4 md:px-8 lg:px-10">
        <HorizontalBarChart data={caloData} labels={caloLabels} />
        <HorizontalBarChart data={proteinData} labels={proteinLabels} />
        <HorizontalBarChart data={carbData} labels={carbLabels} />
        <HorizontalBarChart data={fatData} labels={fatLabels} />
      </div>
    </div>
  );
};

export default ChartList;
