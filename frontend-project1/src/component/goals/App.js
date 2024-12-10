import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import NavigationBar from "../navigationBar/NavigationBar";
import Footer from "../footer/Footer";
import Card from "./Card";
import AddGoalModal from "./AddGoalModal";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const [isAddActive, setIsAddActive] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsAddModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsAddModalOpen(false);
  };

  const handleCardClick = (id) => {
    navigate(`/goals/${id}`);
  };

  const goals = [
    {
      id: "1",
      target: "+2",
      name: "Giảm cân mục tiêu",
      percentage: 100,
      daysCompleted: 7,
      totalDays: 7,
      startDate: "01/12/2024",
      endDate: "07/12/2024",
      type: "Giảm cân",
      status: "Đang thực hiện",
    },
    {
      id: "2",
      target: "+5",
      name: "Tăng cơ bắp",
      percentage: 50,
      daysCompleted: 3,
      totalDays: 6,
      startDate: "01/12/2024",
      endDate: "06/12/2024",
      type: "Tăng cân",
      status: "Đã kết thúc",
    },
    {
      id: "3",
      target: "+3",
      name: "Giảm mỡ bụng",
      percentage: 60,
      daysCompleted: 4,
      totalDays: 7,
      startDate: "01/12/2024",
      endDate: "07/12/2024",
      type: "Giảm cân",
      status: "Đã kết thúc",
    },
  ];

  const sortedGoals = [...goals].sort((a, b) => {
    if (a.status === "Đang thực hiện" && b.status !== "Đang thực hiện") {
      return -1;
    }
    if (a.status !== "Đang thực hiện" && b.status === "Đang thực hiện") {
      return 1;
    }
    return 0;
  });

  useEffect(() => {
    const allFinished = goals.every((goal) => goal.status === "Đã kết thúc");
    setIsAddActive(allFinished);
  }, [goals]);

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
            <div className="text-2xl text-black font-bold">
              Mục tiêu cá nhân
            </div>
            <div className="text-base text-[#787878] font-semibold">
              Cho phép bạn đặt ra những mục tiêu sức khỏe và dinh dưỡng rõ ràng,
              cụ thể và dễ thực hiện.
            </div>
          </div>
          <button
            onClick={handleOpenModal}
            disabled={!isAddActive}
            className={`w-11 h-11 rounded-full text-white flex items-center justify-center shadow-[0px_4px_7px_0px_rgba(0,0,0,0.3)] ${
              isAddActive
                ? "bg-[#1445FE] cursor-pointer"
                : "bg-[#ABABAB] cursor-not-allowed"
            }`}
          >
            <i className="fa-solid fa-plus text-xl"></i>
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {sortedGoals.map((goal, index) => (
            <Card
              key={goal.id}
              target={goal.target}
              name={goal.name}
              percentage={goal.percentage}
              daysCompleted={goal.daysCompleted}
              totalDays={goal.totalDays}
              startDate={goal.startDate}
              endDate={goal.endDate}
              type={goal.type}
              status={goal.status}
              onClick={() => handleCardClick(goal.id)}
            />
          ))}
        </div>
      </div>
      {isAddModalOpen && <AddGoalModal onClose={handleCloseModal} />}
      <Footer />
    </div>
  );
};

export default App;
