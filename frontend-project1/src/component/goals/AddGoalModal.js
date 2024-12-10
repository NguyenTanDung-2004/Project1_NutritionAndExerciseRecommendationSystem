import React, { useState } from "react";

const AddGoalModal = ({ onClose }) => {
  const today = new Date().toISOString().split("T")[0];
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(today);
  const [duration, setDuration] = useState(7);
  const [goalType, setGoalType] = useState("Tăng cân");
  const [weightChange, setWeightChange] = useState(0.1);
  const [systemName, setSystemName] = useState("");
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);

  const handleSave = () => {
    // Kiểm tra thông tin hợp lệ
    if (name && weightChange > 0) {
      setIsConfirmModalOpen(true); // Hiện modal nhập tên hệ thống
    }
  };

  const handleFinalSave = () => {
    if (
      systemName === "Hệ thống chăm sóc sức khỏe và đề xuất thức ăn và bài tập"
    ) {
      alert("Lưu thành công!");
      onClose();
    } else {
      alert("Tên hệ thống không đúng, vui lòng thử lại.");
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white rounded-lg w-11/12 max-w-lg p-6 shadow-lg relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            ×
          </button>
          <h2 className="text-lg font-semibold text-gray-700 text-center mb-6">
            Đặt mục tiêu cá nhân
          </h2>
          <div className="flex flex-col gap-4">
            {/* Tên mục tiêu */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tên
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nhập ..."
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>

            {/* Ngày bắt đầu */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ngày bắt đầu
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                disabled
              />
            </div>

            {/* Thời gian thực hiện */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Thời gian thực hiện
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                {[7, 14, 21, 28].map((day) => (
                  <option key={day} value={day}>
                    {day} ngày
                  </option>
                ))}
              </select>
            </div>

            {/* Loại mục tiêu */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loại mục tiêu
              </label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setGoalType("Tăng cân")}
                  className={`flex relative gap-4 justify-between items-start px-4 py-1.5 min-h-[27px]  bg-opacity-20 rounded-md
                  ${
                    goalType === "Tăng cân"
                      ? "bg-[#FF9500] text-[#FF9500]"
                      : "bg-[#595858] text-[#595858]"
                  }`}
                >
                  Tăng cân
                </button>
                <button
                  type="button"
                  onClick={() => setGoalType("Giảm cân")}
                  className={`flex relative gap-4 justify-between items-start px-4 py-1.5 min-h-[27px]  bg-opacity-20 rounded-md 
                  ${
                    goalType === "Giảm cân"
                      ? "bg-[#00B69B] text-[#00B69B]"
                      : "bg-[#595858] text-[#595858]"
                  }`}
                >
                  Giảm cân
                </button>
              </div>
            </div>

            {/* Số cân nặng */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Số cân nặng
              </label>
              <div className="flex items-center">
                <input
                  type="number"
                  value={weightChange}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    const maxWeightChange = duration / 7; // Số cân tối đa dựa trên duration
                    setWeightChange(
                      value > maxWeightChange ? maxWeightChange : value
                    );
                  }}
                  step="0.1"
                  min="0.1"
                  max={duration / 7} // Tối đa là duration / 7
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2"
                />
                <span className="ml-2 text-sm text-gray-500">kg</span>
              </div>
              {weightChange > duration / 7 && (
                <p className="text-red-500 text-sm mt-1">
                  Số cân nặng tối đa là {duration / 7} kg.
                </p>
              )}
            </div>
          </div>

          {/* Nút điều hướng */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={onClose}
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded"
            >
              Hủy
            </button>
            <button
              onClick={handleSave}
              disabled={!name || weightChange <= 0}
              className={`py-2 px-4 rounded font-semibold text-white ${
                name && weightChange > 0
                  ? "bg-[#1445FE] hover:bg-opacity-80"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Xác nhận
            </button>
          </div>
        </div>
      </div>

      {/* Modal xác nhận */}
      {isConfirmModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg w-11/12 max-w-md p-6 shadow-lg">
            <h3 className="text-lg font-semibold text-gray-700 text-center mb-4">
              Nhập tên hệ thống
            </h3>
            <input
              type="text"
              value={systemName}
              onChange={(e) => setSystemName(e.target.value)}
              placeholder="Hệ thống chăm sóc sức khỏe..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4"
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setIsConfirmModalOpen(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded"
              >
                Hủy
              </button>
              <button
                onClick={handleFinalSave}
                className="bg-[#1445FE] hover:bg-opacity-80 text-white font-semibold py-2 px-4 rounded"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddGoalModal;
