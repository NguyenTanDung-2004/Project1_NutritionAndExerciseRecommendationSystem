import React, { useState } from "react";
import Header from "../header/Header";
import NavigationBar from "../navigationBar/NavigationBar";
import Footer from "../footer/Footer";
import GeneralInfo from "./GeneralInfo";
import NutritionalInfo from "./NutritionalInfo";
import AccountInfo from "./AccountInfo";
import EditHealthModal from "./EditHealthModal";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="px-6 md:px-[100px] pt-[30px]">
        <Header
          username="Phan Giang"
          text="May this website help you achieve your health goals."
          notifications={10}
        />
        <NavigationBar itemClicked="Profile" />
      </div>

      <div className="mx-6 md:mx-[200px] mt-6 flex flex-col lg:flex-row  gap-12">
        <div className="flex-1 basis-full lg:basis-1/3">
          <AccountInfo />
        </div>

        {/* Phần Tab và Nội dung */}
        <div className="flex-1 basis-full lg:basis-2/3">
          <div className="flex gap-4 mb-4 w-full bg-white opacity-100 rounded-[8px] items-center">
            <button
              onClick={() => setActiveTab("general")}
              className={`px-4 py-2 rounded font-semibold ${
                activeTab === "general"
                  ? " text-[#1445FE]"
                  : " text-black hover:text-[#1445FE]"
              }`}
            >
              Tổng quát
            </button>
            <button
              onClick={() => setActiveTab("nutritional")}
              className={` py-2 rounded font-semibold ${
                activeTab === "nutritional"
                  ? " text-[#1445FE]"
                  : " text-black hover:text-[#1445FE]"
              }`}
            >
              Dinh dưỡng
            </button>

            {activeTab === "general" && (
              <button
                onClick={() => handleOpenModal()}
                className="ml-auto h-9 w-9 hover:text-[#1445FE] text-black  rounded-lg mr-"
              >
                <i className="fa-solid fa-pen"></i>
              </button>
            )}
          </div>

          {/* Nội dung hiển thị */}
          {activeTab === "general" ? <GeneralInfo /> : <NutritionalInfo />}
        </div>
      </div>

      {isModalOpen && <EditHealthModal onClose={handleCloseModal} />}

      <Footer />
    </>
  );
};

export default Profile;
