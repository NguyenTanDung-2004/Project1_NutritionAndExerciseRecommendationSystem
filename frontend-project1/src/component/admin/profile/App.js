import React, { useState } from "react";
import Layout from "../Layout";
import AvatarDefault from "../../../img/profile/default-avatar.png";
import ChangePasswordModal from "./ChangePasswordModal";

const App = ({ avt }) => {
  const [avatar, setAvatar] = useState(avt || AvatarDefault);
  const [isNameEditable, setIsNameEditable] = useState(false);
  const [name, setName] = useState("Phan Giang");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameChange, setNameChange] = useState(false);
  const [weightChange, setWeightChange] = useState(0);

  const handleEditName = () => {
    setIsNameEditable(true);
  };

  const handleNameBlur = () => {
    setNameChange(true);
    setIsNameEditable(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setWeightChange(1);
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    setWeightChange(0);
    setNameChange(false);
    alert(`
    Thay đổi thông tin:
        Tên: ${name}
        Ảnh: ${avatar}
     `);
  };

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
    <Layout>
      <div className="bg-white px-4 pt-4 flex flex-col items-center overflow-hidden">
        <div className="flex flex-col w-full max-w-[800px]">
          <h2 className="text-2xl font-semibold text-gray-800 text-center">
            Thông tin cá nhân
          </h2>
          <div className="p-6 bg-[#F4F7F9] rounded-lg mt-16 flex gap-[100px] justify-center">
            <div className="w-[300px] flex-shrink-0 px-8  overflow-y-auto">
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
                  Ảnh đại diện
                </h3>
                <div className="w-60 h-60 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center">
                  {avatar ? (
                    <img
                      src={avatar}
                      alt="Avatar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    <i className="ml-4 fa-solid fa-user text-[20px] text-gray-500"></i>
                  )}
                </div>

                <label
                  htmlFor="avatarUpload"
                  className="block text-center text-[#1445FE] cursor-pointer"
                >
                  Upload
                  <input
                    id="avatarUpload"
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            <div className="flex-1 px-8 max-h-screen overflow-y-auto">
              <div className="mb-4 flex items-center gap-2">
                <label className="text-gray-700 font-semibold text-base">
                  Tên:
                </label>
                {isNameEditable ? (
                  <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    onBlur={handleNameBlur}
                    className=" border border-gray-300 rounded px-3 py-2 flex-1 focus:outline-none"
                  />
                ) : (
                  <div className="flex items-center gap-2 flex-1">
                    <span className=" text-gray-800  text-base">{name}</span>
                    <i
                      onClick={handleEditName}
                      className="fa-solid fa-pen text-gray-700  cursor-pointer"
                    ></i>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <button
                  onClick={handleShowPasswordModal}
                  className="px-6 py-2 bg-[#C3CFFD] text-[#022094] hover:bg-opacity-80 text-xs rounded-lg font-semibold"
                >
                  Đổi mật khẩu
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-[30px]">
            <button
              onClick={handleSave}
              disabled={!nameChange && weightChange <= 0}
              className={`py-2 px-4 rounded font-semibold text-white ${
                nameChange || weightChange > 0
                  ? "bg-[#1445FE] hover:bg-opacity-80"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              LƯU
            </button>
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
      </div>
    </Layout>
  );
};

export default App;
