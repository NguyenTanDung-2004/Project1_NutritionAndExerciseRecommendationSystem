import React from "react";
import GoalChart from "../../chart/GoalChart";

const GoalDay = ({ key, date, data1 }) => {
  const data = {
    requiredProtein: 100,
    requiredFat: 50,
    requiredCarb: 200,
    consumedProtein: 90,
    consumedFat: 45,
    consumedCarb: 180,
    burned: 500,
  };

  const comment = {
    calo: 50,
    kg: "+0.5",
  };

  // Kiểm tra nếu comment có dữ liệu hay không
  const hasComment = comment && (comment.calo || comment.kg);

  return (
    <div className="mt-10 w-full bg-white p-6 rounded-2xl shadow-md mb-10">
      <h1 className="text-base font-bold mb-4 text-[#202224]">{date}</h1>

      <div className="w-full flex flex-wrap gap-10 justify-between items-center sm:px-4 md:px-8 lg:px-10">
        <GoalChart data={data} />
        <div className="flex flex-1 flex-col gap-4 sm:mb-0 md:mb-0 lg:mb-10">
          <div className="text-[#202224] font-bold">• Nhận xét</div>

          {hasComment ? (
            <>
              <div className="text-[#828181] mt-2 ml-4">
                - Độ chênh lệch calories: {comment.calo} calo
              </div>
              <div className="text-[#828181] mt-2 ml-4">
                - Số kg thay đổi: {comment.kg}kg
              </div>
            </>
          ) : (
            <div className="text-[#828181] mt-2 ml-4 italic">
              chưa có nhận xét nào
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GoalDay;
