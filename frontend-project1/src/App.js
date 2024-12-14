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
      </Routes>
    </Router>
  );
}

export default App;
