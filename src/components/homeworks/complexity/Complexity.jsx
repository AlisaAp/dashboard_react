import React from 'react';
import { Progress } from "rsuite";
import PropTypes from "prop-types";
import s from "./style.module.css";

function Complexity({ complexity }) {
  const percentData = [0, 0, 0];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < complexity; i++) {
    percentData[i] = 100;
  }
  return (
    percentData.map((percent) => (
      <Progress.Line className={s.complexity} strokeWidth={6} percent={percent} showInfo={false} />
    ))
  );
}

Complexity.propTypes = {
  complexity: PropTypes.number.isRequired,
};
export default Complexity;
