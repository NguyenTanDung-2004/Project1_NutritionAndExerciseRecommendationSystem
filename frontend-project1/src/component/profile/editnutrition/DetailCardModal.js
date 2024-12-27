import React, { useState, useEffect, useRef } from "react";
import PieChartComponent from "../../chart/PieChartComponent";

const DetailCardModal = ({ onClose, mealId, mealLabel }) => {
  const [meal, setMeal] = useState(null);
  const [editable, setEditable] = useState(false);
  const [modifiedWeight, setModifiedWeight] = useState(0);
  const [modifiedCalo, setModifiedCalo] = useState(0);
  const [modifiedProtein, setModifiedProtein] = useState(0);
  const [modifiedFat, setModifiedFat] = useState(0);
  const [modifiedCarb, setModifiedCarb] = useState(0);
  const [proteinPercentage, setProteinPercentage] = useState(0);
  const [fatPercentage, setFatPercentage] = useState(0);
  const [carbPercentage, setCarbPercentage] = useState(0);

  const [exerciseTimes, setExerciseTimes] = useState({
    walk: 30,
    run: 20,
    jump: 22,
    swim: 19,
    ride: 21,
  });
  const weightInputRef = useRef(null);

  useEffect(() => {
    const hardcodedMeal = {
      id: mealId,
      name: "Chả nấm kho tiêu",
      weight: "150g",
      calo: 300,
      protein: 12,
      fat: 2.5,
      carb: 19.4,
    };
    setMeal(hardcodedMeal);
    setModifiedWeight(
      parseFloat(hardcodedMeal.weight.replace(/[^0-9.]/g, "")) || 0
    );
    setModifiedCalo(hardcodedMeal.calo);
    setModifiedProtein(hardcodedMeal.protein);
    setModifiedFat(hardcodedMeal.fat);
    setModifiedCarb(hardcodedMeal.carb);
    calculatePercentages(
      parseFloat(hardcodedMeal.weight.replace(/[^0-9.]/g, "")),
      hardcodedMeal.fat,
      hardcodedMeal.protein,
      hardcodedMeal.carb
    );
  }, [mealId]);

  const handleWeightChange = (e) => {
    const newWeight = e.target.value;
    const decimalRegex = /^[0-9]*\.?[0-9]*$/;
    if (newWeight === "" || decimalRegex.test(newWeight)) {
      const parsedWeight = parseFloat(newWeight);
      if (parsedWeight >= 1) {
        setModifiedWeight(parsedWeight);
        calculateModifiedNutrients(parsedWeight);
      } else {
        setModifiedWeight(1);
        calculateModifiedNutrients(1);
      }
    }
  };
  const toggleEditable = () => {
    setEditable(!editable);
    if (editable && weightInputRef.current) {
      weightInputRef.current.blur();
    }
    if (!editable && weightInputRef.current) {
      weightInputRef.current.focus();
    }
    if (!editable) {
      calculatePercentages(
        modifiedWeight,
        modifiedFat,
        modifiedProtein,
        modifiedCarb
      );
    } else {
      calculatePercentages(
        parseFloat(meal.weight.replace(/[^0-9.]/g, "")),
        meal.fat,
        meal.protein,
        meal.carb
      );
    }
  };

  const calculateModifiedNutrients = (newWeight) => {
    if (meal && typeof newWeight === "number" && newWeight > 0) {
      const baseWeight = parseFloat(meal.weight.replace(/[^0-9.]/g, ""));
      const ratio = newWeight / baseWeight;
      const newCalo = Math.round(meal.calo * ratio);

      setModifiedCalo(newCalo);
      setModifiedProtein((meal.protein * ratio).toFixed(1));
      setModifiedFat((meal.fat * ratio).toFixed(1));
      setModifiedCarb((meal.carb * ratio).toFixed(1));

      setExerciseTimes({
        walk: Math.round(30 * ratio),
        run: Math.round(20 * ratio),
        jump: Math.round(22 * ratio),
        swim: Math.round(19 * ratio),
        ride: Math.round(21 * ratio),
      });

      calculatePercentages(
        newWeight,
        (meal.fat * ratio).toFixed(1),
        (meal.protein * ratio).toFixed(1),
        (meal.carb * ratio).toFixed(1)
      );
    }
  };

  const calculatePercentages = (weight, fat, protein, carb) => {
    const total = parseFloat(fat) + parseFloat(protein) + parseFloat(carb);
    const fatPercent = (parseFloat(fat) / total) * 100 || 0;
    const proteinPercent = (parseFloat(protein) / total) * 100 || 0;
    const carbPercent = (parseFloat(carb) / total) * 100 || 0;

    setFatPercentage(fatPercent);
    setProteinPercentage(proteinPercent);
    setCarbPercentage(carbPercent);
  };
  const handleAddToMeal = () => {
    alert(`Món ăn đã được thêm vào ${mealLabel}`);
    onClose();
  };

  if (!meal) return null;

  const pieLabels = ["Chất béo", "Chất đạm", "Carb"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-[700px] py-6 px-12 shadow-lg relative ">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-800"
            >
              <i className="fa-solid fa-arrow-left text-xl"></i>
            </button>
            <h2 className="text-xl font-semibold text-gray-800 uppercase">
              {meal.name}
            </h2>
            <i
              className={`fa-solid ${
                editable
                  ? "fa-floppy-disk text-green-500"
                  : "fa-pen text-gray-600"
              } cursor-pointer`}
              onClick={toggleEditable}
            ></i>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <i className="fa-solid fa-xmark text-3xl"></i>
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-gray-500 text-sm text-center">
            Năng lượng: {editable ? modifiedCalo : meal.calo} kCal
          </div>
          <div className="flex items-center gap-2 text-center justify-center">
            <input
              ref={weightInputRef}
              type="text"
              value={modifiedWeight}
              onChange={handleWeightChange}
              className={`border p-2 rounded-md w-20 text-center focus:outline-none ${
                editable ? "focus:outline-[#1445FE] border-[#1445FE]" : ""
              }`}
              disabled={!editable}
            />
            <span className="text-base">gram</span>
          </div>

          <div className="bg-white flex justify-center items-center h-fit flex-wrap gap-20 rounded-lg p-4 ">
            <PieChartComponent
              bad={fatPercentage}
              normal={proteinPercentage}
              satisfied={carbPercentage}
              labels={pieLabels}
            />
            <div className=" flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-[20px] h-[20px] bg-[#FF8E8B] rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm">
                  Chất béo: {editable ? modifiedFat : meal.fat}g
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[20px] h-[20px] bg-[#36C5E2] rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm">
                  Chất đạm: {editable ? modifiedProtein : meal.protein}g
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-[20px] h-[20px] bg-[#9188FC] rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm">
                  Carb: {editable ? modifiedCarb : meal.carb}g
                </span>
              </div>
            </div>
          </div>

          <span className="font-semibold text-base text-black">
            Làm sao để tiêu hao {editable ? modifiedCalo : meal.calo} kCal
          </span>
          <div className="flex gap-6 justify-center bg-[#F9F9F9] shadow-[6px_6px_40px_0px_rgba(0,0,0,0.20)] rounded-xl p-4 ">
            <div className="flex-1 flex items-center justify-center flex-col">
              <img
                src="/images/editnutrition/1.png"
                alt="walk"
                className="w-14 h-14 object-cover rounded-md"
              />

              <span className="font-medium text-base text-[#595858] text-center">
                {exerciseTimes.walk} phút
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center flex-col">
              <img
                src="/images/editnutrition/2.png"
                alt="run"
                className="w-14 h-14 object-cover rounded-md"
              />

              <span className="font-medium text-base text-[#595858] text-center">
                {exerciseTimes.run} phút
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center flex-col">
              <img
                src="/images/editnutrition/3.png"
                alt="jump"
                className="w-14 h-14 object-cover rounded-md"
              />

              <span className="font-medium text-base text-[#595858] text-center">
                {exerciseTimes.jump} phút
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center flex-col">
              <img
                src="/images/editnutrition/4.png"
                alt="swim"
                className="w-14 h-14 object-cover rounded-md"
              />

              <span className="font-medium text-base text-[#595858] text-center">
                {exerciseTimes.swim} phút
              </span>
            </div>

            <div className="flex-1 flex items-center justify-center flex-col">
              <img
                src="/images/editnutrition/5.png"
                alt="ride"
                className="w-14 h-14 object-cover rounded-md"
              />

              <span className="font-medium text-base text-[#595858] text-center">
                {exerciseTimes.ride} phút
              </span>
            </div>
          </div>

          <button
            className="mt-4 py-2 px-4 rounded-md text-white font-semibold bg-[#1445FE] hover:bg-opacity-80 cursor-pointer uppercase self-center"
            onClick={handleAddToMeal}
          >
            THÊM VÀO {mealLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCardModal;
