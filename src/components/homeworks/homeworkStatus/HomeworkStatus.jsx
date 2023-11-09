import React from 'react';
import { Tag } from "rsuite";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import s from "../style.module.css";
import { useGetHomeworkResultByIdQuery } from "../../../store/api/homeworksApi";

function HomeworkStatus({ homeworkId }) {
  const userId = useSelector((state) => state.authentication.currentUser);
  const { data: homeworkResult, isLoading } = useGetHomeworkResultByIdQuery({
    userId, homeworkId,
  });
  if (isLoading) return null;
  const { status, grade } = homeworkResult;
  if (status === "checked") return <Tag className={s.grade} color="green">{grade}</Tag>;
  if (status === "checking") return <Tag className={s.grade} color="yellow">checking</Tag>;
  return (
    <Tag className={s.grade} color="orange">not done</Tag>
  );
}

HomeworkStatus.propTypes = {
  homeworkId: PropTypes.string.isRequired,
};
export default HomeworkStatus;
