import React, { useState } from "react";

const Card = ({
  id,
  image,
  nameChallenges,
  nameWorkout,
  type,
  level,
  soLanTap,
  soNguoiTap,
  point,
  time,
  calories,
}) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [newPoint, setNewPoint] = useState(point);

  const handleDelete = () => {
    alert(`Xóa thử thách có id: ${id}`);
    setDeleteModalOpen(false);
  };

  const handleSave = () => {
    alert(`Lưu điểm mới của thử thách id = ${id} là ${newPoint}`);
    setEditModalOpen(false);
  };

  const typeColor =
    type === "Khởi động"
      ? "bg-[#1A78F2] text-[#1A78F2]"
      : type === "Chân"
      ? "bg-[#02bdd6] text-[#02bdd6]"
      : type === "Tay"
      ? "bg-[#5afc44] text-[#5afc44]"
      : type === "Mông"
      ? "bg-[#9002d6] text-[#9002d6]"
      : "bg-[#b4afba] text-[#b4afba]";

  const levelColor =
    level === "Dễ"
      ? "bg-[#00B69B] text-[#00B69B]"
      : level === "Trung bình"
      ? "bg-[#fc7244] text-[#fc7244]"
      : level === "Khó"
      ? "bg-[#cf1732] text-[#cf1732]"
      : "bg-[#b4afba] text-[#b4afba]";

  const pointOptions = Array.from({ length: 10 }, (_, i) => (i + 1) * 10);
  return (
    <div className="w-full flex flex-wrap gap-4 items-center rounded-2xl py-4 px-5 bg-white shadow-lg cursor-pointer hover:shadow-[6px_6px_40px_0px_rgba(20,69,254,0.15)]">
      <div className="flex-shrink-0">
        <img
          className="rounded-md w-[180px] h-[110px] object-cover"
          src={image || "https://via.placeholder.com/150"}
          alt="ảnh"
        />
      </div>

      <div className="flex-1 flex flex-col w-auto">
        <div className="self-start text-xs text-[#979797] font-semibold">
          {nameChallenges}
        </div>
        <div className="self-start mt-1 w-full text-base text-black font-medium ">
          {nameWorkout}
        </div>
        <div className="self-start mt-4 flex flex-wrap gap-4 text-sm text-[#595858] font-medium">
          <div className="">Số lần tập: {soLanTap}</div>
          <div className="">Số người dùng: {soNguoiTap}</div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-[#595858] font-medium">
          <div>Điểm: {point}</div>
          <div>Thời gian/set: {time}s</div>
          <div>Calo/set: {calories} calo</div>
        </div>
      </div>

      <div className=" flex flex-col gap-4 sm:gap-10 w-full sm:w-auto items-end">
        <div className="flex flex-wrap gap-2">
          <div
            className={`min-w-[95px] text-center flex relative gap-4 justify-between items-start px-4 py-1.5 min-h-[27px] ${typeColor} bg-opacity-20 rounded-md`}
          >
            <div className="z-0 flex-1 shrink my-auto basis-0 font-semibold text-[13px]">
              {type}
            </div>
          </div>
          <div
            className={`min-w-[95px] text-center flex relative gap-4 justify-between items-start px-4 py-1.5 min-h-[27px] ${levelColor} bg-opacity-20 rounded-md`}
          >
            <div className="z-0 flex-1 shrink my-auto basis-0 font-semibold text-[13px]">
              {level}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <i
            className="fa-solid fa-trash text-red-500 cursor-pointer"
            onClick={() => setDeleteModalOpen(true)}
          ></i>

          <i
            className="fa-solid fa-pen text-black cursor-pointer"
            onClick={() => setEditModalOpen(true)}
          ></i>
        </div>
      </div>

      {isDeleteModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[500px] shadow-xl relative">
            <div className="flex justify-between mb-8">
              <div className="text-lg font-semibold  text-gray-700">
                Bạn có chắc chắn xóa thử thách này ?
              </div>

              <button
                onClick={() => setDeleteModalOpen(false)}
                className=" text-gray-500 hover:text-gray-700 text-xl h-full"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleDelete}
                className="bg-[#1445FE] hover:bg-opacity-80 text-white rounded-md px-6 py-2 text-sm"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[500px] shadow-xl relative">
            <div className="flex justify-between items-center mb-6">
              <div className="text-lg font-semibold  text-gray-700">
                THAY ĐỔI ĐIỂM CỦA THỬ THÁCH NÀY ?
              </div>
              <button
                onClick={() => setEditModalOpen(false)}
                className=" text-gray-500 hover:text-gray-700 text-xl h-full"
              >
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>
            <select
              className="w-full p-2 border border-gray-300 rounded mb-6"
              value={newPoint}
              onChange={(e) => setNewPoint(parseInt(e.target.value))}
            >
              {pointOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <div className="flex justify-end">
              <button
                onClick={handleSave}
                className="bg-[#1445FE] hover:bg-opacity-80 text-white rounded-md px-6 py-2 text-sm"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
