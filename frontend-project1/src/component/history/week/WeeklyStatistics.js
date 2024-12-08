import React from "react";
import OneDayStatistics from "./OneDayStatistics";

const getLastSevenDays = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    dates.push(formattedDate);
  }

  return dates;
};

const WeeklyStatistics = () => {
  const lastSevenDays = getLastSevenDays();

  return (
    <div className="w-full flex flex-col justify-center ">
      {lastSevenDays.map((date, index) => (
        <OneDayStatistics key={index} date={date} />
      ))}
    </div>
  );
};

export default WeeklyStatistics;
