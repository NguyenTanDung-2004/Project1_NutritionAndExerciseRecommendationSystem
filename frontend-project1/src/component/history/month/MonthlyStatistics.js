import React, { useState, useRef } from "react";
import WorkoutStatistics from "./WorkoutStatistics";
import CaloriesStatistics from "./CaloriesStatistics";
import PCFStatistics from "./PCFStatistics";

const MonthlyStatistics = () => {
  // chọn tháng
  const [selectedMonth, setSelectedMonth] = useState(() => {
    const today = new Date();
    return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
  });

  const inputRef = useRef(null);

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSelectMonthClick = () => {
    inputRef.current.showPicker();
  };

  const formatMonth = (month) => {
    const [year, mm] = month.split("-");
    return `${mm}/${year}`;
  };

  // Hiển thị các statistic
  const [isWorkoutVisible, setIsWorkoutVisible] = useState(true);
  const [isCaloriesVisible, setIsCaloriesVisible] = useState(false);
  const [isPCFVisible, setIsPCFVisible] = useState(false);
  const toggleWorkoutVisibility = () => {
    setIsWorkoutVisible((prev) => !prev);
  };

  const toggleCaloriesVisibility = () => {
    setIsCaloriesVisible((prev) => !prev);
  };
  const togglePCFVisibility = () => {
    setIsPCFVisible((prev) => !prev);
  };

  return (
    <div className="w-full flex flex-col justify-center gap-8">
      <div
        onClick={handleSelectMonthClick}
        className="w-[150px] flex items-center justify-center self-center gap-1 bg-[#E8E8E8] border-[0.5px] border-[#595858] rounded-md hover:bg-white cursor-pointer"
      >
        <div className="relative">
          <input
            ref={inputRef}
            type="month"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="absolute inset-0 opacity-0 pointer-events-none"
          />
        </div>
        <span className="px-4 py-1 text-black text-xl font-medium">
          {formatMonth(selectedMonth)}
        </span>
      </div>

      <div
        onClick={toggleWorkoutVisibility}
        className="w-full px-5 py-2 flex justify-between items-center bg-[#595858] text-white text-lg cursor-pointer rounded-xl"
      >
        <span>LỊCH SỬ VÀ THỐNG KÊ BÀI TẬP</span>
        <i
          class={`fa-solid ${
            !isWorkoutVisible ? "fa-chevron-up" : "fa-chevron-down"
          } `}
        ></i>
      </div>

      {isWorkoutVisible && <WorkoutStatistics month={selectedMonth} />}

      <div
        onClick={toggleCaloriesVisibility}
        className="w-full px-5 py-2 flex justify-between items-center bg-[#595858] text-white text-lg cursor-pointer rounded-xl"
      >
        <span>LỊCH SỬ VÀ THỐNG KÊ CALORIES</span>
        <i
          class={`fa-solid ${
            !isCaloriesVisible ? "fa-chevron-up" : "fa-chevron-down"
          } `}
        ></i>
      </div>

      {isCaloriesVisible && <CaloriesStatistics month={selectedMonth} />}

      <div
        onClick={togglePCFVisibility}
        className="w-full px-5 py-2 flex justify-between items-center bg-[#595858] text-white text-lg cursor-pointer rounded-xl"
      >
        <span>LỊCH SỬ VÀ THỐNG KÊ PROTEIN - CARB - FAT</span>
        <i
          class={`fa-solid ${
            !isPCFVisible ? "fa-chevron-up" : "fa-chevron-down"
          } `}
        ></i>
      </div>

      {isPCFVisible && <PCFStatistics month={selectedMonth} />}
    </div>
  );
};

export default MonthlyStatistics;
