import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import AddImageModal from "./AddImageModal";
import { useNavigate, useParams } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClickBack = () => {
    navigate(-1);
  };
  const [formData, setFormData] = useState({
    tenBaiTap: "",
    phanLoai: "Khởi động",
    met: "",
    thoiGianSet: "",
    caloSet: "",
    thoiGian: "0",
    carb: "0",
    protein: "0",
    fat: "0",
    videoHuongDan: "",
    hinhAnh: null,
  });
  const [workoutImages, setWorkoutImages] = useState([]);
  const [newWorkoutImages, setNewWorkoutImages] = useState([]);
  const [isAddImageModalOpen, setAddImageModalOpen] = useState(false);

  useEffect(() => {
    if (id !== "add") {
      //mock data
      setFormData({
        tenBaiTap: "Bài tập khởi động chân tay miệng 1",
        phanLoai: "Khởi động",
        met: "3",
        thoiGianSet: "10",
        caloSet: "5",
        thoiGian: "20",
        carb: "29.3",
        protein: "10",
        fat: "10",
        videoHuongDan: "https://www.youtube.com/watch?v=fG7dJ6A3l7w",
        hinhAnh:
          "https://images.unsplash.com/photo-1599180678171-10f571a88081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmFuYSUyMGJyZWFkfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      });
      setWorkoutImages([
        "https://images.unsplash.com/photo-1599180678171-10f571a88081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmFuYSUyMGJyZWFkfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1599180678171-10f571a88081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmFuYSUyMGJyZWFkfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1599180678171-10f571a88081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmFuYSUyMGJyZWFkfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ]);
    }
  }, [id]);

  const handleAddDishImages = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      alert("Bạn chỉ có thể chọn tối đa 3 ảnh");
      return;
    }
    const newImages = files.map((file) => URL.createObjectURL(file));
    setNewWorkoutImages(newImages);
  };
  const handleSaveWorkoutImages = () => {
    setWorkoutImages([...newWorkoutImages]);
    setAddImageModalOpen(false);
    setNewWorkoutImages([]);
    setFormData({ ...formData, hinhAnh: newWorkoutImages[0] });
  };
  const handleAddImageModal = () => {
    setAddImageModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.replace(/[^0-9.]/g, ""),
    }));
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, hinhAnh: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = (section) => {
    if (section === "thongTinCoBan") {
      alert(
        `
            Tên bài tập: ${formData.tenBaiTap}
            Phân loại: ${formData.phanLoai}
            MET: ${formData.met}
            Thời gian / set: ${formData.thoiGianSet}
            calo / set: ${formData.caloSet}
             Thời gian: ${formData.thoiGian} phút
             Carb: ${formData.carb} g
             Protein: ${formData.protein} g
             Fat: ${formData.fat} g
             Video hướng dẫn: ${formData.videoHuongDan}
              Hình ảnh xóa nền: ${formData.hinhAnh}
          `
      );
    } else if (section === "danhSachHinhAnh") {
      alert(`
            Danh sách hình ảnh:
            ${workoutImages.join(",\n")}
          `);
    }
  };

  const handleDeleteImages = () => {
    setWorkoutImages([]);
    setNewWorkoutImages([]);
    setFormData({ ...formData, hinhAnh: null });
  };
  const phanLoaiOptions = ["Mông", "Thân", "Ngực", "Vai", "Khởi động"];

  return (
    <Layout>
      <div className="flex bg-white p-4 overflow-hidden">
        {/* Left Side - Form */}
        <div className="flex-1 pr-8 max-h-screen overflow-y-auto">
          <div className="items-center mb-8 flex ">
            <button
              className="ml-6 mr-8 text-[#4F6071]"
              onClick={handleClickBack}
            >
              <i className="fa-solid fa-arrow-left "></i>
            </button>
            <h2 className="text-2xl font-semibold text-gray-800">
              Thông tin bài tập
            </h2>
          </div>
          <div className="mt-3 mb-8 flex flex-col gap-2">
            <h3 className=" text-lg font-semibold text-gray-800 mb-2">
              THÔNG TIN CƠ BẢN
            </h3>

            <div className=" flex flex-col p-4 bg-[#F4F7F9] rounded-lg ">
              <div className="mb-4">
                <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                  TÊN BÀI TẬP
                </label>
                <input
                  type="text"
                  name="tenBaiTap"
                  value={formData.tenBaiTap}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    PHÂN LOẠI
                  </label>
                  <select
                    name="phanLoai"
                    value={formData.phanLoai}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    {phanLoaiOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    MET
                  </label>
                  <input
                    type="text"
                    name="met"
                    value={formData.met}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    THỜI GIAN / SET
                  </label>
                  <input
                    type="text"
                    name="thoiGianSet"
                    value={formData.thoiGianSet}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    CALO / SET
                  </label>
                  <input
                    type="text"
                    name="caloSet"
                    value={formData.caloSet}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    THỜI GIAN
                  </label>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                    <input
                      type="text"
                      name="thoiGian"
                      value={formData.thoiGian}
                      onChange={handleInputChange}
                      className="w-full  focus:outline-none bg-transparent"
                    />
                    <span className="ml-2 text-[#9FA7B0]">phút</span>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    CARB
                  </label>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                    <input
                      type="text"
                      name="carb"
                      value={formData.carb}
                      onChange={handleInputChange}
                      className="w-full  focus:outline-none bg-transparent"
                    />
                    <span className="ml-2 text-[#9FA7B0]">g</span>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    PROTEIN
                  </label>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                    <input
                      type="text"
                      name="protein"
                      value={formData.protein}
                      onChange={handleInputChange}
                      className="w-full  focus:outline-non bg-transparent"
                    />
                    <span className="ml-2 text-[#9FA7B0]">g</span>
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    FAT
                  </label>
                  <div className="flex items-center border border-gray-300 rounded px-3 py-2">
                    <input
                      type="text"
                      name="fat"
                      value={formData.fat}
                      onChange={handleInputChange}
                      className="w-full  focus:outline-none bg-transparent"
                    />
                    <span className="ml-2 text-[#9FA7B0]">g</span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                  LINK VIDEO HƯỚNG DẪN
                </label>
                <input
                  type="text"
                  name="videoHuongDan"
                  value={formData.videoHuongDan}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleSubmit("thongTinCoBan")}
                className="bg-[#1445FE] hover:bg-opacity-80 text-white rounded-md px-6 py-2"
              >
                LƯU
              </button>
            </div>
          </div>
          <div className="mb-8 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              DANH SÁCH HÌNH ẢNH CỦA BÀI TẬP
            </h3>
            <div className=" flex flex-wrap gap-4 p-4 bg-[#F4F7F9] rounded-lg ">
              {workoutImages.map((image, index) => (
                <div className="w-[200px]" key={index}>
                  <img
                    src={image}
                    alt={`Dish ${index + 1}`}
                    className="rounded-lg object-cover w-full h-[150px]"
                  />
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              {workoutImages.length === 0 ? (
                <button
                  onClick={handleAddImageModal}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  <i className="fa-solid fa-plus mr-1"></i>
                  Thêm ảnh
                </button>
              ) : (
                <button
                  onClick={handleDeleteImages}
                  className="text-red-500 hover:text-red-700 font-semibold"
                >
                  <i className="fa-solid fa-trash mr-1"></i>
                  Xóa ảnh
                </button>
              )}
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => handleSubmit("danhSachHinhAnh")}
                className="bg-[#1445FE] hover:bg-opacity-80 text-white rounded-md px-6 py-2"
              >
                LƯU
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Image & Description */}
        <div className="w-[400px] flex-shrink-0 px-8 sticky top-0 h-screen overflow-y-auto">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              Hình ảnh được xóa nền
            </h3>
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-2 flex items-center justify-center">
              {formData.hinhAnh ? (
                <img
                  src={formData.hinhAnh}
                  alt="Uploaded"
                  className="w-full h-full rounded-full object-cover"
                />
              ) : (
                <i className="fa-solid fa-person-skating text-4xl text-gray-500"></i>
              )}
            </div>

            <label
              htmlFor="imageUpload"
              className="block text-center text-blue-500 cursor-pointer"
            >
              Upload
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>
          <div className="flex justify-center mt-auto">
            <button
              onClick={handleDeleteImages}
              className="bg-red-500 hover:bg-red-700 text-white rounded-md px-4 py-2"
            >
              XÓA
            </button>
          </div>
        </div>
      </div>
      <AddImageModal
        isOpen={isAddImageModalOpen}
        onClose={() => setAddImageModalOpen(false)}
        newDishImages={newWorkoutImages}
        handleAddDishImages={handleAddDishImages}
        handleSaveDishImages={handleSaveWorkoutImages}
      />
    </Layout>
  );
};

export default App;
