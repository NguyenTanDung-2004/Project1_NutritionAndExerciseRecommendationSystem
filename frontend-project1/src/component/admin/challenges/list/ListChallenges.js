import React from "react";
import Card from "./Card";

const ListChallenges = ({ searchTerm, filterType, sortType }) => {
  const challenges = [
    {
      id: "1",
      image: "https://i.ibb.co/TwYfssH/2.png",
      nameChallenges: "Thử thách 7 ngày sống vui sống khỏe",
      nameWorkout: "BÀI TẬP KHỞI ĐỘNG TAY CHÂN BỤNG SỐ 1",
      type: "Khởi động",
      level: "Dễ",
      soLanTap: 0,
      soNguoiTap: 10,
      point: 50,
      time: "30",
      calories: "10",
    },
    {
      id: "2",
      image: "https://i.ibb.co/TwYfssH/2.png",
      nameChallenges: "Thử thách 14 ngày đẩy lùi mỡ bụng",
      nameWorkout: "BÀI TẬP TĂNG SỨC MẠNH TAY CHÂN",
      type: "Tay",
      level: "Trung bình",
      soLanTap: 5,
      soNguoiTap: 15,
      point: 70,
      time: "45",
      calories: "20",
    },
    {
      id: "3",
      image: "https://i.ibb.co/TwYfssH/2.png",
      nameChallenges: "Thử thách 30 ngày luyện cơ chân",
      nameWorkout: "BÀI TẬP CĂNG CƠ CHÂN SỐ 1",
      type: "Chân",
      level: "Khó",
      soLanTap: 3,
      soNguoiTap: 20,
      point: 90,
      time: "60",
      calories: "30",
    },
    {
      id: "4",
      image: "https://i.ibb.co/TwYfssH/2.png",
      nameChallenges: "Thử thách 21 ngày săn chắc cơ mông",
      nameWorkout: "BÀI TẬP TĂNG CƯỜNG CƠ MÔNG",
      type: "Mông",
      level: "Dễ",
      soLanTap: 10,
      soNguoiTap: 25,
      point: 100,
      time: "40",
      calories: "25",
    },
    {
      id: "5",
      image: "https://i.ibb.co/TwYfssH/2.png",
      nameChallenges: "Thử thách 7 ngày đốt cháy calo",
      nameWorkout: "BÀI TẬP TAY VÀ CHÂN SỐ 2",
      type: "Tay",
      level: "Khó",
      soLanTap: 8,
      soNguoiTap: 12,
      point: 120,
      time: "50",
      calories: "35",
    },
    {
      id: "6",
      image: "https://i.ibb.co/TwYfssH/2.png",
      nameChallenges: "Thử thách 14 ngày đốt cháy năng lượng",
      nameWorkout: "BÀI TẬP CHÂN CƠ BẢN",
      type: "Chân",
      level: "Trung bình",
      soLanTap: 6,
      soNguoiTap: 18,
      point: 60,
      time: "35",
      calories: "15",
    },
    {
      id: "7",
      image: "https://i.ibb.co/TwYfssH/2.png",
      nameChallenges: "Thử thách 30 ngày luyện tập toàn thân",
      nameWorkout: "BÀI TẬP CĂN BẢN MÔNG VÀ BỤNG",
      type: "Mông",
      level: "Dễ",
      soLanTap: 4,
      soNguoiTap: 22,
      point: 80,
      time: "55",
      calories: "40",
    },
  ];

  const filteredChallenges = challenges.filter(
    (challenge) =>
      challenge.nameWorkout.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filterType === "Lọc" || challenge.type === filterType)
  );

  const sortedChallenges = [...filteredChallenges].sort((a, b) => {
    if (sortType === "Điểm giảm dần") {
      return b.point - a.point;
    } else if (sortType === "Điểm tăng dần") {
      return a.point - b.point;
    } else if (sortType === "Calo giảm dần") {
      return b.calories - a.calories;
    } else if (sortType === "Calo tăng dần") {
      return a.calories - b.calories;
    } else if (sortType === "Thời gian giảm dần") {
      return b.time - a.time;
    } else if (sortType === "Thời gian tăng dần") {
      return a.time - b.time;
    }
    return 0;
  });

  return (
    <div className="mt-5 w-full flex flex-col gap-8">
      {sortedChallenges.map((challenge, index) => (
        <Card key={index} {...challenge} />
      ))}
    </div>
  );
};

export default ListChallenges;
