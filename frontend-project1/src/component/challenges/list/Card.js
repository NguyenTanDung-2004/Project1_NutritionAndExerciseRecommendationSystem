import React from "react";

const Card = ({
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
  onClick,
}) => {
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

        <div
          onClick={onClick}
          className="bg-[#1445FE] hover:bg-opacity-80 rounded-lg text-white text-sm px-4 py-2 text-center w-[120px]"
        >
          THỰC HIỆN
        </div>
      </div>
    </div>
  );
};

export default Card;
