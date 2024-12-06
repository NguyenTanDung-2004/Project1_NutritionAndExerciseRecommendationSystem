import React from "react";

const LineProgress = ({ percentage }) => {
  return (
    <div className="relative w-[140px] h-[10px] bg-[#D9D9D9] rounded-full overflow-hidden">
      <div className="absolute inset-0 bg-[#D9D9D9] rounded-full"></div>

      <div
        className="absolute inset-0 bg-[#1445FE] rounded-full transition-all duration-300 ease-in-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default LineProgress;
