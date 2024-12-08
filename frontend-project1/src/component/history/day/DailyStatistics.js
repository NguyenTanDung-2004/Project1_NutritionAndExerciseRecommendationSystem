import React, { useState } from "react";
import WorkoutList from "./WorkoutList";
import DishList from "./DishList";
import ChartList from "./ChartList";

const DailyStatistics = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };
  return (
    <div className="w-full flex flex-col justify-center">
      <div className="w-full flex items-center justify-center gap-4 rounded-lg py-1.5 px-4">
        <div className="relative">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="absolute inset-0 opacity-0"
          />
          <i className="fa-solid fa-calendar-days text-2xl text-[#878787]"></i>
        </div>

        <span className="text-[#878787] text-xl font-bold">
          {formatDate(selectedDate)}
        </span>
      </div>

      <WorkoutList />

      <DishList />

      <ChartList />
    </div>
  );
};

export default DailyStatistics;
