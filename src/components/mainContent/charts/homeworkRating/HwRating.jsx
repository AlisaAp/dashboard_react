import React from 'react';
import { Panel } from "rsuite";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['0-50 баллов', '50 - 75 баллов', '75 - 100 баллов'],
  datasets: [
    {
      label: '%',
      data: [10, 20, 70],
      backgroundColor: [
        'rgba(61,132,168,0.94)',
        'rgba(70,205,207,0.94)',
        'rgba(171,237,216,0.94)',
      ],
      borderColor: [
        'rgba(61,132,168,1)',
        'rgba(70,205,207,1)',
        'rgba(171,237,216,1)',
      ],
      borderWidth: 1,
    },
  ],
};

function HwRating() {
  return (
    <Panel header="  Качество выполнения ДЗ" bordered shaded className="content-container">
      <Doughnut data={data} />

    </Panel>
  );
}

export default HwRating;
