import React, { useState } from "react";
import Layout from "../Layout";
import { useNavigate, useParams } from "react-router-dom";
import WorkoutSelection from "./WorkoutSelection";
import WorkoutConfirmation from "./WorkoutConfirmation";

const App = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleClickBack = () => {
    navigate(-1);
  };

  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  const [isConfirmScreen, setIsConfirmScreen] = useState(false);
  const [workoutScores, setWorkoutScores] = useState({});

  const workouts = [
    { id: "00001", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
    { id: "00002", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
    { id: "00003", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
    { id: "00004", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
    { id: "00005", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
    { id: "00006", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
    { id: "00007", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
    { id: "00008", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
    { id: "00009", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
    { id: "00010", name: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG" },
  ];

  const handleToggleWorkout = (workoutId) => {
    if (selectedWorkouts.includes(workoutId)) {
      setSelectedWorkouts(selectedWorkouts.filter((id) => id !== workoutId));
    } else {
      setSelectedWorkouts([...selectedWorkouts, workoutId]);
    }
  };

  const handleNext = () => {
    setIsConfirmScreen(true);
  };
  const handleConfirm = () => {
    const selectedWithScore = selectedWorkouts.map((workoutId) => {
      return {
        id: workoutId,
        score: workoutScores[workoutId] || "10", // use 10 as default
      };
    });
    alert(`
           Danh sách các bài tập đã được chọn:
           ${selectedWithScore
             .map((item) => `${item.id} - ${item.score}`)
             .join(",\n")}
           `);

    navigate("/dashboard/challenges");
  };

  const handleScoreChange = (workoutId, score) => {
    setWorkoutScores((prevWorkoutScores) => ({
      ...prevWorkoutScores,
      [workoutId]: score,
    }));
  };
  return (
    <Layout>
      <div className="flex flex-col bg-white px-4 pt-4 min-h-screen">
        <div className="items-center mb-4 flex ">
          <button
            className="ml-6 mr-8 text-[#4F6071]"
            onClick={handleClickBack}
          >
            <i className="fa-solid fa-arrow-left "></i>
          </button>
          <h2 className="text-2xl font-semibold text-gray-800">
            {isConfirmScreen
              ? "Danh sách các bài tập vừa được chọn để thêm vào thử thách"
              : "Danh sách các bài tập của hệ thống"}
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {isConfirmScreen ? (
            <WorkoutConfirmation
              selectedWorkouts={selectedWorkouts}
              workouts={workouts}
              workoutScores={workoutScores}
              handleScoreChange={handleScoreChange}
              handleConfirm={handleConfirm}
            />
          ) : (
            <WorkoutSelection
              workouts={workouts}
              selectedWorkouts={selectedWorkouts}
              onToggleWorkout={handleToggleWorkout}
              handleNext={handleNext}
            />
          )}
        </div>
        <div className="sticky bottom-0 left-0 w-full flex justify-between items-center  bg-white border-t p-4 shadow-[-2px_-2px_50px_0px_rgba(0,0,0,0.3)]">
          <span className="text-gray-500 text-sm">
            {isConfirmScreen
              ? `THÊM ${selectedWorkouts.length} THỬ THÁCH`
              : `Đã chọn ${selectedWorkouts.length} bài tập`}
          </span>
          {isConfirmScreen ? (
            <button
              onClick={handleConfirm}
              className="bg-[#1445FE] hover:bg-opacity-80 text-white rounded-md px-6 py-2"
            >
              XÁC NHẬN
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="bg-[#1445FE] hover:bg-opacity-80 text-white rounded-md px-6 py-2"
            >
              Tiếp tục
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default App;
