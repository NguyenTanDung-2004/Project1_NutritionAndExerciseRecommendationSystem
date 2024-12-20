import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import Table from "../../table/Table";
import AddIngredientModal from "./AddIngredientModal";
import AddImageModal from "./AddImageModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditIngredientModal from "./EditIngredientModal";
import { useNavigate, useParams } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClickBack = () => {
    navigate(-1);
  };
  const [formData, setFormData] = useState({
    tenMonAn: "",
    level: "Trung bình",
    phuongPhapNau: "Nước uống",
    cheDoAn: "Ăn chay (trứng, sữa)",
    thoiGian: "0",
    carb: "0",
    protein: "0",
    fat: "0",
    huyetAp: "Không",
    duongHuyet: "Không",
    timMach: "Không",
    videoHuongDan: "https://www.youtube.com/watch?v=fG7dJ6A3l7w",
    gioiThieuMonAn: "",
    hinhAnh: null,
  });
  const [ingredients, setIngredients] = useState([]);

  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [ingredientToDelete, setIngredientToDelete] = useState(null);

  const [isAddIngredientModalOpen, setAddIngredientModalOpen] = useState(false);
  const [newIngredient, setNewIngredient] = useState({
    name: "",
    weight: "",
    energy: "",
  });
  const [isAddImageModalOpen, setAddImageModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [ingredientToEdit, setIngredientToEdit] = useState(null);
  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);

  const [dishImages, setDishImages] = useState([]);
  const [newDishImages, setNewDishImages] = useState([]);

  useEffect(() => {
    if (id !== "add") {
      //mock data
      setFormData({
        tenMonAn: "Bánh chuối yến mạch",
        level: "Trung bình",
        phuongPhapNau: "Nước uống",
        cheDoAn: "Ăn chay (trứng, sữa)",
        thoiGian: "20",
        carb: "29.3",
        protein: "10",
        fat: "10",
        huyetAp: "Không",
        duongHuyet: "Có",
        timMach: "Không",
        videoHuongDan: "https://www.youtube.com/watch?v=fG7dJ6A3l7w",
        gioiThieuMonAn:
          "Bánh chuối yến mạch là món tráng miệng thơm ngon, kết hợp vị ngọt tự nhiên của chuối với độ giòn của yến mạch, giàu dinh dưỡng và thích hợp cho người ăn lành mạnh.",
        hinhAnh:
          "https://images.unsplash.com/photo-1599180678171-10f571a88081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmFuYSUyMGJyZWFkfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      });
      setIngredients([
        { id: 1, name: "ỚT XÀY", weight: 10, energy: 50 },
        { id: 2, name: "TIÊU ĐEN", weight: 10, energy: 50 },
        { id: 3, name: "CHUỐI", weight: 10, energy: 50 },
        { id: 4, name: "HÀNH", weight: 10, energy: 50 },
      ]);
      setDishImages([
        "https://images.unsplash.com/photo-1599180678171-10f571a88081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmFuYSUyMGJyZWFkfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1599180678171-10f571a88081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmFuYSUyMGJyZWFkfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1599180678171-10f571a88081?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJhbmFuYSUyMGJyZWFkfGVufDB8fDB8fHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      ]);
    }
  }, [id]);

  const handleAddIngredient = () => {
    setIngredients([
      ...ingredients,
      { id: ingredients.length + 1, ...newIngredient },
    ]);
    setAddIngredientModalOpen(false);
    setNewIngredient({
      name: "",
      weight: "",
      energy: "",
    });
  };

  const handleDeleteConfirmation = (ingredientId) => {
    setIngredientToDelete(ingredientId);
    setDeleteModalOpen(true);
  };

  const handleEditIngredient = (ingredient) => {
    setIngredientToEdit(ingredient);
    setNewIngredient({
      name: ingredient.name,
      weight: ingredient.weight,
      energy: ingredient.energy,
    });
    setEditModalOpen(true);
  };

  const handleDelete = () => {
    setIngredients(
      ingredients.filter((ingredient) => ingredient.id !== ingredientToDelete)
    );
    setDeleteModalOpen(false);
    setIngredientToDelete(null);
  };
  const handleSaveEditIngredient = () => {
    setIngredients(
      ingredients.map((ingredient) =>
        ingredient.id === ingredientToEdit.id
          ? {
              ...ingredient,
              name: newIngredient.name,
              weight: newIngredient.weight,
              energy: newIngredient.energy,
            }
          : ingredient
      )
    );
    setEditModalOpen(false);
    setNewIngredient({ name: "", weight: "", energy: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value.replace(/[^0-9.]/g, ""), // Keep only digits and dots
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
            Tên món ăn: ${formData.tenMonAn}
            Level: ${formData.level}
            Phương pháp nấu: ${formData.phuongPhapNau}
            Chế độ ăn: ${formData.cheDoAn}
            Thời gian: ${formData.thoiGian} phút
            Carb: ${formData.carb} g
            Protein: ${formData.protein} g
            Fat: ${formData.fat} g
            Huyết áp: ${formData.huyetAp}
            Đường huyết: ${formData.duongHuyet}
            Tim mạch: ${formData.timMach}
            Video hướng dẫn: ${formData.videoHuongDan}
            Ảnh xóa nền: ${formData.hinhAnh}
            Giới thiệu món ăn: ${formData.gioiThieuMonAn}
          `
      );
    } else if (section === "danhSachThanhPhan") {
      alert(`
              Danh sách thành phần :
             ${ingredients
               .map(
                 (item) =>
                   `${item.name} - ${item.weight}g - ${item.energy} calo\n`
               )
               .join("")}
             `);
    } else if (section === "danhSachHinhAnh") {
      alert(`
            Danh sách hình ảnh:
            ${dishImages.join(",\n")}
          `);
    }
  };

  const handleDeleteImages = () => {
    setDishImages([]);
    setNewDishImages([]);
    setFormData({ ...formData, hinhAnh: null });
  };

  const handleAddDishImages = (e) => {
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      alert("Bạn chỉ có thể chọn tối đa 3 ảnh");
      return;
    }
    const newImages = files.map((file) => URL.createObjectURL(file));
    setNewDishImages(newImages);
  };
  const handleSaveDishImages = () => {
    setDishImages([...newDishImages]);
    setAddImageModalOpen(false);
    setNewDishImages([]);
    setFormData({ ...formData, hinhAnh: newDishImages[0] });
  };
  const handleAddIngredientModal = () => {
    setAddIngredientModalOpen(true);
    setNewIngredient({
      name: "",
      weight: "",
      energy: "",
    });
  };
  const handleAddImageModal = () => {
    setAddImageModalOpen(true);
  };

  const handleToggleDescriptionEdit = () => {
    setIsDescriptionEditable(true);
  };
  const handleDescriptionBlur = () => {
    setIsDescriptionEditable(false);
  };

  const levelOptions = ["Dễ", "Trung bình", "Khó"];
  const phuongPhapNauOptions = [
    "Nước uống",
    "Xào",
    "Rang",
    "Nướng",
    "Canh",
    "Kho",
    "Hấp",
    "Hầm",
    "Chiên dầu",
    "Chiên không dầu",
    "Pha chế",
    "Luộc",
  ];
  const cheDoAnOptions = [
    "ít tinh bột",
    "ít chất béo",
    "nhiều đạm",
    "thuần chay",
    "Ăn chay (trứng, sữa)",
    "Healthy",
    "bình thường",
  ];
  const booleanOptions = ["Không", "Có"];

  const columns = [
    {
      header: "Tên nguyên liệu",
      accessor: "name",
      className: "w-[20%]",
    },
    {
      header: "Trọng lượng",
      accessor: "weight",
      className: "text-center w-[20%]",
    },
    {
      header: "Năng lượng",
      accessor: "energy",
      className: "text-center w-[20%]",
    },
    { header: "", accessor: "actions", className: "text-right w-[20%]" },
  ];

  const renderRow = (item, index) => (
    <tr
      key={index}
      className="text-[#202224] text-opacity-80 text-sm border-t bg-white"
    >
      <td className="px-4 py-5">{item.name}</td>
      <td className="px-4 py-5 text-center">{item.weight}g</td>
      <td className="px-4 py-5 text-center ">{item.energy} calo</td>
      <td className="px-4 py-5 text-center flex justify-end gap-2">
        <i
          className="fa-solid fa-pen text-black cursor-pointer"
          onClick={() => handleEditIngredient(item)}
        ></i>
        <i
          className="fa-solid fa-trash text-red-500 cursor-pointer"
          onClick={() => handleDeleteConfirmation(item.id)}
        ></i>
      </td>
    </tr>
  );

  return (
    <Layout>
      <div className="flex bg-white px-4 pt-4 overflow-hidden">
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
              Thông tin món ăn
            </h2>
          </div>
          <div className="mt-3 mb-8 flex flex-col gap-2">
            <h3 className=" text-lg font-semibold text-gray-800 mb-2">
              THÔNG TIN CƠ BẢN
            </h3>

            <div className=" flex flex-col p-4 bg-[#F4F7F9] rounded-lg ">
              <div className="mb-4">
                <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                  TÊN MÓN ĂN
                </label>
                <input
                  type="text"
                  name="tenMonAn"
                  value={formData.tenMonAn}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                />
              </div>

              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    LEVEL
                  </label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    {levelOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    PHƯƠNG PHÁP NẤU
                  </label>
                  <select
                    name="phuongPhapNau"
                    value={formData.phuongPhapNau}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    {phuongPhapNauOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label className="block text-[#9FA7B0] mb-1 text-sm font-semibold">
                    CHẾ ĐỘ ĂN
                  </label>
                  <select
                    name="cheDoAn"
                    value={formData.cheDoAn}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                  >
                    {cheDoAnOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
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
                <label className="block text-[#FA7E7E] mb-1 text-sm font-semibold">
                  CÓ HẠN CHẾ CHO NGƯỜI BỊ CÁC BỆNH LÝ VỀ HUYẾT ÁP KHÔNG ?
                </label>
                <select
                  name="huyetAp"
                  value={formData.huyetAp}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  {booleanOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-[#FA7E7E] mb-1 text-sm font-semibold">
                  CÓ HẠN CHẾ CHO NGƯỜI BỊ CÁC BỆNH LÝ VỀ ĐƯỜNG HUYẾT KHÔNG ?
                </label>
                <select
                  name="duongHuyet"
                  value={formData.duongHuyet}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  {booleanOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-[#FA7E7E] mb-1 text-sm font-semibold">
                  CÓ HẠN CHẾ CHO NGƯỜI BỊ CÁC BỆNH LÝ VỀ TIM MẠCH KHÔNG ?
                </label>
                <select
                  name="timMach"
                  value={formData.timMach}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                >
                  {booleanOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
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
              DANH SÁCH THÀNH PHẦN
            </h3>
            <div className=" flex flex-col p-4 bg-[#F4F7F9] rounded-lg ">
              <Table
                columns={columns}
                renderRow={renderRow}
                data={ingredients}
              />
              <div className="text-center mt-4">
                <button
                  onClick={handleAddIngredientModal}
                  className="text-blue-500 hover:text-blue-700 font-semibold"
                >
                  <i className="fa-solid fa-plus mr-1"></i>
                  Thêm thành phần
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => handleSubmit("danhSachThanhPhan")}
                className="bg-[#1445FE] hover:bg-opacity-80 text-white rounded-md px-6 py-2"
              >
                LƯU
              </button>
            </div>
          </div>

          <div className="mb-8 flex flex-col gap-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              DANH SÁCH HÌNH ẢNH CỦA MÓN ĂN
            </h3>
            <div className=" flex flex-wrap gap-4 p-4 bg-[#F4F7F9] rounded-lg ">
              {dishImages.map((image, index) => (
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
              {dishImages.length === 0 ? (
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
                <i className="fa-solid fa-bowl-food text-4xl text-gray-500"></i>
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

          <div className="mb-8">
            <div className="flex justify-between mb-4">
              <h3 className="text-base font-semibold text-gray-800 ">
                GIỚI THIỆU MÓN ĂN
              </h3>
              <i
                onClick={handleToggleDescriptionEdit}
                className="fa-solid fa-pen text-black cursor-pointer"
              ></i>
            </div>
            {isDescriptionEditable ? (
              <textarea
                value={formData.gioiThieuMonAn}
                onChange={(e) =>
                  setFormData({ ...formData, gioiThieuMonAn: e.target.value })
                }
                onBlur={handleDescriptionBlur}
                className="w-full h-[150px] bg-gray-100 rounded p-3 text-[#9FA7B0] border border-gray-200 focus:border-[#1445FE] focus:outline-none "
              />
            ) : (
              <div className="bg-gray-100 rounded p-3 text-[#9FA7B0]">
                {formData.gioiThieuMonAn}
              </div>
            )}
          </div>
          <div className="flex justify-center">
            <button className="bg-red-500 hover:bg-red-700 text-white rounded-md px-4 py-2">
              XÓA
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}

      <AddIngredientModal
        isOpen={isAddIngredientModalOpen}
        onClose={() => setAddIngredientModalOpen(false)}
        newIngredient={newIngredient}
        setNewIngredient={setNewIngredient}
        onAddIngredient={handleAddIngredient}
      />

      <AddImageModal
        isOpen={isAddImageModalOpen}
        onClose={() => setAddImageModalOpen(false)}
        newDishImages={newDishImages}
        handleAddDishImages={handleAddDishImages}
        handleSaveDishImages={handleSaveDishImages}
      />
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleDelete}
      />
      <EditIngredientModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
        newIngredient={newIngredient}
        setNewIngredient={setNewIngredient}
        onSaveEditIngredient={handleSaveEditIngredient}
      />
    </Layout>
  );
};

export default App;
