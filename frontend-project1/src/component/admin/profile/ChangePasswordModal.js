// src/components/modals/ChangePasswordModal.js
import React, { useState } from "react";

const ChangePasswordModal = ({
  isOpen,
  onClose,
  currentPassword,
  newPassword,
  confirmPassword,
  onCurrentPasswordChange,
  onNewPasswordChange,
  onConfirmPasswordChange,
}) => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  const [showNewPassword, setShowNewPassword] = useState(false);
  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[500px] shadow-xl relative">
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-semibold  text-gray-700">
            Đổi mật khẩu
          </div>

          <button
            onClick={onClose}
            className=" text-gray-500 hover:text-gray-700 text-xl h-full"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Mật khẩu hiện tại</label>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <input
              type={showCurrentPassword ? "text" : "password"}
              value={currentPassword}
              onChange={onCurrentPasswordChange}
              className="w-full  focus:outline-none bg-transparent"
            />
            <i
              className={`fa-solid ${
                showCurrentPassword ? "fa-eye" : "fa-eye-slash"
              } text-gray-500 cursor-pointer`}
              onClick={toggleCurrentPasswordVisibility}
            ></i>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Mật khẩu mới</label>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={onNewPasswordChange}
              className="w-full  focus:outline-none bg-transparent"
            />
            <i
              className={`fa-solid ${
                showNewPassword ? "fa-eye" : "fa-eye-slash"
              } text-gray-500 cursor-pointer`}
              onClick={toggleNewPasswordVisibility}
            ></i>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">
            Lặp lại mật khẩu mới
          </label>
          <div className="flex items-center border border-gray-300 rounded px-3 py-2">
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              className="w-full  focus:outline-none bg-transparent"
            />
            <i
              className={`fa-solid ${
                showConfirmPassword ? "fa-eye" : "fa-eye-slash"
              } text-gray-500 cursor-pointer`}
              onClick={toggleConfirmPasswordVisibility}
            ></i>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#1445FE] hover:bg-opacity-80 text-white rounded-md px-6 py-2 text-sm"
          >
            LƯU MẬT KHẨU
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;
