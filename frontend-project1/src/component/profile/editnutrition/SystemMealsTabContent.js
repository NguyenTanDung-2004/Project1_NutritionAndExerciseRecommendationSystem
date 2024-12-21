import React, { useState } from "react";
import CardInfo from "./CardInfo";
import { systemMeals } from "./data";
import DetailCardModal from "./DetailCardModal";

const SystemMealsTabContent = ({ mealLabel }) => {
  const [selectedMealId, setSelectedMealId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (id) => {
    setSelectedMealId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMealId(null);
  };

  return (
    <div className="max-h-[500px] overflow-y-auto">
      <div className="grid grid-cols-3 gap-4">
        {systemMeals?.map((item) => (
          <div
            key={item.id}
            className="p-2"
            onClick={() => handleCardClick(item.id)}
          >
            <CardInfo
              name={item.name}
              image={item.image}
              calo={item.calo}
              weight={item.weight}
              protein={item.protein}
              fat={item.fat}
              carb={item.carb}
            />
          </div>
        ))}
      </div>
      {isModalOpen && (
        <DetailCardModal
          onClose={handleCloseModal}
          mealId={selectedMealId}
          mealLabel={mealLabel}
        />
      )}
    </div>
  );
};

export default SystemMealsTabContent;
