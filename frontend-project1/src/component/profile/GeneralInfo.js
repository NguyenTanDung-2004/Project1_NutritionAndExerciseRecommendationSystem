import React from "react";

const GeneralInfo = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-5">
      <div className="flex flex-wrap items-center bg-white rounded-lg p-4 px-10 gap-10 justify-center lg:gap-8 md:gap-6 sm:gap-4">
        <div className="flex flex-col items-center">
          <div className="text-black font-semibold">BMI</div>
          <div className="text-4xl font-bold text-[#1445FE]">25</div>
        </div>

        <div className="flex-1 flex gap-20 lg:gap-16 md:gap-12 sm:gap-6 flex-wrap">
          <div className="flex items-center gap-3 sm:gap-2">
            <label className="text-[#ABABAB] font-semibold text-sm">
              Chiều cao (cm)
            </label>
            <input
              type="text"
              value="150"
              readOnly
              className="border h-9 w-24 border-gray-300 rounded px-3 py-1 text-center text-[#595858] font-semibold outline-none"
            />
          </div>

          <div className="flex items-center gap-3 sm:gap-2">
            <label className="text-[#ABABAB] font-semibold text-sm">
              Cân nặng (kg)
            </label>
            <input
              type="text"
              value="40"
              readOnly
              className="border h-9 w-24 border-gray-300 rounded px-3 py-1 text-center text-[#595858] font-semibold outline-none"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {/* Glucose Level */}
        <div className="bg-white rounded-lg p-4 flex flex-col h-[120px]">
          <div className="text-black text-base font-semibold mb-2">
            Đường huyết
          </div>
          <div className="text-3xl font-bold text-[#1445FE] self-center ">
            &lt; 90 / &lt; 140
          </div>
          <div className="text-gray-400 text-sm self-center">mg/dl</div>
        </div>
        {/* Blood Pressure */}
        <div className="bg-white rounded-lg p-4 flex flex-col  h-[120px]">
          <div className="text-black text-base font-semibold mb-2">
            Đường áp
          </div>
          <div className="text-3xl font-bold text-[#1445FE] self-center">
            &lt; 99 / &lt; 80
          </div>
          <div className="text-gray-400 text-sm self-center">mmHg</div>
        </div>
        {/* Heart Rate */}
        <div className="bg-white rounded-lg p-4 flex flex-col  h-[120px]">
          <div className="text-black text-base font-semibold mb-2">
            Nhịp tim
          </div>
          <div className="text-3xl font-bold text-[#1445FE] self-center">
            60 - 100
          </div>
          <div className="text-gray-400 text-sm self-center">nhịp/phút</div>
        </div>
        {/* Activity Index */}
        <div className="bg-white rounded-lg p-4 flex flex-col h-[120px]">
          <div className="text-black text-base font-semibold">
            Hệ số hoạt động
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="text-3xl font-bold text-[#1445FE]">1.375</div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4">
        <div className="text-base font-semibold text-black">
          Tình trạng sức khỏe tổng quát
        </div>
        <div className="px-10 lg:px-8 md:px-6 sm:px-4 text-sm">
          <p className="text-red-500 mt-2 ">
            Nguy cơ tăng cao các bệnh mãn tính: Thừa cân và huyết áp cao là
            những yếu tố nguy cơ cho nhiều bệnh mãn tính, đặc biệt là bệnh tim
            mạch.
          </p>
          <p className="mt-2">
            Cần có biện pháp can thiệp sớm:
            <ul className="list-disc pl-6 mt-1">
              <li>
                Giảm cân: Thực hiện chế độ ăn uống lành mạnh và tăng cường hoạt
                động thể lực.
              </li>
              <li>
                Kiểm soát huyết áp: Theo dõi huyết áp thường xuyên, có thể cần
                sử dụng thuốc điều trị.
              </li>
              <li>
                Sàng lọc các yếu tố nguy cơ khác: Kiểm tra cholesterol, đường
                huyết định kỳ để phát hiện sớm các vấn đề tiềm ẩn.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
