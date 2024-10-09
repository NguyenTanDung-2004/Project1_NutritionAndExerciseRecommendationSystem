import React, { useEffect } from "react";
import Header from "../header/Header";
import NavigationBar from "../navigationBar/NavigationBar";
import Footer from "../footer/Footer";
import "../../css/dish_details/App.css";
import DishOverview from "./DishOverview";
import BasicInfo from "./BasicInfo";
import NutritionDetails from "./NutritionDetails";
import CookingInstructions from "./CookingInstructions";
import RecommendDish from "./RecommendDish";
import UserReviews from "./UserReviews";
import { useLocation } from "react-router-dom";
import NavigationDishDetail from "./NavigationDishDetail";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const nutritionList = [
    "Thịt bò (bắp hoặc nạm): 50g, 125 calo",
    "Bún tươi: 100g, 110 calo",
    "Nước dùng (hầm từ xương bò, sá, hành tím, gừng): 200ml, 30 calo",
    "Chả bò hoặc giò lụa: 20g, 40 calo",
    "Rau sống (xà lách, giá đỗ, rau thơm, hành lá): 50g, 10 calo",
    "Ớt sa tế (gia vị): 5g, 25 calo",
    "Hành tím phi: 5g, 15 calo",
  ];

  const first = [
    "Xương bò rửa sạch, chặt khúc.",
    "Hành tây, tỏi, gừng băm nhỏ.",
    "Cà chua rửa sạch, bổ múi cau.",
    "Thịt bắp bò rửa sạch, thái mỏng.",
    "Rau thơm nhặt sạch, rửa kỹ.",
    "Bún trụng sơ qua nước sôi.",
  ];
  const second = [
    "Xào thịt: Phi thơm tỏi, cho thịt bò đã thái mỏng vào xào chín tái.",
    "Trình bày: Cho bún ra tô, xếp thịt bò lên trên. Chan nước dùng nóng hổi.",
    "Thêm topping: Rắc hành phi, tiêu, hành lá thái nhỏ.",
    "Thưởng thức: Bày kèm rau sống, chanh, ớt, tỏi băm. Pha thêm mắm, đường, ớt tùy khẩu vị.",
  ];
  const third = [
    "Để tăng hương vị, bạn có thể thêm chút hành phi hoặc tiêu xay.",
    "Nếu thích ăn cay, hãy cho thêm ớt tươi băm hoặc ớt bột.",
  ];

  const recommendDishes = [
    {
      id: "1",
      type: "Main dish",
      img: "https://i.ibb.co/kxVPqYg/bunbo.png",
      name: "BÚN BÒ",
      time: "1h 41m",
      calo: 350,
      likes: 1000,
      rating: 3,
    },
    {
      id: "2",
      type: "Side dish",
      img: "https://i.ibb.co/kxVPqYg/bunbo.png",
      name: "GỎI CUỐN",
      time: "30m",
      calo: 150,
      likes: 1000,
      rating: 4.2,
    },
    {
      id: "3",
      type: "Main dish",
      img: "https://i.ibb.co/kxVPqYg/bunbo.png",
      name: "PHỞ BÒ",
      time: "2h",
      calo: 400,
      likes: 1000,
      rating: 5,
    },
    {
      id: "4",
      type: "Dessert",
      img: "https://i.ibb.co/kxVPqYg/bunbo.png",
      name: "CHÈ BƯỞI",
      time: "1h",
      calo: 250,
      likes: 1000,
      rating: 4.5,
    },
    {
      id: "5",
      type: "Lunch",
      img: "https://i.ibb.co/kxVPqYg/bunbo.png",
      name: "NEM RÁN",
      time: "45m",
      calo: 300,
      likes: 1000,
      rating: 3.8,
    },
    {
      id: "6",
      type: "Main dish",
      img: "https://i.ibb.co/kxVPqYg/bunbo.png",
      name: "CƠM TẤM",
      time: "1h 15m",
      calo: 550,
      likes: 1000,
      rating: 4.9,
    },
  ];

  const reviews = [
    {
      avatar: "https://avatar.iran.liara.run/public",
      name: "Hồng Thắm",
      rating: 5,
      dateCreation: "2024-10-09",
      content: "Món ăn tuyệt vời, rất hợp khẩu vị của tôi!",
    },
    {
      avatar: "https://avatar.iran.liara.run/public",
      name: "Kim Nhung",
      rating: 4,
      dateCreation: "2024-10-08",
      content: "Ngon, nhưng hơi ít calo so với nhu cầu của mình.",
    },
    {
      avatar: "https://avatar.iran.liara.run/public",
      name: "Ngọc Anh",
      rating: 3.5,
      dateCreation: "2024-10-07",
      content: "Tôi thấy món ăn khá ổn, nhưng còn có thể cải thiện thêm.",
    },
    {
      avatar: "https://avatar.iran.liara.run/public",
      name: "Trà Giang",
      rating: 1,
      dateCreation: "2024-10-07",
      content: "Khó làm vãi",
    },
    {
      avatar: "https://avatar.iran.liara.run/public",
      name: "Dũng Tấn",
      rating: 2,
      dateCreation: "2024-10-07",
      content: "Mắc mệt, lỗi nhiều, nấu dở",
    },
    {
      avatar: "https://avatar.iran.liara.run/public",
      name: "Giang Phan",
      rating: 4,
      dateCreation: "2024-10-07",
      content: "Ùm cũng được á",
    },
  ];

  return (
    <>
      <div className="dish-details">
        <div className="dish-details__header">
          <Header
            username="Phan Giang"
            text="May this website help you achieve your health goals."
            notifications={10}
          ></Header>
        </div>

        <div className="first">
          <NavigationBar itemClicked="Nutritional regimen"></NavigationBar>

          <DishOverview
            type="Main dish"
            name="BÚN BÒ"
            img="https://i.ibb.co/kxVPqYg/bunbo.png"
            desc="là món ăn truyền thống Việt Nam, với nước dùng đậm đà, thịt bò mềm ngon, và hương vị cay nhẹ từ sa tế. Thích hợp cho bữa sáng hoặc trưa, đầy dinh dưỡng và hấp dẫn."
            calo={300}
            protein={10}
            fat={10}
            carb={10}
            rating={4.5}
          />

          <NavigationDishDetail />
        </div>

        <BasicInfo
          img="https://i.ibb.co/QkXghSy/basic-info.png"
          method="hầm và luộc"
          time="1h 43m"
          type="main dish (món chính)"
          level="trung bình"
          diet="cơ bản"
          favourites={300}
        />

        <NutritionDetails array={nutritionList} totalCalo={355} />

        <CookingInstructions
          first={first}
          second={second}
          third={third}
          video="https://streamable.com/r9350c"
          img1="https://i.ibb.co/QkXghSy/basic-info.png"
          img2="https://i.ibb.co/QkXghSy/basic-info.png"
        />

        <RecommendDish dishes={recommendDishes} />

        <UserReviews reviews={reviews} />

        <Footer></Footer>
      </div>
    </>
  );
};

export default App;
