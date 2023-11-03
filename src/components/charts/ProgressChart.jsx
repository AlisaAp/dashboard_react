import React from 'react';
import Chart from "react-apexcharts";
import PropTypes from "prop-types";

const defaultOptions = {
  series: [75],
  options: {
    chart: {
      height: 350,
      type: 'radialBar',
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: 0,
        endAngle: 360,
        hollow: {
          margin: 0,
          size: '70%',
          background: '#fff',
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: 'front',
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24,
          },
        },
        track: {
          background: '#fff',
          strokeWidth: '67%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35,
          },
        },

        dataLabels: {
          show: true,
          name: {
            offsetY: -10,
            show: true,
            color: '#888',
            fontSize: '12px',
          },
          value: {
            formatter(val) {
              return parseInt(val, 10);
            },
            color: '#111',
            fontSize: '18px',
            show: true,
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: ['#ABE5A1'],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Progress'],
  },
};

function ProgressChart({ series }) {
  return (
    <Chart
      options={defaultOptions.options}
      series={series}
      type="radialBar"
      height={150}
    />
  );
}
ProgressChart.defaultProps = {
  series: [25],
};
ProgressChart.propTypes = {
  series: PropTypes.arrayOf(PropTypes.number),
};
export default ProgressChart;
