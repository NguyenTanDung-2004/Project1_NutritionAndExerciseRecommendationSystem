import React, { useState } from "react";
import DefaultAvatar from "../../img/profile/default-avatar.png";
import ChangePasswordModal from "./ChangePasswordModal";

const AccountInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formAccount, setFormAccount] = useState({
    lastName: "Phan",
    firstName: "Nguyễn Trà Giang",
    email: "abc@gmail.com",
    gender: "Nữ",
    dob: "2004-03-29",
    avatar: "",
  });
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormAccount({ ...formAccount, [name]: value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChange = () => {
    console.log("Data account: ", formAccount);
    setIsEditing(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormAccount({ ...formAccount, avatar: reader.result });
      };

      reader.readAsDataURL(file);
    }
  };

  // Đổi mật khẩu
  const handleShowPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const handleHidePasswordModal = () => {
    setShowPasswordModal(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };
  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div
      className="w-full max-w-md mx-auto p-6 bg-white rounded-2xl"
      style={{
        boxShadow: "2px 4px 30px 0px rgba(20, 69, 254, 0.3)",
      }}
    >
      <div className="flex flex-col items-center">
        <label className="cursor-pointer">
          <img
            src={formAccount.avatar || DefaultAvatar}
            alt="Avatar"
            className="w-[200px] h-[200px] rounded-full object-cover mb-4"
          />
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden"
            />
          )}
        </label>
        <h2 className="text-lg font-semibold">
          {formAccount.lastName + " " + formAccount.firstName}
        </h2>

        {isEditing ? (
          <button
            onClick={handleSaveChange}
            className="mt-2 w-full py-2 bg-[#1445FE] hover:bg-opacity-80 text-white rounded-lg flex items-center gap-2 text-sm justify-center"
          >
            <span>Lưu</span>
          </button>
        ) : (
          <button
            className="mt-2 w-full py-2 bg-[#1445FE] hover:bg-opacity-80 text-white rounded-lg flex items-center gap-2 text-sm justify-center"
            onClick={handleEditToggle}
          >
            <span>Chỉnh sửa</span>
            <i className="fa-solid fa-pen"></i>
          </button>
        )}
      </div>

      {/* Thông tin cơ bản */}
      <div className="mt-6">
        <h3 className="text-base font-semibold mb-4 text-black">
          Thông tin cơ bản
        </h3>

        <div className="flex flex-col px-10">
          <div className="text-sm text-gray-600">
            <div className="mb-2 flex items-center">
              <span className="w-1/3 font-medium text-[#ABABAB]">Họ:</span>
              <input
                type="text"
                name="lastName"
                value={formAccount.lastName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-2/3 bg-transparent text-[#595858] font-semibold focus:outline-none ${
                  isEditing ? "border-b-2 border-gray-300" : ""
                }`}
              />
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <div className="mb-2 flex items-center">
              <span className="w-1/3 font-medium text-[#ABABAB]">Tên:</span>
              <input
                type="text"
                name="firstName"
                value={formAccount.firstName}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-2/3 bg-transparent text-[#595858] font-semibold focus:outline-none ${
                  isEditing ? "border-b-2 border-gray-300" : ""
                }`}
              />
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <div className="mb-2 flex items-center">
              <span className="w-1/3 font-medium text-[#ABABAB]">Email:</span>
              <input
                type="text"
                name="email"
                value={formAccount.email}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-2/3 bg-transparent text-[#595858] font-semibold focus:outline-none ${
                  isEditing ? "border-b-2 border-gray-300" : ""
                }`}
              />
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <div className="mb-2 flex items-center">
              <span className="w-1/3 font-medium text-[#ABABAB]">
                Giới tính:
              </span>
              <input
                type="text"
                name="gender"
                value={formAccount.gender}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-2/3 bg-transparent text-[#595858] font-semibold focus:outline-none ${
                  isEditing ? "border-b-2 border-gray-300" : ""
                }`}
              />
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <div className="mb-2 flex items-center">
              <span className="w-1/3 font-medium text-[#ABABAB]">
                Ngày sinh:
              </span>
              <input
                type="date"
                name="dob"
                value={formAccount.dob}
                onChange={handleInputChange}
                disabled={!isEditing}
                className={`w-2/3 bg-transparent text-[#595858] font-semibold focus:outline-none ${
                  isEditing ? "border-b-2 border-gray-300" : ""
                }`}
              />
            </div>
          </div>

          <div className="text-sm text-gray-600 mt-1">
            <div className="mb-2 flex items-center">
              <span className="w-1/3 font-medium text-[#ABABAB]">
                Mật khẩu:
              </span>
              <button
                onClick={handleShowPasswordModal}
                className="px-6 py-1 bg-[#C3CFFD] text-[#022094] hover:bg-opacity-80 text-xs rounded-lg font-semibold"
              >
                Đổi mật khẩu
              </button>
            </div>
          </div>
        </div>
      </div>

      <ChangePasswordModal
        isOpen={showPasswordModal}
        onClose={handleHidePasswordModal}
        currentPassword={currentPassword}
        newPassword={newPassword}
        confirmPassword={confirmPassword}
        onCurrentPasswordChange={handleCurrentPasswordChange}
        onNewPasswordChange={handleNewPasswordChange}
        onConfirmPasswordChange={handleConfirmPasswordChange}
      />
    </div>
  );
};

export default AccountInfo;
