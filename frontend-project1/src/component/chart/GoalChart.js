import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const GoalChart = ({ data }) => {
  const chartData = {
    labels: ["Calories cần nạp", "Calories thực sự nạp", "Calories tiêu hao"],
    datasets: [
      {
        label: "Cần nạp - Protein",
        data: [data.requiredProtein, 0, 0],
        backgroundColor: "rgba(20, 69, 254, 0.8)",
        stack: "stack1",
      },
      {
        label: "Cần nạp - Fat",
        data: [data.requiredFat, 0, 0],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        stack: "stack1",
      },
      {
        label: "Cần nạp - Carb",
        data: [data.requiredCarb, 0, 0],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        stack: "stack1",
      },
      {
        label: "Thực sự nạp - Protein",
        data: [0, data.consumedProtein, 0],
        backgroundColor: "rgba(20, 69, 254, 0.8)",
        stack: "stack2",
      },
      {
        label: "Thực sự nạp - Fat",
        data: [0, data.consumedFat, 0],
        backgroundColor: "rgba(255, 99, 132, 0.8)",
        stack: "stack2",
      },
      {
        label: "Thực sự nạp - Carb",
        data: [0, data.consumedCarb, 0],
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        stack: "stack2",
      },
      {
        label: "Tiêu hao",
        data: [0, 0, data.burned],
        backgroundColor: "rgba(255, 159, 64, 0.8)",
        stack: "stack3",
      },
    ],
  };

  const options = {
    indexAxis: "y", // Đặt 'y' để biểu đồ nằm ngang
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || "";
            const value = context.raw || 0;
            return `${label}: ${value} `;
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        max: Math.max(
          data.requiredProtein + data.requiredFat + data.requiredCarb,
          data.consumedProtein + data.consumedFat + data.consumedCarb
        ),
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="w-[450px] h-[350px]">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default GoalChart;
