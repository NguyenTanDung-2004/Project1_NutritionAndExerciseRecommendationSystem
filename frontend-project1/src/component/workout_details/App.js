import React, { useEffect } from "react";
import "../../css/workout_details/App.css";
import Header from "../header/Header";
import NavigationBar from "../navigationBar/NavigationBar";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
import Left from "./Left";
import Right from "./Right";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const images = [
    "https://i.ibb.co/FHk62vT/1.png",
    "https://i.ibb.co/FHk62vT/1.png",
    "https://i.ibb.co/FHk62vT/1.png",
    "https://i.ibb.co/FHk62vT/1.png",
  ];

  const recommend = [
    {
      id: "2",
      name: "Bài tập khởi động 2",
      image: "https://i.ibb.co/x1K7stB/workout-1.png",
      time: 15,
      calo: 12,
      rating: 4,
    },
    {
      id: "3",
      name: "Bài tập khởi động 3",
      image: "https://i.ibb.co/x1K7stB/workout-1.png",
      time: 20,
      calo: 8,
      rating: 3,
    },
    {
      id: "4",
      name: "Bài tập khởi động 4",
      image: "https://i.ibb.co/x1K7stB/workout-1.png",
      time: 25,
      calo: 9,
      rating: 2,
    },
    {
      id: "5",
      name: "Bài tập khởi động 5",
      image: "https://i.ibb.co/x1K7stB/workout-1.png",
      time: 45,
      calo: 14,
      rating: 1,
    },
    {
      id: "6",
      name: "Bài tập khởi động 6",
      image: "https://i.ibb.co/x1K7stB/workout-1.png",
      time: 50,
      calo: 7,
      rating: 5,
    },
    {
      id: "7",
      name: "Bài tập khởi động 7",
      image: "https://i.ibb.co/x1K7stB/workout-1.png",
      time: 40,
      calo: 11,
      rating: 4,
    },
  ];
  return (
    <>
      <div className="workout-details">
        <Header
          username="Phan Giang"
          text="May this website help you achieve your health goals."
          notifications={10}
        ></Header>

        <NavigationBar itemClicked="Workout"></NavigationBar>
      </div>

      <div className="workout-details__main">
        <Left image="https://i.postimg.cc/NGnqyLgB/remove-workout.png" />
        <Right
          type="Khởi động"
          name="Bài tập khởi động số 1"
          rating={4}
          images={images}
          met={3}
          time={5}
          calo={5}
          limitation="bệnh tim, bệnh tay, bệnh khớp, bệnh cột sống "
          link="https://www.youtube.com/watch?v=cbKkB3POqaY"
          recommend={recommend}
        />
      </div>

      <Footer></Footer>
    </>
  );
};

export default App;
