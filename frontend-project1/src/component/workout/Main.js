import React, { useEffect, useState } from "react";
import "../../css/workout/Main.css";
import Button from "./Button";
import CategoryList from "./CategoryList";
import ListWorkout from "./ListWorkout";
import data from "./ListWorkoutData";

const Main = () => {
  const [activeButton, setActiveButton] = useState("FOR YOU");
  const [workoutData, setWorkoutData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchForYouData = async () => {
    console.log("Fetching 'for you' data...");
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/workout/for-you"); // Thay đổi URL API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setWorkoutData(data);
    } catch (err) {
      setError(err);
      console.error("Error fetching for you workout data:", err);
    } finally {
      setLoading(false);
    }
  };

  const fetchAllData = async () => {
    console.log("Fetching 'All' data...");
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/workout/all"); // Thay đổi URL API
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setWorkoutData(data);
    } catch (err) {
      setError(err);
      console.error("Error fetching all workout data:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleButtonClick = (label) => {
    setActiveButton(label);

    if (label === "FOR YOU") {
      fetchForYouData();
    } else if (label === "ALL") {
      fetchAllData();
    }
  };

  useEffect(() => {
    fetchForYouData(); // Fetch "For You" data on mount
  }, []);

  return (
    <>
      <div className="main-workout">
        <div className="header">
          <span className="title">BÀI TẬP</span>
        </div>

        <div className="button-filter">
          <Button
            label="DÀNH CHO BẠN"
            onClick={() => handleButtonClick("FOR YOU")}
            isActive={activeButton === "FOR YOU"}
          ></Button>

          <Button
            label="TẤT CẢ"
            onClick={() => handleButtonClick("ALL")}
            isActive={activeButton === "ALL"}
          ></Button>
        </div>

        <CategoryList />

        <ListWorkout data={data} />

        {/* {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {!loading && !error &&  <ListWorkout data={workoutData} />} */}
      </div>
    </>
  );
};

export default Main;
