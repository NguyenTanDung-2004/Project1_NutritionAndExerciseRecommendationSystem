import React from "react";
import { useNavigate } from "react-router-dom";
import LogoImg from "../../img/home_out/logo.png";
import AvatarDefault from "../../img/profile/default-avatar.png";

const Header = ({ className }) => {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/dashboard/profile");
  };
  return (
    <>
      <header className="flex flex-wrap gap-10 justify-between items-center py-4 px-12 w-full bg-white min-h-[80px] max-md:pl-5">
        <div className="flex gap-4 items-center">
          <img
            onClick={handleAvatarClick}
            src={LogoImg}
            alt="Health Care Logo"
            className="w-[60px]"
          />
          <span className="text-black text-xl font-bold self-center">
            Health Care
          </span>
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={handleAvatarClick}
        >
          {/* Placeholder cho avatar */}
          <img
            src={AvatarDefault}
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full "
          />
          <div className="flex flex-col">
            <span className="text-[#404040] text-sm font-semibold">
              Phan Giang
            </span>
            <span className="text-[#565656] text-xs font-medium">Admin</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
