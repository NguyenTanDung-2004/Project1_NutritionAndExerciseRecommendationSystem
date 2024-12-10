import React from "react";
import Header from "../../header/Header";
import NavigationBar from "../../navigationBar/NavigationBar";
import Footer from "../../footer/Footer";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/goals");
  };

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
            onClick={handleBackClick}
            className="w-auto h-11 px-6 rounded-lg text-white flex items-center justify-center bg-[#1445FE] hover:bg-opacity-80 shadow-[0px_4px_7px_0px_rgba(0,0,0,0.3)] cursor-pointer"
          >
            <i className="fa-solid fa-arrow-left-long text-xl"></i>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
