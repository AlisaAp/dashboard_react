import React from 'react';
import Chart from "react-apexcharts";
import { Panel } from "rsuite";
import PropTypes from "prop-types";
import { useGetHomeworkResultsByCourseQuery } from "../../store/api/homeworksApi";

function HomeworksRating({ userId, courseId }) {
  const { data: homeworkResults, isLoading } = useGetHomeworkResultsByCourseQuery({
    userId, courseId,
  });
  if (isLoading) return null;
  const doneHomeworks = homeworkResults.filter((item) => item.status !== '');
  const categories = homeworkResults.map((item) => item.homeworkId);
  const grades = doneHomeworks.map((item) => item.grade);

  const defaultOptions = {
    series: [{
      name: 'points',
      data: grades,
    }],
    options: {
      chart: {
        type: 'bar',
        height: 300,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
          borderRadius: 4,
        },
      },
      colors: ['#AFD2F3FF'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      grid: {
        row: {
          colors: ['#fff', '#f2f2f2'],
        },
      },
      xaxis: {
        categories,
      },
      yaxis: {
        title: {
          text: 'grade',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter(val) {
            return `${val} points`;
          },
        },
      },
    },
  };
  return (
    <Panel>
      <Chart
        options={defaultOptions.options}
        // series={checkedHomeworks.length ? series : defaultOptions.series}
        series={defaultOptions.series}
        type="bar"
        height={350}
      />
    </Panel>

  );
}

HomeworksRating.propTypes = {
  courseId: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};
export default HomeworksRating;
