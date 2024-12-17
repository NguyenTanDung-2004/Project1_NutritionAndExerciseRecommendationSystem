import React from "react";
import Table from "../../table/Table";

const DishList = () => {
  const columns = [
    { header: "STT", accessor: "stt", className: "px-4 py-3 " },
    {
      header: "TÊN MÓN ĂN",
      accessor: "name",
      className: "px-4 py-3",
    },
    {
      header: "SỐ LƯỢT THÍCH",
      accessor: "likes",
      className: "px-4 py-2 text-center",
    },
  ];

  const data = [
    {
      stt: "01",
      name: "Bún bò huế",
      likes: "1234",
    },
    {
      stt: "02",
      name: "Phở bò thơm ngon đậm vị",
      likes: "1100",
    },
    {
      stt: "03",
      name: "Cơm tấm Ngô quyền 22",
      likes: "1080",
    },
    {
      stt: "04",
      name: "Bánh mì thịt heo quay",
      likes: "800",
    },
    {
      stt: "05",
      name: "Bánh xèo chảo Bình Định",
      likes: "750",
    },
    {
      stt: "06",
      name: "Chả giò",
      likes: "660",
    },
    {
      stt: "07",
      name: "Hủ tiếu Nam Vang",
      likes: "650",
    },
    {
      stt: "08",
      name: "Cao lầu",
      likes: "610",
    },
    {
      stt: "09",
      name: "Bánh cuốn",
      likes: "500",
    },
    {
      stt: "10",
      name: "Xôi gà",
      likes: "450",
    },
  ];

  const renderRow = (item, index) => (
    <tr key={index} className="text-[#202224] text-opacity-80 text-sm border-t">
      <td className="px-4 py-5">{item.stt}</td>
      <td className="px-4 py-5">{item.name}</td>
      <td className="px-4 py-5 text-center">{item.likes}</td>
    </tr>
  );

  return (
    <div className="w-full">
      <h1 className="text-base font-bold mb-4 text-[#202224]">
        TOP 10 MÓN ĂN ĐƯỢC YÊU THÍCH
      </h1>
      <Table columns={columns} renderRow={renderRow} data={data} />
    </div>
  );
};
export default DishList;
