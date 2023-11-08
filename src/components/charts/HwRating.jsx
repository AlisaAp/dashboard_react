import React from 'react';
import Chart from "react-apexcharts";
import { Panel } from "rsuite";
import PropTypes from "prop-types";
import { useGetHomeworkResultsByCourseQuery } from "../../store/api/homeworksApi";

function averageGrades(homeworkResults) {
  const grades = homeworkResults.map((item) => item.grade);
  // const grades = [];
  // homeworkResults.forEach((homework) => {
  //   grades.push(homework.grade);
  // });
  const gradesLength = grades.length;
  const one = grades.filter((grade) => grade < 50).length;
  const resOne = (one / gradesLength) * 100;
  const two = grades.filter((grade) => (grade >= 50 && grade < 70)).length;
  const resTwo = (two / gradesLength) * 100;
  const three = grades.filter((grade) => (grade >= 70 && grade < 85)).length;
  const resThree = (three / gradesLength) * 100;
  const fore = grades.filter((grade) => (grade >= 85 && grade < 100)).length;
  const resFore = (fore / gradesLength) * 100;
  return [resOne, resTwo, resThree, resFore];
}

const defaultOptions = {
  series: [0, 0, 0],
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
    colors: ['#f57474', '#f6b526', '#9be84e', '#25ef5d'],
    legend: {
      formatter(val, opts) {
        return `${val} - ${opts.w.globals.series[opts.seriesIndex]}%`;
      },
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
  const { data: homeworkResults, isLoading } = useGetHomeworkResultsByCourseQuery({
    userId, courseId,
  });
  if (isLoading) return null;
  const checkedHomeworks = homeworkResults.filter((item) => item.status === 'checked');
  const series = averageGrades(checkedHomeworks);
  return (
    <Panel>
      <Chart
        options={defaultOptions.options}
        series={checkedHomeworks.length ? series : defaultOptions.series}
        type="donut"
        height={350}
      />
    </Panel>

  );
}

HwRating.propTypes = {
  courseId: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
};
export default HwRating;
