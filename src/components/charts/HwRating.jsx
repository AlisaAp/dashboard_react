import React from 'react';
import Chart from "react-apexcharts";
import { Panel } from "rsuite";
import PropTypes from "prop-types";
import { useGetUsersCheckedHomeworksQuery } from "../../store/api/homeworksApi";

const defaultOptions = {
  series: [80, 10, 10],
  options: {
    chart: {
      width: 380,
      type: 'donut',
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
    },
    colors: ['#33ef4a', '#f8d727', '#f57474'],
    legend: {
      formatter(val, opts) {
        return `${val} - ${opts.w.globals.series[opts.seriesIndex]}%`;
      },
    },
    title: {
      text: 'Homeworks rating',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    }],
  },
};

function HwRating({ userId, courseId }) {
  const { data: homeworks, isLoading } = useGetUsersCheckedHomeworksQuery({
    userId, courseId,
  });
  if (isLoading) return null;
  const scoreAll = [];
  homeworks.forEach((homework) => {
    scoreAll.push(homework.score);
  });
  return (
    <Panel>
      <Chart
        options={defaultOptions.options}
        series={defaultOptions.series}
        type="donut"
        height={350}
      />
    </Panel>

  );
}

HwRating.propTypes = {
  courseId: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};
export default HwRating;
