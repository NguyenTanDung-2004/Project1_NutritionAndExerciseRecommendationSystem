// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import CreateHomeOut from "./pages/HomeOut";
import HomeIn from "./pages/HomeIn";
import NutritionalRegimen from "./pages/NutritionalRegimen";
import DishDetails from "./pages/DishDetails";
import Workout from "./pages/Workout";
import WorkoutDetails from "./pages/WorkoutDetails";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Goals from "./pages/Goals";
import GoalDetails from "./pages/GoalDetails";
import Challenges from "./pages/Challenges";
import AdminStatistics from "./pages/AdminStatistics";
import AdminChallenges from "./pages/AdminChallenges";
import AdminWorkout from "./pages/AdminWorkout";
import AdminDish from "./pages/AdminDish";
import AdminProfile from "./pages/AdminProfile";
import AdminAddChallenges from "./pages/AdminAddChallenges";
import AdminAddWorkout from "./pages/AdminAddWorkout";
import AdminInfoWorkout from "./pages/AdminInfoWorkout";
import AdminAddFood from "./pages/AdminAddFood";
import AdminInfoDish from "./pages/AdminInfoDish";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/home_out" element={<CreateHomeOut />} />
        <Route path="/home_in" element={<HomeIn />} />
        <Route path="/nutritional_regimen" element={<NutritionalRegimen />} />
        <Route path="/nutritional_regimen/:id" element={<DishDetails />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/workout/:id" element={<WorkoutDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/goals/:id" element={<GoalDetails />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="/dashboard/statistic" element={<AdminStatistics />} />
        <Route path="/dashboard/workout" element={<AdminWorkout />} />
        <Route path="/dashboard/dish" element={<AdminDish />} />
        <Route path="/dashboard/challenges" element={<AdminChallenges />} />
        <Route path="/dashboard/profile" element={<AdminProfile />} />
        <Route path="/dashboard/workout/:id" element={<AdminInfoWorkout />} />
        <Route path="/dashboard/addWorkout" element={<AdminAddWorkout />} />
        <Route path="/dashboard/dish/:id" element={<AdminInfoDish />} />
        <Route path="/dashboard/addFood" element={<AdminAddFood />} />
        <Route
          path="/dashboard/challenges/add"
          element={<AdminAddChallenges />}
        />
      </Routes>
    </Router>
  );
}

export default App;
