import React from 'react';
import { Tag } from "rsuite";
import PropTypes from "prop-types";
import s from "../style.module.css";

function HomeworkStatus({ status, score }) {
  if (status === "checked") return <Tag className={s.score} color="green">{score}</Tag>;
  if (status === "checking") return <Tag className={s.score} color="yellow">checking</Tag>;
  return (
    <Tag className={s.score}>not done</Tag>
  );
}

HomeworkStatus.propTypes = {
  status: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
export default HomeworkStatus;
