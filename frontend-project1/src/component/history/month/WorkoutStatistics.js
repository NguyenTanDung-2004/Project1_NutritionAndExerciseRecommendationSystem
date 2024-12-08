import React from "react";
import LineChart from "../../chart/LineChart";
import WorkoutList from "./WorkoutList";

const WorkoutStatistics = ({ month }) => {
  console.log("Month: " + month);
  const data = [
    150, 160, 370, 120, 250, 140, 125, 155, 145, 160, 175, 160, 225, 255, 165,
    155, 150, 160, 170, 120, 230, 315, 160, 275, 165, 255, 245, 185, 125, 155,
    140,
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

  const top3Day = data
    .map((value, index) => ({ day: days[index], calories: value }))
    .sort((a, b) => b.calories - a.calories)
    .slice(0, 3);

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-md">
      <h1 className="text-base font-bold mb-4 text-[#1445FE]">BÀI TẬP</h1>

      <div className="w-full flex flex-col justify-center items-center sm:px-4 md:px-8 lg:px-10">
        <LineChart data={data} daysInMonth={31} />

        <div className="flex self-center items-center">
          <span className="block w-10 h-1 bg-[#1445FE] mr-2 rounded-sm"></span>
          <span className="text-sm font-light text-[#202224] text-opacity-80">
            Calories tiêu thụ
          </span>
        </div>

        {top3Day.map((item, index) => (
          <WorkoutList key={index} date={item.day} calories={item.calories} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutStatistics;
