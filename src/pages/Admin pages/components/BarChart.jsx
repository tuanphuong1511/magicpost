import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";
import { styled } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Bị hủy/trả hàng",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Giao thành công",
        data: labels.map(() => faker.datatype.number({ min: 200, max: 1000 })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <StyledBarChart options={options} data={data} />;
};

const StyledBarChart = styled(Bar)({
  "canvas": {
    display: "inline-block",
    verticalAlign: "middle",
  },
});

export default BarChart;
