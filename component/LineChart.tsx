import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement 
} from "chart.js";
ChartJS.register(CategoryScale);
ChartJS.register(LinearScale);
ChartJS.register(PointElement);
ChartJS.register(LineElement);

import React from "react";
import { Line } from "react-chartjs-2";

// Chuyển đổi mảng thành hai mảng riêng biệt cho trục y và trục x
type Props = {
  data: any[];
};
// Tạo một thành phần biểu đồ đường với react-chartjs-2
const LineChart = (props: Props) => {
  const yValues = props.data.map((item) => item.totalPrice);
  const xLabels = props.data.map((item) => item._id);
  return (
<Line
    data={{
      labels: xLabels,
      datasets: [
        {
          label: "Total Price",
          data: yValues,
          fill: false,
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgba(255, 99, 132, 0.2)",
        },
      ],
    }}
    options={
      {
        animation: {
          duration: 0, // general animation time
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
            position: 'top' as const,
          },
     
        },
      scales: {
        y: {
          ticks: {
            font: {
              size: 11,
            },
          },
          offset: true,
        },
        x: {
          ticks: {
            font: {
              size: 15,
            },
          },
        },
      },
      elements: {
        point: {
          radius: 2,
          borderWidth: 4,
          hoverRadius: 4,
          hoverBorderWidth: 2,
        },
      },
    }}
  />
    
  );
};

export default LineChart;
