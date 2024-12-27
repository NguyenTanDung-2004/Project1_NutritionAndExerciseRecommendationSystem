import React, { useState } from "react";
import HeartProgress from "./HeartProgress";
import LineProgress from "./LineProgress";
import EditNutritionModal from "./EditNutritionModal";

const NutritionalInfo = () => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  const [nutritionData, setNutritionData] = useState({
    dailyCalories: 2000,
    remainingCalories: 950,
    burnedCalories: 0,
    intakePercentage: 50,
    diet: "Ít tinh bột",
    meals: [
      { label: "Bữa sáng", calories: 550 },
      { label: "Bữa trưa", calories: 250 },
      { label: "Bữa tối", calories: 0 },
      { label: "Bữa phụ", calories: 0 },
    ],
    protein: {
      percentage: 27,
      intake: 27,
      total: 100,
    },
    carb: {
      percentage: 100,
      intake: 100,
      total: 100,
    },
    fat: {
      percentage: 40,
      intake: 40,
      total: 100,
    },
  });

  const dietOptions = [
    { label: "Ít tinh bột", bgColor: "[#A2F4F3]" },
    { label: "Cân bằng", bgColor: "[#B2DFFF]" },
    { label: "Nhiều đạm", bgColor: "[#6CE75B]" },
  ];

  const [isDietDropdownOpen, setIsDietDropdownOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState("");

  const handleAddMeal = (meal) => {
    setSelectedMeal(meal.label);
    setIsEditModalOpen(true);
  };

  const handleDietChange = (diet) => {
    setNutritionData((prevData) => ({ ...prevData, diet }));
    setIsDietDropdownOpen(false);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  };
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setSelectedMeal("");
  };

  return (
    <div className="w-full h-auto flex flex-col gap-3 ">
      <div className="bg-[#A2F4F3]  hidden"></div>
      <div className=" bg-[#B2DFFF] hidden"></div>
      <div className=" bg-[#6CE75B] hidden"></div>
      <div className="bg-white flex items-center gap-4 rounded-lg py-1.5 px-4">
        <div className="relative">
          <input
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="absolute inset-0 opacity-0"
          />
          <i className="fa-solid fa-calendar-days text-lg text-black"></i>
        </div>

        <span className="text-black text-base font-medium">
          {formatDate(selectedDate)}
        </span>
      </div>

      <div className="bg-white flex flex-col items-center justify-center gap-4 rounded-lg p-4">
        <div className="flex flex-col items-center">
          <div className="text-base font-semibold text-[#595858]">
            Calories cần nạp
          </div>
          <div className="text-lg font-bold text-[#1445FE] self-center">
            {nutritionData.dailyCalories}
          </div>
        </div>

        <div className="w-full flex items-center justify-between lg:px-14 md:px-4 sm:px-0">
          <div className="flex flex-col items-center">
            <div className="text-[#595858] text-base font-semibold">
              Calories còn lại
            </div>
            <div className="text-lg font-bold text-[#FF0000] self-center">
              {nutritionData.remainingCalories}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <HeartProgress percentage={nutritionData.intakePercentage} />
            <div className="text-lg font-bold text-[#1445FE] self-center">
              {nutritionData.intakePercentage}%
            </div>
            <div className="text-[#595858] text-base font-semibold">Đã nạp</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-[#595858] text-base font-semibold">
              Calories tiêu hao
            </div>
            <div className="text-lg font-bold text-[#CCCCCC] self-center">
              {nutritionData.burnedCalories}
            </div>
          </div>
        </div>

        <div className="mt-5 w-full flex flex-wrap items-center justify-between lg:px-16 md:px-4 sm:px-0">
          {nutritionData.meals.map((meal, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2"
            >
              <div className="text-[#595858] text-base font-semibold">
                {meal.label}
              </div>
              {meal.calories > 0 ? (
                <div
                  className="text-lg font-bold text-[#1445FE] cursor-pointer"
                  onClick={() => handleAddMeal(meal)}
                >
                  {meal.calories}
                </div>
              ) : (
                <button
                  onClick={() => handleAddMeal(meal)}
                  className="w-5 h-5 rounded-full bg-[#1445FE] text-white flex items-center justify-center"
                >
                  <i className="fa-solid fa-plus text-xs"></i>
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="mt-5  w-full flex flex-wrap items-center justify-between lg:px-16 md:px-4 sm:px-0">
          <div className="w-[140px] flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="text-[#595858] text-sm font-semibold">
                Protein
              </div>
              <div className="text-[#595858] text-sm font-medium">
                {nutritionData.protein.percentage}%
              </div>
            </div>

            <LineProgress percentage={nutritionData.protein.percentage} />
            <div className="text-[#595858] text-sm font-medium self-center">
              {nutritionData.protein.intake}/{nutritionData.protein.total}g
            </div>
          </div>

          <div className="w-[140px] flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="text-[#595858] text-sm font-semibold">Carb</div>
              <div className="text-[#595858] text-sm font-medium">
                {nutritionData.carb.percentage}%
              </div>
            </div>

            <LineProgress percentage={nutritionData.carb.percentage} />
            <div className="text-[#595858] text-sm font-medium self-center">
              {nutritionData.carb.intake}/{nutritionData.carb.total}g
            </div>
          </div>

          <div className="w-[140px] flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="text-[#595858] text-sm font-semibold">Fat</div>
              <div className="text-[#595858] text-sm font-medium">
                {nutritionData.fat.percentage}%
              </div>
            </div>

            <LineProgress percentage={nutritionData.fat.percentage} />
            <div className="text-[#595858] text-sm font-medium self-center">
              {nutritionData.fat.intake}/{nutritionData.fat.total}g
            </div>
          </div>
        </div>

        <div className="mt-5 w-full flex gap-4 items-center justify-start lg:px-16 md:px-4 sm:px-0">
          <div className="text-black text-base font-semibold">
            Bạn đang thực hiện chế độ ăn:
          </div>

          <div
            className="relative w-[140px] cursor-pointer"
            onClick={() => setIsDietDropdownOpen(!isDietDropdownOpen)}
          >
            <div
              className={`bg-${
                dietOptions.find((diet) => diet.label === nutritionData.diet)
                  ?.bgColor
              } text-black text-center text-sm rounded-2xl font-semibold py-0.5`}
            >
              {nutritionData.diet}
            </div>

            {isDietDropdownOpen && (
              <div className="absolute top-6 -left-1.5 flex flex-col bg-[#EAF0F0] p-2 gap-2 rounded-lg shadow-lg">
                {dietOptions.map((diet, index) => (
                  <div
                    key={index}
                    onClick={() => handleDietChange(diet.label)}
                    className={`w-[140px] bg-${diet.bgColor} text-black text-center text-sm rounded-2xl font-semibold py-0.5 cursor-pointer`}
                  >
                    {diet.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <EditNutritionModal
          onClose={handleCloseModal}
          mealLabel={selectedMeal}
        />
      )}
    </div>
  );
};

export default NutritionalInfo;
