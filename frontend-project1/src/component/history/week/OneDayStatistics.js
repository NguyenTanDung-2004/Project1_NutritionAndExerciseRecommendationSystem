import React, { useState } from "react";
import BigHorizontalBarChart from "../../chart/BigHorizontalBarChart";
import WorkoutList from "./WorkoutList";
import DishList from "./DishList";

const OneDayStatistics = ({ date }) => {
  const [showDetails, setShowDetails] = useState(false);

  const caloData = {
    required: 350,
    consumed: 250,
    burned: 10,
  };

  return (
    <div className="mt-10 w-full bg-white p-6 rounded-2xl shadow-md mb-10">
      <h1 className="text-base font-bold mb-4 text-[#202224]">{date}</h1>

      <div className="w-full flex flex-wrap gap-10 justify-between items-center sm:px-4 md:px-8 lg:px-10">
        <BigHorizontalBarChart data={caloData} />

        {showDetails && (
          <>
            <WorkoutList date={date} />
            <DishList date={date} />
          </>
        )}

        <div
          className="w-full text-center italic underline font-light text-xs cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "thu gọn" : "xem chi tiết danh sách"}
        </div>
      </div>
    </div>
  );
};

export default OneDayStatistics;
