import React from "react";

const EditNutritionModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg w-11/12 max-w-lg p-6 shadow-lg relative">
        {/* Nội dung modal */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 text-center mb-4">
            Chỉnh sửa thông tin dinh dưỡng
          </h2>
          <div className="text-sm text-gray-500">
            {/* Thêm nội dung của bạn ở đây */}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded"
          >
            Hủy bỏ
          </button>
          <button
            onClick={() => {
              // Thêm logic lưu ở đây
              onClose();
            }}
            className="bg-[#1445FE] hover:bg-opacity-80 text-white font-semibold py-2 px-4 rounded"
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNutritionModal;
