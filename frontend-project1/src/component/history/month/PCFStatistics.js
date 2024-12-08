import React from "react";
import ThreeLineChart from "../../chart/ThreeLineChart";
import DishList from "./DishList";

const PCFStatistics = ({ month }) => {
  const proteinData = [
    150, 160, 170, 120, 130, 140, 125, 155, 145, 160, 175, 165, 155, 150, 160,
    170, 220, 230, 240, 125, 155, 145, 160, 175, 165, 155, 145, 135, 125, 155,
    140,
  ];

  const fatData = [
    160, 175, 165, 155, 150, 160, 170, 220, 170, 155, 145, 135, 125, 155, 140,
    150, 160, 170, 120, 130, 140, 125, 255, 245, 240, 175, 155, 145, 160, 175,
    165,
  ];

  const carbData = [
    80, 115, 95, 135, 130, 140, 125, 155, 145, 140, 250, 260, 240, 120, 125,
    155, 145, 160, 175, 165, 140, 155, 145, 135, 125, 155,
  ];

  const getDaysInMonth = (month) => {
    const [year, mm] = month.split("-");
    return new Date(year, mm, 0).getDate();
  };

  const generateDays = (month) => {
    const [year, mm] = month.split("-");
    const daysInMonth = getDaysInMonth(month);

    return Array.from(
      { length: daysInMonth },
      (_, i) => `${String(i + 1).padStart(2, "0")}/${mm}/${year}`
    );
  };

  const days = generateDays(month);
  const top3Protein = proteinData
    .map((value, index) => ({ day: days[index], calories: value }))
    .sort((a, b) => b.calories - a.calories)
    .slice(0, 3);
  const top3Carb = carbData
    .map((value, index) => ({ day: days[index], calories: value }))
    .sort((a, b) => b.calories - a.calories)
    .slice(0, 3);
  const top3Fat = fatData
    .map((value, index) => ({ day: days[index], calories: value }))
    .sort((a, b) => b.calories - a.calories)
    .slice(0, 3);

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-base font-bold mb-4 text-[#1445FE]">CALORIES</h1>

      <div className="flex justify-center space-x-6">
        <div className="flex items-center">
          <span className="block w-10 h-1 bg-[#FF6384] mr-2"></span>
          <span className="text-sm font-light text-[#202224] text-opacity-80">
            Protein
          </span>
        </div>
        <div className="flex items-center">
          <span className="block w-10 h-1 bg-[#4BC0C0] mr-2"></span>
          <span className="text-sm font-light text-[#202224] text-opacity-80">
            Fat
          </span>
        </div>
        <div className="flex items-center">
          <span className="block w-10 h-1 bg-[#36A2EB] mr-2"></span>
          <span className="text-sm font-light text-[#202224] text-opacity-80">
            Carb
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center sm:px-4 md:px-8 lg:px-10">
        <ThreeLineChart
          daysInMonth={31}
          proteinData={proteinData}
          fatData={fatData}
          carbData={carbData}
        />

        <h1 className="mt-8 text-base font-bold text-[#1445FE]">
          TOP 3 NGÀY TẠP NHIỀU PROTEIN
        </h1>
        {top3Protein.map((item, index) => (
          <DishList key={index} date={item.day} calories={item.calories} />
        ))}

        <h1 className="mt-8 text-base font-bold text-[#1445FE]">
          TOP 3 NGÀY TẠP NHIỀU CARB
        </h1>
        {top3Protein.map((item, index) => (
          <DishList key={index} date={item.day} calories={item.calories} />
        ))}

        <h1 className="mt-8 text-base font-bold text-[#1445FE]">
          TOP 3 NGÀY TẠP NHIỀU FAT
        </h1>
        {top3Protein.map((item, index) => (
          <DishList key={index} date={item.day} calories={item.calories} />
        ))}
      </div>
    </div>
  );
};
export default PCFStatistics;
