import React from "react";
import Layout from "../Layout";
import AdminVerticalBarChart from "../../chart/AdminVerticalBarChart";
import DishList from "./DishList";
import WorkoutList from "./WorkoutList";
import InfoCard from "./InfoCard";
import AdminPieChart from "../../chart/AdminPieChart";

const App = () => {
  const top3Point = [
    {
      name: "Bánh chuối",
      avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
      score: 100,
    },
    {
      name: "Cà phê sữa nóng",
      avatar: "https://via.placeholder.com/42",
      score: 80,
    },
    { name: "Bún bò huế", avatar: "https://via.placeholder.com/40", score: 60 },
  ];
  const top3LanTap = [
    {
      name: "Khởi động 1",
      avatar: "https://i.ibb.co/xY1yTJX/default-avatar.jpg",
      score: 25,
    },
    {
      name: "Mông cơ bản",
      avatar: "https://via.placeholder.com/42",
      score: 18,
    },
    {
      name: "Cơ bắp nâng cao",
      avatar: "https://via.placeholder.com/40",
      score: 15,
    },
  ];

  const infoData1 = [
    {
      dataInfo: "95",
      urliconInfo: "/images/iconUsers.svg",
      titleInfo: "số người dùng hệ thống",
    },
    {
      dataInfo: "60",
      urliconInfo: "/images/youngUsers.svg",
      percentageChangeInfo: "25%",
      titleInfo: "Nhỏ hơn 35 tuổi",
    },

    {
      dataInfo: "30",
      urliconInfo: "/images/middleUsers.svg",
      percentageChangeInfo: "15%",
      titleInfo: "35 - 55 tuổi",
    },
    {
      dataInfo: "15",
      urliconInfo: "/images/oldUsers.svg",
      percentageChangeInfo: "10%",
      titleInfo: "Lớn hơn 55 tuổi",
    },
  ];

  const infoData2 = [
    {
      dataInfo: "95",
      urliconInfo: "/images/iconUsers.svg",
      percentageChangeInfo: "22%",
      titleInfo: "Thiếu cân: BMI < 18.5",
    },
    {
      dataInfo: "60",
      urliconInfo: "/images/youngUsers.svg",
      percentageChangeInfo: "25%",
      titleInfo: "Bình thường: BMI 18.5 - 24.9",
    },

    {
      dataInfo: "30",
      urliconInfo: "/images/middleUsers.svg",
      percentageChangeInfo: "15%",
      titleInfo: "Thừa cân: BMI 25 - 29.9",
    },
    {
      dataInfo: "15",
      urliconInfo: "/images/oldUsers.svg",
      percentageChangeInfo: "10%",
      titleInfo: "Béo phì: BMI >= 30",
    },
  ];

  const bad = 65; // Giá trị cho "Tệ"
  const normal = 26; // Giá trị cho "Bình thường"
  const satisfied = 82; // Giá trị cho "Hài lòng"

  const pieLabels = ["Tệ", "Bình thường", "Hài lòng"];

  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap justify-between gap-3">
          <div className="w-full sm:w-[580px] bg-white p-6 rounded-2xl shadow-md mb-10">
            <h1 className="text-base font-bold mb-4 text-[#202224]">
              TOP 3 MÓN ĂN ĐƯỢC YÊU THÍCH
            </h1>

            <div className="w-full flex flex-wrap gap-10 justify-between items-center sm:px-4 md:px-8 lg:px-10">
              <AdminVerticalBarChart data={top3Point} unit="yêu thích" />
            </div>

            <div className="flex mt-4 justify-center items-center ">
              <span className="block w-10 h-1 bg-[#1445FE] mr-2 rounded-sm"></span>
              <span className="text-xs font-medium text-[#202224] text-opacity-80">
                Số lượt thích
              </span>
            </div>
          </div>

          <div className="w-full sm:w-[580px] bg-white p-6 rounded-2xl shadow-md mb-10">
            <h1 className="text-base font-bold mb-4 text-[#202224]">
              TOP 3 BÀI TẬP ĐƯỢC TẬP NHIỀU NHẤT
            </h1>

            <div className="w-full flex flex-wrap gap-10 justify-between items-center sm:px-4 md:px-8 lg:px-10">
              <AdminVerticalBarChart data={top3LanTap} unit="lần" />
            </div>

            <div className="flex mt-4 justify-center items-center">
              <span className="block w-10 h-1 bg-[#1445FE] mr-2 rounded-sm"></span>
              <span className="text-xs font-medium text-[#202224] text-opacity-80">
                Số lần tập
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap justify-between w-full bg-white p-6 rounded-2xl shadow-md mb-10 gap-16">
          <DishList />
          <WorkoutList />
        </div>

        <div className="flex flex-col gap-3 h-full w-full">
          <h1 className="text-base font-bold text-[#202224]">
            SỐ LƯỢNG NGƯỜI DÙNG CỦA HỆ THỐNG
          </h1>
          <div className="flex justify-between h-fit flex-wrap gap-4">
            {infoData1.map((chart) => (
              <InfoCard key={chart.titleInfo} {...chart} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 h-full w-full">
          <h1 className="text-base font-bold text-[#202224]">
            SỐ LƯỢNG NGƯỜI DÙNG THEO CHỈ SỐ BMI
          </h1>
          <div className="flex justify-between h-fit flex-wrap gap-4">
            {infoData2.map((chart) => (
              <InfoCard key={chart.titleInfo} {...chart} />
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap- h-full w-full">
          <h1 className="text-base font-bold text-[#202224]">
            CHỈ SỐ HÀI LÒNG CỦA NGƯỜI DÙNG
          </h1>
          <div className="bg-white flex justify-center items-center h-fit flex-wrap gap-20 rounded-lg p-4 mb-2">
            <AdminPieChart
              bad={bad}
              normal={normal}
              satisfied={satisfied}
              labels={pieLabels}
            />

            <div className=" flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-[20px] h-[20px] bg-[#FF8E8B] rounded-full"></div>
                <span>Tệ</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[20px] h-[20px] bg-[#36C5E2] rounded-full"></div>
                <span>Bình thường</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[20px] h-[20px] bg-[#9188FC] rounded-full"></div>
                <span>Hài lòng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default App;
