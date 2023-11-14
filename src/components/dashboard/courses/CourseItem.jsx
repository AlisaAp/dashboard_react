import React from 'react';
import { Button, ButtonGroup, Divider, Panel, Progress } from "rsuite";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import s from "./style.module.css";
import { setActiveCourse } from "../../../store/slices/dashboard";

function CourseItem({ course, activeCourse, clickListener }) {
  const dispatch = useDispatch();
  const { title, id, persent, startDate } = course;
  const handleClick = (courseId) => {
    dispatch(setActiveCourse(courseId));
  };
  return (
    <Panel
      className={activeCourse === id ? `${s.card} ${s.active}` : s.card}
      onClick={clickListener ? () => handleClick(id) : null}
    >
      <div className={s.header}>
        <p className={s.title}>{title}</p>
        <Divider vertical />
        <p className={s.date}>
          {startDate}
        </p>
      </div>
      <Progress.Line percent={persent} strokeColor="#F3D408" showInfo={false} className={s.progress} />
      <ButtonGroup>
        <Button
          appearance="subtle"
          as={Link}
          to={`/${title}/${id}/homeworks`}
        >
          Homeworks
        </Button>
        <Button
          appearance="subtle"
          as={Link}
          to={`/${title}/${id}/lessons`}
        >
          Lessons
        </Button>
      </ButtonGroup>
    </Panel>
  );
}

CourseItem.propTypes = {
  course: PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.string,
    persent: PropTypes.number,
    startDate: PropTypes.string,
  }),
  activeCourse: PropTypes.string.isRequired,
  clickListener: PropTypes.bool.isRequired,
};
export default CourseItem;
