import React, { useEffect, useState } from "react";
import Header from "../../header/Header";
import NavigationBar from "../../navigationBar/NavigationBar";
import Footer from "../../footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import GoalDay from "./GoalDay";
import GoalOverview from "./GoalOverview";
import { format } from "date-fns";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dailyData, setDailyData] = useState({});

  const goal = location.state?.goal;
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleBackClick = () => {
    navigate("/goals");
  };

  // Hàm để chuyển đổi ngày từ "dd/MM/yyyy" sang đối tượng Date
  const convertToDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(year, month - 1, day);
  };

  // Hàm để tạo danh sách các ngày từ endDate tới startDate
  const generateGoalDays = (startDate, endDate) => {
    if (!startDate || !endDate) {
      return [];
    }
    const days = [];
    let currentDate = convertToDate(startDate);
    const stopDate = convertToDate(endDate);

    while (currentDate <= stopDate) {
      const formattedDate = `${format(currentDate, "dd/MM/yyyy")}`;
      days.push({ date: formattedDate, dateObj: new Date(currentDate) });
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  // Lấy danh sách các ngày
  const goalDays = generateGoalDays(goal?.startDate, goal?.endDate);
  useEffect(() => {
    const fetchDailyData = async () => {
      if (goalDays.length === 0) {
        return;
      }
      const newDailyData = {};
      try {
        for (const day of goalDays) {
          const dateObj = day.dateObj;
          const formattedDate = day.date;
          try {
            const response = await fetch(
              `${apiUrl}/userHistory/getDataForDateReport?day=${dateObj.getDate()}&month=${
                dateObj.getMonth() + 1
              }&year=${dateObj.getFullYear()}`,
              {
                method: "GET",
                headers: {
                  Accept: "application/json",
                },
                credentials: "include",
              }
            );
            if (!response.ok) {
              const text = await response.text();
              console.log(text);
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            newDailyData[formattedDate] = data;
          } catch (err) {
            console.error(
              `Error fetching list user target for date ${formattedDate}:`,
              err
            );
            continue;
          }
        }
        setDailyData(newDailyData);
      } catch (err) {
        console.error("Error fetching list user target:", err);
      }
    };

    fetchDailyData();
  }, [goalDays, apiUrl]);

  return (
    <div className="bg-[#F3F2F7]">
      <div className="px-6 md:px-[100px] pt-[30px]">
        <Header
          username="Phan Giang"
          text="May this website help you achieve your health goals."
          notifications={10}
        />
        <NavigationBar itemClicked="Goals" />
      </div>

      <div className="mx-6 md:mx-[200px] mt-10 flex flex-col gap-5">
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col gap-1.5 mt-5">
            <div className="flex gap-2">
              <div className="text-2xl text-black font-bold">
                Mục tiêu cá nhân:
              </div>
              <div className="text-2xl text-black font-medium">
                {goal?.name}
              </div>
            </div>
            <div className="text-base text-[#787878] font-semibold">
              Cho phép bạn đặt ra những mục tiêu sức khỏe và dinh dưỡng rõ ràng,
              cụ thể và dễ thực hiện.
            </div>
          </div>
          <button
            onClick={handleBackClick}
            className="w-auto h-11 px-6 rounded-lg text-white flex items-center justify-center bg-[#1445FE] hover:bg-opacity-80 shadow-[0px_4px_7px_0px_rgba(0,0,0,0.3)] cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left-long text-xl"></i>
          </button>
        </div>
        {goal && (
          <GoalOverview goal={goal} dailyData={dailyData} goalDays={goalDays} />
        )}
        {/* Hiển thị từng ngày mục tiêu */}
        {goalDays.map((day, index) => (
          <GoalDay
            key={index}
            date={day.date}
            index={index + 1}
            dailyData={dailyData[day.date]}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
