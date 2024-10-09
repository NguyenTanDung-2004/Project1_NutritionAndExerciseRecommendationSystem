// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import CreateHomeOut from "./pages/HomeOut";
import HomeIn from "./pages/HomeIn";
import NutritionalRegimen from "./pages/NutritionalRegimen";
import DishDetails from "./pages/DishDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/account" element={<Account />} />
        <Route path="/home_out" element={<CreateHomeOut />} />
        <Route path="/home_in" element={<HomeIn />} />
        <Route path="/nutritional_regimen" element={<NutritionalRegimen />} />
        <Route path="/nutritional_regimen/:id" element={<DishDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
