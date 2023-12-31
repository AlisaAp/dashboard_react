import React from 'react';
import PropTypes from "prop-types";
import { Panel } from "rsuite";
import { useGetHomeworkByIdQuery } from "../../../../store/api/homeworksApi";
import HomeworkStatus from "../../../homeworks/homeworkStatus/HomeworkStatus";
import s from "./style.module.css";

function LessonsHomeworks({ courseId, homeworkId, handleClick }) {
  const { data: homework, isLoading, isError } = useGetHomeworkByIdQuery({
    courseId, homeworkId,
  });
  if (isLoading || isError) return null;
  const { title, id } = homework;

  return (
    <Panel className={s.homeworks} onClick={() => handleClick(id)}>
      <div>
        {`${id}. ${title}`}
      </div>
      <div>
        <HomeworkStatus homeworkId={homeworkId.toString()} />
      </div>
    </Panel>
  );
}

LessonsHomeworks.propTypes = {
  homeworkId: PropTypes.number.isRequired,
  courseId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default LessonsHomeworks;
