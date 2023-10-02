import React from 'react';
import { Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Loader, Panel } from "rsuite";
import { useGetUsersQuery } from "../../../../store/api/usersApi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

function TotalRating() {
  const { data, isLoading } = useGetUsersQuery();
  if (isLoading) return <Loader size="lg" />;
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  const chartData = {
    labels: data.map((user) => user.userName),
    datasets: [
      {
        label: 'Js course',
        data: data.map((user) => user.averageScore),
        // borderColor: 'rgb(255, 99, 132)',
        backgroundColor: ['#FBFFDC', '#59C1BD', '#A0E4CB', '#CFF5E7', '#79E0EE'],
      },
    ],
  };
  return (
    <Panel header="Рейтинг по курсу" bordered shaded className="content-container">
      <Bar options={options} data={chartData} />
    </Panel>
  );
}

export default TotalRating;
